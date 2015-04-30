import Store from "../templates/store.js";

import Session from "../models/session.js";


var CHANGE_EVENT = "change";

class SessionStore extends Store {

  constructor() {
    super();
    this._current = new Session();
  }

  getSession() {
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
