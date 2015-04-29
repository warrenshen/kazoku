import Backbone from "backbone";

import Person from "../models/person.js";

import ApiRoutes from "../constants/api_routes.js";


class PeopleCollection extends Backbone.Collection {

  get model() {
    return Person;
  }

  get url() {
    return ApiRoutes.people.index;
  }

  parse(response, options) {
    console.log(response);
    return response.people;
  }

  request(object, options={}) {
    var self = this;
    this.object = object;

    var success = options.success;
    options.success = function(collection, response, options) {
      console.log(collection);
    }
    options.error = function(collection, response, options) {
      console.log("collection error");
    }
    var response = this.fetch(options);
    return response;
  }
}


module.exports = PeopleCollection;
