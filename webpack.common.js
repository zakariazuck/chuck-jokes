const webpack = require('webpack');

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ]
  }
};