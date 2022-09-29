const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: "main.css" 
        }),
    ],
    module: {
        rules: [
            {
            test: /\.html$/,
            use: ["html-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    
                    "style-loader", 
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "sass-loader"
                ]
            }
        ]
    }
};