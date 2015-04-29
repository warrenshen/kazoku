import React from "react";
import Component from "../component.jsx";

import Header from "./header.jsx";
import PersonProfile from "./person_profile.jsx";


class PersonPage extends Component {

  render() {
    return (
      <div className="general-page">
        <Header user={null} isColored={true} />
        <section className="general-banner">
          <PersonProfile user={null} person={null} />
        </section>
      </div>
    );
  }
}

PersonPage.propTypes = {
  id: React.PropTypes.number.isRequired,
}

PersonPage.defaultProps = {
  id: null,
}


module.exports = PersonPage;
