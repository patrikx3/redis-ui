module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Auf Aktualisierungen prüfen...',
        'update-available': 'Letzten Release herunterladen...',
        'update-not-available': 'Keine neue Aktualisierung verfügbar.',
        error: (opts) => {
            return `Fehler im Auto-Updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Heruntergeladen ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aktualsiierung heruntergeladen. Du kannst die App zum aktualisieren neu starten.'
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
            console: 'Kosnole',
            settings: 'Einstellungen',
            overview: 'Übersicht',
            quit: 'Verlassen',
        },
        edit: {
            title: 'Bearbeiten',
            undo: 'Rückgängig',
            redo: 'Noch einmal',
            cut: 'Ausschneiden',
            copy: 'Kopieren',
            paste: 'Einfügen',
            pasteandmatchstyle: 'Paste and match style',
            delete: 'Löschen',
            selectall: 'Alles auswählen',
        },
        view: {
            title: 'Ansehen',
            reload: 'Neuladen',
            forcereload: 'Neuladen erzwingen',
            toggledevtools: 'Entwicklertools umschalten',
            resetzoom: 'Zoom zurücksetzen',
            zoomin: 'Rein Zoomen',
            zoomout: 'Raus Zoomen',
            togglefullscreen: 'Vollansicht umschalten',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Sprache',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                de: 'German / Deutsch',
                en: 'English',
                zn: 'Chinese / 中文',
                ru: 'Russian / Русский'
            }
        },
        settings: {
            title: 'Einstellungen',
            hideMenu: 'Hauptmenü verstecken (mit ALT zeigen)',
            optionToHideMenuState: {
                yes: 'Nach dem Neustart wird das Menü ausgeblendet und auf ALT angezeigt.',
            },
        },
        help: {
            changelog: 'Änderungsprotokoll',
            download: 'Herunterladen',
            developer: 'Entwickler',
            checkUpdates: 'Auf Updates prüfen',
        },
        donate: {
            title: 'Spenden',
        }
    },
}