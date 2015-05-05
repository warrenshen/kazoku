import React from "react";
import Component from "app/templates/component";


class ListeningComponent extends Component {

  stores() {
    return [];
  }

  requestFromStore() {

  }

  getDefaultState() {
    // TODO: Move this request call to a different lifecycle method.
    this.requestFromStore();
    return this.getStoreState();
  }

  getStoreState() {
    return {};
  }

  componentDidMount() {
    super.componentDidMount();
    var self = this;
    this.stores().map(function(store) {
      store.addChangeListener(self._onChange.bind(self));
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    var self = this;
    this.stores().map(function(store) {
      // TODO: Something here or in the template store is wrong,
      // these event listeners aren't actually being removed.
      store.removeChangeListener(self._onChange.bind(self));
    });
  }

  _onChange() {
    this.setState(this.getStoreState());
  }
}


module.exports = ListeningComponent;
