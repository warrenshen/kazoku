var FamilyProfile = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object,
    family:        React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentPerson: null,
      family:        null,
    };
  },

  renderOptions: function() {
    var currentPerson = this.props.currentPerson;
    if (currentPerson !== null && currentPerson.family_id === this.props.family.id) {
      return (
        <div className="general-banner-options">
          <Clickable
            path={Routes.families.new}
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
          {this.props.family.name}
        </h2>
        <h5 className="general-banner-title">
          Member count: {this.props.family.size}
        </h5>
        {this.renderOptions()}
      </div>
    );
  }
});
