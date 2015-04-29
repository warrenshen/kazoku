import Backbone from "backbone";

import Person from "../models/person.js";

import ApiRoutes from "../constants/api_routes.js";


class PeopleCollection extends Backbone.Collection {

  model() {
    return Person;
  }

  url() {
    return ApiRoutes.people.index;
  }

  request(object, options={}) {
    // var self = this;
    // var success = options.success;
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
