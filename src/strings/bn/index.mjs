export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "আপডেটের জন্য পরীক্ষা করা হচ্ছে...",
    'update-available': "সর্বশেষ প্রকাশ ডাউনলোড হচ্ছে...",
    'update-not-available': "কোন নতুন আপডেট উপলব্ধ নেই.",
    error: opts => {
      return `স্বয়ংক্রিয়-আপডেটারে ত্রুটি: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "ডাউনলোড করা হয়েছে " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "আপডেট ডাউনলোড হয়েছে। আপনি আপডেট করতে অ্যাপটি পুনরায় চালু করতে পারেন।"
  },
  button: {
    ok: "ঠিক আছে"
  },
  message: {
    restart: "অনুগ্রহ করে অপেক্ষা করুন, অ্যাপ্লিকেশনটি পুনরায় চালু হচ্ছে৷"
  },
  menu: {
    main: {
      home: "বাড়ি",
      console: "কনসোল",
      settings: "সেটিংস",
      overview: "ওভারভিউ",
      quit: "প্রস্থান করুন"
    },
    edit: {
      title: "সম্পাদনা করুন",
      undo: "পূর্বাবস্থায় ফেরান",
      redo: "আবার করুন",
      cut: "কাটা",
      copy: "কপি",
      paste: "পেস্ট করুন",
      pasteandmatchstyle: "পেস্ট করুন এবং শৈলী মেলান",
      delete: "মুছে দিন",
      selectall: "সব নির্বাচন করুন"
    },
    view: {
      title: "দেখুন",
      reload: "পুনরায় লোড করুন",
      forcereload: "জোর করে পুনরায় লোড করুন",
      toggledevtools: "উন্নয়ন টুল টগল করুন",
      resetzoom: "জুম রিসেট করুন",
      zoomin: "জুম ইন করুন",
      zoomout: "জুম আউট করুন",
      togglefullscreen: "পূর্ণ স্ক্রীন টগল করুন"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "ভাষা",
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
      title: "সেটিংস",
      hideMenu: "প্রধান মেনু লুকান (ALT দিয়ে দেখান)",
      optionToHideMenuState: {
        yes: "পুনঃসূচনা করার পরে, এটি মেনুটি লুকাবে এবং ALT এ দেখাবে।"
      }
    },
    help: {
      changelog: "লগ পরিবর্তন করুন",
      download: "ডাউনলোড করুন",
      developer: "বিকাশকারী",
      checkUpdates: "আপডেট চেক করুন"
    },
    donate: {
      title: "দান করুন"
    }
  }
};
