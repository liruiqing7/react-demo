const path = require("path");

module.exports = {
  entry: {
    index: "./src/app.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less", ".scss"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      components: path.join(__dirname, "../src/components"),
      images: path.join(__dirname, "../src/images"),
      pages: path.join(__dirname, "../src/pages"),
      util: path.join(__dirname, "../src/utils"),
      mock: path.join(__dirname, "../src/mock"),
    },
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
          limit: 8192,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
    ],
  },
};
