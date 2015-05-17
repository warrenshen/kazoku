import Backbone from "backbone";
import "backbone-relational";
import Cookies from "cookies-js";

import StoreDirectory from "app/store_directory";


class Model extends Backbone.RelationalModel {

  constructor(attributes={}, options={}) {
    super(attributes, options);
  }

  initialize() {
    // If newly initialized model isn't just a placeholder,
    // add it to its associated store automatically.
    if (this.get("id") !== null) {
      // TODO: Figure out how models automatically don't add self
      // to store if there already is a duplicate instance of it,
      // even in collection requests/responses.
      console.log("Adding model to store: " + this.name);
      this.store.add(this);
    }
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
  headers() {
    return {
      "X-AUTH-EMAIL": Cookies.get("auth_email"),
      "X-AUTH-TOKEN": Cookies.get("auth_token"),
      "X-SESSION-UUID": Cookies.get("session_uuid"),
    };
  }

  // Called by custom create and request explicitly.
  // @param response - raw json response from server.
  // @returns - attributes hash to be `set` to model.
  parse(response, options={}) {
    var attributes = response[this.responseKey];
    return attributes;
  }

  create(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Parses response by calling the `parse` method
      // and sets the attributes of self accordingly.
      // @param response - unparsed json response from server.
      // @param status - string indicated success or error.
      // @request - xhr object from ajax request.
      options.success = function(response, status, request) {
        var attributes = self.parse(response);
        if (attributes !== undefined) {
          self.set(attributes);
          self.store.emitChange();
        }
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
    options.headers = this.headers();
    options.url = this.createUrl;
    this.sync("create", this, options);
  }

  destroy(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Success params parallel that of the `create` method above.
      options.success = function(response, status, request) {
        // TODO: Add substance here when necessary.
        console.log(self.name + " destroy success!");
      };
    }
    if (options.error === undefined) {
      options.error = function(response, status, request) {
        console.log(self.name + " destroy error!");
      };
    }
    options.headers = this.headers();
    options.url = this.destroyUrl;
    this.sync("delete", this, options);
  }

  request(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Emit change indicating that the model (which is already
      // in its associated store) has been updated with the response.
      options.success = function(response, status, request) {
        var attributes = self.parse(response);
        if (attributes !== undefined) {
          self.set(attributes);
          self.store.emitChange();
        }
      };
    }
    if (options.error === undefined) {
      options.error = function(response, status, request) {
        console.log(self.name + " request error!");
      };
    }
    options.headers = this.headers();
    options.url = this.requestUrl;
    this.sync("read", this, options);
  }

  update(options={}) {
    var self = this;
    if (options.success === undefined) {
      // Success params parallel that of the `create` method above.
      options.success = function(response, status, request) {
        var attributes = self.parse(response);
        if (attributes !== undefined) {
          self.set(attributes);
          self.store.emitChange();
        }
      };
    }
    if (options.error === undefined) {
      options.error = function(response, status, request) {
        console.log(self.name + " update error!");
      };
    }
    if (options.attrs === undefined) {
      options.attrs = this.updateAttributes;
    }
    options.headers = this.headers();
    options.url = this.updateUrl;
    this.sync("update", this, options);
  }
}


module.exports = Model;
