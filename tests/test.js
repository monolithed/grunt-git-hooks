'use strict';

var fs = require('fs');

exports.tests = {
    test: function (test) {
        var fixtures = fs.readFileSync('.git/hooks/' +
                'prepare-commit-msg', 'utf8'),

            expected = fs.readFileSync('./tests/hooks/' +
                'prepare-commit-msg.sh', 'utf8');

        test.equal(fixtures, expected);
        test.done();
    }
};
