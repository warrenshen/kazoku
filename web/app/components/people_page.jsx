import React from "react";
import ListeningComponent from "app/templates/listening_component";

import Header from "app/components/header";
import PeopleList from "app/components/people_list";

import PeopleStore from "app/stores/people_store";
import SessionsStore from "app/stores/sessions_store";


class PeoplePage extends ListeningComponent {

  stores() {
    return [PeopleStore, SessionsStore];
  }

  requestFromStore() {
    PeopleStore.requestPeople();
    SessionsStore.requestCurrent();
  }

  getStoreState() {
    return {
      people: PeopleStore.getPeople(),
      session: SessionsStore.getCurrent(),
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
