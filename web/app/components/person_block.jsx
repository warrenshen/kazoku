import React from "react";
import Component from "app/templates/component";

import Clickable from "app/components/clickable";

import Person from "app/models/person";

import Routes from "app/constants/routes";


class PersonBlock extends Component {

  renderName() {
    var person = this.props.person;
    return person.get("first_name") + " " + person.get("last_name");
  }

  renderImage() {
    var person = this.props.person;
    var source = person.get("image_url");
    if (source) {
      return (
        <Clickable
          route={Routes.people.index + "/" + person.id}
          style={"person-block-image"}
          source={source} />
      );
    }
  }

  render() {
    return (
      <div className="general-block">
        {this.renderImage()}
        <Clickable
          route={Routes.people.index + "/" + this.props.person.get("id")}
          style={"general-block-name"}
          content={this.renderName()} />
      </div>
    );
  }
}

PersonBlock.propTypes = {
  person: React.PropTypes.object.isRequired,
}

PersonBlock.defaultProps = {
  person: new Person(),
}


module.exports = PersonBlock;
