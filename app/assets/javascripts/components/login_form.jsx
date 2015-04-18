var LoginForm = React.createClass({

  propTypes: {
    submitPath: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    submitPath:  "",
  },

  initialState: {
    shouldShowLogin: true,
  },

  sendRequest: function(arguments) {
    var request = new XMLHttpRequest();
    request.open("post", this.props.submitPath);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(arguments));
  }

  attemptLogin: function(event) {
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    this.sendRequest({email: email, password: password});
  },

  attemptSignup: function(event) {
    var first_name = React.findDOMNode(this.refs.first_name).value;
    var last_name = React.findDOMNode(this.refs.last_name).value;
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    this.sendRequest({
      first_name: first,
      last_name: last,
      email: email,
      password: password,
    });
  },

  renderLoginForm: function() {
    return (
      <form className="login-form">
        <h3 className="login-form-title">
          Login
        </h3>
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
        <a
          className="login-form-submit"
          onClick={this.attemptLogin}>
          Log in
        </a>
      </form>
    );
  },

  renderSignupForm: function() {
    return (
      <form className="login-form">
        <h3 className="login-form-title">
          Signup
        </h3>
        <input
          className="login-form-input"
          ref="first_name"
          type="text"
          placeholder="first name">
        </input>
        <input
          className="login-form-input"
          ref="last_name"
          type="text"
          placeholder="last name">
        </input>
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
        <a
          className="login-form-submit"
          onClick={this.attemptSignup}>
          Sign up
        </a>
      </form>
    );
  },

  render: function() {
    if (this.state.shouldShowLogin) {
      return this.renderLoginForm();
    } else {
      return this.renderSignupForm();
    }
  }
});
