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
    button: {
        ok: '好的',
    },
    message: {
        restart: '请稍候，应用程序正在重新启动。',
    },
    menu: {
        main: {
            home: '主页',
            console: '控制台',
            settings: '设置',
            overview: '概览',
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
            zoomout: '缩放',
            togglefullscreen: '切换全屏',
        },
        language: {
            title: '语言 / Language',
            translation: {
                en: '英语 / English',
                zn: '中文 / Chinese',
                ru: '俄语 / Russian'
            }
        },
        settings: {
            title: '设定值',
            hideMenu: '隐藏主菜单（与ALT一起显示）',
            optionToHideMenuState: {
                yes: '重新启动后，它将隐藏菜单并在ALT上显示。',
            },
        },
        help: {
            changelog: '更新日志',
            download: '下载',
            developer: '开发者',
            checkUpdates: '检查更新',
        },
        donate: {
            title: '捐赠',
        }
    },
}
