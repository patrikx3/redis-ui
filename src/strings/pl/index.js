module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Sprawdzanie aktualizacji ...',
        'update-available': 'Pobieranie najnowszej wersji ...',
        'update-not-available': 'Brak nowych aktualizacji.',
        error: (opts) => {
            return `Błąd w auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Pobrano ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aktualizacja pobrana. Możesz ponownie uruchomić aplikację, aby zaktualizować.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Proszę czekać, aplikacja jest ponownie uruchamiana.',
    },
    menu: {
        main: {
            home: 'Strona główna',
            console: 'Konsola',
            settings: 'Ustawienia',
            overview: 'Przegląd',
            quit: 'Zakończ',
        },
        edit: {
            title: 'Edycja',
            undo: 'Cofnij',
            redo: 'Ponów',
            cut: 'Wytnij',
            copy: 'Kopiuj',
            paste: 'Wklej',
            pasteandmatchstyle: 'Wklej z dopasowaniem stylu',
            delete: 'Usuń',
            selectall: 'Zaznacz wszystko',
        },
        view: {
            title: 'Widok',
            reload: 'Przeładuj',
            forcereload: 'Wymuś przeładowanie',
            toggledevtools: 'Przełącz narzędzia deweloperskie',
            resetzoom: 'Resetuj powiększenie',
            zoomin: 'Powiększ',
            zoomout: 'Pomniejsz',
            togglefullscreen: 'Przełącz pełny ekran',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Język / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: "Bułgarski / Bulgarian",
                cs: "Czeski / Czech",
                de: "Niemiecki / German",
                el: "Grecki / Greek",
                en: 'Angielski / English',
                es: "Hiszpański / Spanish",
                fr: "Francuski / French",
                hu: "Węgierski / Hungarian",
                it: "Włoski / Italian",
                ja: "Japoński / Japanese",
                nl: "Niderlandzki / Dutch",
                pl: "Polski / Polish",
                "pt-PT": "Portugalski / Portuguese",
                ro: "Rumuński / Romanian",
                ru: "Rosyjski / Russian",
                sk: "Słowacki / Slovak",
                sr: "Serbski / Serbian",
                sv: "Szwedzki / Swedish",
                tr: "Turecki / Turkish",
                uk: "Ukraiński / Ukrainian",
                zn: 'Chiński / Chinese',
            }
        },
        settings: {
            title: 'Ustawienia',
            hideMenu: 'Ukryj menu główne (pokaż za pomocą ALT)',
            optionToHideMenuState: {
                yes: 'Po ponownym uruchomieniu menu zostanie ukryte i pojawi się po naciśnięciu ALT.',
            },
        },
        help: {
            changelog: 'Dziennik zmian',
            download: 'Pobierz',
            developer: 'Deweloper',
            checkUpdates: 'Sprawdź aktualizacje',
        },
        donate: {
            title: 'Wspomóż',
        }
    },
}
