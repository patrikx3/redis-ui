export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Се проверува за ажурирање...",
    'update-available': "Се презема најновото издание...",
    'update-not-available': "Нема достапно ново ажурирање.",
    error: opts => {
      return `Грешка во автоматското ажурирање: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Преземено " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Ажурирањето е преземено. Може да ја рестартирате апликацијата за да се ажурира."
  },
  button: {
    ok: "Во ред"
  },
  message: {
    restart: "Ве молиме почекајте, апликацијата се рестартира."
  },
  menu: {
    main: {
      home: "Дома",
      console: "Конзола",
      settings: "Поставки",
      overview: "Преглед",
      quit: "Откажи"
    },
    edit: {
      title: "Уреди",
      undo: "Врати",
      redo: "Повторете",
      cut: "Исечете",
      copy: "Копирај",
      paste: "Вметни",
      pasteandmatchstyle: "Стилот за залепување и натпревар",
      delete: "Избриши",
      selectall: "Изберете ги сите"
    },
    view: {
      title: "Прикажи",
      reload: "Вчитај повторно",
      forcereload: "Присилно повторно вчитување",
      toggledevtools: "Вклучете ги алатките за развој",
      resetzoom: "Ресетирајте го Зумирањето",
      zoomin: "Зумирајте",
      zoomout: "Одзумирај",
      togglefullscreen: "Вклучете цел екран"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Јазик",
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
      title: "Поставки",
      hideMenu: "Сокриј го главното мени (прикажи со ALT)",
      optionToHideMenuState: {
        yes: "По рестартирањето, ќе го скрие менито и ќе се прикаже на ALT."
      }
    },
    help: {
      changelog: "Променете го дневникот",
      download: "Преземи",
      developer: "Програмер",
      checkUpdates: "Проверете ги ажурирањата"
    },
    donate: {
      title: "Донирајте"
    }
  }
};
