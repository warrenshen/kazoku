import Backbone from "backbone";


class Person extends Backbone.Model {

  get key() {
    console.log(this.get("id"));
    return this.get("id");
  }

  get defaults() {
    return {
      id: null,
      first_name: "",
      last_name: "",
      image_url: "",
    }
  }

  get urlRoot() {
    return "/users/";
  }

  request(options={}) {
    // var self = this;
    // var success = options.success;
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


module.exports = Person;
