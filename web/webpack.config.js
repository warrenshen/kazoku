var webpack = require("webpack");

module.exports = {
  entry: [
    __dirname + "/app/kazoku.js",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:3333/",
  ],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "react-hot-loader!babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, exclude: /node_modules/, loader: "style!css!sass" },
    ]
  },
  resolve: {
    root: __dirname,
    extensions: ["", ".js", ".jsx"],
  },
}
