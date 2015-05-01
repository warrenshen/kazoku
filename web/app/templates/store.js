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
    this.collections().map(function(Template) {
      var collection = new Template([], {}, self);
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
      var Template = this.model();
      var model = new Template({id: id});
      debugger
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
