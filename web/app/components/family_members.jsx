import React from "react";
import Component from "../templates/component.jsx";

import PeopleList from "./people_list.jsx";

import Person from "../models/person.js";


class FamilyMembers extends Component {

  getMembers() {
    return this.props.family.get("people").map(function(attributes) {
      return new Person(attributes);
    });
  }

  render() {
    return (
      <PeopleList
        session={this.props.session}
        people={this.getMembers()} />
    );
  }
}

FamilyMembers.propTypes = {
  family:  React.PropTypes.object.isRequired,
}

FamilyMembers.defaultProps = {
  family: null,
}


module.exports = FamilyMembers;
