import Backbone from "backbone";
import Router from "./routers/router.js";

import "./styles/main.scss";
import "./styles/general.scss";
import "./styles/specific.scss";
import "./styles/pages.scss";


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
