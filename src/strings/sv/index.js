module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Söker efter uppdatering ...',
        'update-available': 'Laddar ner senaste versionen ...',
        'update-not-available': 'Ingen ny uppdatering tillgänglig.',
        error: (opts) => {
            return `Fel i automatisk uppdatering: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Nedladdat ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Uppdatering nedladdad. Du kan starta om appen för att uppdatera.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Vänta, programmet startar om.',
    },
    menu: {
        main: {
            home: 'Hem',
            console: 'Konsol',
            settings: 'Inställningar',
            overview: 'Översikt',
            quit: 'Avsluta',
        },
        edit: {
            title: 'Redigera',
            undo: 'Ångra',
            redo: 'Gör om',
            cut: 'Klipp ut',
            copy: 'Kopiera',
            paste: 'Klistra in',
            pasteandmatchstyle: 'Klistra in och matcha stil',
            delete: 'Radera',
            selectall: 'Markera allt',
        },
        view: {
            title: 'Visa',
            reload: 'Ladda om',
            forcereload: 'Tvinga omladdning',
            toggledevtools: 'Växla utvecklarverktyg',
            resetzoom: 'Återställ zoom',
            zoomin: 'Zooma in',
            zoomout: 'Zooma ut',
            togglefullscreen: 'Växla helskärm',
        },
        language: {
            title: 'Språk / Language',
            translation: {
                bg: "Български / Bulgarian",
                cs: "Čeština / Czech",
                de: "Deutsch / German",
                el: "Ελληνικά / Greek",
                en: "English",
                es: "Español / Spanish",
                fr: "Français / French",
                hu: "Magyar / Hungarian",
                it: "Italiano / Italian",
                ja: "日本語 / Japanese",
                nl: "Nederlands / Dutch",
                pl: "Polski / Polish",
                "pt-PT": "Português / Portuguese",
                ro: "Română / Romanian",
                ru: "Русский / Russian",
                sk: "Slovenčina / Slovak",
                sr: "Српски / Serbian",
                sv: "Svenska / Swedish",
                tr: "Türkçe / Turkish",
                uk: "Українська / Ukrainian",
                zn: "中文 / Chinese",
            }
        },
        settings: {
            title: 'Inställningar',
            hideMenu: 'Dölj huvudmenyn (visa med ALT)',
            optionToHideMenuState: {
                yes: 'Efter omstart döljs menyn och visas med ALT.',
            },
        },
        help: {
            changelog: 'Ändringslogg',
            download: 'Ladda ner',
            developer: 'Utvecklare',
            checkUpdates: 'Sök efter uppdateringar',
        },
        donate: {
            title: 'Donera',
        }
    },
}
