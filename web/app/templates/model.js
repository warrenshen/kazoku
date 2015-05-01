import Backbone from "backbone";
import "backbone-relational";

import Stores from "../stores.js";


class Model extends Backbone.RelationalModel {

  constructor(attributes={}, options={}) {
    super(attributes, options);
  }

  get defaults() {
    return {};
  }

  get name() {
    return "Model";
  }

  get key() {
    return this.get("id");
  }

  get relations() {
    return [];
  }

  get store() {
    return Stores.get(this.name);
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


module.exports = Model;
