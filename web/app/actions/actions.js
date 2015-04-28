import Dispatcher from "../dispatcher.js";


class Actions {

  create(attributes) {
    Dispatcher.handleViewAction({
      actionType: "create",
      attributes: attributes,
    });
  }

  destroy(id) {
    Dispatcher.handleViewAction({
      actionType: "destroy",
      id: id,
    });
  }
}


module.exports = new Actions();
