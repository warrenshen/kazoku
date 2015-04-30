import React from "react";
import Component from "../templates/component.jsx";

import Clickable from "./clickable.jsx";

import Routes from "../constants/routes.js";


class FamilyForm extends Component {

  attemptCreate(event) {
    var name = React.findDOMNode(this.refs.name).value;
    var request = Requester.send("post", Routes.families.index, {
      family: {
        name: name,
      }
    });
    request.onload = function() {
      var response = JSON.parse(request.response);
      if (response.id) {
        window.location = Routes.families.index + "/" + response.id;
      } else {
        console.log("api_error_response");
      }
    };
  }

  render() {
    return (
      <form className="general-form">
        <h3 className="general-form-title">
          Create a Family
        </h3>
        <input
          className="general-form-input"
          ref="name"
          type="text"
          placeholder="Family name">
        </input>
        <Clickable
          action={this.attemptCreate.bind(this)}
          style={"general-form-submit"}
          content={"Create family"} />
        <div className="general-form-section">
          <span className="general-form-label">
            or,
          </span>
          <Clickable
            route={Routes.families.index}
            style={"general-form-toggle"}
            content={"join one"} />
        </div>
      </form>
    );
  }
}


module.exports = FamilyForm;
