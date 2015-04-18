var Clickable = React.createClass({

  propTypes: {
    path:    React.PropTypes.string.isRequired,
    style:   React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    path:    "",
    style:   "",
    content: "",
  },

  render: function() {
    return (
      <a className={this.props.style} href={this.props.path}>
        {this.props.content}
      </a>
    );
  }
});
