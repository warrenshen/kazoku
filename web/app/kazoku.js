import Backbone from "backbone";
import Router from "./routers/router.js";

import Stores from "./stores.js";

import "./styles/main.scss";
import "./styles/general.scss";
import "./styles/specific.scss";
import "./styles/pages.scss";


class Kazoku {

  constructor(stores) {
    console.log("starting up");
    this.Router = new Router();
    this.initialize(stores);
    Backbone.history.start({ pushState: true });
  }

  initialize(stores) {
    stores.map(function(store) {
      store.initialize();
    });
  }
}

// TODO: Remove global scoping (currently for navigation purposes).
var App = new Kazoku(Stores);
window.Kazoku = App;


module.exports = App;
