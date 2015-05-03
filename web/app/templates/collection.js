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
    debugger
    return objects;
  }

  request(options={}) {
    var self = this;
    var success = options.success;
    // Adds all models in collection to associated store.
    // @param collection - updated collection with fetched response (same as self).
    // @param response - unparse response from server.
    // @request - xhr object from ajax request.
    options.success = function(collection, response, request) {
      debugger
      self.set(response[self.responseKey]);
      debugger
      var models = self.models;
      debugger
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
