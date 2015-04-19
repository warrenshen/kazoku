var SignupForm = React.createClass({

  getInitialState: function() {
    return {shouldShowLogin: true};
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

  attemptSignup: function(event) {
    var first_name = React.findDOMNode(this.refs.first_name).value;
    var last_name = React.findDOMNode(this.refs.last_name).value;
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    var image_url = React.findDOMNode(this.refs.image_url).value;
    this.sendRequest(Routes.people.index, {
      person: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        image_url: image_url,
      }
    });
  },

  render: function() {
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
        <input
          className="login-form-input"
          ref="image_url"
          type="text"
          placeholder="Image link">
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
          <Clickable
            path={Routes.pages.login}
            style={"login-form-toggle"}
            content={"log in"} />
        </div>
      </form>
    );
  }
});
