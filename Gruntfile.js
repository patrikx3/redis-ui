const utils = require('corifeus-utils');

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js({
    });

    let defaults = builder.config.task.build.js.slice()
    defaults.splice(defaults.indexOf('mocha_istanbul:cory-coverage'), 1)
    grunt.registerTask('default', defaults);

}
