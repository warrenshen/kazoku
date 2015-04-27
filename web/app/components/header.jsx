import React from "react";
import Component from "../component.jsx";

import Clickable from "./clickable.jsx";


class Header extends Component {

  attemptLogout(event) {
    var email = this.props.currentUser.email;
    var request = Requester.send("delete", ApiRoutes.users.logout, {
      id: this.props.currentUser.id,
    });
    request.onload = function() {
      var response = JSON.parse(request.response);
      console.log(response)
      if (response.id) {
        window.location = ApiRoutes.pages.home;
      } else {
        console.log("api_error_response");
      }
    };
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
          path={ApiRoutes.pages.login}
          style={"general-button"}
          content={"Login/Signup"} />
      );
    } else {
      return (
        <Clickable
          path={ApiRoutes.users.index + "/" + this.props.currentUser.id}
          style={"general-button"}
          content={"Your Profile"} />
      );
    }
  }

  // {this.renderLogout()}
  // {this.renderProfile()}
  render() {
    // var merge = React.addons.classSet;
    // var headerClass = merge({
    //   "header": true,
    //   "header-colored": this.props.isColored,
    // });
    // var brandClass = merge({
    //   "header-brand": true,
    //   "header-brand-colored": this.props.isColored,
    // });
    var headerClass = "header";
    var brandClass = "header-brand";
    return (
      <div className={headerClass}>
        <div className="header-left">
          <div className="vertical-anchor"></div>
          <Clickable
            path={ApiRoutes.pages.home}
            style={brandClass}
              content={"Kazoku"} />
        </div>
        <div className="header-right">
          <div className="vertical-anchor"></div>


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
