import Backbone from "backbone";
import React from "react";

import HomePage from "../components/home_page.jsx";
import LoginPage from "../components/login_page.jsx";
import SignupPage from "../components/signup_page.jsx";
import PeoplePage from "../components/people_page.jsx";
import PersonPage from "../components/person_page.jsx";
import FamiliesPage from "../components/families_page.jsx";
import FamilyPage from "../components/family_page.jsx";


class Router extends Backbone.Router {

  routes() {
    return {
      "": "home",
      "login": "login",
      "signup": "signup",
      "people": "people",
      "people/:id": "person",
      "families": "families",
      "families/:id": "family",
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
      <LoginPage />,
      document.body
    );
  }

  signup() {
    React.render(
      <SignupPage />,
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
    console.log("rendering person page");
    React.render(
      <PersonPage id={Number(id)} />,
      document.body
    );
  }

  families() {
    React.render(
      <FamiliesPage />,
      document.body
    );
  }

  family(id) {
    React.render(
      <FamilyPage id={Number(id)} />,
      document.body
    );
  }
}


module.exports = Router;
