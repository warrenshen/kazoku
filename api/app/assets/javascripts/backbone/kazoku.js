//= require_self
//= require_tree ./constants
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./routers

var Kazoku = {
  Models: {},
  Collections: {},
  Routers: {},
  initialize: function() {
    new Kazoku.Routers.Router;
    Backbone.history.start({pushState: true});
  }
}
