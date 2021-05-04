const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  optimization: {
    usedExports: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Output managment",
    }),
  ],
  // Module
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // Module
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|__tests__/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|__tests__/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
