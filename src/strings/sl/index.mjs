export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Preverjanje posodobitve ...",
    'update-available': "Prenos najnovejše izdaje ...",
    'update-not-available': "Na voljo ni nobena nova posodobitev.",
    error: opts => {
      return `Napaka v samodejnem posodabljanju: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Preneseno " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Posodobitev prenesena. Za posodobitev lahko znova zaženete aplikacijo."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Počakajte, aplikacija se znova zaganja."
  },
  menu: {
    main: {
      home: "domov",
      console: "Konzola",
      settings: "nastavitve",
      overview: "Pregled",
      quit: "Odnehaj"
    },
    edit: {
      title: "Uredi",
      undo: "Razveljavi",
      redo: "Ponovi",
      cut: "Cut",
      copy: "Kopiraj",
      paste: "Prilepi",
      pasteandmatchstyle: "Prilepi in ujemaj slog",
      delete: "Izbriši",
      selectall: "Izberi vse"
    },
    view: {
      title: "Pogled",
      reload: "Ponovno naloži",
      forcereload: "Prisilno ponovno nalaganje",
      toggledevtools: "Preklop razvojnih orodij",
      resetzoom: "Ponastavi povečavo",
      zoomin: "Povečaj",
      zoomout: "Pomanjšaj",
      togglefullscreen: "Preklop na celoten zaslon"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Jezik",
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
      title: "nastavitve",
      hideMenu: "Skrij glavni meni (prikaži z ALT)",
      optionToHideMenuState: {
        yes: "Po ponovnem zagonu bo skril meni in se prikazal na ALT."
      }
    },
    help: {
      changelog: "Dnevnik sprememb",
      download: "Prenos",
      developer: "Razvijalec",
      checkUpdates: "Preverite posodobitve"
    },
    donate: {
      title: "Donirajte"
    }
  }
};
