var SignupForm = React.createClass({

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
    this.sendRequest(Routes.users.index, {
      user: {
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
      <form className="general-form">
        <h3 className="general-form-title">
          Signup
        </h3>
        <input
          className="general-form-input"
          ref="first_name"
          type="text"
          autoFocus="true"
          placeholder="First name">
        </input>
        <input
          className="general-form-input"
          ref="last_name"
          type="text"
          placeholder="Last name">
        </input>
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
        <input
          className="general-form-input"
          ref="image_url"
          type="text"
          placeholder="Image link">
        </input>
        <Clickable
          action={this.attemptSignup}
          style={"general-form-submit"}
          content={"Sign up"} />
        <div className="general-form-section">
          <span className="general-form-label">
            or,
          </span>
          <Clickable
            path={Routes.pages.login}
            style={"general-form-toggle"}
            content={"log in"} />
        </div>
      </form>
    );
  }
});
