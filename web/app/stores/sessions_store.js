import Cookies from "cookies-js";

import Store from "app/templates/store";

import RouterDirectory from "app/router_directory";

import Session from "app/models/session";

import Routes from "app/constants/routes";


class SessionsStore extends Store {

  // Custom constructor to set `_current` to placeholder model.
  constructor() {
    super(new Session());
  }

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    return "SessionsStore";
  }

  get model() {
    return Session;
  }

  get collections() {
    return [];
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  // Custom method to handle successful login redirection.
  add(model, options={}) {
    if (Cookies.get("session_uuid") === "") {
      Cookies.set("session_uuid", model.get("uuid"));
    }
    // If conditional indicates that the client has created a new
    // session so browser authorization cookies should be set.
    if (options.shouldNavigate) {
      Cookies.set("auth_email", model.get("auth_email"));
      Cookies.set("auth_token", model.get("auth_token"));
      this._current = model;
      RouterDirectory.get("Router").navigate(Routes.pages.home, true);
    } else {
      this._current = model;
    }
    if (options.shouldEmitChange) {
      this.emitChange();
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
      self.emitChange();
      RouterDirectory.get("Router").navigate(Routes.pages.home, true);
    };
    this._current.expire(options);
  }
}


module.exports = new SessionsStore();
