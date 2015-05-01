import Events from "events";

import Dispatcher from "../dispatcher.js";

import StoreDirectory from "../store_directory.js";


var CHANGE_EVENT = "change";

class Store extends Events.EventEmitter {

  constructor(current=null) {
    super();
    this._all = {};
    this._current = current;
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
    var self = this;
    StoreDirectory.add(this);
    this.collections().map(function(template) {
      var collection = new template([], {}, self);
      self._collections[collection.name] = collection;
    });
  }

  add(model, options={}) {
    var key = model.key;
    var existingObject = this._all[key];
    var shouldEmitChange = options.shouldEmitChange;

    if (existingObject === undefined) {
      this._all[key] = model;
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


module.exports = Store;
