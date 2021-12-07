const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
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
        new MiniCssExtractPlugin({
            filename: "styles.min.css"
        }),
    ],

    module: {
        rules: [
            // CSS, PostCSS, Sass
            {
                test: /.(css|s[ac]ss)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
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
                type: "asset/inline"
            },
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: true
                    }
                }
            },
        ],
    }
}
