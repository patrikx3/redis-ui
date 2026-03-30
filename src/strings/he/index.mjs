export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "מחפש עדכון...",
    'update-available': "מוריד את המהדורה האחרונה...",
    'update-not-available': "אין עדכון חדש זמין.",
    error: opts => {
      return `שגיאה בעדכון האוטומטי: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "הורד " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "העדכון הורד. אתה יכול להפעיל מחדש את האפליקציה כדי לעדכן."
  },
  button: {
    ok: "בסדר"
  },
  message: {
    restart: "נא להמתין, היישום מופעל מחדש."
  },
  menu: {
    main: {
      home: "בית",
      console: "קונסולה",
      settings: "הגדרות",
      overview: "סקי��ה כללית",
      quit: "עזוב"
    },
    edit: {
      title: "ערוך",
      undo: "בטל",
      redo: "בצע מחדש",
      cut: "גזור",
      copy: "העתק",
      paste: "הדבק",
      pasteandmatchstyle: "הדבק והתאם סגנון",
      delete: "מחק",
      selectall: "בחר הכל"
    },
    view: {
      title: "הצג",
      reload: "טען מחדש",
      forcereload: "כוח טעינה מחדש",
      toggledevtools: "החלף כלי פיתוח",
      resetzoom: "אפס זום",
      zoomin: "זום אין",
      zoomout: "זום החוצה",
      togglefullscreen: "החלף מסך מלא"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "שפה",
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
      title: "הגדרות",
      hideMenu: "הסתר תפריט ראשי (הצג עם ALT)",
      optionToHideMenuState: {
        yes: "לאחר הפעלה מחדש, הוא יסתיר את התפריט ויופיע ב-ALT."
      }
    },
    help: {
      changelog: "יומן שינוי",
      download: "הורד",
      developer: "מפתח",
      checkUpdates: "בדוק עדכונים"
    },
    donate: {
      title: "לתרום"
    }
  }
};
