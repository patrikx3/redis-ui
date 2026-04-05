import { app } from 'electron'

const AVAILABLE_LANGUAGES = [
    'ar', 'az', 'be', 'bg', 'bn', 'bs', 'cs', 'da', 'de', 'el',
    'en', 'es', 'et', 'fi', 'fil', 'fr', 'he', 'hr', 'hu', 'hy',
    'id', 'it', 'ja', 'ka', 'kk', 'km', 'ko', 'ky', 'lt', 'mk',
    'ms', 'ne', 'nl', 'no', 'pl', 'pt-BR', 'pt-PT', 'ro', 'ru',
    'si', 'sk', 'sl', 'sr', 'sv', 'sw', 'ta', 'tg', 'th', 'tr',
    'uk', 'vi', 'zh-HK', 'zh-TW', 'zn',
]

function detectLanguageFromLocale(locale) {
    if (!locale) return 'en'
    const lower = locale.trim().toLowerCase()
    if (lower.startsWith('zh')) {
        if (lower === 'zh-hk') return 'zh-HK'
        if (lower === 'zh-tw' || lower.startsWith('zh-hant')) return 'zh-TW'
        return 'zn'
    }
    const exact = AVAILABLE_LANGUAGES.find(l => l.toLowerCase() === lower)
    if (exact) return exact
    const withRegion = AVAILABLE_LANGUAGES.find(l => l.toLowerCase() === lower.replace('_', '-'))
    if (withRegion) return withRegion
    const base = lower.split('-')[0].split('_')[0]
    if (base === 'pt') return 'pt-PT'
    if (base === 'tl') return 'fil'
    if (base === 'nb' || base === 'nn') return 'no'
    const baseMatch = AVAILABLE_LANGUAGES.find(l => l.toLowerCase() === base)
    if (baseMatch) return baseMatch
    return 'en'
}

const resolveLanguage = (key) => {
    if (key === 'auto') {
        try { return detectLanguageFromLocale(app.getLocale()) } catch { return 'en' }
    }
    return key
}

const setLanguage = async (opts) => {
    const { key } = opts
    const resolved = resolveLanguage(key)
    global.p3xre.currentTranslation = key
    global.p3xre.resolvedTranslation = resolved
    global.p3xre.conf.set('current-translation', key)
    const stringsModule = await import(`../strings/${resolved}/index.mjs`)
    global.p3xre.strings = stringsModule.default
    global.p3xre.iframeReady = true
    const { default: mainMenu } = await import('../electron/module/create/menu.mjs')
    mainMenu()
}

export { resolveLanguage }

export default setLanguage
