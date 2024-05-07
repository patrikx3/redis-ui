const utils = require('corifeus-utils');

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js({
        replacer: {
            type: 'p3x',
            nodejsinfo: true,
        },
    });

//console.log(JSON.stringify(test, null, 4));
    let defaults = builder.config.task.build.js.slice()
//    defaults.splice(defaults.indexOf('mocha_istanbul:cory-coverage'), 1)
    grunt.registerTask('default', defaults);

}
