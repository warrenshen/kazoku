var Header = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object.isRequired,
    personPath:    React.PropTypes.string.isRequired,
    loginPath:     React.PropTypes.string.isRequired,
    logoutRemote:  React.PropTypes.string.isRequired,
    isColored:     React.PropTypes.bool.isRequired,
  },

  defaultProps: {
    currentPerson: null,
    personPath:    "",
    homePath:      "",
    loginPath:     "",
    isColored:     true,
  },

  sendRequest: function(path, arguments) {
    var request = new XMLHttpRequest();
    request.onload = function() {
      window.location = request.response;
    };
    request.open("delete", path);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(arguments));
  },

  attemptLogout: function(event) {
    var email = this.props.currentPerson.email;
    this.sendRequest(this.props.logoutRemote, {
      email: email,
    });
  },

  renderLogout: function() {
    if (this.props.currentPerson !== null) {
      var merge = React.addons.classSet;
      var brandClass = merge({
        "header-brand": true,
        "header-brand-colored": this.props.isColored,
      });
      return (
        <a
          className={brandClass}
          onClick={this.attemptLogout}>
          Logout
        </a>
      );
    }
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
          <a className={brandClass} href={Routes.pages.home}>
            Kazoku
          </a>
        </div>
        <div className="header-right">
          <div className="vertical-anchor"></div>
          {this.renderLogout()}
          {this.renderProfile()}
        </div>
      </div>
    );
  }
});
