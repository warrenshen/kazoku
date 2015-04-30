import Backbone from "backbone";

import Person from "../models/person.js";

import ApiRoutes from "../constants/api_routes.js";


class PeopleCollection extends Backbone.Collection {

  constructor(models=[], options={}, store) {
    super(models, options);
    this.store = store;
  }

  get name() {
    return "PeopleCollection";
  }

  get model() {
    return Person;
  }

  get url() {
    return ApiRoutes.people.index;
  }

  parse(response, options) {
    var people = response.people.map(function(attributes) {
      var person = new Person(attributes);
      return person;
    });
    return people;
  }

  request(options={}) {
    var self = this;
    var success = options.success;
    options.success = function(collection, response, options) {
      var models = collection.models;
      models.map(function(model) {
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


module.exports = PeopleCollection;
