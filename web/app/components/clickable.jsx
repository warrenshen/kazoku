import React from "react";
import Component from "../component.jsx";


class Clickable extends Component {

  handleClick() {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.route !== "") {
      // TODO: Figure out a way to do this without global scope.
      App.Router.navigate(this.props.route, true);
    } else if (this.props.action !== null) {
      this.props.action();
    }
  }

  render() {
    if (this.props.source.length == 0) {
      return (
        <a
          className={this.props.style}
          href={this.props.route}
          onClick={this.handleClick.bind(this)}>
          {this.props.content}
        </a>
      );
    } else {
      return (
        <img
          className={this.props.style}
          src={this.props.source}
          onClick={this.handleClick.bind(this)} />
      );
    }
  }
}

Clickable.propTypes = {
  action:  React.PropTypes.func,
  route:    React.PropTypes.string,
  style:   React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  source:  React.PropTypes.string,
}

Clickable.defaultProps = {
  action:  null,
  route:   "",
  style:   "",
  content: "",
  source:  "",
}


module.exports = Clickable;
