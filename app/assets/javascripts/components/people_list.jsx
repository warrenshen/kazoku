var PeopleList = React.createClass({

  propTypes: {
    people: React.PropTypes.array.isRequired,
  },

  defaultProps: {
    people: [],
  },

  renderPerson: function(person) {
    return (
      <div className="person-section">
        {person.first_name}
      </div>
    );
  },

  renderPeople: function() {
    return this.props.people.map(this.renderPerson);
  },

  render: function() {
    return (
      <div className="people-list">
        {this.renderPeople()}
      </div>
    );
  }
});
