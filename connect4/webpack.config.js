const Dotenv = require("dotenv-webpack");

const webpackConfig = {
    node: { global: true, fs: "empty" },
    output: {
        libraryTarget: "umd",
    },
    plugins: [new Dotenv()],
};

module.exports = webpackConfig;
