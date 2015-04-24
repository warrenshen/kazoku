var LoginForm = React.createClass({

  attemptLogin: function(event) {
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    var request = Requester.send("post", Routes.users.login, {
      session: {
        email: email,
        password: password,
      }
    });
    request.onload = function() {
      var response = JSON.parse(request.response);
      debugger
      if (response.id) {
        console.log(response.id);
        window.location = Routes.users.index + "/" + response.id;
      } else {
        console.log("incorrect credentials");
      }
    }
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
