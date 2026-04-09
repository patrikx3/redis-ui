export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Värskenduste otsimine ...",
    'update-available': "Viimase versiooni allalaadimine...",
    'update-not-available': "Uut värskendust pole saadaval.",
    error: opts => {
      return `Viga automaatvärskendusprogrammis: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Alla laaditud " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Värskendus on alla laaditud. Värskendamiseks võite rakenduse taaskäivitada."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Oodake, rakendus taaskäivitub."
  },
  menu: {
    main: {
      home: "Kodu",
      console: "konsool",
      settings: "Seaded",
      overview: "Ülevaade",
      quit: "Lõpeta"
    },
    edit: {
      title: "Muuda",
      undo: "Võta tagasi",
      redo: "Tee uuesti",
      cut: "Lõika",
      copy: "Kopeeri",
      paste: "Kleebi",
      pasteandmatchstyle: "Kleepige ja sobitage stiil",
      delete: "Kustuta",
      selectall: "Valige kõik"
    },
    view: {
      title: "Vaade",
      reload: "Laadi uuesti",
      forcereload: "Sundige uuesti laadima",
      toggledevtools: "Arendustööriistade sisse- ja väljalülitamine",
      resetzoom: "Lähtestage suum",
      zoomin: "Suumi sisse",
      zoomout: "Suumi välja",
      togglefullscreen: "Lülitage täisekraan sisse"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Keel",
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
      title: "Seaded",
      hideMenu: "Peida peamenüü (kuva koos ALT)",
      optionToHideMenuState: {
        yes: "Pärast taaskäivitamist peidab see menüü ja kuvatakse rakenduses ALT."
      }
    },
    help: {
      changelog: "Muuda logi",
      download: "Laadi alla",
      developer: "Arendaja",
      checkUpdates: "Kontrollige värskendusi"
    },
    donate: {
      title: "Anneta"
    }
  }
};
