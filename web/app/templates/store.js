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

  collections() {
    return [];
  }

  initialize() {
    var self = this;
    StoreDirectory.add(this);
    this.collections().map(function(collectionClass) {
      var collection = new collectionClass([], {}, self);
      self._collections[collection.name] = collection;
    });
  }

  getAll() {
    return this._all;
  }

  getCurrent() {
    return this._current;
  }

  getById(id) {
    var model = this._all[id];
    if (model === undefined) {
      var modelClass = this.modelClass();
      var model = new modelClass({ id: id });
      model.request();
    } else {
      return model;
    }
  }

  add(model, options={}) {
    var key = model.key;
    var existingModel = this._all[key];
    var shouldEmitChange = options.shouldEmitChange;

    if (existingModel === undefined) {
      this._all[key] = model;
    } else {
      existingModel.set(model.attributes)
    }

    if (shouldEmitChange) {
      this.emitChange();
    }
  }

  addChangeListener(callback) {
    console.log("adding listener");
    this.addListener(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    console.log("removing listener");
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


module.exports = Store;
