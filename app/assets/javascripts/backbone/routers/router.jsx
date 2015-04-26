Kazoku.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "people": "people",
  },

  home: function() {
    React.render(
      <HomePage />,
      document.getElementById("anchor")
    );
  },

  people: function() {
    React.render(

    );
  }
});

new Kazoku.Routers.Router();
Backbone.history.start();
