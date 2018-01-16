# javascript-api-testing [![Build Status](https://travis-ci.org/sjansson/javascript-api-testing.png?branch=master)](https://travis-ci.org/sjansson/javascript-api-testing)

A javascript framework consisted of `mocha`, `chai` and `chai-http`. 

Using `gulp` to be able to change environment, run all tests, specific tests or specific testsuite with parameters on the command line which suites a jenkins setup well.

### prerequisites
* nodejs installed

### installation
`npm install`

### run tests

all tests: `gulp test-api --env <yourEnvironment>`

specific test: `gulp test-api --env <yourEnvironment> --spec <yourSpecificTestfile>`

a testsuite: `gulp test-api --env <yourEnvironment> --spec <yourSuiteFolder>/*.test.js`

### jenkins setup
* create a freestyle job
* connect your github repository
* setup batch/sh: `npm install`
* setup batch/sh: `/node_modules/gulp/gulp.js gulp test-api --env staging --spec myFolder/myAwesomeTest.test.js` 