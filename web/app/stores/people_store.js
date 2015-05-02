import Store from "../templates/store.js";

import Person from "../models/person.js";
// var TodoConstants = require('../constants/TodoConstants');
import PeopleCollection from "../collections/people_collection.js";


class PeopleStore extends Store {

  get name() {
    return "PeopleStore";
  }

  collections() {
    return [
      PeopleCollection,
    ];
  }

  create(attributes, options={}) {
    var person = new Person(attributes);
    return person.create(options);
  }

  // requestPerson(id) {
  //   var existingObject = this._all[id];
  //   if (existingObject === undefined) {
  //     // var person = new Person({id: id});
  //     // person.request();
  //   } else {
  //     return existingObject;
  //   }
  // }

  requestPeople() {
    return this._collections["PeopleCollection"].request();
  }

  getPeople() {
    return this._collections["PeopleCollection"].models;
  }
}


module.exports = new PeopleStore();
