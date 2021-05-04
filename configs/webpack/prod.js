const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    usedExports: true,
  },
  plugins: [new BundleAnalyzerPlugin()],
});
