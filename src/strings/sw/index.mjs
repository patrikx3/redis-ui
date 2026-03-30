export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Inakagua masasisho ...',
        'update-available': 'Inapakua toleo jipya zaidi ...',
        'update-not-available': 'Hakuna sasisho mpya linaloanpatikana.',
        error: (opts) => {
            return `Hitilafu katika sasisho otomatiki: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Imepakua ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Sasisho limepakiwa. Unaweza kuanzisha upya programu ili kusasisha.'
    },
    button: {
      ok: 'Sawa',
    },
    message: {
        restart: 'Tafadhali subiri, programu inaanzishwa upya.',
    },
    menu: {
        main: {
            home: 'Nyumbani',
            console: 'Konsoli',
            settings: 'Mipangilio',
            overview: 'Muhtasari',
            quit: 'Ondoka',
        },
        edit: {
            title: 'Hariri',
            undo: 'Tendua',
            redo: 'Rudia',
            cut: 'Kata',
            copy: 'Nakili',
            paste: 'Bandika',
            pasteandmatchstyle: 'Bandika na linganisha mtindo',
            delete: 'Futa',
            selectall: 'Chagua yote',
        },
        view: {
            title: 'Tazama',
            reload: 'Pakia upya',
            forcereload: 'Lazimisha kupakia upya',
            toggledevtools: 'Badilisha zana za maendeleo',
            resetzoom: 'Weka upya ukuzaji',
            zoomin: 'Kuza ndani',
            zoomout: 'Kuza nje',
            togglefullscreen: 'Badilisha skrini kamili',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Lugha / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'Kibulgaria / Bulgarian',
                cs: 'Kicheki / Czech',
                de: 'Kijerumani / German',
                el: 'Kigiriki / Greek',
                en: 'Kiingereza / English',
                es: 'Kihispania / Spanish',
                fr: 'Kifaransa / French',
                hu: 'Kihungari / Hungarian',
                it: 'Kiitaliano / Italian',
                ja: 'Kijapani / Japanese',
                nl: 'Kiholanzi / Dutch',
                pl: 'Kipolandi / Polish',
                'pt-PT': 'Kireno / Portuguese',
                ro: 'Kiromania / Romanian',
                ru: 'Kirusi / Russian',
                sk: 'Kislovaki / Slovak',
                sr: 'Kiserbia / Serbian',
                sv: 'Kiswidi / Swedish',
                tr: 'Kituruki / Turkish',
                uk: 'Kiukrania / Ukrainian',
                zn: 'Kichina / Chinese',
                ar: 'Kiarabu / Arabic',
                az: 'Kiazabaijani / Azerbaijani',
                be: 'Kibelarusi / Belarusian',
                bn: 'Kibengali / Bengali',
                da: 'Kidenmaki / Danish',
                et: 'Kiestonia / Estonian',
                fi: 'Kifini / Finnish',
                fil: 'Kifilipino / Filipino',
                he: 'Kiebrania / Hebrew',
                hr: 'Kikroeshia / Croatian',
                hy: 'Kiarmenia / Armenian',
                id: 'Kiindonesia / Indonesian',
                ka: 'Kijojia / Georgian',
                kk: 'Kikazaki / Kazakh',
                km: 'Kikambodia / Khmer',
                ko: 'Kikorea / Korean',
                ky: 'Kikirigizi / Kyrgyz',
                lt: 'Kilithuania / Lithuanian',
                mk: 'Kimasedonia / Macedonian',
                ms: 'Kimalei / Malay',
                ne: 'Kinepali / Nepali',
                no: 'Kinorwe / Norwegian',
                'pt-BR': 'Kireno (Brazili) / Portuguese (Brazil)',
                sl: 'Kislovenia / Slovenian',
                tg: 'Kitajiki / Tajik',
                th: 'Kithai / Thai',
                vi: 'Kivietinamu / Vietnamese',
                'zh-HK': 'Kichina (Hong Kong) / Chinese (Hong Kong)',
                'zh-TW': 'Kichina (Taiwan) / Chinese (Taiwan)',
                sw: 'Kiswahili / Swahili',
                si: 'Kisinhala / Sinhala',
                ta: 'Kitamili / Tamil',
                bs: 'Kibosnia / Bosnian',
            }
        },
        settings: {
            title: 'Mipangilio',
            hideMenu: 'Ficha menyu kuu (onyesha na ALT)',
            optionToHideMenuState: {
                yes: 'Baada ya kuanzisha upya, itaficha menyu na kuonyesha kwa ALT.',
            },
        },
        help: {
            changelog: 'Kumbukumbu ya mabadiliko',
            download: 'Pakua',
            developer: 'Msanidi',
            checkUpdates: 'Kagua masasisho',
        },
        donate: {
            title: 'Changia',
        }
    },
}
