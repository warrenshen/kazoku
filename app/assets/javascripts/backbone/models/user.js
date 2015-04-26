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
      console.log("got model:");
      console.log(model);
    }
    var response = this.fetch(options);
    return response;
  }
});


// --------------------------------------------------
// Get
// --------------------------------------------------
// request(options={}) {
//   var self = this;
//   var optionsSuccess = options.success;
//   debugger
//   options.success = function(model, response, xhr) {
//     self.store.add(model);
//     self.store.emitChange();
//   }

//   var optionsError = options.error;
//   options.error = function(model, response, xhr) {

//   }

//   var response = super.fetch(options);
//   self.patchResponse(response);
//   return response;
// }


// patchResponse(response) {
//   var self = this;
//   var responseThen = response.then;
//   response.then = (onDone, onError) => {
//     var onDoneObjectResponse = () => {
//       return onDone(self);
//     }

//     var onErrorObjectResposne = (error) => {
//       var ApiError = MasterStore.getModel("ApiError");
//       var apiError = ApiError.createFromError(error);
//       return onError(apiError);
//     }

//     if (_.isFunction(responseThen)) {
//       responseThen.call(response, onDoneObjectResponse, onErrorObjectResposne);
//     }
//   }

//   return response;
// }
