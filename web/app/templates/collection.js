import Backbone from "backbone";

import StoreDirectory from "app/store_directory";


class Collection extends Backbone.Collection {

  constructor(models=[], options={}) {
    super(models, options);
  }

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    console.log("Collection definition must include collection name!");
  }

  get model() {
    console.log("Collection definition must include model class!");
  }

  get responseKey() {
    // TODO: Should base this off plural form of model name.
    return this.name.substring(0, this.name.length - 10).toLowerCase();
  }

  get store() {
    return StoreDirectory.get(this.model.name);
  }

  // --------------------------------------------------
  // Endpoints
  // --------------------------------------------------
  get requestUrl() {
    console.log("Collection definition must include url!");
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  parse(response, options={}) {
    var objects = response[this.responseKey];
    return objects;
  }

  request(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Adds all models in collection to associated store.
      // @param response - unparsed response from server.
      // @param status - string indicated success or error.
      // @request - xhr object from ajax request.
      options.success = function(response, status, request) {
        var objects = self.parse(response);
        if (objects !== undefined) {
          self.set(objects);
          var models = self.models;
          // TODO: Try setting up models to add self to store.
          models.map(function(model) {
            self.store.add(model);
          });
          self.store.emitChange();
        }
      };
    }
    if (options.error === undefined) {
      options.error = function(collection, response, request) {
        console.log(this.name + " request error!");
      };
    }
    options.url = this.requestUrl;
    this.sync("read", this, options);
  }
}


module.exports = Collection;
