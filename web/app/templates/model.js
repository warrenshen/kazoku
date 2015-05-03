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
    return this.name.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
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
  // Attributes
  // --------------------------------------------------
  get createAttributes() {
    console.log("Model definition must include create attributes!")
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------

  // Called by fetch automatically and by custom create explicitly.
  // @param response - raw json response from server.
  // @returns - attributes hash to be `set` to model.
  parse(response, options={}) {
    var attributes = response[this.responseKey];
    return attributes;
  }

  create(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Parses response by calling `parse` method and sets
      // the attributes of placeholder self accordingly.
      // @param response - unparsed json response from server.
      // @param status - string indicated success or error.
      // @request - xhr object from ajax request.
      options.success = function(response, status, request) {
        var attributes = self.parse(response);
        self.set(attributes);
        self.store.add(self);
        self.store.emitChange();
      };
    }
    if (options.error === undefined) {
      options.error = function(response, status, request) {
        console.log(self.name + " create error!");
      };
    }
    if (options.attrs === undefined) {
      options.attrs = this.createAttributes;
    }
    options.url = this.createUrl;
    this.sync("create", this, options);
  }

  destroy(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Success params parallel that of the `create` method above.
      options.success = function(response, status, request) {
        console.log(self.name + " destroy success!");
      };
    }
    if (options.error === undefined) {
      options.error = function(response, status, request) {
        console.log(self.name + " destroy error!");
      };
    }
    options.url = this.destroyUrl;
    this.sync("delete", this, options);
  }

  request(options={}) {
    var self = this;
    // Emit change indicating that the a newly fetched model
    // has been added to the store associated with this model.
    // @param model - updated model with fetched response (same as self).
    // @param status - string indicated success or error.
    // @request - xhr object from ajax request.
    options.success = function(model, status, request) {
      self.store.add(self);
      self.store.emitChange();
    };
    options.error = function(model, status, request) {
      console.log(self.name + " request error!");
    };
    options.url = this.requestUrl;
    this.fetch(options);
  }
}


module.exports = Model;
