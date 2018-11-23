(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("bluebird"));
	else if(typeof define === 'function' && define.amd)
		define("fluent-formio", ["axios", "bluebird"], factory);
	else if(typeof exports === 'object')
		exports["fluent-formio"] = factory(require("axios"), require("bluebird"));
	else
		root["fluent-formio"] = factory(root["axios"], root["bluebird"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FluentConnector = __webpack_require__(2);

var _FluentConnector2 = _interopRequireDefault(_FluentConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FluentConnector2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _awaitToJs = __webpack_require__(3);

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

var _Utilities = __webpack_require__(4);

var _Utilities2 = _interopRequireDefault(_Utilities);

var _axios = __webpack_require__(0);

var _axios2 = _interopRequireDefault(_axios);

var _fastFluent = __webpack_require__(5);

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _fastFluent.Interface.compose({
  methods: {
    getToken: function getToken() {
      return localStorage.getItem("formioToken");
    },
    baseUrl: function baseUrl() {
      var _connector = this.connector,
          baseUrl = _connector.baseUrl,
          name = _connector.name;


      if (!baseUrl) {
        throw new Error("You did not provide a baseUrl for the \"" + name + "\" connector");
      }
      return baseUrl.replace(/\/+$/, "");
    },
    get: function get() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var error, result, _ref, _ref2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.ownerEmail) {
                  _this.andWhere("owner", "=", _this.ownerEmail);
                }
                error = void 0;
                result = void 0;
                _context.next = 5;
                return (0, _awaitToJs2.default)(_this.httpGET());

              case 5:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                error = _ref2[0];
                result = _ref2[1];

                if (!error) {
                  _context.next = 12;
                  break;
                }

                console.log(error);
                throw new Error("Error while getting submissions");

              case 12:

                result = _this.jsApplySelect(result.data);
                result = _this.jsApplyOrderBy(result);

                return _context.abrupt("return", result);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    all: function all() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this2.get());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    insert: function insert(data, options) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref3, _ref4, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!Array.isArray(data)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", _this3.ArrayInsert(data, options));

              case 2:
                _context3.next = 4;
                return (0, _awaitToJs2.default)(_this3.httpPOST(data));

              case 4:
                _ref3 = _context3.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                error = _ref4[0];
                result = _ref4[1];

                if (!error) {
                  _context3.next = 11;
                  break;
                }

                console.log(error);
                throw new Error("Cannot insert data");

              case 11:
                return _context3.abrupt("return", result.data);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    update: function update(data) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref5, _ref6, error, result;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (data._id) {
                  _context4.next = 2;
                  break;
                }

                throw new Error("Formio connector error. Cannot update a Model without _id key");

              case 2:
                if (!data._id.includes("_local")) {
                  _context4.next = 4;
                  break;
                }

                throw new Error("Formio connector error. Cannot update a local document");

              case 4:
                _context4.next = 6;
                return (0, _awaitToJs2.default)(_this4.httpPUT(data));

              case 6:
                _ref5 = _context4.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                error = _ref6[0];
                result = _ref6[1];

                if (!error) {
                  _context4.next = 13;
                  break;
                }

                console.log(error);
                throw new Error("Cannot insert data");

              case 13:
                return _context4.abrupt("return", result.data);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    clear: function clear() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            sure = _ref7.sure;

        var promises, _ref8, _ref9, error, data;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!sure || sure !== true)) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('Clear() method will delete everything!, you must set the "sure" parameter "clear({sure:true})" to continue');

              case 2:
                promises = [];
                _context5.next = 5;
                return (0, _awaitToJs2.default)(_this5.select("_id").pluck("_id"));

              case 5:
                _ref8 = _context5.sent;
                _ref9 = _slicedToArray(_ref8, 2);
                error = _ref9[0];
                data = _ref9[1];

                if (!error) {
                  _context5.next = 12;
                  break;
                }

                console.log(error);
                throw new Error("Cannot get remote Model");

              case 12:

                data.forEach(function (_id) {
                  promises.push(_this5.httpDelete(_id));
                });

                return _context5.abrupt("return", _axios2.default.all(promises));

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    remove: function remove(_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _ref10, _ref11, error, removed;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _awaitToJs2.default)(_this6.httpDelete(_id));

              case 2:
                _ref10 = _context6.sent;
                _ref11 = _slicedToArray(_ref10, 2);
                error = _ref11[0];
                removed = _ref11[1];

                if (!error) {
                  _context6.next = 9;
                  break;
                }

                console.log(error);
                throw new Error("FormioConnector: Could not delete " + _id);

              case 9:
                return _context6.abrupt("return", removed);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    find: function find(_id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _ref12, _ref13, error, data;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(typeof _id !== "string")) {
                  _context7.next = 2;
                  break;
                }

                throw new Error('Formio connector find() method only accepts strings "' + (typeof _id === "undefined" ? "undefined" : _typeof(_id)) + '" given "' + _id + '"');

              case 2:
                _context7.next = 4;
                return (0, _awaitToJs2.default)(_this7.where("_id", "=", _id).first());

              case 4:
                _ref12 = _context7.sent;
                _ref13 = _slicedToArray(_ref12, 2);
                error = _ref13[0];
                data = _ref13[1];

                if (!error) {
                  _context7.next = 11;
                  break;
                }

                console.log(error);
                throw new Error("Find() could not get remote data");

              case 11:
                return _context7.abrupt("return", data);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    getUrl: function getUrl() {
      var _this8 = this;

      var baseUrl = this && this.baseUrl() ? this.baseUrl() : undefined;
      var path = _Utilities2.default.get(function () {
        return _this8.remoteConnection.path;
      }, undefined);
      var id = _Utilities2.default.get(function () {
        return _this8.remoteConnection.id;
      }, undefined);
      var pullForm = _Utilities2.default.get(function () {
        return _this8.remoteConnection.pullForm;
      }, undefined);

      if (!pullForm && path) {
        path = !id ? path + "/submission" : path + "/submission/" + id;
      }

      if (!baseUrl) {
        throw new Error("Cannot get remote model. baseUrl not defined");
      }

      if (path) {
        return baseUrl + "/" + path;
      }
      return baseUrl;
    },
    getHeaders: function getHeaders() {
      var headers = {};
      var token = {};
      if (typeof localStorage !== 'undefined') {
        token = localStorage.getItem("formioToken");
      }

      if (this.remoteConnection.token || this.remoteConnection.token === "") {
        token = this.remoteConnection.token;
      }

      if (!token) {
        return headers;
      }

      var type = this.getTokenType(token);
      headers[type] = token;
      return headers;
    },
    getSpacer: function getSpacer(url) {
      return url.substr(url.length - 1) === "&" ? "" : "&";
    },
    httpGET: function httpGET() {
      var url = this.getUrl();
      var headers = this.getHeaders();
      var filters = this.getFilters();
      var limit = this.getLimit();
      var skip = this.getSkip();
      var select = this.getSelect();
      var spacer = "";

      // Always limit the amount of requests
      url = url + spacer + limit;

      url = filters ? url + this.getSpacer(url) + filters : url;

      url = skip ? url + this.getSpacer(url) + skip : url;

      url = select ? url + this.getSpacer(url) + select : url;

      if (!_Connection2.default.isOnline()) {
        throw new Error("Cannot make get request to " + url + ".You are not online");
      }

      return _axios2.default.get(url, { headers: headers });
    },
    httpPOST: function httpPOST(data) {
      var url = this.getUrl();
      var headers = this.getHeaders();

      if (!_Connection2.default.isOnline()) {
        throw new Error("Cannot make request post to " + url + ".You are not online");
      }
      return _axios2.default.post(url, data, { headers: headers });
    },
    httpPUT: function httpPUT(data) {
      var url = this.getUrl() + "/" + data._id;
      var headers = this.getHeaders();

      if (!_Connection2.default.isOnline()) {
        throw new Error("Cannot make request post to " + url + ".You are not online");
      }
      return _axios2.default.put(url, data, { headers: headers });
    },
    httpDelete: function httpDelete(_id) {
      var headers = this.getHeaders();
      var url = this.getUrl() + "/" + _id;

      return _axios2.default.delete(url, { headers: headers });
    },
    getTokenType: function getTokenType(token) {
      if (token.length > 32) {
        return "x-jwt-token";
      }
      return "x-token";
    },
    getFilters: function getFilters() {
      var filter = this.whereArray;

      if (!filter || filter.length === 0) {
        return undefined;
      }

      var filterQuery = "";

      filter.forEach(function (condition) {
        var valueString = "";
        var element = condition[0];
        var operator = condition[1];
        var value = condition[2];

        switch (operator) {
          case "=":
            filterQuery = filterQuery + element + "=" + value + "&";
            break;
          case "!=":
            filterQuery = filterQuery + element + "__ne=" + value + "&";
            break;
          case ">":
            filterQuery = filterQuery + element + "__gt=" + value + "&";
            break;
          case ">=":
            filterQuery = filterQuery + element + "__gte=" + value + "&";
            break;
          case "<":
            filterQuery = filterQuery + element + "__lt=" + value + "&";
            break;
          case "<=":
            filterQuery = filterQuery + element + "__lte=" + value + "&";
            break;
          case "in":
            valueString = "";
            value.forEach(function (val, index, array) {
              valueString = index === array.length - 1 ? valueString + val : valueString + val + ",";
            });
            filterQuery = filterQuery + element + "__in=" + valueString + "&";
            break;
          case "nin":
            valueString = "";
            value.forEach(function (val, index, array) {
              valueString = index === array.length - 1 ? valueString + val : valueString + val + ",";
            });
            filterQuery = filterQuery + element + "__nin=" + valueString + "&";
            break;
          case "exists":
            filterQuery = filterQuery + element + "__exists=" + true + "&";
            break;
          case "!exists":
            filterQuery = filterQuery + element + "__exists=" + false + "&";
            break;
          case "regex":
            filterQuery = filterQuery + element + "__regex=" + value + "&";
            break;
        }
      });
      return filterQuery.substring(0, filterQuery.length - 1);
    },
    getLimit: function getLimit() {
      var limit = "?limit=";

      if (!this.limitNumber || this.limitNumber === 0) {
        this.limitNumber = 50;
      }

      return "" + limit + this.limitNumber;
    },
    getSkip: function getSkip() {
      var skip = "skip=";

      if (!this.offsetNumber) {
        this.offsetNumber = 0;
      }

      return skip + this.offsetNumber;
    },
    getSelect: function getSelect() {
      var select = this.selectArray;

      select = select.map(function (e) {
        return e.split(" as ")[0];
      });

      if (!select) {
        return;
      }

      return "select=" + select.join(",");
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise, errorExt) {
    return promise
        .then(function (data) { return [null, data]; })
        .catch(function (err) {
        if (errorExt) {
            Object.assign(err, errorExt);
        }
        return [err, undefined];
    });
}


/* harmony default export */ __webpack_exports__["default"] = (to);
//# sourceMappingURL=await-to-js.es5.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-unused-vars */
var Utilities = function () {
  /**
   * Deep clones a JS object using JSON.parse
   * This function will not clone object
   * functions
   * @param {Object} object
   */
  var cloneDeep = function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  };
  /**
   * Given an Object and its path, if exisits it will
   * return the value of it, if not the default
   * @param {Object} obj
   * @param {String} path
   * @param {*} def
   */
  var get = function get(fn, def) {
    try {
      return fn();
    } catch (e) {
      return def;
    }
  };
  /**
   *
   * @param {*} obj
   * @param {*} path
   * @param {*} def
   */
  var getFromPath = function getFromPath(obj, path, def) {
    var _path = path;

    if (path.includes(' as ')) {
      path = path.split(' as ');
      _path = path[0];
    }

    var assignedName = get(function () {
      return Array.isArray(path) && path[1].trim();
    }, undefined);

    var fullPath = _path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean).map(function (e) {
      return e.trim();
    });

    function everyFunc(step) {
      return !(step && (obj = obj[step]) === undefined);
    }

    var result = fullPath.every(everyFunc) ? obj : def;

    return { label: assignedName || _path, value: result };
  };
  /**
   *
   * @param {*} arr
   * @param {*} predicate
   */
  var uniqBy = function uniqBy(arr, predicate) {
    var cb = typeof predicate === 'function' ? predicate : function (o) {
      return o[predicate];
    };

    return [].concat(_toConsumableArray(arr.reduce(function (map, item) {
      var key = cb(item);

      map.has(key) || map.set(key, item);

      return map;
    }, new Map()).values()));
  };
  /**
   *
   */
  var orderBy = function orderBy() {};
  /**
   *
   * @param {*} value
   */
  var isEmpty = function isEmpty(value) {
    if (!value) {
      return true;
    }
    if (Array.isArray(value) || typeof value === 'string') {
      return !value.length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  };
  /**
   *
   * @param {*} fn
   * @param {*} time
   */
  var debounce = function debounce(fn, time) {
    var timeout = void 0;

    return function () {
      var _this = this,
          _arguments = arguments;

      var functionCall = function functionCall() {
        return fn.apply(_this, _arguments);
      };

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };
  /**
   * Recursively removes all NULL values
   * from an Object or an Array
   *
   * @static
   * @param {Array|Object} object Array, Object to clean
   * @returns {Array|Object} returns the cleaned value
   */
  var deleteNulls = function deleteNulls(object) {
    var obj = object;
    var isArray = obj instanceof Array;

    for (var k in obj) {
      if (obj[k] === null) isArray ? obj.splice(k, 1) : delete obj[k];else if (_typeof(obj[k]) === 'object') deleteNulls(obj[k]);
    }
    return obj;
  };

  var eachComponent = function eachComponent(components, fn, includeAll, path, parent) {
    if (!components) return;
    path = path || '';
    components.forEach(function (component) {
      if (!component) {
        return;
      }
      var hasColumns = component.columns && Array.isArray(component.columns);
      var hasRows = component.rows && Array.isArray(component.rows);
      var hasComps = component.components && Array.isArray(component.components);
      var noRecurse = false;
      var newPath = component.key ? path ? path + '.' + component.key : component.key : '';

      // Keep track of parent references.
      if (parent) {
        // Ensure we don't create infinite JSON structures.
        component.parent = _extends({}, parent);
        delete component.parent.components;
        delete component.parent.componentMap;
        delete component.parent.columns;
        delete component.parent.rows;
      }

      if (includeAll || component.tree || !hasColumns && !hasRows && !hasComps) {
        noRecurse = fn(component, newPath);
      }

      var subPath = function subPath() {
        if (component.key && !['panel', 'table', 'well', 'columns', 'fieldset', 'tabs', 'form'].includes(component.type) && (['datagrid', 'container', 'editgrid'].includes(component.type) || component.tree)) {
          return newPath;
        } else if (component.key && component.type === 'form') {
          return newPath + '.data';
        }
        return path;
      };

      if (!noRecurse) {
        if (hasColumns) {
          component.columns.forEach(function (column) {
            return eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
          });
        } else if (hasRows) {
          component.rows.forEach(function (row) {
            if (Array.isArray(row)) {
              row.forEach(function (column) {
                return eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
              });
            }
          });
        } else if (hasComps) {
          eachComponent(component.components, fn, includeAll, subPath(), parent ? component : null);
        }
      }
    });
  };

  var matchComponent = function matchComponent(component, query) {
    if (typeof query === 'string') {
      return component.key === query;
    }
    var matches = false;

    Object.keys(query).forEach(function (path) {
      matches = getFromPath(component, path).value === query[path];
      if (!matches) {
        return false;
      }
    });
    return matches;
  };

  var findComponents = function findComponents(components, query) {
    var results = [];

    eachComponent(components, function (component, path) {
      if (matchComponent(component, query)) {
        component.path = path;
        results.push(component);
      }
    }, true);
    return results;
  };

  var unixDate = function unixDate() {
    return Math.round(+new Date() / 1000);
  };

  return Object.freeze({
    cloneDeep: cloneDeep,
    get: get,
    orderBy: orderBy,
    isEmpty: isEmpty,
    debounce: debounce,
    getFromPath: getFromPath,
    deleteNulls: deleteNulls,
    eachComponent: eachComponent,
    findComponents: findComponents,
    unixDate: unixDate
  });
}();

exports.default = Utilities;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){var n=r(2),o=r(16),i=r(6),a=r(17),s=r(1),c=r(3),u=r(8),f=r(7),l=Array.prototype.concat;function p(){var e=l.apply([],arguments).filter(c);return 0===e.length?void 0:e}function d(e){if(!s(e))return e;var t=e.methods,r=e.properties,n=e.props,o=e.initializers,i=e.init,c=e.composers,l=e.deepProperties,d=e.deepProps,h=e.propertyDescriptors,v=e.staticProperties,m=e.statics,g=e.staticDeepProperties,y=e.deepStatics,w=e.configuration,b=e.conf,A=e.deepConfiguration,P=e.deepConf,_=s(n)||s(r)?f({},n,r):void 0,E=s(d)?u({},d):void 0;E=s(l)?u(E,l):E;var O=s(m)||s(v)?f({},m,v):void 0,x=s(y)?u({},y):void 0;x=s(g)?u(x,g):x;var F=e.staticPropertyDescriptors;a(e.name)&&(F=f({},F||{},{name:{value:e.name}}));var j=s(b)||s(w)?f({},b,w):void 0,C=s(P)?u({},P):void 0;C=s(A)?u(C,A):C;var N=p(i,o),M=p(c),R={};return t&&(R.methods=t),_&&(R.properties=_),N&&(R.initializers=N),M&&(R.composers=M),E&&(R.deepProperties=E),O&&(R.staticProperties=O),x&&(R.staticDeepProperties=x),h&&(R.propertyDescriptors=h),F&&(R.staticPropertyDescriptors=F),j&&(R.configuration=j),C&&(R.deepConfiguration=C),R}function h(){"use strict";for(var e=arguments.length,t=[],r=0;r<e;r+=1){var o=arguments[r];t.push(i(o)?o:d(o))}return n.apply(this||v,t)}var v=o.compose({staticProperties:{create:function(){return this.apply(this,arguments)},compose:h}}),m=o.compose.staticProperties;for(var g in m)h[g]=m[g].bind(v);h.compose=h.bind(),e.exports=h},function(e,t){e.exports=function(e){var t=typeof e;return Boolean(e)&&("object"===t||"function"===t)}},function(e,t,r){var n=r(5),o=r(3),i=r(1),a=r(6),s=r(14),c=r(7),u=r(8),f=Array.prototype.slice;function l(e,t){var r=function e(t){var r=e.compose||{},n={__proto__:r.methods};if(u(n,r.deepProperties),c(n,r.properties),Object.defineProperties(n,r.propertyDescriptors||{}),!r.initializers||0===r.initializers.length)return n;void 0===t&&(t={});for(var i=r.initializers,a=i.length,s=0;s<a;s+=1){var l=i[s];if(o(l)){var p=l.call(n,t,{instance:n,stamp:e,args:f.apply(arguments)});n=void 0===p?n:p}}return n};e.staticDeepProperties&&u(r,e.staticDeepProperties),e.staticProperties&&c(r,e.staticProperties),e.staticPropertyDescriptors&&Object.defineProperties(r,e.staticPropertyDescriptors);var n=o(r.compose)?r.compose:t;return r.compose=function(){"use strict";return n.apply(this,arguments)},c(r.compose,e),r}function p(e,t,r){if(n(t)){var i=t.length,a=e[r]||[];e[r]=a;for(var s=0;s<i;s+=1){var c=t[s];o(c)&&a.indexOf(c)<0&&a.push(c)}}}function d(e,t,r,n){i(t[r])&&(i(e[r])||(e[r]={}),n(e[r],t[r]))}function h(e,t,r){d(e,t,r,u)}function v(e,t,r){d(e,t,r,c)}function m(e,t){var r=t&&t.compose||t;v(e,r,"methods"),v(e,r,"properties"),h(e,r,"deepProperties"),v(e,r,"propertyDescriptors"),v(e,r,"staticProperties"),h(e,r,"staticDeepProperties"),v(e,r,"staticPropertyDescriptors"),v(e,r,"configuration"),h(e,r,"deepConfiguration"),p(e,r.initializers,"initializers"),p(e,r.composers,"composers")}e.exports=function e(){"use strict";var t={},r=[];s(this)&&(m(t,this),r.push(this));for(var o=0;o<arguments.length;o++){var i=arguments[o];s(i)&&(m(t,i),r.push(i))}var c=l(t,e),u=t.composers;if(n(u)&&u.length>0)for(var f=0;f<u.length;f+=1){var p=(0,u[f])({stamp:c,composables:r});c=a(p)?p:c}return c}},function(e,t){e.exports=function(e){return"function"==typeof e}},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports=Array.isArray},function(e,t,r){var n=r(3);e.exports=function(e){return n(e)&&n(e.compose)}},function(e,t){e.exports=Object.assign},function(e,t,r){var n=r(15),o=r(1),i=r(5);function a(e,t){if(void 0===t)return e;if(i(t))return(i(e)?e:[]).concat(t);if(!n(t))return t;for(var r=o(e)?e:{},s=Object.keys(t),c=0;c<s.length;c+=1){var u=s[c],f=t[u];if(void 0!==f){var l=r[u],p=n(l)||i(f)?l:{};r[u]=a(p,f)}}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++)e=a(e,arguments[t]);return e}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(0)),o=i(r(18));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)({properties:{name:"baseModel",config:{remote:{path:void 0,token:void 0,pullForm:!1},local:{connector:"loki"},merge:{connector:"formio-loki"}}},methods:{getModelName:function(){return this.name},getFluentConfig:function(){var t=void 0;return"undefined"!=typeof window&&window&&window._FLUENT_?t=window._FLUENT_:e&&e._FLUENT_&&(t=e._FLUENT_),t},getConnector:function(e,t){return Array.isArray(e)?this.getConnectorFromArray(e,t):e instanceof Object?e:void 0},getConnectorFromArray:function(e,t){var r=this;if(1===e.length)return e[0];if(this.config&&this.config[t]&&this.config[t].connector){var n=e.find(function(e){return e.name===r.config[t].connector});if(n instanceof Object)return n}var o=e.find(function(e){return e.default});return o instanceof Object?o:void 0},remote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.token,r=void 0===t?void 0:t,n=e.pullForm,o=void 0===n?void 0:n,i=this.getFluentConfig(),a=i&&i.connectors&&i.connectors.remote;if(!a)throw new Error("No remote connector was defined. Please define it using Fluent.config()");var s=this.getConnector(a,"remote");if(this.config.remote.token=r||this.config.remote.token,o&&(this.config.remote.pullForm=o||this.config.remote.pullForm),s)return s.connector({remoteConnection:this.config.remote,connector:s});throw new Error("No default remote connector found. Please assign one as your default in Fluent.config")},local:function(){var e=this.getFluentConfig(),t=e&&e.connectors&&e.connectors.local;if(!t)throw new Error("No local connector was defined. Please define it using Fluent.config()");var r=this.getConnector(t,"local");if(r)return r.connector({name:this.name,connector:r});throw new Error("No default local connector found. Please assign one as your default in Fluent.config")},merged:function(){var e=this.local(),t=this.remote(),r=this.getFluentConfig(),n=r&&r.connectors&&r.connectors.merge;if(!n)throw new Error("No merge connector was defined. Please define it using Fluent.config()");var o=this.getConnector(n,"merge");if(o)return o.connector({local:e,remote:t,name:this.name,connector:o});throw new Error("No default merge connector found. Please assign one as your default in Fluent.config")}}}).compose(o.default)}).call(this,r(4))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=a(r(0)),i=a(r(11));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}t.default=(0,o.default)({init:function(e){if(!Array.isArray(e))throw new Error("Collect method only accepts arrays of data");this.data=e},properties:{data:[]},methods:{get:function(){return this.data},all:function(){return this.get()},avg:function(e){return this.average(e)},average:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[].concat(s(this.data)),r=t.reduce(function(t,r){var n=r;if(r instanceof Object){var o=i.default.getFromPath(r,e,void 0);void 0!==o&&o.value&&(n=o.value)}return t+n},0);try{return r/t.length}catch(e){throw new Error('Division between "'+r+'" and "'+t.length+'" is not valid.')}},chunks:function(e){for(var t=[].concat(s(this.data)),r=[];t.length;)r.push(t.splice(0,e));return this.data=r,this},collapse:function(){var e=[];return[].concat(s(this.data)).forEach(function(t){Array.isArray(t)?t.forEach(function(t){e.push(t)}):e.push(t)}),this.data=e,this},unChunk:function(){return this.collapse()},combine:function(e){var t=void 0;return[].concat(s(this.data)).forEach(function(r,o){r instanceof Object?(t||(t=[]),t[o]=n({},r,{_value:e[o]})):(t||(t={}),t[r]=e[o])}),this.data=t,this},concat:function(e){return this.data=[].concat(s(this.data),s(e)),this},contains:function(){var e=void 0,t=void 0,r=void 0;return 1===arguments.length?(this.isFunction(arguments.length<=0?void 0:arguments[0])&&(r=arguments.length<=0?void 0:arguments[0]),e=arguments.length<=0?void 0:arguments[0]):(e=arguments.length<=1?void 0:arguments[1],t=arguments.length<=0?void 0:arguments[0]),[].concat(s(this.data)).some(function(n,o){if(r)return!!r(n,o);var a=n;if(n instanceof Object){var s=i.default.getFromPath(n,t,void 0);s.value&&(a=s.value)}return a===e})},count:function(){return this.data.length},isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)}}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e,t){try{return e()}catch(e){return t}};return Object.freeze({get:e,getFromPath:function(t,r,n){var o=r;r.includes(" as ")&&(o=(r=r.split(" as "))[0]);var i=e(function(){return Array.isArray(r)&&r[1].trim()},void 0);var a=o.replace(/\[/g,".").replace(/]/g,"").split(".").filter(Boolean).map(function(e){return e.trim()}).every(function(e){return!(e&&void 0===(t=t[e]))})?t:n;return{label:i||o,value:a}}})}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Interface=t.Fluent=t.Model=void 0;var n=a(r(13)),o=a(r(9)),i=a(r(19));function a(e){return e&&e.__esModule?e:{default:e}}t.Model=o.default,t.Fluent=n.default,t.Interface=i.default},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0)),o=a(r(9)),i=a(r(10));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var c=(0,n.default)({init:function(){this.registerGlobalVariable()},properties:{},methods:{model:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.registerModel(t),o.default.compose.apply(o.default,s(t))},extend:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.registerModel(t),o.default.compose.apply(o.default,s(t))},compose:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.registerModel(t),o.default.compose.apply(o.default,s(t))},collect:function(e){return(0,i.default)(e)},registerGlobalVariable:function(){"undefined"!=typeof window&&window&&!window._FLUENT_&&(window._FLUENT_={connectors:{},models:{}}),e&&!e._FLUENT_&&(e._FLUENT_={connectors:{},models:{}})},registerModel:function(t){var r=t&&t[0]&&t[0].properties&&t[0].properties.name?t[0].properties.name:void 0;if(r&&"baseModel"!==r){if("string"!=typeof r)throw new Error("You must assign a name to your Model when using Fluent.compose");"undefined"==typeof window?e._FLUENT_.models[r]=!0:window._FLUENT_.models[r]=!0}},config:function(t){var r=t.REMOTE_CONNECTORS,n=void 0===r?void 0:r,o=t.LOCAL_CONNECTORS,i=void 0===o?void 0:o,a=t.MERGE_CONNECTORS,s=void 0===a?void 0:a;"undefined"!=typeof window&&window&&(window._FLUENT_.connectors={local:i,remote:n,merge:s}),void 0!==e&&e&&(e._FLUENT_.connectors={local:i,remote:n,merge:s})},getConfig:function(){return"undefined"!=typeof window&&window?window._FLUENT_:void 0!==e&&e?e._FLUENT_:void 0}}})();t.default=c}).call(this,r(4))},function(e,t,r){e.exports=r(1)},function(e,t){e.exports=function(e){return Boolean(e)&&"object"==typeof e&&Object.getPrototypeOf(e)===Object.prototype}},function(e,t,r){var n=r(2);function o(e){return function(t){"use strict";var r={};return r[e]=t,this&&this.compose?this.compose(r):n(r)}}var i=o("properties"),a=o("staticProperties"),s=o("configuration"),c=o("deepProperties"),u=o("staticDeepProperties"),f=o("deepConfiguration"),l=o("initializers");e.exports=n({staticProperties:{methods:o("methods"),props:i,properties:i,statics:a,staticProperties:a,conf:s,configuration:s,deepProps:c,deepProperties:c,deepStatics:u,staticDeepProperties:u,deepConf:f,deepConfiguration:f,init:l,initializers:l,composers:o("composers"),propertyDescriptors:o("propertyDescriptors"),staticPropertyDescriptors:o("staticPropertyDescriptors")}})},function(e,t){e.exports=function(e){return"string"==typeof e}},function(e,t,r){var n=r(2),o=new WeakMap,i=function(e,t){function r(){"use strict";var t=o.get(this);return e.apply(t,arguments)}return Object.defineProperty(r,"name",{value:t,configurable:!0}),r};function a(e,t){var r=t.stamp.compose,n=r.deepConfiguration.Privatize.methods,a={};o.set(a,this);var s=r.methods;if(!s)return a;for(var c=Object.keys(s),u=0;u<c.length;u++){var f=c[u];n.indexOf(f)<0&&(a[f]=i(s[f],f))}if("undefined"!=typeof Symbol){var l=Symbol.for("stamp");s[l]&&(a[l]=t.stamp)}return a}var s=n({initializers:[a],deepConfiguration:{Privatize:{methods:[]}},staticProperties:{privatizeMethods:function(){"use strict";for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];"string"==typeof r&&r.length>0&&e.push(r)}return(this&&this.compose?this:s).compose({deepConfiguration:{Privatize:{methods:e}}})}},composers:[function(e){var t=e.stamp.compose.initializers;t.splice(t.indexOf(a),1),t.push(a)}]});e.exports=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(0)),o=a(r(11)),i=a(r(10));function a(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,i){try{var a=t[o](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}t.default=(0,n.default)({init:function(e){var t=e.name,r=e.remoteConnection,n=e.connector;if(!t&&!r)throw new Error("Model must have a name or path");if(!n)throw new Error("Model must have a connector. Please register one using Fluent.config");this.name=t||this.name,this.remoteConnection=r||this.remoteConnection,this.connector=n||this.connector,this.chainReference=[],this.whereArray=[],this.orWhereArray=[],this.selectArray=[],this.orderByArray=[],this.limitNumber=void 0,this.offsetNumber=void 0,this.populate=[],this.chunk=null,this.pullSize=null,this.ownerEmail=void 0},properties:{operators:["=","<",">","<=",">=","<>","!=","in","nin","like","regexp","startsWith","endsWith","contains"]},methods:{get:function(){throw new Error("get() method not implemented")},all:function(){throw new Error("all() method not implemented")},find:function(e){throw new Error("find() method not implemented")},findOne:function(){throw new Error("findOne() method not implemented")},remove:function(){throw new Error("remove() method not implemented")},softDelete:function(){throw new Error("softDelete() method not implemented")},insert:function(){throw new Error("insert() method not implemented")},update:function(){throw new Error("update() method not implemented")},clear:function(){throw new Error("clear() method not implemented")},updateOrCreate:function(){throw new Error("updateOrCreate() method not implemented")},findAndRemove:function(){throw new Error("findAndRemove() method not implemented")},paginate:function(e,t){throw new Error("paginate() method not implemented")},owner:function(e){return this.chainReference.push({method:"owner",args:e}),this.ownerEmail=e,this},own:function(e){return this.owner(e)},first:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get();case 2:return r=t.sent,t.abrupt("return",o.default.get(function(){return r[0]},[]));case 4:case"end":return t.stop()}},t,e)}))()},collect:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.get();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new Error("Collect method only accepts arrays of data");case 5:return t.abrupt("return",(0,i.default)(r));case 6:case"end":return t.stop()}},t,e)}))()},select:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t=this.prepareInput(t),this.chainReference.push({method:"select",args:t}),this.selectArray=this.selectArray.concat(t).filter(function(e,t,r){return r.indexOf(e)===t}),this},jsApplySelect:function(e){var t=this,r=Array.isArray(e)?[].concat(s(e)):[e];return this.selectArray.length>0&&(r=r.map(function(e){var r={};return t.selectArray.forEach(function(t){var n=o.default.getFromPath(e,t,void 0);void 0!==o.default.get(function(){return n.value},void 0)&&(r[n.label]=n.value)}),r})),r},offset:function(e){return this.chainReference.push({method:"offset",args:e}),this.offsetNumber=e,this},skip:function(e){return this.offset(e)},where:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.chainReference.push({method:"where",args:r}),this.whereArray=[],(r=Array.isArray(r[0])?r:[r]).forEach(function(t){if(3!==t.length)throw new Error('There where clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "'+JSON.stringify(t)+'" ');e.whereArray.push(t)}),this},andWhere:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.chainReference.push({method:"andWhere",args:r}),(r=Array.isArray(r[0])?r:[r]).forEach(function(t){if(3!==t.length)throw new Error('There where clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "'+JSON.stringify(t)+'" ');e.whereArray.push(t)}),this},orWhere:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return this.chainReference.push({method:"orWhere",args:r}),(r=Array.isArray(r[0])?r:[r]).forEach(function(t){if(3!==t.length)throw new Error('There orWhere clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "'+JSON.stringify(t)+'" ');e.orWhereArray.push(t)}),this},limit:function(e){return this.chainReference.push({method:"limit",args:e}),this.limitNumber=e,this},take:function(e){return this.limit(e)},pluck:function(e){var t=this;return c(regeneratorRuntime.mark(function r(){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t.chainReference.push({method:"pluck",args:e}),r.next=3,t.get();case 3:return n=(n=r.sent).map(function(t){var r=o.default.getFromPath(t,e,void 0);if(void 0!==r.value)return r.value}),r.abrupt("return",n);case 6:case"end":return r.stop()}},r,t)}))()},orderBy:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.chainReference.push({method:"orderBy",args:t}),this.orderByArray=t,this},jsApplyOrderBy:function(e){var t=[].concat(s(e));if(0===this.orderByArray.length)return t;var r=this.orderByArray[0];if(this.selectArray.length>0&&(r.includes(".")||r.includes("[")))throw new Error('Cannot orderBy nested attribute "'+r+'" when using Select. You must rename the attribute');var n=this.orderByArray[1],i=this.orderByArray[2];return i||(i="string"),t=t.sort(function(e,t){var a=o.default.getFromPath(e,r,void 0).value,s=o.default.getFromPath(t,r,void 0).value;if(void 0===a||void 0===s)throw new Error('Cannot order by property "'+r+'" not all values have this property');return i.includes("string")||i.includes("number")?"asc"===n?a>s?1:a<s?-1:0:a>s?-1:a<s?1:0:i.includes("date")?"asc"===n?new Date(a)-new Date(s):new Date(s)-new Date(a):void 0})},prepareInput:function(e){var t=[];return e.forEach(function(e){var r=Array.isArray(e)?e:e.split(",");r=r.map(function(e){return e.trim()}),t=t.concat(r)}),t.filter(function(e,t,r){return r.indexOf(e)===t}),t},ArrayInsert:function(e,t){var r=this;return c(regeneratorRuntime.mark(function n(){var o,i,a,s,c,u,f,l;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=1,i=e.length,a=!0,s=!1,c=void 0,n.prev=5,u=e[Symbol.iterator]();case 7:if(a=(f=u.next()).done){n.next=26;break}return l=f.value,t&&t.showProgress&&console.log("Inserting "+o+" of "+i),n.prev=10,n.next=13,r.insert(l,t);case 13:n.sent,t&&t.showProgress&&console.log("Element "+o+" inserted"),o++,n.next=23;break;case 18:n.prev=18,n.t0=n.catch(10),console.log("ERROR - Element "+o+" - "+JSON.stringify(l)+" could not be inserted"),console.log(n.t0),o++;case 23:a=!0,n.next=7;break;case 26:n.next=32;break;case 28:n.prev=28,n.t1=n.catch(5),s=!0,c=n.t1;case 32:n.prev=32,n.prev=33,!a&&u.return&&u.return();case 35:if(n.prev=35,!s){n.next=38;break}throw c;case 38:return n.finish(35);case 39:return n.finish(32);case 40:case"end":return n.stop()}},n,r,[[5,28,32,40],[10,18],[33,,35,39]])}))()}}})}])});
//# sourceMappingURL=fast-fluent.min.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = __webpack_require__(7);

var _Event2 = _interopRequireDefault(_Event);

var _bluebird = __webpack_require__(8);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _axios = __webpack_require__(0);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var Connection = function () {
  var online = typeof window !== 'undefined' && window && window.navigator ? window.navigator.onLine : true;

  function setOnline() {
    if (!online) {
      online = true;
      _Event2.default.emit({
        name: 'FAST:CONNECTION:ONLINE',
        data: online,
        text: 'Application is now online'
      });
    }
  }

  function setOffline() {
    if (online) {
      online = false;
      _Event2.default.emit({
        name: 'FAST:CONNECTION:OFFLINE',
        data: online,
        text: 'Application is now offline'
      });
    }
  }

  /**
   * [status description]
   * @return {Promise} [description]
   */
  function initEventListeners() {
    _Event2.default.listen({
      name: 'online',
      callback: function callback() {
        console.log('App is now online');
        setOnline();
      }
    });
    _Event2.default.listen({
      name: 'offline',
      callback: function callback() {
        console.log('App is now offline');
        setOffline();
      }
    });
  }

  function isOnline() {
    return new _bluebird2.default(function (resolve, reject) {
      _axios2.default.get('https://yesno.wtf/api').then(function (res) {
        resolve(true);
      }).catch(function (err) {
        resolve(false);
      });
    });
  }

  return Object.freeze({
    isOnline: isOnline,
    initEventListeners: initEventListeners
  });
}();

exports.default = Connection;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Event = function () {
  var CustomEvent = function CustomEvent(event, params) {
    var evt = document.createEvent('CustomEvent');

    params = params || { bubbles: false, cancelable: false, detail: undefined };

    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  function emit(_ref) {
    var name = _ref.name,
        data = _ref.data,
        text = _ref.text;

    if (!name) throw new Error('Event must have a name.');
    if (!data) throw new Error('Event must have data.');
    if (!text) throw new Error('Event must have a text.');
    var customEvent = CustomEvent(name, {
      detail: {
        data: data,
        text: text
      }
    });

    window.dispatchEvent(customEvent);
  }
  function listen(_ref2) {
    var name = _ref2.name,
        callback = _ref2.callback;

    if (!name) throw new Error('Listener must have a name.');
    if (!callback) throw new Error('Listener must have a callback.');
    window.addEventListener(name, callback);
  }

  function remove(_ref3) {
    var name = _ref3.name,
        callback = _ref3.callback;

    if (!name) throw new Error('Listener must have a name to detach');
    if (!callback) throw new Error('Listener must have a callback to detach');
    window.removeEventListener(name, callback);
  }
  return Object.freeze({
    emit: emit,
    listen: listen,
    remove: remove
  });
}();

exports.default = Event;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fluent-formio.js.map