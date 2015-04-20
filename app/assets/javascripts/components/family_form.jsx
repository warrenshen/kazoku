var FamilyForm = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      currentPerson: {},
    };
  },

  sendRequest: function(path, arguments) {
    var request = new XMLHttpRequest();
    request.onload = function() {
      window.location = request.response;
    };
    request.open("post", path);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(arguments));
  },

  attemptCreate: function(event) {
    var name = React.findDOMNode(this.refs.name).value;
    this.sendRequest(Routes.families.index, {
      family: {
        name: name,
      }
    });
  },

  render: function() {
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
          action={this.attemptCreate}
          style={"general-form-submit"}
          content={"Create family"} />
        <div className="general-form-section">
          <span className="general-form-label">
            or,
          </span>
          <Clickable
            path={Routes.families.index}
            style={"general-form-toggle"}
            content={"join one"} />
        </div>
      </form>
    );
  }
});
