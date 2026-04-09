export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "अपडेटको लागि जाँच गर्दै...",
    'update-available': "पछिल्लो रिलीज डाउनलोड गर्दै...",
    'update-not-available': "कुनै नयाँ अद्यावधिक उपलब्ध छैन।",
    error: opts => {
      return `स्वतः अपडेटरमा त्रुटि: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "डाउनलोड गरियो " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "अपडेट डाउनलोड गरियो। तपाईंले अद्यावधिक गर्न एप पुन: सुरु गर्न सक्नुहुन्छ।"
  },
  button: {
    ok: "ठीक छ"
  },
  message: {
    restart: "कृपया पर्खनुहोस्, अनुप्रयोग पुन: सुरु हुँदैछ।"
  },
  menu: {
    main: {
      home: "घर",
      console: "कन्सोल",
      settings: "सेटिङहरू",
      overview: "अवलोकन",
      quit: "छोड्नुहोस्"
    },
    edit: {
      title: "सम्पादन गर्नुहोस्",
      undo: "पूर्ववत गर्नुहोस्",
      redo: "पुन: गर्नुहोस्",
      cut: "काट्नुहोस्",
      copy: "प्रतिलिपि गर्नुहोस्",
      paste: "टाँस्नुहोस्",
      pasteandmatchstyle: "टाँस्नुहोस् र शैली मिलाउनुहोस्",
      delete: "मेट्नुहोस्",
      selectall: "सबै चयन गर्नुहोस्"
    },
    view: {
      title: "हेर्नुहोस्",
      reload: "पुन: लोड गर्नुहोस्",
      forcereload: "बल पुन: लोड गर्नुहोस्",
      toggledevtools: "विकास उपकरणहरू टगल गर्नुहोस्",
      resetzoom: "जुम रिसेट गर्नुहोस्",
      zoomin: "जुम इन गर्नुहोस्",
      zoomout: "जुम आउट गर्नुहोस्",
      togglefullscreen: "पूर्ण स्क्रिन टगल गर्नुहोस्"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "भाषा",
      auto: "Auto (system)",
      translation: {
        ar: "العربية / Arabic",
        az: "Azərbaycanca / Azerbaijani",
        be: "Беларуская / Belarusian",
        bg: "Български / Bulgarian",
        bn: "বাংলা / Bengali",
        cs: "Čeština / Czech",
        da: "Dansk / Danish",
        de: "Deutsch / German",
        el: "Ελληνικά / Greek",
        en: "English",
        es: "Español / Spanish",
        et: "Eesti / Estonian",
        fi: "Suomi / Finnish",
        fil: "Filipino / Filipino",
        fr: "Français / French",
        he: "עברית / Hebrew",
        hr: "Hrvatski / Croatian",
        hu: "Magyar / Hungarian",
        hy: "Հայերեն / Armenian",
        id: "Bahasa Indonesia / Indonesian",
        it: "Italiano / Italian",
        ja: "日本語 / Japanese",
        ka: "ქართული / Georgian",
        kk: "Қазақша / Kazakh",
        km: "ខ្មែរ / Khmer",
        ko: "한국어 / Korean",
        ky: "Кыргызча / Kyrgyz",
        lt: "Lietuvių / Lithuanian",
        mk: "Македонски / Macedonian",
        ms: "Bahasa Melayu / Malay",
        ne: "नेपाली / Nepali",
        nl: "Nederlands / Dutch",
        no: "Norsk / Norwegian",
        pl: "Polski / Polish",
        "pt-BR": "Português (Brasil) / Portuguese (Brazil)",
        "pt-PT": "Português / Portuguese",
        ro: "Română / Romanian",
        ru: "Русский / Russian",
        sk: "Slovenčina / Slovak",
        sl: "Slovenščina / Slovenian",
        sr: "Српски / Serbian",
        sv: "Svenska / Swedish",
        tg: "Тоҷикӣ / Tajik",
        th: "ไทย / Thai",
        tr: "Türkçe / Turkish",
        uk: "Українська / Ukrainian",
        vi: "Tiếng Việt / Vietnamese",
        "zh-HK": "中文（香港） / Chinese (Hong Kong)",
        "zh-TW": "中文（台灣） / Chinese (Taiwan)",
                bs: 'Bosanski / Bosnian',
                si: 'සිංහල / Sinhala',
                sw: 'Kiswahili / Swahili',
                ta: 'தமிழ் / Tamil',
        zn: "中文 / Chinese"
      }
    },
    settings: {
      title: "सेटिङहरू",
      hideMenu: "मुख्य मेनु लुकाउनुहोस् (ALT सँग देखाउनुहोस्)",
      optionToHideMenuState: {
        yes: "पुन: सुरु गरेपछि, यसले मेनु लुकाउनेछ र ALT मा देखाउनेछ।"
      }
    },
    help: {
      changelog: "लग परिवर्तन गर्नुहोस्",
      download: "डाउनलोड गर्नुहोस्",
      developer: "विकासकर्ता",
      checkUpdates: "अपडेटहरू जाँच गर्नुहोस्"
    },
    donate: {
      title: "दान गर्नुहोस्"
    }
  }
};
