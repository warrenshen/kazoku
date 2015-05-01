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

  createSession(credentials) {
    var session = new Session();
    var options = {};
    options.attrs = {session: credentials};
    return session.create(options);
  }

  add(model, options={}) {
    this._current = model;
    return this._current;
  }
}


module.exports = new SessionsStore();
