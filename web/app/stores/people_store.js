import Store from "app/templates/store";

import Person from "app/models/person";
// var TodoConstants = require('../constants/TodoConstants');
import PeopleCollection from "app/collections/people_collection";


class PeopleStore extends Store {

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    return "PeopleStore";
  }

  get model() {
    return Person;
  }

  get collections() {
    return [
      PeopleCollection,
    ];
  }

  // --------------------------------------------------
  // Gets
  // --------------------------------------------------
  getPeople() {
    return this._collections["PeopleCollection"].models;
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  requestPeople() {
    return this._collections["PeopleCollection"].request();
  }

  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  // Custom create that calls `register` instead of default 'create'.
  create(attributes, options={}) {
    var person = new Person(attributes);
    person.register(options);
  }
}


module.exports = new PeopleStore();
