import Model from "../templates/model.js";

import Family from "./family.js";

import ApiRoutes from "../constants/api_routes.js";


class Person extends Model {

  constructor(attributes={}, options={}, store) {
    super(attributes, options);
  }

  get defaults() {
    return {
      id: null,
      first_name: "",
      last_name: "",
      email: "",
      image_url: "",
      family_name: "",
      family_id: null,
    }
  }

  get name() {
    return "Person";
  }

  get relations() {
    return [];
  }

  get createUrl() {
    return ApiRoutes.people.index;
  }

  createAttributes() {
    return {
      person: {
        id: this.get("id"),
        first_name: this.get("first_name"),
        last_name: this.get("last_name"),
        email: this.get("email"),
        password: this.get("password"),
        image_url: this.get("image_url"),
      }
    };
  }

  create(options={}) {
    var self = this;
    options.success = function(model, response, options) {
      self.store.add(self);
      self.store.emitChange();
    };
    options.error = function(model, response, options) {
      console.log("Create person error!");
    };
    options.url = this.createUrl;
    options.attrs = this.createAttributes()
    return this.sync("create", this, options);
  }
}


module.exports = Person;
