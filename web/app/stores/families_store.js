import Store from "app/templates/store";

import Family from "app/models/family";
// var TodoConstants = require('../constants/TodoConstants');
import FamiliesCollection from "app/collections/families_collection";


class FamiliesStore extends Store {


  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    return "FamiliesStore";
  }

  get model() {
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
