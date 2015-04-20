var Person = React.createClass({

  propTypes: {
    person: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      person: {},
    };
  },

  renderName: function() {
    var person = this.props.person;
    return person.first_name + " " + person.last_name;
  },

  renderImage: function() {
    var person = this.props.person;
    if (person.image_url.length) {
      return <img className="person-block-image" src={person.image_url} />
    }
  },

  render: function() {
    return (
      <div className="person-block">
        <h3 className="person-block-name">
          {this.renderName()}
        </h3>
        {this.renderImage()}
      </div>
    );
  }
});
