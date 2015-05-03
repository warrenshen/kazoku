import Collection from "app/templates/collection";

import Person from "app/models/person";

import ApiRoutes from "app/constants/api_routes";


class PeopleCollection extends Collection {

  get name() {
    return "PeopleCollection";
  }

  get model() {
    return Person;
  }

  get responseKey() {

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


module.exports = PeopleCollection;
