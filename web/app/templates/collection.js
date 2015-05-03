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
    // TODO: Set this by pluralizing collection's associated model name.
    console.log("Collection definition must include response key!");
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

  }
}


module.exports = Collection;
