const { app, BrowserWindow } = require('electron')

function createWindow() {

    global.p3xre.mainWindow = new BrowserWindow({
        icon: global.p3xre.iconFile,
        title: global.p3xre.strings.title,
        backgroundColor: 'black',
    });


    global.p3xre.setVisible(true);

    global.p3xre.mainWindow.loadURL(global.p3xre.indexHtml);

    if (global.p3xre.dev) {
        global.p3xre.mainWindow.webContents.openDevTools()
    }

    /*
    global.ngivr.mainWindow.on('minimize', function (event) {
        event.preventDefault()
        global.p3xre.setVisible(false);
    });

    global.ngivr.mainWindow.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault()
            global.p3xre.setVisible(false);
        }
        return false;
    });
    */

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
    autoUpdater.on('update-not-available', (info) => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: global.p3xre.strings.updater["update-not-available"]
        })
    })
    autoUpdater.on('error', (error) => {
        console.error(error)
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            error: error,
            message: global.p3xre.strings.updater["error"]({
                errorMessage: error.message
            })
        })
    })

    autoUpdater.on('download-progress', (progressObj) => {
        /*
        let log_message = "Download speed: " + progressObj.bytesPerSecond;
        log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
        log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
        */
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: p3xre.strings.updater["download-progress"]({
                progressObj: progressObj,
            })
        })
    })
    autoUpdater.on('update-downloaded', (info) => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: p3xre.strings.updater["update-downloaded"],
        })

    });
    autoUpdater.checkForUpdatesAndNotify();
    
}

module.exports = createWindow;
