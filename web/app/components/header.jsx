import React from "react";
import Classer from "classnames";
import Component from "../templates/component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";

import Session from "../models/session.js";

import SessionsStore from "../stores/sessions_store.js";


class Header extends Component {

  attemptLogout(event) {
    SessionsStore.logout();
  }

  renderLogout() {
    var session = this.props.session;
    if (session.has("id")) {
      return (
        <Clickable
          action={this.attemptLogout.bind(this)}
          style={"general-button"}
          content={"Logout"} />
      );
    }
  }

  renderProfile() {
    var session = this.props.session;
    if (!session.has("id")) {
      return (
        <Clickable
          route={Routes.pages.login}
          style={"general-button"}
          content={"Login/Signup"} />
      );
    } else {
      return (
        <Clickable
          route={Routes.people.index + "/" + this.props.session.get("id")}
          style={"general-button"}
          content={"Your Profile"} />
      );
    }
  }

  render() {
    var headerClass = Classer(
      {"header": true},
      {"header-colored": this.props.isColored}
    );
    var brandClass = Classer(
      {"header-brand": true},
      {"header-brand-colored": this.props.isColored}
    );
    return (
      <div className={headerClass}>
        <div className="header-left">
          <div className="vertical-anchor"></div>
          <Clickable
            route={Routes.pages.home}
            style={brandClass}
              content={"Kazoku"} />
        </div>
        <div className="header-right">
          <div className="vertical-anchor"></div>
            {this.renderLogout()}
            {this.renderProfile()}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  session:   React.PropTypes.object.isRequired,
  isColored: React.PropTypes.bool.isRequired,
}

Header.defaultProps = {
  session:   new Session(),
  isColored: true,
}


module.exports = Header;
