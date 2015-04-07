var azk_gulp = require('azk-dev/gulp')({
  cwd  : __dirname,
  // lint: [ "bin/**/*.js" ], // Extra files for the lint analyzer
});

var gulp = azk_gulp.gulp;

gulp.task('default', 'run lint and all tests', ['lint', 'test']);
