export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Menyemak kemas kini...",
    'update-available': "Memuat turun keluaran terkini...",
    'update-not-available': "Tiada kemas kini baharu tersedia.",
    error: opts => {
      return `Ralat dalam pengemas kini automatik: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Dimuat turun " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Kemas kini dimuat turun. Anda boleh memulakan semula apl untuk mengemas kini."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Sila tunggu, aplikasi dimulakan semula."
  },
  menu: {
    main: {
      home: "Rumah",
      console: "Konsol",
      settings: "tetapan",
      overview: "Gambaran keseluruhan",
      quit: "Berhenti"
    },
    edit: {
      title: "Sunting",
      undo: "Buat asal",
      redo: "Buat semula",
      cut: "potong",
      copy: "salin",
      paste: "tampal",
      pasteandmatchstyle: "Tampal dan padankan gaya",
      delete: "Padam",
      selectall: "Pilih semua"
    },
    view: {
      title: "Lihat",
      reload: "Muat semula",
      forcereload: "Paksa muat semula",
      toggledevtools: "Togol alat pembangunan",
      resetzoom: "Tetapkan semula Zum",
      zoomin: "Zum Masuk",
      zoomout: "Zum keluar",
      togglefullscreen: "Togol skrin penuh"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Bahasa",
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
      title: "tetapan",
      hideMenu: "Sembunyikan menu utama (tunjukkan dengan ALT)",
      optionToHideMenuState: {
        yes: "Selepas memulakan semula, ia akan menyembunyikan menu dan dipaparkan pada ALT."
      }
    },
    help: {
      changelog: "Tukar log",
      download: "Muat turun",
      developer: "pemaju",
      checkUpdates: "Semak kemas kini"
    },
    donate: {
      title: "Menderma"
    }
  }
};
