import Backbone from "backbone";
import Router from "app/routers/router";

import Models from "app/models";
import Stores from "app/stores";

import ModelDirectory from "app/directories/model_directory";
import RouterDirectory from "app/directories/router_directory";
import StoreDirectory from "app/directories/store_directory";

import "app/styles/main.scss";
import "app/styles/general.scss";
import "app/styles/specific.scss";
import "app/styles/pages.scss";


class Kazoku {

  constructor(models, stores) {
    this.Router = Router;
    RouterDirectory.add(Router);
    this.initialize(models, stores);
    Backbone.history.start({ pushState: true });
  }

  initialize(models, stores) {
    models.map(function(model) {
      ModelDirectory.add(model);
    });
    stores.map(function(store) {
      StoreDirectory.add(store);
      // Call store's initialize method here instead of in the store's
      // constructor because we only want to initialize once the store
      // has already been registered with the store directory.
      store.initialize();
    });
  }
}


module.exports = new Kazoku(Models, Stores);
