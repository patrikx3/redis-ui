export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "업데이트 확인 중...",
    'update-available': "최신 릴리스 다운로드 중...",
    'update-not-available': "새로운 업데이트가 없습니다.",
    error: opts => {
      return `자동 업데이트 오류: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "다운로드됨 " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "업데이트가 다운로드되었습니다. 업데이트하려면 앱을 다시 시작하세요."
  },
  button: {
    ok: "알았어"
  },
  message: {
    restart: "잠시 기다려 주세요. 애플리케이션이 다시 시작됩니다."
  },
  menu: {
    main: {
      home: "홈",
      console: "콘솔",
      settings: "설정",
      overview: "개요",
      quit: "종료"
    },
    edit: {
      title: "편집",
      undo: "실행 취소",
      redo: "다시 실행",
      cut: "컷",
      copy: "복사",
      paste: "붙여넣기",
      pasteandmatchstyle: "붙여넣고 스타일 일치",
      delete: "삭제",
      selectall: "모두 선택"
    },
    view: {
      title: "보기",
      reload: "새로고침",
      forcereload: "강제 새로고침",
      toggledevtools: "개발 도구 전환",
      resetzoom: "줌 재설정",
      zoomin: "확대",
      zoomout: "축소",
      togglefullscreen: "전체 화면 전환"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "언어",
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
      title: "설정",
      hideMenu: "메인 메뉴 숨기기(ALT로 표시)",
      optionToHideMenuState: {
        yes: "다시 시작한 후에는 메뉴가 숨겨지고 ALT에 표시됩니다."
      }
    },
    help: {
      changelog: "변경 로그",
      download: "다운로드",
      developer: "개발자",
      checkUpdates: "업데이트 확인"
    },
    donate: {
      title: "기부"
    }
  }
};
