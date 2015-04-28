import Dispatcher from "../dispatcher.js";


class Actions {

  create(attributes) {
    Dispatcher.handleViewAction({
      type: "create",
      attributes: attributes,
    });
  }

  destroy(id) {
    Dispatcher.handleViewAction({
      type: "destroy",
      id: id,
    });
  }
}


module.exports = new Actions();
