/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./__tests__/fixtures/two-things.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./__tests__/fixtures/one-thing.js":
/***/ (function(module, exports, __webpack_require__) {

  "use strict";


  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__("./node_modules/react/index.js");

  var _react2 = _interopRequireDefault(_react);

  var _reactI18next = __webpack_require__("./node_modules/react-i18next/dist/es/index.js");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var MyComponent = function () {
    function MyComponent() {
      _classCallCheck(this, MyComponent);
    }

    _createClass(MyComponent, [{
      key: 'render',
      value: function render() {
        var t = this.props.t;


        var text = 'Hello';
        var text2 = t('Hello butt');
        return _react2.default.createElement(
          'div',
          null,
          t(text),
          text2,
          t("Hello from {one} thing's")
        );
      }
    }]);

    return MyComponent;
  }();

  exports.default = (0, _reactI18next.translate)('common')(MyComponent);

  /***/ }),

  /***/ "./__tests__/fixtures/two-things.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";


  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__("./node_modules/react/index.js");

  var _react2 = _interopRequireDefault(_react);

  var _reactI18next = __webpack_require__("./node_modules/react-i18next/dist/es/index.js");

  var _oneThing = __webpack_require__("./__tests__/fixtures/one-thing.js");

  var _oneThing2 = _interopRequireDefault(_oneThing);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var MyComponent = function () {
    function MyComponent() {
      _classCallCheck(this, MyComponent);
    }

    _createClass(MyComponent, [{
      key: 'render',
      value: function render() {
        var t = this.props.t;


        return _react2.default.createElement(
          'div',
          null,
          t('Hello friend dude'),
          t('Hello'),
          _react2.default.createElement(_oneThing2.default, null)
        );
      }
    }]);

    return MyComponent;
  }();

  exports.default = (0, _reactI18next.translate)('common')(MyComponent);

  /***/ }),

  /***/ "./node_modules/fbjs/lib/emptyFunction.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";


  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;

  /***/ }),

  /***/ "./node_modules/fbjs/lib/emptyObject.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */



  var emptyObject = {};

  if (process.env.NODE_ENV !== 'production') {
    Object.freeze(emptyObject);
  }

  module.exports = emptyObject;
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/fbjs/lib/invariant.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */



  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {};

  if (process.env.NODE_ENV !== 'production') {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  module.exports = invariant;
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/fbjs/lib/warning.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */



  var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction;

  if (process.env.NODE_ENV !== 'production') {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  module.exports = warning;
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/hoist-non-react-statics/index.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */


  var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      mixins: true,
      propTypes: true,
      type: true
  };

  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

  module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

          if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
          }

          var keys = getOwnPropertyNames(sourceComponent);

          if (getOwnPropertySymbols) {
              keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }

          for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try { // Avoid failures from read-only properties
                      defineProperty(targetComponent, key, descriptor);
                  } catch (e) {}
              }
          }

          return targetComponent;
      }

      return targetComponent;
  };


  /***/ }),

  /***/ "./node_modules/html-parse-stringify2/index.js":
  /***/ (function(module, exports, __webpack_require__) {

  module.exports = {
      parse: __webpack_require__("./node_modules/html-parse-stringify2/lib/parse.js"),
      stringify: __webpack_require__("./node_modules/html-parse-stringify2/lib/stringify.js")
  };


  /***/ }),

  /***/ "./node_modules/html-parse-stringify2/lib/parse-tag.js":
  /***/ (function(module, exports, __webpack_require__) {

  var attrRE = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g;
  var voidElements = __webpack_require__("./node_modules/void-elements/index.js");

  module.exports = function (tag) {
      var i = 0;
      var key;
      var expectingValueAfterEquals = true;
      var res = {
          type: 'tag',
          name: '',
          voidElement: false,
          attrs: {},
          children: []
      };

      tag.replace(attrRE, function (match) {
          if (match === '=') {
              expectingValueAfterEquals = true;
              i++;
              return;
          }

          if (!expectingValueAfterEquals) {
              if (key) {
                  res.attrs[key] = key; // boolean attribute
              }
              key=match;
          } else {
              if (i === 0) {
                  if (voidElements[match] || tag.charAt(tag.length - 2) === '/') {
                      res.voidElement = true;
                  }
                  res.name = match;
              } else {
                  res.attrs[key] = match.replace(/^['"]|['"]$/g, '');
                  key=undefined;
              }
          }
          i++;
          expectingValueAfterEquals = false;
      });

      return res;
  };


  /***/ }),

  /***/ "./node_modules/html-parse-stringify2/lib/parse.js":
  /***/ (function(module, exports, __webpack_require__) {

  /*jshint -W030 */
  var tagRE = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g;
  var parseTag = __webpack_require__("./node_modules/html-parse-stringify2/lib/parse-tag.js");
  // re-used obj for quick lookups of components
  var empty = Object.create ? Object.create(null) : {};
  // common logic for pushing a child node onto a list
  function pushTextNode(list, html, level, start, ignoreWhitespace) {
      // calculate correct end of the content slice in case there's
      // no tag after the text node.
      var end = html.indexOf('<', start);
      var content = html.slice(start, end === -1 ? undefined : end);
      // if a node is nothing but whitespace, collapse it as the spec states:
      // https://www.w3.org/TR/html4/struct/text.html#h-9.1
      if (/^\s*$/.test(content)) {
          content = ' ';
      }
      // don't add whitespace-only text nodes if they would be trailing text nodes
      // or if they would be leading whitespace-only text nodes:
      //  * end > -1 indicates this is not a trailing text node
      //  * leading node is when level is -1 and list has length 0
      if ((!ignoreWhitespace && end > -1 && level + list.length >= 0) || content !== ' ') {
          list.push({
              type: 'text',
              content: content
          });
      }
  }

  module.exports = function parse(html, options) {
      options || (options = {});
      options.components || (options.components = empty);
      var result = [];
      var current;
      var level = -1;
      var arr = [];
      var byTag = {};
      var inComponent = false;

      html.replace(tagRE, function (tag, index) {
          if (inComponent) {
              if (tag !== ('</' + current.name + '>')) {
                  return;
              } else {
                  inComponent = false;
              }
          }

          var isOpen = tag.charAt(1) !== '/';
          var isComment = tag.indexOf('<!--') === 0;
          var start = index + tag.length;
          var nextChar = html.charAt(start);
          var parent;

          if (isOpen && !isComment) {
              level++;

              current = parseTag(tag);
              if (current.type === 'tag' && options.components[current.name]) {
                  current.type = 'component';
                  inComponent = true;
              }

              if (!current.voidElement && !inComponent && nextChar && nextChar !== '<') {
                  pushTextNode(current.children, html, level, start, options.ignoreWhitespace);
              }

              byTag[current.tagName] = current;

              // if we're at root, push new base node
              if (level === 0) {
                  result.push(current);
              }

              parent = arr[level - 1];

              if (parent) {
                  parent.children.push(current);
              }

              arr[level] = current;
          }

          if (isComment || !isOpen || current.voidElement) {
              if (!isComment) {
                  level--;
              }
              if (!inComponent && nextChar !== '<' && nextChar) {
                  // trailing text node
                  // if we're at the root, push a base text node. otherwise add as
                  // a child to the current node.
                  parent = level === -1 ? result : arr[level].children;
                  pushTextNode(parent, html, level, start, options.ignoreWhitespace);
              }
          }
      });

      // If the "html" passed isn't actually html, add it as a text node.
      if (!result.length && html.length) {
          pushTextNode(result, html, 0, 0, options.ignoreWhitespace);
      }

      return result;
  };


  /***/ }),

  /***/ "./node_modules/html-parse-stringify2/lib/stringify.js":
  /***/ (function(module, exports) {

  function attrString(attrs) {
      var buff = [];
      for (var key in attrs) {
          buff.push(key + '="' + attrs[key] + '"');
      }
      if (!buff.length) {
          return '';
      }
      return ' ' + buff.join(' ');
  }

  function stringify(buff, doc) {
      switch (doc.type) {
      case 'text':
          return buff + doc.content;
      case 'tag':
          buff += '<' + doc.name + (doc.attrs ? attrString(doc.attrs) : '') + (doc.voidElement ? '/>' : '>');
          if (doc.voidElement) {
              return buff;
          }
          return buff + doc.children.reduce(stringify, '') + '</' + doc.name + '>';
      }
  }

  module.exports = function (doc) {
      return doc.reduce(function (token, rootEl) {
          return token + stringify('', rootEl);
      }, '');
  };


  /***/ }),

  /***/ "./node_modules/object-assign/index.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */


  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !==
          'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };


  /***/ }),

  /***/ "./node_modules/process/browser.js":
  /***/ (function(module, exports) {

  // shim for using process in browser
  var process = module.exports = {};

  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }

  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };

  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;

  process.listeners = function (name) { return [] }

  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };

  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


  /***/ }),

  /***/ "./node_modules/prop-types/checkPropTypes.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  if (process.env.NODE_ENV !== 'production') {
    var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
    var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
    var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
    var loggedTypeFailures = {};
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
          }
        }
      }
    }
  }

  module.exports = checkPropTypes;

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      invariant(
        false,
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
    };
    shim.isRequired = shim;
    function getShim() {
      return shim;
    };
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };


  /***/ }),

  /***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var assign = __webpack_require__("./node_modules/object-assign/index.js");

  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

  module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            invariant(
              false,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              warning(
                false,
                'You are manually calling a React.PropTypes validation ' +
                'function for the `%s` prop on `%s`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
                propFullName,
                componentName
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunction.thatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunction.thatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunction.thatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          warning(
            false,
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received %s at index %s.',
            getPostfixForTypeWarning(checker),
            i
          );
          return emptyFunction.thatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/prop-types/index.js":
  /***/ (function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(process) {/**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = __webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")();
  }

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;


  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/I18n.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context__ = __webpack_require__("./node_modules/react-i18next/dist/es/context.js");
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





  var removedIsInitialSSR = false;

  var I18n = function (_Component) {
    _inherits(I18n, _Component);

    function I18n(props, context) {
      _classCallCheck(this, I18n);

      var _this = _possibleConstructorReturn(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this, props, context));

      _this.i18n = context.i18n || props.i18n || Object(__WEBPACK_IMPORTED_MODULE_2__context__["b" /* getI18n */])();
      _this.namespaces = _this.props.ns || _this.i18n.options.defaultNS;
      if (typeof _this.namespaces === 'string') _this.namespaces = [_this.namespaces];

      var i18nOptions = _this.i18n && _this.i18n.options.react || {};
      _this.options = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2__context__["a" /* getDefaults */])(), i18nOptions, props);

      // nextjs SSR: getting data from next.js or other ssr stack
      if (props.initialI18nStore) {
        _this.i18n.services.resourceStore.data = props.initialI18nStore;
        _this.options.wait = false; // we got all passed down already
      }
      if (props.initialLanguage) {
        _this.i18n.changeLanguage(props.initialLanguage);
      }

      // provider SSR: data was set in provider and ssr flag was set
      if (_this.i18n.options.isInitialSSR) {
        _this.options.wait = false;
      }

      var language = _this.i18n.languages && _this.i18n.languages[0];
      var ready = !!language && _this.namespaces.every(function (ns) {
        return _this.i18n.hasResourceBundle(language, ns);
      });

      _this.state = {
        i18nLoadedAt: null,
        ready: ready
      };

      _this.onI18nChanged = _this.onI18nChanged.bind(_this);
      _this.getI18nTranslate = _this.getI18nTranslate.bind(_this);
      return _this;
    }

    _createClass(I18n, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          t: this.t,
          i18n: this.i18n
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.t = this.getI18nTranslate();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var bind = function bind() {
          if (_this2.options.bindI18n && _this2.i18n) _this2.i18n.on(_this2.options.bindI18n, _this2.onI18nChanged);
          if (_this2.options.bindStore && _this2.i18n.store) _this2.i18n.store.on(_this2.options.bindStore, _this2.onI18nChanged);
        };

        this.mounted = true;
        this.i18n.loadNamespaces(this.namespaces, function () {
          var ready = function ready() {
            if (_this2.mounted && !_this2.state.ready) _this2.setState({ ready: true });
            if (_this2.options.wait && _this2.mounted) bind();
          };

          if (_this2.i18n.isInitialized) {
            ready();
          } else {
            var initialized = function initialized() {
              // due to emitter removing issue in i18next we need to delay remove
              setTimeout(function () {
                _this2.i18n.off('initialized', initialized);
              }, 1000);
              ready();
            };

            _this2.i18n.on('initialized', initialized);
          }
        });

        if (!this.options.wait) bind();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        this.mounted = false;
        if (this.onI18nChanged) {
          if (this.options.bindI18n) {
            var p = this.options.bindI18n.split(' ');
            p.forEach(function (f) {
              return _this3.i18n.off(f, _this3.onI18nChanged);
            });
          }
          if (this.options.bindStore) {
            var _p = this.options.bindStore.split(' ');
            _p.forEach(function (f) {
              return _this3.i18n.store && _this3.i18n.store.off(f, _this3.onI18nChanged);
            });
          }
        }
      }
    }, {
      key: 'onI18nChanged',
      value: function onI18nChanged() {
        if (!this.mounted) return;

        this.t = this.getI18nTranslate();
        this.setState({ i18nLoadedAt: new Date() });
      }
    }, {
      key: 'getI18nTranslate',
      value: function getI18nTranslate() {
        return this.i18n.getFixedT(null, this.options.nsMode === 'fallback' ? this.namespaces : this.namespaces[0]);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var children = this.props.children;
        var ready = this.state.ready;


        if (!ready && this.options.wait) return null;

        // remove ssr flag set by provider - first render was done from now on wait if set to wait
        if (this.i18n.options.isInitialSSR && !removedIsInitialSSR) {
          removedIsInitialSSR = true;
          setTimeout(function () {
            delete _this4.i18n.options.isInitialSSR;
          }, 100);
        }

        return children(this.t, { i18n: this.i18n, t: this.t });
      }
    }]);

    return I18n;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  /* harmony default export */ __webpack_exports__["a"] = (I18n);


  I18n.contextTypes = {
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  I18n.childContextTypes = {
    t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/I18nextProvider.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




  var I18nextProvider = function (_Component) {
    _inherits(I18nextProvider, _Component);

    function I18nextProvider(props, context) {
      _classCallCheck(this, I18nextProvider);

      var _this = _possibleConstructorReturn(this, (I18nextProvider.__proto__ || Object.getPrototypeOf(I18nextProvider)).call(this, props, context));

      _this.i18n = props.i18n;
      if (props.initialI18nStore) {
        _this.i18n.services.resourceStore.data = props.initialI18nStore;
        _this.i18n.options.isInitialSSR = true; // if set will be deleted on first render in translate hoc
      }
      if (props.initialLanguage) {
        _this.i18n.changeLanguage(props.initialLanguage);
      }
      return _this;
    }

    _createClass(I18nextProvider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return { i18n: this.i18n };
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.i18n !== nextProps.i18n) {
          throw new Error('[react-i18next][I18nextProvider]does not support changing the i18n object.');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;

        return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(children);
      }
    }]);

    return I18nextProvider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  I18nextProvider.propTypes = {
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };

  I18nextProvider.childContextTypes = {
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  };

  /* harmony default export */ __webpack_exports__["a"] = (I18nextProvider);

  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/Interpolate.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




  var Interpolate = function (_PureComponent) {
    _inherits(Interpolate, _PureComponent);

    function Interpolate(props, context) {
      _classCallCheck(this, Interpolate);

      var _this = _possibleConstructorReturn(this, (Interpolate.__proto__ || Object.getPrototypeOf(Interpolate)).call(this, props, context));

      _this.i18n = props.i18n || context.i18n;
      _this.t = props.t || context.t;
      return _this;
    }

    _createClass(Interpolate, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var parent = this.props.parent || 'span';
        var REGEXP = this.props.regexp || this.i18n.services.interpolator.regexp;
        var _props = this.props,
            className = _props.className,
            style = _props.style;

        // Set to true if you want to use raw HTML in translation values
        // See https://github.com/i18next/react-i18next/issues/189

        var useDangerouslySetInnerHTML = this.props.useDangerouslySetInnerHTML || false;
        var dangerouslySetInnerHTMLPartElement = this.props.dangerouslySetInnerHTMLPartElement || 'span';

        var tOpts = _extends({}, this.props.options, { interpolation: { prefix: '#$?', suffix: '?$#' } });
        var format = this.t(this.props.i18nKey, tOpts);

        if (!format || typeof format !== 'string') return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('noscript', null);

        var children = [];

        var handleFormat = function handleFormat(key, props) {
          if (key.indexOf(_this2.i18n.options.interpolation.formatSeparator) < 0) {
            if (props[key] === undefined) _this2.i18n.services.logger.warn('interpolator: missed to pass in variable ' + key + ' for interpolating ' + format);
            return props[key];
          }

          var p = key.split(_this2.i18n.options.interpolation.formatSeparator);
          var k = p.shift().trim();
          var f = p.join(_this2.i18n.options.interpolation.formatSeparator).trim();

          if (props[k] === undefined) _this2.i18n.services.logger.warn('interpolator: missed to pass in variable ' + k + ' for interpolating ' + format);
          return _this2.i18n.options.interpolation.format(props[k], f, _this2.i18n.language);
        };

        format.split(REGEXP).reduce(function (memo, match, index) {
          var child = void 0;

          if (index % 2 === 0) {
            if (match.length === 0) return memo;
            if (useDangerouslySetInnerHTML) {
              child = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(dangerouslySetInnerHTMLPartElement, { dangerouslySetInnerHTML: { __html: match } });
            } else {
              child = match;
            }
          } else {
            child = handleFormat(match, _this2.props);
          }

          memo.push(child);
          return memo;
        }, children);

        var additionalProps = {};
        if (this.i18n.options.react && this.i18n.options.react.exposeNamespace) {
          var ns = typeof this.t.ns === 'string' ? this.t.ns : this.t.ns[0];
          if (this.props.i18nKey && this.i18n.options.nsSeparator && this.props.i18nKey.indexOf(this.i18n.options.nsSeparator) > -1) {
            var parts = this.props.i18nKey.split(this.i18n.options.nsSeparator);
            ns = parts[0];
          }
          if (this.t.ns) additionalProps['data-i18next-options'] = JSON.stringify({ ns: ns });
        }

        if (className) additionalProps.className = className;
        if (style) additionalProps.style = style;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement.apply(this, [parent, additionalProps].concat(children));
      }
    }]);

    return Interpolate;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

  Interpolate.propTypes = {
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  };

  Interpolate.defaultProps = {
    className: ''
  };

  Interpolate.contextTypes = {
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  };

  /* harmony default export */ __webpack_exports__["a"] = (Interpolate);

  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/Trans.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_parse_stringify2__ = __webpack_require__("./node_modules/html-parse-stringify2/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_html_parse_stringify2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_html_parse_stringify2__);
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





  function hasChildren(node) {
    return node && (node.children || node.props && node.props.children);
  }

  function getChildren(node) {
    return node && node.children ? node.children : node.props && node.props.children;
  }

  function nodesToString(mem, children, index) {
    if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];

    children.forEach(function (child, i) {
      // const isElement = React.isValidElement(child);
      // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
      var elementKey = '' + i;

      if (typeof child === 'string') {
        mem = '' + mem + child;
      } else if (hasChildren(child)) {
        mem = mem + '<' + elementKey + '>' + nodesToString('', getChildren(child), i + 1) + '</' + elementKey + '>';
      } else if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
        mem = mem + '<' + elementKey + '></' + elementKey + '>';
      } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
        var clone = _extends({}, child);
        var format = clone.format;
        delete clone.format;

        var keys = Object.keys(clone);
        if (format && keys.length === 1) {
          mem = mem + '<' + elementKey + '>{{' + keys[0] + ', ' + format + '}}</' + elementKey + '>';
        } else if (keys.length === 1) {
          mem = mem + '<' + elementKey + '>{{' + keys[0] + '}}</' + elementKey + '>';
        }
      }
    });

    return mem;
  }

  function renderNodes(children, targetString, i18n) {

    // parse ast from string with additional wrapper tag
    // -> avoids issues in parser removing prepending text nodes
    var ast = __WEBPACK_IMPORTED_MODULE_2_html_parse_stringify2___default.a.parse('<0>' + targetString + '</0>');

    function mapAST(reactNodes, astNodes) {
      if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
      if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];

      return astNodes.reduce(function (mem, node, i) {
        if (node.type === 'tag') {
          var child = reactNodes[parseInt(node.name, 10)] || {};
          var isElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child);

          if (typeof child === 'string') {
            mem.push(child);
          } else if (hasChildren(child)) {
            var inner = mapAST(getChildren(child), node.children);
            if (child.dummy) child.children = inner; // needed on preact!
            mem.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, _extends({}, child.props, { key: i }), inner));
          } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && !isElement) {
            var interpolated = i18n.services.interpolator.interpolate(node.children[0].content, child, i18n.language);
            mem.push(interpolated);
          } else {
            mem.push(child);
          }
        } else if (node.type === 'text') {
          mem.push(node.content);
        }
        return mem;
      }, []);
    }

    // call mapAST with having react nodes nested into additional node like
    // we did for the string ast from translation
    // return the children of that extra node to get expected result
    var result = mapAST([{ dummy: true, children: children }], ast);
    return getChildren(result[0]);
  }

  var Trans = function (_React$Component) {
    _inherits(Trans, _React$Component);

    function Trans() {
      _classCallCheck(this, Trans);

      return _possibleConstructorReturn(this, (Trans.__proto__ || Object.getPrototypeOf(Trans)).apply(this, arguments));
    }

    _createClass(Trans, [{
      key: 'render',
      value: function render() {
        var contextAndProps = _extends({ i18n: this.context.i18n, t: this.context.t }, this.props);

        var children = contextAndProps.children,
            count = contextAndProps.count,
            parent = contextAndProps.parent,
            i18nKey = contextAndProps.i18nKey,
            i18n = contextAndProps.i18n,
            t = contextAndProps.t,
            additionalProps = _objectWithoutProperties(contextAndProps, ['children', 'count', 'parent', 'i18nKey', 'i18n', 't']);

        var defaultValue = nodesToString('', children, 0);
        var key = i18nKey || defaultValue;
        var translation = t(key, { interpolation: { prefix: '#$?', suffix: '?$#' }, defaultValue: defaultValue, count: count });

        if (i18n.options.react && i18n.options.react.exposeNamespace) {
          var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];
          if (i18nKey && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
            var parts = i18nKey.split(i18n.options.nsSeparator);
            ns = parts[0];
          }
          if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({ ns: ns });
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(parent, additionalProps, renderNodes(children, translation, i18n));
      }
    }]);

    return Trans;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  /* harmony default export */ __webpack_exports__["a"] = (Trans);


  Trans.propTypes = {
    count: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    parent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    i18nKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  Trans.defaultProps = {
    parent: 'div'
  };

  Trans.contextTypes = {
    i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    t: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  };

  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/context.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["d"] = setDefaults;
  /* harmony export (immutable) */ __webpack_exports__["a"] = getDefaults;
  /* harmony export (immutable) */ __webpack_exports__["e"] = setI18n;
  /* harmony export (immutable) */ __webpack_exports__["b"] = getI18n;
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reactI18nextModule; });
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var defaultOptions = {
    wait: false,
    withRef: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    translateFuncName: 't',
    nsMode: 'default'
  };

  var i18n = void 0;

  function setDefaults(options) {
    defaultOptions = _extends({}, defaultOptions, options);
  }

  function getDefaults() {
    return defaultOptions;
  }

  function setI18n(instance) {
    i18n = instance;
  }

  function getI18n() {
    return i18n;
  }

  var reactI18nextModule = {
    type: '3rdParty',

    init: function init(instance) {
      setDefaults(instance.options.react);
      setI18n(instance);
    }
  };

  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/index.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate__ = __webpack_require__("./node_modules/react-i18next/dist/es/translate.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return __WEBPACK_IMPORTED_MODULE_0__translate__["a"]; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__I18n__ = __webpack_require__("./node_modules/react-i18next/dist/es/I18n.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return __WEBPACK_IMPORTED_MODULE_1__I18n__["a"]; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Interpolate__ = __webpack_require__("./node_modules/react-i18next/dist/es/Interpolate.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Interpolate", function() { return __WEBPACK_IMPORTED_MODULE_2__Interpolate__["a"]; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Trans__ = __webpack_require__("./node_modules/react-i18next/dist/es/Trans.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Trans", function() { return __WEBPACK_IMPORTED_MODULE_3__Trans__["a"]; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__I18nextProvider__ = __webpack_require__("./node_modules/react-i18next/dist/es/I18nextProvider.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I18nextProvider", function() { return __WEBPACK_IMPORTED_MODULE_4__I18nextProvider__["a"]; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loadNamespaces__ = __webpack_require__("./node_modules/react-i18next/dist/es/loadNamespaces.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "loadNamespaces", function() { return __WEBPACK_IMPORTED_MODULE_5__loadNamespaces__["a"]; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__context__ = __webpack_require__("./node_modules/react-i18next/dist/es/context.js");
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reactI18nextModule", function() { return __WEBPACK_IMPORTED_MODULE_6__context__["c"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaults", function() { return __WEBPACK_IMPORTED_MODULE_6__context__["d"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaults", function() { return __WEBPACK_IMPORTED_MODULE_6__context__["a"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setI18n", function() { return __WEBPACK_IMPORTED_MODULE_6__context__["e"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getI18n", function() { return __WEBPACK_IMPORTED_MODULE_6__context__["b"]; });








  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/loadNamespaces.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = loadNamespaces;
  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  // shim object entries
  if (!Object.entries) Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }return resArray;
  };

  // Borrowed from https://github.com/Rezonans/redux-async-connect/blob/master/modules/ReduxAsyncConnect.js#L16
  function eachComponents(components, iterator) {
    for (var i = 0, l = components.length; i < l; i++) {
      // eslint-disable-line id-length
      if (_typeof(components[i]) === 'object') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(components[i])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            iterator(value, i, key);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        iterator(components[i], i);
      }
    }
  }

  function filterAndFlattenComponents(components) {
    var flattened = [];
    eachComponents(components, function (Component) {
      if (Component && Component.namespaces) {

        Component.namespaces.forEach(function (namespace) {
          if (flattened.indexOf(namespace) === -1) {
            flattened.push(namespace);
          }
        });
      }
    });
    return flattened;
  }

  function loadNamespaces(_ref) {
    var components = _ref.components,
        i18n = _ref.i18n;

    var allNamespaces = filterAndFlattenComponents(components);

    return new Promise(function (resolve) {
      i18n.loadNamespaces(allNamespaces, resolve);
    });
  }

  /***/ }),

  /***/ "./node_modules/react-i18next/dist/es/translate.js":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = translate;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__context__ = __webpack_require__("./node_modules/react-i18next/dist/es/context.js");
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__I18n__ = __webpack_require__("./node_modules/react-i18next/dist/es/I18n.js");
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







  function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
  }

  function translate(namespaces) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    return function Wrapper(WrappedComponent) {
      var Translate = function (_Component) {
        _inherits(Translate, _Component);

        function Translate(props, context) {
          _classCallCheck(this, Translate);

          var _this = _possibleConstructorReturn(this, (Translate.__proto__ || Object.getPrototypeOf(Translate)).call(this, props, context));

          _this.i18n = context.i18n || props.i18n || options.i18n || Object(__WEBPACK_IMPORTED_MODULE_3__context__["b" /* getI18n */])();
          namespaces = namespaces || _this.i18n.options.defaultNS;
          if (typeof namespaces === 'string') namespaces = [namespaces];

          var i18nOptions = _this.i18n && _this.i18n.options.react || {};
          _this.options = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3__context__["a" /* getDefaults */])(), i18nOptions, options);

          _this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
          return _this;
        }

        _createClass(Translate, [{
          key: 'getWrappedInstance',
          value: function getWrappedInstance() {
            if (!this.options.withRef) {
              // eslint-disable-next-line no-console
              console.error('To access the wrapped instance, you need to specify ' + '{ withRef: true } as the second argument of the translate() call.');
            }

            /* eslint react/no-string-refs: 1 */
            return this.wrappedInstance;
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var extraProps = {};

            if (this.options.withRef) {
              extraProps.ref = function (c) {
                _this2.wrappedInstance = c;
              };
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__I18n__["a" /* default */], _extends({ ns: namespaces }, this.options, this.props, { i18n: this.i18n }), function (t, context) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({}, _this2.props, extraProps, context));
            });
          }
        }]);

        return Translate;
      }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

      Translate.WrappedComponent = WrappedComponent;

      Translate.contextTypes = {
        i18n: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
      };

      Translate.displayName = 'Translate(' + getDisplayName(WrappedComponent) + ')';

      Translate.namespaces = namespaces;

      return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(Translate, WrappedComponent);
    };
  }

  translate.setDefaults = __WEBPACK_IMPORTED_MODULE_3__context__["d" /* setDefaults */];

  translate.setI18n = __WEBPACK_IMPORTED_MODULE_3__context__["e" /* setI18n */];

  /***/ }),

  /***/ "./node_modules/react/cjs/react.development.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.0.0
   * react.development.js
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  if (process.env.NODE_ENV !== "production") {
  (function() {

  'use strict';

  var objectAssign$1 = __webpack_require__("./node_modules/object-assign/index.js");
  var require$$0 = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var emptyObject = __webpack_require__("./node_modules/fbjs/lib/emptyObject.js");
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
  var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule reactProdInvariant
   *
   */

  {
    var warning = require$$0;
  }

  function warnNoop(publicInstance, callerName) {
    {
      var constructor = publicInstance.constructor;
      warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
    }
  }

  /**
   * This is the abstract API for an update queue.
   */
  var ReactNoopUpdateQueue = {
    /**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function (publicInstance) {
      return false;
    },

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */
    enqueueForceUpdate: function (publicInstance, callback, callerName) {
      warnNoop(publicInstance, 'forceUpdate');
    },

    /**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} completeState Next state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */
    enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
      warnNoop(publicInstance, 'replaceState');
    },

    /**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} partialState Next partial state to be merged with state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} Name of the calling function in the public API.
     * @internal
     */
    enqueueSetState: function (publicInstance, partialState, callback, callerName) {
      warnNoop(publicInstance, 'setState');
    }
  };

  var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule lowPriorityWarning
   */

  /**
   * Forked from fbjs/warning:
   * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
   *
   * Only change is we use console.warn instead of console.error,
   * and do nothing when 'console' is not supported.
   * This really simplifies the code.
   * ---
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var lowPriorityWarning = function () {};

  {
    var printWarning = function (format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.warn(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    lowPriorityWarning = function (condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var lowPriorityWarning_1 = lowPriorityWarning;

  /**
   * Base class helpers for the updating state of a component.
   */
  function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue_1;
  }

  ReactComponent.prototype.isReactComponent = {};

  /**
   * Sets a subset of the state. Always use this to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * When a function is provided to setState, it will be called at some point in
   * the future (not synchronously). It will be called with the up to date
   * component arguments (state, props, context). These values can be different
   * from this.* because your function may be called after receiveProps but before
   * shouldComponentUpdate, and this new state, props, and context will not yet be
   * assigned to this.
   *
   * @param {object|function} partialState Next partial state or function to
   *        produce next partial state to be merged with current state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  ReactComponent.prototype.setState = function (partialState, callback) {
    !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
    this.updater.enqueueSetState(this, partialState, callback, 'setState');
  };

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {?function} callback Called after update is complete.
   * @final
   * @protected
   */
  ReactComponent.prototype.forceUpdate = function (callback) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
  };

  /**
   * Deprecated APIs. These APIs used to exist on classic React classes but since
   * we would like to deprecate them, we're not going to move them over to this
   * modern base class. Instead, we define a getter that warns if it's accessed.
   */
  {
    var deprecatedAPIs = {
      isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
      replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
    };
    var defineDeprecationWarning = function (methodName, info) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    };
    for (var fnName in deprecatedAPIs) {
      if (deprecatedAPIs.hasOwnProperty(fnName)) {
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
    }
  }

  /**
   * Base class helpers for the updating state of a component.
   */
  function ReactPureComponent(props, context, updater) {
    // Duplicated from ReactComponent.
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue_1;
  }

  function ComponentDummy() {}
  ComponentDummy.prototype = ReactComponent.prototype;
  var pureComponentPrototype = ReactPureComponent.prototype = new ComponentDummy();
  pureComponentPrototype.constructor = ReactPureComponent;
  // Avoid an extra prototype jump for these methods.
  objectAssign$1(pureComponentPrototype, ReactComponent.prototype);
  pureComponentPrototype.isPureReactComponent = true;

  function ReactAsyncComponent(props, context, updater) {
    // Duplicated from ReactComponent.
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue_1;
  }

  var asyncComponentPrototype = ReactAsyncComponent.prototype = new ComponentDummy();
  asyncComponentPrototype.constructor = ReactAsyncComponent;
  // Avoid an extra prototype jump for these methods.
  objectAssign$1(asyncComponentPrototype, ReactComponent.prototype);
  asyncComponentPrototype.unstable_isAsyncReactComponent = true;
  asyncComponentPrototype.render = function () {
    return this.props.children;
  };

  var ReactBaseClasses = {
    Component: ReactComponent,
    PureComponent: ReactPureComponent,
    AsyncComponent: ReactAsyncComponent
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule ReactCurrentOwner
   *
   */

  /**
   * Keeps track of the current owner.
   *
   * The current owner is the component who should own any components that are
   * currently being constructed.
   */
  var ReactCurrentOwner = {
    /**
     * @internal
     * @type {ReactComponent}
     */
    current: null
  };

  var ReactCurrentOwner_1 = ReactCurrentOwner;

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  {
    var warning$2 = require$$0;
  }

  // The Symbol used to tag the ReactElement type. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE$1 = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };

  var specialPropKeyWarningShown;
  var specialPropRefWarningShown;

  function hasValidRef(config) {
    {
      if (hasOwnProperty.call(config, 'ref')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.ref !== undefined;
  }

  function hasValidKey(config) {
    {
      if (hasOwnProperty.call(config, 'key')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.key !== undefined;
  }

  function defineKeyPropWarningGetter(props, displayName) {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;
        warning$2(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    };
    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }

  function defineRefPropWarningGetter(props, displayName) {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;
        warning$2(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    };
    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }

  /**
   * Factory method to create a new React element. This no longer adheres to
   * the class pattern, so do not use new to call it. Also, no instanceof check
   * will work. Instead test $$typeof field against Symbol.for('react.element') to check
   * if something is a React Element.
   *
   * @param {*} type
   * @param {*} key
   * @param {string|object} ref
   * @param {*} self A *temporary* helper to detect places where `this` is
   * different from the `owner` when React.createElement is called, so that we
   * can warn. We want to get rid of owner and replace string `ref`s with arrow
   * functions, and as long as `this` and owner are the same, there will be no
   * change in behavior.
   * @param {*} source An annotation object (added by a transpiler or otherwise)
   * indicating filename, line number, and/or other information.
   * @param {*} owner
   * @param {*} props
   * @internal
   */
  var ReactElement = function (type, key, ref, self, source, owner, props) {
    var element = {
      // This tag allow us to uniquely identify this as a React Element
      $$typeof: REACT_ELEMENT_TYPE$1,

      // Built-in properties that belong on the element
      type: type,
      key: key,
      ref: ref,
      props: props,

      // Record the component responsible for creating this element.
      _owner: owner
    };

    {
      // The validation flag is currently mutative. We put it on
      // an external backing store so that we can freeze the whole object.
      // This can be replaced with a WeakMap once they are implemented in
      // commonly used development environments.
      element._store = {};

      // To make comparing ReactElements easier for testing purposes, we make
      // the validation flag non-enumerable (where possible, which should
      // include every environment we run tests in), so the test framework
      // ignores it.
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
      if (Object.freeze) {
        Object.freeze(element.props);
        Object.freeze(element);
      }
    }

    return element;
  };

  /**
   * Create and return a new ReactElement of the given type.
   * See https://facebook.github.io/react/docs/react-api.html#createelement
   */
  ReactElement.createElement = function (type, config, children) {
    var propName;

    // Reserved names are extracted
    var props = {};

    var key = null;
    var ref = null;
    var self = null;
    var source = null;

    if (config != null) {
      if (hasValidRef(config)) {
        ref = config.ref;
      }
      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      self = config.__self === undefined ? null : config.__self;
      source = config.__source === undefined ? null : config.__source;
      // Remaining properties are added to a new props object
      for (propName in config) {
        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      {
        if (Object.freeze) {
          Object.freeze(childArray);
        }
      }
      props.children = childArray;
    }

    // Resolve default props
    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;
      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }
    {
      if (key || ref) {
        if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE$1) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
  };

  /**
   * Return a function that produces ReactElements of a given type.
   * See https://facebook.github.io/react/docs/react-api.html#createfactory
   */
  ReactElement.createFactory = function (type) {
    var factory = ReactElement.createElement.bind(null, type);
    // Expose the type on the factory and the prototype so that it can be
    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
    // This should not be named `constructor` since this may not be the function
    // that created the element, and it may not even be a constructor.
    // Legacy hook TODO: Warn if this is accessed
    factory.type = type;
    return factory;
  };

  ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

    return newElement;
  };

  /**
   * Clone and return a new ReactElement using element as the starting point.
   * See https://facebook.github.io/react/docs/react-api.html#cloneelement
   */
  ReactElement.cloneElement = function (element, config, children) {
    var propName;

    // Original props are copied
    var props = objectAssign$1({}, element.props);

    // Reserved names are extracted
    var key = element.key;
    var ref = element.ref;
    // Self is preserved since the owner is preserved.
    var self = element._self;
    // Source is preserved since cloneElement is unlikely to be targeted by a
    // transpiler, and the original source is probably a better indicator of the
    // true owner.
    var source = element._source;

    // Owner will be preserved, unless ref is overridden
    var owner = element._owner;

    if (config != null) {
      if (hasValidRef(config)) {
        // Silently steal the ref from the parent.
        ref = config.ref;
        owner = ReactCurrentOwner_1.current;
      }
      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      // Remaining properties override existing props
      var defaultProps;
      if (element.type && element.type.defaultProps) {
        defaultProps = element.type.defaultProps;
      }
      for (propName in config) {
        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          if (config[propName] === undefined && defaultProps !== undefined) {
            // Resolve default props
            props[propName] = defaultProps[propName];
          } else {
            props[propName] = config[propName];
          }
        }
      }
    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }

    return ReactElement(element.type, key, ref, self, source, owner, props);
  };

  /**
   * Verifies the object is a ReactElement.
   * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
   * @param {?object} object
   * @return {boolean} True if `object` is a valid component.
   * @final
   */
  ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE$1;
  };

  var ReactElement_1 = ReactElement;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule ReactDebugCurrentFrame
   *
   */

  var ReactDebugCurrentFrame = {};

  {
    // Component that is being worked on
    ReactDebugCurrentFrame.getCurrentStack = null;

    ReactDebugCurrentFrame.getStackAddendum = function () {
      var impl = ReactDebugCurrentFrame.getCurrentStack;
      if (impl) {
        return impl();
      }
      return null;
    };
  }

  var ReactDebugCurrentFrame_1 = ReactDebugCurrentFrame;

  {
    var warning$1 = require$$0;

    var _require = ReactDebugCurrentFrame_1,
        getStackAddendum = _require.getStackAddendum;
  }

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
  // The Symbol used to tag the ReactElement type. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var SEPARATOR = '.';
  var SUBSEPARATOR = ':';

  /**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */
  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
      return escaperLookup[match];
    });

    return '$' + escapedString;
  }

  /**
   * TODO: Test that a single child and an array with one item have the same key
   * pattern.
   */

  var didWarnAboutMaps = false;

  var userProvidedKeyEscapeRegex = /\/+/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }

  var POOL_SIZE = 10;
  var traverseContextPool = [];
  function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
    if (traverseContextPool.length) {
      var traverseContext = traverseContextPool.pop();
      traverseContext.result = mapResult;
      traverseContext.keyPrefix = keyPrefix;
      traverseContext.func = mapFunction;
      traverseContext.context = mapContext;
      traverseContext.count = 0;
      return traverseContext;
    } else {
      return {
        result: mapResult,
        keyPrefix: keyPrefix,
        func: mapFunction,
        context: mapContext,
        count: 0
      };
    }
  }

  function releaseTraverseContext(traverseContext) {
    traverseContext.result = null;
    traverseContext.keyPrefix = null;
    traverseContext.func = null;
    traverseContext.context = null;
    traverseContext.count = 0;
    if (traverseContextPool.length < POOL_SIZE) {
      traverseContextPool.push(traverseContext);
    }
  }

  /**
   * @param {?*} children Children tree container.
   * @param {!string} nameSoFar Name of the key path so far.
   * @param {!function} callback Callback to invoke with each child found.
   * @param {?*} traverseContext Used to pass information throughout the traversal
   * process.
   * @return {!number} The number of children in this subtree.
   */
  function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = typeof children;

    if (type === 'undefined' || type === 'boolean') {
      // All of the above are perceived as null.
      children = null;
    }

    if (children === null || type === 'string' || type === 'number' ||
    // The following is inlined from ReactElement. This means we can optimize
    // some checks. React Fiber also inlines this logic for similar purposes.
    type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
      callback(traverseContext, children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
      return 1;
    }

    var child;
    var nextName;
    var subtreeCount = 0; // Count of children found in the current subtree.
    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        nextName = nextNamePrefix + getComponentKey(child, i);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else {
      var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];
      if (typeof iteratorFn === 'function') {
        {
          // Warn about using Maps as children
          if (iteratorFn === children.entries) {
            warning$1(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getStackAddendum());
            didWarnAboutMaps = true;
          }
        }

        var iterator = iteratorFn.call(children);
        var step;
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else if (type === 'object') {
        var addendum = '';
        {
          addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getStackAddendum();
        }
        var childrenString = '' + children;
        invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
      }
    }

    return subtreeCount;
  }

  /**
   * Traverses children that are typically specified as `props.children`, but
   * might also be specified through attributes:
   *
   * - `traverseAllChildren(this.props.children, ...)`
   * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
   *
   * The `traverseContext` is an optional argument that is passed through the
   * entire traversal. It can be used to store accumulations or anything else that
   * the callback might find relevant.
   *
   * @param {?*} children Children tree object.
   * @param {!function} callback To invoke upon traversing each child.
   * @param {?*} traverseContext Context for traversal.
   * @return {!number} The number of children in this subtree.
   */
  function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
      return 0;
    }

    return traverseAllChildrenImpl(children, '', callback, traverseContext);
  }

  /**
   * Generate a key string that identifies a component within a set.
   *
   * @param {*} component A component that could contain a manual key.
   * @param {number} index Index that is used if a manual key is not provided.
   * @return {string}
   */
  function getComponentKey(component, index) {
    // Do some typechecking here since we call this blindly. We want to ensure
    // that we don't block potential future ES APIs.
    if (typeof component === 'object' && component !== null && component.key != null) {
      // Explicit key
      return escape(component.key);
    }
    // Implicit key determined by the index in the set
    return index.toString(36);
  }

  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func,
        context = bookKeeping.context;

    func.call(context, child, bookKeeping.count++);
  }

  /**
   * Iterates through children that are typically specified as `props.children`.
   *
   * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} forEachFunc
   * @param {*} forEachContext Context for forEachContext.
   */
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    releaseTraverseContext(traverseContext);
  }

  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result,
        keyPrefix = bookKeeping.keyPrefix,
        func = bookKeeping.func,
        context = bookKeeping.context;


    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (ReactElement_1.isValidElement(mappedChild)) {
        mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }

  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    releaseTraverseContext(traverseContext);
  }

  /**
   * Maps children that are typically specified as `props.children`.
   *
   * See https://facebook.github.io/react/docs/react-api.html#react.children.map
   *
   * The provided mapFunction(child, key, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func The map function.
   * @param {*} context Context for mapFunction.
   * @return {object} Object containing the ordered map of results.
   */
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }

  /**
   * Count the number of children that are typically specified as
   * `props.children`.
   *
   * See https://facebook.github.io/react/docs/react-api.html#react.children.count
   *
   * @param {?*} children Children tree container.
   * @return {number} The number of children.
   */
  function countChildren(children, context) {
    return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
  }

  /**
   * Flatten a children object (typically specified as `props.children`) and
   * return an array with appropriately re-keyed children.
   *
   * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
   */
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
  }

  var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    count: countChildren,
    toArray: toArray
  };

  var ReactChildren_1 = ReactChildren;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule ReactVersion
   */

  var ReactVersion = '16.0.0';

  /**
   * Returns the first child in a collection of children and verifies that there
   * is only one child in the collection.
   *
   * See https://facebook.github.io/react/docs/react-api.html#react.children.only
   *
   * The current implementation of this function assumes that a single child gets
   * passed without a wrapper, but the purpose of this helper function is to
   * abstract away the particular structure of children.
   *
   * @param {?object} children Child collection structure.
   * @return {ReactElement} The first and only `ReactElement` contained in the
   * structure.
   */
  function onlyChild(children) {
    !ReactElement_1.isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
    return children;
  }

  var onlyChild_1 = onlyChild;

  /**
   * Copyright (c) 2016-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   * @providesModule describeComponentFrame
   */

  var describeComponentFrame$1 = function (name, source, ownerName) {
    return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @providesModule getComponentName
   *
   */

  function getComponentName$1(instanceOrFiber) {
    if (typeof instanceOrFiber.getName === 'function') {
      // Stack reconciler
      var instance = instanceOrFiber;
      return instance.getName();
    }
    if (typeof instanceOrFiber.tag === 'number') {
      // Fiber reconciler
      var fiber = instanceOrFiber;
      var type = fiber.type;

      if (typeof type === 'string') {
        return type;
      }
      if (typeof type === 'function') {
        return type.displayName || type.name;
      }
    }
    return null;
  }

  var getComponentName_1 = getComponentName$1;

  {
    var checkPropTypes$1 = checkPropTypes;
    var lowPriorityWarning$1 = lowPriorityWarning_1;
    var ReactDebugCurrentFrame$1 = ReactDebugCurrentFrame_1;
    var warning$3 = require$$0;
    var describeComponentFrame = describeComponentFrame$1;
    var getComponentName = getComponentName_1;

    var currentlyValidatingElement = null;

    var getDisplayName = function (element) {
      if (element == null) {
        return '#empty';
      } else if (typeof element === 'string' || typeof element === 'number') {
        return '#text';
      } else if (typeof element.type === 'string') {
        return element.type;
      } else {
        return element.type.displayName || element.type.name || 'Unknown';
      }
    };

    var getStackAddendum$1 = function () {
      var stack = '';
      if (currentlyValidatingElement) {
        var name = getDisplayName(currentlyValidatingElement);
        var owner = currentlyValidatingElement._owner;
        stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
      }
      stack += ReactDebugCurrentFrame$1.getStackAddendum() || '';
      return stack;
    };
  }

  var ITERATOR_SYMBOL$1 = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL$1 = '@@iterator'; // Before Symbol spec.

  function getDeclarationErrorAddendum() {
    if (ReactCurrentOwner_1.current) {
      var name = getComponentName(ReactCurrentOwner_1.current);
      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }
    return '';
  }

  function getSourceInfoErrorAddendum(elementProps) {
    if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
      var source = elementProps.__source;
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }
    return '';
  }

  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
  var ownerHasKeyUseWarning = {};

  function getCurrentComponentErrorInfo(parentType) {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      if (parentName) {
        info = '\n\nCheck the top-level render call using <' + parentName + '>.';
      }
    }
    return info;
  }

  /**
   * Warn if the element doesn't have an explicit key assigned to it.
   * This element is in an array. The array could grow and shrink or be
   * reordered. All children that haven't already been validated are required to
   * have a "key" property assigned to it. Error statuses are cached so a warning
   * will only be shown once.
   *
   * @internal
   * @param {ReactElement} element Element that requires a key.
   * @param {*} parentType element's parent's type.
   */
  function validateExplicitKey(element, parentType) {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }
    element._store.validated = true;

    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }
    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

    // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.
    var childOwner = '';
    if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
      // Give the component that originally created this child.
      childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
    }

    currentlyValidatingElement = element;
    {
      warning$3(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum$1());
    }
    currentlyValidatingElement = null;
  }

  /**
   * Ensure that every element either is passed in a static location, in an
   * array with an explicit keys property defined, or in an object literal
   * with valid key property.
   *
   * @internal
   * @param {ReactNode} node Statically passed child of any type.
   * @param {*} parentType node's parent's type.
   */
  function validateChildKeys(node, parentType) {
    if (typeof node !== 'object') {
      return;
    }
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];
        if (ReactElement_1.isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (ReactElement_1.isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = ITERATOR_SYMBOL$1 && node[ITERATOR_SYMBOL$1] || node[FAUX_ITERATOR_SYMBOL$1];
      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;
          while (!(step = iterator.next()).done) {
            if (ReactElement_1.isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }

  /**
   * Given an element, validate that its props follow the propTypes definition,
   * provided by the type.
   *
   * @param {ReactElement} element
   */
  function validatePropTypes(element) {
    var componentClass = element.type;
    if (typeof componentClass !== 'function') {
      return;
    }
    var name = componentClass.displayName || componentClass.name;
    var propTypes = componentClass.propTypes;

    if (propTypes) {
      currentlyValidatingElement = element;
      checkPropTypes$1(propTypes, element.props, 'prop', name, getStackAddendum$1);
      currentlyValidatingElement = null;
    }
    if (typeof componentClass.getDefaultProps === 'function') {
      warning$3(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }

  var ReactElementValidator$1 = {
    createElement: function (type, props, children) {
      var validType = typeof type === 'string' || typeof type === 'function';
      // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.
      if (!validType) {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactDebugCurrentFrame$1.getStackAddendum() || '';

        warning$3(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
      }

      var element = ReactElement_1.createElement.apply(this, arguments);

      // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.
      if (element == null) {
        return element;
      }

      // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)
      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      validatePropTypes(element);

      return element;
    },

    createFactory: function (type) {
      var validatedFactory = ReactElementValidator$1.createElement.bind(null, type);
      // Legacy hook TODO: Warn if this is accessed
      validatedFactory.type = type;

      {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }

      return validatedFactory;
    },

    cloneElement: function (element, props, children) {
      var newElement = ReactElement_1.cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }
  };

  var ReactElementValidator_1 = ReactElementValidator$1;

  {
    var warning$4 = require$$0;
  }

  function isNative(fn) {
    // Based on isNative() from Lodash
    var funcToString = Function.prototype.toString;
    var reIsNative = RegExp('^' + funcToString
    // Take an example native function source for comparison
    .call(Object.prototype.hasOwnProperty)
    // Strip regex characters so we can use it for regex
    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
    // Remove hasOwnProperty from the template to make it generic
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    try {
      var source = funcToString.call(fn);
      return reIsNative.test(source);
    } catch (err) {
      return false;
    }
  }

  var canUseCollections =
  // Array.from
  typeof Array.from === 'function' &&
  // Map
  typeof Map === 'function' && isNative(Map) &&
  // Map.prototype.keys
  Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
  // Set
  typeof Set === 'function' && isNative(Set) &&
  // Set.prototype.keys
  Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

  var setItem;
  var getItem;
  var removeItem;
  var getItemIDs;
  var addRoot;
  var removeRoot;
  var getRootIDs;

  if (canUseCollections) {
    var itemMap = new Map();
    var rootIDSet = new Set();

    setItem = function (id, item) {
      itemMap.set(id, item);
    };
    getItem = function (id) {
      return itemMap.get(id);
    };
    removeItem = function (id) {
      itemMap['delete'](id);
    };
    getItemIDs = function () {
      return Array.from(itemMap.keys());
    };

    addRoot = function (id) {
      rootIDSet.add(id);
    };
    removeRoot = function (id) {
      rootIDSet['delete'](id);
    };
    getRootIDs = function () {
      return Array.from(rootIDSet.keys());
    };
  } else {
    var itemByKey = {};
    var rootByKey = {};

    // Use non-numeric keys to prevent V8 performance issues:
    // https://github.com/facebook/react/pull/7232
    var getKeyFromID = function (id) {
      return '.' + id;
    };
    var getIDFromKey = function (key) {
      return parseInt(key.substr(1), 10);
    };

    setItem = function (id, item) {
      var key = getKeyFromID(id);
      itemByKey[key] = item;
    };
    getItem = function (id) {
      var key = getKeyFromID(id);
      return itemByKey[key];
    };
    removeItem = function (id) {
      var key = getKeyFromID(id);
      delete itemByKey[key];
    };
    getItemIDs = function () {
      return Object.keys(itemByKey).map(getIDFromKey);
    };

    addRoot = function (id) {
      var key = getKeyFromID(id);
      rootByKey[key] = true;
    };
    removeRoot = function (id) {
      var key = getKeyFromID(id);
      delete rootByKey[key];
    };
    getRootIDs = function () {
      return Object.keys(rootByKey).map(getIDFromKey);
    };
  }

  var unmountedIDs = [];

  function purgeDeep(id) {
    var item = getItem(id);
    if (item) {
      var childIDs = item.childIDs;

      removeItem(id);
      childIDs.forEach(purgeDeep);
    }
  }

  function getDisplayName$1(element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  }

  function describeID(id) {
    var name = ReactComponentTreeHook.getDisplayName(id);
    var element = ReactComponentTreeHook.getElement(id);
    var ownerID = ReactComponentTreeHook.getOwnerID(id);
    var ownerName = void 0;

    if (ownerID) {
      ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
    }
    warning$4(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
    return describeComponentFrame$1(name || '', element && element._source, ownerName || '');
  }

  var ReactComponentTreeHook = {
    onSetChildren: function (id, nextChildIDs) {
      var item = getItem(id);
      !item ? invariant(false, 'Item must have been set') : void 0;
      item.childIDs = nextChildIDs;

      for (var i = 0; i < nextChildIDs.length; i++) {
        var nextChildID = nextChildIDs[i];
        var nextChild = getItem(nextChildID);
        !nextChild ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
        !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
        !nextChild.isMounted ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
        if (nextChild.parentID == null) {
          nextChild.parentID = id;
          // TODO: This shouldn't be necessary but mounting a new root during in
          // componentWillMount currently causes not-yet-mounted components to
          // be purged from our tree data so their parent id is missing.
        }
        !(nextChild.parentID === id) ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
      }
    },
    onBeforeMountComponent: function (id, element, parentID) {
      var item = {
        element: element,
        parentID: parentID,
        text: null,
        childIDs: [],
        isMounted: false,
        updateCount: 0
      };
      setItem(id, item);
    },
    onBeforeUpdateComponent: function (id, element) {
      var item = getItem(id);
      if (!item || !item.isMounted) {
        // We may end up here as a result of setState() in componentWillUnmount().
        // In this case, ignore the element.
        return;
      }
      item.element = element;
    },
    onMountComponent: function (id) {
      var item = getItem(id);
      !item ? invariant(false, 'Item must have been set') : void 0;
      item.isMounted = true;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        addRoot(id);
      }
    },
    onUpdateComponent: function (id) {
      var item = getItem(id);
      if (!item || !item.isMounted) {
        // We may end up here as a result of setState() in componentWillUnmount().
        // In this case, ignore the element.
        return;
      }
      item.updateCount++;
    },
    onUnmountComponent: function (id) {
      var item = getItem(id);
      if (item) {
        // We need to check if it exists.
        // `item` might not exist if it is inside an error boundary, and a sibling
        // error boundary child threw while mounting. Then this instance never
        // got a chance to mount, but it still gets an unmounting event during
        // the error boundary cleanup.
        item.isMounted = false;
        var isRoot = item.parentID === 0;
        if (isRoot) {
          removeRoot(id);
        }
      }
      unmountedIDs.push(id);
    },
    purgeUnmountedComponents: function () {
      if (ReactComponentTreeHook._preventPurging) {
        // Should only be used for testing.
        return;
      }

      for (var i = 0; i < unmountedIDs.length; i++) {
        var id = unmountedIDs[i];
        purgeDeep(id);
      }
      unmountedIDs.length = 0;
    },
    isMounted: function (id) {
      var item = getItem(id);
      return item ? item.isMounted : false;
    },
    getCurrentStackAddendum: function () {
      var info = '';
      var currentOwner = ReactCurrentOwner_1.current;
      if (currentOwner) {
        !(typeof currentOwner.tag !== 'number') ? invariant(false, 'Fiber owners should not show up in Stack stack traces.') : void 0;
        if (typeof currentOwner._debugID === 'number') {
          info += ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);
        }
      }
      return info;
    },
    getStackAddendumByID: function (id) {
      var info = '';
      while (id) {
        info += describeID(id);
        id = ReactComponentTreeHook.getParentID(id);
      }
      return info;
    },
    getChildIDs: function (id) {
      var item = getItem(id);
      return item ? item.childIDs : [];
    },
    getDisplayName: function (id) {
      var element = ReactComponentTreeHook.getElement(id);
      if (!element) {
        return null;
      }
      return getDisplayName$1(element);
    },
    getElement: function (id) {
      var item = getItem(id);
      return item ? item.element : null;
    },
    getOwnerID: function (id) {
      var element = ReactComponentTreeHook.getElement(id);
      if (!element || !element._owner) {
        return null;
      }
      return element._owner._debugID;
    },
    getParentID: function (id) {
      var item = getItem(id);
      return item ? item.parentID : null;
    },
    getSource: function (id) {
      var item = getItem(id);
      var element = item ? item.element : null;
      var source = element != null ? element._source : null;
      return source;
    },
    getText: function (id) {
      var element = ReactComponentTreeHook.getElement(id);
      if (typeof element === 'string') {
        return element;
      } else if (typeof element === 'number') {
        return '' + element;
      } else {
        return null;
      }
    },
    getUpdateCount: function (id) {
      var item = getItem(id);
      return item ? item.updateCount : 0;
    },


    getRootIDs: getRootIDs,
    getRegisteredIDs: getItemIDs
  };

  var ReactComponentTreeHook_1 = ReactComponentTreeHook;

  var createElement = ReactElement_1.createElement;
  var createFactory = ReactElement_1.createFactory;
  var cloneElement = ReactElement_1.cloneElement;

  {
    var ReactElementValidator = ReactElementValidator_1;
    createElement = ReactElementValidator.createElement;
    createFactory = ReactElementValidator.createFactory;
    cloneElement = ReactElementValidator.cloneElement;
  }

  var React = {
    Children: {
      map: ReactChildren_1.map,
      forEach: ReactChildren_1.forEach,
      count: ReactChildren_1.count,
      toArray: ReactChildren_1.toArray,
      only: onlyChild_1
    },

    Component: ReactBaseClasses.Component,
    PureComponent: ReactBaseClasses.PureComponent,
    unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

    createElement: createElement,
    cloneElement: cloneElement,
    isValidElement: ReactElement_1.isValidElement,

    createFactory: createFactory,

    version: ReactVersion,

    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
      ReactCurrentOwner: ReactCurrentOwner_1,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: objectAssign$1
    }
  };

  {
    objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
      // These should not be included in production.
      ReactComponentTreeHook: ReactComponentTreeHook_1,
      ReactDebugCurrentFrame: ReactDebugCurrentFrame_1
    });
  }

  var ReactEntry = React;

  module.exports = ReactEntry;

  })();
  }

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/react/cjs/react.production.min.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /*
   React v16.0.0
   react.production.min.js

   Copyright (c) 2013-present, Facebook, Inc.

   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
  */
  var f=__webpack_require__("./node_modules/object-assign/index.js"),p=__webpack_require__("./node_modules/fbjs/lib/emptyObject.js");__webpack_require__("./node_modules/fbjs/lib/invariant.js");var r=__webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
  function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++)d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
  var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
  function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}function x(){}x.prototype=v.prototype;var y=w.prototype=new x;y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u}var A=z.prototype=new x;A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children};
  var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g}}
  G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b)D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++)h[n]=arguments[n+2];c.children=h}if(a&&a.defaultProps)for(e in l=a.defaultProps,l)void 0===c[e]&&(c[e]=l[e]);return G(a,g,k,m,q,C.current,c)};
  G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props)};
  G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b)D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++)l[n]=arguments[n+2];e.children=l}return G(a.type,c,g,k,m,q,e)};
  G.isValidElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===E};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var J=/\/+/g,K=[];
  function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:e,count:0}}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a)}
  function N(a,b,d,e){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e)}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;)c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+
  Object.keys(a).join(", ")+"}":d,""));return g}function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function P(a,b){a.func.call(a.context,b,a.count++)}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a))}
  function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b)}var S={forEach:function(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b)},map:function(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e},count:function(a){return null==a?0:N(a,"",r.thatReturnsNull,null)},toArray:function(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b}};
  module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(a){G.isValidElement(a)?void 0:t("143");return a}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};


  /***/ }),

  /***/ "./node_modules/react/index.js":
  /***/ (function(module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = __webpack_require__("./node_modules/react/cjs/react.production.min.js");
  } else {
    module.exports = __webpack_require__("./node_modules/react/cjs/react.development.js");
  }

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

  /***/ }),

  /***/ "./node_modules/void-elements/index.js":
  /***/ (function(module, exports) {

  /**
   * This file automatically generated from `pre-publish.js`.
   * Do not manually edit.
   */

  module.exports = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "keygen": true,
    "link": true,
    "menuitem": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
  };


  /***/ })

  /******/ });
