import Cookies from "cookies-js";

import Store from "app/templates/store";

import RouterDirectory from "app/router_directory";

import Session from "app/models/session";

import Routes from "app/constants/routes";


class SessionsStore extends Store {

  setDefaults() {
    this._current = new Session();
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
      this._current.request();
    }
  }

  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  // Establishes a new session, setting cookies, navigating home,
  // and setting `this._current` to the given session.
  establish(session) {
    Cookies.set("auth_email", session.get("auth_email"));
    Cookies.set("auth_token", session.get("auth_token"));
    Cookies.set("session_uuid", session.get("uuid"));
    this._current = session;
    this.emitChange();
    RouterDirectory.get("Router").navigate(Routes.pages.home, true);
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
