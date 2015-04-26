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
});
