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
    this.sendRequest(Routes.people.login, {
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
          placeholder="Email">
        </input>
        <input
          className="general-form-input"
          ref="password"
          type="password"
          placeholder="Password">
        </input>
        <a
          className="general-form-submit"
          onClick={this.attemptLogin}>
          Log in
        </a>
        <div className="general-form-section">
          <span className="general-form-label">
            or,
          </span>
          <Clickable
            style={"general-form-toggle"}
            path={Routes.pages.signup}
            content={"sign up"} />
        </div>
      </form>
    );
  }
});
