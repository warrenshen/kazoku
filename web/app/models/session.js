import Model from "../templates/model.js";

import Person from "./person.js";

import ApiRoutes from "../constants/api_routes.js";


class Session extends Model {

  get defaults() {
    return {
      id: null,
      auth_email: "",
      auth_token: "",
      last_active_at: "",
      uuid: "",
    }
  }

  get name() {
    return "Session";
  }

  get relations() {
    return [
      {
        type: "HasOne",
        key: "person",
        relatedModel: Person,
      }
    ];
  }

  get createUrl() {
    return ApiRoutes.sessions.login;
  }

  get destroyUrl() {
    return ApiRoutes.sessions.logout;
  }

  get requestUrl() {
    return ApiRoutes.sessions.me;
  }

  create(options={}) {
    var self = this;
    // Emit change indicating that current session has been replaced;
    // note that the `session` attribute of the model which was added
    // by Backbone's save implementation must be unset for security.
    options.success = function(model, response, request) {
      self.unset("session", { silent: true });
      var options = {};
      options.shouldNavigate = true;
      self.store.add(self, options);
      self.store.emitChange();
    };
    options.error = function(model, response, request) {
      console.log("Create session error!");
    };
    options.url = this.createUrl;
    // Remove `attrs` from options for account credentials security.
    var attributes = options.attrs;
    delete options.attrs;
    return this.save(attributes, options);
  }

  expire(options={}) {
    var self = this;
    options.error = function(model, response, request) {
      console.log("Destroy session error!");
    };
    options.url = this.destroyUrl;
    return this.destroy(options);
  }
}


module.exports = Session;
