(async () => {
try {
const {ipcRenderer, shell} = require('electron');
const http = require('node:http');
const StoreModule = require('electron-store');
const Store = StoreModule.default || StoreModule;
const uiStateStore = new Store();

let domReady = false
let loadingOverlay
let hasSuccessfulUiLoad = false
const UI_STORAGE_KEY = 'ui-storage'

const setLoadingOverlayVisible = (visible) => {
    if (!loadingOverlay) {
        return
    }
    if (visible) {
        loadingOverlay.classList.remove('p3xre-hidden')
    } else {
        loadingOverlay.classList.add('p3xre-hidden')
    }
}

const setLoadingState = (loading) => {
    setLoadingOverlayVisible(loading)
    if (!global.p3xre || !global.p3xre.iframe) {
        return
    }
    if (loading) {
        global.p3xre.iframe.classList.add('p3xre-webview-loading')
    } else {
        global.p3xre.iframe.classList.remove('p3xre-webview-loading')
    }
}

const getStoredUiState = () => {
    const stored = uiStateStore.get(UI_STORAGE_KEY)
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) {
        return {}
    }
    return stored
}

const getUiStorageBootstrapValue = () => {
    try {
        return Buffer.from(JSON.stringify(getStoredUiState()), 'utf8').toString('base64url')
    } catch (e) {
        console.warn('p3xre: could not encode iframe UI storage bootstrap', e)
        return ''
    }
}

const getIframeUrlWithUiState = (baseUrl) => {
    try {
        const url = new URL(baseUrl)
        const bootstrap = getUiStorageBootstrapValue()
        if (bootstrap) {
            url.searchParams.set('p3xreUiStorage', bootstrap)
        }
        return url.toString()
    } catch (e) {
        console.warn('p3xre: could not append iframe UI storage bootstrap to url', e)
        return baseUrl
    }
}

const syncIframeUiState = () => {
    if (!global.p3xre || !global.p3xre.iframe) {
        return
    }
    try {
        global.p3xre.iframe.name = JSON.stringify({
            p3xreUiStorage: getStoredUiState(),
        })
    } catch (e) {
        console.warn('p3xre: could not sync iframe UI storage bootstrap', e)
    }
}

let p3xSetLanguageWaiter
ipcRenderer.on('p3x-set-language', (event, data) => {
    const callMe = async () => {
        if (domReady === false) {
            clearTimeout(p3xSetLanguageWaiter)
            p3xSetLanguageWaiter = setTimeout(callMe, 250)
            return;
        }
        const translation = data.translation
        const stringsModule = await import(`../../../strings/${translation}/index.mjs`)
        global.p3xre.strings = stringsModule.default
        global.p3xre.iframe.contentWindow.postMessage({ type: 'p3x-set-language', translation: translation }, '*')
    }
    callMe()
})


ipcRenderer.on('p3x-menu', function (event, data) {
    global.p3xre.iframe.contentWindow.postMessage({ type: 'p3x-menu', action: data.action }, '*')
})

ipcRenderer.on('p3x-new-window', function (event, data) {
    shell.openExternal(data.url)
})

// Listen for theme changes from the Angular app (iframe) to sync dark mode on the shell
window.addEventListener('message', (event) => {
    const fromIframe = Boolean(global.p3xre?.iframe?.contentWindow) && event.source === global.p3xre.iframe.contentWindow

    if (event.data?.type === 'p3x-theme-change') {
        if (!fromIframe) {
            return
        }
        document.body.classList.remove('p3xr-theme-dark', 'p3xr-theme-light')
        document.body.classList.add(event.data.dark ? 'p3xr-theme-dark' : 'p3xr-theme-light')
        return
    }

    if (event.data?.type === 'p3x-ui-storage-set') {
        if (!fromIframe || typeof event.data.key !== 'string' || typeof event.data.value !== 'string') {
            return
        }

        const uiState = getStoredUiState()
        uiState[event.data.key] = event.data.value
        uiStateStore.set(UI_STORAGE_KEY, uiState)
        syncIframeUiState()

        // If language changed from the web UI, tell main process to update menus
        if (event.data.key === 'p3xr-language') {
            ipcRenderer.send('p3x-set-language-from-web', { key: event.data.value })
        }

        // If frontend preference changed, also set top-level key so it persists across restarts
        if (event.data.key === 'p3xr-frontend') {
            uiStateStore.set('p3xr-frontend', event.data.value)
        }
    }
})


const pkg = require('../../../../package.json')
const enStrings = await import('../../../strings/en/index.mjs')

global.p3xre = {
    iframe: undefined,
    pkg: pkg,
    strings: enStrings.default
}

const { p3xToast } = await import('./ui.mjs')
global.p3xre.toast = p3xToast

ipcRenderer.on('p3x-action', function (event, data) {
    switch (data.action) {
        case 'toast':
            p3xre.toast.action(data.message)
            break;
    }
})

const isLocalHttpAvailable = (port, timeoutMs = 800, host = '127.0.0.1') => {
    return new Promise((resolve) => {
        let settled = false
        const done = (value) => {
            if (settled) {
                return
            }
            settled = true
            resolve(value)
        }

        const request = http.request({
            host: host,
            port: port,
            path: '/',
            method: 'GET',
        }, () => {
            done(true)
            request.destroy()
        })

        request.on('error', () => {
            done(false)
        })

        request.setTimeout(timeoutMs, () => {
            request.destroy()
            done(false)
        })

        request.end()
    })
}

window.p3xreRun = async function () {

    document.title = `${p3xre.strings.title} v${p3xre.pkg.version}`
    try {
        global.p3xre.iframe = document.getElementById("p3xre-redis-ui-electron");
        loadingOverlay = document.getElementById('p3xre-loading-overlay')
        setLoadingState(true)
        syncIframeUiState()

        const urlParams = new URLSearchParams(global.location.search)
        const port = urlParams.get('port')
        const localServerHosts = ['127.0.0.1', 'localhost']
        const getLocalServerUrl = (host) => `http://${host}:${port}`
        let currentLocalServerHostIndex = 0
        const getCurrentLocalServerUrl = () => getLocalServerUrl(localServerHosts[currentLocalServerHostIndex])
        const devServerUrl = 'http://localhost:8080'
        const isDev = process.env.hasOwnProperty('NODE_ENV') && process.env.NODE_ENV === 'development'
        const maxWaitRetries = 120
        const waitRetryDelayMs = 500

        // Wait for the local HTTP server to become available before loading the iframe.
        const waitForServer = async (targetUrl) => {
            for (let i = 0; i < maxWaitRetries; i++) {
                for (const host of localServerHosts) {
                    const available = await isLocalHttpAvailable(port, 800, host)
                    if (available) {
                        currentLocalServerHostIndex = localServerHosts.indexOf(host)
                        return getCurrentLocalServerUrl()
                    }
                }
                await new Promise((r) => setTimeout(r, waitRetryDelayMs))
            }
            // Fall back to the target even if not confirmed available
            return targetUrl
        }

        global.p3xre.iframe.addEventListener('load', function () {
            domReady = true
            const iframeSrc = global.p3xre.iframe.src || ''
            if (iframeSrc === 'about:blank') {
                return
            }
            hasSuccessfulUiLoad = true
            setLoadingState(false)
            ipcRenderer.send('p3x-iframe-ready')
        })

        let serverUrl
        if (isDev) {
            console.log('development mode')
            const devServerAvailable = await isLocalHttpAvailable(8080)
            if (devServerAvailable) {
                serverUrl = devServerUrl
            } else {
                console.warn('Dev server http://localhost:8080 is not running, waiting for local server...')
                serverUrl = await waitForServer(getCurrentLocalServerUrl())
            }
        } else {
            serverUrl = await waitForServer(getCurrentLocalServerUrl())
        }

        // Append /react/ or /ng/ based on stored frontend preference
        const frontendPref = uiStateStore.get('p3xr-frontend', 'ng')
        const frontendPath = frontendPref === 'react' ? '/react/' : '/ng/'
        global.p3xre.iframe.src = getIframeUrlWithUiState(serverUrl + frontendPath)

    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}

if (document.readyState === 'complete') {
    window.p3xreRun()
} else {
    window.addEventListener('load', () => {
        window.p3xreRun()
    })
}

} catch(e) {
    console.error('p3xre: fatal error in onload.mjs', e)
}
})();
