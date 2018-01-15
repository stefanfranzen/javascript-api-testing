# javascript-api-testing [![Build Status](https://travis-ci.org/sjansson/javascript-api-testing.png?branch=master)](https://travis-ci.org/sjansson/javascript-api-testing)

A javascript framework consisted of `mocha`, `chai` and `chai-http`. Running with `gulp` with support of parameters for test-environments and all or single testfiles.

### prerequisites
* nodejs installed

### installation
`npm install`

### run tests

all tests:
`gulp test-api --env staging`

specific test: 
`gulp test-api --env staging --spec thisTest.test.js`
