import React from "react";
import ListeningComponent from "../listening_component.jsx";

import Header from "./header.jsx";
import FamiliesList from "./families_list.jsx";

import FamiliesStore from "../stores/families_store.js";
import SessionStore from "../stores/session_store.js";


class FamiliesPage extends ListeningComponent {

  stores() {
    return [FamiliesStore, SessionStore];
  }

  requestFromStore() {
    FamiliesStore.requestFamilies();
  }

  getStoreState() {
    return {
      families: FamiliesStore.getFamilies(),
      session: SessionStore.getSession(),
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
