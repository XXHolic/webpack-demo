const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    port:8000,
    contentBase: "./dist",
    hot: true,
  },
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader"]
    //   }
    // ]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()

  ]
});