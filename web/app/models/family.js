import Model from "app/templates/model";
import ModelDirectory from "app/directories/model_directory";
import ApiRoutes from "app/constants/api_routes";


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

  // --------------------------------------------------
  // Endpoints
  // --------------------------------------------------
  get requestUrl() {
    return ApiRoutes.families.index + "/" + this.get("id");
  }
}


module.exports = Family;
