export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Ser etter oppdatering ...",
    'update-available': "Laster ned siste utgivelse ...",
    'update-not-available': "Ingen ny oppdatering tilgjengelig.",
    error: opts => {
      return `Feil i automatisk oppdatering: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Lastet ned " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Oppdatering lastet ned. Du kan starte appen på nytt for å oppdatere."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Vennligst vent på, programmet starter på nytt."
  },
  menu: {
    main: {
      home: "Hjem",
      console: "Konsoll",
      settings: "Innstillinger",
      overview: "Oversikt",
      quit: "Avslutt"
    },
    edit: {
      title: "Rediger",
      undo: "Angre",
      redo: "Gjenta",
      cut: "Kutt",
      copy: "Kopier",
      paste: "Lim inn",
      pasteandmatchstyle: "Lim inn og match stil",
      delete: "Slett",
      selectall: "Velg alle"
    },
    view: {
      title: "Visning",
      reload: "Last inn på nytt",
      forcereload: "Tving omlasting",
      toggledevtools: "Slå på utviklingsverktøy",
      resetzoom: "Tilbakestill zoom",
      zoomin: "Zoom inn",
      zoomout: "Zoom ut",
      togglefullscreen: "Slå på fullskjerm"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Språk",
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
      title: "Innstillinger",
      hideMenu: "Skjul hovedmenyen (vis med ALT)",
      optionToHideMenuState: {
        yes: "Etter omstart vil den skjule menyen og vises på ALT."
      }
    },
    help: {
      changelog: "Endre logg",
      download: "Last ned",
      developer: "Utvikler",
      checkUpdates: "Sjekk oppdateringer"
    },
    donate: {
      title: "Doner"
    }
  }
};
