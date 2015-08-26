'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        'git-hooks': {
            options: {
                hooks: 'cache/git/hooks'
            },

            hooks: {
                'prepare-commit-msg': 'tests/hooks/prepare-commit-msg.sh'
            }
        },

        clean: {
            cache: {
                src: './cache'
            }
        },

        nodeunit: {
            tasks: ['tests/test.js']
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean:cache', 'git-hooks', 'nodeunit']);
    grunt.registerTask('default', ['test']);
};
