Kazoku.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "home",
  },

  home: function() {
    React.render(
      <HomePage />,
      document.getElementById("anchor")
    );
  }

});

var router = new Kazoku.Routers.Router();
Backbone.history.start();
