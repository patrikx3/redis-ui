export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Жаңыртуу текшерилүүдө...",
    'update-available': "Акыркы чыгарылыш жүктөлүүдө...",
    'update-not-available': "Жаңы жаңыртуу жок.",
    error: opts => {
      return `Автоматтык жаңырткычтагы ката: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Жүктөлүп алынды " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Жаңыртуу жүктөлүп алынды. Жаңыртуу үчүн колдонмону өчүрүп күйгүзсөңүз болот."
  },
  button: {
    ok: "макул"
  },
  message: {
    restart: "Күтө туруңуз, колдонмо өчүрүлүп-күйгүзүлүүдө."
  },
  menu: {
    main: {
      home: "Үй",
      console: "Консол",
      settings: "Орнотуулар",
      overview: "Обзор",
      quit: "Чыгыңыз"
    },
    edit: {
      title: "Түзөтүү",
      undo: "Жок кылуу",
      redo: "Redo",
      cut: "Кесүү",
      copy: "Көчүрмө",
      paste: "Паста",
      pasteandmatchstyle: "Чаптоо жана стилди дал келтирүү",
      delete: "Жок кылуу",
      selectall: "Баарын танда"
    },
    view: {
      title: "Көрүү",
      reload: "Кайра жүктөө",
      forcereload: "Кайра жүктөө",
      toggledevtools: "Өнүктүрүү куралдарын которуштуруу",
      resetzoom: "Масштабды баштапкы абалга келтирүү",
      zoomin: "Чоңойтуу",
      zoomout: "Кичирейтүү",
      togglefullscreen: "Толук экранды которуштуруу"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Тил",
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
      title: "Орнотуулар",
      hideMenu: "Негизги менюну жашыруу (ALT менен көрсөтүү)",
      optionToHideMenuState: {
        yes: "Кайра күйгүзгөндөн кийин, ал менюну жашырып, ALTде көрсөтөт."
      }
    },
    help: {
      changelog: "Журналды өзгөртүү",
      download: "Жүктөп алуу",
      developer: "Иштеп чыгуучу",
      checkUpdates: "Жаңыртууларды текшерүү"
    },
    donate: {
      title: "Кайрымдуулук кылуу"
    }
  }
};
