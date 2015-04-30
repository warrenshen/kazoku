import Model from "../templates/model.js";


class Family extends Model {

  get defaults() {
    return {
      id: null,
      name: "",
      size: 0,
    }
  }

  get urlRoot() {
    return "/families/";
  }
}


module.exports = Family;
