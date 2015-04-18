var LoginForm = React.createClass({

  propTypes: {
    submitPath: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    submitPath:  "",
  },

  render: function() {
    return (
      <form className="login-form">
        <h3 className="login-form-title">Login</h3>
        <input
          className="login-form-input"
          ref="email"
          type="text"
          placeholder="email">
        </input>
        <input
          className="login-form-input"
          ref="password"
          type="password"
          placeholder="password">
        </input>
        <a className="login-form-submit">Log in</a>
      </form>
    );
  }
});
