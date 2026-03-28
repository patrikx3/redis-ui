export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Проверка за обновление ...',
        'update-available': 'Изтегляне на последната версия ...',
        'update-not-available': 'Няма ново обновление.',
        error: (opts) => {
            return `Грешка при автоматичното обновяване: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Изтеглено ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Обновлението е изтеглено. Можете да рестартирате приложението, за да го обновите.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Моля, изчакайте, приложението се рестартира.',
    },
    menu: {
        main: {
            home: 'Начало',
            console: 'Конзола',
            settings: 'Настройки',
            overview: 'Преглед',
            quit: 'Изход',
        },
        edit: {
            title: 'Редактиране',
            undo: 'Отмяна',
            redo: 'Повтори',
            cut: 'Изрежи',
            copy: 'Копирай',
            paste: 'Постави',
            pasteandmatchstyle: 'Постави със съвпадащ стил',
            delete: 'Изтрий',
            selectall: 'Избери всичко',
        },
        view: {
            title: 'Изглед',
            reload: 'Презареди',
            forcereload: 'Принудително презареждане',
            toggledevtools: 'Превключване на инструментите за разработка',
            resetzoom: 'Нулиране на мащаба',
            zoomin: 'Увеличаване',
            zoomout: 'Намаляване',
            togglefullscreen: 'Превключване на цял екран',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Език / Language',
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
            title: 'Настройки',
            hideMenu: 'Скриване на главното меню (показване с ALT)',
            optionToHideMenuState: {
                yes: 'След рестартиране менюто ще бъде скрито и ще се показва с ALT.',
            },
        },
        help: {
            changelog: 'Списък с промени',
            download: 'Изтегляне',
            developer: 'Разработчик',
            checkUpdates: 'Проверка за обновления',
        },
        donate: {
            title: 'Дарение',
        }
    },
}
