/* This is a very simple and somewhat stupid "test"
 * It just prints out some sample data that sauce labs exposes
 * using the saucelabs-mocha-reporter, and I eyeball it
 * to make sure it looks like real test output
 */

var result = {
    "url": "https://saucelabs.com/jobs/job_id",
    "platform": ["Operating System Version", "Browser", "Version"],
    "id": "id",
    "job_id": "job_id",
    "testPageUrl": "http://127.0.0.1:9000/test/mocha_test.html",
    "passed": false,
    "result": {
        "suites": 3,
        "tests": [{
            "name": "should pass",
            "result": true,
            "titles": ["tested thing"],
            "speed": "fast"
        }, {
            "name": "should pass medium speed",
            "result": true,
            "titles": ["tested thing"],
            "speed": "medium",
            "duration": 50
        }, {
            "name": "should pass slow speed",
            "result": true,
            "titles": ["tested thing"],
            "speed": "slow",
            "duration": 200
        }, {
            "name": "should pass",
            "result": true,
            "titles": ["tested thing", "another thing"],
            "speed": "fast"
        }, {
            "name": "should fail no stacktrace",
            "result": false,
            "titles": ["tested thing"],
            "message": "Threw an error"
        }, {
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "another thing"],
            "message": "Threw an error",
            "stack": "http://127.0.0.1:9000/test/mocha_test.js:16:19"
        }, {
            "name": "should pass",
            "result": true,
            "titles": ["tested thing", "yet another thing"],
            "speed": "fast"
        }, {
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "yet another thing"],
            "message": "Threw an error",
            "stack": "http://127.0.0.1:9000/test/mocha_test.js:24:19"
        }],
        "passes": 8,
        "pending": 0,
        "failures": 2,
        "start": "2015-03-11T20:12:15.206Z",
        "end": "2015-03-11T20:12:15.471Z",
        "duration": 265,
        "reports": [{
            "name": "should fail no stacktrace",
            "result": false,
            "titles": ["tested thing"],
            "message": "Threw an error"
        }, {
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "another thing"],
            "message": "Threw an error",
            "stack": "http://127.0.0.1:9000/test/mocha_test.js:127:26"
        }, {
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "yet another thing"],
            "message": "Threw an error",
            "stack": "http://127.0.0.1:9000/test/mocha_test.js:134:26"
        }]
    }
};

var reporter = require('../saucelabs-mocha-reporter');

reporter.create()(result, function (err, status) {
});
reporter.create(true)(result, function (err, status) {
});
