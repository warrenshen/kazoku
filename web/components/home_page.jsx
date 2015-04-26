var HomePage = React.createClass({

  renderBanner: function() {
    return (
      <section className="home-banner">
        <div className="home-banner-fade"></div>
        <img className="home-banner-image" src="http://www.urbanalli.com/blog/wp-content/uploads/2012/10/donovan13.jpg"/>
        <div className="vertical-anchor"></div>
        <div className="home-banner-content">
          <h1 className="home-banner-title">
            KAZOKU
          </h1>
          <h5 className="home-banner-subtitle">
            Stay up to date with your family and plan familial events.
          </h5>
        </div>
      </section>
    );
  },

  renderActions: function() {
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
  },

  renderContent: function() {
    return (
      <section className="general-section">
        <div className="home-actions-headings">
          <h2 className="home-actions-heading">
            Family First
          </h2>
          <h5 className="home-actions-heading">
            Share experiences with those who matter to you.
          </h5>
        </div>
        {this.renderActions()}
      </section>
    );
  },

  render: function() {
    return (
      <div className = "general-page">
        <Header user={null} isColored={false} />
        {this.renderBanner()}
        {this.renderContent()}
      </div>
    );
  }
});
