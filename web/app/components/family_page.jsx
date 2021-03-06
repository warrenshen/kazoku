import React from "react";
import ListeningComponent from "app/templates/listening_component";

import Header from "app/components/header";
import FamilyProfile from "app/components/family_profile";
import FamilyMembers from "app/components/family_members";

import FamiliesStore from "app/stores/families_store";
import SessionsStore from "app/stores/sessions_store";


class FamilyPage extends ListeningComponent {

  stores() {
    return [FamiliesStore, SessionsStore];
  }

  requestFromStore() {
    FamiliesStore.requestById(this.props.id);
    SessionsStore.requestCurrent();
  }

  getStoreState() {
    return {
      family: FamiliesStore.getById(this.props.id),
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
        <Header session={this.state.session} isColored={true} />
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
