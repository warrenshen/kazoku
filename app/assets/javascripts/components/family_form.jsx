var FamilyForm = React.createClass({

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
            path={Routes.pages.signup}
            style={"login-form-toggle"}
            content={"sign up"} />
        </div>
      </form>
    );
  }
});
