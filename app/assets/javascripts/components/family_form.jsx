var FamilyForm = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object.isRequired,
  },

  defaultProps: {
    currentPerson: null,
  },

  render: function() {
    return (
      <form className="general-form">
        <h3 className="general-form-title">
          Create Family
        </h3>
        <input
          className="general-form-input"
          ref="name"
          type="text"
          placeholder="Family name">
        </input>
        <a
          className="general-form-submit"
          onClick={this.attemptCreate}>
          Create family
        </a>
      </form>
    );
  }
});
