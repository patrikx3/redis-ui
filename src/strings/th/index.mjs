export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "กำลังตรวจสอบการอัปเดต ...",
    'update-available': "กำลังดาวน์โหลดรุ่นล่าสุด ...",
    'update-not-available': "ไม่มีการอัพเดตใหม่",
    error: opts => {
      return `ข้อผิดพลาดในการอัปเดตอัตโนมัติ: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "ดาวน์โหลดแล้ว " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "ดาวน์โหลดอัปเดตแล้ว คุณสามารถรีสตาร์ทแอปเพื่ออัปเดตได้"
  },
  button: {
    ok: "ตกลง"
  },
  message: {
    restart: "โปรดรอสักครู่ แอปพลิเคชันกำลังรีสตาร์ท"
  },
  menu: {
    main: {
      home: "บ้าน",
      console: "คอนโซล",
      settings: "การตั้งค่า",
      overview: "ภาพรวม",
      quit: "เลิก"
    },
    edit: {
      title: "แก้ไข",
      undo: "เลิกทำ",
      redo: "ทำซ้ำ",
      cut: "ตัด",
      copy: "คัดลอก",
      paste: "วาง",
      pasteandmatchstyle: "วางและจับคู่สไตล์",
      delete: "ลบ",
      selectall: "เลือกทั้งหมด"
    },
    view: {
      title: "ดู",
      reload: "โหลดซ้ำ",
      forcereload: "บังคับให้โหลดซ้ำ",
      toggledevtools: "สลับเครื่องมือการพัฒนา",
      resetzoom: "รีเซ็ตการซูม",
      zoomin: "ซูมเข้า",
      zoomout: "ซูมออก",
      togglefullscreen: "สลับแบบเต็มหน้าจอ"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "ภาษา",
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
      title: "การตั้งค่า",
      hideMenu: "ซ่อนเมนูหลัก (แสดงด้วย ALT)",
      optionToHideMenuState: {
        yes: "หลังจากรีสตาร์ทแล้วจะซ่อนเมนูและแสดงบน ALT"
      }
    },
    help: {
      changelog: "บันทึกการเปลี่ยนแปลง",
      download: "ดาวน์โหลด",
      developer: "นักพัฒนา",
      checkUpdates: "ตรวจสอบการอัปเดต"
    },
    donate: {
      title: "บริจาค"
    }
  }
};
