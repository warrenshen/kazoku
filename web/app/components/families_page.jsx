import React from "react";
import ListeningComponent from "app/templates/listening_component";

import Header from "app/components/header";
import FamiliesList from "app/components/families_list";

import FamiliesStore from "app/stores/families_store";
import SessionsStore from "app/stores/sessions_store";


class FamiliesPage extends ListeningComponent {

  stores() {
    return [FamiliesStore, SessionsStore];
  }

  requestFromStore() {
    FamiliesStore.requestFamilies();
    SessionsStore.requestCurrent();
  }

  getStoreState() {
    return {
      families: FamiliesStore.getFamilies(),
      session: SessionsStore.getCurrent(),
    }
  }

  renderBanner() {
    return (
      <section className="general-banner">
        <div className="general-banner-content">
          <h2 className="general-banner-title">
            Families on Kazoku
          </h2>
          <h5 className="general-banner-subtitle">
            Do you belong to one of these?
          </h5>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className="general-page">
        <Header session={this.state.session} isColored={true} />
        {this.renderBanner()}
        <section className="general-section">
          <FamiliesList
            session={this.state.session}
            families={this.state.families} />
        </section>
      </div>
    );
  }
}


module.exports = FamiliesPage;
