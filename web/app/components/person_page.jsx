import React from "react";
import ListeningComponent from "../templates/listening_component.jsx";

import Header from "./header.jsx";
import PersonProfile from "./person_profile.jsx";

import PeopleStore from "../stores/people_store.js";
import SessionsStore from "../stores/sessions_store.js";


class PersonPage extends ListeningComponent {

  stores() {
    return [PeopleStore, SessionsStore];
  }

  requestFromStore() {
    SessionsStore.requestCurrent();
  }

  getStoreState() {
    return {
      person: PeopleStore.getById(this.props.id),
      session: SessionsStore.getCurrent(),
    }
  }

  render() {
    return (
      <div className="general-page">
        <Header session={this.state.session} isColored={true} />
        <section className="general-banner">
          <PersonProfile
            session={this.state.session}
            person={this.state.person} />
        </section>
      </div>
    );
  }
}

PersonPage.propTypes = {
  id: React.PropTypes.number.isRequired,
}

PersonPage.defaultProps = {
  id: 1,
}


module.exports = PersonPage;
