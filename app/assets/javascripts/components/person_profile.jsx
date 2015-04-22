var userProfile = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object,
    user:        React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentUser: null,
      user:      null,
    };
  },

  renderName: function() {
    var user = this.props.user;
    return user.first_name + " " + user.last_name;
  },

  renderFamily: function() {
    if (this.props.user.family_name) {
      return this.props.user.family_name;
    } else {
      return "(none)";
    }
  },

  renderImage: function() {
    var user = this.props.user;
    if (user.image_url.length) {
      return <img className="profile-banner-image" src={user.image_url} />
    }
  },

  renderOptions: function() {
    var currentuser = this.props.currentuser;
    if (currentuser !== null && currentuser.id === this.props.user.id) {
      return (
        <div className="general-banner-options">
          <Clickable
            path={Routes.families.new}
            style={"general-button"}
            content={"Create a family"} />
          <Clickable
            path={Routes.pages.login}
            style={"general-button"}
            content={"Create an event"} />
        </div>
      );
    }
  },

  render: function() {
    return (
      <div className="general-banner-content">
        <h2 className="general-banner-title">
          {this.renderName()}
        </h2>
        <div className="profile-banner-family">
          <h5 className="profile-banner-subtitle">
            Family:
          </h5>
          <Clickable
            path={Routes.families.index + "/" + this.props.user.family.id}
            style={"profile-banner-subtitle"}
            content={this.props.user.family.name} />
        </div>
        {this.renderImage()}
        {this.renderOptions()}
      </div>
    );
  }
});
