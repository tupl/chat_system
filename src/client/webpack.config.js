var webpack = require('webpack');
var path = require('path');

var BUILD_DIR  = path.resolve(__dirname, '../../public/');
var APP_DIR = path.resolve(__dirname, './');

var config = {
  entry: APP_DIR + '/entry.jsx',
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

module.exports = config;
