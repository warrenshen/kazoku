import Cookies from "cookies-js";

import Store from "../templates/store.js";

import Session from "../models/session.js";


var CHANGE_EVENT = "change";

class SessionsStore extends Store {

  constructor() {
    super();
    this._current = new Session();
  }

  get name(){
    return "SessionsStore";
  }

  getCurrent() {
    return this._current;
  }

  requestSession() {
    var session = new Session();
    return session.request();
  }

  createSession(attributes) {
    var session = new Session(attributes);
    return session.create();
  }

  add(object, options={}) {
    this._current = object;
    return this._current;
  }
}


module.exports = new SessionsStore();
