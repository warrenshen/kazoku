import React from "react";
import Component from "app/templates/component";

import EventBlock from "app/components/event_block";


class EventsList extends Component {

  renderEvent(event) {
    return (
      <EventBlock
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
