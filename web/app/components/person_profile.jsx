import React from "react";
import Component from "../templates/component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class PersonProfile extends Component {

  renderName() {
    var person = this.props.person;
    return person.get("first_name") + " " + person.get("last_name");
  }

  renderFamilyName() {
    // if (this.props.person.get("")) {
    //   return (
    //     <Clickable
    //       route={Routes.families.index + "/" + this.props.person.family_id}
    //       style={"profile-banner-subtitle"}
    //       content={this.props.person.family_name} />
    //   );
    // } else {
    //   return (
    //     <h5 className="profile-banner-label">
    //       &nbsp;(none)
    //     </h5>
    //   );
    // }
  }

  renderImage() {
    var person = this.props.person;
    var source = person.get("image_url");
    if (source) {
      return <img className="profile-banner-image" src={source} />
    }
  }

  renderFamilyButton() {
    if (this.props.person.family_id === null) {
      return (
        <Clickable
          route={Routes.families.new}
          style={"general-button"}
          content={"Create a family"} />
      );
    }
  }

  renderActions() {
    var user = this.props.user;
    if (user !== null && user.id === this.props.person.get("id")) {
      return (
        <div className="general-banner-actions">
          {this.renderFamilyButton()}
          <Clickable
            route={Routes.pages.login}
            style={"general-button"}
            content={"Create an event"} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="general-banner-content">
        {this.renderImage()}
        <h2 className="general-banner-title">
          {this.renderName()}
        </h2>
        <div className="profile-banner-family">
          <h5 className="profile-banner-label">
            Family:
          </h5>
          {this.renderFamilyName()}
        </div>
        {this.renderActions()}
      </div>
    );
  }
}

PersonProfile.propTypes = {
  user:   React.PropTypes.object.isRequired,
  person: React.PropTypes.object.isRequired,
}

PersonProfile.defaultProps = {
  user:   null,
  person: null,
}


module.exports = PersonProfile;
