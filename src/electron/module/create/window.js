const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {


    /*
    const template = [
        {
            label: 'Debug',
            click: () => {
                global.p3xre.mainWindow.webContents.openDevTools()
            }
        },
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    */



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
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            error: error,
            message: global.p3xre.strings.updater["error"]({
            })
        })
    })

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
    autoUpdater.on('update-downloaded', (info) => {
        global.p3xre.mainWindow.webContents.send('p3x-action', {
            action: 'toast',
            message: p3xre.strings.updater["update-downloaded"],
        })

    });

    autoUpdater.checkForUpdatesAndNotify();

}

module.exports = createWindow;
