import React from "react";
import Component from "../component.jsx";

import Header from "./header.jsx";


class PersonPage extends Component {

  getDefaultState() {
    return {
      person: null,
    };
  }

  componentDidMount() {
    var person = new Kazoku.Models.User({id: this.props.id});
    person.request({});
  }

  render() {
    return (
      <div className="general-page">
        <Header user={null} isColored={true} />
        <section className="general-banner">
          <UserProfile currentUser={null} user={null} />
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
