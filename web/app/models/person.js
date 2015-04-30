import Model from "../templates/model.js";

import Family from "./family.js";


class Person extends Model {

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

  get urlRoot() {
    return "/people/";
  }
}


module.exports = Person;
