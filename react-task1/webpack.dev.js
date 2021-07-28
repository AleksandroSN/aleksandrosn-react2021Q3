'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: false,
    watchContentBase: true,
    progress: true,
    hot: true,
    historyApiFallback: true,
    port: 3030,
  },
  output: { path: path.join(__dirname, 'build'), filename: '[name].[fullhash].js' },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]}
});