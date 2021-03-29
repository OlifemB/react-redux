const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babel = require("./webpack/babel");
const devserver = require("./webpack/devserver");
const files = require("./webpack/file");
const sass = require("./webpack/sass");
const svgo = require("./webpack/svgo");

const common = {
    entry: ["@babel/polyfill", "./public/index.js"],
    output: {
        path: path.resolve(__dirname, "app"),
        filename: "bundle_[hash].js"
    },
    resolve: {
        extensions: [".js"],
        modules: ["node_modules"],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@redux": path.resolve(__dirname, "src/redux"),
            "@actions": path.resolve(__dirname, "src/redux/actions"),
            "@reducers": path.resolve(__dirname, "src/redux/reducers")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};


module.exports = () => {
    return (
        merge([
            common,
            babel,
            files,
            svgo,
            devserver,
            sass
        ])
    );
};