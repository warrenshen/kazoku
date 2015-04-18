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
    console.log(this.props.submitPath);
    request.open("post", this.props.submitPath);
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
