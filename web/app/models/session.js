import Model from "../templates/model.js";

import Person from "./person.js";

import ApiRoutes from "../constants/api_routes.js";


class Session extends Model {

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get defaults() {
    return {
      id: null,
      auth_email: "",
      auth_token: "",
      last_active_at: "",
      uuid: "",
    };
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
      },
    ];
  }

  // --------------------------------------------------
  // Endpoints
  // --------------------------------------------------
  get createUrl() {
    return ApiRoutes.sessions.login;
  }

  get destroyUrl() {
    return ApiRoutes.sessions.logout;
  }

  get requestUrl() {
    return ApiRoutes.sessions.me;
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  establish(options={}) {
    var self = this;
    // Emit change indicating that current session has been replaced.
    options.success = function(response, status, request) {
      var attributes = self.parse(response);
      self.set(attributes);
      self.unset("session", { silent: true });
      self.store.add(self, { shouldNavigate: true });
      self.store.emitChange();
    };
    this.create(options);
  }

  expire(options={}) {
    this.destroy(options);
  }
}


module.exports = Session;
