import Backbone from "backbone";
import Router from "./routers/router";


class Kazoku {

  constructor(router) {
    this.router = new router();
    Backbone.history.start({pushState: true});
  }

  // Collections: {}
  // Models: {}
}

var App = new Kazoku(Router);


module.exports = App;
