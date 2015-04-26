Kazoku.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "home",
  },

  home: function() {
    React.render(
      <HomeActions />,
      document.getElementById("root")
    );
    console.log("rendering home");
  }

});

var router = new Kazoku.Routers.Router();
Backbone.history.start();
