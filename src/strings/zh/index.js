module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': '检查更新 ...',
        'update-available': '下载最新稳定发行版本...',
        'update-not-available': '没有需要更新的 ...',
        error: (opts) => {
            return `自动更新异常: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return '下载进度 ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': '更新已下载。您可以重新启动应用程序应用更新。'
    },
    menu: {
        main: {
            quit: '退出',
        },
        edit: {
            title: '编辑',
            undo: '撤销',
            redo: '重做',
            cut: '剪切',
            copy: '复制',
            paste: '粘贴',
            pasteandmatchstyle: '包含样式的粘贴',
            delete: '删除',
            selectall: '选择全部',
        },
        view: {
            title: '查看',
            reload: '重载',
            forcereload: '强制重载',
            toggledevtools: '切换开发者工具',
            resetzoom: '重置缩放',
            zoomin: '放大',
            zoomout: '缩小',
            togglefullscreen: '切换全屏',
        },
        help: {
            download: '下载',
            developer: '开发者',
            checkUpdates: '检查更新',
        },
        donate: {
            title: '捐赠',
        }
    },
}