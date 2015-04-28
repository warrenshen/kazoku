import React from "react";
import Component from "../component.jsx";

import Clickable from "./clickable.jsx";
import Header from "./header.jsx";

import Routes from "../constants/routes.js";


class LoginPage extends Component {

  attemptLogin(event) {
    // var email = React.findDOMNode(this.refs.email).value;
    // var password = React.findDOMNode(this.refs.password).value;
    // var request = Requester.send("post", Routes.users.login, {
    //   session: {
    //     email: email,
    //     password: password,
    //   }
    // });
    // request.onload = function() {
    //   var response = JSON.parse(request.response);
    //   if (response.id) {
    //     window.location = Routes.users.index + "/" + response.id;
    //   } else {
    //     console.log("api_error_response");
    //   }
    // };
  }

  renderBanner() {
    return (
      <section className="general-banner">
        <div className="general-banner-content">
          <h2 className="general-banner-title">
            Enter Kazoku
          </h2>
          <h5 className="general-banner-subtitle">
            Fun with family awaits.
          </h5>
        </div>
      </section>
    );
  }

  renderForm() {
    return (
      <section className="general-section">
        <form className="general-form">
          <h3 className="general-form-title">
            Login
          </h3>
          <input
            className="general-form-input"
            ref="email"
            type="text"
            autoFocus="true"
            placeholder="Email">
          </input>
          <input
            className="general-form-input"
            ref="password"
            type="password"
            placeholder="Password">
          </input>
          <Clickable
            action={this.attemptLogin.bind(this)}
            style={"general-form-submit"}
            content={"Log in"} />
          <div className="general-form-section">
            <span className="general-form-label">
              or,
            </span>
            <Clickable
              route={Routes.pages.signup}
              style={"general-form-toggle"}
              content={"sign up"} />
          </div>
        </form>
      </section>
    );
  }

  render() {
    return (
      <div className="general-page">
        <Header user={null} isColored={true} />
        {this.renderBanner()}
        {this.renderForm()}
      </div>
    );
  }
}


module.exports = LoginPage;
