const setLanguage = (opts) => {
    const { key } = opts
    global.p3xre.currentTranslation = key;
    global.p3xre.conf.set('current-translation', key)
    global.p3xre.strings = require('../strings/' + key)
    require('../electron/module/create/menu')()
}

module.exports = setLanguage
