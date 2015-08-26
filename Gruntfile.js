'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        'git-hooks': {
            hooks: {
                'prepare-commit-msg': 'tests/hooks/prepare-commit-msg.sh'
            }
        },

        nodeunit: {
            tasks: ['tests/test.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['git-hooks', 'nodeunit']);
    grunt.registerTask('default', ['test']);
};
