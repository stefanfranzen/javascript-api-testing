const gulp = require('gulp'); // eslint-disable-line import/no-extraneous-dependencies
const mocha = require('gulp-mocha');
const sourcemaps = require('gulp-sourcemaps');
const argv = require('yargs').argv;

gulp.task('test-api', () => {
  process.env.env = argv.env;
  let testsToRun;
  argv.spec ? testsToRun = '/test/' + argv.spec : testsToRun = '/test/*.test.js';

  gulp.src(testsToRun, {read: false})
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(mocha({
      require: ['babel-core/register', './confs/api.conf.js'],
      reporter: 'spec',
      timeout: 30000,
    }))
    .on('error', process.exit.bind(process, 1));
});