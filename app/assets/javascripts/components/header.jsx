var Header = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object,
    isColored:     React.PropTypes.bool.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentPerson: null,
      isColored:     true,
    };
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
    this.sendRequest(Routes.people.logout, {});
  },

  renderLogout: function() {
    if (this.props.currentPerson !== null) {
      return (
        <Clickable
          action={this.attemptLogout}
          style={"general-button"}
          content={"Logout"} />
      );
    }
  },

  renderProfile: function() {
    if (this.props.currentPerson === null) {
      return (
        <Clickable
          path={Routes.pages.login}
          style={"general-button"}
          content={"Login/Signup"} />
      );
    } else {
      return (
        <Clickable
          path={Routes.people.index + "/" + this.props.currentPerson.id}
          style={"general-button"}
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
          <Clickable
            path={Routes.pages.home}
            style={brandClass}
            content={"Kazoku"} />
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
