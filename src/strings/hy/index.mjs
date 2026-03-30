export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Ստուգվում է թարմացման համար...",
    'update-available': "Վերջին թողարկումը ներբեռնվում է...",
    'update-not-available': "Նոր թարմացում չկա:",
    error: opts => {
      return `Ավտոմատ թարմացման սխալ. ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Ներբեռնված " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Թարմացումը ներբեռնվեց: Թարմացնելու համար կարող եք վերագործարկել հավելվածը:"
  },
  button: {
    ok: "Լավ"
  },
  message: {
    restart: "Խնդրում ենք սպասել, հավելվածը վերագործարկվում է:"
  },
  menu: {
    main: {
      home: "Տուն",
      console: "Վահանակ",
      settings: "Կարգավորումներ",
      overview: "Ընդհանուր ակնարկ",
      quit: "Դուրս գալ"
    },
    edit: {
      title: "Խմբագրել",
      undo: "Հետարկել",
      redo: "Կրկնել",
      cut: "Կտրել",
      copy: "Պատճենել",
      paste: "Կպցնել",
      pasteandmatchstyle: "Կպցնել և համապատասխանեցնել ոճը",
      delete: "Ջնջել",
      selectall: "Ընտրեք բոլորը"
    },
    view: {
      title: "Դիտել",
      reload: "Վերբեռնել",
      forcereload: "Ստիպել վերաբեռնել",
      toggledevtools: "Միացնել զարգացման գործիքները",
      resetzoom: "Վերականգնել Zoom-ը",
      zoomin: "Մեծացնել",
      zoomout: "Մեծացնել",
      togglefullscreen: "Միացնել ամբողջ էկրանը"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Լեզու",
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
      title: "Կարգավորումներ",
      hideMenu: "Թաքցնել հիմնական ընտրացանկը (ցույց տալ ALT-ով)",
      optionToHideMenuState: {
        yes: "Վերագործարկվելուց հետո այն կթաքցնի ընտրացանկը և կցուցադրվի ALT-ում:"
      }
    },
    help: {
      changelog: "Փոխել գրանցամատյանը",
      download: "Բեռնել",
      developer: "Մշակող",
      checkUpdates: "Ստուգեք թարմացումները"
    },
    donate: {
      title: "Նվիրաբերել"
    }
  }
};
