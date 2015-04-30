import Model from "../templates/model.js";

import Family from "./family.js";


class Person extends Model {

  constructor(attributes={}, options={}, store) {
    super(attributes, options);
    debugger
  }

  get defaults() {
    return {
      id: null,
      first_name: "",
      last_name: "",
      image_url: "",
      family_name: "",
      family_id: null,
    }
  }

  get relations() {
    return [];
  }

  get urlRoot() {
    return "/people/";
  }
}


module.exports = Person;
