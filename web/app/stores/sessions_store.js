import Cookies from "cookies-js";

import Store from "../templates/store.js";

import Session from "../models/session.js";

import Routes from "../constants/routes.js";


var CHANGE_EVENT = "change";

class SessionsStore extends Store {

  constructor() {
    super(new Session());
  }

  get name(){
    return "SessionsStore";
  }

  collections() {
    return [];
  }

  // Only request session from server if current is a placeholder.
  requestCurrent() {
    if (!this._current.has("id")) {
      var options = {};
      options.headers = {
        "X-AUTH-EMAIL": Cookies.get("auth_email"),
        "X-AUTH-TOKEN": Cookies.get("auth_token"),
        "X-SESSION-UUID": Cookies.get("session_uuid"),
      };
      return this._current.request(options);
    }
  }

  login(credentials) {
    var session = new Session();
    var options = {};
    options.attrs = {session: credentials};
    return session.create(options);
  }

  logout() {
    var self = this;
    var options = {};
    options.headers = {
      "X-AUTH-EMAIL": Cookies.get("auth_email"),
      "X-AUTH-TOKEN": Cookies.get("auth_token"),
      "X-SESSION-UUID": Cookies.get("session_uuid"),
    };
    options.success = function(model, response, options) {
      Cookies.set("auth_email", "");
      Cookies.set("auth_token", "");
      Cookies.set("session_uuid", "");
      self._current.set(self._current.defaults);
      self.emitChange();
      Kazoku.Router.navigate(Routes.pages.home, true);
    };
    return this._current.expire(options);
  }

  add(model, options={}) {
    Cookies.set("auth_email", model.get("auth_email"));
    Cookies.set("auth_token", model.get("auth_token"));
    Cookies.set("session_uuid", model.get("uuid"));
    Kazoku.Router.navigate(Routes.pages.home, true);
    this._current = model;
    return this._current;
  }
}


module.exports = new SessionsStore();
