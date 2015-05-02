import React from "react";
import ListeningComponent from "../templates/listening_component.jsx";

import Clickable from "./clickable.jsx";
import Header from "./header.jsx";

import Routes from "../constants/routes.js";


class SignupPage extends ListeningComponent {

  stores() {
    return [SessionsStore];
  }

  getStoreState() {
    return {
      session: SessionsStore.getCurrent(),
    }
  }

  attemptCreate(event) {
    var firstName = React.findDOMNode(this.refs.first_name).value;
    var lastName = React.findDOMNode(this.refs.last_name).value;
    // var email = React.findDOMNode(this.refs.email).value;
    // var password = React.findDOMNode(this.refs.password).value;
    // var image_url = React.findDOMNode(this.refs.image_url).value;
    Actions.create({
      id: 1,
      first_name: firstName,
      last_name: lastName,
    });
  }

  renderBanner() {
    return (
      <section className="general-banner">
        <div className="general-banner-content">
          <h2 className="general-banner-title">
            Join Kazoku
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
            Signup
          </h3>
          <input
            className="general-form-input"
            ref="first_name"
            type="text"
            autoFocus="true"
            placeholder="First name">
          </input>
          <input
            className="general-form-input"
            ref="last_name"
            type="text"
            placeholder="Last name">
          </input>
          <input
            className="general-form-input"
            ref="email"
            type="text"
            placeholder="Email">
          </input>
          <input
            className="general-form-input"
            ref="password"
            type="password"
            placeholder="Password">
          </input>
          <input
            className="general-form-input"
            ref="image_url"
            type="text"
            placeholder="Image link">
          </input>
          <Clickable
            action={this.attemptCreate.bind(this)}
            style={"general-form-submit"}
            content={"Sign up"} />
          <div className="general-form-section">
            <span className="general-form-label">
              or,
            </span>
            <Clickable
              route={Routes.pages.login}
              style={"general-form-toggle"}
              content={"log in"} />
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


module.exports = SignupPage;
