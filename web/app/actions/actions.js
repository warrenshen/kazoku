import Dispatcher from "app/dispatcher";

import ActionConstants from "app/constants/action_constants";


class Actions {

  create(attributes) {
    Dispatcher.handleViewAction({
      type: ActionConstants.people.create,
      attributes: attributes,
    });
  }
}


module.exports = new Actions();
