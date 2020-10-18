process.on("unhandledRejection", (err, promise) => {
    console.error(new Date().toLocaleString(), 'unhandledRejection', err, promise);
});

process.on('uncaughtException', function (err) {
    console.error(new Date().toLocaleString(), 'uncaughtException', err);
    process.exit(-1)
});

let findFreePort = require('find-port-free-sync');
let available = false;
const maxTries = 100
let tries = 0
do {
    try {
        tries++
        global.p3xrsElectronPort = findFreePort({
            start: 10000,
            end: 60000
        });
        console.log('trying open port', global.p3xrsElectronPort)
        available = true
    } catch(e) {
        console.warn(e)
    }
} while (!available && tries < maxTries)

if (!available) {
    throw new Error(`Could not find an open port by trying ${maxTries}.`)
}

const boot = require('p3x-redis-ui-server/src/lib/boot')
boot()

require('./electron/global.js');

const {app, ipcMain} = require('electron')

//app.commandLine.appendSwitch("ignore-certificate-errors");

if ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) {
    app.commandLine.appendSwitch('remote-debugging-port', '9222')
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
    app.quit()
    return
}
app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    global.p3xre.setVisible(true);
    //global.p3xre.mainWindow.webContents.reload();
})

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
