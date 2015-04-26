var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  hot: true
}).listen(3000, "localhost", function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening at localhost:3000");
  }
});
