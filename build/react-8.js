(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["React8"] = factory(require("react"));
	else
		root["React8"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Infinity = function (_React$Component) {
	  _inherits(Infinity, _React$Component);

	  function Infinity(props) {
	    _classCallCheck(this, Infinity);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Infinity).call(this, props));

	    _this.state = {
	      disabled: false,
	      loading: false
	    };
	    return _this;
	  }

	  _createClass(Infinity, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var disabled = _state.disabled;
	      var loading = _state.loading;
	      var _props = this.props;
	      var offsetRatio = _props.offsetRatio;
	      var onNewData = _props.onNewData;

	      var rest = _objectWithoutProperties(_props, ['offsetRatio', 'onNewData']);

	      var enabled = !disabled && !loading; // not listening for onScroll event
	      // if disabled or loading
	      return _react2.default.createElement(
	        'div',
	        _extends({}, rest, { onScroll: enabled && this.handleScroll.bind(this) }),
	        this.props.children
	      );
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(e) {
	      var _props2 = this.props;
	      var offsetRatio = _props2.offsetRatio;
	      var onNewData = _props2.onNewData;
	      var target = e.target;

	      var fullHeight = target.scrollHeight;
	      var actualHeight = target.offsetHeight;
	      var scrollTopPosition = target.scrollTop;
	      var scrollBottomPosition = actualHeight + scrollTopPosition;

	      // checking if the scroll position is in the zone where we need to trigger
	      // new data load method
	      if (fullHeight - actualHeight * offsetRatio <= scrollBottomPosition) {
	        if (onNewData) {
	          if (onNewData.length === 1) {
	            // async method, wait till the callback is called; start loading
	            this.setState({ loading: true });
	            onNewData(this.newDataCallback.bind(this));
	          } else {
	            // sync; disable if returns `false`
	            if (onNewData() === false) {
	              this.setState({ disabled: true });
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'newDataCallback',
	    value: function newDataCallback(shouldContinue) {
	      // disabling scroll listener if `false` is passed as argument to the callback
	      if (shouldContinue === false) {
	        this.setState({ disabled: true });
	      }
	      this.setState({ loading: false });
	    }
	  }]);

	  return Infinity;
	}(_react2.default.Component);

	exports.default = Infinity;

	Infinity.defaultProps = {
	  offsetRatio: .5
	};

	Infinity.propTypes = {
	  offsetRatio: _react.PropTypes.number.isRequired,
	  onNewData: _react.PropTypes.func.isRequired
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;