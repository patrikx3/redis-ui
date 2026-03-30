export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Vérification des mises à jour ...',
        'update-available': 'Téléchargement de la dernière version ...',
        'update-not-available': 'Aucune nouvelle mise à jour disponible.',
        error: (opts) => {
            return `Erreur dans la mise à jour automatique : ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Téléchargé ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Mise à jour téléchargée. Vous pouvez redémarrer l\'application pour effectuer la mise à jour.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Veuillez patienter, l\'application redémarre.',
    },
    menu: {
        main: {
            home: 'Accueil',
            console: 'Console',
            settings: 'Paramètres',
            overview: 'Vue d\'ensemble',
            quit: 'Quitter',
        },
        edit: {
            title: 'Édition',
            undo: 'Annuler',
            redo: 'Rétablir',
            cut: 'Couper',
            copy: 'Copier',
            paste: 'Coller',
            pasteandmatchstyle: 'Coller avec le style correspondant',
            delete: 'Supprimer',
            selectall: 'Tout sélectionner',
        },
        view: {
            title: 'Affichage',
            reload: 'Recharger',
            forcereload: 'Forcer le rechargement',
            toggledevtools: 'Basculer les outils de développement',
            resetzoom: 'Réinitialiser le zoom',
            zoomin: 'Zoom avant',
            zoomout: 'Zoom arrière',
            togglefullscreen: 'Basculer en plein écran',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Langue / Language',
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
                ar: 'العربية / Arabic',
                az: 'Azərbaycanca / Azerbaijani',
                be: 'Беларуская / Belarusian',
                bn: 'বাংলা / Bengali',
                da: 'Dansk / Danish',
                et: 'Eesti / Estonian',
                fi: 'Suomi / Finnish',
                fil: 'Filipino / Filipino',
                he: 'עברית / Hebrew',
                hr: 'Hrvatski / Croatian',
                hy: 'Հայերեն / Armenian',
                id: 'Bahasa Indonesia / Indonesian',
                ka: 'ქართული / Georgian',
                kk: 'Қазақша / Kazakh',
                km: 'ខ្មែរ / Khmer',
                ko: '한국어 / Korean',
                ky: 'Кыргызча / Kyrgyz',
                lt: 'Lietuvių / Lithuanian',
                mk: 'Македонски / Macedonian',
                ms: 'Bahasa Melayu / Malay',
                ne: 'नेपाली / Nepali',
                no: 'Norsk / Norwegian',
                'pt-BR': 'Português (Brasil) / Portuguese (Brazil)',
                sl: 'Slovenščina / Slovenian',
                tg: 'Тоҷикӣ / Tajik',
                th: 'ไทย / Thai',
                vi: 'Tiếng Việt / Vietnamese',
                'zh-HK': '中文（香港） / Chinese (Hong Kong)',
                'zh-TW': '中文（台灣） / Chinese (Taiwan)',
                bs: 'Bosanski / Bosnian',
                si: 'සිංහල / Sinhala',
                sw: 'Kiswahili / Swahili',
                ta: 'தமிழ் / Tamil',
            }
        },
        settings: {
            title: 'Paramètres',
            hideMenu: 'Masquer le menu principal (afficher avec ALT)',
            optionToHideMenuState: {
                yes: 'Après le redémarrage, le menu sera masqué et s\'affichera avec ALT.',
            },
        },
        help: {
            changelog: 'Journal des modifications',
            download: 'Télécharger',
            developer: 'Développeur',
            checkUpdates: 'Vérifier les mises à jour',
        },
        donate: {
            title: 'Don',
        }
    },
}
