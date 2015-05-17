// --------------------------------------------------
// Import Style Guide
// --------------------------------------------------
// Order: react + super component, components, models,
// stores, actions, and any other imports (such as constants).

import React from "react";


class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return <div></div>;
  }
}


module.exports = Component;
