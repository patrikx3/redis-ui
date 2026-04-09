export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Provjera ažuriranja ...',
        'update-available': 'Preuzimanje najnovijeg izdanja ...',
        'update-not-available': 'Nema novog ažuriranja.',
        error: (opts) => {
            return `Greška u automatskom ažuriranju: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Preuzeto ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Ažuriranje preuzeto. Možete ponovo pokrenuti aplikaciju za ažuriranje.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Molimo sačekajte, aplikacija se ponovo pokreće.',
    },
    menu: {
        main: {
            home: 'Početna',
            console: 'Konzola',
            settings: 'Postavke',
            overview: 'Pregled',
            quit: 'Izlaz',
        },
        edit: {
            title: 'Uredi',
            undo: 'Poništi',
            redo: 'Ponovi',
            cut: 'Izreži',
            copy: 'Kopiraj',
            paste: 'Zalijepi',
            pasteandmatchstyle: 'Zalijepi i uskladi stil',
            delete: 'Obriši',
            selectall: 'Odaberi sve',
        },
        view: {
            title: 'Pregled',
            reload: 'Ponovo učitaj',
            forcereload: 'Prisilno ponovo učitaj',
            toggledevtools: 'Uključi/isključi razvojne alate',
            resetzoom: 'Resetuj zum',
            zoomin: 'Uvećaj',
            zoomout: 'Umanji',
            togglefullscreen: 'Uključi/isključi puni ekran',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Jezik / Language',
            auto: 'Auto (system)',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'Bugarski / Bulgarian',
                cs: 'Češki / Czech',
                de: 'Njemački / German',
                el: 'Grčki / Greek',
                en: 'Engleski / English',
                es: 'Španski / Spanish',
                fr: 'Francuski / French',
                hu: 'Mađarski / Hungarian',
                it: 'Italijanski / Italian',
                ja: 'Japanski / Japanese',
                nl: 'Holandski / Dutch',
                pl: 'Poljski / Polish',
                'pt-PT': 'Portugalski / Portuguese',
                ro: 'Rumunski / Romanian',
                ru: 'Ruski / Russian',
                sk: 'Slovački / Slovak',
                sr: 'Srpski / Serbian',
                sv: 'Švedski / Swedish',
                tr: 'Turski / Turkish',
                uk: 'Ukrajinski / Ukrainian',
                zn: 'Kineski / Chinese',
                ar: 'Arapski / Arabic',
                az: 'Azerbejdžanski / Azerbaijani',
                be: 'Bjeloruski / Belarusian',
                bn: 'Bengalski / Bengali',
                da: 'Danski / Danish',
                et: 'Estonski / Estonian',
                fi: 'Finski / Finnish',
                fil: 'Filipinski / Filipino',
                he: 'Hebrejski / Hebrew',
                hr: 'Hrvatski / Croatian',
                hy: 'Jermenski / Armenian',
                id: 'Indonezijski / Indonesian',
                ka: 'Gruzijski / Georgian',
                kk: 'Kazaški / Kazakh',
                km: 'Kmerski / Khmer',
                ko: 'Korejski / Korean',
                ky: 'Kirgiski / Kyrgyz',
                lt: 'Litvanski / Lithuanian',
                mk: 'Makedonski / Macedonian',
                ms: 'Malajski / Malay',
                ne: 'Nepalski / Nepali',
                no: 'Norveški / Norwegian',
                'pt-BR': 'Portugalski (Brazil) / Portuguese (Brazil)',
                sl: 'Slovenački / Slovenian',
                tg: 'Tadžički / Tajik',
                th: 'Tajlandski / Thai',
                vi: 'Vijetnamski / Vietnamese',
                'zh-HK': 'Kineski (Hong Kong) / Chinese (Hong Kong)',
                'zh-TW': 'Kineski (Tajvan) / Chinese (Taiwan)',
                sw: 'Svahili / Swahili',
                si: 'Sinhalski / Sinhala',
                ta: 'Tamilski / Tamil',
                bs: 'Bosanski / Bosnian',
            }
        },
        settings: {
            title: 'Postavke',
            hideMenu: 'Sakrij glavni meni (prikaži sa ALT)',
            optionToHideMenuState: {
                yes: 'Nakon ponovnog pokretanja, sakrit će meni i prikazati na ALT.',
            },
        },
        help: {
            changelog: 'Dnevnik promjena',
            download: 'Preuzmi',
            developer: 'Programer',
            checkUpdates: 'Provjeri ažuriranja',
        },
        donate: {
            title: 'Doniraj',
        }
    },
}
