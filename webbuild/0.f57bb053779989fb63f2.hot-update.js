webpackHotUpdate(0,{

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _Model2 = __webpack_require__(60);

	var _Model3 = _interopRequireDefault(_Model2);

	var _Person = __webpack_require__(36);

	var _Person2 = _interopRequireDefault(_Person);

	var _ApiRoutes = __webpack_require__(61);

	var _ApiRoutes2 = _interopRequireDefault(_ApiRoutes);

	var Session = (function (_Model) {
	  function Session() {
	    _classCallCheck(this, Session);

	    if (_Model != null) {
	      _Model.apply(this, arguments);
	    }
	  }

	  _inherits(Session, _Model);

	  _createClass(Session, [{
	    key: "defaults",
	    get: function () {
	      return {
	        id: null,
	        auth_email: "",
	        auth_token: "",
	        last_active_at: "",
	        uuid: "" };
	    }
	  }, {
	    key: "relations",
	    get: function () {
	      return [{
	        type: "HasOne",
	        key: "person",
	        relatedModel: _Person2["default"] }];
	    }
	  }, {
	    key: "name",
	    get: function () {
	      return "Session";
	    }
	  }, {
	    key: "urlRoot",
	    get: function () {
	      return _ApiRoutes2["default"].sessions.me;
	    }
	  }, {
	    key: "createUrl",
	    get: function () {
	      return _ApiRoutes2["default"].sessions.login;
	    }
	  }, {
	    key: "destroyUrl",
	    get: function () {
	      return _ApiRoutes2["default"].sessions.logout;
	    }
	  }, {
	    key: "parse",
	    value: function parse(response, options) {
	      var session = response.session;
	      return session;
	    }
	  }, {
	    key: "request",
	    value: function request() {
	      var options = arguments[0] === undefined ? {} : arguments[0];

	      var self = this;
	      options.success = function (model, response, options) {
	        if (response.session !== null) {
	          self.store.add(model);
	          self.store.emitChange();
	        }
	      };
	      options.error = function (model, response, options) {
	        console.log("request error:");
	        console.log(model);
	      };
	      var response = this.fetch(options);
	      return response;
	    }
	  }, {
	    key: "create",
	    value: function create() {
	      var options = arguments[0] === undefined ? {} : arguments[0];

	      var self = this;
	      options.success = function (response, status, options) {
	        self.set(response.session);
	        self.store.add(self);
	        self.store.emitChange();
	      };
	      options.error = function (response, status, options) {
	        console.log("create session error:");
	        console.log(response);
	      };
	      options.url = this.createUrl;
	      var response = this.sync("create", this, options);
	      return response;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      var options = arguments[0] === undefined ? {} : arguments[0];

	      var self = this;
	      options.error = function (response, status, options) {
	        console.log("destroy session error:");
	        console.log(response);
	      };
	      options.url = this.destroyUrl;
	      var response = this.sync("destroy", this, options);
	      return response;
	    }
	  }]);

	  return Session;
	})(_Model3["default"]);

	module.exports = Session;

/***/ }

})