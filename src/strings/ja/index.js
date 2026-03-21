module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': '更新を確認中 ...',
        'update-available': '最新バージョンをダウンロード中 ...',
        'update-not-available': '新しい更新はありません。',
        error: (opts) => {
            return `自動更新エラー: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'ダウンロード済み ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': '更新がダウンロードされました。アプリを再起動して更新できます。'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'しばらくお待ちください。アプリケーションを再起動しています。',
    },
    menu: {
        main: {
            home: 'ホーム',
            console: 'コンソール',
            settings: '設定',
            overview: '概要',
            quit: '終了',
        },
        edit: {
            title: '編集',
            undo: '元に戻す',
            redo: 'やり直し',
            cut: '切り取り',
            copy: 'コピー',
            paste: '貼り付け',
            pasteandmatchstyle: 'スタイルを合わせて貼り付け',
            delete: '削除',
            selectall: 'すべて選択',
        },
        view: {
            title: '表示',
            reload: '再読み込み',
            forcereload: '強制再読み込み',
            toggledevtools: '開発者ツールの切り替え',
            resetzoom: 'ズームをリセット',
            zoomin: 'ズームイン',
            zoomout: 'ズームアウト',
            togglefullscreen: '全画面表示の切り替え',
        },
        language: {
            title: '言語 / Language',
            translation: {
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
            }
        },
        settings: {
            title: '設定',
            hideMenu: 'メインメニューを非表示にする（ALTで表示）',
            optionToHideMenuState: {
                yes: '再起動後、メニューは非表示になり、ALTキーで表示されます。',
            },
        },
        help: {
            changelog: '変更履歴',
            download: 'ダウンロード',
            developer: '開発者',
            checkUpdates: '更新を確認',
        },
        donate: {
            title: '寄付',
        }
    },
}
