import React from "react";
import Component from "app/templates/component";

import PeopleList from "app/components/people_list";

import Family from "app/models/family";
import Person from "app/models/person";


class FamilyMembers extends Component {

  render() {
    return (
      <PeopleList
        session={this.props.session}
        people={this.props.family.get("people")} />
    );
  }
}

FamilyMembers.propTypes = {
  family: React.PropTypes.object.isRequired,
}

FamilyMembers.defaultProps = {
  family: new Family(),
}


module.exports = FamilyMembers;
