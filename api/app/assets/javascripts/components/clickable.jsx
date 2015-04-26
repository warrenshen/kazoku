var Clickable = React.createClass({

  propTypes: {
    action:  React.PropTypes.func,
    path:    React.PropTypes.string,
    style:   React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    source:  React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      action:  null,
      path:    "",
      style:   "",
      content: "",
      source:  "",
    };
  },

  handleClick: function() {
    event.stopPropagation();
    if (this.props.path !== "") {
      window.location = this.props.path;
    } else if (this.props.action !== null) {
      this.props.action();
    }
  },

  render: function() {
    if (this.props.source.length == 0) {
      return (
        <a
          className={this.props.style}
          href={this.props.path}
          onClick={this.handleClick}>
          {this.props.content}
        </a>
      );
    } else {
      return (
        <img
          className={this.props.style}
          src={this.props.source}
          onClick={this.handleClick} />
      );
    }
  }
});
