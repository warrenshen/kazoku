import Backbone from "backbone";


class Model extends Backbone.Model {

  get defaults() {
    return {};
  }

  get key() {
    return this.get("id");
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
