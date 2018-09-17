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
}

module.exports = createWindow;
