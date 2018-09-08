const utils = require('corifeus-utils');

module.exports = (grunt) => {
    const _ = require('lodash');

    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js({
        replacer: {
            build: false
        }
    });

    grunt.registerTask('default', builder.config.task.build.js);

}
