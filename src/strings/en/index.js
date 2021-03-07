module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Checking for update ...',
        'update-available': 'Downloading latest release ...',
        'update-not-available': 'No new update available.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloaded ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update downloaded. You may restart the app to update.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Please hang on, the application is restarting.',
    },
    menu: {
        main: {
            home: 'Home',
            console: 'Console',
            settings: 'Settings',
            overview: 'Overview',
            quit: 'Quit',
        },
        edit: {
            title: 'Edit',
            undo: 'Undo',
            redo: 'Redo',
            cut: 'Cut',
            copy: 'Copy',
            paste: 'Paste',
            pasteandmatchstyle: 'Paste and match style',
            delete: 'Delete',
            selectall: 'Select all',
        },
        view: {
            title: 'View',
            reload: 'Reload',
            forcereload: 'Force reload',
            toggledevtools: 'Toggle development tools',
            resetzoom: 'Reset Zoom',
            zoomin: 'Zoom In',
            zoomout: 'Zoom out',
            togglefullscreen: 'Toggle full screen',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                en: 'English',
                zn: 'Chinese / 中文'
            }
        },
        settings: {
            title: 'Settings',
            hideMenu: 'Hide main menu (show with ALT)',
            optionToHideMenuState: {
                yes: 'After restart, it will hide the menu and show on ALT.',
            },
        },
        help: {
            changelog: 'Change log',
            download: 'Download',
            developer: 'Developer',
            checkUpdates: 'Check updates',
        },
        donate: {
            title: 'Donate',
        }
    },
}
