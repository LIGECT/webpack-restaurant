// Встроенный в Node.js модуль для работы с путями к файлам.
// Помогает создавать пути, которые будут работать на любой ОС (Windows, macOS, Linux).
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // path.resolve "склеивает" части пути в один абсолютный путь.
    // __dirname — это переменная в Node.js, которая всегда содержит абсолютный путь к папке,
    // в которой находится текущий файл (в нашем случае, webpack.config.js).
    // Webpack требует, чтобы путь для сборки был абсолютным.
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // publicPath указывает базовый URL для всех ресурсов (картинок, скриптов) в браузере.
    // "/" означает, что все пути будут строиться от корня сайта (например, "/images/my-image.webp").
    // Это самый надежный способ избежать проблем с относительными путями.
    publicPath: "/",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // ПРАВИЛО №1: Только для картинок меню, которые нужно оптимизировать.
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        // `include` говорит, что это правило должно применяться ТОЛЬКО к файлам,
        // которые находятся внутри указанной папки.
        include: path.resolve(
          __dirname,
          "src/pages/second-page/assets/menu-pictures"
        ),
        // Используем `responsive-loader` для создания уменьшенных копий.
        use: {
          loader: "responsive-loader",
          options: {
            adapter: require("responsive-loader/sharp"),
            sizes: [160],
            format: "webp",
            // `outputPath` — это опция для лоадера. Она говорит ему,
            // в какую подпапку внутри `dist` складывать результат.
            // В нашем случае, это будет `dist/images/`.
            outputPath: "images",
          },
        },
        // `responsive-loader` возвращает JS-объект, а не просто путь к файлу,
        // поэтому мы должны указать этот тип модуля.
        type: "javascript/auto",
      },

      {
        // ПРАВИЛО №2: Для всех остальных картинок (фоны, фото на других страницах).
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        // `exclude` — противоположность `include`. Это правило будет применяться
        // ко всем картинкам, КРОМЕ тех, что лежат в папке с картинками меню.
        // Это не дает большим фоновым картинкам быть ошибочно уменьшенными.
        exclude: path.resolve(
          __dirname,
          "src/pages/second-page/assets/menu-pictures"
        ),
        // `asset/resource` — это встроенный в Webpack способ обработки файлов.
        // Он просто копирует файл (например, фоновое изображение) в папку сборки "как есть",
        // не изменяя его, и возвращает на него ссылку.
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
