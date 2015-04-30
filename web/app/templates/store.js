import Events from "events";

import Dispatcher from "../dispatcher.js";


var CHANGE_EVENT = "change";

class Store extends Events.EventEmitter {

  constructor() {
    super();
    this._all = {};
    this._current = null;
    this._collections = {};
    this.initialize();
  }

  all() {
    return _.all;
  }

  collections() {
    return [];
  }

  initialize() {
    this.collections().map(function(template) {
      var collection = new template([], {}, this);
      this._collections[collection.name] = collection;
    }.bind(this));
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


module.exports = Store;
