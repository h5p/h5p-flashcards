/******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId])
    /******/ 			return installedModules[moduleId].exports;
    /******/
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
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function(value) { return value; };
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
  /******/ 	return __webpack_require__(__webpack_require__.s = 9);
  /******/ })
/************************************************************************/
/******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toggleVisibility = exports.show = exports.hide = exports.nodeListToArray = exports.classListContains = exports.removeChild = exports.querySelectorAll = exports.querySelector = exports.appendChild = exports.toggleAttribute = exports.attributeEquals = exports.hasAttribute = exports.removeAttribute = exports.setAttribute = exports.getAttribute = undefined;

    var _functional = __webpack_require__(1);

    /**
     * Get an attribute value from element
     *
     * @param {string} name
     * @param {HTMLElement} el
     *
     * @function
     * @return {string}
     */
    var getAttribute = exports.getAttribute = (0, _functional.curry)(function (name, el) {
      return el.getAttribute(name);
    });

    /**
     * Set an attribute on a html element
     *
     * @param {string} name
     * @param {string} value
     * @param {HTMLElement} el
     *
     * @function
     */
    var setAttribute = exports.setAttribute = (0, _functional.curry)(function (name, value, el) {
      return el.setAttribute(name, value);
    });

    /**
     * Remove attribute from html element
     *
     * @param {string} name
     * @param {HTMLElement} el
     *
     * @function
     */
    var removeAttribute = exports.removeAttribute = (0, _functional.curry)(function (name, el) {
      return el.removeAttribute(name);
    });

    /**
     * Check if element has an attribute
     *
     * @param {string} name
     * @param {HTMLElement} el
     *
     * @function
     * @return {boolean}
     */
    var hasAttribute = exports.hasAttribute = (0, _functional.curry)(function (name, el) {
      return el.hasAttribute(name);
    });

    /**
     * Check if element has an attribute that equals
     *
     * @param {string} name
     * @param {string} value
     * @param {HTMLElement} el
     *
     * @function
     * @return {boolean}
     */
    var attributeEquals = exports.attributeEquals = (0, _functional.curry)(function (name, value, el) {
      return el.getAttribute(name) === value;
    });

    /**
     * Toggles an attribute between 'true' and 'false';
     *
     * @param {string} name
     * @param {HTMLElement} el
     *
     * @function
     */
    var toggleAttribute = exports.toggleAttribute = (0, _functional.curry)(function (name, el) {
      var value = getAttribute(name, el);
      setAttribute(name, (0, _functional.inverseBooleanString)(value), el);
    });

    /**
     * The appendChild() method adds a node to the end of the list of children of a specified parent node.
     *
     * @param {HTMLElement} parent
     * @param {HTMLElement} child
     *
     * @function
     * @return {HTMLElement}
     */
    var appendChild = exports.appendChild = (0, _functional.curry)(function (parent, child) {
      return parent.appendChild(child);
    });

    /**
     * Returns the first element that is a descendant of the element on which it is invoked
     * that matches the specified group of selectors.
     *
     * @param {string} selector
     * @param {HTMLElement} el
     *
     * @function
     * @return {HTMLElement}
     */
    var querySelector = exports.querySelector = (0, _functional.curry)(function (selector, el) {
      return el.querySelector(selector);
    });

    /**
     * Returns a non-live NodeList of all elements descended from the element on which it
     * is invoked that matches the specified group of CSS selectors.
     *
     * @param {string} selector
     * @param {HTMLElement} el
     *
     * @function
     * @return {NodeList}
     */
    var querySelectorAll = exports.querySelectorAll = (0, _functional.curry)(function (selector, el) {
      return el.querySelectorAll(selector);
    });

    /**
     * The removeChild() method removes a child node from the DOM. Returns removed node.
     *
     * @param {Node} parent
     * @param {Node} oldChild
     *
     * @return {Node}
     */
    var removeChild = exports.removeChild = (0, _functional.curry)(function (parent, oldChild) {
      return parent.removeChild(oldChild);
    });

    /**
     * Returns true if a node has a class
     *
     * @param {string} cls
     * @param {HTMLElement} el
     *
     * @function
     */
    var classListContains = exports.classListContains = (0, _functional.curry)(function (cls, el) {
      return el.classList.contains(cls);
    });

    /**
     * Transforms a NodeList to an Array
     *
     * @param {NodeList} nodeList
     *
     * @return {Node[]}
     */
    var nodeListToArray = exports.nodeListToArray = function nodeListToArray(nodeList) {
      return Array.prototype.slice.call(nodeList);
    };

    /**
     * Adds aria-hidden=true to an element
     *
     * @param {HTMLElement} element
     * @function
     */
    var hide = exports.hide = setAttribute('aria-hidden', 'true');

    /**
     * Adds aria-hidden=false to an element
     * @function
     */
    var show = exports.show = setAttribute('aria-hidden', 'false');

    /**
     * Toggles aria-hidden on an element
     *
     * @param {boolean} visible
     * @param {HTMLElement} element
     */
    var toggleVisibility = exports.toggleVisibility = (0, _functional.curry)(function (visible, element) {
      return (visible ? show : hide)(element);
    });

    /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Returns a curried version of a function
     *
     * @param {function} fn
     *
     * @public
     *
     * @return {function}
     */
    var curry = exports.curry = function curry(fn) {
      var arity = fn.length;

      return function f1() {
        var args = Array.prototype.slice.call(arguments, 0);
        if (args.length >= arity) {
          return fn.apply(null, args);
        } else {
          return function f2() {
            var args2 = Array.prototype.slice.call(arguments, 0);
            return f1.apply(null, args.concat(args2));
          };
        }
      };
    };

    /**
     * Compose functions together, executing from right to left
     *
     * @param {function...} fns
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var compose = exports.compose = function compose() {
      for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return fns.reduce(function (f, g) {
        return function () {
          return f(g.apply(undefined, arguments));
        };
      });
    };

    /**
     * Applies a function to each element in an array
     *
     * @param {function} fn
     * @param {Array} arr
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var forEach = exports.forEach = curry(function (fn, arr) {
      arr.forEach(fn);
    });

    /**
     * Maps a function to an array
     *
     * @param {function} fn
     * @param {Array} arr
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var map = exports.map = curry(function (fn, arr) {
      return arr.map(fn);
    });

    /**
     * Applies a filter to an array
     *
     * @param {function} fn
     * @param {Array} arr
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var filter = exports.filter = curry(function (fn, arr) {
      return arr.filter(fn);
    });

    /**
     * Applies a some to an array
     *
     * @param {function} fn
     * @param {Array} arr
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var some = exports.some = curry(function (fn, arr) {
      return arr.some(fn);
    });

    /**
     * Returns true if an array contains a value
     *
     * @param {*} value
     * @param {Array} arr
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var contains = exports.contains = curry(function (value, arr) {
      return arr.indexOf(value) != -1;
    });

    /**
     * Returns an array without the supplied values
     *
     * @param {Array} values
     * @param {Array} arr
     *
     * @function
     * @public
     *
     * @return {function}
     */
    var without = exports.without = curry(function (values, arr) {
      return filter(function (value) {
        return !contains(value, values);
      }, arr);
    });

    /**
     * Takes a string that is either 'true' or 'false' and returns the opposite
     *
     * @param {string} bool
     *
     * @public
     * @return {string}
     */
    var inverseBooleanString = exports.inverseBooleanString = function inverseBooleanString(bool) {
      return (bool !== 'true').toString();
    };

    /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _elements = __webpack_require__(0);

    var _functional = __webpack_require__(1);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @type {string}
     * @readonly
     */
    var ATTRIBUTE_ARIA_GRABBED = 'aria-grabbed';

    /**
     * @type {function} setGrabbedTrue
     * @param {HTMLElement} element
     */
    var setGrabbed = (0, _elements.setAttribute)(ATTRIBUTE_ARIA_GRABBED);

    /**
     * @type {function} isGrabbed
     * @param {HTMLElement} element
     */
    var isGrabbed = (0, _elements.attributeEquals)(ATTRIBUTE_ARIA_GRABBED, 'true');

    /**
     * @type {function} filterHasAttributeDropEffect
     */
    var filterHasAttributeGrabbed = (0, _functional.filter)((0, _elements.hasAttribute)(ATTRIBUTE_ARIA_GRABBED));

    /**
     * Sets all aria-grabbed to 'false'
     * @param {HTMLElement[]} elements
     * @type {function} setAllGrabbedToFalse
     */
    var _setAllGrabbedToFalse = (0, _functional.compose)((0, _functional.forEach)((0, _elements.setAttribute)(ATTRIBUTE_ARIA_GRABBED, 'false')), filterHasAttributeGrabbed);

    /**
     * @type {function} hasGrabbed
     * @param {HTMLElement[]} elements
     */
    var hasGrabbed = (0, _functional.compose)((0, _functional.some)(isGrabbed), filterHasAttributeGrabbed);

    /**
     * @class
     */

    var Drag = function () {
      function Drag() {
        _classCallCheck(this, Drag);
      }

      _createClass(Drag, [{
        key: 'init',

        /**
         * Inits this class
         *
         * @param {Controls} controls
         */
        value: function init(controls) {
          /**
           * @type {Controls}
           */
          this.controls = controls;

          // handle select event
          this.controls.on('select', this.select, this);
        }
      }, {
        key: 'addElement',


        /**
         * Marks element as aria-grabbed = 'false' and adds to controller
         *
         * @param element
         */
        value: function addElement(element) {
          setGrabbed('false', element);
          this.controls.addElement(element);
        }

        /**
         * Sets aria-grabbed to 'false' for all elements that has it
         */

      }, {
        key: 'setAllGrabbedToFalse',
        value: function setAllGrabbedToFalse() {
          _setAllGrabbedToFalse(this.controls.elements);
        }

        /**
         * Returns true if any of the elements are grabbed
         *
         * @return {boolean}
         */

      }, {
        key: 'hasAnyGrabbed',
        value: function hasAnyGrabbed() {
          return hasGrabbed(this.controls.elements);
        }

        /**
         * Un selects all, but selects new element if not already selected
         *
         * @param {HTMLElement} element
         */

      }, {
        key: 'select',
        value: function select(_ref) {
          var element = _ref.element;

          var alreadyGrabbed = isGrabbed(element);

          this.setAllGrabbedToFalse();

          if (!alreadyGrabbed) {
            setGrabbed('true', element);
          }
        }
      }]);

      return Drag;
    }();

    exports.default = Drag;

    /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _elements = __webpack_require__(0);

    var _functional = __webpack_require__(1);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @type {string}
     * @readonly
     */
    var ATTRIBUTE_ARIA_DROPEFFECT = 'aria-dropeffect';

    /**
     * @type {function} setDropEffectNone
     */
    var setDropEffectNone = (0, _elements.setAttribute)(ATTRIBUTE_ARIA_DROPEFFECT, 'none');

    /**
     * @type {function} setDropEffectNone
     */
    var setDropEffectMove = (0, _elements.setAttribute)(ATTRIBUTE_ARIA_DROPEFFECT, 'move');

    /**
     * @type {function} filterHasAttributeDropEffect
     */
    var filterHasAttributeDropEffect = (0, _functional.filter)((0, _elements.hasAttribute)(ATTRIBUTE_ARIA_DROPEFFECT));

    /**
     * Sets all drop zones to move
     * @param {HTMLElement[]} elements
     * @type {function} setDropZoneEffectsToMove
     */
    var setAllDropEffectsToMove = (0, _functional.compose)((0, _functional.forEach)(setDropEffectMove), filterHasAttributeDropEffect);

    /**
     * Sets all drop zones to none
     * @param {HTMLElement[]} elements
     * @type {function} setAllDropEffectsToNone
     */
    var setAllDropEffectsToNone = (0, _functional.compose)((0, _functional.forEach)(setDropEffectNone), filterHasAttributeDropEffect);

    /**
     * Class for handling Drop Zones
     *
     * @class
     */

    var Drop = function () {
      function Drop() {
        _classCallCheck(this, Drop);
      }

      _createClass(Drop, [{
        key: 'init',

        /**
         * Inits this class
         * @param {Controls} controls
         */
        value: function init(controls) {
          /**
           * @type {Controls}
           */
          this.controls = controls;
        }
      }, {
        key: 'setAllToMove',


        /**
         * On elements with aria-dropeffect, set aria-dropeffect to 'move'
         * @public
         */
        value: function setAllToMove() {
          setAllDropEffectsToMove(this.controls.elements);
        }

        /**
         * On elements with aria-dropeffect, set aria-dropeffect to 'none'
         * @public
         */

      }, {
        key: 'setAllToNone',
        value: function setAllToNone() {
          setAllDropEffectsToNone(this.controls.elements);
        }
      }]);

      return Drop;
    }();

    /**
     * Enum for ARIA drop effects
     * @readonly
     * @enum {string}
     */


    exports.default = Drop;
    Drop.DropEffect = {
      COPY: 'copy',
      MOVE: 'move',
      EXECUTE: 'execute',
      POPUP: 'popup',
      NONE: 'none'
    };

    /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _elements = __webpack_require__(0);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Choice = function () {
      function Choice() {
        _classCallCheck(this, Choice);

        /**
         * @type {function}
         * @param {HTMLElement} el
         */
        this.removeAriaSelected = (0, _elements.removeAttribute)('aria-selected');
        /**
         * @type {function}
         * @param {HTMLElement} el
         */
        this.addAriaSelected = (0, _elements.setAttribute)('aria-selected', 'true');
      }

      /**
       * Inits this class
       *
       * @param {Controls} controls
       */


      _createClass(Choice, [{
        key: 'init',
        value: function init(controls) {
          /**
           * @type {Controls}
           */
          this.controls = controls;
          this.controls.on('select', this.select, this);
        }
      }, {
        key: 'select',


        /**
         * Toggles aria-selected on element
         *
         * @param {HTMLElement} element
         * @param {HTMLElement} oldElement
         */
        value: function select(_ref) {
          var element = _ref.element,
            oldElement = _ref.oldElement;

          if (element === oldElement) {
            this.removeAriaSelected(element);
          } else {
            this.addAriaSelected(element);
          }
        }
      }]);

      return Choice;
    }();

    exports.default = Choice;

    /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _elements = __webpack_require__(0);

    var _functional = __webpack_require__(1);

    var _eventful = __webpack_require__(8);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * Controls Event
     * @typedef {Object} ControlsEvent
     * @property {HTMLElement} element
     * @property {number} index
     * @property {HTMLElement[]} elements
     * @property {HTMLElement} oldElement
     */
    /**
     * Add element event
     * @event Controls#addElement
     * @type ControlsEvent
     */
    /**
     * Remove element event
     * @event Controls#removeElement
     * @type ControlsEvent
     */
    /**
     * Previous element event
     * @event Controls#previousElement
     * @type ControlsEvent
     */
    /**
     * Next element event
     * @event Controls#nextElement
     * @type ControlsEvent
     */
    /**
     * Select option event
     * @event Controls#select
     * @type ControlsEvent
     */
    /**
     * Drag element event
     * @event Controls#drag
     * @type ControlsEvent
     */

    /**
     * @type {function} removeTabIndex
     */
    var removeTabIndex = (0, _elements.removeAttribute)('tabindex');
    /**
     * @type {function} removeTabIndexForAll
     */
    var removeTabIndexForAll = (0, _functional.forEach)(removeTabIndex);
    /**
     * @type {function} setTabIndexZero
     */
    var setTabIndexZero = (0, _elements.setAttribute)('tabindex', '0');
    /**
     * @type {function} hasTabIndex
     */
    var hasTabIndex = (0, _elements.hasAttribute)('tabindex');

    /**
     * @class
     * @mixes Eventful
     */

    var Controls = function () {
      function Controls(plugins) {
        _classCallCheck(this, Controls);

        // add event system
        _extends(this, (0, _eventful.Eventful)());

        /**
         *@property {HTMLElement} tabbableElement
         */
        /**
         * @property {object[]} plugins
         */
        this.plugins = plugins || [];

        /**
         * @property {HTMLElement[]} elements
         */
        this.elements = [];

        // move tabindex to next element
        this.on('nextElement', this.nextElement, this);

        // move tabindex to previous element
        this.on('previousElement', this.previousElement, this);

        // init plugins
        this.initPlugins();
      }

      /**
       * Add controls to an element
       *
       * @param {HTMLElement} el
       *
       * @fires Controls#addElement
       * @public
       */


      _createClass(Controls, [{
        key: 'addElement',
        value: function addElement(el) {
          this.elements.push(el);

          this.firesEvent('addElement', el);

          if (this.elements.length === 1) {
            // if first
            this.setTabbable(el);
          }
        }
      }, {
        key: 'removeElement',


        /**
         * Add controls to an element
         *
         * @param {HTMLElement} el
         *
         * @fires Controls#addElement
         * @public
         */
        value: function removeElement(el) {
          this.elements = (0, _functional.without)([el], this.elements);

          // if removed element was selected
          if (hasTabIndex(el)) {
            removeTabIndex(el);

            // set first element selected if exists
            if (this.elements[0]) {
              this.setTabbable(this.elements[0]);
            }
          }

          this.firesEvent('removeElement', el);
        }
      }, {
        key: 'firesEvent',


        /**
         * Fire event
         *
         * @param {string} type
         * @param {HTMLElement|EventTarget} el
         *
         * @public
         */
        value: function firesEvent(type, el) {
          var index = this.elements.indexOf(el);

          this.fire(type, {
            element: el,
            index: index,
            elements: this.elements,
            oldElement: this.tabbableElement
          });
        }

        /**
         * Sets tabindex on an element, remove it from all others
         *
         * @param {number} index
         *
         * @private
         */

      }, {
        key: 'nextElement',
        value: function nextElement(_ref) {
          var index = _ref.index;

          var isLastElement = index === this.elements.length - 1;
          var nextEl = this.elements[isLastElement ? 0 : index + 1];

          this.setTabbable(nextEl);
          nextEl.focus();
        }

        /**
         * Sets tabindex on an element, remove it from all others
         *
         * @param {HTMLElement} el
         * @public
         */

      }, {
        key: 'setTabbable',
        value: function setTabbable(el) {
          removeTabIndexForAll(this.elements);
          setTabIndexZero(el);
          this.tabbableElement = el;
        }

        /**
         * Sets tabindex on an element, remove it from all others
         *
         * @param {number} index
         *
         * @private
         */

      }, {
        key: 'previousElement',
        value: function previousElement(_ref2) {
          var index = _ref2.index;

          var isFirstElement = index === 0;
          var prevEl = this.elements[isFirstElement ? this.elements.length - 1 : index - 1];

          this.setTabbable(prevEl);
          prevEl.focus();
        }

        /**
         * Initializes the plugins
         *
         * @private
         */

      }, {
        key: 'initPlugins',
        value: function initPlugins() {
          this.plugins.forEach(function (plugin) {
            if (plugin.init !== undefined) {
              plugin.init(this);
            }
          }, this);
        }
      }]);

      return Controls;
    }();

    exports.default = Controls;

    /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class
     * @classdesc Keyboard navigation for accessibility support
     */
    var Keyboard = function () {
      function Keyboard() {
        _classCallCheck(this, Keyboard);

        /**
         * @property {boolean} selectability
         */
        this.selectability = true;
      }

      /**
       * Inits this class
       *
       * @param {Controls} controls
       */


      _createClass(Keyboard, [{
        key: 'init',
        value: function init(controls) {
          /**
           * Need to have a common binding of handleKeyDown, so that it can be a
           * common instance to be used for addEventListener and removeEventListener
           * @type {function}
           */
          this.boundHandleKeyDown = this.handleKeyDown.bind(this);

          /**
           * @type {Controls}
           */
          this.controls = controls;
          this.controls.on('addElement', this.listenForKeyDown, this);
          this.controls.on('removeElement', this.removeKeyDownListener, this);
        }
      }, {
        key: 'listenForKeyDown',


        /**
         * Listens for a keyboard press when element is focused
         *
         * @param {HTMLElement} element
         * @private
         */
        value: function listenForKeyDown(_ref) {
          var element = _ref.element;

          element.addEventListener('keydown', this.boundHandleKeyDown);
        }
      }, {
        key: 'removeKeyDownListener',


        /**
         * Remove a keyboard press listener
         *
         * @param {HTMLElement} element
         * @private
         */
        value: function removeKeyDownListener(_ref2) {
          var element = _ref2.element;

          element.removeEventListener('keydown', this.boundHandleKeyDown);
        }
      }, {
        key: 'handleKeyDown',


        /**
         * Handles key down
         *
         * @param {KeyboardEvent} event Keyboard event
         * @private
         */
        value: function handleKeyDown(event) {
          switch (event.which) {
            case 13: // Enter
            case 32:
              // Space
              this.select(event.target);
              event.preventDefault();
              break;

            case 37: // Left Arrow
            case 38:
              // Up Arrow
              this.previousElement(event.target);
              event.preventDefault();
              break;
            case 39: // Right Arrow
            case 40:
              // Down Arrow
              this.nextElement(event.target);
              event.preventDefault();
              break;
          }
        }
      }, {
        key: 'previousElement',


        /**
         * Fires the previous element event
         *
         * @param {HTMLElement|EventTarget} el
         * @fires Controls#previousElement
         */
        value: function previousElement(el) {
          this.controls.firesEvent('previousElement', el);
        }
      }, {
        key: 'nextElement',


        /**
         * Fire the next element event
         *
         * @param {HTMLElement|EventTarget} el
         * @fires Controls#nextElement
         */
        value: function nextElement(el) {
          this.controls.firesEvent('nextElement', el);
        }
      }, {
        key: 'select',


        /**
         * Fires the select event
         *
         * @param {EventTarget|HTMLElement} el
         * @fires Controls#select
         */
        value: function select(el) {
          if (this.selectability) {
            if (this.controls.firesEvent('before-select', el) !== false) {
              this.controls.firesEvent('select', el);
              this.controls.firesEvent('after-select', el);
            }
          }
        }
      }, {
        key: 'disableSelectability',


        /**
         * Disable possibility to select a word trough click and space or enter
         *
         * @public
         */
        value: function disableSelectability() {
          this.selectability = false;
        }
      }, {
        key: 'enableSelectability',


        /**
         * Enable possibility to select a word trough click and space or enter
         *
         * @public
         */
        value: function enableSelectability() {
          this.selectability = true;
        }
      }]);

      return Keyboard;
    }();

    exports.default = Keyboard;

    /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * @class
     * @classdesc Keyboard navigation for accessibility support
     */
    var Mouse = function () {
      function Mouse() {
        _classCallCheck(this, Mouse);

        /**
         * @property {boolean} selectability
         */
        this.selectability = true;
      }

      /**
       * Inits this class
       *
       * @param {Controls} controls
       */


      _createClass(Mouse, [{
        key: 'init',
        value: function init(controls) {
          /**
           * @type {Controls}
           */
          this.controls = controls;
          this.controls.on('addElement', this.listenForKeyDown, this);
        }
      }, {
        key: 'listenForKeyDown',


        /**
         * Listens for a keyboard press when element is focused
         *
         * @param {HTMLElement} element
         * @private
         */
        value: function listenForKeyDown(_ref) {
          var element = _ref.element;

          element.addEventListener('click', this.handleClick.bind(this));
          element.addEventListener('drag', this.handleDrag.bind(this));
        }
      }, {
        key: 'handleClick',


        /**
         * Handles mouseClick
         *
         * @param {MouseEvent} event Keyboard event
         * @private
         */
        value: function handleClick(event) {
          this.controls.firesEvent('select', event.currentTarget);
        }
      }, {
        key: 'handleDrag',


        /**
         * Handles key down
         *
         * @param {MouseEvent} event Keyboard event
         * @private
         */
        value: function handleDrag(event) {
          this.controls.firesEvent('drag', event.currentTarget);
        }
      }, {
        key: 'disableSelectability',


        /**
         * Disable possibility to select a word trough click and space or enter
         *
         * @public
         */
        value: function disableSelectability() {
          this.selectability = false;
        }
      }, {
        key: 'enableSelectability',


        /**
         * Enable possibility to select a word trough click and space or enter
         *
         * @public
         */
        value: function enableSelectability() {
          this.selectability = true;
        }
      }]);

      return Mouse;
    }();

    exports.default = Mouse;

    /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * @mixin
     */
    var Eventful = exports.Eventful = function Eventful() {
      return {
        listeners: {},

        /**
         * Listen to event
         *
         * @param {string} type
         * @param {function} listener
         * @param {object} [scope]
         *
         * @function
         * @return {Eventful}
         */
        on: function on(type, listener, scope) {
          /**
           * @typedef {object} Trigger
           * @property {function} listener
           * @property {object} scope
           */
          var trigger = {
            'listener': listener,
            'scope': scope
          };

          this.listeners[type] = this.listeners[type] || [];
          this.listeners[type].push(trigger);

          return this;
        },

        /**
         * Fire event. If any of the listeners returns false, return false
         *
         * @param {string} type
         * @param {object} [event]
         *
         * @function
         * @return {boolean}
         */
        fire: function fire(type, event) {
          var triggers = this.listeners[type] || [];

          return triggers.every(function (trigger) {
            return trigger.listener.call(trigger.scope || this, event) !== false;
          });
        },

        /**
         * Listens for events on another Eventful, and propagate it trough this Eventful
         *
         * @param {string[]} types
         * @param {Eventful} eventful
         */
        propagate: function propagate(types, eventful) {
          var self = this;
          types.forEach(function (type) {
            return eventful.on(type, function (event) {
              return self.fire(type, event);
            });
          });
        }
      };
    };

    /***/ }),
  /* 9 */
  /***/ (function(module, exports, __webpack_require__) {

    "use strict";


// Load library
    H5P.Controls = __webpack_require__(5).default;
    H5P.Controls.UIKeyboard = __webpack_require__(6).default;
    H5P.Controls.UIMouse = __webpack_require__(7).default;
    H5P.Controls.AriaDrag = __webpack_require__(2).default;
    H5P.Controls.AriaDrop = __webpack_require__(3).default;
    H5P.Controls.AriaSelected = __webpack_require__(4).default;

    /***/ })
  /******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmZmODIzNjJkM2M1ZTNkMjk5NDciLCJ3ZWJwYWNrOi8vLy4uL2g1cC1zZGsvc3JjL3NjcmlwdHMvdXRpbHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL2g1cC1zZGsvc3JjL3NjcmlwdHMvdXRpbHMvZnVuY3Rpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcmlhL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXJpYS9kcm9wLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FyaWEvc2VsZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdWkva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdWkvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWl4aW5zL2V2ZW50ZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2Rpc3QuanMiXSwibmFtZXMiOlsiZ2V0QXR0cmlidXRlIiwibmFtZSIsImVsIiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVFcXVhbHMiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInBhcmVudCIsImNoaWxkIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwib2xkQ2hpbGQiLCJjbGFzc0xpc3RDb250YWlucyIsImNscyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibm9kZUxpc3RUb0FycmF5IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJub2RlTGlzdCIsImhpZGUiLCJzaG93IiwidG9nZ2xlVmlzaWJpbGl0eSIsInZpc2libGUiLCJlbGVtZW50IiwiY3VycnkiLCJmbiIsImFyaXR5IiwibGVuZ3RoIiwiZjEiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJmMiIsImFyZ3MyIiwiY29uY2F0IiwiY29tcG9zZSIsImZucyIsInJlZHVjZSIsImYiLCJnIiwiZm9yRWFjaCIsImFyciIsIm1hcCIsImZpbHRlciIsInNvbWUiLCJpbmRleE9mIiwid2l0aG91dCIsInZhbHVlcyIsImludmVyc2VCb29sZWFuU3RyaW5nIiwiYm9vbCIsInRvU3RyaW5nIiwiQVRUUklCVVRFX0FSSUFfR1JBQkJFRCIsInNldEdyYWJiZWQiLCJpc0dyYWJiZWQiLCJmaWx0ZXJIYXNBdHRyaWJ1dGVHcmFiYmVkIiwic2V0QWxsR3JhYmJlZFRvRmFsc2UiLCJoYXNHcmFiYmVkIiwiRHJhZyIsImNvbnRyb2xzIiwib24iLCJzZWxlY3QiLCJhZGRFbGVtZW50IiwiZWxlbWVudHMiLCJhbHJlYWR5R3JhYmJlZCIsIkFUVFJJQlVURV9BUklBX0RST1BFRkZFQ1QiLCJzZXREcm9wRWZmZWN0Tm9uZSIsInNldERyb3BFZmZlY3RNb3ZlIiwiZmlsdGVySGFzQXR0cmlidXRlRHJvcEVmZmVjdCIsInNldEFsbERyb3BFZmZlY3RzVG9Nb3ZlIiwic2V0QWxsRHJvcEVmZmVjdHNUb05vbmUiLCJEcm9wIiwiRHJvcEVmZmVjdCIsIkNPUFkiLCJNT1ZFIiwiRVhFQ1VURSIsIlBPUFVQIiwiTk9ORSIsIkNob2ljZSIsInJlbW92ZUFyaWFTZWxlY3RlZCIsImFkZEFyaWFTZWxlY3RlZCIsIm9sZEVsZW1lbnQiLCJyZW1vdmVUYWJJbmRleCIsInJlbW92ZVRhYkluZGV4Rm9yQWxsIiwic2V0VGFiSW5kZXhaZXJvIiwiaGFzVGFiSW5kZXgiLCJDb250cm9scyIsInBsdWdpbnMiLCJuZXh0RWxlbWVudCIsInByZXZpb3VzRWxlbWVudCIsImluaXRQbHVnaW5zIiwicHVzaCIsImZpcmVzRXZlbnQiLCJzZXRUYWJiYWJsZSIsInR5cGUiLCJpbmRleCIsImZpcmUiLCJ0YWJiYWJsZUVsZW1lbnQiLCJpc0xhc3RFbGVtZW50IiwibmV4dEVsIiwiZm9jdXMiLCJpc0ZpcnN0RWxlbWVudCIsInByZXZFbCIsInBsdWdpbiIsImluaXQiLCJ1bmRlZmluZWQiLCJLZXlib2FyZCIsInNlbGVjdGFiaWxpdHkiLCJib3VuZEhhbmRsZUtleURvd24iLCJoYW5kbGVLZXlEb3duIiwiYmluZCIsImxpc3RlbkZvcktleURvd24iLCJyZW1vdmVLZXlEb3duTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwid2hpY2giLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsIk1vdXNlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVEcmFnIiwiY3VycmVudFRhcmdldCIsIkV2ZW50ZnVsIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJzY29wZSIsInRyaWdnZXIiLCJ0cmlnZ2VycyIsImV2ZXJ5IiwicHJvcGFnYXRlIiwidHlwZXMiLCJldmVudGZ1bCIsInNlbGYiLCJINVAiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIlVJS2V5Ym9hcmQiLCJVSU1vdXNlIiwiQXJpYURyYWciLCJBcmlhRHJvcCIsIkFyaWFTZWxlY3RlZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7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bUJBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ25DLFVBQUlDLE9BQU8sSUFBWDtBQUNBRixZQUFNMUYsT0FBTixDQUFjO0FBQUEsZUFBUTJGLFNBQVN4RSxFQUFULENBQVlrQyxJQUFaLEVBQWtCO0FBQUEsaUJBQVN1QyxLQUFLckMsSUFBTCxDQUFVRixJQUFWLEVBQWdCcUIsS0FBaEIsQ0FBVDtBQUFBLFNBQWxCLENBQVI7QUFBQSxPQUFkO0FBQ0Q7QUF4RDRCLEdBQVA7QUFBQSxDQUFqQixDOzs7Ozs7Ozs7QUNIUDtBQUNBbUIsSUFBSWhELFFBQUosR0FBZSxtQkFBQWlELENBQVEsQ0FBUixFQUErQkMsT0FBOUM7QUFDQUYsSUFBSWhELFFBQUosQ0FBYW1ELFVBQWIsR0FBMEIsbUJBQUFGLENBQVEsQ0FBUixFQUFrQ0MsT0FBNUQ7QUFDQUYsSUFBSWhELFFBQUosQ0FBYW9ELE9BQWIsR0FBdUIsbUJBQUFILENBQVEsQ0FBUixFQUErQkMsT0FBdEQ7QUFDQUYsSUFBSWhELFFBQUosQ0FBYXFELFFBQWIsR0FBd0IsbUJBQUFKLENBQVEsQ0FBUixFQUFnQ0MsT0FBeEQ7QUFDQUYsSUFBSWhELFFBQUosQ0FBYXNELFFBQWIsR0FBd0IsbUJBQUFMLENBQVEsQ0FBUixFQUFnQ0MsT0FBeEQ7QUFDQUYsSUFBSWhELFFBQUosQ0FBYXVELFlBQWIsR0FBNEIsbUJBQUFOLENBQVEsQ0FBUixFQUFvQ0MsT0FBaEUsQyIsImZpbGUiOiJoNXAtc2RrLWNvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmZmODIzNjJkM2M1ZTNkMjk5NDciLCJpbXBvcnQge2N1cnJ5LCBpbnZlcnNlQm9vbGVhblN0cmluZ30gZnJvbSAnLi9mdW5jdGlvbmFsJ1xuXG4vKipcbiAqIEdldCBhbiBhdHRyaWJ1dGUgdmFsdWUgZnJvbSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBdHRyaWJ1dGUgPSBjdXJyeSgobmFtZSwgZWwpID0+IGVsLmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cbi8qKlxuICogU2V0IGFuIGF0dHJpYnV0ZSBvbiBhIGh0bWwgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBdHRyaWJ1dGUgPSBjdXJyeSgobmFtZSwgdmFsdWUsIGVsKSA9PiBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpKTtcblxuLyoqXG4gKiBSZW1vdmUgYXR0cmlidXRlIGZyb20gaHRtbCBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVBdHRyaWJ1dGUgPSBjdXJyeSgobmFtZSwgZWwpID0+IGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgZWxlbWVudCBoYXMgYW4gYXR0cmlidXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaGFzQXR0cmlidXRlID0gY3VycnkoKG5hbWUsIGVsKSA9PiBlbC5oYXNBdHRyaWJ1dGUobmFtZSkpO1xuXG4vKipcbiAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGFuIGF0dHJpYnV0ZSB0aGF0IGVxdWFsc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgYXR0cmlidXRlRXF1YWxzID0gY3VycnkoKG5hbWUsIHZhbHVlLCBlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKG5hbWUpID09PSB2YWx1ZSk7XG5cbi8qKlxuICogVG9nZ2xlcyBhbiBhdHRyaWJ1dGUgYmV0d2VlbiAndHJ1ZScgYW5kICdmYWxzZSc7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKlxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVBdHRyaWJ1dGUgPSBjdXJyeSgobmFtZSwgZWwpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBnZXRBdHRyaWJ1dGUobmFtZSwgZWwpO1xuICBzZXRBdHRyaWJ1dGUobmFtZSwgaW52ZXJzZUJvb2xlYW5TdHJpbmcodmFsdWUpLCBlbCk7XG59KTtcblxuLyoqXG4gKiBUaGUgYXBwZW5kQ2hpbGQoKSBtZXRob2QgYWRkcyBhIG5vZGUgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiBjaGlsZHJlbiBvZiBhIHNwZWNpZmllZCBwYXJlbnQgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNoaWxkXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZENoaWxkID0gY3VycnkoKHBhcmVudCwgY2hpbGQpID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyBhIGRlc2NlbmRhbnQgb2YgdGhlIGVsZW1lbnQgb24gd2hpY2ggaXQgaXMgaW52b2tlZFxuICogdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgZ3JvdXAgb2Ygc2VsZWN0b3JzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RvciA9IGN1cnJ5KChzZWxlY3RvciwgZWwpID0+IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbm9uLWxpdmUgTm9kZUxpc3Qgb2YgYWxsIGVsZW1lbnRzIGRlc2NlbmRlZCBmcm9tIHRoZSBlbGVtZW50IG9uIHdoaWNoIGl0XG4gKiBpcyBpbnZva2VkIHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGdyb3VwIG9mIENTUyBzZWxlY3RvcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICpcbiAqIEBmdW5jdGlvblxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdG9yQWxsID0gY3VycnkoKHNlbGVjdG9yLCBlbCkgPT4gZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4vKipcbiAqIFRoZSByZW1vdmVDaGlsZCgpIG1ldGhvZCByZW1vdmVzIGEgY2hpbGQgbm9kZSBmcm9tIHRoZSBET00uIFJldHVybnMgcmVtb3ZlZCBub2RlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50XG4gKiBAcGFyYW0ge05vZGV9IG9sZENoaWxkXG4gKlxuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkID0gY3VycnkoKHBhcmVudCwgb2xkQ2hpbGQpID0+IHBhcmVudC5yZW1vdmVDaGlsZChvbGRDaGlsZCkpO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIG5vZGUgaGFzIGEgY2xhc3NcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICpcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgY2xhc3NMaXN0Q29udGFpbnMgPSBjdXJyeSgoY2xzLCBlbCkgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBOb2RlTGlzdCB0byBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVMaXN0XG4gKlxuICogQHJldHVybiB7Tm9kZVtdfVxuICovXG5leHBvcnQgY29uc3Qgbm9kZUxpc3RUb0FycmF5ID0gbm9kZUxpc3QgPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuXG4vKipcbiAqIEFkZHMgYXJpYS1oaWRkZW49dHJ1ZSB0byBhbiBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlID0gc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbi8qKlxuICogQWRkcyBhcmlhLWhpZGRlbj1mYWxzZSB0byBhbiBlbGVtZW50XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNob3cgPSBzZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbi8qKlxuICogVG9nZ2xlcyBhcmlhLWhpZGRlbiBvbiBhbiBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtib29sZWFufSB2aXNpYmxlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gY3VycnkoKHZpc2libGUsIGVsZW1lbnQpID0+ICh2aXNpYmxlID8gc2hvdyA6IGhpZGUpKGVsZW1lbnQpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vaDVwLXNkay9zcmMvc2NyaXB0cy91dGlscy9lbGVtZW50cy5qcyIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgdmVyc2lvbiBvZiBhIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqXG4gKiBAcHVibGljXG4gKlxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBjdXJyeSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGNvbnN0IGFyaXR5ID0gZm4ubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiBmMSgpIHtcbiAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPj0gYXJpdHkpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gZjIoKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgcmV0dXJuIGYxLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGFyZ3MyKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBDb21wb3NlIGZ1bmN0aW9ucyB0b2dldGhlciwgZXhlY3V0aW5nIGZyb20gcmlnaHQgdG8gbGVmdFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24uLi59IGZuc1xuICpcbiAqIEBmdW5jdGlvblxuICogQHB1YmxpY1xuICpcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgY29tcG9zZSA9ICguLi5mbnMpID0+IGZucy5yZWR1Y2UoKGYsIGcpID0+ICguLi5hcmdzKSA9PiBmKGcoLi4uYXJncykpKTtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IGluIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICpcbiAqIEBmdW5jdGlvblxuICogQHB1YmxpY1xuICpcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZm9yRWFjaCA9IGN1cnJ5KGZ1bmN0aW9uIChmbiwgYXJyKSB7XG4gIGFyci5mb3JFYWNoKGZuKTtcbn0pO1xuXG4vKipcbiAqIE1hcHMgYSBmdW5jdGlvbiB0byBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwdWJsaWNcbiAqXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmbiwgYXJyKSB7XG4gIHJldHVybiBhcnIubWFwKGZuKTtcbn0pO1xuXG4vKipcbiAqIEFwcGxpZXMgYSBmaWx0ZXIgdG8gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcHVibGljXG4gKlxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSBjdXJyeShmdW5jdGlvbiAoZm4sIGFycikge1xuICByZXR1cm4gYXJyLmZpbHRlcihmbik7XG59KTtcblxuLyoqXG4gKiBBcHBsaWVzIGEgc29tZSB0byBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwdWJsaWNcbiAqXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNvbWUgPSBjdXJyeShmdW5jdGlvbiAoZm4sIGFycikge1xuICByZXR1cm4gYXJyLnNvbWUoZm4pO1xufSk7XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIGFycmF5IGNvbnRhaW5zIGEgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwdWJsaWNcbiAqXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gY3VycnkoZnVuY3Rpb24gKHZhbHVlLCBhcnIpIHtcbiAgcmV0dXJuIGFyci5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbn0pO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgd2l0aG91dCB0aGUgc3VwcGxpZWQgdmFsdWVzXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwdWJsaWNcbiAqXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IHdpdGhvdXQgPSBjdXJyeShmdW5jdGlvbiAodmFsdWVzLCBhcnIpIHtcbiAgcmV0dXJuIGZpbHRlcih2YWx1ZSA9PiAhY29udGFpbnModmFsdWUsIHZhbHVlcyksIGFycilcbn0pO1xuXG4vKipcbiAqIFRha2VzIGEgc3RyaW5nIHRoYXQgaXMgZWl0aGVyICd0cnVlJyBvciAnZmFsc2UnIGFuZCByZXR1cm5zIHRoZSBvcHBvc2l0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBib29sXG4gKlxuICogQHB1YmxpY1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgaW52ZXJzZUJvb2xlYW5TdHJpbmcgPSBmdW5jdGlvbiAoYm9vbCkge1xuICByZXR1cm4gKGJvb2wgIT09ICd0cnVlJykudG9TdHJpbmcoKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2g1cC1zZGsvc3JjL3NjcmlwdHMvdXRpbHMvZnVuY3Rpb25hbC5qcyIsImltcG9ydCB7YXR0cmlidXRlRXF1YWxzLCBoYXNBdHRyaWJ1dGUsIHNldEF0dHJpYnV0ZX0gZnJvbSAndXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHtjb21wb3NlLCBmb3JFYWNoLCBmaWx0ZXIsIHNvbWUsIGN1cnJ5fSBmcm9tICd1dGlscy9mdW5jdGlvbmFsJztcblxuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKi9cbmNvbnN0IEFUVFJJQlVURV9BUklBX0dSQUJCRUQgPSAnYXJpYS1ncmFiYmVkJztcblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb259IHNldEdyYWJiZWRUcnVlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmNvbnN0IHNldEdyYWJiZWQgPSBzZXRBdHRyaWJ1dGUoQVRUUklCVVRFX0FSSUFfR1JBQkJFRCk7XG5cbi8qKlxuICogQHR5cGUge2Z1bmN0aW9ufSBpc0dyYWJiZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuY29uc3QgaXNHcmFiYmVkID0gYXR0cmlidXRlRXF1YWxzKEFUVFJJQlVURV9BUklBX0dSQUJCRUQsICd0cnVlJyk7XG5cbi8qKlxuICogQHR5cGUge2Z1bmN0aW9ufSBmaWx0ZXJIYXNBdHRyaWJ1dGVEcm9wRWZmZWN0XG4gKi9cbmNvbnN0IGZpbHRlckhhc0F0dHJpYnV0ZUdyYWJiZWQgPSBmaWx0ZXIoaGFzQXR0cmlidXRlKEFUVFJJQlVURV9BUklBX0dSQUJCRUQpKTtcblxuLyoqXG4gKiBTZXRzIGFsbCBhcmlhLWdyYWJiZWQgdG8gJ2ZhbHNlJ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuICogQHR5cGUge2Z1bmN0aW9ufSBzZXRBbGxHcmFiYmVkVG9GYWxzZVxuICovXG5jb25zdCBzZXRBbGxHcmFiYmVkVG9GYWxzZSA9IGNvbXBvc2UoZm9yRWFjaChzZXRBdHRyaWJ1dGUoQVRUUklCVVRFX0FSSUFfR1JBQkJFRCwgJ2ZhbHNlJykpLCBmaWx0ZXJIYXNBdHRyaWJ1dGVHcmFiYmVkKTtcblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb259IGhhc0dyYWJiZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHNcbiAqL1xuY29uc3QgaGFzR3JhYmJlZCA9IGNvbXBvc2Uoc29tZShpc0dyYWJiZWQpLCBmaWx0ZXJIYXNBdHRyaWJ1dGVHcmFiYmVkKTtcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZyB7XG4gIC8qKlxuICAgKiBJbml0cyB0aGlzIGNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7Q29udHJvbHN9IGNvbnRyb2xzXG4gICAqL1xuICBpbml0KGNvbnRyb2xzKcKge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtDb250cm9sc31cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG5cbiAgICAvLyBoYW5kbGUgc2VsZWN0IGV2ZW50XG4gICAgdGhpcy5jb250cm9scy5vbignc2VsZWN0JywgdGhpcy5zZWxlY3QsIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYXJrcyBlbGVtZW50IGFzIGFyaWEtZ3JhYmJlZCA9ICdmYWxzZScgYW5kIGFkZHMgdG8gY29udHJvbGxlclxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgYWRkRWxlbWVudChlbGVtZW50KSB7XG4gICAgc2V0R3JhYmJlZCgnZmFsc2UnLCBlbGVtZW50KTtcbiAgICB0aGlzLmNvbnRyb2xzLmFkZEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhcmlhLWdyYWJiZWQgdG8gJ2ZhbHNlJyBmb3IgYWxsIGVsZW1lbnRzIHRoYXQgaGFzIGl0XG4gICAqL1xuICBzZXRBbGxHcmFiYmVkVG9GYWxzZSgpIHtcbiAgICBzZXRBbGxHcmFiYmVkVG9GYWxzZSh0aGlzLmNvbnRyb2xzLmVsZW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IG9mIHRoZSBlbGVtZW50cyBhcmUgZ3JhYmJlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQW55R3JhYmJlZCgpIHtcbiAgICByZXR1cm4gaGFzR3JhYmJlZCh0aGlzLmNvbnRyb2xzLmVsZW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFVuIHNlbGVjdHMgYWxsLCBidXQgc2VsZWN0cyBuZXcgZWxlbWVudCBpZiBub3QgYWxyZWFkeSBzZWxlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBzZWxlY3Qoe2VsZW1lbnR9KcKge1xuICAgIGNvbnN0IGFscmVhZHlHcmFiYmVkID0gaXNHcmFiYmVkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZXRBbGxHcmFiYmVkVG9GYWxzZSgpO1xuXG4gICAgaWYoIWFscmVhZHlHcmFiYmVkKSB7XG4gICAgICBzZXRHcmFiYmVkKCd0cnVlJywgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvYXJpYS9kcmFnLmpzIiwiaW1wb3J0IHtzZXRBdHRyaWJ1dGUsIGhhc0F0dHJpYnV0ZX0gZnJvbSAndXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHtjb21wb3NlLCBmb3JFYWNoLCBmaWx0ZXJ9IGZyb20gJ3V0aWxzL2Z1bmN0aW9uYWwnO1xuXG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqL1xuY29uc3QgQVRUUklCVVRFX0FSSUFfRFJPUEVGRkVDVCA9ICdhcmlhLWRyb3BlZmZlY3QnO1xuXG4vKipcbiAqIEB0eXBlIHtmdW5jdGlvbn0gc2V0RHJvcEVmZmVjdE5vbmVcbiAqL1xuY29uc3Qgc2V0RHJvcEVmZmVjdE5vbmUgPSBzZXRBdHRyaWJ1dGUoQVRUUklCVVRFX0FSSUFfRFJPUEVGRkVDVCwgJ25vbmUnKTtcblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb259IHNldERyb3BFZmZlY3ROb25lXG4gKi9cbmNvbnN0IHNldERyb3BFZmZlY3RNb3ZlID0gc2V0QXR0cmlidXRlKEFUVFJJQlVURV9BUklBX0RST1BFRkZFQ1QsICdtb3ZlJyk7XG5cbi8qKlxuICogQHR5cGUge2Z1bmN0aW9ufSBmaWx0ZXJIYXNBdHRyaWJ1dGVEcm9wRWZmZWN0XG4gKi9cbmNvbnN0IGZpbHRlckhhc0F0dHJpYnV0ZURyb3BFZmZlY3QgPSBmaWx0ZXIoaGFzQXR0cmlidXRlKEFUVFJJQlVURV9BUklBX0RST1BFRkZFQ1QpKTtcblxuLyoqXG4gKiBTZXRzIGFsbCBkcm9wIHpvbmVzIHRvIG1vdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHNcbiAqIEB0eXBlIHtmdW5jdGlvbn0gc2V0RHJvcFpvbmVFZmZlY3RzVG9Nb3ZlXG4gKi9cbmNvbnN0IHNldEFsbERyb3BFZmZlY3RzVG9Nb3ZlID0gY29tcG9zZShmb3JFYWNoKHNldERyb3BFZmZlY3RNb3ZlKSwgZmlsdGVySGFzQXR0cmlidXRlRHJvcEVmZmVjdCk7XG5cbi8qKlxuICogU2V0cyBhbGwgZHJvcCB6b25lcyB0byBub25lXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGVsZW1lbnRzXG4gKiBAdHlwZSB7ZnVuY3Rpb259IHNldEFsbERyb3BFZmZlY3RzVG9Ob25lXG4gKi9cbmNvbnN0IHNldEFsbERyb3BFZmZlY3RzVG9Ob25lID0gY29tcG9zZShmb3JFYWNoKHNldERyb3BFZmZlY3ROb25lKSwgZmlsdGVySGFzQXR0cmlidXRlRHJvcEVmZmVjdCk7XG5cbi8qKlxuICogQ2xhc3MgZm9yIGhhbmRsaW5nIERyb3AgWm9uZXNcbiAqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcCB7XG4gIC8qKlxuICAgKiBJbml0cyB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7Q29udHJvbHN9IGNvbnRyb2xzXG4gICAqL1xuICBpbml0KGNvbnRyb2xzKcKge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtDb250cm9sc31cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIE9uIGVsZW1lbnRzIHdpdGggYXJpYS1kcm9wZWZmZWN0LCBzZXQgYXJpYS1kcm9wZWZmZWN0IHRvICdtb3ZlJ1xuICAgKiBAcHVibGljXG4gICAqL1xuICBzZXRBbGxUb01vdmUoKSB7XG4gICAgc2V0QWxsRHJvcEVmZmVjdHNUb01vdmUodGhpcy5jb250cm9scy5lbGVtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogT24gZWxlbWVudHMgd2l0aCBhcmlhLWRyb3BlZmZlY3QsIHNldCBhcmlhLWRyb3BlZmZlY3QgdG8gJ25vbmUnXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldEFsbFRvTm9uZSgpIHtcbiAgICBzZXRBbGxEcm9wRWZmZWN0c1RvTm9uZSh0aGlzLmNvbnRyb2xzLmVsZW1lbnRzKTtcbiAgfVxufVxuXG4vKipcbiAqIEVudW0gZm9yIEFSSUEgZHJvcCBlZmZlY3RzXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbkRyb3AuRHJvcEVmZmVjdCA9IHtcbiAgQ09QWTogJ2NvcHknLFxuICBNT1ZFOiAnbW92ZScsXG4gIEVYRUNVVEU6ICdleGVjdXRlJyxcbiAgUE9QVVA6ICdwb3B1cCcsXG4gIE5PTkU6ICdub25lJ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9hcmlhL2Ryb3AuanMiLCJpbXBvcnQge3NldEF0dHJpYnV0ZSwgcmVtb3ZlQXR0cmlidXRlLCBhdHRyaWJ1dGVFcXVhbHN9IGZyb20gJ3V0aWxzL2VsZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKi9cbiAgICB0aGlzLnJlbW92ZUFyaWFTZWxlY3RlZCA9IHJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIHRoaXMuYWRkQXJpYVNlbGVjdGVkID0gc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyB0aGlzIGNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7Q29udHJvbHN9IGNvbnRyb2xzXG4gICAqL1xuICBpbml0KGNvbnRyb2xzKcKge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtDb250cm9sc31cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG4gICAgdGhpcy5jb250cm9scy5vbignc2VsZWN0JywgdGhpcy5zZWxlY3QsIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFyaWEtc2VsZWN0ZWQgb24gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9sZEVsZW1lbnRcbiAgICovXG4gIHNlbGVjdCh7ZWxlbWVudCwgb2xkRWxlbWVudH0pwqB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG9sZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXJpYVNlbGVjdGVkKGVsZW1lbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQXJpYVNlbGVjdGVkKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2FyaWEvc2VsZWN0ZWQuanMiLCJpbXBvcnQgeyBzZXRBdHRyaWJ1dGUsIHJlbW92ZUF0dHJpYnV0ZSwgaGFzQXR0cmlidXRlIH0gZnJvbSAndXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHsgZm9yRWFjaCwgd2l0aG91dCB9IGZyb20gJ3V0aWxzL2Z1bmN0aW9uYWwnO1xuaW1wb3J0IHsgRXZlbnRmdWwgfSBmcm9tICcuL21peGlucy9ldmVudGZ1bCc7XG5cbi8qKlxuICogQ29udHJvbHMgRXZlbnRcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENvbnRyb2xzRXZlbnRcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleFxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gb2xkRWxlbWVudFxuICovXG4vKipcbiAqIEFkZCBlbGVtZW50IGV2ZW50XG4gKiBAZXZlbnQgQ29udHJvbHMjYWRkRWxlbWVudFxuICogQHR5cGUgQ29udHJvbHNFdmVudFxuICovXG4vKipcbiAqIFJlbW92ZSBlbGVtZW50IGV2ZW50XG4gKiBAZXZlbnQgQ29udHJvbHMjcmVtb3ZlRWxlbWVudFxuICogQHR5cGUgQ29udHJvbHNFdmVudFxuICovXG4vKipcbiAqIFByZXZpb3VzIGVsZW1lbnQgZXZlbnRcbiAqIEBldmVudCBDb250cm9scyNwcmV2aW91c0VsZW1lbnRcbiAqIEB0eXBlIENvbnRyb2xzRXZlbnRcbiAqL1xuLyoqXG4gKiBOZXh0IGVsZW1lbnQgZXZlbnRcbiAqIEBldmVudCBDb250cm9scyNuZXh0RWxlbWVudFxuICogQHR5cGUgQ29udHJvbHNFdmVudFxuICovXG4vKipcbiAqIFNlbGVjdCBvcHRpb24gZXZlbnRcbiAqIEBldmVudCBDb250cm9scyNzZWxlY3RcbiAqIEB0eXBlIENvbnRyb2xzRXZlbnRcbiAqL1xuLyoqXG4gKiBEcmFnIGVsZW1lbnQgZXZlbnRcbiAqIEBldmVudCBDb250cm9scyNkcmFnXG4gKiBAdHlwZSBDb250cm9sc0V2ZW50XG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb259IHJlbW92ZVRhYkluZGV4XG4gKi9cbmNvbnN0IHJlbW92ZVRhYkluZGV4ID0gcmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb259IHJlbW92ZVRhYkluZGV4Rm9yQWxsXG4gKi9cbmNvbnN0IHJlbW92ZVRhYkluZGV4Rm9yQWxsID0gZm9yRWFjaChyZW1vdmVUYWJJbmRleCk7XG4vKipcbiAqIEB0eXBlIHtmdW5jdGlvbn0gc2V0VGFiSW5kZXhaZXJvXG4gKi9cbmNvbnN0IHNldFRhYkluZGV4WmVybyA9IHNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb259IGhhc1RhYkluZGV4XG4gKi9cbmNvbnN0IGhhc1RhYkluZGV4ID0gaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG1peGVzIEV2ZW50ZnVsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzIHtcbiAgY29uc3RydWN0b3IocGx1Z2lucykge1xuICAgIC8vIGFkZCBldmVudCBzeXN0ZW1cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIEV2ZW50ZnVsKCkpO1xuXG4gICAgLyoqXG4gICAgICpAcHJvcGVydHkge0hUTUxFbGVtZW50fSB0YWJiYWJsZUVsZW1lbnRcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge29iamVjdFtdfSBwbHVnaW5zXG4gICAgICovXG4gICAgdGhpcy5wbHVnaW5zID0gcGx1Z2lucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHNcbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICAvLyBtb3ZlIHRhYmluZGV4IHRvIG5leHQgZWxlbWVudFxuICAgIHRoaXMub24oJ25leHRFbGVtZW50JywgdGhpcy5uZXh0RWxlbWVudCwgdGhpcyk7XG5cbiAgICAvLyBtb3ZlIHRhYmluZGV4IHRvIHByZXZpb3VzIGVsZW1lbnRcbiAgICB0aGlzLm9uKCdwcmV2aW91c0VsZW1lbnQnLCB0aGlzLnByZXZpb3VzRWxlbWVudCwgdGhpcyk7XG5cbiAgICAvLyBpbml0IHBsdWdpbnNcbiAgICB0aGlzLmluaXRQbHVnaW5zKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNvbnRyb2xzIHRvIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICpcbiAgICogQGZpcmVzIENvbnRyb2xzI2FkZEVsZW1lbnRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYWRkRWxlbWVudChlbCnCoHtcbiAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWwpO1xuXG4gICAgdGhpcy5maXJlc0V2ZW50KCdhZGRFbGVtZW50JywgZWwpO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09PSAxKSB7IC8vIGlmIGZpcnN0XG4gICAgICB0aGlzLnNldFRhYmJhYmxlKGVsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBjb250cm9scyB0byBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqXG4gICAqIEBmaXJlcyBDb250cm9scyNhZGRFbGVtZW50XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHJlbW92ZUVsZW1lbnQoZWwpwqB7XG4gICAgdGhpcy5lbGVtZW50cyA9IHdpdGhvdXQoW2VsXSwgdGhpcy5lbGVtZW50cyk7XG5cbiAgICAvLyBpZiByZW1vdmVkIGVsZW1lbnQgd2FzIHNlbGVjdGVkXG4gICAgaWYoaGFzVGFiSW5kZXgoZWwpKSB7XG4gICAgICByZW1vdmVUYWJJbmRleChlbCk7XG5cbiAgICAgIC8vIHNldCBmaXJzdCBlbGVtZW50IHNlbGVjdGVkIGlmIGV4aXN0c1xuICAgICAgaWYodGhpcy5lbGVtZW50c1swXSkge1xuICAgICAgICB0aGlzLnNldFRhYmJhYmxlKHRoaXMuZWxlbWVudHNbMF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlyZXNFdmVudCgncmVtb3ZlRWxlbWVudCcsIGVsKTtcbiAgfTtcblxuICAvKipcbiAgICogRmlyZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fEV2ZW50VGFyZ2V0fSBlbFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBmaXJlc0V2ZW50KHR5cGUsIGVsKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmVsZW1lbnRzLmluZGV4T2YoZWwpO1xuXG4gICAgdGhpcy5maXJlKHR5cGUsIHtcbiAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZWxlbWVudHM6IHRoaXMuZWxlbWVudHMsXG4gICAgICBvbGRFbGVtZW50OiB0aGlzLnRhYmJhYmxlRWxlbWVudFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGFiaW5kZXggb24gYW4gZWxlbWVudCwgcmVtb3ZlIGl0IGZyb20gYWxsIG90aGVyc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG5leHRFbGVtZW50KHtpbmRleH0pIHtcbiAgICBjb25zdCBpc0xhc3RFbGVtZW50ID0gaW5kZXggPT09ICh0aGlzLmVsZW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IG5leHRFbCA9IHRoaXMuZWxlbWVudHNbaXNMYXN0RWxlbWVudCA/IDAgOiAoaW5kZXggKyAxKV07XG5cbiAgICB0aGlzLnNldFRhYmJhYmxlKG5leHRFbCk7XG4gICAgbmV4dEVsLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0YWJpbmRleCBvbiBhbiBlbGVtZW50LCByZW1vdmUgaXQgZnJvbSBhbGwgb3RoZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldFRhYmJhYmxlKGVsKSB7XG4gICAgcmVtb3ZlVGFiSW5kZXhGb3JBbGwodGhpcy5lbGVtZW50cyk7XG4gICAgc2V0VGFiSW5kZXhaZXJvKGVsKTtcbiAgICB0aGlzLnRhYmJhYmxlRWxlbWVudCA9IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGFiaW5kZXggb24gYW4gZWxlbWVudCwgcmVtb3ZlIGl0IGZyb20gYWxsIG90aGVyc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXZpb3VzRWxlbWVudCh7aW5kZXh9KSB7XG4gICAgY29uc3QgaXNGaXJzdEVsZW1lbnQgPSBpbmRleCA9PT0gMDtcbiAgICBjb25zdCBwcmV2RWwgPSB0aGlzLmVsZW1lbnRzW2lzRmlyc3RFbGVtZW50ID8gKHRoaXMuZWxlbWVudHMubGVuZ3RoIC0gMSkgOiAoaW5kZXggLSAxKV07XG5cbiAgICB0aGlzLnNldFRhYmJhYmxlKHByZXZFbCk7XG4gICAgcHJldkVsLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHBsdWdpbnNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRQbHVnaW5zKCnCoHtcbiAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pe1xuICAgICAgaWYocGx1Z2luLmluaXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHBsdWdpbi5pbml0KHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvY29udHJvbHMuanMiLCIvKipcbiAqIEBjbGFzc1xuICogQGNsYXNzZGVzYyBLZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBhY2Nlc3NpYmlsaXR5IHN1cHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNlbGVjdGFiaWxpdHlcbiAgICAgKi9cbiAgICB0aGlzLnNlbGVjdGFiaWxpdHkgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHRoaXMgY2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHtDb250cm9sc30gY29udHJvbHNcbiAgICovXG4gIGluaXQoY29udHJvbHMpwqB7XG4gICAgLyoqXG4gICAgICogTmVlZCB0byBoYXZlIGEgY29tbW9uIGJpbmRpbmcgb2YgaGFuZGxlS2V5RG93biwgc28gdGhhdCBpdCBjYW4gYmUgYVxuICAgICAqIGNvbW1vbiBpbnN0YW5jZSB0byBiZSB1c2VkIGZvciBhZGRFdmVudExpc3RlbmVyIGFuZCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuYm91bmRIYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Q29udHJvbHN9XG4gICAgICovXG4gICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgIHRoaXMuY29udHJvbHMub24oJ2FkZEVsZW1lbnQnLCB0aGlzLmxpc3RlbkZvcktleURvd24sIHRoaXMpO1xuICAgIHRoaXMuY29udHJvbHMub24oJ3JlbW92ZUVsZW1lbnQnLCB0aGlzLnJlbW92ZUtleURvd25MaXN0ZW5lciwgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIGEga2V5Ym9hcmQgcHJlc3Mgd2hlbiBlbGVtZW50IGlzIGZvY3VzZWRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbGlzdGVuRm9yS2V5RG93bih7ZWxlbWVudH0pIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kSGFuZGxlS2V5RG93bik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGtleWJvYXJkIHByZXNzIGxpc3RlbmVyXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlbW92ZUtleURvd25MaXN0ZW5lcih7ZWxlbWVudH0pIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kSGFuZGxlS2V5RG93bik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMga2V5IGRvd25cbiAgICpcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBLZXlib2FyZCBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgMTM6IC8vIEVudGVyXG4gICAgICBjYXNlIDMyOiAvLyBTcGFjZVxuICAgICAgICB0aGlzLnNlbGVjdChldmVudC50YXJnZXQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzNzogLy8gTGVmdCBBcnJvd1xuICAgICAgY2FzZSAzODogLy8gVXAgQXJyb3dcbiAgICAgICAgdGhpcy5wcmV2aW91c0VsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyBSaWdodCBBcnJvd1xuICAgICAgY2FzZSA0MDogLy8gRG93biBBcnJvd1xuICAgICAgICB0aGlzLm5leHRFbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlyZXMgdGhlIHByZXZpb3VzIGVsZW1lbnQgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxFdmVudFRhcmdldH0gZWxcbiAgICogQGZpcmVzIENvbnRyb2xzI3ByZXZpb3VzRWxlbWVudFxuICAgKi9cbiAgcHJldmlvdXNFbGVtZW50KGVsKSB7XG4gICAgdGhpcy5jb250cm9scy5maXJlc0V2ZW50KCdwcmV2aW91c0VsZW1lbnQnLCBlbClcbiAgfTtcblxuICAvKipcbiAgICogRmlyZSB0aGUgbmV4dCBlbGVtZW50IGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8RXZlbnRUYXJnZXR9IGVsXG4gICAqIEBmaXJlcyBDb250cm9scyNuZXh0RWxlbWVudFxuICAgKi9cbiAgbmV4dEVsZW1lbnQoZWwpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmZpcmVzRXZlbnQoJ25leHRFbGVtZW50JywgZWwpXG4gIH07XG5cbiAgLyoqXG4gICAqIEZpcmVzIHRoZSBzZWxlY3QgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldHxIVE1MRWxlbWVudH0gZWxcbiAgICogQGZpcmVzIENvbnRyb2xzI3NlbGVjdFxuICAgKi9cbiAgc2VsZWN0KGVsKXtcbiAgICBpZih0aGlzLnNlbGVjdGFiaWxpdHkpIHtcbiAgICAgIGlmKHRoaXMuY29udHJvbHMuZmlyZXNFdmVudCgnYmVmb3JlLXNlbGVjdCcsIGVsKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jb250cm9scy5maXJlc0V2ZW50KCdzZWxlY3QnLCBlbCk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuZmlyZXNFdmVudCgnYWZ0ZXItc2VsZWN0JywgZWwpXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHBvc3NpYmlsaXR5IHRvIHNlbGVjdCBhIHdvcmQgdHJvdWdoIGNsaWNrIGFuZCBzcGFjZSBvciBlbnRlclxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBkaXNhYmxlU2VsZWN0YWJpbGl0eSgpIHtcbiAgICB0aGlzLnNlbGVjdGFiaWxpdHkgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogRW5hYmxlIHBvc3NpYmlsaXR5IHRvIHNlbGVjdCBhIHdvcmQgdHJvdWdoIGNsaWNrIGFuZCBzcGFjZSBvciBlbnRlclxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBlbmFibGVTZWxlY3RhYmlsaXR5KCkge1xuICAgIHRoaXMuc2VsZWN0YWJpbGl0eSA9IHRydWU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy91aS9rZXlib2FyZC5qcyIsIi8qKlxuICogQGNsYXNzXG4gKiBAY2xhc3NkZXNjIEtleWJvYXJkIG5hdmlnYXRpb24gZm9yIGFjY2Vzc2liaWxpdHkgc3VwcG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2VsZWN0YWJpbGl0eVxuICAgICAqL1xuICAgIHRoaXMuc2VsZWN0YWJpbGl0eSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSW5pdHMgdGhpcyBjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge0NvbnRyb2xzfSBjb250cm9sc1xuICAgKi9cbiAgaW5pdChjb250cm9scynCoHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Q29udHJvbHN9XG4gICAgICovXG4gICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgIHRoaXMuY29udHJvbHMub24oJ2FkZEVsZW1lbnQnLCB0aGlzLmxpc3RlbkZvcktleURvd24sIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIGZvciBhIGtleWJvYXJkIHByZXNzIHdoZW4gZWxlbWVudCBpcyBmb2N1c2VkXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGxpc3RlbkZvcktleURvd24oe2VsZW1lbnR9KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5oYW5kbGVEcmFnLmJpbmQodGhpcykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlQ2xpY2tcbiAgICpcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBLZXlib2FyZCBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmZpcmVzRXZlbnQoJ3NlbGVjdCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGtleSBkb3duXG4gICAqXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgS2V5Ym9hcmQgZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZURyYWcoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmZpcmVzRXZlbnQoJ2RyYWcnLCBldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICAvKipcbiAgICogRGlzYWJsZSBwb3NzaWJpbGl0eSB0byBzZWxlY3QgYSB3b3JkIHRyb3VnaCBjbGljayBhbmQgc3BhY2Ugb3IgZW50ZXJcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZGlzYWJsZVNlbGVjdGFiaWxpdHkoKSB7XG4gICAgdGhpcy5zZWxlY3RhYmlsaXR5ID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBwb3NzaWJpbGl0eSB0byBzZWxlY3QgYSB3b3JkIHRyb3VnaCBjbGljayBhbmQgc3BhY2Ugb3IgZW50ZXJcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZW5hYmxlU2VsZWN0YWJpbGl0eSgpIHtcbiAgICB0aGlzLnNlbGVjdGFiaWxpdHkgPSB0cnVlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvdWkvbW91c2UuanMiLCIvKipcbiAqIEBtaXhpblxuICovXG5leHBvcnQgY29uc3QgRXZlbnRmdWwgPSAoKSA9PiAoe1xuICBsaXN0ZW5lcnM6IHt9LFxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXJcbiAgICogQHBhcmFtIHtvYmplY3R9IFtzY29wZV1cbiAgICpcbiAgICogQGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge0V2ZW50ZnVsfVxuICAgKi9cbiAgb246IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBzY29wZSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtvYmplY3R9IFRyaWdnZXJcbiAgICAgKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBzY29wZVxuICAgICAqL1xuICAgIGNvbnN0IHRyaWdnZXIgPSB7XG4gICAgICAnbGlzdGVuZXInOiBsaXN0ZW5lcixcbiAgICAgICdzY29wZSc6IHNjb3BlXG4gICAgfTtcblxuICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgW107XG4gICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaCh0cmlnZ2VyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGV2ZW50LiBJZiBhbnkgb2YgdGhlIGxpc3RlbmVycyByZXR1cm5zIGZhbHNlLCByZXR1cm4gZmFsc2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtvYmplY3R9IFtldmVudF1cbiAgICpcbiAgICogQGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmaXJlOiBmdW5jdGlvbih0eXBlLCBldmVudCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgW107XG5cbiAgICByZXR1cm4gdHJpZ2dlcnMuZXZlcnkoZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgcmV0dXJuIHRyaWdnZXIubGlzdGVuZXIuY2FsbCh0cmlnZ2VyLnNjb3BlIHx8IHRoaXMsIGV2ZW50KSAhPT0gZmFsc2U7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIGV2ZW50cyBvbiBhbm90aGVyIEV2ZW50ZnVsLCBhbmQgcHJvcGFnYXRlIGl0IHRyb3VnaCB0aGlzIEV2ZW50ZnVsXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHR5cGVzXG4gICAqIEBwYXJhbSB7RXZlbnRmdWx9IGV2ZW50ZnVsXG4gICAqL1xuICBwcm9wYWdhdGU6IGZ1bmN0aW9uKHR5cGVzLCBldmVudGZ1bCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB0eXBlcy5mb3JFYWNoKHR5cGUgPT4gZXZlbnRmdWwub24odHlwZSwgZXZlbnQgPT4gc2VsZi5maXJlKHR5cGUsIGV2ZW50KSkpO1xuICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9taXhpbnMvZXZlbnRmdWwuanMiLCIvLyBMb2FkIGxpYnJhcnlcbkg1UC5Db250cm9scyA9IHJlcXVpcmUoJy4uL3NjcmlwdHMvY29udHJvbHMnKS5kZWZhdWx0O1xuSDVQLkNvbnRyb2xzLlVJS2V5Ym9hcmQgPSByZXF1aXJlKCcuLi9zY3JpcHRzL3VpL2tleWJvYXJkJykuZGVmYXVsdDtcbkg1UC5Db250cm9scy5VSU1vdXNlID0gcmVxdWlyZSgnLi4vc2NyaXB0cy91aS9tb3VzZScpLmRlZmF1bHQ7XG5INVAuQ29udHJvbHMuQXJpYURyYWcgPSByZXF1aXJlKCcuLi9zY3JpcHRzL2FyaWEvZHJhZycpLmRlZmF1bHQ7XG5INVAuQ29udHJvbHMuQXJpYURyb3AgPSByZXF1aXJlKCcuLi9zY3JpcHRzL2FyaWEvZHJvcCcpLmRlZmF1bHQ7XG5INVAuQ29udHJvbHMuQXJpYVNlbGVjdGVkID0gcmVxdWlyZSgnLi4vc2NyaXB0cy9hcmlhL3NlbGVjdGVkJykuZGVmYXVsdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9kaXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==