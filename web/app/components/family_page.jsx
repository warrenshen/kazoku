import React from "react";
import ListeningComponent from "../templates/listening_component.jsx";

import Header from "./header.jsx";
import FamilyProfile from "./family_profile.jsx";
import FamilyMembers from "./family_members.jsx";

import FamiliesStore from "../stores/families_store.js";
import SessionsStore from "../stores/sessions_store.js";


class FamilyPage extends ListeningComponent {

  stores() {
    return [FamiliesStore, SessionsStore];
  }

  getStoreState() {
    return {
      family: FamiliesStore.getFamily(this.props.id),
      session: SessionsStore.getCurrent(),
    }
  }

  renderMembers() {
    return (
      <section className="general-section">
        <div className="general-section-headings">
          <h3 className="general-section-title">
            Family Members
          </h3>
        </div>
        <FamilyMembers family={this.state.family} />
      </section>
    );
  }
  render() {
    return (
      <div className="general-page">
        <Header session={this.props.session} isColored={true} />
        <section className="general-banner">
          <FamilyProfile
            session={this.state.session}
            family={this.state.family} />
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
