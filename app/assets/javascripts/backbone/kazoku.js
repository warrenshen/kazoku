//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.Kazoku = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
}

Kazoku.Models.Family = Backbone.Model.extend({

  defaults: {
    name: "PHC Boys",
    size: 0,
  }

});

Kazoku.Routers.Pages = Backbone.Router.extend({

  routes: {
    "": "home",
  },

  home: function() {
    React.render(
      <HomeActions />,
      document.body
    );
  }

});

var router = new Kazoku.Routers.Pages();
Backbone.history.start();
