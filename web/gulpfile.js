var gulp = require("gulp");
var webpack = require("webpack");
var server = require("webpack-dev-server");
var config = require("./webpack.config");

gulp.task("serve", function() {
  new server(webpack(config), {
    historyApiFallback: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: false,
    stats: { colors: true, progress: true },
  }).listen(3333, "localhost", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Listening at localhost:3333!");
    }
  });
});

gulp.task("default", ["serve"]);

