import Store from "../templates/store.js";

import Family from "../models/family.js";
// var TodoConstants = require('../constants/TodoConstants');
import FamiliesCollection from "../collections/families_collection.js";


var CHANGE_EVENT = "change";

class FamiliesStore extends Store {

  collections() {
    return [
      FamiliesCollection,
    ];
  }

  initialize() {
    this.collections().map(function(template) {
      var collection = new template([], {}, this);
      this._collections[collection.name] = collection;
    }.bind(this));
  }

  requestFamily(id) {
    var existingObject = this._all[id];
    if (existingObject === undefined) {
      // var family = new Family({id: id});
      // person.request();
    } else {
      return existingObject;
    }
  }

  getFamily(id) {
    return this._all[id];
  }

  requestFamilies() {
    return this._collections["FamiliesCollection"].request();
  }

  getFamilies() {
    return this._collections["FamiliesCollection"].models;
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


module.exports = new FamiliesStore();
