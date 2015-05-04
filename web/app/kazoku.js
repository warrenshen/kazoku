import Backbone from "backbone";
import Router from "app/routers/router";

import Models from "app/models";
import Stores from "app/stores";

import ModelDirectory from "app/model_directory";
import RouterDirectory from "app/router_directory";
import StoreDirectory from "app/store_directory";

import "app/styles/main.scss";
import "app/styles/general.scss";
import "app/styles/specific.scss";
import "app/styles/pages.scss";


class Kazoku {

  constructor(models, stores) {
    this.Router = Router;
    this.initialize(models, stores);
  }

  initialize(models, stores) {
    models.map(function(model) {
      ModelDirectory.add(model);
    });
    stores.map(function(store) {
      debugger
      StoreDirectory.add(store);
    });
    debugger
    RouterDirectory.add(Router);
    Backbone.history.start({ pushState: true });
  }
}


module.exports = new Kazoku(Models, Stores);
