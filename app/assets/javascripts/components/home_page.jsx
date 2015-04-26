var HomePage = React.createClass({

  render: function() {
    return (
      <div className = "general-page">
        <Header user={null} isColored={false} />
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
        <section className="general-section">
          <div className="home-actions-headings">
            <h2 className="home-actions-heading">
              Family First
            </h2>
            <h5 className="home-actions-heading">
              Share experiences with those who matter to you.
            </h5>
          </div>
          <HomeActions />
        </section>
      </div>
    );
  }
});
