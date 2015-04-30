import React from "react";
import Component from "../templates/component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class FamilyProfile extends Component {

  renderOptions() {
    var user = this.props.user;
    var family = this.props.family;
    if (user !== null && user.family_id === family.id) {
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
          {this.props.family.name}
        </h2>
        <h5 className="general-banner-title">
          {"Members: " + this.props.family.size}
        </h5>
        <h5 className="general-banner-title">
          {"Events: " + this.props.family.events_count}
        </h5>
        {this.renderOptions()}
      </div>
    );
  }
}

FamilyProfile.propTypes = {
  user:   React.PropTypes.object.isRequired,
  family: React.PropTypes.object.isRequired,
}

FamilyProfile.defaultProps = {
  user:   null,
  family: null,
}


module.exports = FamilyProfile;
