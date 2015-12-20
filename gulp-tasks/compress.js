module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('./src/js/**/*.js')
     .pipe(plugins.concat('all.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(plugins.rename('all.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./public/js'));
  }
};
