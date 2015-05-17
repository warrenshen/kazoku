import Actions from "app/templates/actions";

import ActionConstants from "app/constants/action_constants";


class PeopleActions extends Actions {

  create(attributes) {
    this.act({
      type: ActionConstants.people.create,
      attributes: attributes,
    });
  }
}


module.exports = new PeopleActions();
