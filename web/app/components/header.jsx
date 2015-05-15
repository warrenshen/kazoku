import React from "react";
import Classer from "classnames";
import Component from "app/templates/component";

import Clickable from "app/components/clickable";

import Routes from "app/constants/routes";

import Session from "app/models/session";

import SessionsStore from "app/stores/sessions_store";


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
    if (session.has("id")) {
      var person = this.props.session.get("person");
      return (
        <Clickable
          route={Routes.people.index + "/" + person.get("id")}
          style={"general-button"}
          content={"Your Profile"} />
      );
    } else {
      return (
        <Clickable
          route={Routes.pages.login}
          style={"general-button"}
          content={"Login/Signup"} />
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
