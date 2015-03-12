/* This is a very simple and somewhat stupid "test"
 * It just prints out some sample data that sauce labs exposes
 * using the saucelabs-mocha-reporter, and I eyeball it
 * to make sure it looks like real test output
 */

var result = {
    "url": "https://saucelabs.com/jobs/e8ffee7c89864e5a84a1b7f9cd0bf258",
    "platform": ["OSX 10.10", "safari", "8"],
    "id": "e0c9411a9c4f4f85b36027c5b4d5ef8d",
    "job_id": "e8ffee7c89864e5a84a1b7f9cd0bf258",
    "testPageUrl": "http://localhost:9000/test/mocha_test.html",
    "passed": true,
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
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "another thing"],
            "message": "Threw an error",
            "stack": "http://localhost:9000/test/mocha_test.js:16:19"
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
            "stack": "http://localhost:9000/test/mocha_test.js:24:19"
        }],
        "passes": 8,
        "pending": 0,
        "failures": 2,
        "start": "2015-03-11T20:12:15.206Z",
        "end": "2015-03-11T20:12:15.471Z",
        "duration": 265,
        "reports": [{
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "another thing"],
            "message": "expected 0 to equal 1",
            "stack": "http://localhost:9000/test/mocha_test.js:127:26"
        }, {
            "name": "should fail",
            "result": false,
            "titles": ["tested thing", "yet another thing"],
            "message": "expected 0 to equal 1",
            "stack": "http://localhost:9000/test/mocha_test.js:134:26"
        }]
    }
};

var reporter = require('../saucelabs-mocha-reporter');

reporter(result, function (err, status) {
});
