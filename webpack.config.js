const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      utils: path.resolve(__dirname, "src/utils/"),
      constant: path.resolve(__dirname, "src/constant/"),
      store: path.resolve(__dirname, "src/store/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_moudles/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      output: "index.html",
    }),
  ],
  devServer: {
    hot: true,
    port: 8080,
  },
};

module.exports = config;
