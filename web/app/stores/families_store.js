import Store from "app/templates/store";

import Family from "app/models/family";

import FamiliesCollection from "app/collections/families_collection";

import ActionConstants from "app/constants/action_constants";


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

  // --------------------------------------------------
  // Dispatch
  // --------------------------------------------------
  handleDispatch(payload) {
    var action = payload.action;
    switch (action.type) {
      case ActionConstants.families.leave:
        // this.leave(action.attributes);
        break;
    }
  }
}


module.exports = new FamiliesStore();
