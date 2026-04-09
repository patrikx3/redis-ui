export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Tarkistetaan päivitystä...",
    'update-available': "Ladataan uusinta julkaisua...",
    'update-not-available': "Uusi päivitys ei ole saatavilla.",
    error: opts => {
      return `Virhe automaattisessa päivityksessä: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Ladattu " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Päivitys ladattu. Voit käynnistää sovelluksen uudelleen päivittääksesi."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Odota hetki, sovellus käynnistyy uudelleen."
  },
  menu: {
    main: {
      home: "Kotiin",
      console: "konsoli",
      settings: "Asetukset",
      overview: "Yleiskatsaus",
      quit: "Lopeta"
    },
    edit: {
      title: "Muokkaa",
      undo: "Kumoa",
      redo: "Toista",
      cut: "Leikkaa",
      copy: "Kopioi",
      paste: "Liitä",
      pasteandmatchstyle: "Liitä ja sovita tyyli",
      delete: "Poista",
      selectall: "Valitse kaikki"
    },
    view: {
      title: "Näytä",
      reload: "Lataa uudelleen",
      forcereload: "Pakota uudelleenlataus",
      toggledevtools: "Ota kehitystyökalut käyttöön",
      resetzoom: "Palauta zoomaus",
      zoomin: "Lähennä",
      zoomout: "Loitonna",
      togglefullscreen: "Koko näyttö päälle/pois"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Kieli",
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
      title: "Asetukset",
      hideMenu: "Piilota päävalikko (näytä ALT)",
      optionToHideMenuState: {
        yes: "Uudelleenkäynnistyksen jälkeen se piilottaa valikon ja näkyy ALT."
      }
    },
    help: {
      changelog: "Muutosloki",
      download: "Lataa",
      developer: "Kehittäjä",
      checkUpdates: "Tarkista päivitykset"
    },
    donate: {
      title: "Lahjoita"
    }
  }
};
