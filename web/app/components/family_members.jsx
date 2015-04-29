import React from "react";
import Component from "../component.jsx";

import PeopleList from "./people_list.jsx";


class FamilyMembers extends Component {

  render() {
    return (
      <PeopleList users={this.props.family.users} />
    );
  }
}

FamilyMembers.propTypes = {
  family: React.PropTypes.object.isRequired,
}

FamilyMembers.defaultProps = {
  family: null,
}


module.exports = FamilyMembers;
