'use strict';

var fs = require('fs');

exports.tests = {
    test: function (test) {
        var fixtures = fs.readFileSync('./cache/.git/hooks/' +
                'prepare-commit-msg', 'utf8'),

            expected = fs.readFileSync('./tests/expected/.git/' +
                'hooks/prepare-commit-msg', 'utf8');

        test.equal(fixtures, expected);
        test.done();
    }
};
