const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            minify: true,
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
            minify: true,
            chunks: ["about"],
        }),
        new HtmlWebpackPlugin({
            filename: "students.html",
            template: "./src/students.html",
            minify: true,
            chunks: ["students"],
        }),
        new HtmlWebpackPlugin({
            filename: "tutors.html",
            template: "./src/tutors.html",
            minify: true,
            chunks: ["tutors"],
        }),
    ],
});