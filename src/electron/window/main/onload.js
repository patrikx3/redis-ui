const {ipcRenderer} = require('electron');


let domReady = false

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

window.p3xreRun = async function () {


    document.title = `${p3xre.strings.title} v${p3xre.pkg.version}`
    try {
        global.p3xre.webview = document.getElementById("p3xre-redis-ui-electron");

        //global.p3xre.webview.src = 'http://localhost:7844';

        global.p3xre.webview.addEventListener("dom-ready", async function () {
            domReady = true
            if (process.env.hasOwnProperty('NODE_ENV') && process.env.NODE_ENV === 'development') {
                global.p3xre.webview.openDevTools();
            }
        })

        if (process.env.hasOwnProperty('NODE_ENV') && process.env.NODE_ENV === 'development') {
            console.log('development mode')
            global.p3xre.webview.src = 'http://localhost:8080';
//            global.p3xre.webview.src = 'https://patrikx3.com';
//            console.log(global.p3xre.webview)
//            console.log(global.p3xre.webview.src)
        } else {
            global.p3xre.webview.src = 'http://localhost:7844';
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
