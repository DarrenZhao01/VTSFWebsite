const path = require("path");
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
                include: path.resolve(__dirname, "src"),
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
            inject: "body",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
            inject: "body",
            chunks: ["about"],
        }),
        new HtmlWebpackPlugin({
            filename: "students.html",
            template: "./src/students.html",
            inject: "body",
            chunks: ["students"],
        }),
        new HtmlWebpackPlugin({
            filename: "tutors.html",
            template: "./src/tutors.html",
            inject: "body",
            chunks: ["tutors"],
        }),
    ],
});