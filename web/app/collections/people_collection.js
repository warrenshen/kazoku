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
}
