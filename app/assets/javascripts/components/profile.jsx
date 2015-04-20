var Profile = React.createClass({
  propTypes: {
    currentPerson: React.PropTypes.object.isRequired,
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

  renderImage: function() {
    var person = this.props.person;
    if (person.image_url.length) {
      return <img className="profile-banner-image" src={person.image_url} />
    }
  },

  renderOptions: function() {
    if (this.props.currentPerson.id === this.props.person.id) {
      return (
        <div className="profile-banner-options">
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
        {this.renderImage()}
        {this.renderOptions()}
      </div>
    );
  }
});
