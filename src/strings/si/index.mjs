export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'යාවත්කාලීන පරීක්ෂා කරමින් ...',
        'update-available': 'නවතම නිකුතුව බාගත කරමින් ...',
        'update-not-available': 'නව යාවත්කාලීනයක් නැත.',
        error: (opts) => {
            return `ස්වයංක්‍රීය යාවත්කාලීනයේ දෝෂයක්: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'බාගත කරන ලදී ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'යාවත්කාලීනය බාගත විය. යාවත්කාලීන කිරීමට යෙදුම නැවත ආරම්භ කළ හැක.'
    },
    button: {
      ok: 'හරි',
    },
    message: {
        restart: 'කරුණාකර රැඳී සිටින්න, යෙදුම නැවත ආරම්භ වෙමින් පවතී.',
    },
    menu: {
        main: {
            home: 'මුල් පිටුව',
            console: 'කොන්සෝලය',
            settings: 'සැකසුම්',
            overview: 'දළ විශ්ලේෂණය',
            quit: 'පිටවන්න',
        },
        edit: {
            title: 'සංස්කරණය',
            undo: 'අහෝසි කරන්න',
            redo: 'නැවත කරන්න',
            cut: 'කපන්න',
            copy: 'පිටපත් කරන්න',
            paste: 'අලවන්න',
            pasteandmatchstyle: 'අලවා මෝස්තරය ගළපන්න',
            delete: 'මකන්න',
            selectall: 'සියල්ල තෝරන්න',
        },
        view: {
            title: 'බලන්න',
            reload: 'නැවත පූරණය',
            forcereload: 'බලහත්කාරයෙන් නැවත පූරණය',
            toggledevtools: 'සංවර්ධන මෙවලම් මාරු කරන්න',
            resetzoom: 'විශාලනය යළි පිහිටුවන්න',
            zoomin: 'විශාලනය',
            zoomout: 'කුඩාකරණය',
            togglefullscreen: 'පූර්ණ තිරය මාරු කරන්න',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'භාෂාව / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'බල්ගේරියානු / Bulgarian',
                cs: 'චෙක් / Czech',
                de: 'ජර්මන් / German',
                el: 'ග්‍රීක / Greek',
                en: 'ඉංග්‍රීසි / English',
                es: 'ස්පාඤ්ඤ / Spanish',
                fr: 'ප්‍රංශ / French',
                hu: 'හංගේරියානු / Hungarian',
                it: 'ඉතාලි / Italian',
                ja: 'ජපන් / Japanese',
                nl: 'ලන්දේසි / Dutch',
                pl: 'පෝලන්ත / Polish',
                'pt-PT': 'පෘතුගීසි / Portuguese',
                ro: 'රොමේනියානු / Romanian',
                ru: 'රුසියානු / Russian',
                sk: 'ස්ලෝවැක් / Slovak',
                sr: 'සර්බියානු / Serbian',
                sv: 'ස්වීඩන් / Swedish',
                tr: 'තුර්කි / Turkish',
                uk: 'යුක්‍රේනියානු / Ukrainian',
                zn: 'චීන / Chinese',
                ar: 'අරාබි / Arabic',
                az: 'අසර්බයිජානු / Azerbaijani',
                be: 'බෙලරුසියානු / Belarusian',
                bn: 'බෙංගාලි / Bengali',
                da: 'ඩේනිශ් / Danish',
                et: 'එස්තෝනියානු / Estonian',
                fi: 'ෆින්ලන්ත / Finnish',
                fil: 'පිලිපීන / Filipino',
                he: 'හීබ්‍රු / Hebrew',
                hr: 'ක්‍රොඒශියානු / Croatian',
                hy: 'ආර්මේනියානු / Armenian',
                id: 'ඉන්දුනීසියානු / Indonesian',
                ka: 'ජෝර්ජියානු / Georgian',
                kk: 'කසාක් / Kazakh',
                km: 'කමර් / Khmer',
                ko: 'කොරියානු / Korean',
                ky: 'කිර්ගිස් / Kyrgyz',
                lt: 'ලිතුවේනියානු / Lithuanian',
                mk: 'මැසිඩෝනියානු / Macedonian',
                ms: 'මැලේ / Malay',
                ne: 'නේපාල / Nepali',
                no: 'නෝර්වේජියානු / Norwegian',
                'pt-BR': 'පෘතුගීසි (බ්‍රසීලය) / Portuguese (Brazil)',
                sl: 'ස්ලෝවේනියානු / Slovenian',
                tg: 'ටජික් / Tajik',
                th: 'තායි / Thai',
                vi: 'වියට්නාම / Vietnamese',
                'zh-HK': 'චීන (හොංකොං) / Chinese (Hong Kong)',
                'zh-TW': 'චීන (තායිවානය) / Chinese (Taiwan)',
                sw: 'ස්වාහිලි / Swahili',
                si: 'සිංහල / Sinhala',
                ta: 'දෙමළ / Tamil',
                bs: 'බොස්නියානු / Bosnian',
            }
        },
        settings: {
            title: 'සැකසුම්',
            hideMenu: 'ප්‍රධාන මෙනුව සඟවන්න (ALT සමඟ පෙන්වන්න)',
            optionToHideMenuState: {
                yes: 'නැවත ආරම්භ කිරීමෙන් පසු, මෙනුව සඟවනු ඇති අතර ALT මත පෙන්වනු ඇත.',
            },
        },
        help: {
            changelog: 'වෙනස්කම් ලොගය',
            download: 'බාගත කරන්න',
            developer: 'සංවර්ධකයා',
            checkUpdates: 'යාවත්කාලීන පරීක්ෂා කරන්න',
        },
        donate: {
            title: 'පරිත්‍යාග කරන්න',
        }
    },
}
