import React from "react";
import Component from "app/templates/component";

import Clickable from "app/components/clickable";

import Routes from "app/constants/routes";

import Session from "app/models/session";


class FamilyProfile extends Component {

  renderOptions() {
    var session = this.props.session;
    var family = this.props.family;
    if (session.has("id") && session.get("person").get("family_id") === family.get("id")) {
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
  // session:  new Session(),
  session:  null,
  family:  null,
}


module.exports = FamilyProfile;
