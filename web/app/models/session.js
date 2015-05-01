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

  get relations() {
    return [
      {
        type: "HasOne",
        key: "person",
        relatedModel: Person,
      }
    ];
  }

  get name() {
    return "Session";
  }

  get urlRoot() {
    return ApiRoutes.sessions.me;
  }

  get createUrl() {
    return ApiRoutes.sessions.login;
  }

  get destroyUrl() {
    return ApiRoutes.sessions.logout;
  }

  parse(response, options) {
    var session = response.session;
    return session;
  }

  request(options={}) {
    var self = this;
    options.success = function(model, response, options) {
      if (response.session !== null) {
        self.store.add(model);
        self.store.emitChange();
      }
    };
    options.error = function(model, response, options) {
      console.log("request error:");
      console.log(model);
    }
    var response = this.fetch(options);
    return response;
  }

  create(options={}) {
    var self = this;
    options.success = function(response, status, options) {
      self.set(response.session);
      self.store.add(self);
      self.store.emitChange();
    };
    options.error = function(response, status, options) {
      console.log("create session error:");
      console.log(response);
    };
    options.url = this.createUrl;
    var response = this.sync("create", this, options);
    return response;
  }

  destroy(options={}) {
    debugger
    var self = this;
    options.error = function(response, status, options) {
      console.log("destroy session error:");
      console.log(response);
    };
    options.url = this.destroyUrl;
    var response = this.sync("delete", this, options);
    return response;
  }
}


module.exports = Session;
