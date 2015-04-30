import React from "react";
import Component from "../templates/component.jsx";

import Header from "./header.jsx";
import FamilyProfile from "./family_profile.jsx";
import FamilyMembers from "./family_members.jsx";


class FamilyPage extends Component {

  renderMembers() {
    return (
      <section class="general-section">
        <div class="general-section-headings">
          <h3 class="general-section-title">
            Family Members
          </h3>
        </div>
        <FamilyMembers family={null} />
      </section>
    );
  }
  render() {
    return (
      <div className="general-page">
        <Header user={null} isColored={true} />
        <section className="general-banner">
          <FamilyProfile user={null} family={null} />
        </section>
        {this.renderMembers()}
      </div>
    );
  }
}

FamilyPage.propTypes = {
  id: React.PropTypes.number.isRequired,
}

FamilyPage.defaultProps = {
  id: null,
}


module.exports = FamilyPage;
