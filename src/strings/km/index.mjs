export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "កំពុងពិនិត្យមើលបច្ចុប្បន្នភាព...",
    'update-available': "កំពុងទាញយកកំណែចុងក្រោយបំផុត...",
    'update-not-available': "មិនមានការអាប់ដេតថ្មីទេ។",
    error: opts => {
      return `កំហុសក្នុងការធ្វើ���ច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ៖ ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "បានទាញយក " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "បានទាញយកបច្ចុប្បន្នភាព។ អ្នកអាចចាប់ផ្តើមកម្មវិធីឡើងវិញដើម្បីធ្វើបច្ចុប្បន្នភាព។"
  },
  button: {
    ok: "យល់ព្រម"
  },
  message: {
    restart: "សូមរង់ចាំ កម្មវិធីកំពុងចាប់ផ្តើមឡើងវិញ។"
  },
  menu: {
    main: {
      home: "ផ្ទះ",
      console: "កុងសូល។",
      settings: "ការកំណត់",
      overview: "ទិដ្ឋភាពទូទៅ",
      quit: "ឈប់"
    },
    edit: {
      title: "កែសម្រួល",
      undo: "មិនធ្វើវិញ",
      redo: "ធ្វើឡើងវ���ញ",
      cut: "កាត់",
      copy: "ចម្លង",
      paste: "បិទភ្ជាប់",
      pasteandmatchstyle: "បិទភ្ជាប់ និងផ្គូផ្គងរចនាប័ទ្ម",
      delete: "លុប",
      selectall: "ជ្រើសរើសទាំងអស់។"
    },
    view: {
      title: "មើល",
      reload: "ផ្ទុកឡើងវិញ",
      forcereload: "បង្ខំឱ្យផ្ទុកឡើងវិញ",
      toggledevtools: "បិទបើកឧបករណ៍អភិវឌ្ឍន៍",
      resetzoom: "កំណត់ការពង្រីកឡើងវិញ",
      zoomin: "ពង្រីក",
      zoomout: "ពង្រីក",
      togglefullscreen: "បិទ/បើកពេញអេក្រង់"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "ភាសា",
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
      title: "ការកំណត់",
      hideMenu: "លាក់ម៉ឺនុយមេ (បង្ហាញជាមួយ ALT)",
      optionToHideMenuState: {
        yes: "បន្ទាប់ពីចាប់ផ្តើមឡើងវិញ វានឹងលាក់ម៉ឺនុយ ហើយបង្ហាញនៅលើ ALT ។"
      }
    },
    help: {
      changelog: "ផ្លាស់ប្តូរកំណត់ហេតុ",
      download: "ទាញយក",
      developer: "អ្នកអភិវឌ្ឍន៍",
      checkUpdates: "ពិនិត្យមើលបច្ចុប្បន្នភាព"
    },
    donate: {
      title: "បរិច្ចាគ"
    }
  }
};
