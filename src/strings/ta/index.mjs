export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'புதுப்பிப்பை சரிபார்க்கிறது ...',
        'update-available': 'சமீபத்திய வெளியீட்டைப் பதிவிறக்குகிறது ...',
        'update-not-available': 'புதிய புதுப்பிப்பு இல்லை.',
        error: (opts) => {
            return `தானியங்கி புதுப்பிப்பாளரில் பிழை: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'பதிவிறக்கப்பட்டது ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'புதுப்பிப்பு பதிவிறக்கப்பட்டது. புதுப்பிக்க பயன்பாட்டை மீண்டும் தொடங்கலாம்.'
    },
    button: {
      ok: 'சரி',
    },
    message: {
        restart: 'தயவுசெய்து காத்திருங்கள், பயன்பாடு மீண்டும் தொடங்குகிறது.',
    },
    menu: {
        main: {
            home: 'முகப்பு',
            console: 'கன்சோல்',
            settings: 'அமைப்புகள்',
            overview: 'கண்ணோட்டம்',
            quit: 'வெளியேறு',
        },
        edit: {
            title: 'திருத்து',
            undo: 'செயல்தவிர்',
            redo: 'மீண்டும் செய்',
            cut: 'வெட்டு',
            copy: 'நகலெடு',
            paste: 'ஒட்டு',
            pasteandmatchstyle: 'ஒட்டி பாணியை பொருத்து',
            delete: 'நீக்கு',
            selectall: 'அனைத்தையும் தேர்',
        },
        view: {
            title: 'பார்',
            reload: 'மீளேற்றம்',
            forcereload: 'கட்டாய மீளேற்றம்',
            toggledevtools: 'மேம்பாட்டு கருவிகளை மாற்று',
            resetzoom: 'பெரிதாக்கலை மீட்டமை',
            zoomin: 'பெரிதாக்கு',
            zoomout: 'சிறிதாக்கு',
            togglefullscreen: 'முழுத்திரையை மாற்று',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'மொழி / Language',
            auto: 'Auto (system)',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'பல்கேரியன் / Bulgarian',
                cs: 'செக் / Czech',
                de: 'ஜெர்மன் / German',
                el: 'கிரேக்கம் / Greek',
                en: 'ஆங்கிலம் / English',
                es: 'ஸ்பானிஷ் / Spanish',
                fr: 'பிரெஞ்சு / French',
                hu: 'ஹங்கேரியன் / Hungarian',
                it: 'இத்தாலியன் / Italian',
                ja: 'ஜப்பானியம் / Japanese',
                nl: 'டச்சு / Dutch',
                pl: 'போலிஷ் / Polish',
                'pt-PT': 'போர்த்துகீசியம் / Portuguese',
                ro: 'ரோமேனியன் / Romanian',
                ru: 'ரஷ்யன் / Russian',
                sk: 'ஸ்லோவாக் / Slovak',
                sr: 'செர்பியன் / Serbian',
                sv: 'ஸ்வீடிஷ் / Swedish',
                tr: 'துருக்கியம் / Turkish',
                uk: 'உக்ரேனியன் / Ukrainian',
                zn: 'சீனம் / Chinese',
                ar: 'அரபு / Arabic',
                az: 'அசர்பைஜானி / Azerbaijani',
                be: 'பெலருசியன் / Belarusian',
                bn: 'வங்காளம் / Bengali',
                da: 'டேனிஷ் / Danish',
                et: 'எஸ்தோனியன் / Estonian',
                fi: 'பின்னிஷ் / Finnish',
                fil: 'பிலிப்பினோ / Filipino',
                he: 'எபிரேயம் / Hebrew',
                hr: 'குரோஷியன் / Croatian',
                hy: 'ஆர்மீனியன் / Armenian',
                id: 'இந்தோனேசியன் / Indonesian',
                ka: 'ஜோர்ஜியன் / Georgian',
                kk: 'கசாக் / Kazakh',
                km: 'கெமர் / Khmer',
                ko: 'கொரியன் / Korean',
                ky: 'கிர்கிஸ் / Kyrgyz',
                lt: 'லிதுவேனியன் / Lithuanian',
                mk: 'மாசிடோனியன் / Macedonian',
                ms: 'மலாய் / Malay',
                ne: 'நேபாளி / Nepali',
                no: 'நார்வேஜியன் / Norwegian',
                'pt-BR': 'போர்த்துகீசியம் (பிரேசில்) / Portuguese (Brazil)',
                sl: 'ஸ்லோவேனியன் / Slovenian',
                tg: 'தஜிக் / Tajik',
                th: 'தாய் / Thai',
                vi: 'வியட்நாமியம் / Vietnamese',
                'zh-HK': 'சீனம் (ஹாங்காங்) / Chinese (Hong Kong)',
                'zh-TW': 'சீனம் (தைவான்) / Chinese (Taiwan)',
                sw: 'ஸ்வாஹிலி / Swahili',
                si: 'சிங்களம் / Sinhala',
                ta: 'தமிழ் / Tamil',
                bs: 'போஸ்னியன் / Bosnian',
            }
        },
        settings: {
            title: 'அமைப்புகள்',
            hideMenu: 'முதன்மை மெனுவை மறை (ALT உடன் காட்டு)',
            optionToHideMenuState: {
                yes: 'மீண்டும் தொடங்கிய பிறகு, மெனுவை மறைத்து ALT இல் காட்டும்.',
            },
        },
        help: {
            changelog: 'மாற்ற பதிவு',
            download: 'பதிவிறக்கம்',
            developer: 'மேம்பாட்டாளர்',
            checkUpdates: 'புதுப்பிப்புகளை சரிபார்',
        },
        donate: {
            title: 'நன்கொடை',
        }
    },
}
