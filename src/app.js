process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const boot = require('p3x-redis-ui-server/src/lib/boot')
boot()

require('./electron/global.js');


const { app, ipcMain } = require('electron')

app.commandLine.appendSwitch("ignore-certificate-errors");

if (process.env.NODE_ENV === 'development') {
    app.commandLine.appendSwitch('remote-debugging-port', '9222')
}

const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
    global.p3xre.setVisible(true);
    global.p3xre.mainWindow.webContents.reload();
})

if (isSecondInstance) {
    return app.quit()
}

const utils = require('corifeus-utils')

const createWindow = require('./electron/module/create/window');


app.on('ready', () => {
    createWindow();
//    ngivrSession.init();
});

app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (global.p3xre.mainWindow === null) {
        createWindow();
    }
});


