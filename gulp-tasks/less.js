// Convert all less files into css

module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('./src/client/less/**/*.less')
      .pipe(plugins.less())
      .pipe(plugins.cssnano())
      .pipe(gulp.dest('./public/css'))
      ;
   };
};
