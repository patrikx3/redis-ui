const setLanguage = async (opts) => {
    const { key } = opts
    global.p3xre.currentTranslation = key;
    global.p3xre.conf.set('current-translation', key)
    const stringsModule = await import(`../strings/${key}/index.mjs`)
    global.p3xre.strings = stringsModule.default
    const { default: mainMenu } = await import('../electron/module/create/menu.mjs')
    mainMenu()
}

export default setLanguage
