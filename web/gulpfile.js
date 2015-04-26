var gulp = require("gulp");
var webpack = require('webpack');
var server = require('webpack-dev-server');
var config = require('./webpack.config');

gulp.task("serve", function() {
  new server(webpack(config), {
    hot: true,
    stats: { colors: true}
  })
  .listen(3333, "localhost", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Listening at localhost:3333");
    }
  });
});

gulp.task("default", ["serve"]);
