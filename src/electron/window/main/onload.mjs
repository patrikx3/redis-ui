const {ipcRenderer, shell} = require('electron');
const http = require('node:http');


let domReady = false
let loadingOverlay
let hasSuccessfulUiLoad = false
let shellAutoReloadTimer
const shellAutoReloadDelayMs = 3000
const shellAutoReloadMaxAttempts = 1
const shellAutoReloadAttemptKey = 'p3xre-shell-auto-reload-attempt'

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
    if (!global.p3xre || !global.p3xre.webview) {
        return
    }
    if (loading) {
        global.p3xre.webview.classList.add('p3xre-webview-loading')
    } else {
        global.p3xre.webview.classList.remove('p3xre-webview-loading')
    }
}

const clearShellAutoReloadTimer = () => {
    if (!shellAutoReloadTimer) {
        return
    }
    clearTimeout(shellAutoReloadTimer)
    shellAutoReloadTimer = undefined
}

let p3xSetLanguageWaiter
ipcRenderer.on('p3x-set-language', (event, data) => {
    const callMe = async () => {
        if (domReady === false) {
            clearTimeout(p3xSetLanguageWaiter)
            setTimeout(callMe, 250)
            return;
        }
        const translation = data.translation
        //console.warn('p3x-set-language', data)
        const stringsModule = await import(`../../../strings/${translation}/index.mjs`)
        global.p3xre.strings = stringsModule.default
        // global.p3xre.webview.getWebContents().executeJavaScript is different!!! - getWebContents deprecated, removed
        global.p3xre.webview.executeJavaScript(`window.p3xrBooter=(()=>{void 0===window.p3xrSetLanguage?setTimeout(()=>{window.p3xrBooter()},500):window.p3xrSetLanguage("${translation}")}),window.p3xrBooter();`)
    }
    callMe()

    /*
    window.p3xrBooter = () => {
        console.log('p3xr booting ...');
        if (window.p3xrSetLanguage === undefined) {
            setTimeout(() => {
                window.p3xrBooter();
            }, 500);
        } else {
            window.p3xrSetLanguage('translation');
        }
    };
    window.p3xrBooter();
    */
})


ipcRenderer.on('p3x-menu', function (event, data) {
    global.p3xre.webview.executeJavaScript(`window.p3xrMenu=(()=>{console.log("p3xr menu booting ..."),void 0===window.p3xrSetMenu?setTimeout(()=>{window.p3xrMenu()},500):window.p3xrSetMenu("${data.action}")}),window.p3xrMenu();`)
    /*
    window.p3xrMenu = () => {
        console.log('p3xr menu booting ...');
        if (window.p3xrSetMenu === undefined) {
            setTimeout(() => {
                window.p3xrMenu();
            }, 500);
        } else {
            window.p3xrSetMenu('menu');
        }
    };
    window.p3xrMenu();
    */
})

ipcRenderer.on('p3x-new-window', function (event, data) {
    shell.openExternal(data.url)
})


ipcRenderer.on('p3x-action', function (event, data) {
    switch (data.action) {
        case 'toast':
            p3xre.toast.action(data.message)
            break;
    }
})

const pkg = require('../../../../package.json')
const enStrings = await import('../../../strings/en/index.mjs')

global.p3xre = {
    webview: undefined,
    pkg: pkg,
    strings: enStrings.default
};

await import('./angular.mjs')

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
        global.p3xre.webview = document.getElementById("p3xre-redis-ui-electron");
        loadingOverlay = document.getElementById('p3xre-loading-overlay')
        setLoadingState(true)

        //global.p3xre.webview.src = 'http://localhost:7844';

        global.p3xre.webview.addEventListener("dom-ready", function () {
            domReady = true
            if (process.env.hasOwnProperty('NODE_ENV') && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) {
                global.p3xre.webview.openDevTools();
            }
        })

        global.p3xre.webview.addEventListener('did-start-loading', function () {
            // Keep shell loader for initial boot only; Angular route changes can also emit this.
            if (!hasSuccessfulUiLoad) {
                setLoadingState(true)
            }
        })



        // must to remove this code

        /*
        global.p3xre.webview.addEventListener('new-window', function (event) {

            event.preventDefault()
            shell.openExternal(event.url)

        });
         */

        const urlParams = new URLSearchParams(global.location.search)
        const port = urlParams.get('port')
        const localServerHosts = ['127.0.0.1', 'localhost']
        const getLocalServerUrl = (host) => `http://${host}:${port}`
        const isLocalServerUrl = (url) => localServerHosts.some((host) => url.startsWith(getLocalServerUrl(host)))
        let currentLocalServerHostIndex = 0
        const getCurrentLocalServerUrl = () => getLocalServerUrl(localServerHosts[currentLocalServerHostIndex])
        const reloadWebviewTo = (targetUrl) => {
            const currentSrc = global.p3xre.webview.src || ''
            if (currentSrc.startsWith(targetUrl)) {
                if (typeof global.p3xre.webview.reloadIgnoringCache === 'function') {
                    global.p3xre.webview.reloadIgnoringCache()
                } else {
                    const separator = targetUrl.includes('?') ? '&' : '?'
                    global.p3xre.webview.src = `${targetUrl}${separator}_p3xre_reload=${Date.now()}`
                }
                return
            }
            global.p3xre.webview.src = targetUrl
        }
        const devServerUrl = 'http://localhost:8080'
        const isDev = process.env.hasOwnProperty('NODE_ENV') && process.env.NODE_ENV === 'development'
        const retryableLoadErrors = new Set([-102, -105, -106, -118])
        const maxLocalServerLoadRetries = 60
        const localServerLoadRetryDelayMs = 500
        let localServerLoadRetries = 0
        let localServerLoadRetryTimer
        const scheduleShellAutoReload = () => {
            clearShellAutoReloadTimer()
            shellAutoReloadTimer = setTimeout(() => {
                if (hasSuccessfulUiLoad) {
                    return
                }
                const currentAttempt = Number(sessionStorage.getItem(shellAutoReloadAttemptKey) || '0')
                if (currentAttempt >= shellAutoReloadMaxAttempts) {
                    console.error('webview still not loaded after shell auto reload attempt', {
                        attempts: currentAttempt,
                    })
                    return
                }
                const nextAttempt = currentAttempt + 1
                sessionStorage.setItem(shellAutoReloadAttemptKey, String(nextAttempt))
                console.warn('webview still loading, reloading shell', {
                    attempt: nextAttempt,
                    maxAttempts: shellAutoReloadMaxAttempts,
                    delayMs: shellAutoReloadDelayMs,
                })
                global.location.reload()
            }, shellAutoReloadDelayMs)
        }

        const clearLocalServerLoadRetryTimer = () => {
            if (!localServerLoadRetryTimer) {
                return
            }
            clearTimeout(localServerLoadRetryTimer)
            localServerLoadRetryTimer = undefined
        }

        const scheduleLocalServerRetry = () => {
            if (localServerLoadRetries >= maxLocalServerLoadRetries) {
                console.error('local webview load failed: max retries reached', {
                    localServerUrl: getCurrentLocalServerUrl(),
                    retries: localServerLoadRetries,
                })
                return
            }

            localServerLoadRetries += 1
            clearLocalServerLoadRetryTimer()
            localServerLoadRetryTimer = setTimeout(async() => {
                const preferredHost = localServerHosts[currentLocalServerHostIndex]
                const hostsToTry = [preferredHost, ...localServerHosts.filter((host) => host !== preferredHost)]
                for (const host of hostsToTry) {
                    const localServerAvailable = await isLocalHttpAvailable(port, 800, host)
                    if (!localServerAvailable) {
                        continue
                    }
                    currentLocalServerHostIndex = localServerHosts.indexOf(host)
                    const activeLocalServerUrl = getCurrentLocalServerUrl()
                    console.warn('local webview retry succeeded', {
                        localServerUrl: activeLocalServerUrl,
                        retries: localServerLoadRetries,
                    })
                    if (!hasSuccessfulUiLoad) {
                        reloadWebviewTo(activeLocalServerUrl)
                    }
                    return
                }
                scheduleLocalServerRetry()
            }, localServerLoadRetryDelayMs)
        }

        global.p3xre.webview.addEventListener('console-message', function (event) {
            console.log('webview console', {
                level: event.level,
                message: event.message,
                line: event.line,
                sourceId: event.sourceId,
            })

            // The app emits this when socket init is complete; treat it as a reliable UI-ready signal.
            if (typeof event.message === 'string' && event.message.includes('p3xr-socket (socket) connected')) {
                hasSuccessfulUiLoad = true
                sessionStorage.removeItem(shellAutoReloadAttemptKey)
                setLoadingState(false)
                clearLocalServerLoadRetryTimer()
                clearShellAutoReloadTimer()
            }
        })

        global.p3xre.webview.addEventListener('did-fail-load', function (event) {
            // Subresource failures should not trigger shell fallback/reload logic.
            if (event && event.isMainFrame === false) {
                return
            }

            setLoadingState(true)
            scheduleShellAutoReload()
            const currentSrc = global.p3xre.webview.src || ''
            const isDevSource = currentSrc.startsWith(devServerUrl)
            const isLocalSource = isLocalServerUrl(currentSrc)

            if (!retryableLoadErrors.has(event.errorCode)) {
                console.error('webview load failed (non-retryable)', {
                    errorCode: event.errorCode,
                    errorDescription: event.errorDescription,
                    validatedURL: event.validatedURL,
                    currentSrc: currentSrc,
                })
                return
            }

            if (isDev && isDevSource) {
                const activeLocalServerUrl = getCurrentLocalServerUrl()
                console.warn('Dev server unavailable, switching webview to', activeLocalServerUrl)
                reloadWebviewTo(activeLocalServerUrl)
                scheduleLocalServerRetry()
                return
            }

            if (isLocalSource) {
                console.warn('local webview load failed, retrying', {
                    errorCode: event.errorCode,
                    errorDescription: event.errorDescription,
                    validatedURL: event.validatedURL,
                    retry: localServerLoadRetries + 1,
                    maxRetries: maxLocalServerLoadRetries,
                })
                scheduleLocalServerRetry()
            }
        })

        global.p3xre.webview.addEventListener('did-finish-load', function () {
            const currentSrc = global.p3xre.webview.src || ''
            const actualUrl = typeof global.p3xre.webview.getURL === 'function'
                ? (global.p3xre.webview.getURL() || '')
                : ''
            const loadedUrl = actualUrl || currentSrc
            const isErrorPage = loadedUrl.startsWith('chrome-error://')
            const isUiLoaded = (isLocalServerUrl(loadedUrl) || loadedUrl.startsWith(devServerUrl)) && !isErrorPage

            if (!isUiLoaded) {
                console.warn('webview finished load but UI is not ready', {
                    currentSrc: currentSrc,
                    loadedUrl: loadedUrl,
                    isErrorPage: isErrorPage,
                })
                return
            }

            hasSuccessfulUiLoad = true
            sessionStorage.removeItem(shellAutoReloadAttemptKey)
            setLoadingState(false)
            clearLocalServerLoadRetryTimer()
            clearShellAutoReloadTimer()
        })

        if (isDev) {
            console.log('development mode')
            const devServerAvailable = await isLocalHttpAvailable(8080)
            global.p3xre.webview.src = devServerAvailable ? devServerUrl : getCurrentLocalServerUrl()
            scheduleShellAutoReload()
            if (!devServerAvailable) {
                console.warn('Dev server http://localhost:8080 is not running, using', getCurrentLocalServerUrl())
                scheduleLocalServerRetry()
            }
        } else {
            global.p3xre.webview.src = getCurrentLocalServerUrl()
            scheduleLocalServerRetry()
            scheduleShellAutoReload()
        }


    } catch (e) {
        console.error(e);
        alert(e.message);
    }
    /*
    const events = [
//        'did-finish-load',
        'did-fail-load',
//        'did-frame-finish-load',
        'did-start-loading',
//        'did-stop-loading',
//        'did-get-response-details',
        'did-get-redirect-request',
        'did-get-redirect-request',
//        'dom-ready',
//        'page-favicon-updated',
        'new-window',
        'will-navigate',
        'did-navigate',
        'did-navigate-in-page',
        'will-prevent-unload',
        'crashed',
        'plugin-crashed',
        'destroyed',
        'before-input-event',
        'devtools-opened',
        'devtools-closed',
        'devtools-focused',
        'certificate-error',
        'select-client-certificate',
        'login',
        'found-in-page',
        'media-started-playing',
        'media-paused',
        'did-change-theme-color',
//        'update-target-url',
        'cursor-changed',
        'context-menu',
        'select-bluetooth-device',
        'paint',
        'devtools-reload-page',
        'will-attach-webview',
        'did-attach-webview',
//        'console-message',
    ]

    events.forEach(event => {
        webview.addEventListener(event, function() {
            console.groupCollapsed(`NGIVR-ELECTRON-EVENT: ${event}`)
            console.log(arguments);
            console.groupEnd();
        })
    })
*/

}

window.addEventListener('load', () => {
    window.p3xreRun()
})
