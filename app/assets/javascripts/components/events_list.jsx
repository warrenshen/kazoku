var EventsList = React.createClass({

  propTypes: {
    events: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      events: [],
    };
  },

  renderEvent: function(event) {
    return (
      <Event key={event.id} event={event} />
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
