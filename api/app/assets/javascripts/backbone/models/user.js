Kazoku.Models.User = Backbone.Model.extend({

  defaults: {
    id: null,
    first_name: "",
    last_name: "",
    image_url: "",
  },

  urlRoot: function() {
    return "/users/";
  },

  request: function(options) {
    // var self = this;
    // var success = options.success;
    options.success = function(model, response) {
      console.log("request success:");
      console.log(model);
    }
    options.error = function(model, response) {
      console.log("request error:");
      console.log(model);
    }
    var response = this.fetch(options);
    return response;
  }
});
