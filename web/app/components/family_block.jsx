import React from "react";
import Component from "app/templates/component";

import Clickable from "app/components/clickable";

import Family from "app/models/family";
import Session from "app/models/session";

import PeopleActions from "app/actions/people_actions";

import Routes from "app/constants/routes";


class FamilyBlock extends Component {

  attemptJoin(event) {
    // var path = Routes.people.index + "/" + this.props.currentUser.id;
    // var request = Requester.send("put", path, {
    //   user: {
    //     id: this.props.currentUser.id,
    //     family_id: this.props.family.id,
    //   }
    // });
  }

  attemptLeave(event) {
    PeopleActions.leave({
      id: this.props.session.get("person").get("id"),
      family_id: null,
    })
  }

  renderJoinButton(person) {
    if (person.get("family_id") !== this.props.family.id) {
      return (
        <Clickable
          action={this.attemptJoin.bind(this)}
          style={"general-button"}
          content={"Join family"} />
      );
    }
  }

  renderLeaveButton(person) {
    if (person.get("family_id") === this.props.family.id) {
      return (
        <Clickable
          action={this.attemptLeave.bind(this)}
          style={"general-button"}
          content={"Leave family"} />
      );
    }
  }

  renderActions() {
    var session = this.props.session;
    if (session.has("id")) {
      var person = session.get("person");
      return (
        <div className="general-block-options">
          {this.renderJoinButton(person)}
          {this.renderLeaveButton(person)}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="general-block">
        <Clickable
          route={Routes.families.index + "/" + this.props.family.get("id")}
          style={"general-block-name"}
          content={this.props.family.get("name")} />
        <h5 className="family-block-size">
          {"Member count: " + this.props.family.get("size")}
        </h5>
        {this.renderActions()}
      </div>
    );
  }
}

FamilyBlock.propTypes = {
  session: React.PropTypes.object.isRequired,
  family:  React.PropTypes.object.isRequired,
}

FamilyBlock.defaultProps = {
  session: new Session(),
  family:  new Family(),
}


module.exports = FamilyBlock;
