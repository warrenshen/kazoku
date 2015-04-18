var LoginForm = React.createClass({

  propTypes: {
    submitPath: React.PropTypes.string.isRequired,
  },

  defaultProps: {
    submitPath:  "",
  },

  handleClick: function(event) {
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    var request = new XMLHttpRequest();
    request.open("post", this.props.submitPath);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({email: email, password: password}));
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
          onClick={this.handleClick}>
          Log in
        </a>
      </form>
    );
  }
});
