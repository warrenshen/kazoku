import Store from "app/templates/store";

import Person from "app/models/person";

import PeopleCollection from "app/collections/people_collection";

import ActionConstants from "app/constants/action_constants";


class PeopleStore extends Store {

  // --------------------------------------------------
  // Defaults
  // --------------------------------------------------
  get name() {
    return "PeopleStore";
  }

  get model() {
    return Person;
  }

  get collections() {
    return [
      PeopleCollection,
    ];
  }

  // --------------------------------------------------
  // Requests
  // --------------------------------------------------
  requestPeople() {
    return this._collections["PeopleCollection"].request();
  }

  // --------------------------------------------------
  // Gets
  // --------------------------------------------------
  getPeople() {
    return this._collections["PeopleCollection"].models;
  }

  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  // Custom create that calls `register` instead of default 'create'.
  create(attributes, options={}) {
    var person = new Person(attributes);
    person.register(options);
  }

  // --------------------------------------------------
  // Dispatch
  // --------------------------------------------------
  handleDispatch(payload) {
    var action = payload.action;
    switch (action.type) {
      case ActionConstants.people.create:
        this.create(action.attributes);
        break;
      case ActionConstants.people.leave:
        this.update(action.attributes);
        break;
    }
  }
}


module.exports = new PeopleStore();
