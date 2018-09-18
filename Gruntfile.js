const utils = require('corifeus-utils');

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js({
    });


    const test = grunt.config.get('mocha_istanbul')
    test['cory-coverage'].src  = [
        [
            `${process.cwd()}/src/electron/**/*.js` ,
        ],
    ]
//    test['cory-coverage'].options.mask = `${process.cwd()}/src/electron/**/*.js`
    test['cory-coverage'].options.includes = [
        `${process.cwd()}/src/electron/**/*.js` ,
    ]
    grunt.config.set('mocha_istanbul', test)
console.log(JSON.stringify(test, null, 4));
    let defaults = builder.config.task.build.js.slice()
//    defaults.splice(defaults.indexOf('mocha_istanbul:cory-coverage'), 1)
    grunt.registerTask('default', defaults);

}
