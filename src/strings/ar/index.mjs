export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "جارٍ التحقق من التحديث...",
    'update-available': "جاري تنزيل الاصدار الاخير...",
    'update-not-available': "لا يوجد تحديث جديد متاح.",
    error: opts => {
      return `خطأ في التحديث التلقائي: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "تم التنزيل " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "تم تنزيل التحديث. يمكنك إعادة تشغيل التطبيق للتحديث."
  },
  button: {
    ok: "حسنًا"
  },
  message: {
    restart: "يرجى الانتظار، تتم إعادة تشغيل التطبيق."
  },
  menu: {
    main: {
      home: "الصفحة الرئيسية",
      console: "وحدة التحكم",
      settings: "الإعدادات",
      overview: "نظرة عامة",
      quit: "استقال"
    },
    edit: {
      title: "تحرير",
      undo: "تراجع",
      redo: "إعادة",
      cut: "قطع",
      copy: "نسخ",
      paste: "لصق",
      pasteandmatchstyle: "لصق ومطابقة النمط",
      delete: "حذف",
      selectall: "حدد الكل"
    },
    view: {
      title: "عرض",
      reload: "إعادة تحميل",
      forcereload: "إعادة تحميل القوة",
      toggledevtools: "تبديل أدوات التطوير",
      resetzoom: "إعادة ضبط التكبير",
      zoomin: "تكبير",
      zoomout: "تصغير",
      togglefullscreen: "تبديل ملء الشاشة"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "اللغة",
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
      title: "الإعدادات",
      hideMenu: "إخفاء القائمة الرئيسية (إظهار باستخدام ALT)",
      optionToHideMenuState: {
        yes: "بعد إعادة التشغيل، سيتم إخفاء القائمة وتظهر على ALT."
      }
    },
    help: {
      changelog: "تغيير السجل",
      download: "تحميل",
      developer: "المطور",
      checkUpdates: "التحقق من التحديثات"
    },
    donate: {
      title: "تبرع"
    }
  }
};
