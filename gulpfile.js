// Call less and compress module (and any others defined)
// and then watch for changes

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('less', getTask('less'));
gulp.task('compress', getTask('compress'));

gulp.task('default', ['less', 'compress'], function () {
  gulp.watch('./src/less/**/*.less', ['less']); 
});
