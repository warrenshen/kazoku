var Family = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object,
    family:        React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentPerson: null,
      family:        null,
    };
  },

  sendRequest: function(path, arguments) {
    var request = new XMLHttpRequest();
    request.onload = function() {
      window.location = request.response;
    };
    request.open("put", path);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(arguments));
  },

  attemptJoin: function(event) {
    var putPath = Routes.people.index + "/" + this.props.currentPerson.id;
    this.sendRequest(putPath, {
      person: {
        id: this.props.currentPerson.id,
        family_id: this.props.family.id,
      }
    });
  },

  renderJoin: function() {
    if (this.props.currentPerson !== null) {
      return (
        <Clickable
          action={this.attemptJoin}
          style={"general-button"}
          content={"Join family"} />
      );
    }
  },

  render: function() {
    return (
      <div className="family-block">
        <Clickable
          path={Routes.families.index + "/" + this.props.family.id}
          style={"family-block-name"}
          content={this.props.family.name} />
        <h5 className="family-block-size">
          {this.props.family.size}
        </h5>
        {this.renderJoin()}
      </div>
    );
  }
});
