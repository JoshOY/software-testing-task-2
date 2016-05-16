/*
 * Webpack 配置文件
 * */

var path = require("path");
var node_modules = path.resolve(__dirname, 'node_modules');

var root = function (fn) {
  return path.resolve(__dirname, fn);
};

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:10189/',
    path.resolve(__dirname, 'static/main.js')
  ],
  resolve: {
    root: [
      root('node_modules'),
      root('static')
    ],
    extensions: ['.js', '.jsx', ''],
  },
  output: {
    path: path.resolve(__dirname, 'static/build'),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,   // 匹配所有的.js和.jsx文件
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-1", "react"]
        }
      },
      {
        test: /\.css$/,      // Only .css files
        loader: 'style!css'  // Run both loaders
      },
      // LESS
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      // Images
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      // Fonts
      {
        test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader : 'url?prefix=font/&limit=10000'
      }
    ],
    // noParse: [pathToReact, pathToReactDOM, pathToReactRedux, pathToRedux]
  }
};

module.exports = config;
