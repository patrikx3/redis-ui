export default {
  title: "ZXQP3XTToken0QXZ",
  updater: {
    'checking-for-update': "正在檢查更新...",
    'update-available': "正在下載最新版本...",
    'update-not-available': "沒有可用的新更新。",
    error: opts => {
      return `自動更新程式出錯：${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "已下載" + opts.progressObj.percent + "%";
    },
    'update-downloaded': "更新已下載。您可以重新啟動應用程式來更新。"
  },
  button: {
    ok: "好的"
  },
  message: {
    restart: "請稍候，應用程式正在重新啟動。"
  },
  menu: {
    main: {
      home: "首頁",
      console: "主機",
      settings: "設定",
      overview: "概述",
      quit: "戒菸"
    },
    edit: {
      title: "編輯",
      undo: "撤銷",
      redo: "重做",
      cut: "切",
      copy: "複製",
      paste: "貼上",
      pasteandmatchstyle: "貼上並匹配樣式",
      delete: "刪除",
      selectall: "選擇全部"
    },
    view: {
      title: "查看",
      reload: "重新載入",
      forcereload: "強制重新載入",
      toggledevtools: "切換開發工具",
      resetzoom: "重置縮放",
      zoomin: "放大",
      zoomout: "縮小",
      togglefullscreen: "切換全螢幕"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "語言",
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
      title: "設定",
      hideMenu: "隱藏主選單（以ALT顯示）",
      optionToHideMenuState: {
        yes: "重新啟動後，將隱藏選單並在ALT上顯示。"
      }
    },
    help: {
      changelog: "變更日誌",
      download: "下載",
      developer: "開發商",
      checkUpdates: "檢查更新"
    },
    donate: {
      title: "捐贈"
    }
  }
};
