import React from "react";
import Classer from "classnames";
import Component from "../component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class Header extends Component {

  // send: function(type, path, arguments) {
  //   var request = new XMLHttpRequest();
  //   request.open(type, path);
  //   request.setRequestHeader("Content-Type", "application/json");
  //   request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
  //   request.send(JSON.stringify(arguments));
  //   return request;
  // }

  attemptLogout(event) {
    // var email = this.props.currentUser.email;
    // var request = Requester.send("delete", ApiRoutes.users.logout, {
    //   id: this.props.currentUser.id,
    // });
    // request.onload = function() {
    //   var response = JSON.parse(request.response);
    //   console.log(response)
    //   if (response.id) {
    //     window.location = ApiRoutes.pages.home;
    //   } else {
    //     console.log("api_error_response");
    //   }
    // };
  }

  renderLogout() {
    if (this.props.currentUser !== null) {
      return (
        <Clickable
          action={this.attemptLogout}
          style={"general-button"}
          content={"Logout"} />
      );
    }
  }

  renderProfile() {
    if (this.props.currentUser === null) {
      return (
        <Clickable
          route={Routes.pages.login}
          style={"general-button"}
          content={"Login/Signup"} />
      );
    } else {
      return (
        <Clickable
          route={Routes.people.index + "/" + this.props.currentUser.id}
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
  currentUser: React.PropTypes.object.isRequired,
  isColored:   React.PropTypes.bool.isRequired,
}

Header.defaultProps = {
  currentUser: null,
  isColored:   true,
}


module.exports = Header;
