var FamilyProfile = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object,
    family:      React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentUser: null,
      family:      null,
    };
  },

  renderOptions: function() {
    var currentUser = this.props.currentUser;
    var family = this.props.family;
    if (currentUser !== null && currentUser.family_id === family.id) {
      return (
        <div className="general-banner-actions">
          <Clickable
            path={Routes.events.index}
            style={"general-button"}
            content={"Create a family event"} />
        </div>
      );
    }
  },

  render: function() {
    return (
      <div className="general-banner-content">
        <h2 className="general-banner-title">
          {this.props.family.name}
        </h2>
        <h5 className="general-banner-title">
          {"Member count: " + this.props.family.size}
        </h5>
        {this.renderOptions()}
      </div>
    );
  }
});
