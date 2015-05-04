import Model from "app/templates/model";
import ModelDirectory from "app/model_directory";


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
        relatedModel: ModelDirectory.get("Person"),
      },
    ];
  }
}


module.exports = Family;
