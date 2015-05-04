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
    // TODO: Request calls this but doesn't set anything with it.
    var objects = response[this.responseKey];
    return objects;
  }

  request(options={}) {
    var self = this;
    var success = options.success;
    // Adds all models in collection to associated store.
    // @param collection - not-updated collection (same as self).
    // @param response - unparse response from server.
    // @request - xhr object from ajax request.
    options.success = function(collection, response, request) {
      // TODO: This is really just parsing again, maybe fix by using `sync`?
      self.set(response[self.responseKey]);
      var models = self.models;
      // TODO: Try setting up models to add self to store.
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
