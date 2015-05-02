import Store from "../templates/store.js";

import Person from "../models/person.js";
// var TodoConstants = require('../constants/TodoConstants');
import PeopleCollection from "../collections/people_collection.js";


class PeopleStore extends Store {

  get name() {
    return "PeopleStore";
  }

  get modelClass() {
    return Person;
  }

  collections() {
    return [
      PeopleCollection,
    ];
  }

  requestPeople() {
    return this._collections["PeopleCollection"].request();
  }

  getPeople() {
    return this._collections["PeopleCollection"].models;
  }
}


module.exports = new PeopleStore();
