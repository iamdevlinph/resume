var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
            test: /\.js/,
            include: APP_DIR,
            loaders: ['babel'],
          },
          {
              test: /\.css/,
              include: APP_DIR,
                loaders: ['style-loader', 'css-loader'],
          }
      ]
  }
};

module.exports = config;
