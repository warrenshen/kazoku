//= require_self
//= require_tree ./constants
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
