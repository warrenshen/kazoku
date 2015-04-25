var UsersList = React.createClass({

  propTypes: {
    users: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      users: [],
    };
  },

  attemptSearch: function(event) {
    var query = React.findDOMNode(this.refs.query).value;
    var request = Requester.send("get", Routes.users.search, {
      q: query
    });
    request.onload = function() {
      console.log(request);
    }
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
        <input
          className="user-search-input"
          ref="query"
          type="text"
          placeholder="search"
          onChange={this.attemptSearch}>
        </input>
        {this.renderUsers()}
      </div>
    );
  }
});
