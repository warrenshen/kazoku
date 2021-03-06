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
    Dispatcher.register(this.handleDispatch.bind(this));
    this.collections.map(function(collectionClass) {
      var collection = new collectionClass();
      self._collections[collection.name] = collection;
    });
    if (this.setDefaults) {
      this.setDefaults();
    }
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
      // asynchronously waiting for the request response;
      // don't need to add it to the store because model
      // instantiation already handles that automatically.
      var modelClass = this.model;
      var model = new modelClass({ id: id });
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
  }

  create(attributes, options={}) {
    var modelClass = this.model;
    var newModel = new modelClass(attributes);
    newModel.create(options);
  }

  update(attributes, options={}) {
    var storeKey = attributes.id;
    var existingModel = this._all[storeKey];
    existingModel.set(attributes);
    existingModel.update(options);
  }

  // --------------------------------------------------
  // Dispatch
  // --------------------------------------------------
  // Stores that listen for dispatches must override this method.
  handleDispatch(payload) {}

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


module.exports = Store;
