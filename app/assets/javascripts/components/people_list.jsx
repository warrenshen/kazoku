var PeopleList = React.createClass({

  propTypes: {
    people: React.PropTypes.array.isRequired,
  },

  defaultProps: {
    people: [],
  },

  renderPerson: function(person) {
    return (
      <div className="person-block" key={person.id}>
        <h3 className="person-block-name">
          {person.first_name + " " + person.last_name}
        </h3>
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
