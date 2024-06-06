process.on("unhandledRejection", (err, promise) => {
    console.error(new Date().toLocaleString(), 'unhandledRejection', err, promise);
});

process.on('uncaughtException', function (err) {
    console.error(new Date().toLocaleString(), 'uncaughtException', err);
    process.exit(-1)
});


const execAsync = async() => {
    let getPort = require('corifeus-utils').network.getPort
    let available = false;
    const maxTries = 100
    let tries = 0
    do {
        try {
            tries++
            const min = 10000
            const max = 60000
            const port = Math.floor(Math.random() * (max - min + 1) + min);
            global.p3xrsElectronPort = await getPort({
                port: port
            });
            console.log('found open port', global.p3xrsElectronPort)
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

    const { app, ipcMain, shell, globalShortcut } = require('electron')
    app.disableHardwareAcceleration()

    if ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) {
        app.commandLine.appendSwitch('remote-debugging-port', '9222')
    }
    //app.commandLine.appendSwitch('no-sandbox');

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


    globalShortcut.register('CmdOrCtrl+X', () => {
        console.log('Global shortcut CmdOrCtrl+X triggered');
        app.quit()
    });

//    ngivrSession.init();
    });

    app.on('window-all-closed', function () {
//    if (process.platform !== 'darwin') {
        app.quit();
//    }
    });

    app.on('activate', function () {
        if (global.p3xre.mainWindow === null) {
            createWindow();
        }
    });

    app.on('web-contents-created', (createEvent, contents) => {

        contents.on('new-window', newEvent => {
            console.log("Blocked by 'new-window'")
            newEvent.preventDefault();
        });

        /*
        contents.on('will-navigate', newEvent => {
            console.log("Blocked by 'will-navigate'")
            newEvent.preventDefault()
        });
         */

        contents.setWindowOpenHandler(({ url }) => {
            setImmediate(() => {
                shell.openExternal(url);
            });
            return { action: 'allow' }
        })

    });




    app.on('will-quit', () => {
        // Unregister all shortcuts
        globalShortcut.unregisterAll();
    });
}
execAsync()
