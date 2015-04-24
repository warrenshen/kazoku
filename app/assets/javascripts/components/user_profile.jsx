var UserProfile = React.createClass({

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

  renderFamilyName: function() {
    if (this.props.user.family) {
      return (
        <Clickable
          path={Routes.families.index + "/" + this.props.user.family.id}
          style={"profile-banner-subtitle"}
          content={this.props.user.family.name} />
      );
    } else {
      return (
        <h5 className="profile-banner-label">
          &nbsp;(none)
        </h5>
      );
    }
  },

  renderImage: function() {
    var user = this.props.user;
    if (user.image_url.length) {
      return <img className="profile-banner-image" src={user.image_url} />
    }
  },

  renderFamilyButton: function() {
    if (this.props.user.family_id === null) {
      return (
        <Clickable
          path={Routes.families.new}
          style={"general-button"}
          content={"Create a family"} />
      );
    }
  },

  renderActions: function() {
    var currentUser = this.props.currentUser;
    if (currentUser !== null && currentUser.id === this.props.user.id) {
      return (
        <div className="general-banner-actions">
          {this.renderFamilyButton()}
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
        {this.renderImage()}
        <h2 className="general-banner-title">
          {this.renderName()}
        </h2>
        <div className="profile-banner-family">
          <h5 className="profile-banner-label">
            Family:
          </h5>
          {this.renderFamilyName()}
        </div>
        {this.renderActions()}
      </div>
    );
  }
});
