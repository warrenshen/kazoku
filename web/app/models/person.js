import Cookies from "cookies-js";

import Model from "../templates/model.js";

import Family from "./family.js";

import ApiRoutes from "../constants/api_routes.js";


class Person extends Model {

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

  createUrl() {
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
    options.success = function(response, status, options) {
      // Maybe should abstract this into a parse method.
      var attributes = response.person;
      self.set(attributes);
      Cookies.set("auth_email", self.get("email"));
      Cookies.set("auth_token", self.get("auth_token"));
      self.unset("auth_token", { silent: true });
      self.unset("password", { silent: true });
      self.store.add(self);
      self.store.emitChange();
    };
    options.error = function(response, status, options) {
      console.log("Create person error!");
    };
    options.attrs = this.createAttributes();
    options.url = this.createUrl();
    return this.sync("create", this, options);
  }
}


module.exports = Person;
