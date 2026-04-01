import { app, ipcMain, shell, globalShortcut, session } from 'electron'

process.on("unhandledRejection", (err, promise) => {
    console.error(new Date().toLocaleString(), 'unhandledRejection', err, promise);
});

process.on('uncaughtException', function (err) {
    console.error(new Date().toLocaleString(), 'uncaughtException', err);
    process.exit(-1)
});

// For Snap only: force X11 via --ozone-platform=x11 (matches Electron guidance)
try {
    const isSnap = Boolean(process.env.SNAP || process.env.SNAP_NAME);
    const userSpecifiedOzone = app.commandLine.hasSwitch('ozone-platform');
    if (isSnap && !userSpecifiedOzone) {
        app.commandLine.appendSwitch('ozone-platform', 'x11');
    }
} catch (e) {
    // best-effort; do not crash if something goes wrong here
    console.error(e);
}

const execAsync = async() => {
    const corifeusUtils = await import('corifeus-utils')
    const getPort = (corifeusUtils.default || corifeusUtils).network.getPort
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

    const bootModule = await import('p3x-redis-ui-server/dist/lib/boot.mjs')
    const boot = bootModule.default
    boot()

    await import('./electron/global.mjs');

    // Handle language change from web UI (renderer → main process)
    ipcMain.on('p3x-set-language-from-web', async (event, data) => {
        if (data?.key && global.p3xre?.setLanguage) {
            try {
                await global.p3xre.setLanguage({ key: data.key });
            } catch (e) {
                console.warn('p3xre: failed to set language from web UI', e);
            }
        }
    });

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

    const { default: createWindow } = await import('./electron/module/create/window.mjs');
    const rendererCsp = "default-src 'self'; script-src 'self' https://www.googletagmanager.com 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' http://localhost:* http://127.0.0.1:* ws://localhost:* ws://127.0.0.1:* https://www.google-analytics.com https://region1.google-analytics.com; worker-src 'self' blob:; child-src 'self' http://localhost:* http://127.0.0.1:*; object-src 'none'; base-uri 'self'; form-action 'self'";

    app.on('ready', () => {
        session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
            const isLocalUi =
                details.url.startsWith('http://localhost:') ||
                details.url.startsWith('http://127.0.0.1:')

            if (!isLocalUi || (details.resourceType !== 'mainFrame' && details.resourceType !== 'subFrame')) {
                callback({ responseHeaders: details.responseHeaders })
                return
            }

            const responseHeaders = details.responseHeaders || {}
            delete responseHeaders['content-security-policy']
            delete responseHeaders['Content-Security-Policy']
            responseHeaders['Content-Security-Policy'] = [rendererCsp]
            callback({ responseHeaders })
        })

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
            return { action: 'deny' }
        })

    });




    app.on('will-quit', () => {
        // Unregister all shortcuts
        globalShortcut.unregisterAll();
    });
}
execAsync()
