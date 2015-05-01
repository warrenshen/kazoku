import Cookies from "cookies-js";

import Store from "../templates/store.js";

import Session from "../models/session.js";


var CHANGE_EVENT = "change";

class SessionStore extends Store {

  constructor() {
    super();
    this._current = new Session();
  }

  getCurrent() {
    return this._current;
  }

  createSession(attributes) {
    var session = new Session(attributes, {}, this);
    session.create();
  }

  add(object, options={}) {
    this._current = object;
    return this._current;
  }
}


module.exports = new SessionStore();
