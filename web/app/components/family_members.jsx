import React from "react";
import Component from "../templates/component.jsx";

import PeopleList from "./people_list.jsx";


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
  family:  React.PropTypes.object.isRequired,
}

FamilyMembers.defaultProps = {
  family: null,
}


module.exports = FamilyMembers;
