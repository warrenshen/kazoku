var Event = React.createClass({

  propTypes: {
    event: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      event: null,
    };
  },

  renderDate: function() {
    var date = new Date(this.props.event.date);
    return (
      <h5>
        {Dater.monthWithDate(date)}
      </h5>
    );
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
    return (
      <div className="event-block">
        <Clickable
          path={Routes.events.index + "/" + this.props.event.id}
          style={"event-block-name"}
          content={this.props.event.name} />
        {this.renderDate()}
        {this.renderImage()}
      </div>
    );
  }
});
