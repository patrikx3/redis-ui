export default {
    title: 'P3X Redis UI',
    updater: {
        'checking-for-update': 'Έλεγχος για ενημερώσεις ...',
        'update-available': 'Λήψη τελευταίας έκδοσης ...',
        'update-not-available': 'Δεν υπάρχει νέα ενημέρωση.',
        error: (opts) => {
            return `Σφάλμα στην αυτόματη ενημέρωση: ${opts.errorMessage}`
        },
        'download-progress': (opts) => {
            return 'Λήφθηκε ' + opts.progressObj.percent + '%'
        },
        'update-downloaded': 'Η ενημέρωση λήφθηκε. Μπορείτε να επανεκκινήσετε την εφαρμογή για ενημέρωση.'
    },
    button: {
      ok: 'OK',
    },
    message: {
        restart: 'Παρακαλώ περιμένετε, η εφαρμογή επανεκκινείται.',
    },
    menu: {
        main: {
            home: 'Αρχική',
            console: 'Κονσόλα',
            settings: 'Ρυθμίσεις',
            overview: 'Επισκόπηση',
            quit: 'Έξοδος',
        },
        edit: {
            title: 'Επεξεργασία',
            undo: 'Αναίρεση',
            redo: 'Επανάληψη',
            cut: 'Αποκοπή',
            copy: 'Αντιγραφή',
            paste: 'Επικόλληση',
            pasteandmatchstyle: 'Επικόλληση με αντιστοίχιση στυλ',
            delete: 'Διαγραφή',
            selectall: 'Επιλογή όλων',
        },
        view: {
            title: 'Προβολή',
            reload: 'Επαναφόρτωση',
            forcereload: 'Αναγκαστική επαναφόρτωση',
            toggledevtools: 'Εναλλαγή εργαλείων ανάπτυξης',
            resetzoom: 'Επαναφορά μεγέθυνσης',
            zoomin: 'Μεγέθυνση',
            zoomout: 'Σμίκρυνση',
            togglefullscreen: 'Εναλλαγή πλήρους οθόνης',
        },
        language: {
            // When you translate the language, keep the Language in English
            // eg. Idioma / Language
            title: 'Γλώσσα / Language',
            translation: {
                // When you translate the english name, keep the Language in English
                // eg. Inglés / English
                bg: 'Български / Bulgarian',
                cs: 'Čeština / Czech',
                de: 'Deutsch / German',
                el: 'Ελληνικά / Greek',
                en: 'English',
                es: 'Español / Spanish',
                fr: 'Français / French',
                hu: 'Magyar / Hungarian',
                it: 'Italiano / Italian',
                ja: '日本語 / Japanese',
                nl: 'Nederlands / Dutch',
                pl: 'Polski / Polish',
                'pt-PT': 'Português / Portuguese',
                ro: 'Română / Romanian',
                ru: 'Русский / Russian',
                sk: 'Slovenčina / Slovak',
                sr: 'Српски / Serbian',
                sv: 'Svenska / Swedish',
                tr: 'Türkçe / Turkish',
                uk: 'Українська / Ukrainian',
                zn: '中文 / Chinese',
            }
        },
        settings: {
            title: 'Ρυθμίσεις',
            hideMenu: 'Απόκρυψη κύριου μενού (εμφάνιση με ALT)',
            optionToHideMenuState: {
                yes: 'Μετά την επανεκκίνηση, το μενού θα αποκρυφτεί και θα εμφανίζεται με ALT.',
            },
        },
        help: {
            changelog: 'Ιστορικό αλλαγών',
            download: 'Λήψη',
            developer: 'Προγραμματιστής',
            checkUpdates: 'Έλεγχος ενημερώσεων',
        },
        donate: {
            title: 'Δωρεά',
        }
    },
}
