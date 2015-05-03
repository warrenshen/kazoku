import Cookies from "cookies-js";

import Model from "app/templates/model";

import Family from "app/family";

import ApiRoutes from "app/constants/api_routes";
import Routes from "app/constants/routes";


class Person extends Model {

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get defaults() {
    return {
      id: null,
      first_name: "",
      last_name: "",
      email: "",
      image_url: "",
      family_name: "",
      family_id: null,
    };
  }

  get name() {
    return "Person";
  }

  get relations() {
    return [];
  }

  // --------------------------------------------------
  // Endpoints
  // --------------------------------------------------
  get createUrl() {
    return ApiRoutes.people.index;
  }

  // --------------------------------------------------
  // Attributes
  // --------------------------------------------------
  get createAttributes() {
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

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  register(options={}) {
    var self = this;
    options.success = function(response, status, request) {
      var attributes = self.parse(response);
      self.set(attributes);
      Cookies.set("auth_email", self.get("email"));
      Cookies.set("auth_token", self.get("auth_token"));
      self.unset("auth_token", { silent: true });
      self.unset("password", { silent: true });
      self.store.add(self);
      Kazoku.Router.navigate(Routes.pages.home, true);
      self.store.emitChange();
    };
    return this.create(options);
  }
}


module.exports = Person;
