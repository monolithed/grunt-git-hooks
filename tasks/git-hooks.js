/*!
 * grunt-git-hooks
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('git-hooks', 'Git Hooks', function () {
        var options = this.options({
            git: '.git'
        });

        for (var hook in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, hook)) {
                var file = path.join(options.git, 'hooks', hook);

                grunt.file.copy(this.data[hook], file);

                if (grunt.file.exists(file)) {
                    fs.chmod(file, '0755', function (error) {
                        if (error) {
                            grunt.log.warn('Could not change the access ' +
                                'permissions to git hook files');
                        }
                    });
                }
            }
        }

        grunt.log.oklns('Git hooks have been stored to ' + options.hooks);
    });
};
