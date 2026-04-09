export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Güncəlləmə yoxlanılır...",
    'update-available': "Ən son buraxılış endirilir...",
    'update-not-available': "Yeni yeniləmə mövcud deyil.",
    error: opts => {
      return `Avtomatik yeniləyicidə xəta: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Endirildi " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Yeniləmə endirildi. Yeniləmək üçün proqramı yenidən başlada bilərsiniz."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Zəhmət olmasa gözləyin, proqram yenidən başlayır."
  },
  menu: {
    main: {
      home: "Ev",
      console: "Konsol",
      settings: "Parametrlər",
      overview: "Ümumi baxış",
      quit: "Çıxın"
    },
    edit: {
      title: "Redaktə et",
      undo: "Geri al",
      redo: "Yenidən edin",
      cut: "kəsmək",
      copy: "Kopyalayın",
      paste: "Yapışdırın",
      pasteandmatchstyle: "Yapışdırın və üslubu uyğunlaşdırın",
      delete: "Sil",
      selectall: "Hamısını seçin"
    },
    view: {
      title: "Baxın",
      reload: "Yenidən yükləyin",
      forcereload: "Yenidən yükləməyə məcbur edin",
      toggledevtools: "İnkişaf alətlərini dəyişdirin",
      resetzoom: "Zoomu sıfırlayın",
      zoomin: "Böyüt",
      zoomout: "Küçült",
      togglefullscreen: "Tam ekrana keçin"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Dil",
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
      title: "Parametrlər",
      hideMenu: "Əsas menyunu gizlədin (ALT ilə göstərin)",
      optionToHideMenuState: {
        yes: "Yenidən başladıqdan sonra o, menyunu gizlədəcək və ALT-də göstərəcək."
      }
    },
    help: {
      changelog: "Dəyişiklik jurnalı",
      download: "Yüklə",
      developer: "Tərtibatçı",
      checkUpdates: "Yeniləmələri yoxlayın"
    },
    donate: {
      title: "Bağışlayın"
    }
  }
};
