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
      <UsersList users={this.props.family.users} />
    );
  }
});
