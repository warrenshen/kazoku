var Event = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object,
    event:       React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentUser: null,
      event:       null,
    };
  },

  attemptCreate: function(event) {
    var path = Routes.family_events.index;
    var request = Requester.send("post", path, {
      family_event: {
        family_id: this.props.currentUser.family_id,
        event_id: this.props.event.id,
      }
    });
    request.onload = function() {
      console.log("Created family event");
    }
  },

  renderImage: function() {
    var event = this.props.event;
    if (event.image_url.length) {
      return (
        <Clickable
          path={Routes.users.index + "/" + this.props.event.id}
          style={"event-block-image"}
          source={event.image_url} />
      );
    }
  },

  renderDate: function() {
    var date = new Date(this.props.event.date);
    return (
      <h5>
        {Dater.monthWithDate(date)}
      </h5>
    );
  },

  renderCreateButton: function() {
    return (
      <Clickable
        action={this.attemptCreate}
        style={"general-button"}
        content={"Create family event"} />
    );
  },

  renderActions: function() {
    var currentUser = this.props.currentUser;
    if (currentUser !== null && currentUser.family_id !== null) {
      return (
        <div className = "event-block-options">
          {this.renderCreateButton()}
        </div>
      )
    }
  },

  render: function() {
    return (
      <div className="event-block">
        {this.renderImage()}
        <Clickable
          path={Routes.events.index + "/" + this.props.event.id}
          style={"event-block-name"}
          content={this.props.event.name} />
        {this.renderDate()}
        {this.renderActions()}
      </div>
    );
  }
});
