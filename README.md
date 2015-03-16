# saucelabs-mocha-reporter

Provides a spec reporter for mocha tests on sauce labs

Produces test results in the console for mocha tests running on sauce labs.

### Reporting Methods ###

There are two reporting styles, errors only (the default), and all tests:

#### Errors Only ####

```JavaScript
var onCallback = reporter.create();
```

![Errors Only](https://raw.githubusercontent.com/tejacques/saucelabs-mocha-reporter/master/images/errors_only.png)

#### All Tests ####

```JavaScript
var onCallback = reporter.create(true);
```

![All tests](https://raw.githubusercontent.com/tejacques/saucelabs-mocha-reporter/master/images/all_tests.png)
