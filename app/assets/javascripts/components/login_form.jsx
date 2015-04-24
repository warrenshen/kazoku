var LoginForm = React.createClass({

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
    this.sendRequest(Routes.users.login, {
      session: {
        email: email,
        password: password,
      }
    });
  },

  render: function() {
    return (
      <form className="general-form">
        <h3 className="general-form-title">
          Login
        </h3>
        <input
          className="general-form-input"
          ref="email"
          type="text"
          autoFocus="true"
          placeholder="Email">
        </input>
        <input
          className="general-form-input"
          ref="password"
          type="password"
          placeholder="Password">
        </input>
        <Clickable
          action={this.attemptLogin}
          style={"general-form-submit"}
          content={"Log in"} />
        <div className="general-form-section">
          <span className="general-form-label">
            or,
          </span>
          <Clickable
            path={Routes.pages.signup}
            style={"general-form-toggle"}
            content={"sign up"} />
        </div>
      </form>
    );
  }
});
