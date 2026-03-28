export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Comprobando actualizaciones ...',
        'update-available': 'Descargando última versión ...',
        'update-not-available': 'No hay nuevas actualizaciones disponibles.',
        error: (opts) => {
            return `Error en el actualizador automático: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Descargado ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Actualización descargada. Puede reiniciar la aplicación para actualizar.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Por favor espere, la aplicación se está reiniciando.',
    },
    menu: {
        main: {
            home: 'Inicio',
            console: 'Consola',
            settings: 'Configuración',
            overview: 'Vista general',
            quit: 'Salir',
        },
        edit: {
            title: 'Editar',
            undo: 'Deshacer',
            redo: 'Rehacer',
            cut: 'Cortar',
            copy: 'Copiar',
            paste: 'Pegar',
            pasteandmatchstyle: 'Pegar con estilo coincidente',
            delete: 'Eliminar',
            selectall: 'Seleccionar todo',
        },
        view: {
            title: 'Ver',
            reload: 'Recargar',
            forcereload: 'Forzar recarga',
            toggledevtools: 'Alternar herramientas de desarrollo',
            resetzoom: 'Restablecer zoom',
            zoomin: 'Acercar',
            zoomout: 'Alejar',
            togglefullscreen: 'Alternar pantalla completa',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Idioma / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
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
            title: 'Configuración',
            hideMenu: 'Ocultar menú principal (mostrar con ALT)',
            optionToHideMenuState: {
                yes: 'Después de reiniciar, el menú se ocultará y se mostrará con ALT.',
            },
        },
        help: {
            changelog: 'Registro de cambios',
            download: 'Descargar',
            developer: 'Desarrollador',
            checkUpdates: 'Comprobar actualizaciones',
        },
        donate: {
            title: 'Donar',
        }
    },
}
