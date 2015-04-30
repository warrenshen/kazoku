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
}


module.exports = Session;
