var PeoplePage = React.createClass({

  renderBanner: function() {
    return (
      <section className="general-banner">
        <div className="general-banner-content">
          <h2 className="general-banner-title">
            People on Kazoku
          </h2>
          <h5 className="general-banner-subtitle">
            You could be here too!
          </h5>
        </div>
      </section>
    );
  },

  render: function() {
    return (
      <div className="general-page">
        <Header user={null} isColored={true} />
        {this.renderBanner()}
        <section className="general-section">
          <UsersList users={[]} />
        </section>
      </div>
    );
  }
});
