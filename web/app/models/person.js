import Cookies from "cookies-js";

import Model from "app/templates/model";
import ModelDirectory from "app/model_directory";
import RouterDirectory from "app/router_directory";
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
    return [
      {
        type: "HasOne",
        key: "family",
        relatedModel: ModelDirectory.get("Family"),
      },
      {
        type: "HasOne",
        key: "session",
        relatedModel: ModelDirectory.get("Session"),
      }
    ];
  }

  // --------------------------------------------------
  // Endpoints
  // --------------------------------------------------
  get createUrl() {
    return ApiRoutes.people.index;
  }

  get requestUrl() {
    return ApiRoutes.people.index + "/" + this.get("id");
  }

  get updateUrl() {
    return ApiRoutes.people.index + "/" + this.get("id");
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

  get updateAttributes() {
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
      // TODO: Set cookies and navigate in session store.
      Cookies.set("auth_email", self.get("email"));
      Cookies.set("auth_token", self.get("auth_token"));
      self.unset("auth_token", { silent: true });
      self.unset("password", { silent: true });
      self.store.emitChange();
      RouterDirectory.get("Router").navigate(Routes.pages.home, true);
    };
    return this.create(options);
  }
}


module.exports = Person;
