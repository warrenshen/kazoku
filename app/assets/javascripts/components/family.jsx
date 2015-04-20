var Family = React.createClass({

  propTypes: {
    family: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      family: {},
    };
  },

  render: function() {
    return (
      <div className="family-block">
        <h3 className="family-block-name">
          {this.props.family.name}
        </h3>
      </div>
    );
  }
});
