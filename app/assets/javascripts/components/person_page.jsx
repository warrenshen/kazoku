var PersonPage = React.createClass({

  propTypes: {
    id: React.PropTypes.number.isRequired,
  },

  getDefaultProps: function() {
    return {
      id: null,
    };
  },

  getInitialState: function() {
    return {
      person: null,
    };
  },

  componentDidMount: function() {
    var person = new Kazoku.Models.User({id: this.props.id});
    person.fetch({
      success: function() {
        console.log("success!");
      },
      error: function() {
        console.log("error!");
      }
    });
  },

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
