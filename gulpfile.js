// Call less and compress module (and any others defined)
// and then watch for changes

var gulp = require('gulp');
var webpack = require('webpack-stream');
var plugins = require('gulp-load-plugins')();
var app = require('./app');
var models = require("./app/models");
var debug = require('debug')('app:server');
var http = require('http');

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
};

gulp.task('less', getTask('less'));
gulp.task('compress', getTask('compress'));

gulp.task('server', function() {
  var port = process.env.PORT || '3000';
  app.set('port', port);
  var server = http.createServer(app);

  models.sequelize.sync().then(function () {
    server.listen(port, function() {
      debug('Express server listening on port ' + server.address().port);
    });
    //server.on('error', onError);
    server.on('listening', function() {
      var addr = server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      debug('Listening on ' + bind);
    });
  });
});

gulp.task('webpack', function() {
  return gulp.src('./src/js/app/index.js')
    .pipe(webpack( require('./config/webpack.config.js') ))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('dev', ['less','compress', 'webpack', 'server'], function () {
  gulp.watch('./src/client/less/**/*.less', ['less']); 
  gulp.watch('./src/app/**/*.js', ['webpack']); 
  gulp.watch('./src/app/**/*.jsx', ['webpack']); 
})
