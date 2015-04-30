import Backbone from "backbone";

import ApiRoutes from "../constants/api_routes.js";


class Session extends Backbone.Model {

  constructor(attributes={}, options={}, store) {
    super(attributes, options);
    this.store = store;
  }

  get defaults() {
    return {
      id: null,
      email: "",
      password: "",
    }
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
      self.store.add(model);
      self.store.emitChange();
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
    options.success = function(model, response, options) {
      debugger
      self.store.add(model);
      self.store.emitChange();
    }
    options.error = function(model, response, options) {
      console.log("request error:");
      console.log(model);
    }
    options.attrs = this.createAttributes();
    options.url = this.createUrl();
    var response = this.sync("create", this, options);
    return response;
  }

  createAttributes() {
    return {
      session: {
        id: this.get("id"),
        email: this.get("email"),
        password: this.get("password"),
      }
    };
  }

  createUrl() {
    return ApiRoutes.sessions.login;
  }
}


module.exports = Session;
