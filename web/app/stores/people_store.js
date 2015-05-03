import Store from "../templates/store.js";

import Person from "../models/person.js";
// var TodoConstants = require('../constants/TodoConstants');
import PeopleCollection from "../collections/people_collection.js";


class PeopleStore extends Store {

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    return "PeopleStore";
  }

  get modelClass() {
    return Person;
  }

  get collections() {
    return [
      PeopleCollection,
    ];
  }

  // --------------------------------------------------
  // Getters
  // --------------------------------------------------
  getPeople() {
    return this._collections["PeopleCollection"].models;
  }

  // --------------------------------------------------
  // Requesters
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
