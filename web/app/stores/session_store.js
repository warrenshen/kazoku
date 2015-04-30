import Events from "events";

import Dispatcher from "../dispatcher.js";

import Session from "../models/session.js";


var CHANGE_EVENT = "change";

class SessionStore extends Events.EventEmitter {

  constructor() {
    super();
    this._current = new Session();
  }

  getSession() {
    if (this._current === null) {
      var session = new Session({}, {}, this);
      session.request();
    } else {
      return this._current;
    }
  }

  createSession(attributes) {
    var session = new Session(attributes, {}, this);
    session.create();
  }

  add(object, options={}) {
    this._current = object;
    return this._current;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}


module.exports = new SessionStore();
