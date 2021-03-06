﻿var supportsColor = process.env ? require('supports-color') : null;
var useColors = process.env
  ? (supportsColor || (process.env.MOCHA_COLORS !== undefined))
  : false;

var colors = {
    'pass': 90
  , 'fail': 31
  , 'bright pass': 92
  , 'bright fail': 91
  , 'bright yellow': 93
  , 'pending': 36
  , 'suite': 0
  , 'error title': 0
  , 'error message': 31
  , 'error stack': 90
  , 'checkmark': 32
  , 'fast': 90
  , 'medium': 33
  , 'slow': 31
  , 'green': 32
  , 'light': 90
  , 'diff gutter': 90
  , 'diff added': 42
  , 'diff removed': 41
};

function color(type, str) {
    if (!useColors) return String(str);
    return '\u001b[' + colors[type] + 'm' + str + '\u001b[0m';
}

var symbols = {
    pass: '✓',
    fail: '✖'
};

// With node.js on Windows: use symbols available in terminal default fonts
if ('win32' == process.platform) {
    symbols.pass = '\u221A';
    symbols.fail = '\u00D7';
}


function create(useTests) {
    var depth = 0;
    function indent() {
        return Array(depth + 2).join('  ');
    }

    var lastTitles = [];
    function printTitles(titles) {
        // Print if the titles at an index are different
        for (var i = 0; i < titles.length; i++) {
            var title = titles[i];
            var lastTitle = lastTitles[i];
            depth = i;
            if (title !== lastTitle) {
                console.log(indent() + color('suite', '%s'), title);
            }
        }
        lastTitles = titles;
        depth = titles.length;
    }

    function printPass(test) {
        var fmt;
        if ('fast' == test.speed) {
            fmt = indent()
              + color('checkmark', symbols.pass)
              + color('pass', ' %s ');
            console.log(fmt, test.name);
        } else {
            fmt = indent()
              + color('checkmark', symbols.pass)
              + color('pass', ' %s ')
              + color(test.speed, '(%dms)');
            console.log(fmt, test.name, test.duration);
        }
    }

    function printInfo(result) {
        console.log('  Platform  : ' + (result.platform || ['Error']).join(', '));
        console.log('  Report    : ' + (result.url || result.status));
        console.log('  Test Page : ' + result.testPageUrl);
        console.log('  Passed    : ' + color(result.passed ? 'checkmark' : 'fail', result.passed));
        console.log();
    }

    function printFail(test) {
        var fmt;

        fmt = indent()
            + color('fail', symbols.fail + ' %s');
        console.log(fmt, test.name);

        fmt = indent()
            + color('error message', '  Error: %s');
        console.log(fmt, test.message);

        if (test.stack) {
            fmt = indent()
                + color('error stack', '    at %s');
            console.log(fmt, test.stack);
        }
    }

    function printResult(test) {
        if (test.result) {
            printPass(test);
        } else {
            printFail(test);
        }
    }

    function printFinal(result) {
        if (result.passes + result.failures + result.pending > 0) {
            console.log();
        }
        var fmt;
        if (result.passes > 0) {
            fmt = color('checkmark', '  %d passing');
            var args = [result.passes];

            if (result.duration > 0) {
                fmt += color('pass', ' (%dms)');
                args.push(result.duration);
            }

            console.log.apply(console, [fmt].concat(args));
        }
        if (result.failures > 0) {
            fmt = color('fail', '  %d failing');
            console.log(fmt, result.failures);
        }
        // Newline
        console.log();
    }

    return function onTestComplete(result, callback) {
        var res = result.result || {};
        var tests = useTests && res.tests || res.reports || [];

        // reset lastTitles
        lastTitles = [];

        // Clone tests
        tests = tests.slice();

        // Newline
        console.log();

        printInfo(result);

        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];
            printTitles(test.titles);
            printResult(test);
        }

        printFinal(res);
        callback(null, result.passed);
    };
}

module.exports = {
    create: create
};
