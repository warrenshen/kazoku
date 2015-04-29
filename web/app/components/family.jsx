import React from "react";
import Component from "../component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class Family extends Component {

  attemptJoin(event) {
    var path = Routes.people.index + "/" + this.props.currentUser.id;
    var request = Requester.send("put", path, {
      user: {
        id: this.props.currentUser.id,
        family_id: this.props.family.id,
      }
    });
  }

  attemptLeave(event) {
    var path = Routes.people.index + "/" + this.props.currentUser.id;
    var request = Requester.send("put", path, {
      user: {
        id: this.props.currentUser.id,
        family_id: null,
      }
    });
  }

  renderJoinButton() {
    if (this.props.user.family_id !== this.props.family.id) {
      return (
        <Clickable
          action={this.attemptJoin.bind(this)}
          style={"general-button"}
          content={"Join family"} />
      );
    }
  }

  renderLeaveButton() {
    if (this.props.user.family_id === this.props.family.id) {
      return (
        <Clickable
          action={this.attemptLeave.bind(this)}
          style={"general-button"}
          content={"Leave family"} />
      );
    }
  }

  renderActions() {
    if (this.props.user !== null) {
      return (
        <div className="general-block-options">
          {this.renderJoinButton()}
          {this.renderLeaveButton()}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="general-block">
        <Clickable
          route={Routes.families.index + "/" + this.props.family.id}
          style={"general-block-name"}
          content={this.props.family.name} />
        <h5 className="family-block-size">
          {"Member count: " + this.props.family.size}
        </h5>
        {this.renderActions()}
      </div>
    );
  }
}

Family.propTypes = {
  user:   React.PropTypes.object.isRequired,
  family: React.PropTypes.object.isRequired,
}

Family.defaultProps = {
  user:   null,
  family: null,
}


module.exports = Family;
