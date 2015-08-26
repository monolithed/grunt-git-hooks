# grunt-git-hooks

[![npm version badge](https://img.shields.io/npm/v/grunt-git-hooks.svg)](https://www.npmjs.org/package/grunt-git-hooks)
[![Build Status](https://travis-ci.org/monolithed/grunt-git-hooks.png)](https://travis-ci.org/monolithed/grunt-git-hooks)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> A Grunt plugin to help bind Grunt tasks to [Git Hooks](http://git-scm.com/docs/githooks)


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-git-hooks --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-git-hooks');
```

## grunt-git-hooks task

_Run this task with the `grunt git-hooks` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Usage Example

```js
module.exports = function (grunt) {
	grunt.initConfig({
		'git-hooks': {
			hooks: {
				'prepare-commit-msg': 'tests/hooks/prepare-commit-msg.sh'
			}
		}
	});

	grunt.loadNpmTasks('grunt-git-hooks');
	grunt.registerTask('default', ['commit']);
};
```

##### Result

```
.git/hooks/prepare-commit-msg
```

NOTE: Grunt tasks will not remove your hooks (only copying)!

### Options

#### hooks

Type: `string`<br />
Default: `.git/hooks`

This option as an advanced way to choose in which directory the hooks should be placed.

```js
module.exports = function (grunt) {
	grunt.initConfig({
		'git-hooks': {
			options: {
				hooks: 'test/.git/hooks'
			},

			hooks: {
				'prepare-commit-msg': 'prepare-commit-msg.sh'
			}
		}
	});

	grunt.loadNpmTasks('grunt-git-hooks');
	grunt.registerTask('default', ['mock']);
};
```

### Tests

```
grunt test
```


### License

MIT

### Links
[Git Hooks](http://git-scm.com/docs/githooks) <br />


Task submitted by [Alexander Abashkin](https://github.com/monolithed)
