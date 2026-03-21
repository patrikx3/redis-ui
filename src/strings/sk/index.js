module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Kontrolujem aktualizacie ...',
        'update-available': 'Stahujem najnovsiu verziu ...',
        'update-not-available': 'Ziadna nova aktualizacia nie je k dispozicii.',
        error: (opts) => {
            return `Chyba v automatickej aktualizacii: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Stiahnutych ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aktualizacia bola stiahnutia. Mozte restartovat aplikaciu pre aktualizaciu.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Prosim pockajte, aplikacia sa restartuje.',
    },
    menu: {
        main: {
            home: 'Domov',
            console: 'Konzola',
            settings: 'Nastavenia',
            overview: 'Prehlad',
            quit: 'Ukoncit',
        },
        edit: {
            title: 'Upravit',
            undo: 'Spat',
            redo: 'Znovu',
            cut: 'Vystrihnut',
            copy: 'Kopirovat',
            paste: 'Vlozit',
            pasteandmatchstyle: 'Vlozit s prisposobenim stylu',
            delete: 'Vymazat',
            selectall: 'Vybrat vsetko',
        },
        view: {
            title: 'Zobrazenie',
            reload: 'Znovu nacitat',
            forcereload: 'Vynutene znovu nacitat',
            toggledevtools: 'Prepnut vyvojarske nastroje',
            resetzoom: 'Resetovat priblizenie',
            zoomin: 'Priblizit',
            zoomout: 'Oddalit',
            togglefullscreen: 'Prepnut na celu obrazovku',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Jazyk / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: "Bulharcina / Bulgarian",
                cs: "Cestina / Czech",
                de: "Nemcina / German",
                el: "Grectina / Greek",
                en: 'Anglictina / English',
                es: "Spanielcina / Spanish",
                fr: "Francuzstina / French",
                hu: "Madarcina / Hungarian",
                it: "Taliancina / Italian",
                ja: "Japoncina / Japanese",
                nl: "Holandcina / Dutch",
                pl: "Polstina / Polish",
                "pt-PT": "Portugalcina / Portuguese",
                ro: "Rumuncina / Romanian",
                ru: 'Rustina / Russian',
                sk: "Slovencina / Slovak",
                sr: "Srbcina / Serbian",
                sv: "Svedcina / Swedish",
                tr: "Turectina / Turkish",
                uk: "Ukrajincina / Ukrainian",
                zn: 'Cinstina / Chinese',
            }
        },
        settings: {
            title: 'Nastavenia',
            hideMenu: 'Skryt hlavne menu (zobrazit pomocou ALT)',
            optionToHideMenuState: {
                yes: 'Po restarte sa menu skryje a zobrazi sa pri stlaceni ALT.',
            },
        },
        help: {
            changelog: 'Zaznam zmien',
            download: 'Stiahnut',
            developer: 'Vyvojar',
            checkUpdates: 'Skontrolovat aktualizacie',
        },
        donate: {
            title: 'Prispiet',
        }
    },
}
