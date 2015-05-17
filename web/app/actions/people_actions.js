import Actions from "app/templates/actions";

import ActionConstants from "app/constants/action_constants";


class PeopleActions extends Actions {

  create(attributes) {
    this.act({
      type: ActionConstants.people.create,
      attributes: attributes,
    });
  }

  join(attributes) {
    this.act({
      type: ActionConstants.people.join,
      attributes: attributes,
    });
  }

  leave(attributes) {
    this.act({
      type: ActionConstants.people.leave,
      attributes: attributes,
    });
  }
}


module.exports = new PeopleActions();
