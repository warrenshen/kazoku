import React from "react";
import ListeningComponent from "app/templates/listening_component";

import Clickable from "app/components/clickable";
import Header from "app/components/header";

import SessionsStore from "app/stores/sessions_store";

import PeopleActions from "app/actions/people_actions";

import Routes from "app/constants/routes";


class SignupPage extends ListeningComponent {

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

  attemptCreate(event) {
    var firstName = React.findDOMNode(this.refs.first_name).value;
    var lastName = React.findDOMNode(this.refs.last_name).value;
    var email = React.findDOMNode(this.refs.email).value;
    var password = React.findDOMNode(this.refs.password).value;
    var imageUrl = React.findDOMNode(this.refs.image_url).value;
    PeopleActions.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      image_url: imageUrl,
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
            placeholder="First name"
            value="Nicholas">
          </input>
          <input
            className="general-form-input"
            ref="last_name"
            type="text"
            placeholder="Last name"
            value="Sterling">
          </input>
          <input
            className="general-form-input"
            ref="email"
            type="text"
            placeholder="Email"
            value="nicholassterling@berkeley.edu">
          </input>
          <input
            className="general-form-input"
            ref="password"
            type="password"
            placeholder="Password"
            value="password">
          </input>
          <input
            className="general-form-input"
            ref="image_url"
            type="text"
            placeholder="Image link"
            value="https://avatars1.githubusercontent.com/u/9123187">
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
