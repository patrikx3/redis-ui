export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "მიმდინარეობს განახლების შემოწმება...",
    'update-available': "მიმდინარეობს უახლესი გამოშვების ჩამოტვირთვა...",
    'update-not-available': "ახალი განახლება არ არის ხელმისაწვდომი.",
    error: opts => {
      return `შეცდომა ავტომატურ განახლებაში: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "ჩამოტვირთულია " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "განახლება ჩამოტვირთულია. განახლებისთვის შეგიძლიათ გადატვირთოთ აპი."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "გთხოვთ დაელოდოთ, აპლიკაციის გადატვირთვა მიმდინარეობს."
  },
  menu: {
    main: {
      home: "მთავარი",
      console: "კონსოლი",
      settings: "პარამეტრები",
      overview: "მიმოხილვა",
      quit: "თავი დაანებე"
    },
    edit: {
      title: "რედაქტირება",
      undo: "გაუქმება",
      redo: "ხელახლა",
      cut: "გაჭრა",
      copy: "კოპირება",
      paste: "პასტა",
      pasteandmatchstyle: "ჩასვით და ემთხვევა სტილი",
      delete: "წაშლა",
      selectall: "აირჩიეთ ყველა"
    },
    view: {
      title: "ხედი",
      reload: "გადატვირთვა",
      forcereload: "იძულებითი გადატვირთვა",
      toggledevtools: "განვითარების ინსტრუმენტების გადართვა",
      resetzoom: "გადატვირთეთ მასშტაბირება",
      zoomin: "მასშტაბირება",
      zoomout: "მასშტაბირება",
      togglefullscreen: "სრული ეკრანის გადართვა"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "ენა",
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
      title: "პარამეტრები",
      hideMenu: "მთავარი მენიუს დამალვა (ჩვენება ALT-ით)",
      optionToHideMenuState: {
        yes: "გადატვირთვის შემდეგ, ის დამალავს მენიუს და გამოჩნდება ALT-ზე."
      }
    },
    help: {
      changelog: "ჟურნალის შეცვლა",
      download: "ჩამოტვირთვა",
      developer: "დეველოპერი",
      checkUpdates: "შეამოწმეთ განახლებები"
    },
    donate: {
      title: "შემოწირულობა"
    }
  }
};
