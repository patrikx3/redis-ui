export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Suche nach Updates ...',
        'update-available': 'Neueste Version wird heruntergeladen ...',
        'update-not-available': 'Kein neues Update verfügbar.',
        error: (opts) => {
            return `Fehler beim automatischen Update: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Heruntergeladen ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update heruntergeladen. Sie können die App neu starten, um das Update durchzuführen.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Bitte warten, die Anwendung wird neu gestartet.',
    },
    menu: {
        main: {
            home: 'Startseite',
            console: 'Konsole',
            settings: 'Einstellungen',
            overview: 'Übersicht',
            quit: 'Beenden',
        },
        edit: {
            title: 'Bearbeiten',
            undo: 'Rückgängig',
            redo: 'Wiederholen',
            cut: 'Ausschneiden',
            copy: 'Kopieren',
            paste: 'Einfügen',
            pasteandmatchstyle: 'Einfügen und Stil anpassen',
            delete: 'Löschen',
            selectall: 'Alles auswählen',
        },
        view: {
            title: 'Ansicht',
            reload: 'Neu laden',
            forcereload: 'Erzwungenes Neuladen',
            toggledevtools: 'Entwicklerwerkzeuge umschalten',
            resetzoom: 'Zoom zurücksetzen',
            zoomin: 'Vergrößern',
            zoomout: 'Verkleinern',
            togglefullscreen: 'Vollbild umschalten',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Sprache / Language',
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
            title: 'Einstellungen',
            hideMenu: 'Hauptmenü ausblenden (mit ALT anzeigen)',
            optionToHideMenuState: {
                yes: 'Nach dem Neustart wird das Menü ausgeblendet und mit ALT angezeigt.',
            },
        },
        help: {
            changelog: 'Änderungsprotokoll',
            download: 'Herunterladen',
            developer: 'Entwickler',
            checkUpdates: 'Nach Updates suchen',
        },
        donate: {
            title: 'Spenden',
        }
    },
}
