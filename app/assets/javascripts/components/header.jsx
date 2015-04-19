var Header = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object.isRequired,
    personPath:    React.PropTypes.string.isRequired,
    homePath:      React.PropTypes.string.isRequired,
    loginPath:     React.PropTypes.string.isRequired,
    isColored:     React.PropTypes.bool.isRequired,
  },

  defaultProps: {
    currentPerson: null,
    personPath:    "",
    homePath:      "",
    loginPath:     "",
    isColored:     true,
  },

  renderProfile: function() {
    if (this.props.currentPerson === null) {
      return (
        <Clickable
          style={"general-button"}
          path={this.props.loginPath}
          content={"Login/Signup"} />
      );
    } else {
      return (
        <Clickable
          style={"general-button"}
          path={this.props.personPath}
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
