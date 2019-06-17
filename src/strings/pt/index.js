module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Procurando por atualizações ...',
        'update-available': 'Baixando atualização ...',
        'update-not-available': 'Nenhuma atualização disponível.',
        error: (opts) => {
            return `Erro na atualização automática: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Baixado ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Download concluído. Você precisa reiniciar a aplicação para atualizar.'
    },
    menu: {
        main: {
            home: 'Home',
            console: 'Console',
            settings: 'Configurações',
            overview: 'Visão geral',
            quit: 'Sair',
        },
        edit: {
            title: 'Editar',
            undo: 'Desfazer',
            redo: 'Refazer',
            cut: 'Recortar',
            copy: 'Copiar',
            paste: 'Colar',
            pasteandmatchstyle: 'Colar e manter formatação',
            delete: 'Excluir',
            selectall: 'Apagar tudo',
        },
        view: {
            title: 'Visualizar',
            reload: 'Recarregar',
            forcereload: 'Forçar recarregamento',
            toggledevtools: 'Alternar ferramentas de desenvolvimento',
            resetzoom: 'Reiniciar Zoom',
            zoomin: 'Mais zoom',
            zoomout: 'Menos zoom',
            togglefullscreen: 'Alternar para o modo tela cheia',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Idioma / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                en: 'Inglês / English',
                zn: 'Chinês / Chinese',
                pt: 'Português / Portuguese'
            }
        },
        help: {
            changelog: 'Change log',
            download: 'Download',
            developer: 'Desenvolvedor',
            checkUpdates: 'Verificar atualizações',
        },
        donate: {
            title: 'Doar',
        }
    },
}