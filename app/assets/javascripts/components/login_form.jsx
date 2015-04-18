var LoginForm = React.createClass({

  propTypes: {
    loginPath: React.PropTypes.string.isRequired,
    signupPath: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    loginPath:  "",
    signupPath: "",
  },

  getInitialState: function() {
    return {shouldShowLogin: true};
  },

  sendRequest: function(path, arguments) {
    var request = new XMLHttpRequest();
    request.open("post", path);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(arguments));
  },

  attemptLogin: function(event) {
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    this.sendRequest(this.props.loginPath, {
      email: email,
      password: password,
    });
  },

  attemptSignup: function(event) {
    var first_name = React.findDOMNode(this.refs.first_name).value;
    var last_name = React.findDOMNode(this.refs.last_name).value;
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    this.sendRequest(this.props.signupPath, {
      person: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      },
    });
  },

  toggleForm: function() {
    this.setState({shouldShowLogin: !this.state.shouldShowLogin});
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
          placeholder="Email">
        </input>
        <input
          className="login-form-input"
          ref="password"
          type="password"
          placeholder="Password">
        </input>
        <a
          className="login-form-submit"
          onClick={this.attemptLogin}>
          Log in
        </a>
        <div className="login-form-section">
          <span className="login-form-label">
            or,
          </span>
          <a
            className="login-form-toggle"
            onClick={this.toggleForm}>
            sign up
          </a>
        </div>
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
          placeholder="First name">
        </input>
        <input
          className="login-form-input"
          ref="last_name"
          type="text"
          placeholder="Last name">
        </input>
        <input
          className="login-form-input"
          ref="email"
          type="text"
          placeholder="Email">
        </input>
        <input
          className="login-form-input"
          ref="password"
          type="password"
          placeholder="Password">
        </input>
        <a
          className="login-form-submit"
          onClick={this.attemptSignup}>
          Sign up
        </a>
        <div className="login-form-section">
          <span className="login-form-label">
            or,
          </span>
          <a
            className="login-form-toggle"
            onClick={this.toggleForm}>
            log in
          </a>
        </div>
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
