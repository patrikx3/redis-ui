const {ipcRenderer, shell} = require('electron');
const http = require('node:http');


let domReady = false
let loadingOverlay

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

let p3xSetLanguageWaiter
ipcRenderer.on('p3x-set-language', (event, data) => {
    const callMe = () => {
        if (domReady === false) {
            clearTimeout(p3xSetLanguageWaiter)
            setTimeout(callMe, 250)
            return;
        }
        const translation = data.translation
        //console.warn('p3x-set-language', data)
        global.p3xre.strings = require('../../../strings/' + translation + '/index')
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

global.p3xre = {
    webview: undefined,
    pkg: require('../../../../package'),
    strings: require('../../../strings/en/index')
};

require('./angular')

const isLocalHttpAvailable = (port, timeoutMs = 800) => {
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
            host: '127.0.0.1',
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
        setLoadingOverlayVisible(true)

        //global.p3xre.webview.src = 'http://localhost:7844';

        global.p3xre.webview.addEventListener("dom-ready", function () {
            domReady = true
            if (process.env.hasOwnProperty('NODE_ENV') && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) {
                global.p3xre.webview.openDevTools();
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
        const localServerUrl = 'http://localhost:' + port
        const devServerUrl = 'http://localhost:8080'
        const isDev = process.env.hasOwnProperty('NODE_ENV') && process.env.NODE_ENV === 'development'
        const retryableLoadErrors = new Set([-102, -105, -106, -118])
        const maxLocalServerLoadRetries = 60
        const localServerLoadRetryDelayMs = 500
        let localServerLoadRetries = 0
        let localServerLoadRetryTimer

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
                    localServerUrl: localServerUrl,
                    retries: localServerLoadRetries,
                })
                return
            }

            localServerLoadRetries += 1
            clearLocalServerLoadRetryTimer()
            localServerLoadRetryTimer = setTimeout(async() => {
                const localServerAvailable = await isLocalHttpAvailable(port)
                if (localServerAvailable) {
                    console.warn('local webview retry succeeded', {
                        localServerUrl: localServerUrl,
                        retries: localServerLoadRetries,
                    })
                    global.p3xre.webview.src = localServerUrl
                    return
                }
                scheduleLocalServerRetry()
            }, localServerLoadRetryDelayMs)
        }

        global.p3xre.webview.addEventListener('did-fail-load', function (event) {
            setLoadingOverlayVisible(true)
            const currentSrc = global.p3xre.webview.src || ''
            const isDevSource = currentSrc.startsWith(devServerUrl)
            const isLocalSource = currentSrc.startsWith(localServerUrl)

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
                console.warn('Dev server unavailable, switching webview to', localServerUrl)
                global.p3xre.webview.src = localServerUrl
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
            if (currentSrc.startsWith(localServerUrl) || currentSrc.startsWith(devServerUrl)) {
                setLoadingOverlayVisible(false)
            }
            clearLocalServerLoadRetryTimer()
        })

        if (isDev) {
            console.log('development mode')
            const devServerAvailable = await isLocalHttpAvailable(8080)
            global.p3xre.webview.src = devServerAvailable ? devServerUrl : localServerUrl
            if (!devServerAvailable) {
                console.warn('Dev server http://localhost:8080 is not running, using', localServerUrl)
            }
        } else {
            global.p3xre.webview.src = localServerUrl
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
