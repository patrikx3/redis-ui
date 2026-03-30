export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Đang kiểm tra cập nhật...",
    'update-available': "Đang tải xuống bản phát hành mới nhất...",
    'update-not-available': "Không có bản cập nhật mới.",
    error: opts => {
      return `Lỗi tự động cập nhật: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Đã tải xuống " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Đã tải xuống bản cập nhật. Bạn có thể khởi động lại ứng dụng để cập nhật."
  },
  button: {
    ok: "được rồi"
  },
  message: {
    restart: "Vui lòng đợi, ứng dụng đang khởi động lại."
  },
  menu: {
    main: {
      home: "Trang chủ",
      console: "Bảng điều khiển",
      settings: "Cài đặt",
      overview: "Tổng quan",
      quit: "Thoát"
    },
    edit: {
      title: "Chỉnh sửa",
      undo: "Hoàn tác",
      redo: "Làm lại",
      cut: "Cắt",
      copy: "Sao chép",
      paste: "Dán",
      pasteandmatchstyle: "Dán và kết hợp phong cách",
      delete: "Xóa",
      selectall: "Chọn tất cả"
    },
    view: {
      title: "Xem",
      reload: "Tải lại",
      forcereload: "Buộc tải lại",
      toggledevtools: "Chuyển đổi các công cụ phát triển",
      resetzoom: "Đặt lại thu phóng",
      zoomin: "Phóng to",
      zoomout: "Thu nhỏ",
      togglefullscreen: "Chuyển đổi toàn màn hình"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Ngôn ngữ",
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
      title: "Cài đặt",
      hideMenu: "Ẩn menu chính (hiển thị với ALT)",
      optionToHideMenuState: {
        yes: "Sau khi khởi động lại, nó sẽ ẩn menu và hiển thị trên ALT."
      }
    },
    help: {
      changelog: "Nhật ký thay đổi",
      download: "Tải xuống",
      developer: "Nhà phát triển",
      checkUpdates: "Kiểm tra cập nhật"
    },
    donate: {
      title: "Đóng góp"
    }
  }
};
