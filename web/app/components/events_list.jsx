import React from "react";
import Component from "app/templates/component.jsx";

import Event from "app/components/event.jsx";


class EventsList extends Component {

  renderEvent(event) {
    return (
      <Event
        key={event.id}
        user={this.props.user}
        event={event} />
    );
  }

  renderEvents() {
    return this.props.events.map(this.renderEvent, this);
  }

  render() {
    return (
      <div className="general-list">
        {this.renderEvents()}
      </div>
    );
  }
}

EventsList.propTypes: {
  user:   React.PropTypes.object.isRequired,
  events: React.PropTypes.array.isRequired,
},

EventsList.defaultProps = {
  user:   null,
  events: [],
}


module.exports = EventsList;
