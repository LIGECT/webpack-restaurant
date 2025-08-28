const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        include: path.resolve(
          __dirname,
          "src/pages/second-page/assets/menu-pictures"
        ),
        use: {
          loader: "responsive-loader",
          options: {
            adapter: require("responsive-loader/sharp"),
            sizes: [160],
            format: "webp",
            outputPath: "images",
          },
        },
        type: "javascript/auto",
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        exclude: path.resolve(
          __dirname,
          "src/pages/second-page/assets/menu-pictures"
        ),
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      title: "Lumino",
    }),
  ],
};
