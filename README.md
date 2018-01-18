# javascript-api-testing [![Build Status](https://travis-ci.org/sjansson/javascript-api-testing.png?branch=master)](https://travis-ci.org/sjansson/javascript-api-testing)

A javascript framework consisted of `mocha`, `chai` and `chai-http`. 

Using `gulp` to be able to change environment, run all tests, specific tests or specific testsuite with parameters on the command line which suites a jenkins setup well.

### prerequisites
* nodejs installed: https://nodejs.org/en/download/

### installation
* `git clone https://github.com/sjansson/javascript-api-testing.git`
* `npm install`

### run tests
* run all tests: `gulp test-api --env <environmentName>`
* run a testsuite: `gulp test-api --env <environmentName> --spec <suiteFolder>/*.test.js`
* run a specific test: `gulp test-api --env <environmentName> --spec <suiteFolder>/<yourTest>.test.js`

### jenkins setup
* Install the Git Plugin in Jenkins Plugin Manager
* Install the AnsiColor Plugin in Jenkins Plugin Manager
* Create a freestyle job
* Add your git-repository in SCM
* Activate Color ANSI Console Output with CSS in Build Environment
* Add two buildsteps with `execute shell` for linux or `windows batch command` for windows in Build
* Type `npm install` in the shell/batch of the first step
* Type `node_modules\.bin\gulp test-api --env <yourEnvironment>` in the shell/batch of the second step
