var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:3333/",
    "webpack/hot/dev-server",
    __dirname + "/app/kazoku.js"
  ],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "http://localhost:3333",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
