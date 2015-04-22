var User = React.createClass({

  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function() {
    return {
      user: null,
    };
  },

  renderName: function() {
    var user = this.props.user;
    return user.first_name + " " + user.last_name;
  },

  renderImage: function() {
    var user = this.props.user;
    if (user.image_url.length) {
      return (
        <Clickable
          path={Routes.people.index + "/" + this.props.user.id}
          style={"user-block-image"}
          source={user.image_url} />
      );
    }
  },

  render: function() {
    return (
      <div className="user-block">
        <Clickable
          path={Routes.people.index + "/" + this.props.user.id}
          style={"user-block-name"}
          content={this.renderName()} />
        {this.renderImage()}
      </div>
    );
  }
});
