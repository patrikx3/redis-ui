const { dialog, Menu } = require('electron')
const { shell, app } = require('electron')


function mainMenu() {


    const template = [
        {
            label: global.p3xre.strings.title,
            submenu: [
                {
                    label: global.p3xre.strings.menu.main.quit,
                    click: () => {
                        app.quit()
                    }
                }
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
            submenu: [
            ]
        },
        {
            role: 'help',
            submenu: [

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

    const languageIndex = template.length - 1 - 2
    for(let translationKey of Object.keys(global.p3xre.strings.menu.language.translation)) {
        const clickFunction = (key) => {
            return () => {
                global.p3xre.currentTranslation = key;
                global.p3xre.conf.set('current-translation', key)
                global.p3xre.strings = require('../../../strings/' + key)
                global.p3xre.mainWindow.webContents.send('p3x-set-language', {
                    translation: key
                })
                //console.warn('set language', key)
                mainMenu()
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
