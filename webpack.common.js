const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const WorkboxPlugin = require('workbox-webpack-plugin');
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "test"
    }),
    new ManifestPlugin()
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true
    // })
    // new webpack.ProvidePlugin({
    //   _:'lodash'
    // })
  ],
  optimization: {
    // runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all"
    //     }
    //   }
    // }
  },
  module: {
    rules: [
      // {
      //   test: require.resolve("./src/global.js"),
      //   use: "exports-loader?parse=helpers.parse"
      // }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
