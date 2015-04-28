import React from "react";
import Component from "../component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class Person extends Component {

  renderName() {
    var person = this.props.person;
    return person.first_name + " " + person.last_name;
  }

  renderImage() {
    var person = this.props.person;
    if (person.image_url.length) {
      return (
        <Clickable
          route={Routes.people.index + "/" + person.id}
          style={"user-block-image"}
          source={person.image_url} />
      );
    }
  }

  render() {
    return (
      <div className="user-block">
        {this.renderImage()}
        <Clickable
          route={Routes.people.index + "/" + this.props.person.id}
          style={"user-block-name"}
          content={this.renderName()} />
      </div>
    );
  }
}

Person.propTypes = {
  person: React.PropTypes.object.isRequired,
}

Person.defaultProps = {
  person: null,
}


module.exports = Person;
