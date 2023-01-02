const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/js/index.js",
        about: "./src/js/about.js",
        students: "./src/js/students.js",
        tutors: "./src/js/tutors.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/static",
                    to: "./static"
                }
            ]
        }),
        new WebpackManifestPlugin(),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
}