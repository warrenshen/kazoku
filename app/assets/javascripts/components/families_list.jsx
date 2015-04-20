var FamiliesList = React.createClass({

  propTypes: {
    currentPerson: React.PropTypes.object,
    families: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      currentPerson: null,
      families: [],
    };
  },

  renderFamily: function(family) {
    return (
      <Family
        key={family.id}
        currentPerson={this.props.currentPerson}
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
