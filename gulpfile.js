// Call less and compress module (and any others defined)
// and then watch for changes

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('less', getTask('less'));
//gulp.task('compress', getTask('compress'));

gulp.task('webpack', function() {
  return gulp.src('./src/js/main.js')
    .pipe(webpack( require('./config/webpack.config.js') ))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['less','webpack'], function () {
  gulp.watch('./src/less/**/*.less', ['less']); 
  gulp.watch('./src/js/**/*.js', ['webpack']); 
  gulp.watch('./src/jsx/**/*.jsx', ['webpack']); 
})
