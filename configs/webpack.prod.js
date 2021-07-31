"use strict";

const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("../webpack.common.js");

 module.exports = merge(common, {
   mode: "production",
   output: { path: path.join(__dirname, "../build"), filename: "[name].[chunkhash].js" },
   plugins: [
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { quality: 75, progressive: true }],
          ["optipng", { optimizationLevel: 3 }],
        ],
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
 });