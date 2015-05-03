import React from "react";
import Component from "app/templates/component.jsx";

import Clickable from "app/components/clickable.jsx";

import Routes from "app/constants/routes.js";

import Session from "app/models/session.js";


class FamilyProfile extends Component {

  renderOptions() {
    var session = this.props.session;
    var family = this.props.family;
    if (session.get("id") === family.get("id")) {
      return (
        <div className="general-banner-actions">
          <Clickable
            route={Routes.events.index}
            style={"general-button"}
            content={"Create a family event"} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="general-banner-content">
        <h2 className="general-banner-title">
          {this.props.family.get("name")}
        </h2>
        <h5 className="general-banner-title">
          {"Members: " + this.props.family.get("size")}
        </h5>
        <h5 className="general-banner-title">
          {"Events: " + this.props.family.get("events_count")}
        </h5>
        {this.renderOptions()}
      </div>
    );
  }
}

FamilyProfile.propTypes = {
  session: React.PropTypes.object.isRequired,
  family:  React.PropTypes.object.isRequired,
}

FamilyProfile.defaultProps = {
  session: new Session(),
  family:  null,
}


module.exports = FamilyProfile;
