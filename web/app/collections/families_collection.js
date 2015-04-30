import Backbone from "backbone";

import Family from "../models/family.js";

import ApiRoutes from "../constants/api_routes.js";


class FamiliesCollection extends Backbone.Collection {

  constructor(models=[], options={}, store) {
    super(models, options);
    this.store = store;
  }

  get name() {
    return "FamiliesCollection";
  }

  get model() {
    return Family;
  }

  get url() {
    return ApiRoutes.families.index;
  }

  parse(response, options) {
    return response.families;
  }

  request(options={}) {
    var self = this;
    var success = options.success;
    options.success = function(collection, response, options) {
      debugger
      var models = collection.models;
      models.map(function(model) {
        debugger
        self.store.add(model);
      });
      self.store.emitChange();
    };
    options.error = function(collection, response, options) {
      console.log("collection error");
    };
    var response = this.fetch(options);
    return response;
  }
}


module.exports = FamiliesCollection;
