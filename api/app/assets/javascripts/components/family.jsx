var Family = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object,
    family:      React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentUser: null,
      family:      null,
    };
  },

  attemptJoin: function(event) {
    var path = Routes.users.index + "/" + this.props.currentUser.id;
    var request = Requester.send("put", path, {
      user: {
        id: this.props.currentUser.id,
        family_id: this.props.family.id,
      }
    });
  },

  attemptLeave: function(event) {
    var path = Routes.users.index + "/" + this.props.currentUser.id;
    var request = Requester.send("put", path, {
      user: {
        id: this.props.currentUser.id,
        family_id: null,
      }
    });
  },

  renderJoinButton: function() {
    if (this.props.currentUser.family_id !== this.props.family.id) {
      return (
        <Clickable
          action={this.attemptJoin}
          style={"general-button"}
          content={"Join family"} />
      );
    }
  },

  renderLeaveButton: function() {
    if (this.props.currentUser.family_id === this.props.family.id) {
      return (
        <Clickable
          action={this.attemptLeave}
          style={"general-button"}
          content={"Leave family"} />
      );
    }
  },

  renderActions: function() {
    if (this.props.currentUser !== null) {
      return (
        <div className="family-block-options">
          {this.renderJoinButton()}
          {this.renderLeaveButton()}
        </div>
      );
    }
  },

  render: function() {
    return (
      <div className="family-block">
        <Clickable
          path={Routes.families.index + "/" + this.props.family.id}
          style={"family-block-name"}
          content={this.props.family.name} />
        <h5 className="family-block-size">
          {"Member count: " + this.props.family.size}
        </h5>
        {this.renderActions()}
      </div>
    );
  }
});
