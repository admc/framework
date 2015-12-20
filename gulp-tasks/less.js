module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('./src/less/**/*.less')
      .pipe(plugins.less())
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest('./public/css'))
      ;
   };
};
