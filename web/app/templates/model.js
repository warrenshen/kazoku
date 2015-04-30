import Backbone from "backbone";
import "backbone-relational";


class Model extends Backbone.RelationalModel {

  constructor(attributes={}, options={}, store) {
    super(attributes, options);
    this.store = store;
  }

  get defaults() {
    return {};
  }

  get key() {
    return this.get("id");
  }

  get relations() {
    return [];
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
