var UsersList = React.createClass({

  propTypes: {
    users: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      users: [],
    };
  },

  getInitialState: function() {
    return {
      users: null,
    }
  },

  attemptSearch: function(event) {
    var query = React.findDOMNode(this.refs.query).value;
    var path = Routes.users.search + "?q=" + query;
    var request = Requester.send("get", path, {});
    var self = this;
    request.onload = function() {
      var results = JSON.parse(request.response);
      if (results.length === 0) {
        self.setState({users: null});
      } else {
        self.setState({users: results});
      }
    };
  },

  renderUser: function(user) {
    return (
      <User key={user.id} user={user} />
    );
  },

  renderUsers: function() {
    if (this.state.users !== null) {
      return this.state.users.map(this.renderUser);
    } else {
      return this.props.users.map(this.renderUser);
    }
  },

  render: function() {
    return (
      <div className="general-list">
        <input
          className="user-search-input"
          ref="query"
          type="text"
          placeholder="Search"
          onChange={this.attemptSearch}>
        </input>
        {this.renderUsers()}
      </div>
    );
  }
});
