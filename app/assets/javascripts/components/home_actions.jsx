var HomeActions = React.createClass({

  render: function() {
    return (
      <div className="home-actions">
        <div className="home-action">
          <div className="home-action-frame">
            <Clickable
              path={ApiRoutes.users.index}
              style={"home-action-image"}
              source={"http://www.ruinart.com/img/content/articles/13_Portrait%20HVDS%20-%20HD.jpg"} />
          </div>
          <Clickable
            path={ApiRoutes.users.index}
            style={"home-action-clickable"}
            content={"People"} />
        </div>
        <div className="home-action">
          <div className="home-action-frame">
            <Clickable
              path={ApiRoutes.families.index}
              style={"home-action-image"}
              source={"http://www.vlblog.net/blogimage/anwan01.jpg"} />
          </div>
          <Clickable
            path={ApiRoutes.families.index}
            style={"home-action-clickable"}
            content={"Families"} />
        </div>
        <div className="home-action">
          <div className="home-action-frame">
            <Clickable
              path={ApiRoutes.events.index}
              style={"home-action-image"}
              source={"http://cdn2.hellogiggles.com/wp-content/uploads/2015/04/09/Bassnectar_Live_at_Coachella_Wknd_2.jpg"} />
          </div>
          <Clickable
            path={ApiRoutes.events.index}
            style={"home-action-clickable"}
            content={"Events"} />
        </div>
      </div>
    );
  }
});
