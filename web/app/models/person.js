import Model from "../model.js";


class Person extends Model {

  get defaults() {
    return {
      id: null,
      email: "",
      first_name: "",
      last_name: "",
      image_url: "",
    }
  }

  get urlRoot() {
    return "/users/";
  }
}


module.exports = Person;
