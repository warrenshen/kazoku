var HomeActions = React.createClass({

  render: function() {
    return (
      <div className="home-actions">
        <div className="home-action">
          <Clickable
            path={Routes.users.index}
            style={"home-action-image"}
            source={"http://www.ruinart.com/img/content/articles/13_Portrait%20HVDS%20-%20HD.jpg"} />
          <Clickable
            path={Routes.users.index}
            style={"home-action-clickable"}
            content={"People"} />
        </div>
        <div className="home-action">
          <Clickable
            path={Routes.users.index}
            style={"home-action-image"}
            source={"http://www.vlblog.net/blogimage/anwan01.jpg"} />
          <Clickable
            path={Routes.users.index}
            style={"home-action-clickable"}
            content={"Families"} />
        </div>
      </div>
    );
  }
});
