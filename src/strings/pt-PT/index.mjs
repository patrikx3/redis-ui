export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'A verificar atualizações ...',
        'update-available': 'A descarregar a versão mais recente ...',
        'update-not-available': 'Nenhuma atualização disponível.',
        error: (opts) => {
            return `Erro no auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Descarregado ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Atualização descarregada. Pode reiniciar a aplicação para atualizar.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Por favor aguarde, a aplicação está a reiniciar.',
    },
    menu: {
        main: {
            home: 'Início',
            console: 'Consola',
            settings: 'Definições',
            overview: 'Visão geral',
            quit: 'Sair',
        },
        edit: {
            title: 'Editar',
            undo: 'Desfazer',
            redo: 'Refazer',
            cut: 'Cortar',
            copy: 'Copiar',
            paste: 'Colar',
            pasteandmatchstyle: 'Colar com estilo correspondente',
            delete: 'Eliminar',
            selectall: 'Selecionar tudo',
        },
        view: {
            title: 'Vista',
            reload: 'Recarregar',
            forcereload: 'Forçar recarregamento',
            toggledevtools: 'Alternar ferramentas de desenvolvimento',
            resetzoom: 'Repor zoom',
            zoomin: 'Aumentar zoom',
            zoomout: 'Diminuir zoom',
            togglefullscreen: 'Alternar ecrã inteiro',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Idioma / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: "Búlgaro / Bulgarian",
                cs: "Checo / Czech",
                de: "Alemão / German",
                el: "Grego / Greek",
                en: 'Inglês / English',
                es: "Espanhol / Spanish",
                fr: "Francês / French",
                hu: "Húngaro / Hungarian",
                it: "Italiano / Italian",
                ja: "Japonês / Japanese",
                nl: "Neerlandês / Dutch",
                pl: "Polaco / Polish",
                "pt-PT": "Português / Portuguese",
                ro: "Romeno / Romanian",
                ru: "Russo / Russian",
                sk: "Eslovaco / Slovak",
                sr: "Sérvio / Serbian",
                sv: "Sueco / Swedish",
                tr: "Turco / Turkish",
                uk: "Ucraniano / Ukrainian",
                zn: 'Chinês / Chinese',
            }
        },
        settings: {
            title: 'Definições',
            hideMenu: 'Ocultar menu principal (mostrar com ALT)',
            optionToHideMenuState: {
                yes: 'Após reiniciar, o menu será ocultado e aparecerá com ALT.',
            },
        },
        help: {
            changelog: 'Registo de alterações',
            download: 'Descarregar',
            developer: 'Programador',
            checkUpdates: 'Verificar atualizações',
        },
        donate: {
            title: 'Doar',
        }
    },
}
