'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   output: { path: path.join(__dirname, 'build'), filename: '[name].[chunkhash].js' },
   plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { quality: 75, progressive: true }],
          ['optipng', { optimizationLevel: 3 }],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
 });