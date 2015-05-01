import React from "react";
import ListeningComponent from "../templates/listening_component.jsx";

import Header from "./header.jsx";
import PersonProfile from "./person_profile.jsx";

import PeopleStore from "../stores/people_store.js";


class PersonPage extends ListeningComponent {

  stores() {
    return [PeopleStore];
  }

  getDefaultState() {
    return this.getStoreState();
  }

  getStoreState() {
    return {
      person: PeopleStore.getById(this.props.id),
    }
  }

  componentDidMount() {
    PeopleStore.addChangeListener(this._onChange.bind(this));
    PeopleStore.requestPerson(this.props.id);
  }

  componentWillUnmount() {
    PeopleStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(this.getStoreState());
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
