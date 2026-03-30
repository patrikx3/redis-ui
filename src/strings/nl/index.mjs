export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Controleren op updates ...',
        'update-available': 'Laatste versie wordt gedownload ...',
        'update-not-available': 'Geen nieuwe update beschikbaar.',
        error: (opts) => {
            return `Fout in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Gedownload ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update gedownload. U kunt de app opnieuw starten om bij te werken.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Een moment geduld, de applicatie wordt opnieuw gestart.',
    },
    menu: {
        main: {
            home: 'Start',
            console: 'Console',
            settings: 'Instellingen',
            overview: 'Overzicht',
            quit: 'Afsluiten',
        },
        edit: {
            title: 'Bewerken',
            undo: 'Ongedaan maken',
            redo: 'Opnieuw',
            cut: 'Knippen',
            copy: 'Kopiëren',
            paste: 'Plakken',
            pasteandmatchstyle: 'Plakken met stijl',
            delete: 'Verwijderen',
            selectall: 'Alles selecteren',
        },
        view: {
            title: 'Beeld',
            reload: 'Herladen',
            forcereload: 'Geforceerd herladen',
            toggledevtools: 'Ontwikkeltools in-/uitschakelen',
            resetzoom: 'Zoom resetten',
            zoomin: 'Inzoomen',
            zoomout: 'Uitzoomen',
            togglefullscreen: 'Volledig scherm in-/uitschakelen',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Taal / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: "Bulgaars / Bulgarian",
                cs: "Tsjechisch / Czech",
                de: "Duits / German",
                el: "Grieks / Greek",
                en: 'Engels / English',
                es: "Spaans / Spanish",
                fr: "Frans / French",
                hu: "Hongaars / Hungarian",
                it: "Italiaans / Italian",
                ja: "Japans / Japanese",
                nl: "Nederlands / Dutch",
                pl: "Pools / Polish",
                "pt-PT": "Portugees / Portuguese",
                ro: "Roemeens / Romanian",
                ru: "Russisch / Russian",
                sk: "Slowaaks / Slovak",
                sr: "Servisch / Serbian",
                sv: "Zweeds / Swedish",
                tr: "Turks / Turkish",
                uk: "Oekraïens / Ukrainian",
                zn: 'Chinees / Chinese',
                ar: 'العربية / Arabic',
                az: 'Azərbaycanca / Azerbaijani',
                be: 'Беларуская / Belarusian',
                bn: 'বাংলা / Bengali',
                da: 'Dansk / Danish',
                et: 'Eesti / Estonian',
                fi: 'Suomi / Finnish',
                fil: 'Filipino / Filipino',
                he: 'עברית / Hebrew',
                hr: 'Hrvatski / Croatian',
                hy: 'Հայերեն / Armenian',
                id: 'Bahasa Indonesia / Indonesian',
                ka: 'ქართული / Georgian',
                kk: 'Қазақша / Kazakh',
                km: 'ខ្មែរ / Khmer',
                ko: '한국어 / Korean',
                ky: 'Кыргызча / Kyrgyz',
                lt: 'Lietuvių / Lithuanian',
                mk: 'Македонски / Macedonian',
                ms: 'Bahasa Melayu / Malay',
                ne: 'नेपाली / Nepali',
                no: 'Norsk / Norwegian',
                'pt-BR': 'Português (Brasil) / Portuguese (Brazil)',
                sl: 'Slovenščina / Slovenian',
                tg: 'Тоҷикӣ / Tajik',
                th: 'ไทย / Thai',
                vi: 'Tiếng Việt / Vietnamese',
                'zh-HK': '中文（香港） / Chinese (Hong Kong)',
                'zh-TW': '中文（台灣） / Chinese (Taiwan)',
                bs: 'Bosanski / Bosnian',
                si: 'සිංහල / Sinhala',
                sw: 'Kiswahili / Swahili',
                ta: 'தமிழ் / Tamil',
            }
        },
        settings: {
            title: 'Instellingen',
            hideMenu: 'Hoofdmenu verbergen (tonen met ALT)',
            optionToHideMenuState: {
                yes: 'Na herstart wordt het menu verborgen en getoond met ALT.',
            },
        },
        help: {
            changelog: 'Wijzigingslogboek',
            download: 'Downloaden',
            developer: 'Ontwikkelaar',
            checkUpdates: 'Controleren op updates',
        },
        donate: {
            title: 'Doneren',
        }
    },
}
