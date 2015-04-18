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
        <input className="login-form-input" ref="email"></input>
        <input className="login-form-input" ref="password"></input>
        <button className="login-form-submit">Log in</button>
      </form>
    );
  }
});
