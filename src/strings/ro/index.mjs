export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Se cauta actualizari ...',
        'update-available': 'Se descarca ultima versiune ...',
        'update-not-available': 'Nu exista actualizari noi.',
        error: (opts) => {
            return `Eroare in actualizatorul automat: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Descarcat ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Actualizarea a fost descarcata. Puteti reporni aplicatia pentru a actualiza.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Va rugam asteptati, aplicatia se reporneste.',
    },
    menu: {
        main: {
            home: 'Acasa',
            console: 'Consola',
            settings: 'Setari',
            overview: 'Prezentare generala',
            quit: 'Iesire',
        },
        edit: {
            title: 'Editare',
            undo: 'Anulare',
            redo: 'Refacere',
            cut: 'Decupare',
            copy: 'Copiere',
            paste: 'Lipire',
            pasteandmatchstyle: 'Lipire cu potrivire de stil',
            delete: 'Stergere',
            selectall: 'Selecteaza tot',
        },
        view: {
            title: 'Vizualizare',
            reload: 'Reincarcare',
            forcereload: 'Reincarcare fortata',
            toggledevtools: 'Comutare instrumente dezvoltator',
            resetzoom: 'Resetare zoom',
            zoomin: 'Marire',
            zoomout: 'Micsorare',
            togglefullscreen: 'Comutare ecran complet',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Limba / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: "Bulgara / Bulgarian",
                cs: "Ceha / Czech",
                de: "Germana / German",
                el: "Greaca / Greek",
                en: 'Engleza / English',
                es: "Spaniola / Spanish",
                fr: "Franceza / French",
                hu: "Maghiara / Hungarian",
                it: "Italiana / Italian",
                ja: "Japoneza / Japanese",
                nl: "Olandeza / Dutch",
                pl: "Poloneza / Polish",
                "pt-PT": "Portugheza / Portuguese",
                ro: "Romana / Romanian",
                ru: 'Rusa / Russian',
                sk: "Slovaca / Slovak",
                sr: "Sarba / Serbian",
                sv: "Suedeza / Swedish",
                tr: "Turca / Turkish",
                uk: "Ucraineana / Ukrainian",
                zn: 'Chineza / Chinese',
            }
        },
        settings: {
            title: 'Setari',
            hideMenu: 'Ascunde meniul principal (afiseaza cu ALT)',
            optionToHideMenuState: {
                yes: 'Dupa repornire, meniul va fi ascuns si va aparea la apasarea ALT.',
            },
        },
        help: {
            changelog: 'Jurnal de modificari',
            download: 'Descarcare',
            developer: 'Dezvoltator',
            checkUpdates: 'Verificare actualizari',
        },
        donate: {
            title: 'Donatie',
        }
    },
}
