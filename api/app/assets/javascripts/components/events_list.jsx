var EventsList = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired,
    events: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentUser: null,
      events:      [],
    };
  },

  renderEvent: function(event) {
    return (
      <Event
        key={event.id}
        currentUser={this.props.currentUser}
        event={event} />
    );
  },

  renderEvents: function() {
    return this.props.events.map(this.renderEvent);
  },

  render: function() {
    return (
      <div className="general-list">
        {this.renderEvents()}
      </div>
    );
  }
});
