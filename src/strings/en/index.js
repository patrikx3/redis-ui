module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Checking for update ...',
        'update-available': 'Update available.',
        'update-not-available': 'No new update available.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Downloaded ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Update downloaded.'
    },
    menu: {
        main: {
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
        help: {
            download: 'Download',
            developer: 'Developer',
        },
        donate: {
            title: 'Donate',
        }
    },
}