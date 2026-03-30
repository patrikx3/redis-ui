export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Жаңарту тексерілуде...",
    'update-available': "Соңғы шығарылым жүктелуде...",
    'update-not-available': "Жаңа жаңарту жоқ.",
    error: opts => {
      return `Автоматты жаңартудағы қате: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Жүктеп алынды " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Жаңарту жүктелді. Жаңарту үшін қолданбаны қайта іске қосуға болады."
  },
  button: {
    ok: "Жарайды"
  },
  message: {
    restart: "Күте тұрыңыз, қолданба қайта іске қосылуда."
  },
  menu: {
    main: {
      home: "Үй",
      console: "Консоль",
      settings: "Параметрлер",
      overview: "Шолу",
      quit: "Шығу"
    },
    edit: {
      title: "Өңдеу",
      undo: "Болдырмау",
      redo: "Қайталау",
      cut: "Кесу",
      copy: "Көшіру",
      paste: "Қою",
      pasteandmatchstyle: "Стильді қою және сәйкестендіру",
      delete: "Жою",
      selectall: "Барлығын таңдаңыз"
    },
    view: {
      title: "Көру",
      reload: "Қайта жүктеңіз",
      forcereload: "Мәжбүрлеп қайта жүктеу",
      toggledevtools: "Әзірлеу құралдарын ауыстырып-қосқыш",
      resetzoom: "Масштабты қалпына келтіру",
      zoomin: "Үлкейту",
      zoomout: "Кішірейту",
      togglefullscreen: "Толық экранды ауыстыру"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Тіл",
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
      title: "Параметрлер",
      hideMenu: "Негізгі мәзірді жасыру (ALT арқылы көрсету)",
      optionToHideMenuState: {
        yes: "Қайта іске қосқаннан кейін ол мәзірді жасырады және ALT жүйесінде көрсетіледі."
      }
    },
    help: {
      changelog: "Журналды өзгерту",
      download: "Жүктеп алу",
      developer: "Әзірлеуші",
      checkUpdates: "Жаңартуларды тексеріңіз"
    },
    donate: {
      title: "Садақа беру"
    }
  }
};
