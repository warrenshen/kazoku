import Collection from "app/templates/collection";

import Family from "app/models/family";

import ApiRoutes from "app/constants/api_routes";


class FamiliesCollection extends Collection {

  get name() {
    return "FamiliesCollection";
  }

  get model() {
    return Family;
  }

  get requestUrl() {
    return ApiRoutes.families.index;
  }
}


module.exports = FamiliesCollection;
