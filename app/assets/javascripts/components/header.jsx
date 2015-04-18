var Header = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object.isRequired,
    homePath:      React.PropTypes.string.isRequired,
    loginPath:     React.PropTypes.string.isRequired,
    isColored:     React.PropTypes.bool.isRequired,
  },

  defaultProps: {
    currentPerson: null,
    homePath:      "",
    loginPath:     "",
    isColored:     true,
  },

  renderProfile: function() {
    var merge = React.addons.classSet;
    var loginClass = merge({
      "header-login": true,
      "header-login-colored": this.props.isColored,
    });
    if (this.props.currentPerson === null) {
      return (
        <a className={loginClass} href={this.props.loginPath}>
          Signup/Login
        </a>
      );
    } else {
      return (
        <Clickable
          style={loginClass}
          path={this.props.homePath}
          content={"Your Profile"} />
      );
    }
  },

  render: function() {
    var merge = React.addons.classSet;
    var headerClass = merge({
      "header": true,
      "header-colored": this.props.isColored,
    });
    var brandClass = merge({
      "header-brand": true,
      "header-brand-colored": this.props.isColored,
    });
    return (
      <div className={headerClass}>
        <div className="header-left">
          <div className="vertical-anchor"></div>
          <a className={brandClass} href={this.props.homePath}>
            Kazoku
          </a>
        </div>
        <div className="header-right">
          <div className="vertical-anchor"></div>
          {this.renderProfile()}
        </div>
      </div>
    );
  }
});
