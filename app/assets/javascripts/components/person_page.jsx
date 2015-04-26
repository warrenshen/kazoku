var PersonPage = React.createClass({

  render: function() {
    return (
      <div className="general-page">
        <Header user={null} isColored={true} />
        <section className="general-banner">
          <UserProfile currentUser={null} user={null} />
        </section>
      </div>
    );
  }
});
