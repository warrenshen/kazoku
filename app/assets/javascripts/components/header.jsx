var Header = React.createClass({

  propTypes: {
    loginPath: React.PropTypes.string.isRequired,
    isColored: React.PropTypes.bool.isRequired,
  },

  defaultProps: {
    loginPath: "",
    isColored: true,
  },

  render: function() {
    var merge = React.addons.classSet;
    var headerClass = merge({
      "header": true,
      "header-colored": this.props.isColored,
    });
    var brandClass = merge({
      "header-brand": true,
      "primary-color": this.props.isColored,
    });
    var loginClass = merge({
      "header-login": true,
      "primary-color": this.props.isColored,
    });

    return (
      <div className={headerClass}>
        <div className="header-left">
          <div className="vertical-anchor"></div>
          <a className={brandClass}>
            Kazoku
          </a>
        </div>
        <div className="header-right">
          <div className="vertical-anchor"></div>
          <a className={loginClass} href={this.props.loginPath}>
            Signup/Login
          </a>
        </div>
      </div>
    );
  }
});
