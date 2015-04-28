import Flux from "flux";

class Dispatcher extends Flux.Dispatcher {

  handleViewAction: function(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
}


module.exports = new Dispatcher();
