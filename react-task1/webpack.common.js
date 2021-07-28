'use strict';

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app : './src/index.tsx'
  } ,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [    
    new HtmlWebpackPlugin({
      title: 'React.Components',
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body',
    }),
    new ESLintPlugin({ extensions: ['tsx', 'ts', 'js'] }),    
    new CopyPlugin({
        patterns: [{ from: './src/assets/icons/', to: './' }],
      }),
  ],
};
