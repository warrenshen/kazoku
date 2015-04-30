import React from "react";
import Component from "../templates/component.jsx";

import Person from "./person.jsx";


class PeopleList extends Component {

  attemptSearch() {
    // var query = React.findDOMNode(this.refs.query).value;
    // var path = Routes.users.search + "?q=" + query;
    // var request = Requester.send("get", path, {});
    // var self = this;
    // request.onload = function() {
    //   var results = JSON.parse(request.response);
    //   if (results.users.length === 0) {
    //     self.setState({users: null});
    //   } else {
    //     self.setState({users: results.users});
    //   }
    // };
  }

  renderPerson(person) {
    return (
      <Person key={person.get("id")} person={person} />
    );
  }

  renderPeople() {
    return this.props.people.map(this.renderPerson, this);
  }

  render() {
    return (
      <div className="general-list">
        <input
          className="people-search-input"
          ref="query"
          type="text"
          placeholder="Search"
          onChange={this.attemptSearch.bind(this)}>
        </input>
        {this.renderPeople()}
      </div>
    );
  }
}

PeopleList.propTypes = {
  people: React.PropTypes.array.isRequired,
},

PeopleList.defaultProps = {
  people: [],
}


module.exports = PeopleList;
