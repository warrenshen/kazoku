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

  get name() {
    return "Family";
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
}


module.exports = Family;
