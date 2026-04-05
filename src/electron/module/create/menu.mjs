import { dialog, Menu, shell, app, globalShortcut } from 'electron'
import Store from 'electron-store'

const uiStateStore = new Store()

function switchFrontend(frontend) {
    uiStateStore.set('p3xr-frontend', frontend)
    global.p3xre.iframeReady = false
    global.p3xre.mainWindow.loadURL(`${global.p3xre.indexHtml}?port=${global.p3xrsElectronPort}`)
}

async function mainMenu() {

    const currentFrontend = uiStateStore.get('p3xr-frontend', 'ng')

    const template = [
        {
            label: global.p3xre.strings.title,
            submenu: [
                {
                    label: global.p3xre.strings.menu.main.home,
                    submenu: [
                        {
                            label: 'Angular',
                            type: 'radio',
                            checked: currentFrontend !== 'react',
                            click: () => switchFrontend('ng'),
                        },
                        {
                            label: 'React',
                            type: 'radio',
                            checked: currentFrontend === 'react',
                            click: () => switchFrontend('react'),
                        },
                    ],
                },
                {
                    label: global.p3xre.strings.menu.main.settings,
                    submenu: [
                        {
                            label: 'Angular',
                            click: () => {
                                global.p3xre.mainWindow.webContents.send('p3x-menu', {
                                    action: 'settings'
                                })
                            },
                        },
                        {
                            label: 'React',
                            click: () => {
                                switchFrontend('react')
                            },
                        },
                    ],
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
        ...(global.p3xre.iframeReady ? [{
            label: global.p3xre.strings.menu.language.title,
            submenu: []
        }] : []),
        {
            label: global.p3xre.strings.menu.settings.title,
            submenu: [
                {
                    label: global.p3xre.strings.menu.settings.hideMenu,
                    type: 'checkbox',
                    checked: global.p3xre.optionToHideMenu,
                    click: async () => {
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
                                }).then(async () => {
                                    const { default: relaunch } = await import('../../../lib/relaunch.mjs')
                                    relaunch()
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
                    click: async () => {
                        const electronUpdater = await import('electron-updater')
                        const autoUpdater = electronUpdater.default ? electronUpdater.default.autoUpdater : electronUpdater.autoUpdater
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

    // Find the Language menu entry by its empty submenu (only present when iframe is ready)
    const languageEntry = template.find(t => t.submenu && Array.isArray(t.submenu) && t.submenu.length === 0)
    if (!languageEntry) {
        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
        return
    }
    // Auto option at top
    const isAuto = global.p3xre.currentTranslation === 'auto'
    languageEntry.submenu.push({
        label: global.p3xre.strings.menu?.language?.auto || 'Auto (system)',
        type: 'radio',
        checked: isAuto,
        click: async () => {
            await global.p3xre.setLanguage({ key: 'auto' })
            global.p3xre.mainWindow.webContents.send('p3x-set-language', {
                translation: global.p3xre.resolvedTranslation
            })
        }
    })
    // Always use English translation list for native language names
    const enStrings = (await import('../../../strings/en/index.mjs')).default
    const languageList = enStrings.menu.language.translation
    for (let translationKey of Object.keys(languageList)) {
        const clickFunction = (key) => {
            return async () => {
                await global.p3xre.setLanguage({
                    key: key
                })
                global.p3xre.mainWindow.webContents.send('p3x-set-language', {
                    translation: key
                })
            }
        }
        const menuLabel = languageList[translationKey] || translationKey
        languageEntry.submenu.push({
            label: menuLabel,
            type: 'radio',
            checked: !isAuto && global.p3xre.currentTranslation === translationKey,
            click: clickFunction(translationKey)
        })
    }

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

}

export default mainMenu;
