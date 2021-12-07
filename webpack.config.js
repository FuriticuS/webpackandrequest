const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
        publicPath: "/"
    },

    devServer: {
        open: true,
        port: 8080
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "webpackrequest",
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test: /.(css|s[ac]ss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        }
                    },
                ],
                type: "asset/resource"
            },
            //fonts
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                exclude: /img/,
                loader: "file-loader",
                options: {
                    publicPath: "../",
                    context: path.resolve(__dirname, "src/assets"),
                    name: "[path][name].[ext]"
                },
                type: 'asset/inline'
            },
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    }
}
