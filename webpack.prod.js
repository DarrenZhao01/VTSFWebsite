const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                include: path.resolve(__dirname, "src"),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[fullhash].css",
        }),
        new MangleCssClassPlugin({
            classNameRegExp: "((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md|lg|xl|child)[\\\\]*:)*-?cl-[a-z][a-zA-Z0-9_\-]*",
            ignorePrefixRegExp: "((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md||lg|xl|child)[\\\\]*:)*",
            log: true,
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