import Backbone from "backbone";
import Router from "./routers/router.js";

import "./styles/main.scss";
import "./styles/general.scss";
import "./styles/specific.scss";
import "./styles/pages.scss";


class Kazoku {

  constructor(router) {
    this.Collections = [];
    this.Models = [];
    this.Router = new Router();
    Backbone.history.start({ pushState: true });
  }
}

var singleton = new Kazoku();

window.Backbone = Backbone;
window.Kazoku = singleton;


module.exports = singleton;
