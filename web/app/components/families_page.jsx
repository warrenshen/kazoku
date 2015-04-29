import React from "react";
import Component from "../component.jsx";

import Header from "./header.jsx";
import FamiliesList from "./families_list.jsx";


class FamiliesPage extends Component {

  renderBanner() {
    return (
      <section class="general-banner">
        <div class="general-banner-content">
          <h2 class="general-banner-title">
            Families on Kazoku
          </h2>
          <h5 class="general-banner-subtitle">
            Do you belong to one of these?
          </h5>
        </div>
      </section>
    );
  }

  render() {
    <div className="general-page">
      <Header user={null} isColored={true} />
      {this.renderBanner()}
      <section className="general-section">
        <FamiliesList families={[]} />
      </section>
    </div>
  }
}


module.exports = FamiliesPage;
