const {dialog, Menu} = require('electron')
const {shell, app, globalShortcut} = require('electron')


function mainMenu() {


    const template = [
        {
            label: global.p3xre.strings.title,
            submenu: [
                {
                    label: global.p3xre.strings.menu.main.home,
                    click: () => {
                        global.p3xre.mainWindow.webContents.send('p3x-menu', {
                            action: 'main.statistics'
                        })
                    }
                },
                {
                    label: global.p3xre.strings.menu.main.console,
                    click: () => {
                        global.p3xre.mainWindow.webContents.send('p3x-menu', {
                            action: 'console'
                        })
                    }
                },
                {
                    label: global.p3xre.strings.menu.main.settings,
                    click: () => {
                        global.p3xre.mainWindow.webContents.send('p3x-menu', {
                            action: 'settings'
                        })
                    }
                },
                /*
                {
                    label: global.p3xre.strings.menu.main.overview,
                    click: () => {
                        global.p3xre.mainWindow.webContents.send('p3x-menu', {
                            action: 'overview'
                        })
                    }
                },
                */
                {type: 'separator'},
                {
                    label: global.p3xre.strings.menu.main.quit,
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => {
                        app.quit()
                    }
                },
            ],
        },
        {
            label: global.p3xre.strings.menu.edit.title,
            submenu: [
                {type: 'separator'},
                {
                    label: global.p3xre.strings.menu.edit.undo,
                    role: 'undo'
                },
                {
                    label: global.p3xre.strings.menu.edit.redo,
                    role: 'redo'
                },
                {type: 'separator'},
                {
                    label: global.p3xre.strings.menu.edit.cut,
                    role: 'cut'
                },
                {
                    label: global.p3xre.strings.menu.edit.copy,
                    role: 'copy'
                },
                {
                    label: global.p3xre.strings.menu.edit.paste,
                    role: 'paste'
                },
                {
                    label: global.p3xre.strings.menu.edit.pasteandmatchstyle,
                    role: 'pasteandmatchstyle'
                },
                {
                    label: global.p3xre.strings.menu.edit.delete,
                    role: 'delete'
                },
                {
                    label: global.p3xre.strings.menu.edit.selectall,
                    role: 'selectall'
                }
            ]
        },

        {
            label: global.p3xre.strings.menu.view.title,
            submenu: [
                {
                    label: global.p3xre.strings.menu.view.reload,
                    role: 'reload'
                },
                {
                    label: global.p3xre.strings.menu.view.forcereload,
                    role: 'forcereload'
                },
                {
                    label: global.p3xre.strings.menu.view.toggledevtools,
                    role: 'toggledevtools'
                },
                {type: 'separator'},
                {
                    label: global.p3xre.strings.menu.view.resetzoom,
                    role: 'resetzoom'
                },
                {
                    label: global.p3xre.strings.menu.view.zoomin,
                    role: 'zoomin'
                },
                {
                    label: global.p3xre.strings.menu.view.zoomout,
                    role: 'zoomout'
                },
                {type: 'separator'},
                {
                    label: global.p3xre.strings.menu.view.togglefullscreen,
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: global.p3xre.strings.menu.language.title,
            submenu: []
        },
        {
            label: global.p3xre.strings.menu.settings.title,
            submenu: [
                {
                    label: global.p3xre.strings.menu.settings.hideMenu,
                    type: 'checkbox',
                    checked: global.p3xre.optionToHideMenu,
                    click: () => {
                        try {

                            global.p3xre.optionToHideMenu = !global.p3xre.optionToHideMenu
                            global.p3xre.conf.set('option-to-hide-menu', global.p3xre.optionToHideMenu,);

                            if (!global.p3xre.optionToHideMenu) {
                                global.p3xre.mainWindow.setAutoHideMenuBar(false)
                                global.p3xre.mainWindow.setMenuBarVisibility(true)
                            } else {
                                const message = `
${global.p3xre.strings.menu.settings.optionToHideMenuState.yes}

${global.p3xre.strings.message.restart}
`

                                dialog.showMessageBox( global.p3xre.mainWindow, {
                                    type: 'info',
//                                title: global.p3x.onenote.lang.dialog.minimizationBehavior.title,
                                    message: message,
                                    buttons: [global.p3xre.strings.button.ok]
                                }).then(() => {
                                    require('../../../lib/relaunch')()
                                }).catch(e => console.error(e))

                            }


                        } catch(e) {
                            console.error(e)
                        }
                    }
                },
            ]
        },
        {
            role: 'help',
            submenu: [

                {
                    label: global.p3xre.strings.menu.help.changelog,
                    click: () => {
                        shell.openExternal('https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log')
                    }
                },

                {
                    label: global.p3xre.strings.menu.help.download,
                    click: () => {
                        shell.openExternal('https://github.com/patrikx3/redis-ui/releases')
                    }
                },
                {
                    label: 'GitHub',
                    click: () => {
                        shell.openExternal('https://github.com/patrikx3/redis-ui/')
                    }
                },
                {
                    label: global.p3xre.strings.menu.help.developer,
                    click: () => {
                        shell.openExternal('https://patrikx3.com')
                    }
                },
                {
                    label: 'P3X',
                    click: () => {
                        shell.openExternal('https://github.com/patrikx3')
                    }
                },
                {
                    label: 'Corifeus',
                    click: () => {
                        shell.openExternal('https://corifeus.com')
                    }
                },
                {
                    label: 'NPM',
                    click: () => {
                        shell.openExternal('https://www.npmjs.com/package/p3x-redis-ui')
                    }
                },
                {type: 'separator'},
                {
                    label: global.p3xre.strings.menu.help.checkUpdates,
                    click: () => {
                        const {autoUpdater} = require("electron-updater");
                        autoUpdater.checkForUpdatesAndNotify();
                    }
                }
            ]
        },
        {
            label: global.p3xre.strings.menu.donate.title,
            click: () => {
                shell.openExternal('https://paypal.me/patrikx3')
            }
        },
    ]

    const languageIndex = template.length - 1 - 3
    for (let translationKey of Object.keys(global.p3xre.strings.menu.language.translation)) {
        const clickFunction = (key) => {
            return () => {

                require('../../../lib/set-language')({
                    key: key
                })
                global.p3xre.mainWindow.webContents.send('p3x-set-language', {
                    translation: key
                })
            }
        }
        template[languageIndex].submenu.push({
            label: global.p3xre.strings.menu.language.translation[translationKey],
            type: 'radio',
            checked: global.p3xre.currentTranslation === translationKey,
            click: clickFunction(translationKey)
        })
    }

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

}

module.exports = mainMenu;
