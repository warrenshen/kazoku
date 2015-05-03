import Store from "../templates/store.js";

import Family from "../models/family.js";
// var TodoConstants = require('../constants/TodoConstants');
import FamiliesCollection from "../collections/families_collection.js";


class FamiliesStore extends Store {


  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    return "FamiliesStore";
  }

  get modelClass() {
    return Family;
  }

  get collections() {
    return [
      FamiliesCollection,
    ];
  }

  // --------------------------------------------------
  // Gets
  // --------------------------------------------------
  getFamilies() {
    return this._collections["FamiliesCollection"].models;
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  requestFamilies() {
    return this._collections["FamiliesCollection"].request();
  }
}


module.exports = new FamiliesStore();
