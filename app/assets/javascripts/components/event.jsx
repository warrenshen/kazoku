var Event = React.createClass({

  propTypes: {
    event: React.PropTypes.object.isRequired,
  },

  getDefaultProps: {
    return {
      event: null,
    };
  },

  render: function() {
    return (
      <div className="event-block">
        <Clickable
          path={Routes.events.index + "/" + this.props.event.id}
          style={"event-block-name"}
          content={this.event.name} />
      </div>
    );
  }
});
