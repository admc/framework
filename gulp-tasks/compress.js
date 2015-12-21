// Gulp module to take everything in src/js and
// turn it into all.min.js in public/js

module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('./src/client/js/**/*.js')
     .pipe(plugins.concat('client.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(plugins.rename('client.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./public/js'));
  }
};
