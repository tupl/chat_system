var gulp = require('gulp');
var webpack = require("webpack");
var path = require('path');
var gutil = require("gulp-util");

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
    if(err) throw new gutil.PluginError("webpack", err);
    console.log('Finished building message_app');
    callback();
  });

});
