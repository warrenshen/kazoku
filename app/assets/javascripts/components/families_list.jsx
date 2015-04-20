var FamiliesList = React.createClass({

  propTypes: {
    families: React.PropTypes.array.isRequired,
  },

  getDefaultProps: function() {
    return {
      families: [],
    };
  },

  renderFamily: function(family) {
    return (
      <Family key={family.id} family={family} />
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
