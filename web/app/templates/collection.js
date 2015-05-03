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
    options.success = function(collection, response, request) {
      var models = collection.models;
      debugger
      models.map(function(model) {
        self.store.add(model);
      });
      self.store.emitChange();
    };
    options.error = function(collection, response, request) {
      console.log("collection error");
    };
    var response = this.fetch(options);
    return response;
  }
}


module.exports = Collection;
