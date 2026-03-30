export default {
  title: "P3X Redis UI",
  updater: {
    'checking-for-update': "Verificando atualizações...",
    'update-available': "Baixando a versão mais recente...",
    'update-not-available': "Nenhuma nova atualização disponível.",
    error: opts => {
      return `Erro no atualizador automático: ${opts.errorMessage}`;
    },
    'download-progress': opts => {
      return "Baixado " + opts.progressObj.percent + "%";
    },
    'update-downloaded': "Atualização baixada. Você pode reiniciar o aplicativo para atualizar."
  },
  button: {
    ok: "OK"
  },
  message: {
    restart: "Aguarde, o aplicativo está reiniciando."
  },
  menu: {
    main: {
      home: "Página inicial",
      console: "Consola",
      settings: "Configurações",
      overview: "Visão geral",
      quit: "Sair"
    },
    edit: {
      title: "Editar",
      undo: "Desfazer",
      redo: "Refazer",
      cut: "Cortar",
      copy: "Copiar",
      paste: "Colar",
      pasteandmatchstyle: "Colar e combinar estilo",
      delete: "Excluir",
      selectall: "Selecionar tudo"
    },
    view: {
      title: "Ver",
      reload: "Recarregar",
      forcereload: "Forçar recarga",
      toggledevtools: "Alternar ferramentas de desenvolvimento",
      resetzoom: "Redefinir zoom",
      zoomin: "Ampliar",
      zoomout: "Diminuir zoom",
      togglefullscreen: "Alternar tela cheia"
    },
    language: {
      // When you translate the language, keep the Language in English
      // eg. Idioma / Language
      title: "Idioma",
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
      title: "Configurações",
      hideMenu: "Ocultar menu principal (mostrar com ALT)",
      optionToHideMenuState: {
        yes: "Após a reinicialização, o menu será ocultado e exibido em ALT."
      }
    },
    help: {
      changelog: "Registro de alterações",
      download: "Baixar",
      developer: "Desenvolvedor",
      checkUpdates: "Verifique as atualizações"
    },
    donate: {
      title: "Doe"
    }
  }
};
