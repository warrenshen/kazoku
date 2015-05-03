import React from "react";
import Component from "app/templates/component.jsx";

import Family from "app/components/family.jsx";

import Session from "app/models/session.js";


class FamiliesList extends Component {

  renderFamily(family) {
    return (
      <Family
        key={family.id}
        session={this.props.session}
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
  session:  React.PropTypes.object.isRequired,
  families: React.PropTypes.array.isRequired,
}

FamiliesList.defaultProps = {
  session:  new Session(),
  families: [],
}


module.exports = FamiliesList;
