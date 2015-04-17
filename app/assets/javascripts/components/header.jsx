var Header = React.createClass({

  propTypes: {
    loginPath: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    loginPath: "",
  },

  render: function() {
    return (
      <div className="header">
        <div className="vertical-anchor"></div>
        <a className="header-login-button" href={this.props.loginPath}>
          Signup/Login
        </a>
      </div>
    );
  }
});
