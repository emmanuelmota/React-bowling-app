const path = require("path");

const SRC_DIR = path.join(__dirname, "/client/");
const DIST_DIR = path.join(__dirname, "/public/");
module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    main: `${SRC_DIR}/App.jsx`,
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    sourceMapFilename: "source.js.map",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
    ],
  },
};