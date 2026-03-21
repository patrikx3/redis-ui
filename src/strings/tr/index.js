module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Güncelleme kontrol ediliyor ...',
        'update-available': 'En son sürüm indiriliyor ...',
        'update-not-available': 'Yeni güncelleme mevcut değil.',
        error: (opts) => {
            return `Otomatik güncelleyici hatası: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'İndirildi ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Güncelleme indirildi. Güncellemek için uygulamayı yeniden başlatabilirsiniz.'
    },
    button: {
      ok: 'Tamam',
    },
    message: {
        restart: 'Lütfen bekleyin, uygulama yeniden başlatılıyor.',
    },
    menu: {
        main: {
            home: 'Ana Sayfa',
            console: 'Konsol',
            settings: 'Ayarlar',
            overview: 'Genel Bakış',
            quit: 'Çıkış',
        },
        edit: {
            title: 'Düzenle',
            undo: 'Geri Al',
            redo: 'Yinele',
            cut: 'Kes',
            copy: 'Kopyala',
            paste: 'Yapıştır',
            pasteandmatchstyle: 'Yapıştır ve stili eşleştir',
            delete: 'Sil',
            selectall: 'Tümünü seç',
        },
        view: {
            title: 'Görünüm',
            reload: 'Yeniden yükle',
            forcereload: 'Zorla yeniden yükle',
            toggledevtools: 'Geliştirici araçlarını aç/kapat',
            resetzoom: 'Yakınlaştırmayı sıfırla',
            zoomin: 'Yakınlaştır',
            zoomout: 'Uzaklaştır',
            togglefullscreen: 'Tam ekranı aç/kapat',
        },
        language: {
            title: 'Dil / Language',
            translation: {
                bg: "Български / Bulgarian",
                cs: "Čeština / Czech",
                de: "Deutsch / German",
                el: "Ελληνικά / Greek",
                en: "English",
                es: "Español / Spanish",
                fr: "Français / French",
                hu: "Magyar / Hungarian",
                it: "Italiano / Italian",
                ja: "日本語 / Japanese",
                nl: "Nederlands / Dutch",
                pl: "Polski / Polish",
                "pt-PT": "Português / Portuguese",
                ro: "Română / Romanian",
                ru: "Русский / Russian",
                sk: "Slovenčina / Slovak",
                sr: "Српски / Serbian",
                sv: "Svenska / Swedish",
                tr: "Türkçe / Turkish",
                uk: "Українська / Ukrainian",
                zn: "中文 / Chinese",
            }
        },
        settings: {
            title: 'Ayarlar',
            hideMenu: 'Ana menüyü gizle (ALT ile göster)',
            optionToHideMenuState: {
                yes: 'Yeniden başlatmadan sonra menü gizlenecek ve ALT ile gösterilecektir.',
            },
        },
        help: {
            changelog: 'Değişiklik günlüğü',
            download: 'İndir',
            developer: 'Geliştirici',
            checkUpdates: 'Güncellemeleri kontrol et',
        },
        donate: {
            title: 'Bağış Yap',
        }
    },
}
