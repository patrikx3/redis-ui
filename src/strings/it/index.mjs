export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Ricerca aggiornamenti ...',
        'update-available': 'Download dell\'ultima versione ...',
        'update-not-available': 'Nessun nuovo aggiornamento disponibile.',
        error: (opts) => {
            return `Errore nell'aggiornamento automatico: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Scaricato ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Aggiornamento scaricato. Puoi riavviare l\'app per aggiornare.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Attendere, l\'applicazione si sta riavviando.',
    },
    menu: {
        main: {
            home: 'Home',
            console: 'Console',
            settings: 'Impostazioni',
            overview: 'Panoramica',
            quit: 'Esci',
        },
        edit: {
            title: 'Modifica',
            undo: 'Annulla',
            redo: 'Ripeti',
            cut: 'Taglia',
            copy: 'Copia',
            paste: 'Incolla',
            pasteandmatchstyle: 'Incolla e adatta lo stile',
            delete: 'Elimina',
            selectall: 'Seleziona tutto',
        },
        view: {
            title: 'Visualizza',
            reload: 'Ricarica',
            forcereload: 'Forza ricarica',
            toggledevtools: 'Attiva/Disattiva strumenti di sviluppo',
            resetzoom: 'Reimposta Zoom',
            zoomin: 'Ingrandisci',
            zoomout: 'Rimpicciolisci',
            togglefullscreen: 'Attiva/Disattiva schermo intero',
        },
        language: {
            title: 'Lingua / Language',
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
            title: 'Impostazioni',
            hideMenu: 'Nascondi il menu principale (mostra con ALT)',
            optionToHideMenuState: {
                yes: 'Dopo il riavvio, il menu sarà nascosto e visibile con ALT.',
            },
        },
        help: {
            changelog: 'Registro modifiche',
            download: 'Download',
            developer: 'Sviluppatore',
            checkUpdates: 'Controlla aggiornamenti',
        },
        donate: {
            title: 'Dona',
        }
    },
}
