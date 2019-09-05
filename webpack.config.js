const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        themea: "./src/index-a.js",
        themeb: "./src/index-b.js"
    },
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "localhost", //服务器的ip地址
        port: 8080, //端口
        open: true, //自动打开页面
        openPage: "index.html"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    transformToRequire: {
                        video: "src",
                        source: "src",
                        img: "src",
                        image: "xlink:href"
                    }
                }
            },
            {
                test: /\.(less|.css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: "url-loader"
                }
            },
            // fonts
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            excludeChunks: ["themea", "themeb"]
        })
    ]
};
