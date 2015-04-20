var Person = React.createClass({

  propTypes: {
    person: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      person: null,
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
        <Clickable
          path={Routes.people.index + "/" + this.props.person.id}
          style="person-block-name"
          content={this.renderName()} />
        {this.renderImage()}
      </div>
    );
  }
});
