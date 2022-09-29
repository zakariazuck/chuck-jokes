const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
});