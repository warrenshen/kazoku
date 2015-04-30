import Backbone from "backbone";

import ApiRoutes from "../constants/api_routes.js";


class Session extends Backbone.Model {

  get defaults() {
    return {
      id: null,
      email: "",
    }
  }

  get urlRoot() {
    return ApiRoutes.me;
  }

  parse(response, options) {
    debugger
  }

  request(options={}) {
    // var self = this;
    options.success = function(model, response, options) {
      console.log("request success:");
      console.log(model);
    }
    options.error = function(model, response, options) {
      console.log("request error:");
      console.log(model);
    }
    var response = this.fetch(options);
    return response;
  }
}
