const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
