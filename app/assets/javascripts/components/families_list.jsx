var FamiliesList = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object,
    families: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentUser: null,
      families: [],
    };
  },

  renderFamily: function(family) {
    return (
      <Family
        key={family.id}
        currentUser={this.props.currentUser}
        family={family} />
    );
  },

  renderFamilies: function() {
    return this.props.families.map(this.renderFamily);
  },

  render: function() {
    return (
      <div className="general-list">
        {this.renderFamilies()}
      </div>
    );
  }
});
