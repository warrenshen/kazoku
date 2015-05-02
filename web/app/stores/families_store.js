import Store from "../templates/store.js";

import Family from "../models/family.js";
// var TodoConstants = require('../constants/TodoConstants');
import FamiliesCollection from "../collections/families_collection.js";


class FamiliesStore extends Store {

  get name() {
    return "FamiliesStore";
  }

  collections() {
    return [
      FamiliesCollection,
    ];
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

  requestFamilies() {
    return this._collections["FamiliesCollection"].request();
  }

  getFamilies() {
    return this._collections["FamiliesCollection"].models;
  }
}


module.exports = new FamiliesStore();
