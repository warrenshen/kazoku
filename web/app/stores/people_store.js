import Events from "events";

import Dispatcher from "../dispatcher.js";

import Person from "../models/person.js";
// var TodoConstants = require('../constants/TodoConstants');
import PeopleCollection from "../collections/people_collection.js";


var CHANGE_EVENT = "change";

class PeopleStore extends Events.EventEmitter {

  constructor() {
    super();
    this._all = {};
    this._collections = {};
    this.initialize();
  }

  collections() {
    return [
      PeopleCollection,
    ];
  }

  initialize() {
    this.collections().map(function(template) {
      var collection = new template([], {}, this);
      this._collections[collection.name] = collection;
    }.bind(this));
  }

  requestPerson(id) {
    var existingObject = this._all[id];
    if (existingObject === undefined) {
      var person = new Person({id: id});
      person.request();
    } else {
      return existingObject;
    }
  }

  getPerson(id) {
    return this._all[id];
  }

  requestPeople() {
    return this._collections["PeopleCollection"].request();
  }

  getPeople() {
    return this._collections["PeopleCollection"].models;
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

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
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
