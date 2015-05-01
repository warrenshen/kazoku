import React from "react";
import Component from "../templates/component.jsx";


class Clickable extends Component {

  handleClick() {
    event.stopPropagation();
    if (this.props.route !== "") {
      event.preventDefault();
      Kazoku.Router.navigate(this.props.route, true);
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
  route:   React.PropTypes.string,
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
