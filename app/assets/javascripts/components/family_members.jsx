var FamilyMembers = React.createClass({

  propTypes: {
    family: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      family: null,
    };
  },

  render: function() {
    return (
      <PeopleList people={this.props.family.people} />
    );
  }
});
