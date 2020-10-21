const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  // mode: "development",

  entry: "./src/index.js",
  mode: "production",
  devtool: 'source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"]
  //     }
  //   ]
  // },
  optimization:{
    minimize: false,
  },

  plugins: [
    // new webpack.HashedModuleIdsPlugin()
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "es"),
    libraryTarget: 'umd',
    library: {
      root: 'MyLibrary',
      amd: 'my-library',
      commonjs: 'my-common-library'
    },
  }
});