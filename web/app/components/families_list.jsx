import React from "react";
import Component from "../component.jsx";

import Family from "./family.jsx";


class FamiliesList extends Component {

  renderFamily(family) {
    return (
      <Family
        key={family.id}
        currentUser={this.props.user}
        family={family} />
    );
  }

  renderFamilies() {
    return this.props.families.map(this.renderFamily, this);
  }

  render() {
    return (
      <div className="general-list">
        {this.renderFamilies()}
      </div>
    );
  }
}

FamiliesList.propTypes = {
  uesr:     React.PropTypes.object.isRequired,
  families: React.PropTypes.array.isRequired,
}

FamiliesList.defaultProps = {
  return {
    user:     null,
    families: [],
  };
}


module.exports = FamiliesList;
