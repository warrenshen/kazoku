import Store from "app/templates/store";

import Family from "app/models/family";

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
  // Requests
  // --------------------------------------------------
  requestFamilies() {
    return this._collections["FamiliesCollection"].request();
  }

  // --------------------------------------------------
  // Gets
  // --------------------------------------------------
  getFamilies() {
    return this._collections["FamiliesCollection"].models;
  }
}


module.exports = new FamiliesStore();
