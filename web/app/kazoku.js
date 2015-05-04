import Backbone from "backbone";
import Router from "app/routers/router";

import Models from "app/models";
import Stores from "app/stores";

import ModelDirectory from "app/model_directory";
import StoreDirectory from "app/store_directory";

import "app/styles/main.scss";
import "app/styles/general.scss";
import "app/styles/specific.scss";
import "app/styles/pages.scss";


class Kazoku {

  constructor(models, stores) {
    console.log("starting up!");
    this.Router = new Router();
    this.initialize(models, stores);
    Backbone.history.start({ pushState: true });
  }

  initialize(models, stores) {
    models.map(function(model) {
      ModelDirectory.add(model);
    });
    stores.map(function(store) {
      StoreDirectory.add(store);
    });
  }
}

// TODO: Remove global scoping (currently for navigation purposes).
var App = new Kazoku(Models, Stores);
window.Kazoku = App;


module.exports = App;
