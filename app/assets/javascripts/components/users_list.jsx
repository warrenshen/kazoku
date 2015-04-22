var UsersList = React.createClass({

  propTypes: {
    users: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      users: [],
    };
  },

  renderUser: function(user) {
    return (
      <User key={user.id} user={user} />
    );
  },

  renderUsers: function() {
    return this.props.users.map(this.renderUser);
  },

  render: function() {
    return (
      <div className="general-list">
        {this.renderUsers()}
      </div>
    );
  }
});
