import Cookies from "cookies-js";

import Store from "../templates/store.js";

import Session from "../models/session.js";

import Routes from "../constants/routes.js";


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
    if (this._current.get("id") === null) {
      var session = new Session();
      var options = {};
      options.headers = {
        "X-AUTH-EMAIL": Cookies.get("auth_email"),
        "X-AUTH-TOKEN": Cookies.get("auth_token"),
        "X-SESSION-UUID": Cookies.get("session_uuid"),
      };
      return session.request(options);
    }
  }

  createSession(credentials) {
    var session = new Session();
    var options = {};
    options.attrs = {session: credentials};
    return session.create(options);
  }

  add(model, options={}) {
    Cookies.set("auth_email", model.get("auth_email"));
    Cookies.set("auth_token", model.get("auth_token"));
    Cookies.set("session_uuid", model.get("uuid"));
    this._current = model;
    Kazoku.Router.navigate(Routes.pages.home, true);
    return this._current;
  }
}


module.exports = new SessionsStore();
