export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Sinusuri ang update...",
    'update-available': "Dina-download ang pinakabagong release...",
    'update-not-available': "Walang available na bagong update.",
    error: opts => {
      return `Error sa auto-updater: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Na-download " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Na-download ang update. Maaari mong i-restart ang app upang mag-update."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Mangyaring maghintay, ang application ay nagre-restart."
  },
  menu: {
    main: {
      home: "Bahay",
      console: "Console",
      settings: "Mga setting",
      overview: "Pangkalahatang-ideya",
      quit: "quit"
    },
    edit: {
      title: "I-edit",
      undo: "I-undo",
      redo: "Gawin muli",
      cut: "Putulin",
      copy: "Kopyahin",
      paste: "Idikit",
      pasteandmatchstyle: "Idikit at tugma ang istilo",
      delete: "Tanggalin",
      selectall: "Piliin lahat"
    },
    view: {
      title: "Tingnan",
      reload: "I-reload",
      forcereload: "Sapilitang i-reload",
      toggledevtools: "I-toggle ang mga tool sa pag-develop",
      resetzoom: "I-reset ang Zoom",
      zoomin: "Mag-zoom In",
      zoomout: "Mag-zoom out",
      togglefullscreen: "I-toggle ang buong screen"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Wika",
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
      title: "Mga setting",
      hideMenu: "Itago ang pangunahing menu (ipakita gamit ang ALT)",
      optionToHideMenuState: {
        yes: "Pagkatapos mag-restart, itatago nito ang menu at ipapakita sa ALT."
      }
    },
    help: {
      changelog: "Baguhin ang log",
      download: "I-download",
      developer: "Developer",
      checkUpdates: "Suriin ang mga update"
    },
    donate: {
      title: "Mag-donate"
    }
  }
};
