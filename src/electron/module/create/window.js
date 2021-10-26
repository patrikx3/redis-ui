const {app, BrowserWindow, Menu} = require('electron')

function createWindow() {

    require('./menu')()

    global.p3xre.mainWindow = new BrowserWindow({
        icon: global.p3xre.iconFile,
        title: global.p3xre.strings.title,
        backgroundColor: 'black',
        autoHideMenuBar: global.p3xre.optionToHideMenu,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,
            contextIsolation: false,
            nativeWindowOpen: true,
            worldSafeExecuteJavaScript: false,
//            allowRunningInsecureContent: true,
//            webSecurity: false,
        }
    });

    /*
    global.p3xre.mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        console.log('url', url)
        return { action: 'deny' }
    })
     */


    //global.p3xre.mainWindow.setAutoHideMenuBar(false)

    global.p3xre.setVisible(true);

    global.p3xre.mainWindow.loadURL(`${global.p3xre.indexHtml}?port=${global.p3xrsElectronPort}`);


    if (global.p3xre.dev) {
        global.p3xre.mainWindow.webContents.openDevTools()
    }


    //const windowBounds = global.p3xre.conf.get('window-bounds');
    const maximized = global.p3xre.conf.get('maximized');

    if (maximized === true) {
        global.p3xre.mainWindow.maximize()
    }
    /*
    else if (windowBounds !== null && windowBounds !== undefined) {
        global.p3xre.mainWindow.setBounds(windowBounds);
    }

    global.p3xre.mainWindow.on('close', () => {
        if (global.p3xre.conf.get('maximized') !== true) {
            global.p3xre.conf.set('window-bounds', global.p3xre.mainWindow.getBounds())
        }
    })
    */

    global.p3xre.mainWindow.on('maximize', () => {
        global.p3xre.conf.set('maximized', true)
    })


    global.p3xre.mainWindow.on('unmaximize', () => {
        global.p3xre.conf.set('maximized', false)

        /*
        const windowBounds = global.p3xre.conf.get('window-bounds');
        if (windowBounds !== null && windowBounds !== undefined) {
            global.p3xre.mainWindow.setBounds(windowBounds);
        }
        */
    })


    const {autoUpdater} = require("electron-updater");

    autoUpdater.on('checking-for-update', () => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: global.p3xre.strings.updater["checking-for-update"]
        })
    })
    autoUpdater.on('update-available', (info) => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: global.p3xre.strings.updater["update-available"]
        })
    })

    let firstCheck = true
    autoUpdater.on('update-not-available', (info) => {

        if (firstCheck) {
            firstCheck = false
            return
        }

        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: global.p3xre.strings.updater["update-not-available"]
        })
    })
    autoUpdater.on('error', (error) => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            error: error,
            message: global.p3xre.strings.updater["error"]({})
        })
    })


    /*
        autoUpdater.on('download-progress', (progressObj) => {
            // let log_message = "Download speed: " + progressObj.bytesPerSecond;
            // log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
            // log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';

            global.p3xre.mainWindow.webContents.send('p3x-action', {
                action: 'toast',
                message: p3xre.strings.updater["download-progress"]({
                    progressObj: progressObj,
                })
            })
        })
        */
    autoUpdater.on('update-downloaded', (info) => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: p3xre.strings.updater["update-downloaded"],
        })

    });

    autoUpdater.checkForUpdatesAndNotify();

    global.p3xre.mainWindow.webContents.on('dom-ready', () => {
        global.p3xre.mainWindow.webContents.send('p3x-set-language', {
            translation: global.p3xre.currentTranslation
        })
    })

}

module.exports = createWindow;
