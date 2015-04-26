Kazoku.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "users": "users",
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
  }
});

new Kazoku.Routers.Router();
Backbone.history.start();
