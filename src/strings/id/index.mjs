export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Memeriksa pembaruan...",
    'update-available': "Mengunduh rilis terbaru...",
    'update-not-available': "Tidak ada pembaruan baru yang tersedia.",
    error: opts => {
      return `Kesalahan dalam pembaruan otomatis: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Diunduh " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Pembaruan diunduh. Anda dapat memulai ulang aplikasi untuk memperbarui."
  },
  button: {
    ok: "Oke"
  },
  message: {
    restart: "Mohon tunggu sebentar, aplikasi sedang restart."
  },
  menu: {
    main: {
      home: "Rumah",
      console: "Konsol",
      settings: "Pengaturan",
      overview: "Ikhtisar",
      quit: "Berhenti"
    },
    edit: {
      title: "Sunting",
      undo: "Membatalkan",
      redo: "Ulangi",
      cut: "Potong",
      copy: "Salin",
      paste: "Tempel",
      pasteandmatchstyle: "Tempel dan cocokkan gaya",
      delete: "Hapus",
      selectall: "Pilih semua"
    },
    view: {
      title: "Lihat",
      reload: "Muat ulang",
      forcereload: "Paksa muat ulang",
      toggledevtools: "Alihkan alat pengembangan",
      resetzoom: "Setel Ulang Zoom",
      zoomin: "Perbesar",
      zoomout: "Perkecil",
      togglefullscreen: "Beralih ke layar penuh"
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
      title: "Pengaturan",
      hideMenu: "Sembunyikan menu utama (tampilkan dengan ALT)",
      optionToHideMenuState: {
        yes: "Setelah restart, menu akan disembunyikan dan ditampilkan di ALT."
      }
    },
    help: {
      changelog: "Ubah catatan",
      download: "Unduh",
      developer: "Pengembang",
      checkUpdates: "Periksa pembaruan"
    },
    donate: {
      title: "Donasi"
    }
  }
};
