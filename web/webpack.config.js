var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:3333",
    "webpack/hot/dev-server",
    __dirname + "/app/app.js"
  ],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "react-hot-loader!babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
