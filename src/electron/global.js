const pkg = require('../../package.json');

global.p3xre = {
    iconFile: `${__dirname}/images/256x256.png`,
    mainWindow: undefined,
    pkg: pkg,
    indexHtml: 'file://' + __dirname + '/window/main/index.html',
    strings: require('../strings/en/index'),
}

global.p3xre.setVisible = (visible = true) => {
    if (visible === null) {
        visible = true;
    }
    if (global.p3xre.mainWindow !== undefined) {
        if (visible) {
            global.p3xre.mainWindow.show();
        } else {
            global.p3xre.mainWindow.hide();
        }
    }

    //global.ngivr.recreateMenus();
}
