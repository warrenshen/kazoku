import Backbone from "backbone";


class Collection extends Backbone.Collection {

  constructor(models=[], options={}, store) {
    super(models, options);
    this.store = store;
  }

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

  get url() {
    console.log("Collection definition must include url!");
  }

  parse(response, options) {
    var objects = response[this.responseKey];
    var modelClass = this.model;
    var models = objects.map(function(attributes) {
      var model = new modelClass(attributes);
      return model;
    });
    return models;
  }

  request(options={}) {
    var self = this;
    var success = options.success;
    // Adds all models in collection to associated store.
    // @param collection - updated collection with fetched response (same as self).
    // @param response - unparse response from server.
    // @request - xhr object from ajax request.
    options.success = function(collection, response, request) {
      var models = collection.models;
      models.map(function(model) {
        self.store.add(model);
      });
      self.store.emitChange();
    };
    options.error = function(collection, response, request) {
      console.log(this.name + " request error!");
    };
    this.fetch(options);
  }
}


module.exports = Collection;
