import { createRequire } from 'node:module'
import Store from 'electron-store'
import setLanguage from '../lib/set-language.mjs'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

const conf = new Store();

let currentTranslation = conf.get('current-translation')

if (currentTranslation === undefined) {
    currentTranslation = 'en'
}

// optionToHideMenu
let optionToHideMenu = conf.get('option-to-hide-menu')
if (optionToHideMenu === undefined) {
    conf.set('option-to-hide-menu', false)
    optionToHideMenu = false;
}

const stringsModule = await import(`../strings/${currentTranslation}/index.mjs`)

global.p3xre = {
    dev: process.env.NODE_ENV === 'development',
    iconFile: `${import.meta.dirname}/images/128x128.png`,
    mainWindow: undefined,
    pkg: pkg,
    indexHtml: 'file://' + import.meta.dirname + '/window/main/index.html',
    strings: stringsModule.default,
    currentTranslation: currentTranslation,
    conf: conf,
    setLanguage: setLanguage,
    optionToHideMenu: optionToHideMenu,
}

global.p3xre.setVisible = (visible = true) => {
    if (visible === null) {
        visible = true;
    }
    if (global.p3xre.mainWindow !== undefined) {
        if (visible) {
            global.p3xre.mainWindow.show();
        } else {
            global.p3xre.mainWindow.hide();
        }
    }

    //global.ngivr.recreateMenus();
}
