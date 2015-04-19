var Person = React.createClass({
  propTypes: {
    currentPerson: React.PropTypes.object.isRequired,
    person:        React.PropTypes.object.isRequired,
  },

  defaultProps:{
    currentPerson: null,
    person:        null,
  },

  renderName: function() {
    var person = this.props.person;
    return person.first_name + " " + person.last_name;
  },

  renderImage: function() {
    var person = this.props.person;
    if (person.image_url.length) {
      return <img className="person-banner-image" src={person.image_url} />
    }
  },

  renderOptions: function() {
    if (this.props.currentPerson.id === this.props.person.id) {
      return (
        <div className="person-banner-options">
          <Clickable
            style={"general-button"}
            path={Routes.pages.login}
            content={"Join a family"} />
          <Clickable
            style={"general-button"}
            path={Routes.pages.login}
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
