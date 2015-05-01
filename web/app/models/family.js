import Model from "../templates/model.js";

import Person from "./person.js";


class Family extends Model {

  get defaults() {
    return {
      id: null,
      name: "",
      size: 0,
      events_count: 0,
    }
  }

  get relations() {
    return [
      {
        type: "HasMany",
        key: "people",
        relatedModel: Person,
      }
    ];
  }

  get name() {
    return "Family";
  }

  get urlRoot() {
    return "/families/";
  }
}


module.exports = Family;
