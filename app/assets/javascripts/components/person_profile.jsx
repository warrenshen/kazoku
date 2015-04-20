var PersonProfile = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object,
    person:        React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentPerson: null,
      person:        null,
    };
  },

  renderName: function() {
    var person = this.props.person;
    return person.first_name + " " + person.last_name;
  },

  renderFamily: function() {
    if (this.props.person.family_name) {
      return this.props.person.family_name;
    } else {
      return "(none)";
    }
  },

  renderImage: function() {
    var person = this.props.person;
    if (person.image_url.length) {
      return <img className="profile-banner-image" src={person.image_url} />
    }
  },

  renderOptions: function() {
    var currentPerson = this.props.currentPerson;
    if (currentPerson !== null && currentPerson.id === this.props.person.id) {
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
        <h5 className="general-banner-title">
          Family: {this.renderFamily()}
        </h5>
        {this.renderImage()}
        {this.renderOptions()}
      </div>
    );
  }
});
