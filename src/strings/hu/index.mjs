export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Frissítés keresése ...',
        'update-available': 'Legújabb verzió letöltése ...',
        'update-not-available': 'Nincs elérhető új frissítés.',
        error: (opts) => {
            return `Hiba az automatikus frissítőben: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Letöltve ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Frissítés letöltve. Az alkalmazás újraindításával frissítheti.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Kérjük, várjon, az alkalmazás újraindul.',
    },
    menu: {
        main: {
            home: 'Kezdőlap',
            console: 'Konzol',
            settings: 'Beállítások',
            overview: 'Áttekintés',
            quit: 'Kilépés',
        },
        edit: {
            title: 'Szerkesztés',
            undo: 'Visszavonás',
            redo: 'Újra',
            cut: 'Kivágás',
            copy: 'Másolás',
            paste: 'Beillesztés',
            pasteandmatchstyle: 'Beillesztés stílus egyeztetéssel',
            delete: 'Törlés',
            selectall: 'Összes kijelölése',
        },
        view: {
            title: 'Nézet',
            reload: 'Újratöltés',
            forcereload: 'Kényszerített újratöltés',
            toggledevtools: 'Fejlesztői eszközök be/ki',
            resetzoom: 'Nagyítás visszaállítása',
            zoomin: 'Nagyítás',
            zoomout: 'Kicsinyítés',
            togglefullscreen: 'Teljes képernyő be/ki',
        },
        language: {
            title: 'Nyelv / Language',
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
            title: 'Beállítások',
            hideMenu: 'Főmenü elrejtése (ALT-tal jeleníthető meg)',
            optionToHideMenuState: {
                yes: 'Újraindítás után a menü rejtve lesz, és az ALT billentyűvel jeleníthető meg.',
            },
        },
        help: {
            changelog: 'Változásnapló',
            download: 'Letöltés',
            developer: 'Fejlesztő',
            checkUpdates: 'Frissítések keresése',
        },
        donate: {
            title: 'Adományozás',
        }
    },
}
