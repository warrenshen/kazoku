import React from "react";
import Component from "../component.jsx";

import Header from "./header.jsx";
import PeopleList from "./people_list.jsx";


class PeoplePage extends Component {

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
