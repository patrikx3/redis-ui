export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Kontrola aktualizací ...',
        'update-available': 'Stahování nejnovější verze ...',
        'update-not-available': 'Žádná nová aktualizace není k dispozici.',
        error: (opts) => {
            return `Chyba automatické aktualizace: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Staženo ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aktualizace stažena. Můžete restartovat aplikaci pro aktualizaci.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Prosím vyčkejte, aplikace se restartuje.',
    },
    menu: {
        main: {
            home: 'Domů',
            console: 'Konzole',
            settings: 'Nastavení',
            overview: 'Přehled',
            quit: 'Ukončit',
        },
        edit: {
            title: 'Úpravy',
            undo: 'Zpět',
            redo: 'Znovu',
            cut: 'Vyjmout',
            copy: 'Kopírovat',
            paste: 'Vložit',
            pasteandmatchstyle: 'Vložit a přizpůsobit styl',
            delete: 'Smazat',
            selectall: 'Vybrat vše',
        },
        view: {
            title: 'Zobrazení',
            reload: 'Znovu načíst',
            forcereload: 'Vynutit znovu načtení',
            toggledevtools: 'Přepnout vývojářské nástroje',
            resetzoom: 'Obnovit přiblížení',
            zoomin: 'Přiblížit',
            zoomout: 'Oddálit',
            togglefullscreen: 'Přepnout celou obrazovku',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Jazyk / Language',
            auto: 'Auto (system)',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'Български / Bulgarian',
                cs: 'Čeština / Czech',
                de: 'Deutsch / German',
                el: 'Ελληνικά / Greek',
                en: 'English',
                es: 'Español / Spanish',
                fr: 'Français / French',
                hu: 'Magyar / Hungarian',
                it: 'Italiano / Italian',
                ja: '日本語 / Japanese',
                nl: 'Nederlands / Dutch',
                pl: 'Polski / Polish',
                'pt-PT': 'Português / Portuguese',
                ro: 'Română / Romanian',
                ru: 'Русский / Russian',
                sk: 'Slovenčina / Slovak',
                sr: 'Српски / Serbian',
                sv: 'Svenska / Swedish',
                tr: 'Türkçe / Turkish',
                uk: 'Українська / Ukrainian',
                zn: '中文 / Chinese',
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
            title: 'Nastavení',
            hideMenu: 'Skrýt hlavní menu (zobrazit pomocí ALT)',
            optionToHideMenuState: {
                yes: 'Po restartu bude menu skryté a zobrazí se pomocí ALT.',
            },
        },
        help: {
            changelog: 'Seznam změn',
            download: 'Stáhnout',
            developer: 'Vývojář',
            checkUpdates: 'Zkontrolovat aktualizace',
        },
        donate: {
            title: 'Přispět',
        }
    },
}
