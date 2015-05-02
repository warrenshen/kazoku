import Backbone from "backbone";
import "backbone-relational";

import StoreDirectory from "../store_directory.js";


class Model extends Backbone.RelationalModel {

  constructor(attributes={}, options={}) {
    super(attributes, options);
  }

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get defaults() {
    return {};
  }

  get name() {
    console.log("Model definition must include model name!")
  }

  get relations() {
    return [];
  }

  get responseKey() {
    console.log("Model definition must include response key!");
  }

  get storeKey() {
    return this.get("id");
  }

  get store() {
    return StoreDirectory.get(this.name);
  }

  // --------------------------------------------------
  // Endpoints
  // --------------------------------------------------
  get createUrl() {
    console.log("Model definition must include create url!")
  }

  get destroyUrl() {
    console.log("Model definition must include destroy url!")
  }

  get requestUrl() {
    console.log("Model definition must include request url!")
  }


  // --------------------------------------------------
  // Requests
  // --------------------------------------------------

  // @param response - raw json response from server.
  // @returns - attributes hash to be `set` to model.
  parse(response, options) {
    var attributes = response[this.responseKey];
    return attributes;
  }

  request(options={}) {
    var self = this;
    // Emit change indicating that the a newly fetched model
    // has been added to the store associated with this model.
    // @param model - updated model with fetched response (same as self).
    // @param response - string indicated success or error.
    // @request - xhr object from ajax request.
    options.success = function(model, response, request) {
      self.store.add(self);
      self.store.emitChange();
    };
    options.error = function(model, response, request) {
      console.log(self.name + " request error!");
    };
    options.url = this.requestUrl;
    this.fetch(options);
  }
}


module.exports = Model;
