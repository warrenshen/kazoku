import Events from "events";

import Dispatcher from "../dispatcher.js";

// var TodoConstants = require('../constants/TodoConstants');
import PeopleCollection from "../collections/people_collection.js";


var CHANGE_EVENT = "change";

class PeopleStore extends Events.EventEmitter {

  constructor() {
    super();
    this._all = {};
    this._collections = {};
  }

  collections() {
    return [
      PeopleCollection,
    ];
  }

  // TODO: Set up collections here, depending on fixed imports.
  initializeCollections() {
    this.collections().map(function(collection) {
      this._collections["PeopleCollection"] = collection;
    }.bind(this));
  }

  requestPeople() {
    // return this._collections["PeopleCollection"].request();
  }

  getPeople() {
    // return this._collections["PeopleCollection"].models;
  }

  getAll() {
    return this._all;
  }

  add(object, options={}) {
    var key = object.key;
    var existingObject = this._all[key];
    var shouldEmitChange = options.shouldEmitChange;

    if (existingObject === undefined) {
      this._all[key] = object;
    } else {
      // merge
    }

    if (shouldEmitChange) {
      this.emitChange();
    }

    return this._all[key];
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  // @param {function} callback
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  // @param {function} callback
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
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
