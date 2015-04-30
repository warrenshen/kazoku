import Model from "../templates/model.js";


class Person extends Model {

  get defaults() {
    return {
      id: null,
      first_name: "",
      last_name: "",
      image_url: "",
      family_name: "",
    }
  }

  get urlRoot() {
    return "/users/";
  }
}


module.exports = Person;
