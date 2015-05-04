import Backbone from "backbone";
import React from "react";

import HomePage from "app/components/home_page";
import LoginPage from "app/components/login_page";
import SignupPage from "app/components/signup_page";
import PeoplePage from "app/components/people_page";
import PersonPage from "app/components/person_page";
import FamiliesPage from "app/components/families_page";
import FamilyPage from "app/components/family_page";


class Router extends Backbone.Router {

  get name() {
    return "Router";
  }

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


module.exports = new Router();
