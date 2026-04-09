export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Ідзе праверка абнаўлення...",
    'update-available': "Спампоўка апошняга выпуску...",
    'update-not-available': "Няма даступных новых абнаўленняў.",
    error: opts => {
      return `Памылка ў праграме аўтаматычнага абнаўлення: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Спампавана " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Абнаўленне спампавана. Вы можаце перазапусціць праграму для абнаўлення."
  },
  button: {
    ok: "добра"
  },
  message: {
    restart: "Калі ласка, пачакайце, праграма перазапускаецца."
  },
  menu: {
    main: {
      home: "дадому",
      console: "Кансоль",
      settings: "Налады",
      overview: "Агляд",
      quit: "Выйсці"
    },
    edit: {
      title: "Рэдагаваць",
      undo: "Адмяніць",
      redo: "Паўтарыць",
      cut: "Выразаць",
      copy: "Копія",
      paste: "Уставіць",
      pasteandmatchstyle: "Устаўце і падбярыце стыль",
      delete: "Выдаліць",
      selectall: "Выбраць усё"
    },
    view: {
      title: "Выгляд",
      reload: "Перазагрузіць",
      forcereload: "Прымусова перазагрузіць",
      toggledevtools: "Пераключыць інструменты распрацоўкі",
      resetzoom: "Скінуць маштаб",
      zoomin: "Павялічыць",
      zoomout: "Паменшыць маштаб",
      togglefullscreen: "Пераключыць на ўвесь экран"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "мова",
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
      title: "Налады",
      hideMenu: "Схаваць галоўнае меню (паказаць з ALT)",
      optionToHideMenuState: {
        yes: "Пасля перазапуску ён схавае меню і пакажа на ALT."
      }
    },
    help: {
      changelog: "Журнал змяненняў",
      download: "Спампаваць",
      developer: "Распрацоўшчык",
      checkUpdates: "Праверце абнаўленні"
    },
    donate: {
      title: "Ахвяраваць"
    }
  }
};
