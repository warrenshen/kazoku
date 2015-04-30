import Events from "events";

import Dispatcher from "../dispatcher.js";


var CHANGE_EVENT = "change";

class SessionStore extends Events.EventEmiiter {

  constructor() {
    super();
    this._current = null;
  }

  getSession() {
    if (_current === null) {
      var session = new Session();
      session.request();
    } else {
      return _current;
    }
  }
}
