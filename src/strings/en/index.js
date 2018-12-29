module.exports = {
    title: 'P3X Redis UI Electron',
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
    }
}