var Event = React.createClass({

  propTypes: {
    event: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      event: null,
    };
  },

  renderImage: function() {
    var event = this.props.event;
    if (event.image_url.length) {
      return (
        <Clickable
          path={Routes.users.index + "/" + this.props.event.id}
          style={"event-block-image"}
          source={event.image_url} />
      );
    }
  },

  render: function() {
    console.log(this.props.event.image_url);
    console.log(this.props.event.date);
    return (
      <div className="event-block">
        <Clickable
          path={Routes.events.index + "/" + this.props.event.id}
          style={"event-block-name"}
          content={this.props.event.name} />
        {this.renderImage()}
      </div>
    );
  }
});
