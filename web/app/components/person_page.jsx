import React from "react";
import ListeningComponent from "app/templates/listening_component.jsx";

import Header from "app/components/header.jsx";
import PersonProfile from "app/components/person_profile.jsx";

import PeopleStore from "app/stores/people_store.js";
import SessionsStore from "app/stores/sessions_store.js";


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
