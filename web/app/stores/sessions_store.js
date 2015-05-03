import Cookies from "cookies-js";

import Store from "../templates/store.js";

import Session from "../models/session.js";

import Routes from "../constants/routes.js";


class SessionsStore extends Store {

  constructor() {
    super(new Session());
  }

  get name() {
    return "SessionsStore";
  }

  get modelClass() {
    return Session;
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
      this._current.request(options);
    }
  }

  login(credentials) {
    var session = new Session();
    var options = {};
    // Credentials hash scoped under session in attributes to mimic
    // `createAttributes` method and send json in desired format.
    options.attrs = {session: credentials};
    session.establish(options);
  }

  logout() {
    var self = this;
    var options = {};
    options.headers = {
      "X-AUTH-EMAIL": Cookies.get("auth_email"),
      "X-AUTH-TOKEN": Cookies.get("auth_token"),
      "X-SESSION-UUID": Cookies.get("session_uuid"),
    };
    // Success callback resets everything authentication related,
    // resetting browser cookies and defaulting the current session.
    options.success = function(response, status, request) {
      Cookies.set("auth_email", "");
      Cookies.set("auth_token", "");
      Cookies.set("session_uuid", "");
      self._current.set(self._current.defaults);
      self._current.unset("person");
      Kazoku.Router.navigate(Routes.pages.home, true);
      self.emitChange();
    };
    this._current.expire(options);
  }

  add(model, options={}) {
    // If conditional indicates that the client has created a
    // new session and therefore browser cookies should be set.
    if (options.shouldNavigate) {
      Cookies.set("auth_email", model.get("auth_email"));
      Cookies.set("auth_token", model.get("auth_token"));
      Cookies.set("session_uuid", model.get("uuid"));
      this._current = model;
      Kazoku.Router.navigate(Routes.pages.home, true);
    } else {
      this._current = model;
    }
  }
}


module.exports = new SessionsStore();
