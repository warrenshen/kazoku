var PeopleList = React.createClass({

  propTypes: {
    people: React.PropTypes.array.isRequired,
  },

  defaultProps: {
    people: [],
  },

  renderPerson: function(person) {
    return (
      <Person key={person.id} person={person} />
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
