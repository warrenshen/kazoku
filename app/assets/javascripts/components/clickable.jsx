var Clickable = React.createClass({

  propTypes: {
    action:  React.PropTypes.func,
    path:    React.PropTypes.string,
    style:   React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    action:  null,
    path:    "",
    style:   "",
    content: "",
  },

  handleClick: function() {
    event.stopPropagation();
    if (this.props.path !== "") {
      window.location = this.props.path;
    } else if (this.props.action !== undefined && this.props.action !== null) {
      this.props.action();
    }
  },

  render: function() {
    return (
      <a
        className={this.props.style}
        href={this.props.path}
        onClick={this.handleClick}>
        {this.props.content}
      </a>
    );
  }
});
