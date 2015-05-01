import Events from "events";

import Dispatcher from "../dispatcher.js";

import StoreDirectory from "../store_directory.js";


var CHANGE_EVENT = "change";

class Store extends Events.EventEmitter {

  constructor() {
    super();
    this._all = {};
    this._current = null;
    this._collections = {};
  }

  get name() {
    return "Store";
  }

  all() {
    return _.all;
  }

  collections() {
    return [];
  }

  initialize() {
    StoreDirectory.add(this);
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
