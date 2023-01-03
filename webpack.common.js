const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
        filename: "[name].[fullhash].js",
        path: path.resolve(__dirname, "dist"),
        library: "lib",
        clean: true,
    },
}