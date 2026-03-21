module.exports = {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Проверяем наличие обновлений ...',
        'update-available': 'Скачиваем последний релиз ...',
        'update-not-available': 'Обновления не найдены.',
        error: (opts) => {
            return `Error in auto-updater: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Скачано ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Обновление скачано. Вы можете перезапустить приложение для обновления.'
    },
    button: {
      ok: 'ОК',
    },
    message: {
        restart: 'Пожалуйста подождите, приложение перезапускается.',
    },
    menu: {
        main: {
            home: 'Домой',
            console: 'Консоль',
            settings: 'Настройки',
            overview: 'Обзор',
            quit: 'Выйти',
        },
        edit: {
            title: 'Редактировать',
            undo: 'Отменить',
            redo: 'Вернуть',
            cut: 'Вырезать',
            copy: 'Копировать',
            paste: 'Вставить',
            pasteandmatchstyle: 'Вставить с подходящим стилем',
            delete: 'Удалить',
            selectall: 'Выделить всё',
        },
        view: {
            title: 'Показать',
            reload: 'Перезагрузить',
            forcereload: 'Принудительно перезагрузить',
            toggledevtools: 'Переключить утилиты разработчика',
            resetzoom: 'Сбросить приближение',
            zoomin: 'Приблизить',
            zoomout: 'Отдалить',
            togglefullscreen: 'Переключить полный экран',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Язык / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'Български / Bulgarian',
                cs: 'Čeština / Czech',
                de: 'Deutsch / German',
                el: 'Ελληνικά / Greek',
                en: 'Английский / English',
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
            title: 'Настройки',
            hideMenu: 'Спрятать главное меню (показывается с АLT)',
            optionToHideMenuState: {
                yes: 'После перезапуска, меню будет спрятано и показыватся при нажатии ALT.',
            },
        },
        help: {
            changelog: 'Изменения',
            download: 'Скачать',
            developer: 'Разработчик',
            checkUpdates: 'Проверить обновления',
        },
        donate: {
            title: 'Донат',
        }
    },
}
