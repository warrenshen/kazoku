import React from "react";
import Component from "./component.jsx";


class ListeningComponent extends Component {

  stores() {
    return [];
  }

  requestFromStore() {

  }

  getDefaultState() {
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
    this.requestFromStore();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    var self = this;
    this.stores().map(function(store) {
      console.log("unmounting!");
      store.removeChangeListener(self._onChange.bind(self));
    });
  }

  _onChange() {
    this.setState(this.getStoreState());
  }
}


module.exports = ListeningComponent;
