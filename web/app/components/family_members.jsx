import React from "react";
import Component from "app/templates/component";

import PeopleList from "app/components/people_list";

import Person from "app/models/person";


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
