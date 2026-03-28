export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Перевірка оновлень ...',
        'update-available': 'Завантаження останньої версії ...',
        'update-not-available': 'Немає нових оновлень.',
        error: (opts) => {
            return `Помилка автооновлення: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Завантажено ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Оновлення завантажено. Ви можете перезапустити програму для оновлення.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Будь ласка, зачекайте, програма перезапускається.',
    },
    menu: {
        main: {
            home: 'Головна',
            console: 'Консоль',
            settings: 'Налаштування',
            overview: 'Огляд',
            quit: 'Вийти',
        },
        edit: {
            title: 'Редагування',
            undo: 'Скасувати',
            redo: 'Повторити',
            cut: 'Вирізати',
            copy: 'Копіювати',
            paste: 'Вставити',
            pasteandmatchstyle: 'Вставити зі збереженням стилю',
            delete: 'Видалити',
            selectall: 'Вибрати все',
        },
        view: {
            title: 'Вигляд',
            reload: 'Перезавантажити',
            forcereload: 'Примусове перезавантаження',
            toggledevtools: 'Перемкнути інструменти розробника',
            resetzoom: 'Скинути масштаб',
            zoomin: 'Збільшити',
            zoomout: 'Зменшити',
            togglefullscreen: 'Перемкнути повноекранний режим',
        },
        language: {
            title: 'Мова / Language',
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
            title: 'Налаштування',
            hideMenu: 'Приховати головне меню (показати за допомогою ALT)',
            optionToHideMenuState: {
                yes: 'Після перезапуску меню буде приховано і з\'явиться при натисканні ALT.',
            },
        },
        help: {
            changelog: 'Журнал змін',
            download: 'Завантажити',
            developer: 'Розробник',
            checkUpdates: 'Перевірити оновлення',
        },
        donate: {
            title: 'Пожертвувати',
        }
    },
}
