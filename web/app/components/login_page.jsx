import React from "react";
import ListeningComponent from "app/templates/listening_component.jsx";

import Clickable from "app/components/clickable.jsx";
import Header from "app/components/header.jsx";

import Routes from "app/constants/routes.js";

import SessionsStore from "app/stores/sessions_store.js";


class LoginPage extends ListeningComponent {

  stores() {
    return [SessionsStore];
  }

  requestFromStore() {
    SessionsStore.requestCurrent();
  }

  getStoreState() {
    return {
      session: SessionsStore.getCurrent(),
    }
  }

  attemptLogin(event) {
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    SessionsStore.login({
      email: email,
      password: password,
    });
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
            placeholder="Email"
            value="warrensterling@berkeley.edu">
          </input>
          <input
            className="general-form-input"
            ref="password"
            type="password"
            placeholder="Password"
            value="password">
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
        <Header session={this.state.session} isColored={true} />
        {this.renderBanner()}
        {this.renderForm()}
      </div>
    );
  }
}


module.exports = LoginPage;
