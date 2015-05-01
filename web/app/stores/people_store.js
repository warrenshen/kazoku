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

// var store = new Store();
// Dispatcher.register(function(payload) {
//   var action = payload.action;
//   var attributes = action.attributes;

//   switch(action.type) {
//     case "create":
//       store.create(attributes);
//       store.emitChange();
//       break;

//     case "destroy":
//       store.destroy(action.id);
//       store.emitChange();
//       break;
//   }

//   // Needed by promise in Dispatcher.
//   return true;
// });


module.exports = new PeopleStore();
