Kazoku.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "users": "users",
    "users/:id": "user",
  },

  home: function() {
    React.render(
      <HomePage />,
      document.getElementById("anchor")
    );
  },

  users: function() {
    React.render(
      <PeoplePage />,
      document.getElementById("anchor")
    );
  },

  user: function(id) {
    console.log(id);
    React.render(
      <PersonPage />,
      document.getElementById("anchor")
    );
  }

});
