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

  initialize() {
    var self = this;
    StoreDirectory.add(this);
    this.collections.map(function(collectionClass) {
      var collection = new collectionClass([], {}, self);
      self._collections[collection.name] = collection;
    });
  }

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    console.log("Store definition must include store name!");
  }

  get modelClass() {
    console.log("Store definition must include associated model class!");
  }

  get collections() {
    return [];
  }

  // --------------------------------------------------
  // Getters
  // --------------------------------------------------
  getAll() {
    return this._all;
  }

  getCurrent() {
    return this._current;
  }

  getById(id) {
    var model = this._all[id];
    if (model === undefined) {
      var modelClass = this.modelClass;
      var model = new modelClass({ id: id });
      return model.request();
    } else {
      return model;
    }
  }

  // --------------------------------------------------
  // Requesters
  // --------------------------------------------------


  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  add(model, options={}) {
    var storeKey = model.storeKey;
    var existingModel = this._all[storeKey];
    if (existingModel === undefined) {
      this._all[storeKey] = model;
    } else {
      existingModel.set(model.attributes)
    }
    if (options.shouldEmitChange) {
      this.emitChange();
    }
  }

  create(attributes, options={}) {
    var modelClass = this.modelClass;
    var model = new modelClass(attributes);
    model.create(options);
  }

  // --------------------------------------------------
  // Events
  // --------------------------------------------------
  addChangeListener(callback) {
    this.addListener(CHANGE_EVENT, callback);
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


module.exports = Store;
