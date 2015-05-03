import Collection from "app/templates/collection";

import Person from "app/models/person";

import ApiRoutes from "app/constants/api_routes";


class PeopleCollection extends Collection {

  get name() {
    return "PeopleCollection";
  }

  get model() {
    return Person;
  }

  get url() {
    return ApiRoutes.people.index;
  }
}


module.exports = PeopleCollection;
