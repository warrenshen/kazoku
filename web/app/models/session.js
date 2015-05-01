import Model from "../templates/model.js";

import Person from "./person.js";

import ApiRoutes from "../constants/api_routes.js";


class Session extends Model {

  get defaults() {
    return {
      id: null,
      uuid: "",
      last_active_at: "",
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

  parse(response, options) {
    var session = response.session;
    return session;
  }

  request(options={}) {
    var self = this;
    options.success = function(model, response, options) {
      debugger
      if (response.session !== null) {
        self.store.add(model);
        self.store.emitChange();
      }
    }
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
    }
    options.error = function(response, status, options) {
      console.log("request error:");
      console.log(response);
    }
    options.url = this.createUrl();
    var response = this.sync("create", this, options);
    return response;
  }

  createUrl() {
    return ApiRoutes.sessions.login;
  }
}


module.exports = Session;
