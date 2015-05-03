import Model from "app/templates/model";

import Person from "app/models/person";


class Family extends Model {

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get defaults() {
    return {
      id: null,
      name: "",
      size: 0,
      events_count: 0,
    };
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
      },
    ];
  }
}


module.exports = Family;
