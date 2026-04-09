export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Санҷиши навсозӣ...",
    'update-available': "Боргирии охирин версияи ...",
    'update-not-available': "Навсозии нав дастрас нест.",
    error: opts => {
      return `Хатогӣ дар навсозии худкор: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Боргиришуда " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Навсозӣ зеркашӣ карда шуд. Шумо метавонед барномаро барои навсозӣ бозоғоз намоед."
  },
  button: {
    ok: "Хуб"
  },
  message: {
    restart: "Лутфан интизор шавед, барнома аз нав оғоз мешавад."
  },
  menu: {
    main: {
      home: "Хона",
      console: "Консол",
      settings: "Танзимотҳо",
      overview: "Барраси",
      quit: "Истед"
    },
    edit: {
      title: "Таҳрир",
      undo: "Бекор кардан",
      redo: "Такрор кунед",
      cut: "Бурида",
      copy: "Нусхабардорӣ",
      paste: "Часбонед",
      pasteandmatchstyle: "Часбонед ва услубро мувофиқ кунед",
      delete: "Нобуд кунед",
      selectall: "Ҳамаро интихоб кунед"
    },
    view: {
      title: "Намоиш",
      reload: "Аз нав бор кунед",
      forcereload: "Боркунии дубора",
      toggledevtools: "Воситаҳои рушдро иваз кунед",
      resetzoom: "Аз нав танзим кардани масштаб",
      zoomin: "Масштаб кардан",
      zoomout: "Масоҳат кардан",
      togglefullscreen: "Экрани пурраро иваз кунед"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Забон",
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
      title: "Танзимотҳо",
      hideMenu: "Пинҳон кардани менюи асосӣ (намоиш бо ALT)",
      optionToHideMenuState: {
        yes: "Пас аз бозоғозӣ, он менюро пинҳон мекунад ва дар ALT нишон медиҳад."
      }
    },
    help: {
      changelog: "Тағйир додани сабт",
      download: "Зеркашӣ кунед",
      developer: "Таҳиягар",
      checkUpdates: "Навсозиро тафтиш кунед"
    },
    donate: {
      title: "Садақа кунед"
    }
  }
};
