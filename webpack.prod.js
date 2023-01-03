const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                    use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.terserMinify,
                terserOptions: {
                    compress: {
                        keep_fnames: /((open|close)MenuDropdown|initScrollToTop)$/,
                    },
                    mangle: {
                        keep_fnames: /((open|close)MenuDropdown|initScrollToTop)$/,
                    },
                    format: {
                        comments: false,
                    },
                    keep_fnames: /((open|close)MenuDropdown|initScrollToTop)$/,
                },
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            minify: true,
            inject: "body",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
            minify: true,
            inject: "body",
            chunks: ["about"],
        }),
        new HtmlWebpackPlugin({
            filename: "students.html",
            template: "./src/students.html",
            minify: true,
            inject: "body",
            chunks: ["students"],
        }),
        new HtmlWebpackPlugin({
            filename: "tutors.html",
            template: "./src/tutors.html",
            minify: true,
            inject: "body",
            chunks: ["tutors"],
        }),
    ],
});