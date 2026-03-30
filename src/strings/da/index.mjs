export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Søger efter opdatering...",
    'update-available': "Downloader seneste udgivelse...",
    'update-not-available': "Ingen ny opdatering tilgængelig.",
    error: opts => {
      return `Fejl i automatisk opdatering: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Downloadet " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Opdatering downloadet. Du kan genstarte appen for at opdatere."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Vent venligst, applikationen genstarter."
  },
  menu: {
    main: {
      home: "Hjem",
      console: "Konsol",
      settings: "Indstillinger",
      overview: "Oversigt",
      quit: "Afslut"
    },
    edit: {
      title: "Rediger",
      undo: "Fortryd",
      redo: "Gentag",
      cut: "Klip",
      copy: "Kopiér",
      paste: "Indsæt",
      pasteandmatchstyle: "Sæt ind og match stil",
      delete: "Slet",
      selectall: "Vælg alle"
    },
    view: {
      title: "Visning",
      reload: "Genindlæs",
      forcereload: "Tving genindlæsning",
      toggledevtools: "Skift udviklingsværktøjer",
      resetzoom: "Nulstil zoom",
      zoomin: "Zoom ind",
      zoomout: "Zoom ud",
      togglefullscreen: "Skift fuld skærm"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Sprog",
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
      title: "Indstillinger",
      hideMenu: "Skjul hovedmenu (vis med ALT)",
      optionToHideMenuState: {
        yes: "Efter genstart skjuler den menuen og vises på ALT."
      }
    },
    help: {
      changelog: "Skift log",
      download: "Download",
      developer: "Udvikler",
      checkUpdates: "Tjek opdateringer"
    },
    donate: {
      title: "Doner"
    }
  }
};
