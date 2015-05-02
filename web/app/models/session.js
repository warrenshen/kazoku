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

  // @param response - raw json response from server.
  // @returns - attributes hash to be `set` to model.
  parse(response, options) {
    var attributes = response.session;
    return attributes;
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
    options.success = function(model, response, options) {
      self.store.add(self);
      self.store.emitChange();
    };
    options.error = function(model, response, options) {
      console.log("create session error:");
      console.log(response);
    };
    options.url = this.createUrl;
    var attributes = options.attrs
    delete options.attrs
    var response = this.save(attributes, options);
    return response;
  }

  destroy(options={}) {
    debugger
    var self = this;
    options.error = function(model, response, options) {
      console.log("destroy session error:");
      console.log(response);
    };
    options.url = this.destroyUrl;
    var response = this.sync("delete", this, options);
    return response;
  }
}


module.exports = Session;
