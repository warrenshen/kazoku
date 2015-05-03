import Backbone from "backbone";
import Router from "app/routers/router";

import Stores from "app/stores";

import "app/styles/main.scss";
import "app/styles/general.scss";
import "app/styles/specific.scss";
import "app/styles/pages.scss";


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
