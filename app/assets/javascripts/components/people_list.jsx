var PeopleList = React.createClass({

  propTypes: {
    people: React.PropTypes.array.isRequired,
  },

  defaultProps: {
    people: [],
  },

  renderPeople() {

  },

  render: function() {
    console.log(this.props.people);
    return (
      <div className="people-section">
        {this.renderPeople()}
      </div>
    );
  }
});
