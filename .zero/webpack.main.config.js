'use strict'

process.env.BABEL_ENV = 'main';

const path = require('path');
const webpack = require('webpack');
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');


const mainConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/main/index.js')
  },
  externals: [
  ],
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.join(__dirname, '../src/main')
    }
  },
  plugins: [
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../build'),
    publicPath: './'
  },
  target: 'electron-main'
}

module.exports = (env) => {
  mainConfig.mode = env;
  if (env === 'development') {
    mainConfig.plugins.push(
      new webpack.DefinePlugin({
        '__static': `${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}`
      })
    );
  } else {
    mainConfig.plugins.push(
      new BabelMinifyWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      })
    );
  }

  return mainConfig;
};

