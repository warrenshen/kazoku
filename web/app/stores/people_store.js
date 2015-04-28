import Events from "events";

import Dispatcher from "../dispatcher.js";

// var EventEmitter = require('events').EventEmitter;
// var TodoConstants = require('../constants/TodoConstants');

var CHANGE_EVENT = "change";
var _people = {};

class PeopleStore extends Events.EventEmitter {

  getAll() {
    return _people;
  }

  create(text) {
    // Using the current timestamp in place of a real id.
    var id = Date.now();
    _people[id] = {
      id: id,
      text: text,
    };
  }

  destroy(id) {
    delete _todos[id];
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

Dispatcher.register(function(payload) {
  var action = payload.action;
  var text = action.text.trim();

  switch(action.actionType) {
    case "create":
      PeopleStore.create(text);
      PeopleStore.emitChange();
      break;

    case "destroy":
      PeopleStore.destroy(action.id);
      PeopleStore.emitChange();
      break;
  }

  // Needed by promise in Dispatcher.
  return true;
});


module.exports = PeopleStore;
