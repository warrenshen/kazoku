webpackHotUpdate(0,{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _Cookies = __webpack_require__(59);

	var _Cookies2 = _interopRequireDefault(_Cookies);

	var _Store2 = __webpack_require__(33);

	var _Store3 = _interopRequireDefault(_Store2);

	var _Session = __webpack_require__(38);

	var _Session2 = _interopRequireDefault(_Session);

	var _Routes = __webpack_require__(39);

	var _Routes2 = _interopRequireDefault(_Routes);

	var CHANGE_EVENT = "change";

	var SessionsStore = (function (_Store) {
	  function SessionsStore() {
	    _classCallCheck(this, SessionsStore);

	    _get(Object.getPrototypeOf(SessionsStore.prototype), "constructor", this).call(this, new _Session2["default"]());
	  }

	  _inherits(SessionsStore, _Store);

	  _createClass(SessionsStore, [{
	    key: "name",
	    get: function () {
	      return "SessionsStore";
	    }
	  }, {
	    key: "collections",
	    value: function collections() {
	      return [];
	    }
	  }, {
	    key: "requestSession",
	    value: function requestSession() {
	      if (this._current.get("id") === null) {
	        var options = {};
	        options.headers = {
	          "X-AUTH-EMAIL": _Cookies2["default"].get("auth_email"),
	          "X-AUTH-TOKEN": _Cookies2["default"].get("auth_token"),
	          "X-SESSION-UUID": _Cookies2["default"].get("session_uuid") };
	        return this._current.request(options);
	      }
	    }
	  }, {
	    key: "login",
	    value: function login(credentials) {
	      var session = new _Session2["default"]();
	      var options = {};
	      options.attrs = { session: credentials };
	      return session.create(options);
	    }
	  }, {
	    key: "logout",
	    value: function logout() {
	      var self = this;
	      var options = {};
	      options.success = function (response, status, options) {
	        _Cookies2["default"].set("auth_email", "");
	        _Cookies2["default"].set("auth_token", "");
	        _Cookies2["default"].set("session_uuid", "");
	        self.store.emitChange();
	      };
	      return session.destroy(options);
	    }
	  }, {
	    key: "add",
	    value: function add(model) {
	      var options = arguments[1] === undefined ? {} : arguments[1];

	      _Cookies2["default"].set("auth_email", model.get("auth_email"));
	      _Cookies2["default"].set("auth_token", model.get("auth_token"));
	      _Cookies2["default"].set("session_uuid", model.get("uuid"));
	      this._current = model;
	      Kazoku.Router.navigate(_Routes2["default"].pages.home, true);
	      return this._current;
	    }
	  }]);

	  return SessionsStore;
	})(_Store3["default"]);

	module.exports = new SessionsStore();

/***/ }

})