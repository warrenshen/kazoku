import React from "react";
import Component from "../component.jsx";

import Header from "./header.jsx";
import PeopleList from "./people_list.jsx";

import PeopleCollection from "../collections/people_collection.js";

import PeopleStore from "../stores/people_store.js";


class PeoplePage extends Component {

  getAllPeople() {
    return {
      people: PeopleStore.getAll(),
    }
  }

  getDefaultState() {
    return this.getAllPeople();
  }

  componentDidMount() {
    PeopleStore.addChangeListener(this._onChange.bind(this));
    var pc = new PeopleCollection();
    pc.request(null);
  }

  componentWillUnmount() {
    PeopleStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(this.getAllPeople());
  }

  renderBanner() {
    console.log(this.state.people);
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
        <Header user={null} isColored={true} />
        {this.renderBanner()}
        <section className="general-section">
          <PeopleList people={[]} />
        </section>
      </div>
    );
  }
}


module.exports = PeoplePage;
