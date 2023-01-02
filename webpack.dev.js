const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        client: {
            overlay: {
                errors: false,
                warnings: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
            chunks: ["about"],
        }),
        new HtmlWebpackPlugin({
            filename: "students.html",
            template: "./src/students.html",
            chunks: ["students"],
        }),
        new HtmlWebpackPlugin({
            filename: "tutors.html",
            template: "./src/tutors.html",
            chunks: ["tutors"],
        }),
    ],
});