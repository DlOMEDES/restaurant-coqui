const path = require("path");
// hot reload html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
