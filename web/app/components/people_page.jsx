import React from "react";
import ListeningComponent from "../listening_component.jsx";

import Header from "./header.jsx";
import PeopleList from "./people_list.jsx";

import PeopleCollection from "../collections/people_collection.js";

import PeopleStore from "../stores/people_store.js";
import SessionStore from "../stores/session_store.js";


class PeoplePage extends ListeningComponent {

  stores() {
    return [PeopleStore, SessionStore];
  }

  requestFromStore() {
    PeopleStore.requestPeople();
  }

  getStoreState() {
    return {
      people: PeopleStore.getPeople(),
      session: SessionStore.getSession(),
    }
  }

  renderBanner() {
    return (
      <section className="general-banner">
        <div className="general-banner-content">
          <h2 className="general-banner-title">
            People on Kazoku
          </h2>
          <h5 className="general-banner-subtitle">
            You could be here too!
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
          <PeopleList people={this.state.people} />
        </section>
      </div>
    );
  }
}


module.exports = PeoplePage;
