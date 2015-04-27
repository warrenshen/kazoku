import Backbone from "backbone";
import React from "react";

import HomePage from "../components/home_page.jsx";


class Router extends Backbone.Router {

  routes() {
    return {
      "": "home"
    };
  }

  home() {
    React.render(
      <HomePage />,
      document.body
    );
  }
}


module.exports = Router;
