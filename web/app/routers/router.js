import Backbone from "backbone";
import React from "react";

import HomePage from "../components/home_page.jsx";
import PeoplePage from "../components/people_page.jsx";
import PersonPage from "../components/person_page.jsx";


class Router extends Backbone.Router {

  routes() {
    return {
      "": "home",
      "login": "login",
      "signup": "signup",
      "people": "people",
      "people/:id": "person",
    };
  }

  home() {
    React.render(
      <HomePage />,
      document.body
    );
  }

  login() {
    React.render(
      <HomePage />,
      document.body
    );
  }

  signup() {
    React.render(
      < />,
      document.body
    );
  }

  people() {
    React.render(
      <PeoplePage />,
      document.body
    );
  }

  person(id) {
    React.render(
      <PersonPage id={id} />,
      document.body
    );
  }
}


module.exports = Router;
