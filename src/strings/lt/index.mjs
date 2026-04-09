export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Tikrinama, ar nėra naujinių...",
    'update-available': "Atsisiunčiamas naujausias leidimas...",
    'update-not-available': "Naujas naujinys nepasiekiamas.",
    error: opts => {
      return `Automatinio atnaujinimo klaida: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Atsisiųsta " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Atsisiųstas naujinys. Norėdami atnaujinti, galite iš naujo paleisti programą."
  },
  button: {
    ok: "Gerai"
  },
  message: {
    restart: "Palaukite, programa paleidžiama iš naujo."
  },
  menu: {
    main: {
      home: "Pradžia",
      console: "konsolė",
      settings: "Nustatymai",
      overview: "Apžvalga",
      quit: "Išeik"
    },
    edit: {
      title: "Redaguoti",
      undo: "Anuliuoti",
      redo: "Perdaryti",
      cut: "Iškirpti",
      copy: "Kopijuoti",
      paste: "Įklijuoti",
      pasteandmatchstyle: "Įklijuokite ir suderinkite stilių",
      delete: "Ištrinti",
      selectall: "Pasirinkite viską"
    },
    view: {
      title: "Žiūrėti",
      reload: "Įkelti iš naujo",
      forcereload: "Priverskite įkelti iš naujo",
      toggledevtools: "Perjungti kūrimo įrankius",
      resetzoom: "Iš naujo nustatykite mastelį",
      zoomin: "Priartinti",
      zoomout: "Nutolinti",
      togglefullscreen: "Perjungti visą ekraną"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Kalba",
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
      title: "Nustatymai",
      hideMenu: "Slėpti pagrindinį meniu (rodyti naudojant ALT)",
      optionToHideMenuState: {
        yes: "Paleidus iš naujo, jis paslėps meniu ir bus rodomas ALT."
      }
    },
    help: {
      changelog: "Keisti žurnalą",
      download: "Atsisiųsti",
      developer: "Kūrėjas",
      checkUpdates: "Patikrinkite atnaujinimus"
    },
    donate: {
      title: "Paaukoti"
    }
  }
};
