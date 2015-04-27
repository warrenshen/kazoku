import React from "react";


class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.state();
  }

  state() {
    return {};
  }

  render() {
    return <div></div>;
  }

  set styles(styles) {}
  get styles() {}

}


export default Component;
