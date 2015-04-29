import React from "react";
import Component from "../component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class Event extends Component {

  attemptCreate() {
    var path = Routes.familyEvents.index;
    var request = Requester.send("post", path, {
      family_event: {
        family_id: this.props.currentUser.family_id,
        event_id: this.props.event.id,
      }
    });
    request.onload = function() {
      console.log("Created family event");
    };
  }

  renderImage() {
    var event = this.props.event;
    if (event.image_url.length) {
      return (
        <Clickable
          route={Routes.people.index + "/" + this.props.event.id}
          style={"event-block-image"}
          source={event.image_url} />
      );
    }
  }

  renderData() {
    var event = this.props.event;
    var date = new Date(event.date);
    var content = ", " + event.families_count + " attending"
    return (
      <h5>
        {Dater.monthWithDate(date) + content}
      </h5>
    );
  },

  renderCreateButton() {
    return (
      <Clickable
        action={this.attemptCreate}
        style={"general-button"}
        content={"Create family event"} />
    );
  },

  renderActions() {
    var currentUser = this.props.currentUser;
    if (currentUser !== null && currentUser.family_id !== null) {
      return (
        <div className = "general-block-options">
          {this.renderCreateButton()}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="general-block">
        {this.renderImage()}
        <Clickable
          route={Routes.events.index + "/" + this.props.event.id}
          style={"general-block-name"}
          content={this.props.event.name} />
        {this.renderData()}
        {this.renderActions()}
      </div>
    );
  }
}


Event.propTypes = {
  user:  React.PropTypes.object.isRequired,
  event: React.PropTypes.object.isRequired,
}

Event.defaultProps = {
  user:  null,
  event: null,
}


module.exports = Event;
