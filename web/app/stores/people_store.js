import Events from "events";

import Dispatcher from "../dispatcher.js";

// var TodoConstants = require('../constants/TodoConstants');


var CHANGE_EVENT = "change";

class PeopleStore extends Events.EventEmitter {

  constructor() {
    super();
    this._all = {};
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

  create(attributes) {
    this._all[attributes.id] = {
      id: attributes.id,
      first_name: attributes.first_name,
      last_name: attributes.last_name,
    };
  }

  destroy(id) {
    delete this._all[id];
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
