# javascript-api-testing [![Build Status](https://travis-ci.org/sjansson/javascript-api-testing.png?branch=master)](https://travis-ci.org/sjansson/javascript-api-testing)

An experiment with the javascripts frameworks `mocha`, `chai`, `chai-http` running with `gulp` and support of parameters for test-environments and testfiles

### installation
`npm install`

### run tests

all tests:
`gulp test-api --env staging`

specific test: 
`gulp test-api --env staging --spec thisTest.test.js`