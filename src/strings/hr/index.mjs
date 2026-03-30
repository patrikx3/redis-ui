export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Provjera ažuriranja...",
    'update-available': "Preuzimanje najnovijeg izdanja...",
    'update-not-available': "Nema dostupnih novih ažuriranja.",
    error: opts => {
      return `Greška u automatskom ažuriranju: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Preuzeto " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Ažuriranje preuzeto. Možete ponovno pokrenuti aplikaciju za ažuriranje."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Molimo pričekajte, aplikacija se ponovno pokreće."
  },
  menu: {
    main: {
      home: "Dom",
      console: "Konzola",
      settings: "postavke",
      overview: "Pregled",
      quit: "Odustati"
    },
    edit: {
      title: "Uredi",
      undo: "Poništi",
      redo: "Ponovi",
      cut: "rezati",
      copy: "Kopiraj",
      paste: "Zalijepite",
      pasteandmatchstyle: "Zalijepi i uskladi stil",
      delete: "Izbriši",
      selectall: "Odaberite sve"
    },
    view: {
      title: "pogled",
      reload: "Ponovno učitaj",
      forcereload: "Prisilno ponovno učitavanje",
      toggledevtools: "Uključi/isključi razvojne alate",
      resetzoom: "Resetiraj zumiranje",
      zoomin: "Povećaj",
      zoomout: "Smanji",
      togglefullscreen: "Uključi/isključi cijeli zaslon"
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
      title: "postavke",
      hideMenu: "Sakrij glavni izbornik (prikaži sa ALT)",
      optionToHideMenuState: {
        yes: "Nakon ponovnog pokretanja, sakrit će izbornik i prikazati na ALT."
      }
    },
    help: {
      changelog: "Dnevnik promjena",
      download: "preuzimanje",
      developer: "Developer",
      checkUpdates: "Provjerite ažuriranja"
    },
    donate: {
      title: "Donirajte"
    }
  }
};
