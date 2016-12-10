var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');

// ===== ===== TEST ===== =====
var mocha = require('gulp-mocha');
var babel = require('babel-core/register');

gulp.task('test', function() {

  return gulp.src(['src/client/**/test*.js'])
    .pipe(mocha({
      compilers: [
        'js:babel-core/register'
      ]
    }));

});

// ===== ===== BUILD MESSAGE APP ===== =====
var webpack = require('webpack');
var BUILD_DIR  = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/client/messageapp');

var config = {
  entry: APP_DIR + '/entry.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

gulp.task('message_app', function(callback) {

  console.log('Building message_app');
  console.log('Entry :' + APP_DIR + '/entry.js');
  console.log('Dest :' + BUILD_DIR + '/bundle.js');

  webpack(config, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    console.log('Finished building message_app');
    callback();
  });

});
