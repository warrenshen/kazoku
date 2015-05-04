import Events from "events";

import Dispatcher from "app/dispatcher";


var CHANGE_EVENT = "change";

class Store extends Events.EventEmitter {

  constructor() {
    super();
    this._all = {};
    this._current = null;
    this._collections = {};
  }

  initialize() {
    var self = this;
    this.collections.map(function(collectionClass) {
      var collection = new collectionClass();
      self._collections[collection.name] = collection;
    });
  }

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    console.log("Store definition must include store name!");
  }

  get model() {
    console.log("Store definition must include associated model!");
  }

  get collections() {
    return [];
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  requestById(id) {
    var model = this._all[id];
    if (model === undefined) {
      // Instantiate a placeholder model to return while
      // asynchronously waiting for the request response.
      var modelClass = this.model;
      var model = new modelClass({ id: id });
      this._all[id] = model;
      model.request();
    }
  }

  // --------------------------------------------------
  // Gets
  // --------------------------------------------------
  getAll() {
    return this._all;
  }

  getCurrent() {
    return this._current;
  }

  getById(id) {
    return this._all[id];
  }

  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  add(model, options={}) {
    var storeKey = model.storeKey;
    var existingModel = this._all[storeKey];
    if (existingModel === undefined) {
      this._all[storeKey] = model;
    } else {
      // TODO: Maybe shouldn't always reset attributes?
      existingModel.set(model.attributes)
    }
    if (options.shouldEmitChange) {
      this.emitChange();
    }
  }

  create(attributes, options={}) {
    var modelClass = this.model;
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
