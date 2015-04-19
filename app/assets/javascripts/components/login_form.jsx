var LoginForm = React.createClass({

  propTypes: {
    signupPath:  React.PropTypes.string.isRequired,
    loginRemote: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    signupPath:  "",
    loginRemote: "",
  },

  sendRequest: function(path, arguments) {
    var request = new XMLHttpRequest();
    request.onload = function() {
      window.location = request.response;
    };
    request.open("post", path);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(arguments));
  },

  attemptLogin: function(event) {
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    this.sendRequest(this.props.loginRemote, {
      email: email,
      password: password,
    });
  },

  render: function() {
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
          <Clickable
            path={this.props.signupPath}
            style={"login-form-toggle"}
            content={"sign up"} />
        </div>
      </form>
    );
  }
});
