webpackJsonp([1],{

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/Action": 492,
		"./components/Action.js": 492,
		"./components/ActionList": 554,
		"./components/ActionList.js": 554,
		"./components/ActionValue": 510,
		"./components/ActionValue.js": 510,
		"./components/Condition": 559,
		"./components/Condition.js": 559,
		"./components/ConditionList": 571,
		"./components/ConditionList.js": 571,
		"./components/ConditionValue": 563,
		"./components/ConditionValue.js": 563,
		"./components/DimensionSelector": 561,
		"./components/DimensionSelector.js": 561,
		"./components/Review": 574,
		"./components/Review.js": 574,
		"./components/Review.scss": 575,
		"./components/Rule": 577,
		"./components/Rule.js": 577,
		"./components/Rule.scss": 583,
		"./components/StatusMessage": 582,
		"./components/StatusMessage.js": 582,
		"./components/TypeSelector": 493,
		"./components/TypeSelector.js": 493,
		"./containers/ActionContainer": 558,
		"./containers/ActionContainer.js": 558,
		"./containers/ActionListContainer": 579,
		"./containers/ActionListContainer.js": 579,
		"./containers/ActionValueContainer": 509,
		"./containers/ActionValueContainer.js": 509,
		"./containers/ConditionContainer": 572,
		"./containers/ConditionContainer.js": 572,
		"./containers/ConditionListContainer": 578,
		"./containers/ConditionListContainer.js": 578,
		"./containers/ConditionValueContainer": 562,
		"./containers/ConditionValueContainer.js": 562,
		"./containers/DimensionSelectorContainer": 560,
		"./containers/DimensionSelectorContainer.js": 560,
		"./containers/ReviewContainer": 580,
		"./containers/ReviewContainer.js": 580,
		"./containers/RuleContainer": 585,
		"./containers/RuleContainer.js": 585,
		"./containers/StatusMessageContainer": 581,
		"./containers/StatusMessageContainer.js": 581,
		"./index": 490,
		"./index.js": 490,
		"./modules/actions": 532,
		"./modules/actions.js": 532,
		"./modules/conditions": 573,
		"./modules/conditions.js": 573,
		"./modules/dimensions": 586,
		"./modules/dimensions.js": 586,
		"./modules/rule": 534,
		"./modules/rule.js": 534,
		"./modules/status": 587,
		"./modules/status.js": 587
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 491;


/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Action = undefined;
	var _arguments = arguments;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TypeSelector = __webpack_require__(493);
	
	var _TypeSelector2 = _interopRequireDefault(_TypeSelector);
	
	var _ActionValueContainer = __webpack_require__(509);
	
	var _ActionValueContainer2 = _interopRequireDefault(_ActionValueContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Action = exports.Action = function Action(_ref) {
	  var id = _ref.id,
	      ruleId = _ref.ruleId,
	      _ref$type = _ref.type,
	      type = _ref$type === undefined ? 'capping' : _ref$type,
	      updateActionType = _ref.updateActionType,
	      _ref$rank = _ref.rank,
	      rank = _ref$rank === undefined ? 100 : _ref$rank,
	      updateActionRank = _ref.updateActionRank,
	      updateActionYield = _ref.updateActionYield,
	      deleteAction = _ref.deleteAction;
	  return _react2.default.createElement(
	    'fieldset',
	    { className: 'panel panel-default' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-sm-6' },
	        _react2.default.createElement(_TypeSelector2.default, { type: type, onChange: function onChange(_type) {
	            updateActionType({ _type: _type, id: id });
	          } })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group col-sm-3' },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label', htmlFor: 'rank-input' },
	          'Rank'
	        ),
	        _react2.default.createElement('input', {
	          id: 'rank-input',
	          className: 'form-control',
	          type: 'number',
	          defaultValue: rank,
	          min: -1,
	          max: 100,
	          onChange: function onChange(e) {
	            updateActionRank({
	              id: id,
	              rank: Number(e.target.value)
	            });
	          }
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group col-sm-3' },
	        _react2.default.createElement(
	          'label',
	          { className: 'control-label', htmlFor: 'yield-input' },
	          'Yield'
	        ),
	        _react2.default.createElement('input', {
	          id: 'yield-input',
	          className: 'form-control',
	          type: 'number',
	          defaultValue: _arguments[0].yield || 100,
	          min: -1,
	          max: 100,
	          onChange: function onChange(e) {
	            updateActionYield({
	              id: id,
	              _yield: Number(e.target.value)
	            });
	          }
	        })
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'form-group' },
	      _react2.default.createElement(
	        'label',
	        { className: 'control-label' },
	        'Value'
	      ),
	      _react2.default.createElement(_ActionValueContainer2.default, { id: id })
	    ),
	    _react2.default.createElement(
	      'button',
	      {
	        className: 'btn btn-default',
	        onClick: function onClick(e) {
	          e.preventDefault();
	          deleteAction({
	            id: id,
	            ruleId: ruleId
	          });
	        }
	      },
	      _react2.default.createElement('div', { className: 'glyphicon glyphicon-minus' }),
	      _react2.default.createElement(
	        'span',
	        null,
	        ' Delete Action '
	      )
	    )
	  );
	};
	
	Action.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  ruleId: _react2.default.PropTypes.string.isRequired,
	  type: _react2.default.PropTypes.string.isRequired,
	  updateActionType: _react2.default.PropTypes.func.isRequired,
	  rank: _react2.default.PropTypes.number.isRequired,
	  updateActionRank: _react2.default.PropTypes.func.isRequired,
	  updateActionYield: _react2.default.PropTypes.func.isRequired,
	  deleteAction: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Action;

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TypeSelector = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actions = __webpack_require__(494);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _reactSelect = __webpack_require__(496);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var options = _actions2.default.keySeq().sort().map(function (key) {
	  return {
	    value: key,
	    label: key
	  };
	}).toJS();
	
	var TypeSelector = exports.TypeSelector = function TypeSelector(_ref) {
	  var type = _ref.type,
	      onChange = _ref.onChange;
	  return _react2.default.createElement(
	    'div',
	    { className: 'form-group' },
	    _react2.default.createElement(
	      'label',
	      { className: 'control-label', htmlFor: 'type-input' },
	      'Type'
	    ),
	    _react2.default.createElement(_reactSelect2.default, {
	      id: 'type-input',
	      simpleValue: true,
	      value: type,
	      options: options,
	      onChange: onChange
	    })
	  );
	};
	
	TypeSelector.propTypes = {
	  type: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = TypeSelector;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.STRING = exports.NUMBER = exports.BOOL = exports.ARRAY = undefined;
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ARRAY = exports.ARRAY = 'ARRAY';
	var BOOL = exports.BOOL = 'BOOL';
	var NUMBER = exports.NUMBER = 'NUMBER';
	var STRING = exports.STRING = 'STRING';
	
	exports.default = _immutable2.default.fromJS({
	  timeline: {
	    value: {
	      preroll: NUMBER,
	      midroll: ARRAY,
	      postroll: NUMBER
	    }
	  },
	  capping: {
	    value: {
	      interval: NUMBER
	    }
	  },
	  noad: {
	    value: {
	      code: NUMBER,
	      status: STRING
	    }
	  },
	  dimension: {
	    value: {
	      label: STRING,
	      value: STRING
	    }
	  },
	  mediation: {
	    value: {
	      label: STRING,
	      rank: NUMBER
	    }
	  },
	  cookie: {
	    value: {
	      label: STRING,
	      value: STRING,
	      ttl: NUMBER
	    }
	  },
	  skip: {
	    value: {
	      offset: NUMBER
	    }
	  },
	  source: {
	    value: {
	      label: STRING,
	      description: STRING,
	      value: ARRAY,
	      secure: BOOL,
	      server: BOOL,
	      timeout: ARRAY,
	      cookie: ARRAY,
	      sync: ARRAY,
	      price: STRING
	    }
	  },
	  timeout: {
	    value: {
	      timeout: NUMBER
	    }
	  }
	});

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function Iterator(next) {
	      this.next = next;
	    }
	
	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };
	
	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };
	
	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };
	
	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }
	
	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }
	
	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index !== index) {
	      return list;
	    }
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  createClass(Set, SetCollection);
	
	    // @pragma Construction
	
	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    keySeq: function() {
	      return Range(0, this.size);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    }
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS
	
	  };
	
	  return Immutable;
	
	}));

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/react-select
	*/
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactInputAutosize = __webpack_require__(497);
	
	var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);
	
	var _classnames = __webpack_require__(498);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDefaultArrowRenderer = __webpack_require__(499);
	
	var _utilsDefaultArrowRenderer2 = _interopRequireDefault(_utilsDefaultArrowRenderer);
	
	var _utilsDefaultFilterOptions = __webpack_require__(500);
	
	var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);
	
	var _utilsDefaultMenuRenderer = __webpack_require__(502);
	
	var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);
	
	var _utilsDefaultClearRenderer = __webpack_require__(503);
	
	var _utilsDefaultClearRenderer2 = _interopRequireDefault(_utilsDefaultClearRenderer);
	
	var _Async = __webpack_require__(504);
	
	var _Async2 = _interopRequireDefault(_Async);
	
	var _AsyncCreatable = __webpack_require__(505);
	
	var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);
	
	var _Creatable = __webpack_require__(506);
	
	var _Creatable2 = _interopRequireDefault(_Creatable);
	
	var _Option = __webpack_require__(507);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Value = __webpack_require__(508);
	
	var _Value2 = _interopRequireDefault(_Value);
	
	function stringifyValue(value) {
		var valueType = typeof value;
		if (valueType === 'string') {
			return value;
		} else if (valueType === 'object') {
			return JSON.stringify(value);
		} else if (valueType === 'number' || valueType === 'boolean') {
			return String(value);
		} else {
			return '';
		}
	}
	
	var stringOrNode = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]);
	
	var instanceId = 1;
	
	var Select = _react2['default'].createClass({
	
		displayName: 'Select',
	
		propTypes: {
			addLabelText: _react2['default'].PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			'aria-label': _react2['default'].PropTypes.string, // Aria label (for assistive tech)
			'aria-labelledby': _react2['default'].PropTypes.string, // HTML ID of an element that should be used as the label (for assistive tech)
			arrowRenderer: _react2['default'].PropTypes.func, // Create drop-down caret element
			autoBlur: _react2['default'].PropTypes.bool, // automatically blur the component when an option is selected
			autofocus: _react2['default'].PropTypes.bool, // autofocus the component on mount
			autosize: _react2['default'].PropTypes.bool, // whether to enable autosizing or not
			backspaceRemoves: _react2['default'].PropTypes.bool, // whether backspace removes an item if there is no text input
			backspaceToRemoveMessage: _react2['default'].PropTypes.string, // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
			className: _react2['default'].PropTypes.string, // className for the outer element
			clearAllText: stringOrNode, // title for the "clear" control when multi: true
			clearRenderer: _react2['default'].PropTypes.func, // create clearable x element
			clearValueText: stringOrNode, // title for the "clear" control
			clearable: _react2['default'].PropTypes.bool, // should it be possible to reset value
			deleteRemoves: _react2['default'].PropTypes.bool, // whether backspace removes an item if there is no text input
			delimiter: _react2['default'].PropTypes.string, // delimiter to use to join multiple values for the hidden field value
			disabled: _react2['default'].PropTypes.bool, // whether the Select is disabled or not
			escapeClearsValue: _react2['default'].PropTypes.bool, // whether escape clears the value when the menu is closed
			filterOption: _react2['default'].PropTypes.func, // method to filter a single option (option, filterString)
			filterOptions: _react2['default'].PropTypes.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
			ignoreAccents: _react2['default'].PropTypes.bool, // whether to strip diacritics when filtering
			ignoreCase: _react2['default'].PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: _react2['default'].PropTypes.object, // custom attributes for the Input
			inputRenderer: _react2['default'].PropTypes.func, // returns a custom input component
			instanceId: _react2['default'].PropTypes.string, // set the components instanceId
			isLoading: _react2['default'].PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
			joinValues: _react2['default'].PropTypes.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
			labelKey: _react2['default'].PropTypes.string, // path of the label value in option objects
			matchPos: _react2['default'].PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: _react2['default'].PropTypes.string, // (any|label|value) which option property to filter on
			menuBuffer: _react2['default'].PropTypes.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
			menuContainerStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu container
			menuRenderer: _react2['default'].PropTypes.func, // renders a custom menu with options
			menuStyle: _react2['default'].PropTypes.object, // optional style to apply to the menu
			multi: _react2['default'].PropTypes.bool, // multi-value input
			name: _react2['default'].PropTypes.string, // generates a hidden <input /> tag with this field name for html forms
			noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
			onBlur: _react2['default'].PropTypes.func, // onBlur handler: function (event) {}
			onBlurResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared on blur
			onChange: _react2['default'].PropTypes.func, // onChange handler: function (newValue) {}
			onClose: _react2['default'].PropTypes.func, // fires when the menu is closed
			onCloseResetsInput: _react2['default'].PropTypes.bool, // whether input is cleared when menu is closed through the arrow
			onFocus: _react2['default'].PropTypes.func, // onFocus handler: function (event) {}
			onInputChange: _react2['default'].PropTypes.func, // onInputChange handler: function (inputValue) {}
			onInputKeyDown: _react2['default'].PropTypes.func, // input keyDown handler: function (event) {}
			onMenuScrollToBottom: _react2['default'].PropTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
			onOpen: _react2['default'].PropTypes.func, // fires when the menu is opened
			onValueClick: _react2['default'].PropTypes.func, // onClick handler for value labels: function (value, event) {}
			openAfterFocus: _react2['default'].PropTypes.bool, // boolean to enable opening dropdown when focused
			openOnFocus: _react2['default'].PropTypes.bool, // always open options menu on focus
			optionClassName: _react2['default'].PropTypes.string, // additional class(es) to apply to the <Option /> elements
			optionComponent: _react2['default'].PropTypes.func, // option component to render in dropdown
			optionRenderer: _react2['default'].PropTypes.func, // optionRenderer: function (option) {}
			options: _react2['default'].PropTypes.array, // array of options
			pageSize: _react2['default'].PropTypes.number, // number of entries to page when using page up/down keys
			placeholder: stringOrNode, // field placeholder, displayed when there's no value
			required: _react2['default'].PropTypes.bool, // applies HTML5 required attribute when needed
			resetValue: _react2['default'].PropTypes.any, // value to use when you clear the control
			scrollMenuIntoView: _react2['default'].PropTypes.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
			searchable: _react2['default'].PropTypes.bool, // whether to enable searching feature or not
			simpleValue: _react2['default'].PropTypes.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
			style: _react2['default'].PropTypes.object, // optional style to apply to the control
			tabIndex: _react2['default'].PropTypes.string, // optional tab index of the control
			tabSelectsValue: _react2['default'].PropTypes.bool, // whether to treat tabbing out while focused to be value selection
			value: _react2['default'].PropTypes.any, // initial field value
			valueComponent: _react2['default'].PropTypes.func, // value component to render
			valueKey: _react2['default'].PropTypes.string, // path of the label value in option objects
			valueRenderer: _react2['default'].PropTypes.func, // valueRenderer: function (option) {}
			wrapperStyle: _react2['default'].PropTypes.object },
	
		// optional style to apply to the component wrapper
		statics: { Async: _Async2['default'], AsyncCreatable: _AsyncCreatable2['default'], Creatable: _Creatable2['default'] },
	
		getDefaultProps: function getDefaultProps() {
			return {
				addLabelText: 'Add "{label}"?',
				arrowRenderer: _utilsDefaultArrowRenderer2['default'],
				autosize: true,
				backspaceRemoves: true,
				backspaceToRemoveMessage: 'Press backspace to remove {label}',
				clearable: true,
				clearAllText: 'Clear all',
				clearRenderer: _utilsDefaultClearRenderer2['default'],
				clearValueText: 'Clear value',
				deleteRemoves: true,
				delimiter: ',',
				disabled: false,
				escapeClearsValue: true,
				filterOptions: _utilsDefaultFilterOptions2['default'],
				ignoreAccents: true,
				ignoreCase: true,
				inputProps: {},
				isLoading: false,
				joinValues: false,
				labelKey: 'label',
				matchPos: 'any',
				matchProp: 'any',
				menuBuffer: 0,
				menuRenderer: _utilsDefaultMenuRenderer2['default'],
				multi: false,
				noResultsText: 'No results found',
				onBlurResetsInput: true,
				onCloseResetsInput: true,
				openAfterFocus: false,
				optionComponent: _Option2['default'],
				pageSize: 5,
				placeholder: 'Select...',
				required: false,
				scrollMenuIntoView: true,
				searchable: true,
				simpleValue: false,
				tabSelectsValue: true,
				valueComponent: _Value2['default'],
				valueKey: 'value'
			};
		},
	
		getInitialState: function getInitialState() {
			return {
				inputValue: '',
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false,
				required: false
			};
		},
	
		componentWillMount: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);
	
			if (this.props.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], this.props.multi)
				});
			}
		},
	
		componentDidMount: function componentDidMount() {
			if (this.props.autofocus) {
				this.focus();
			}
		},
	
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);
	
			if (nextProps.required) {
				this.setState({
					required: this.handleRequired(valueArray[0], nextProps.multi)
				});
			}
		},
	
		componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
			if (nextState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(nextState.isOpen);
				var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
				handler && handler();
			}
		},
	
		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = _reactDom2['default'].findDOMNode(this.focused);
				var menuNode = _reactDom2['default'].findDOMNode(this.menu);
				menuNode.scrollTop = focusedOptionNode.offsetTop;
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}
	
			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = _reactDom2['default'].findDOMNode(this.focused);
				var menuDOM = _reactDom2['default'].findDOMNode(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
		},
	
		componentWillUnmount: function componentWillUnmount() {
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('ontouchstart', this.handleTouchOutside);
			} else {
				document.removeEventListener('touchstart', this.handleTouchOutside);
			}
		},
	
		toggleTouchOutsideEvent: function toggleTouchOutsideEvent(enabled) {
			if (enabled) {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.addEventListener('touchstart', this.handleTouchOutside);
				}
			} else {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('ontouchstart', this.handleTouchOutside);
				} else {
					document.removeEventListener('touchstart', this.handleTouchOutside);
				}
			}
		},
	
		handleTouchOutside: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		},
	
		focus: function focus() {
			if (!this.input) return;
			this.input.focus();
	
			if (this.props.openAfterFocus) {
				this.setState({
					isOpen: true
				});
			}
		},
	
		blurInput: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		handleTouchEnd: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Fire the mouse events
			this.handleMouseDown(event);
		},
	
		handleTouchEndClearValue: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Clear the value
			this.clearValue(event);
		},
	
		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
	
			if (event.target.tagName === 'INPUT') {
				return;
			}
	
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
	
			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen
				});
			}
	
			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();
	
				var input = this.input;
				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}
	
				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';
	
				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: true,
					isPseudoFocused: false
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = true;
				this.focus();
			}
		},
	
		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If the menu isn't open, let the event bubble to the main handleMouseDown
			if (!this.state.isOpen) {
				return;
			}
			// prevent default event handlers
			event.stopPropagation();
			event.preventDefault();
			// close the menu
			this.closeMenu();
		},
	
		handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
	
			this._openAfterFocus = true;
			this.focus();
		},
	
		closeMenu: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: ''
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi,
					inputValue: this.state.inputValue
				});
			}
			this.hasScrolledToOption = false;
		},
	
		handleInputFocus: function handleInputFocus(event) {
			if (this.props.disabled) return;
			var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
			this.setState({
				isFocused: true,
				isOpen: isOpen
			});
			this._openAfterFocus = false;
		},
	
		handleInputBlur: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}
	
			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = '';
			}
			this.setState(onBlurredState);
		},
	
		handleInputChange: function handleInputChange(event) {
			var newInputValue = event.target.value;
	
			if (this.state.inputValue !== event.target.value && this.props.onInputChange) {
				var nextState = this.props.onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && typeof nextState !== 'object') {
					newInputValue = '' + nextState;
				}
			}
	
			this.setState({
				isOpen: true,
				isPseudoFocused: false,
				inputValue: newInputValue
			});
		},
	
		handleKeyDown: function handleKeyDown(event) {
			if (this.props.disabled) return;
	
			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}
	
			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						return;
					}
					this.selectFocusedOption();
					return;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 33:
					// page up
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						return;
					}
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						return;
					}
					this.focusStartOption();
					break;
				case 46:
					// backspace
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				default:
					return;
			}
			event.preventDefault();
		},
	
		handleValueClick: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		},
	
		handleMenuScroll: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;
	
			if (target.scrollHeight > target.offsetHeight && !(target.scrollHeight - target.offsetHeight - target.scrollTop)) {
				this.props.onMenuScrollToBottom();
			}
		},
	
		handleRequired: function handleRequired(value, multi) {
			if (!value) return true;
			return multi ? value.length === 0 : Object.keys(value).length === 0;
		},
	
		getOptionLabel: function getOptionLabel(op) {
			return op[this.props.labelKey];
		},
	
		/**
	  * Turns a value into an array from the given options
	  * @param	{String|Number|Array}	value		- the value of the select input
	  * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
	  * @returns	{Array}	the value of the select represented in an array
	  */
		getValueArray: function getValueArray(value, nextProps) {
			var _this = this;
	
			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = typeof nextProps === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') value = value.split(props.delimiter);
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return _this.expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = this.expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		},
	
		/**
	  * Retrieve a value from the given options and valueKey
	  * @param	{String|Number|Array}	value	- the selected value(s)
	  * @param	{Object}		props	- the Select component's props (or nextProps)
	  */
		expandValue: function expandValue(value, props) {
			var valueType = typeof value;
			if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
			var options = props.options;
			var valueKey = props.valueKey;
	
			if (!options) return;
			for (var i = 0; i < options.length; i++) {
				if (options[i][valueKey] === value) return options[i];
			}
		},
	
		setValue: function setValue(value) {
			var _this2 = this;
	
			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (!this.props.onChange) return;
			if (this.props.required) {
				var required = this.handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			this.props.onChange(value);
		},
	
		selectValue: function selectValue(value) {
			var _this3 = this;
	
			//NOTE: update value in the callback to make sure the input value is empty so that there are no styling issues (Chrome had issue otherwise)
			this.hasScrolledToOption = false;
			if (this.props.multi) {
				this.setState({
					inputValue: '',
					focusedIndex: null
				}, function () {
					_this3.addValue(value);
				});
			} else {
				this.setState({
					isOpen: false,
					inputValue: '',
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		},
	
		addValue: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		},
	
		popValue: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(valueArray.slice(0, valueArray.length - 1));
		},
	
		removeValue: function removeValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i !== value;
			}));
			this.focus();
		},
	
		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(this.getResetValue());
			this.setState({
				isOpen: false,
				inputValue: ''
			}, this.focus);
		},
	
		getResetValue: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		},
	
		focusOption: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		},
	
		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},
	
		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},
	
		focusPageUpOption: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		},
	
		focusPageDownOption: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		},
	
		focusStartOption: function focusStartOption() {
			this.focusAdjacentOption('start');
		},
	
		focusEndOption: function focusEndOption() {
			this.focusAdjacentOption('end');
		},
	
		focusAdjacentOption: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
				});
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var potentialIndex = focusedIndex + this.props.pageSize;
				if (potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = potentialIndex;
				}
			}
	
			if (focusedIndex === -1) {
				focusedIndex = 0;
			}
	
			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		},
	
		getFocusedOption: function getFocusedOption() {
			return this._focusedOption;
		},
	
		getInputValue: function getInputValue() {
			return this.state.inputValue;
		},
	
		selectFocusedOption: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		},
	
		renderLoading: function renderLoading() {
			if (!this.props.isLoading) return;
			return _react2['default'].createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				_react2['default'].createElement('span', { className: 'Select-loading' })
			);
		},
	
		renderValue: function renderValue(valueArray, isOpen) {
			var _this4 = this;
	
			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				return !this.state.inputValue ? _react2['default'].createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2['default'].createElement(
						ValueComponent,
						{
							id: _this4._instancePrefix + '-value-' + i,
							instancePrefix: _this4._instancePrefix,
							disabled: _this4.props.disabled || value.clearableValue === false,
							key: 'value-' + i + '-' + value[_this4.props.valueKey],
							onClick: onClick,
							onRemove: _this4.removeValue,
							value: value
						},
						renderLabel(value, i),
						_react2['default'].createElement(
							'span',
							{ className: 'Select-aria-only' },
							' '
						)
					);
				});
			} else if (!this.state.inputValue) {
				if (isOpen) onClick = null;
				return _react2['default'].createElement(
					ValueComponent,
					{
						id: this._instancePrefix + '-value-item',
						disabled: this.props.disabled,
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		},
	
		renderInput: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this5 = this;
	
			var className = (0, _classnames2['default'])('Select-input', this.props.inputProps.className);
			var isOpen = !!this.state.isOpen;
	
			var ariaOwns = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));
	
			// TODO: Check how this project includes Object.assign()
			var inputProps = _extends({}, this.props.inputProps, {
				role: 'combobox',
				'aria-expanded': '' + isOpen,
				'aria-owns': ariaOwns,
				'aria-haspopup': '' + isOpen,
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-label': this.props['aria-label'],
				className: className,
				tabIndex: this.props.tabIndex,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this5.input = _ref;
				},
				required: this.state.required,
				value: this.state.inputValue
			});
	
			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}
	
			if (this.props.disabled || !this.props.searchable) {
				var _props$inputProps = this.props.inputProps;
				var inputClassName = _props$inputProps.inputClassName;
	
				var divProps = _objectWithoutProperties(_props$inputProps, ['inputClassName']);
	
				return _react2['default'].createElement('div', _extends({}, divProps, {
					role: 'combobox',
					'aria-expanded': isOpen,
					'aria-owns': isOpen ? this._instancePrefix + '-list' : this._instancePrefix + '-value',
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					className: className,
					tabIndex: this.props.tabIndex || 0,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function (ref) {
						return _this5.input = ref;
					},
					'aria-readonly': '' + !!this.props.disabled,
					style: { border: 0, width: 1, display: 'inline-block' } }));
			}
	
			if (this.props.autosize) {
				return _react2['default'].createElement(_reactInputAutosize2['default'], _extends({}, inputProps, { minWidth: '5' }));
			}
			return _react2['default'].createElement(
				'div',
				{ className: className },
				_react2['default'].createElement('input', inputProps)
			);
		},
	
		renderClear: function renderClear() {
			if (!this.props.clearable || !this.props.value || this.props.value === 0 || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
			var clear = this.props.clearRenderer();
	
			return _react2['default'].createElement(
				'span',
				{ className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
					onMouseDown: this.clearValue,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEndClearValue
				},
				clear
			);
		},
	
		renderArrow: function renderArrow() {
			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });
	
			return _react2['default'].createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		},
	
		filterOptions: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _utilsDefaultFilterOptions2['default'];
	
				return filterOptions(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		},
	
		onOptionRef: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		},
	
		renderMenu: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey,
					onOptionRef: this.onOptionRef
				});
			} else if (this.props.noResultsText) {
				return _react2['default'].createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		},
	
		renderHiddenField: function renderHiddenField(valueArray) {
			var _this6 = this;
	
			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this6.props.valueKey]);
				}).join(this.props.delimiter);
				return _react2['default'].createElement('input', {
					type: 'hidden',
					ref: function (ref) {
						return _this6.value = ref;
					},
					name: this.props.name,
					value: value,
					disabled: this.props.disabled });
			}
			return valueArray.map(function (item, index) {
				return _react2['default'].createElement('input', { key: 'hidden.' + index,
					type: 'hidden',
					ref: 'value' + index,
					name: _this6.props.name,
					value: stringifyValue(item[_this6.props.valueKey]),
					disabled: _this6.props.disabled });
			});
		},
	
		getFocusableOptionIndex: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;
	
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = options.indexOf(focusedOption);
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}
	
			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		},
	
		renderOuter: function renderOuter(options, valueArray, focusedOption) {
			var _this7 = this;
	
			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}
	
			return _react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						return _this7.menuContainer = ref;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				_react2['default'].createElement(
					'div',
					{ ref: function (ref) {
							return _this7.menu = ref;
						}, role: 'listbox', className: 'Select-menu', id: this._instancePrefix + '-list',
						style: this.props.menuStyle,
						onScroll: this.handleMenuScroll,
						onMouseDown: this.handleMouseDownOnMenu },
					menu
				)
			);
		},
	
		render: function render() {
			var _this8 = this;
	
			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);
	
			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = (0, _classnames2['default'])('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'Select--single': !this.props.multi,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'has-value': valueArray.length
			});
	
			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = _react2['default'].createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}
	
			return _react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						return _this8.wrapper = ref;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				_react2['default'].createElement(
					'div',
					{ ref: function (ref) {
							return _this8.control = ref;
						},
						className: 'Select-control',
						style: this.props.style,
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchStart: this.handleTouchStart,
						onTouchMove: this.handleTouchMove
					},
					_react2['default'].createElement(
						'span',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null
			);
		}
	
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(24);
	
	var sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };
	
	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',
	
		propTypes: {
			className: React.PropTypes.string, // className for the outer element
			defaultValue: React.PropTypes.any, // default field value
			inputClassName: React.PropTypes.string, // className for the input element
			inputStyle: React.PropTypes.object, // css styles for the input element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			placeholder: React.PropTypes.string, // placeholder text
			placeholderIsMinWidth: React.PropTypes.bool, // don't collapse size to less than the placeholder
			style: React.PropTypes.object, // css styles for the outer element
			value: React.PropTypes.any },
		// field value
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(this.refs.input);
			if (!inputStyle) {
				return;
			}
			var widthNode = this.refs.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			if (this.props.placeholder) {
				var placeholderNode = this.refs.placeholderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = undefined;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.refs.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			this.refs.input.focus();
		},
		blur: function blur() {
			this.refs.input.blur();
		},
		select: function select() {
			this.refs.input.select();
		},
		render: function render() {
			var sizerValue = this.props.defaultValue || this.props.value || '';
			var wrapperStyle = this.props.style || {};
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth + 'px';
			inputStyle.boxSizing = 'content-box';
			var inputProps = _extends({}, this.props);
			inputProps.className = this.props.inputClassName;
			inputProps.style = inputStyle;
			// ensure props meant for `AutosizeInput` don't end up on the `input`
			delete inputProps.inputClassName;
			delete inputProps.inputStyle;
			delete inputProps.minWidth;
			delete inputProps.placeholderIsMinWidth;
			return React.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				React.createElement('input', _extends({}, inputProps, { ref: 'input' })),
				React.createElement(
					'div',
					{ ref: 'sizer', style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? React.createElement(
					'div',
					{ ref: 'placeholderSizer', style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	});
	
	module.exports = AutosizeInput;

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = arrowRenderer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function arrowRenderer(_ref) {
		var onMouseDown = _ref.onMouseDown;
	
		return _react2["default"].createElement("span", {
			className: "Select-arrow",
			onMouseDown: onMouseDown
		});
	}
	
	;
	module.exports = exports["default"];

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stripDiacritics = __webpack_require__(501);
	
	var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);
	
	function filterOptions(options, filterValue, excludeOptions, props) {
		var _this = this;
	
		if (props.ignoreAccents) {
			filterValue = (0, _stripDiacritics2['default'])(filterValue);
		}
	
		if (props.ignoreCase) {
			filterValue = filterValue.toLowerCase();
		}
	
		if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
			return i[props.valueKey];
		});
	
		return options.filter(function (option) {
			if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
			if (props.filterOption) return props.filterOption.call(_this, option, filterValue);
			if (!filterValue) return true;
			var valueTest = String(option[props.valueKey]);
			var labelTest = String(option[props.labelKey]);
			if (props.ignoreAccents) {
				if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2['default'])(valueTest);
				if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2['default'])(labelTest);
			}
			if (props.ignoreCase) {
				if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
				if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
			}
			return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
		});
	}
	
	module.exports = filterOptions;

/***/ },

/***/ 501:
/***/ function(module, exports) {

	'use strict';
	
	var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];
	
	module.exports = function stripDiacritics(str) {
		for (var i = 0; i < map.length; i++) {
			str = str.replace(map[i].letters, map[i].base);
		}
		return str;
	};

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _classnames = __webpack_require__(498);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function menuRenderer(_ref) {
		var focusedOption = _ref.focusedOption;
		var instancePrefix = _ref.instancePrefix;
		var labelKey = _ref.labelKey;
		var onFocus = _ref.onFocus;
		var onSelect = _ref.onSelect;
		var optionClassName = _ref.optionClassName;
		var optionComponent = _ref.optionComponent;
		var optionRenderer = _ref.optionRenderer;
		var options = _ref.options;
		var valueArray = _ref.valueArray;
		var valueKey = _ref.valueKey;
		var onOptionRef = _ref.onOptionRef;
	
		var Option = optionComponent;
	
		return options.map(function (option, i) {
			var isSelected = valueArray && valueArray.indexOf(option) > -1;
			var isFocused = option === focusedOption;
			var optionClass = (0, _classnames2['default'])(optionClassName, {
				'Select-option': true,
				'is-selected': isSelected,
				'is-focused': isFocused,
				'is-disabled': option.disabled
			});
	
			return _react2['default'].createElement(
				Option,
				{
					className: optionClass,
					instancePrefix: instancePrefix,
					isDisabled: option.disabled,
					isFocused: isFocused,
					isSelected: isSelected,
					key: 'option-' + i + '-' + option[valueKey],
					onFocus: onFocus,
					onSelect: onSelect,
					option: option,
					optionIndex: i,
					ref: function (ref) {
						onOptionRef(ref, isFocused);
					}
				},
				optionRenderer(option, i)
			);
		});
	}
	
	module.exports = menuRenderer;

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = clearRenderer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function clearRenderer() {
		return _react2['default'].createElement('span', {
			className: 'Select-clear',
			dangerouslySetInnerHTML: { __html: '&times;' }
		});
	}
	
	;
	module.exports = exports['default'];

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(496);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _utilsStripDiacritics = __webpack_require__(501);
	
	var _utilsStripDiacritics2 = _interopRequireDefault(_utilsStripDiacritics);
	
	var propTypes = {
		autoload: _react2['default'].PropTypes.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
		cache: _react2['default'].PropTypes.any, // object to use to cache results; set to null/false to disable caching
		children: _react2['default'].PropTypes.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
		ignoreAccents: _react2['default'].PropTypes.bool, // strip diacritics when filtering; defaults to true
		ignoreCase: _react2['default'].PropTypes.bool, // perform case-insensitive filtering; defaults to true
		loadingPlaceholder: _react2['default'].PropTypes.oneOfType([// replaces the placeholder while options are loading
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		loadOptions: _react2['default'].PropTypes.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
		options: _react.PropTypes.array.isRequired, // array of options
		placeholder: _react2['default'].PropTypes.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		noResultsText: _react2['default'].PropTypes.oneOfType([// field noResultsText, displayed when no options come back from the server
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		onChange: _react2['default'].PropTypes.func, // onChange handler: function (newValue) {}
		searchPromptText: _react2['default'].PropTypes.oneOfType([// label to prompt for search input
		_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
		onInputChange: _react2['default'].PropTypes.func, // optional for keeping track of what is being typed
		value: _react2['default'].PropTypes.any };
	
	// initial field value
	var defaultCache = {};
	
	var defaultProps = {
		autoload: true,
		cache: defaultCache,
		children: defaultChildren,
		ignoreAccents: true,
		ignoreCase: true,
		loadingPlaceholder: 'Loading...',
		options: [],
		searchPromptText: 'Type to search'
	};
	
	var Async = (function (_Component) {
		_inherits(Async, _Component);
	
		function Async(props, context) {
			_classCallCheck(this, Async);
	
			_get(Object.getPrototypeOf(Async.prototype), 'constructor', this).call(this, props, context);
	
			this._cache = props.cache === defaultCache ? {} : props.cache;
	
			this.state = {
				isLoading: false,
				options: props.options
			};
	
			this._onInputChange = this._onInputChange.bind(this);
		}
	
		_createClass(Async, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var autoload = this.props.autoload;
	
				if (autoload) {
					this.loadOptions('');
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				var _this = this;
	
				var propertiesToSync = ['options'];
				propertiesToSync.forEach(function (prop) {
					if (_this.props[prop] !== nextProps[prop]) {
						_this.setState(_defineProperty({}, prop, nextProps[prop]));
					}
				});
			}
		}, {
			key: 'clearOptions',
			value: function clearOptions() {
				this.setState({ options: [] });
			}
		}, {
			key: 'loadOptions',
			value: function loadOptions(inputValue) {
				var _this2 = this;
	
				var loadOptions = this.props.loadOptions;
	
				var cache = this._cache;
	
				if (cache && cache.hasOwnProperty(inputValue)) {
					this.setState({
						options: cache[inputValue]
					});
	
					return;
				}
	
				var callback = function callback(error, data) {
					if (callback === _this2._callback) {
						_this2._callback = null;
	
						var options = data && data.options || [];
	
						if (cache) {
							cache[inputValue] = options;
						}
	
						_this2.setState({
							isLoading: false,
							options: options
						});
					}
				};
	
				// Ignore all but the most recent request
				this._callback = callback;
	
				var promise = loadOptions(inputValue, callback);
				if (promise) {
					promise.then(function (data) {
						return callback(null, data);
					}, function (error) {
						return callback(error);
					});
				}
	
				if (this._callback && !this.state.isLoading) {
					this.setState({
						isLoading: true
					});
				}
	
				return inputValue;
			}
		}, {
			key: '_onInputChange',
			value: function _onInputChange(inputValue) {
				var _props = this.props;
				var ignoreAccents = _props.ignoreAccents;
				var ignoreCase = _props.ignoreCase;
				var onInputChange = _props.onInputChange;
	
				if (ignoreAccents) {
					inputValue = (0, _utilsStripDiacritics2['default'])(inputValue);
				}
	
				if (ignoreCase) {
					inputValue = inputValue.toLowerCase();
				}
	
				if (onInputChange) {
					onInputChange(inputValue);
				}
	
				return this.loadOptions(inputValue);
			}
		}, {
			key: 'inputValue',
			value: function inputValue() {
				if (this.select) {
					return this.select.state.inputValue;
				}
				return '';
			}
		}, {
			key: 'noResultsText',
			value: function noResultsText() {
				var _props2 = this.props;
				var loadingPlaceholder = _props2.loadingPlaceholder;
				var noResultsText = _props2.noResultsText;
				var searchPromptText = _props2.searchPromptText;
				var isLoading = this.state.isLoading;
	
				var inputValue = this.inputValue();
	
				if (isLoading) {
					return loadingPlaceholder;
				}
				if (inputValue && noResultsText) {
					return noResultsText;
				}
				return searchPromptText;
			}
		}, {
			key: 'focus',
			value: function focus() {
				this.select.focus();
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				var _props3 = this.props;
				var children = _props3.children;
				var loadingPlaceholder = _props3.loadingPlaceholder;
				var placeholder = _props3.placeholder;
				var _state = this.state;
				var isLoading = _state.isLoading;
				var options = _state.options;
	
				var props = {
					noResultsText: this.noResultsText(),
					placeholder: isLoading ? loadingPlaceholder : placeholder,
					options: isLoading && loadingPlaceholder ? [] : options,
					ref: function ref(_ref) {
						return _this3.select = _ref;
					},
					onChange: function onChange(newValues) {
						if (_this3.props.multi && _this3.props.value && newValues.length > _this3.props.value.length) {
							_this3.clearOptions();
						}
						_this3.props.onChange(newValues);
					}
				};
	
				return children(_extends({}, this.props, props, {
					isLoading: isLoading,
					onInputChange: this._onInputChange
				}));
			}
		}]);
	
		return Async;
	})(_react.Component);
	
	exports['default'] = Async;
	
	Async.propTypes = propTypes;
	Async.defaultProps = defaultProps;
	
	function defaultChildren(props) {
		return _react2['default'].createElement(_Select2['default'], props);
	};
	module.exports = exports['default'];

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(496);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function reduce(obj) {
		var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		return Object.keys(obj).reduce(function (props, key) {
			var value = obj[key];
			if (value !== undefined) props[key] = value;
			return props;
		}, props);
	}
	
	var AsyncCreatable = _react2['default'].createClass({
		displayName: 'AsyncCreatableSelect',
	
		render: function render() {
			var _this = this;
	
			return _react2['default'].createElement(
				_Select2['default'].Async,
				this.props,
				function (asyncProps) {
					return _react2['default'].createElement(
						_Select2['default'].Creatable,
						_this.props,
						function (creatableProps) {
							return _react2['default'].createElement(_Select2['default'], _extends({}, reduce(asyncProps, reduce(creatableProps, {})), {
								onInputChange: function (input) {
									creatableProps.onInputChange(input);
									return asyncProps.onInputChange(input);
								},
								ref: function (ref) {
									creatableProps.ref(ref);
									asyncProps.ref(ref);
								}
							}));
						}
					);
				}
			);
		}
	});
	
	module.exports = AsyncCreatable;

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(496);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _utilsDefaultFilterOptions = __webpack_require__(500);
	
	var _utilsDefaultFilterOptions2 = _interopRequireDefault(_utilsDefaultFilterOptions);
	
	var _utilsDefaultMenuRenderer = __webpack_require__(502);
	
	var _utilsDefaultMenuRenderer2 = _interopRequireDefault(_utilsDefaultMenuRenderer);
	
	var Creatable = _react2['default'].createClass({
		displayName: 'CreatableSelect',
	
		propTypes: {
			// Child function responsible for creating the inner Select component
			// This component can be used to compose HOCs (eg Creatable and Async)
			// (props: Object): PropTypes.element
			children: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.filterOptions
			filterOptions: _react2['default'].PropTypes.any,
	
			// Searches for any matching option within the set of options.
			// This function prevents duplicate options from being created.
			// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
			isOptionUnique: _react2['default'].PropTypes.func,
	
			// Determines if the current input text represents a valid option.
			// ({ label: string }): boolean
			isValidNewOption: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.menuRenderer
			menuRenderer: _react2['default'].PropTypes.any,
	
			// Factory to create new option.
			// ({ label: string, labelKey: string, valueKey: string }): Object
			newOptionCreator: _react2['default'].PropTypes.func,
	
			// input change handler: function (inputValue) {}
			onInputChange: _react2['default'].PropTypes.func,
	
			// input keyDown handler: function (event) {}
			onInputKeyDown: _react2['default'].PropTypes.func,
	
			// new option click handler: function (option) {}
			onNewOptionClick: _react2['default'].PropTypes.func,
	
			// See Select.propTypes.options
			options: _react2['default'].PropTypes.array,
	
			// Creates prompt/placeholder option text.
			// (filterText: string): string
			promptTextCreator: _react2['default'].PropTypes.func,
	
			// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
			shouldKeyDownEventCreateNewOption: _react2['default'].PropTypes.func
		},
	
		// Default prop methods
		statics: {
			isOptionUnique: isOptionUnique,
			isValidNewOption: isValidNewOption,
			newOptionCreator: newOptionCreator,
			promptTextCreator: promptTextCreator,
			shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
		},
	
		getDefaultProps: function getDefaultProps() {
			return {
				filterOptions: _utilsDefaultFilterOptions2['default'],
				isOptionUnique: isOptionUnique,
				isValidNewOption: isValidNewOption,
				menuRenderer: _utilsDefaultMenuRenderer2['default'],
				newOptionCreator: newOptionCreator,
				promptTextCreator: promptTextCreator,
				shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
			};
		},
	
		createNewOption: function createNewOption() {
			var _props = this.props;
			var isValidNewOption = _props.isValidNewOption;
			var newOptionCreator = _props.newOptionCreator;
			var onNewOptionClick = _props.onNewOptionClick;
			var _props$options = _props.options;
			var options = _props$options === undefined ? [] : _props$options;
			var shouldKeyDownEventCreateNewOption = _props.shouldKeyDownEventCreateNewOption;
	
			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option });
	
				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);
	
						this.select.selectValue(option);
					}
				}
			}
		},
	
		filterOptions: function filterOptions() {
			var _props2 = this.props;
			var filterOptions = _props2.filterOptions;
			var isValidNewOption = _props2.isValidNewOption;
			var options = _props2.options;
			var promptTextCreator = _props2.promptTextCreator;
	
			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.
			var excludeOptions = arguments[2] || [];
	
			var filteredOptions = filterOptions.apply(undefined, arguments) || [];
	
			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;
	
				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});
	
				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});
	
				if (_isOptionUnique2) {
					var _prompt = promptTextCreator(this.inputValue);
	
					this._createPlaceholderOption = _newOptionCreator({
						label: _prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});
	
					filteredOptions.unshift(this._createPlaceholderOption);
				}
			}
	
			return filteredOptions;
		},
	
		isOptionUnique: function isOptionUnique(_ref2) {
			var option = _ref2.option;
			var options = _ref2.options;
			var isOptionUnique = this.props.isOptionUnique;
	
			options = options || this.select.filterOptions();
	
			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		},
	
		menuRenderer: function menuRenderer(params) {
			var menuRenderer = this.props.menuRenderer;
	
			return menuRenderer(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		},
	
		onInputChange: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;
	
			if (onInputChange) {
				onInputChange(input);
			}
	
			// This value may be needed in between Select mounts (when this.select is null)
			this.inputValue = input;
		},
	
		onInputKeyDown: function onInputKeyDown(event) {
			var _props3 = this.props;
			var shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption;
			var onInputKeyDown = _props3.onInputKeyDown;
	
			var focusedOption = this.select.getFocusedOption();
	
			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({ keyCode: event.keyCode })) {
				this.createNewOption();
	
				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		},
	
		onOptionSelect: function onOptionSelect(option, event) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		},
	
		render: function render() {
			var _this = this;
	
			var _props4 = this.props;
			var newOptionCreator = _props4.newOptionCreator;
			var shouldKeyDownEventCreateNewOption = _props4.shouldKeyDownEventCreateNewOption;
	
			var restProps = _objectWithoutProperties(_props4, ['newOptionCreator', 'shouldKeyDownEventCreateNewOption']);
	
			var children = this.props.children;
	
			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.
			if (!children) {
				children = defaultChildren;
			}
	
			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref) {
					_this.select = _ref;
	
					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref) {
						_this.labelKey = _ref.props.labelKey;
						_this.valueKey = _ref.props.valueKey;
					}
				}
			});
	
			return children(props);
		}
	});
	
	function defaultChildren(props) {
		return _react2['default'].createElement(_Select2['default'], props);
	};
	
	function isOptionUnique(_ref3) {
		var option = _ref3.option;
		var options = _ref3.options;
		var labelKey = _ref3.labelKey;
		var valueKey = _ref3.valueKey;
	
		return options.filter(function (existingOption) {
			return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
		}).length === 0;
	};
	
	function isValidNewOption(_ref4) {
		var label = _ref4.label;
	
		return !!label;
	};
	
	function newOptionCreator(_ref5) {
		var label = _ref5.label;
		var labelKey = _ref5.labelKey;
		var valueKey = _ref5.valueKey;
	
		var option = {};
		option[valueKey] = label;
		option[labelKey] = label;
		option.className = 'Select-create-option-placeholder';
		return option;
	};
	
	function promptTextCreator(label) {
		return 'Create option "' + label + '"';
	}
	
	function shouldKeyDownEventCreateNewOption(_ref6) {
		var keyCode = _ref6.keyCode;
	
		switch (keyCode) {
			case 9: // TAB
			case 13: // ENTER
			case 188:
				// COMMA
				return true;
		}
	
		return false;
	};
	
	module.exports = Creatable;

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(498);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Option = _react2['default'].createClass({
		displayName: 'Option',
	
		propTypes: {
			children: _react2['default'].PropTypes.node,
			className: _react2['default'].PropTypes.string, // className (based on mouse position)
			instancePrefix: _react2['default'].PropTypes.string.isRequired, // unique prefix for the ids (used for aria)
			isDisabled: _react2['default'].PropTypes.bool, // the option is disabled
			isFocused: _react2['default'].PropTypes.bool, // the option is focused
			isSelected: _react2['default'].PropTypes.bool, // the option is selected
			onFocus: _react2['default'].PropTypes.func, // method to handle mouseEnter on option element
			onSelect: _react2['default'].PropTypes.func, // method to handle click on option element
			onUnfocus: _react2['default'].PropTypes.func, // method to handle mouseLeave on option element
			option: _react2['default'].PropTypes.object.isRequired, // object that is base for that option
			optionIndex: _react2['default'].PropTypes.number },
		// index of the option, used to generate unique ids for aria
		blockEvent: function blockEvent(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}
			if (event.target.target) {
				window.open(event.target.href, event.target.target);
			} else {
				window.location.href = event.target.href;
			}
		},
	
		handleMouseDown: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		},
	
		handleMouseEnter: function handleMouseEnter(event) {
			this.onFocus(event);
		},
	
		handleMouseMove: function handleMouseMove(event) {
			this.onFocus(event);
		},
	
		handleTouchEnd: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			this.handleMouseDown(event);
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		onFocus: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		},
		render: function render() {
			var _props = this.props;
			var option = _props.option;
			var instancePrefix = _props.instancePrefix;
			var optionIndex = _props.optionIndex;
	
			var className = (0, _classnames2['default'])(this.props.className, option.className);
	
			return option.disabled ? _react2['default'].createElement(
				'div',
				{ className: className,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				this.props.children
			) : _react2['default'].createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	});
	
	module.exports = Option;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(498);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Value = _react2['default'].createClass({
	
		displayName: 'Value',
	
		propTypes: {
			children: _react2['default'].PropTypes.node,
			disabled: _react2['default'].PropTypes.bool, // disabled prop passed to ReactSelect
			id: _react2['default'].PropTypes.string, // Unique id for the value - used for aria
			onClick: _react2['default'].PropTypes.func, // method to handle click on value label
			onRemove: _react2['default'].PropTypes.func, // method to handle removal of the value
			value: _react2['default'].PropTypes.object.isRequired },
	
		// the option object for this value
		handleMouseDown: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		},
	
		onRemove: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		},
	
		handleTouchEndRemove: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;
	
			// Fire the mouse events
			this.onRemove(event);
		},
	
		handleTouchMove: function handleTouchMove(event) {
			// Set a flag that the view is being dragged
			this.dragging = true;
		},
	
		handleTouchStart: function handleTouchStart(event) {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		},
	
		renderRemoveIcon: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return _react2['default'].createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'×'
			);
		},
	
		renderLabel: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? _react2['default'].createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : _react2['default'].createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		},
	
		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: (0, _classnames2['default'])('Select-value', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	
	});
	
	module.exports = Value;

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _ActionValue = __webpack_require__(510);
	
	var _ActionValue2 = _interopRequireDefault(_ActionValue);
	
	var _actions = __webpack_require__(532);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateActionValue: _actions.updateActionValue
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return state.actions.get(ownProps.id).toJS();
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ActionValue2.default);

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ActionValue = undefined;
	
	var _map = __webpack_require__(511);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(496);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _actions = __webpack_require__(494);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	__webpack_require__(530);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var typeMap = new _map2.default([[_actions.ARRAY, ArrayValue], [_actions.BOOL, BoolValue], [_actions.NUMBER, NumberValue], [_actions.STRING, StringValue]]);
	
	var ActionValue = exports.ActionValue = function ActionValue(props) {
	  return _react2.default.createElement(
	    'fieldset',
	    { className: 'panel panel-default' },
	    _actions2.default.getIn([props.type, 'value']).map(function (type, key) {
	      return typeMap.get(type)({
	        key: key,
	        value: props.value[key],
	        onChange: props.updateActionValue,
	        id: props.id
	      });
	    })
	  );
	};
	
	ActionValue.propTypes = {
	  type: _react2.default.PropTypes.string.isRequired,
	  value: _react2.default.PropTypes.object.isRequired,
	  id: _react2.default.PropTypes.string.isRequired,
	  updateActionValue: _react2.default.PropTypes.func.isRequired
	};
	
	function ArrayValue(props) {
	  var options = Array.isArray(props.value) ? props.value.map(function (v) {
	    return {
	      value: v,
	      label: v
	    };
	  }) : [];
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'form-group' },
	    _react2.default.createElement(
	      'label',
	      { className: 'control-label', htmlFor: '{props.key}-input' },
	      props.key
	    ),
	    _react2.default.createElement(_reactSelect2.default.Creatable, {
	      id: props.key + '-input',
	      value: props.value,
	      multi: true,
	      options: options,
	      onChange: function onChange(values) {
	        var value = values.map(function (v) {
	          return v.value;
	        });
	
	        props.onChange({
	          id: props.id,
	          key: props.key,
	          value: value
	        });
	      }
	    })
	  );
	}
	
	ArrayValue.propTypes = {
	  key: _react2.default.PropTypes.string.isRequired,
	  value: _react2.default.PropTypes.object.isRequired,
	  id: _react2.default.PropTypes.string.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired
	};
	
	function BoolValue(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'form-group' },
	    _react2.default.createElement(
	      'label',
	      { className: 'control-label', htmlFor: '{props.key}-input' },
	      props.key
	    ),
	    _react2.default.createElement(
	      'select',
	      {
	        id: props.key + '-input',
	        className: 'form-control',
	        defaultValue: props.value,
	        onChange: function onChange(e) {
	          props.onChange({
	            id: props.id,
	            key: props.key,
	            value: e.target.value === 'true'
	          });
	        }
	      },
	      _react2.default.createElement(
	        'option',
	        { value: true },
	        'true'
	      ),
	      _react2.default.createElement(
	        'option',
	        { value: false },
	        'false'
	      )
	    )
	  );
	}
	
	BoolValue.propTypes = ArrayValue.propTypes;
	
	function NumberValue(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'form-group' },
	    _react2.default.createElement(
	      'label',
	      { className: 'control-label', htmlFor: '{props.key}-input' },
	      props.key
	    ),
	    _react2.default.createElement('input', {
	      id: props.key + '-input',
	      className: 'form-control',
	      defaultValue: props.value,
	      type: 'number',
	      onChange: function onChange(e) {
	        props.onChange({
	          id: props.id,
	          key: props.key,
	          value: Number(e.target.value)
	        });
	      }
	    })
	  );
	}
	
	NumberValue.propTypes = ArrayValue.propTypes;
	
	function StringValue(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'form-group' },
	    _react2.default.createElement(
	      'label',
	      { className: 'control-label', htmlFor: '{props.key}-input' },
	      props.key
	    ),
	    _react2.default.createElement('input', {
	      id: props.key + '-input',
	      className: 'form-control',
	      defaultValue: props.value,
	      type: 'text',
	      onChange: function onChange(e) {
	        props.onChange({
	          id: props.id,
	          key: props.key,
	          value: e.target.value
	        });
	      }
	    })
	  );
	}
	
	StringValue.propTypes = ArrayValue.propTypes;
	
	exports.default = ActionValue;

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(512), __esModule: true };

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(436);
	__webpack_require__(409);
	__webpack_require__(420);
	__webpack_require__(513);
	__webpack_require__(527);
	module.exports = __webpack_require__(7).Map;

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(514);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(523)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(416)
	  , redefineAll = __webpack_require__(515)
	  , ctx         = __webpack_require__(8)
	  , anInstance  = __webpack_require__(516)
	  , defined     = __webpack_require__(381)
	  , forOf       = __webpack_require__(517)
	  , $iterDefine = __webpack_require__(411)
	  , step        = __webpack_require__(423)
	  , setSpecies  = __webpack_require__(522)
	  , DESCRIPTORS = __webpack_require__(15)
	  , fastKey     = __webpack_require__(428).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(10);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },

/***/ 516:
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(8)
	  , call        = __webpack_require__(518)
	  , isArrayIter = __webpack_require__(519)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(383)
	  , getIterFn   = __webpack_require__(520)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(414)
	  , ITERATOR   = __webpack_require__(419)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(521)
	  , ITERATOR  = __webpack_require__(419)('iterator')
	  , Iterators = __webpack_require__(414);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(23)
	  , TAG = __webpack_require__(419)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , core        = __webpack_require__(7)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(15)
	  , SPECIES     = __webpack_require__(419)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , meta           = __webpack_require__(428)
	  , fails          = __webpack_require__(16)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(515)
	  , forOf          = __webpack_require__(517)
	  , anInstance     = __webpack_require__(516)
	  , isObject       = __webpack_require__(13)
	  , setToStringTag = __webpack_require__(418)
	  , dP             = __webpack_require__(11).f
	  , each           = __webpack_require__(524)(0)
	  , DESCRIPTORS    = __webpack_require__(15);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(8)
	  , IObject  = __webpack_require__(380)
	  , toObject = __webpack_require__(392)
	  , toLength = __webpack_require__(383)
	  , asc      = __webpack_require__(525);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(526);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(432)
	  , SPECIES  = __webpack_require__(419)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(528)('Map')});

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(521)
	  , from    = __webpack_require__(529);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(517);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(531);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(480)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(531, function() {
				var newContent = __webpack_require__(531);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(479)();
	// imports
	
	
	// module
	exports.push([module.id, ".Select{position:relative}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:14px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}", "", {"version":3,"sources":["/./node_modules/react-select/dist/react-select.css"],"names":[],"mappings":"AAOA,QACE,iBAAmB,CACpB,+CAOC,qBAAuB,CACxB,oCAEC,wBAA0B,CAC3B,0CAEC,eAAiB,CAClB,uCAEC,eAAgB,oBACK,WACP,CACf,gBAEC,sBAAuB,kCACY,kBAChB,sBACI,WACX,eACI,cACD,iBACG,yBACQ,YACb,aACC,gBACG,kBACE,UACP,CACb,sBAEC,kCAAwC,CACzC,oCAEC,YAAc,CACf,uCAEC,WAAa,CACd,yBAEC,6BAA8B,4BACD,gBACZ,iCACkB,CACpC,uCAEC,SAAU,0CACiC,sBACnB,CACzB,wDAEC,WAAa,CACd,0CAEC,qBAAsB,wEAC6D,CACpF,kEAGC,SAAU,WACE,OACJ,iBACU,kBACC,mBACC,kBACD,QACV,MACF,eACS,gBACC,uBACO,kBACJ,CACrB,0KAGC,UAAY,CACb,4KAGC,eAAgB,oBACM,CACvB,gXAKC,cAAe,aACD,yBACa,CAC5B,cAEC,YAAa,kBACM,mBACC,qBACG,CACxB,oBAEC,WAAY,4BACiB,cACd,gBACE,eACD,qBACM,oBACD,kBACF,SACT,aACI,iBACI,mBAEE,uBAEK,CAC1B,gCAEC,WAAa,CACd,2CAEC,SAAW,CACZ,kDAEC,YAAc,CACf,qBAEC,eAAgB,mBACI,iBAED,CAGpB,qCAJC,kBAAmB,sBAEI,UACX,CAEd,gBAGE,oDAAuD,YAE1C,sBACU,kBACJ,sBACI,wBACE,oBACH,CAGvB,mBAIC,sCAAyC,WAC7B,eACI,mBACI,kBACD,kBACA,sBACI,UACX,CACb,yBAEC,aAAe,CAChB,cAEC,qBAAsB,eACN,aACD,CAChB,kCAEC,UAAY,CACb,mBAEC,eAAgB,mBACI,kBACD,kBACA,sBACI,WACX,iBACO,CACpB,cAEC,0CAA2C,mBACvB,2BACQ,qBACN,SACZ,QACD,iBACU,CACpB,8DAGC,qBAAuB,CACxB,2CAEC,oBAAsB,CACvB,0BAEC,qBAAsB,WACV,UACD,YACE,mBACU,gBACN,UACL,CACb,mCAUC,GACE,SAAW,CACZ,GAEC,SAAW,CACZ,CACF,mBAEC,+BAAgC,8BACD,sBACR,sBACA,yBACG,mCACc,sBACjB,gBACN,iBACC,kBACC,SACT,WACE,UACD,gCACuB,CACnC,aAEC,iBAAkB,eACD,CAClB,eAEC,sBAAuB,sBACA,WACR,eACC,cACD,gBACG,CACnB,0BAEC,+BAAgC,6BACD,CAChC,2BAEC,yBAA0B,qCAEgB,UAC9B,CACb,0BAEC,yBAA0B,qCAEgB,UAC9B,CACb,2BAEC,WAAe,cACC,CACjB,kBAEC,sBAAuB,WACR,eACC,cACD,gBACG,CACnB,6BAEC,sBAAuB,iBACL,SACP,CACZ,uCAEC,eAAiB,CAClB,6BAEC,yBAA0B,qCAEgB,kBACvB,yBACO,qCAEgB,cAC3B,qBACO,eACL,gBACA,gBACA,eACD,kBACI,CACrB,qEAGC,qBAAsB,qBACC,CACxB,mCAEC,+BAAgC,4BACH,eACb,eACC,CAClB,oCAEC,cAAe,eACC,oBACM,CACvB,0CAEC,yBAA2B,CAC5B,kCAEC,eAAgB,8BACe,2BACH,+BACI,2CAEgB,mBAC3B,CACtB,gFAGC,yBAA0B,qCAEgB,aAC3B,CAChB,yCAEC,yBAA0B,oCAEgB,CAC3C,yCAEC,yBAA0B,yBACA,UACd,CACb,8CAEC,mBAAoB,8BACY,CACjC,6JAIC,wBAA0B,CAC3B,iCAEC,GACE,uBAAyB,CAC1B,CACF","file":"react-select.css","sourcesContent":["/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/JedWatson/react-select\n*/\n.Select {\n  position: relative;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n}\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.is-open > .Select-control .Select-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 14px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n}\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  float: left;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.ADD_ACTION = exports.DELETE_ACTION = exports.UPDATE_ACTION_VALUE = exports.UPDATE_ACTION_YIELD = exports.UPDATE_ACTION_RANK = exports.UPDATE_ACTION_TYPE = undefined;
	
	var _defineProperty2 = __webpack_require__(533);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.updateActionType = updateActionType;
	exports.updateActionRank = updateActionRank;
	exports.updateActionYield = updateActionYield;
	exports.updateActionValue = updateActionValue;
	exports.deleteAction = deleteAction;
	exports.addAction = addAction;
	exports.default = actionsReducer;
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _rule = __webpack_require__(534);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var UPDATE_ACTION_TYPE = exports.UPDATE_ACTION_TYPE = 'UPDATE_ACTION_TYPE';
	var UPDATE_ACTION_RANK = exports.UPDATE_ACTION_RANK = 'UPDATE_ACTION_RANK';
	var UPDATE_ACTION_YIELD = exports.UPDATE_ACTION_YIELD = 'UPDATE_ACTION_YIELD';
	var UPDATE_ACTION_VALUE = exports.UPDATE_ACTION_VALUE = 'UPDATE_ACTION_VALUE';
	var DELETE_ACTION = exports.DELETE_ACTION = 'DELETE_ACTION';
	var ADD_ACTION = exports.ADD_ACTION = 'ADD_ACTION';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	function updateActionType(_ref) {
	  var id = _ref.id,
	      _type = _ref._type;
	
	  return {
	    type: UPDATE_ACTION_TYPE,
	    id: id,
	    _type: _type
	  };
	}
	
	function updateActionRank(_ref2) {
	  var id = _ref2.id,
	      rank = _ref2.rank;
	
	  return {
	    type: UPDATE_ACTION_RANK,
	    id: id,
	    rank: rank
	  };
	}
	
	function updateActionYield(_ref3) {
	  var id = _ref3.id,
	      _yield = _ref3._yield;
	
	  return {
	    type: UPDATE_ACTION_YIELD,
	    id: id,
	    _yield: _yield
	  };
	}
	function updateActionValue(_ref4) {
	  var id = _ref4.id,
	      key = _ref4.key,
	      value = _ref4.value;
	
	  return {
	    type: UPDATE_ACTION_VALUE,
	    id: id,
	    key: key,
	    value: value
	  };
	}
	
	function deleteAction(_ref5) {
	  var id = _ref5.id,
	      ruleId = _ref5.ruleId;
	
	  return {
	    type: DELETE_ACTION,
	    id: id,
	    ruleId: ruleId
	  };
	}
	
	function addAction(ruleId) {
	  return {
	    type: ADD_ACTION,
	    ruleId: ruleId
	  };
	}
	
	var actions = exports.actions = {
	  updateActionType: updateActionType,
	  updateActionRank: updateActionRank,
	  updateActionYield: updateActionYield,
	  updateActionValue: updateActionValue,
	  deleteAction: deleteAction,
	  addAction: addAction
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.RECEIVE_RULE, function (state, action) {
	  return action.payload.getIn(['entities', 'actions'], state);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.RECEIVE_UPDATED_RULE, function (state, action) {
	  return action.payload.getIn(['entities', 'actions'], state);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.CREATE_RULE, function (state, action) {
	  return initialState;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_ACTION_TYPE, function (state, action) {
	  return state.setIn([action.id, 'type'], action._type).updateIn([action.id, 'value'], function (v) {
	    return v.clear();
	  });
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_ACTION_RANK, function (state, action) {
	  return state.setIn([action.id, 'rank'], action.rank);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_ACTION_YIELD, function (state, action) {
	  return state.setIn([action.id, 'yield'], action._yield);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_ACTION_VALUE, function (state, action) {
	  return state.setIn([action.id, 'value', action.key], action.value);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, DELETE_ACTION, function (state, action) {
	  return state.delete(action.id);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, ADD_ACTION, function (state, action) {
	  return state.set(action.ruleId + '_' + Date.now(), defaultAction.set('ruleId', action.ruleId));
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var defaultAction = _immutable2.default.fromJS({
	  type: 'capping',
	  rank: 100,
	  yield: 100,
	  value: {}
	});
	var initialState = _immutable2.default.fromJS({});
	
	function actionsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(402);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.updateRule = exports.fetchRule = exports.RECEIVE_ERROR = exports.RECEIVE_UPDATED_RULE = exports.POST_RULE = exports.RECEIVE_RULE = exports.REQUEST_RULE = exports.EDIT_RULE = exports.CREATE_RULE = exports.UPDATE_DESCRIPTION = undefined;
	
	var _defineProperty2 = __webpack_require__(533);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.updateDescription = updateDescription;
	exports.createRule = createRule;
	exports.receiveError = receiveError;
	exports.editRule = editRule;
	exports.postRule = postRule;
	exports.default = ruleReducer;
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _api = __webpack_require__(535);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var UPDATE_DESCRIPTION = exports.UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
	var CREATE_RULE = exports.CREATE_RULE = 'CREATE_RULE';
	var EDIT_RULE = exports.EDIT_RULE = 'EDIT_RULE';
	var REQUEST_RULE = exports.REQUEST_RULE = 'REQUEST_RULE';
	var RECEIVE_RULE = exports.RECEIVE_RULE = 'RECEIVE_RULE';
	var POST_RULE = exports.POST_RULE = 'POST_RULE';
	var RECEIVE_UPDATED_RULE = exports.RECEIVE_UPDATED_RULE = 'RECEIVE_UPDATED_RULE';
	var RECEIVE_ERROR = exports.RECEIVE_ERROR = 'RECEIVE_ERROR';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	function updateDescription(_ref) {
	  var id = _ref.id,
	      description = _ref.description;
	
	  return {
	    type: UPDATE_DESCRIPTION,
	    id: id,
	    description: description
	  };
	}
	
	function createRule() {
	  return {
	    type: CREATE_RULE
	  };
	}
	
	function receiveError(error) {
	  return {
	    type: RECEIVE_ERROR,
	    error: error
	  };
	}
	
	function editRule(rule) {
	  return {
	    type: EDIT_RULE,
	    rule: rule
	  };
	}
	
	var fetchRule = exports.fetchRule = function fetchRule(id) {
	  return (0, _api.fetchFromAPI)({
	    scope: 'rule',
	    method: 'read',
	    payload: {
	      id: id
	    }
	  }, [REQUEST_RULE, RECEIVE_RULE]);
	};
	
	function postRule(rule) {
	  return (0, _api.fetchFromAPI)({
	    scope: 'rule',
	    method: 'update',
	    payload: rule
	  }, [POST_RULE, RECEIVE_UPDATED_RULE]);
	}
	
	/* export function receiveUpdatedRule (rule) {
	  return {
	    type    : RECEIVE_UPDATED_RULE,
	    rule
	  }
	} */
	
	var updateRule = exports.updateRule = function updateRule() {
	  return function (dispatch, getState) {
	    var _getState = getState(),
	        rule = _getState.rule,
	        conditions = _getState.conditions,
	        actions = _getState.actions;
	
	    var denormalized = rule.withMutations(function (r) {
	      r.set('conditions', conditions.filter(function (c) {
	        return c.get('ruleId') === r.get('id');
	      }).map(function (c) {
	        return c.delete('ruleId');
	      }).toList()).set('actions', actions.filter(function (a) {
	        return a.get('ruleId') === r.get('id');
	      }).map(function (a) {
	        return a.delete('ruleId');
	      }).toList());
	    });
	
	    if (denormalized.get('id') === 'new') {
	      denormalized = denormalized.delete('id');
	    }
	
	    dispatch(postRule(denormalized.toJS()));
	  };
	};
	
	var actions = exports.actions = {
	  updateDescription: updateDescription,
	  createRule: createRule,
	  fetchRule: fetchRule,
	  postRule: postRule,
	  updateRule: updateRule,
	  receiveError: receiveError
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_DESCRIPTION, function (state, action) {
	  return state.set('description', action.description);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, CREATE_RULE, function (state, action) {
	  return createState;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, REQUEST_RULE, function (state, action) {
	  return state;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, RECEIVE_RULE, function (state, action) {
	  return action.payload.getIn(['entities', 'rules']).first();
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, EDIT_RULE, function (state, action) {
	  return action.id;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, POST_RULE, function (state, action) {
	  return state;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, RECEIVE_UPDATED_RULE, function (state, action) {
	  return action.payload.getIn(['result', 'status']) === 'error' ? state : action.payload.getIn(['entities', 'rules']).first();
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, RECEIVE_ERROR, function (state, action) {
	  return state.mergeDeep(action.error);
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = _immutable2.default.fromJS({});
	var createState = _immutable2.default.fromJS({
	  id: 'new',
	  description: ''
	});
	
	function ruleReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertResponse = exports.fetchFromAPI = undefined;
	
	var _defineProperty2 = __webpack_require__(533);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _stringify = __webpack_require__(536);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _slicedToArray2 = __webpack_require__(538);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _reduxApiMiddleware = __webpack_require__(224);
	
	var _normalizr = __webpack_require__(545);
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _schema = __webpack_require__(553);
	
	var _schema2 = _interopRequireDefault(_schema);
	
	__webpack_require__(314);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var REQUEST = 'REQUEST';
	var SUCCESS = 'SUCCESS';
	var FAILURE = 'FAILURE';
	var authorization = 'Basic ' + btoa(("adops") + ':' + ("5VUgoHIroKAscJhyPf"));
	var endpoint =  false ? __PROD_API_BASE__ : ("http://ec2-54-147-204-2.compute-1.amazonaws.com:8000/manager/api/");
	
	var fetchFromAPI = exports.fetchFromAPI = function fetchFromAPI(body) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [REQUEST, SUCCESS, FAILURE],
	      _ref2 = (0, _slicedToArray3.default)(_ref, 3),
	      _ref2$ = _ref2[0],
	      requestType = _ref2$ === undefined ? REQUEST : _ref2$,
	      _ref2$2 = _ref2[1],
	      successType = _ref2$2 === undefined ? SUCCESS : _ref2$2,
	      _ref2$3 = _ref2[2],
	      failureType = _ref2$3 === undefined ? FAILURE : _ref2$3;
	
	  return (0, _defineProperty3.default)({}, _reduxApiMiddleware.CALL_API, {
	    endpoint: endpoint,
	    method: 'POST',
	    body: (0, _stringify2.default)(body),
	    types: [requestType, {
	      type: successType,
	      payload: function payload(action, state, response) {
	        return response.json().then(function (json) {
	          return convertResponse(json);
	        });
	      }
	    }, failureType],
	    headers: {
	      'Authorization': authorization,
	      'Content-Type': 'application/json'
	    }
	  });
	};
	
	var convertResponse = exports.convertResponse = function convertResponse(response) {
	  return _immutable2.default.fromJS((0, _normalizr.normalize)(response, _schema2.default));
	};
	
	exports.default = fetchFromAPI;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(537), __esModule: true };

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(7)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(539);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(542);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(540), __esModule: true };

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(420);
	__webpack_require__(409);
	module.exports = __webpack_require__(541);

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(521)
	  , ITERATOR  = __webpack_require__(419)('iterator')
	  , Iterators = __webpack_require__(414);
	module.exports = __webpack_require__(7).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(543), __esModule: true };

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(420);
	__webpack_require__(409);
	module.exports = __webpack_require__(544);

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12)
	  , get      = __webpack_require__(520);
	module.exports = __webpack_require__(7).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.denormalize = exports.normalize = exports.schema = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Entity = __webpack_require__(546);
	
	var _Entity2 = _interopRequireDefault(_Entity);
	
	var _Union = __webpack_require__(548);
	
	var _Union2 = _interopRequireDefault(_Union);
	
	var _Values = __webpack_require__(550);
	
	var _Values2 = _interopRequireDefault(_Values);
	
	var _Array = __webpack_require__(551);
	
	var ArrayUtils = _interopRequireWildcard(_Array);
	
	var _Object = __webpack_require__(552);
	
	var ObjectUtils = _interopRequireWildcard(_Object);
	
	var _ImmutableUtils = __webpack_require__(547);
	
	var ImmutableUtils = _interopRequireWildcard(_ImmutableUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var visit = function visit(value, parent, key, schema, addEntity) {
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
	    return value;
	  }
	
	  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
	    var method = Array.isArray(schema) ? ArrayUtils.normalize : ObjectUtils.normalize;
	    return method(schema, value, parent, key, visit, addEntity);
	  }
	
	  return schema.normalize(value, parent, key, visit, addEntity);
	};
	
	var addEntities = function addEntities(entities) {
	  return function (schema, processedEntity, value, parent, key) {
	    var schemaKey = schema.key;
	    var id = schema.getId(value, parent, key);
	    if (!(schemaKey in entities)) {
	      entities[schemaKey] = {};
	    }
	
	    var existingEntity = entities[schemaKey][id];
	    if (existingEntity) {
	      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
	    } else {
	      entities[schemaKey][id] = processedEntity;
	    }
	  };
	};
	
	var schema = exports.schema = {
	  Array: ArrayUtils.default,
	  Entity: _Entity2.default,
	  Object: ObjectUtils.default,
	  Union: _Union2.default,
	  Values: _Values2.default
	};
	
	var normalize = exports.normalize = function normalize(input, schema) {
	  if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
	    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
	  }
	
	  var entities = {};
	  var addEntity = addEntities(entities);
	
	  var result = visit(input, input, null, schema, addEntity);
	  return { entities: entities, result: result };
	};
	
	var unvisit = function unvisit(input, schema, getDenormalizedEntity) {
	  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
	    var method = Array.isArray(schema) ? ArrayUtils.denormalize : ObjectUtils.denormalize;
	    return method(schema, input, unvisit, getDenormalizedEntity);
	  }
	
	  if (input === undefined || input === null) {
	    return input;
	  }
	
	  return schema.denormalize(input, unvisit, getDenormalizedEntity);
	};
	
	var getEntity = function getEntity(entityOrId, schemaKey, entities, isImmutable) {
	  if ((typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object') {
	    return entityOrId;
	  }
	
	  return isImmutable ? entities.getIn([schemaKey, entityOrId.toString()]) : entities[schemaKey][entityOrId];
	};
	
	var getEntities = function getEntities(entities, isImmutable) {
	  return function (schema, entityOrId) {
	    var schemaKey = schema.key;
	
	    return getEntity(entityOrId, schemaKey, entities, isImmutable);
	  };
	};
	
	var denormalize = exports.denormalize = function denormalize(input, schema, entities) {
	  if (!input) {
	    return input;
	  }
	
	  var isImmutable = ImmutableUtils.isImmutable(entities);
	  var getDenormalizedEntity = getEntities(entities, isImmutable);
	  return unvisit(input, schema, getDenormalizedEntity);
	};

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ImmutableUtils = __webpack_require__(547);
	
	var ImmutableUtils = _interopRequireWildcard(_ImmutableUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var getDefaultGetId = function getDefaultGetId(idAttribute) {
	  return function (input) {
	    return ImmutableUtils.isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
	  };
	};
	
	var EntitySchema = function () {
	  function EntitySchema(key) {
	    var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, EntitySchema);
	
	    if (!key || typeof key !== 'string') {
	      throw new Error('Expected a string key for Entity, but found ' + key + '.');
	    }
	
	    var _options$idAttribute = options.idAttribute,
	        idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
	        _options$mergeStrateg = options.mergeStrategy,
	        mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
	      return _extends({}, entityA, entityB);
	    } : _options$mergeStrateg,
	        _options$processStrat = options.processStrategy,
	        processStrategy = _options$processStrat === undefined ? function (input) {
	      return _extends({}, input);
	    } : _options$processStrat;
	
	
	    this._key = key;
	    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
	    this._idAttribute = idAttribute;
	    this._mergeStrategy = mergeStrategy;
	    this._processStrategy = processStrategy;
	    this.define(definition);
	  }
	
	  _createClass(EntitySchema, [{
	    key: 'define',
	    value: function define(definition) {
	      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
	        var schema = definition[key];
	        return _extends({}, entitySchema, _defineProperty({}, key, schema));
	      }, this.schema || {});
	    }
	  }, {
	    key: 'getId',
	    value: function getId(input, parent, key) {
	      return this._getId(input, parent, key);
	    }
	  }, {
	    key: 'merge',
	    value: function merge(entityA, entityB) {
	      return this._mergeStrategy(entityA, entityB);
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      var _this = this;
	
	      var processedEntity = this._processStrategy(input, parent, key);
	      Object.keys(this.schema).forEach(function (key) {
	        if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
	          var schema = _this.schema[key];
	          processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
	        }
	      });
	
	      addEntity(this, processedEntity, input, parent, key);
	      return this.getId(input, parent, key);
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(entityOrId, unvisit, getDenormalizedEntity) {
	      var _this2 = this;
	
	      var entity = getDenormalizedEntity(this, entityOrId);
	      if ((typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) !== 'object' || entity === null) {
	        return entity;
	      }
	
	      if (ImmutableUtils.isImmutable(entity)) {
	        return ImmutableUtils.denormalizeImmutable(this.schema, entity, unvisit, getDenormalizedEntity);
	      }
	
	      var processedEntity = _extends({}, entity);
	      Object.keys(this.schema).forEach(function (key) {
	        if (processedEntity.hasOwnProperty(key)) {
	          var schema = _this2.schema[key];
	          processedEntity[key] = unvisit(processedEntity[key], schema, getDenormalizedEntity);
	        }
	      });
	      return processedEntity;
	    }
	  }, {
	    key: 'key',
	    get: function get() {
	      return this._key;
	    }
	  }, {
	    key: 'idAttribute',
	    get: function get() {
	      return this._idAttribute;
	    }
	  }]);
	
	  return EntitySchema;
	}();
	
	exports.default = EntitySchema;

/***/ },

/***/ 547:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isImmutable = isImmutable;
	exports.denormalizeImmutable = denormalizeImmutable;
	/**
	 * Helpers to enable Immutable compatibility *without* bringing in
	 * the 'immutable' package as a dependency.
	 */
	
	/**
	 * Check if an object is immutable by checking if it has a key specific
	 * to the immutable library.
	 *
	 * @param  {any} object
	 * @return {bool}
	 */
	function isImmutable(object) {
	  return !!(object && (object.hasOwnProperty('__ownerID') || // Immutable.Map
	  object._map && object._map.hasOwnProperty('__ownerID') // Immutable.Record
	  ));
	}
	
	/**
	 * Denormalize an immutable entity.
	 *
	 * @param  {Schema} schema
	 * @param  {Immutable.Map|Immutable.Record} input
	 * @param  {function} unvisit
	 * @param  {function} getDenormalizedEntity
	 * @return {Immutable.Map|Immutable.Record}
	 */
	function denormalizeImmutable(schema, input, unvisit, getDenormalizedEntity) {
	  return Object.keys(schema).reduce(function (object, key) {
	    // Immutable maps cast keys to strings on write so we need to ensure
	    // we're accessing them using string keys.
	    var stringKey = '' + key;
	
	    if (object.has(stringKey)) {
	      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey], getDenormalizedEntity));
	    } else {
	      return object;
	    }
	  }, input);
	}

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Polymorphic = __webpack_require__(549);
	
	var _Polymorphic2 = _interopRequireDefault(_Polymorphic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UnionSchema = function (_PolymorphicSchema) {
	  _inherits(UnionSchema, _PolymorphicSchema);
	
	  function UnionSchema(definition, schemaAttribute) {
	    _classCallCheck(this, UnionSchema);
	
	    if (!schemaAttribute) {
	      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
	    }
	    return _possibleConstructorReturn(this, (UnionSchema.__proto__ || Object.getPrototypeOf(UnionSchema)).call(this, definition, schemaAttribute));
	  }
	
	  _createClass(UnionSchema, [{
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      return this.normalizeValue(input, parent, key, visit, addEntity);
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(input, unvisit, getDenormalizedEntity) {
	      return this.denormalizeValue(input, unvisit, getDenormalizedEntity);
	    }
	  }]);
	
	  return UnionSchema;
	}(_Polymorphic2.default);
	
	exports.default = UnionSchema;

/***/ },

/***/ 549:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PolymorphicSchema = function () {
	  function PolymorphicSchema(definition, schemaAttribute) {
	    _classCallCheck(this, PolymorphicSchema);
	
	    if (schemaAttribute) {
	      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
	        return input[schemaAttribute];
	      } : schemaAttribute;
	    }
	    this.define(definition);
	  }
	
	  _createClass(PolymorphicSchema, [{
	    key: 'define',
	    value: function define(definition) {
	      this.schema = definition;
	    }
	  }, {
	    key: 'getSchemaAttribute',
	    value: function getSchemaAttribute(input, parent, key) {
	      return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
	    }
	  }, {
	    key: 'inferSchema',
	    value: function inferSchema(input, parent, key) {
	      if (this.isSingleSchema) {
	        return this.schema;
	      }
	
	      var attr = this.getSchemaAttribute(input, parent, key);
	      return this.schema[attr];
	    }
	  }, {
	    key: 'normalizeValue',
	    value: function normalizeValue(value, parent, key, visit, addEntity) {
	      var schema = this.inferSchema(value, parent, key);
	      if (!schema) {
	        return value;
	      }
	      var normalizedValue = visit(value, parent, key, schema, addEntity);
	      return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : { id: normalizedValue, schema: this.getSchemaAttribute(value, parent, key) };
	    }
	  }, {
	    key: 'denormalizeValue',
	    value: function denormalizeValue(value, unvisit, getDenormalizedEntity) {
	      if (!this.isSingleSchema && !value.schema) {
	        return value;
	      }
	      var schema = this.isSingleSchema ? this.schema : this.schema[value.schema];
	      return unvisit(value.id || value, schema, getDenormalizedEntity);
	    }
	  }, {
	    key: 'isSingleSchema',
	    get: function get() {
	      return !this._schemaAttribute;
	    }
	  }]);
	
	  return PolymorphicSchema;
	}();
	
	exports.default = PolymorphicSchema;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Polymorphic = __webpack_require__(549);
	
	var _Polymorphic2 = _interopRequireDefault(_Polymorphic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ValuesSchema = function (_PolymorphicSchema) {
	  _inherits(ValuesSchema, _PolymorphicSchema);
	
	  function ValuesSchema() {
	    _classCallCheck(this, ValuesSchema);
	
	    return _possibleConstructorReturn(this, (ValuesSchema.__proto__ || Object.getPrototypeOf(ValuesSchema)).apply(this, arguments));
	  }
	
	  _createClass(ValuesSchema, [{
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      var _this2 = this;
	
	      return Object.keys(input).reduce(function (output, key, index) {
	        var value = input[key];
	        return value !== undefined && value !== null ? _extends({}, output, _defineProperty({}, key, _this2.normalizeValue(value, input, key, visit, addEntity))) : output;
	      }, {});
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(input, unvisit, getDenormalizedEntity) {
	      var _this3 = this;
	
	      return Object.keys(input).reduce(function (output, key) {
	        var entityOrId = input[key];
	        return _extends({}, output, _defineProperty({}, key, _this3.denormalizeValue(entityOrId, unvisit, getDenormalizedEntity)));
	      }, {});
	    }
	  }]);
	
	  return ValuesSchema;
	}(_Polymorphic2.default);
	
	exports.default = ValuesSchema;

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.denormalize = exports.normalize = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Polymorphic = __webpack_require__(549);
	
	var _Polymorphic2 = _interopRequireDefault(_Polymorphic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validateSchema = function validateSchema(definition) {
	  var isArray = Array.isArray(definition);
	  if (isArray && definition.length > 1) {
	    throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
	  }
	
	  return definition[0];
	};
	
	var getValues = function getValues(input) {
	  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
	    return input[key];
	  });
	};
	
	var normalize = exports.normalize = function normalize(schema, input, parent, key, visit, addEntity) {
	  schema = validateSchema(schema);
	
	  var values = getValues(input);
	
	  // Special case: Arrays pass *their* parent on to their children, since there
	  // is not any special information that can be gathered from themselves directly
	  return values.map(function (value, index) {
	    return visit(value, parent, key, schema, addEntity);
	  });
	};
	
	var denormalize = exports.denormalize = function denormalize(schema, input, unvisit, getDenormalizedEntity) {
	  schema = validateSchema(schema);
	  return Array.isArray(input) ? input.map(function (entityOrId) {
	    return unvisit(entityOrId, schema, getDenormalizedEntity);
	  }) : input;
	};
	
	var ArraySchema = function (_PolymorphicSchema) {
	  _inherits(ArraySchema, _PolymorphicSchema);
	
	  function ArraySchema() {
	    _classCallCheck(this, ArraySchema);
	
	    return _possibleConstructorReturn(this, (ArraySchema.__proto__ || Object.getPrototypeOf(ArraySchema)).apply(this, arguments));
	  }
	
	  _createClass(ArraySchema, [{
	    key: 'normalize',
	    value: function normalize(input, parent, key, visit, addEntity) {
	      var _this2 = this;
	
	      var values = getValues(input);
	
	      return values.map(function (value, index) {
	        return _this2.normalizeValue(value, parent, key, visit, addEntity);
	      }).filter(function (value) {
	        return value !== undefined && value !== null;
	      });
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize(input, unvisit, getDenormalizedEntity) {
	      var _this3 = this;
	
	      return Array.isArray(input) ? input.map(function (value) {
	        return _this3.denormalizeValue(value, unvisit, getDenormalizedEntity);
	      }) : input;
	    }
	  }]);
	
	  return ArraySchema;
	}(_Polymorphic2.default);
	
	exports.default = ArraySchema;

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.denormalize = exports.normalize = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ImmutableUtils = __webpack_require__(547);
	
	var ImmutableUtils = _interopRequireWildcard(_ImmutableUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
	  var object = _extends({}, input);
	  Object.keys(schema).forEach(function (key) {
	    var localSchema = schema[key];
	    var value = visit(input[key], input, key, localSchema, addEntity);
	    if (value === undefined || value === null) {
	      delete object[key];
	    } else {
	      object[key] = value;
	    }
	  });
	  return object;
	};
	
	exports.normalize = _normalize;
	var _denormalize = function _denormalize(schema, input, unvisit, getDenormalizedEntity) {
	  if (ImmutableUtils.isImmutable(input)) {
	    return ImmutableUtils.denormalizeImmutable(schema, input, unvisit, getDenormalizedEntity);
	  }
	
	  var object = _extends({}, input);
	  Object.keys(schema).forEach(function (key) {
	    if (object[key]) {
	      object[key] = unvisit(object[key], schema[key], getDenormalizedEntity);
	    }
	  });
	  return object;
	};
	
	exports.denormalize = _denormalize;
	
	var ObjectSchema = function () {
	  function ObjectSchema(definition) {
	    _classCallCheck(this, ObjectSchema);
	
	    this.define(definition);
	  }
	
	  _createClass(ObjectSchema, [{
	    key: 'define',
	    value: function define(definition) {
	      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
	        var schema = definition[key];
	        return _extends({}, entitySchema, _defineProperty({}, key, schema));
	      }, this.schema || {});
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _normalize.apply(undefined, [this.schema].concat(args));
	    }
	  }, {
	    key: 'denormalize',
	    value: function denormalize() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return _denormalize.apply(undefined, [this.schema].concat(args));
	    }
	  }]);
	
	  return ObjectSchema;
	}();
	
	exports.default = ObjectSchema;

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(372);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _normalizr = __webpack_require__(545);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var conditionSchema = new _normalizr.schema.Entity('conditions', {}, {
	  idAttribute: arrayIndexer,
	  processStrategy: addRuleId
	});
	var actionSchema = new _normalizr.schema.Entity('actions', {}, {
	  idAttribute: arrayIndexer,
	  processStrategy: addRuleId
	});
	var ruleSchema = new _normalizr.schema.Entity('rules', {
	  conditions: [conditionSchema],
	  actions: [actionSchema]
	});
	var dimensionSchema = new _normalizr.schema.Entity('dimensions', {}, {
	  idAttribute: 'label'
	});
	var payloadSchema = new _normalizr.schema.Object({
	  rules: [ruleSchema],
	  dimensions: [dimensionSchema],
	  rule: ruleSchema
	});
	var adDirectorSchema = new _normalizr.schema.Object({
	  payload: payloadSchema
	});
	
	function arrayIndexer(value, parent, key) {
	  return parent.id + '_' + parent[key].indexOf(value);
	}
	
	function addRuleId(value, parent, key) {
	  return (0, _assign2.default)({}, value, { ruleId: parent.id });
	}
	
	// export { ruleSchema }
	exports.default = adDirectorSchema;

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ActionList = undefined;
	
	var _keys = __webpack_require__(555);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ActionContainer = __webpack_require__(558);
	
	var _ActionContainer2 = _interopRequireDefault(_ActionContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionList = exports.ActionList = function ActionList(_ref) {
	  var ruleId = _ref.ruleId,
	      _ref$actions = _ref.actions,
	      actions = _ref$actions === undefined ? {} : _ref$actions,
	      addAction = _ref.addAction;
	  return _react2.default.createElement(
	    'div',
	    null,
	    (0, _keys2.default)(actions).length ? (0, _keys2.default)(actions).map(function (key) {
	      return _react2.default.createElement(_ActionContainer2.default, { key: key, id: key });
	    }) : _react2.default.createElement(
	      'p',
	      null,
	      'A rule must have at least one action.'
	    ),
	    _react2.default.createElement(
	      'button',
	      {
	        className: 'btn btn-default',
	        onClick: function onClick(e) {
	          e.preventDefault();
	          addAction(ruleId);
	        }
	      },
	      _react2.default.createElement('div', { className: 'glyphicon glyphicon-plus' }),
	      _react2.default.createElement(
	        'span',
	        null,
	        ' Add Action'
	      )
	    )
	  );
	};
	
	ActionList.propTypes = {
	  ruleId: _react2.default.PropTypes.string.isRequired,
	  actions: _react2.default.PropTypes.object.isRequired,
	  addAction: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = ActionList;

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(556), __esModule: true };

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(557);
	module.exports = __webpack_require__(7).Object.keys;

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(392)
	  , $keys    = __webpack_require__(376);
	
	__webpack_require__(399)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _actions = __webpack_require__(532);
	
	var _Action = __webpack_require__(492);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateActionType: _actions.updateActionType,
	  updateActionRank: _actions.updateActionRank,
	  updateActionYield: _actions.updateActionYield,
	  deleteAction: _actions.deleteAction
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return state.actions.get(ownProps.id).toJS();
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Action2.default);

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Condition = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(496);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _DimensionSelectorContainer = __webpack_require__(560);
	
	var _DimensionSelectorContainer2 = _interopRequireDefault(_DimensionSelectorContainer);
	
	var _ConditionValueContainer = __webpack_require__(562);
	
	var _ConditionValueContainer2 = _interopRequireDefault(_ConditionValueContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var booleanOptions = [{
	  label: 'is',
	  value: true
	}, {
	  label: 'is not',
	  value: false
	}];
	
	var Condition = exports.Condition = function Condition(_ref) {
	  var id = _ref.id,
	      ruleId = _ref.ruleId,
	      _ref$dimension = _ref.dimension,
	      dimension = _ref$dimension === undefined ? 'context.domain' : _ref$dimension,
	      _ref$op = _ref.op,
	      op = _ref$op === undefined ? true : _ref$op,
	      _ref$value = _ref.value,
	      value = _ref$value === undefined ? [] : _ref$value,
	      updateConditionDimension = _ref.updateConditionDimension,
	      updateConditionOp = _ref.updateConditionOp,
	      updateConditionValue = _ref.updateConditionValue,
	      deleteCondition = _ref.deleteCondition;
	  return _react2.default.createElement(
	    'fieldset',
	    { className: 'panel panel-default' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-sm-6' },
	        _react2.default.createElement(_DimensionSelectorContainer2.default, {
	          dimension: dimension,
	          onChange: function onChange(dimension) {
	            updateConditionDimension({
	              id: id,
	              dimension: dimension
	            });
	          }
	        })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'col-sm-6' },
	        _react2.default.createElement(_reactSelect2.default, {
	          value: op,
	          simpleValue: true,
	          options: booleanOptions,
	          onChange: function onChange(value) {
	            updateConditionOp({
	              id: id,
	              op: value
	            });
	          }
	        })
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(
	        'div',
	        { className: 'col-xs-12' },
	        _react2.default.createElement(_ConditionValueContainer2.default, {
	          id: id,
	          onChange: function onChange(value) {
	            updateConditionValue({
	              id: id,
	              ruleId: ruleId,
	              value: value
	            });
	          }
	        })
	      )
	    ),
	    _react2.default.createElement(
	      'button',
	      {
	        className: 'btn btn-default',
	        onClick: function onClick(e) {
	          e.preventDefault();
	          deleteCondition({
	            id: id,
	            ruleId: ruleId
	          });
	        }
	      },
	      _react2.default.createElement('div', { className: 'glyphicon glyphicon-minus' }),
	      _react2.default.createElement(
	        'span',
	        null,
	        ' Delete Condition '
	      )
	    )
	  );
	};
	
	Condition.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  ruleId: _react2.default.PropTypes.string.isRequired,
	  dimension: _react2.default.PropTypes.string.isRequired,
	  op: _react2.default.PropTypes.bool.isRequired,
	  value: _react2.default.PropTypes.array.isRequired,
	  updateConditionDimension: _react2.default.PropTypes.func.isRequired,
	  updateConditionOp: _react2.default.PropTypes.func.isRequired,
	  updateConditionValue: _react2.default.PropTypes.func.isRequired,
	  deleteCondition: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Condition;

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _DimensionSelector = __webpack_require__(561);
	
	var _DimensionSelector2 = _interopRequireDefault(_DimensionSelector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    dimensions: state.dimensions.toJS()
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_DimensionSelector2.default);

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DimensionSelector = undefined;
	
	var _keys = __webpack_require__(555);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(496);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	__webpack_require__(530);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DimensionSelector = exports.DimensionSelector = function DimensionSelector(_ref) {
	  var dimension = _ref.dimension,
	      dimensions = _ref.dimensions,
	      onChange = _ref.onChange;
	  return _react2.default.createElement(_reactSelect2.default, {
	    simpleValue: true,
	    value: dimension,
	    options: (0, _keys2.default)(dimensions).map(function (label) {
	      return {
	        value: label,
	        label: label
	      };
	    }),
	    onChange: onChange
	  });
	};
	
	DimensionSelector.propTypes = {
	  dimension: _react2.default.PropTypes.string.isRequired,
	  dimensions: _react2.default.PropTypes.object.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = DimensionSelector;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(371);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _reactRedux = __webpack_require__(447);
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _ConditionValue = __webpack_require__(563);
	
	var _ConditionValue2 = _interopRequireDefault(_ConditionValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var condition = state.conditions.get(ownProps.id, _immutable2.default.Map()).toJS();
	  var dimension = state.dimensions.get(condition.dimension, _immutable2.default.Map()).toJS();
	
	  return (0, _extends3.default)({
	    value: condition.value
	  }, dimension);
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_ConditionValue2.default);

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConditionValue = undefined;
	
	var _toConsumableArray2 = __webpack_require__(564);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _extends2 = __webpack_require__(371);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _map = __webpack_require__(511);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSelect = __webpack_require__(496);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _countrycodes = __webpack_require__(570);
	
	var _countrycodes2 = _interopRequireDefault(_countrycodes);
	
	__webpack_require__(530);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO clean up and separate this code
	var componentMap = new _map2.default([['boolean', BooleanValue], ['integer', StringValue], ['string', StringValue]]);
	
	var predefinedData = new _map2.default([['owner.country', _countrycodes2.default], ['reader.country', _countrycodes2.default]]);
	
	var SelectComponent = _reactSelect2.default.Creatable;
	
	var ConditionValue = exports.ConditionValue = function ConditionValue(props) {
	  var options = getPredefinedOptions(props);
	  var areOptionsPredefined = options.length > 0;
	  var values = getValidatedValues(props);
	
	  if (areOptionsPredefined) {
	    SelectComponent = _reactSelect2.default;
	  }
	
	  var newProps = (0, _extends3.default)({}, props, {
	    options: options,
	    values: values
	  });
	
	  return componentMap.get(props.type)(newProps);
	};
	
	ConditionValue.propTypes = {
	  value: _react2.default.PropTypes.array.isRequired,
	  onChange: _react2.default.PropTypes.func.isRequired
	};
	
	function getPredefinedOptions(_ref) {
	  var label = _ref.label,
	      format = _ref.format;
	
	  var options = [];
	  var predefinedOptions = predefinedData.get(label) || [];
	
	  options.push.apply(options, (0, _toConsumableArray3.default)(predefinedOptions));
	
	  var optionsFromFormat = getOptionsFromFormat(format);
	
	  options.push.apply(options, (0, _toConsumableArray3.default)(optionsFromFormat));
	
	  return options;
	}
	
	function getOptionsFromFormat(format) {
	  var predefinedValues = /([a-z]+\|)+[a-z]+/g;
	
	  if (predefinedValues.test(format)) {
	    var matchedValues = format.match(predefinedValues)[0].split('|');
	
	    return matchedValues.map(function (v) {
	      return {
	        value: v,
	        label: v
	      };
	    });
	  }
	
	  return [];
	}
	
	// TODO add validation errors in UI
	function getValidatedValues(_ref2) {
	  var value = _ref2.value,
	      type = _ref2.type,
	      format = _ref2.format;
	
	  var validationPattern = void 0;
	
	  switch (type) {
	    case 'integer':
	      validationPattern = /^\d+$/;
	      return value.filter(function (v) {
	        return validationPattern.test(v);
	      });
	    case 'string':
	      validationPattern = new RegExp(format);
	      return value.filter(function (v) {
	        return validationPattern.test(v);
	      });
	    default:
	      return value;
	  }
	}
	
	function BooleanValue(props) {
	  var booleanOptions = [{
	    label: 'true',
	    value: true
	  }, {
	    label: 'false',
	    value: false
	  }];
	
	  return _react2.default.createElement(SelectComponent, {
	    simpleValue: true,
	    value: props.values[0],
	    options: booleanOptions,
	    onChange: function onChange(value) {
	      return props.onChange([value]);
	    }
	  });
	}
	
	BooleanValue.propTypes = ConditionValue.propTypes;
	
	function IntegerValue(props) {
	  return _react2.default.createElement(SelectComponent, {
	    simpleValue: true,
	    multi: true,
	    value: props.values,
	    onChange: function onChange(value) {
	      return props.onChange(value.split(','));
	    }
	  });
	}
	
	IntegerValue.propTypes = ConditionValue.propTypes;
	
	function valuesToOptions(value) {
	  return value.map(function (label) {
	    return {
	      value: label,
	      label: label
	    };
	  });
	}
	
	function StringValue(props) {
	  var options = props.options.concat(valuesToOptions(props.values));
	
	  return _react2.default.createElement(SelectComponent, {
	    simpleValue: true,
	    multi: true,
	    value: props.values,
	    options: options,
	    onChange: function onChange(value) {
	      return props.onChange(value.split(','));
	    }
	  });
	}
	
	StringValue.propTypes = ConditionValue.propTypes;
	
	exports.default = ConditionValue;

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(565);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(566), __esModule: true };

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(409);
	__webpack_require__(567);
	module.exports = __webpack_require__(7).Array.from;

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(8)
	  , $export        = __webpack_require__(5)
	  , toObject       = __webpack_require__(392)
	  , call           = __webpack_require__(518)
	  , isArrayIter    = __webpack_require__(519)
	  , toLength       = __webpack_require__(383)
	  , createProperty = __webpack_require__(568)
	  , getIterFn      = __webpack_require__(520);
	
	$export($export.S + $export.F * !__webpack_require__(569)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(19);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(419)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },

/***/ 570:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  'label': 'Afghanistan',
	  'value': 'AF'
	}, {
	  'label': 'Aland Islands',
	  'value': 'AX'
	}, {
	  'label': 'Albania',
	  'value': 'AL'
	}, {
	  'label': 'Algeria',
	  'value': 'DZ'
	}, {
	  'label': 'American Samoa',
	  'value': 'AS'
	}, {
	  'label': 'Andorra',
	  'value': 'AD'
	}, {
	  'label': 'Angola',
	  'value': 'AO'
	}, {
	  'label': 'Anguilla',
	  'value': 'AI'
	}, {
	  'label': 'Antarctica',
	  'value': 'AQ'
	}, {
	  'label': 'Antigua and Barbuda',
	  'value': 'AG'
	}, {
	  'label': 'Argentina',
	  'value': 'AR'
	}, {
	  'label': 'Armenia',
	  'value': 'AM'
	}, {
	  'label': 'Aruba',
	  'value': 'AW'
	}, {
	  'label': 'Australia',
	  'value': 'AU'
	}, {
	  'label': 'Austria',
	  'value': 'AT'
	}, {
	  'label': 'Azerbaijan',
	  'value': 'AZ'
	}, {
	  'label': 'Bahamas',
	  'value': 'BS'
	}, {
	  'label': 'Bahrain',
	  'value': 'BH'
	}, {
	  'label': 'Bangladesh',
	  'value': 'BD'
	}, {
	  'label': 'Barbados',
	  'value': 'BB'
	}, {
	  'label': 'Belarus',
	  'value': 'BY'
	}, {
	  'label': 'Belgium',
	  'value': 'BE'
	}, {
	  'label': 'Belize',
	  'value': 'BZ'
	}, {
	  'label': 'Benin',
	  'value': 'BJ'
	}, {
	  'label': 'Bermuda',
	  'value': 'BM'
	}, {
	  'label': 'Bhutan',
	  'value': 'BT'
	}, {
	  'label': 'Bolivia',
	  'value': 'BO'
	}, {
	  'label': 'Bosnia and Herzegovina',
	  'value': 'BA'
	}, {
	  'label': 'Botswana',
	  'value': 'BW'
	}, {
	  'label': 'Bouvet Island',
	  'value': 'BV'
	}, {
	  'label': 'Brazil',
	  'value': 'BR'
	}, {
	  'label': 'British Virgin Islands',
	  'value': 'VG'
	}, {
	  'label': 'British Indian Ocean Territory',
	  'value': 'IO'
	}, {
	  'label': 'Brunei Darussalam',
	  'value': 'BN'
	}, {
	  'label': 'Bulgaria',
	  'value': 'BG'
	}, {
	  'label': 'Burkina Faso',
	  'value': 'BF'
	}, {
	  'label': 'Burundi',
	  'value': 'BI'
	}, {
	  'label': 'Cambodia',
	  'value': 'KH'
	}, {
	  'label': 'Cameroon',
	  'value': 'CM'
	}, {
	  'label': 'Canada',
	  'value': 'CA'
	}, {
	  'label': 'Cape Verde',
	  'value': 'CV'
	}, {
	  'label': 'Cayman Islands',
	  'value': 'KY'
	}, {
	  'label': 'Central African Republic',
	  'value': 'CF'
	}, {
	  'label': 'Chad',
	  'value': 'TD'
	}, {
	  'label': 'Chile',
	  'value': 'CL'
	}, {
	  'label': 'China',
	  'value': 'CN'
	}, {
	  'label': 'Hong Kong, Special Administrative Region of China',
	  'value': 'HK'
	}, {
	  'label': 'Macao, Special Administrative Region of China',
	  'value': 'MO'
	}, {
	  'label': 'Christmas Island',
	  'value': 'CX'
	}, {
	  'label': 'Cocos (Keeling) Islands',
	  'value': 'CC'
	}, {
	  'label': 'Colombia',
	  'value': 'CO'
	}, {
	  'label': 'Comoros',
	  'value': 'KM'
	}, {
	  'label': 'Congo (Brazzaville)',
	  'value': 'CG'
	}, {
	  'label': 'Congo, Democratic Republic of the',
	  'value': 'CD'
	}, {
	  'label': 'Cook Islands',
	  'value': 'CK'
	}, {
	  'label': 'Costa Rica',
	  'value': 'CR'
	}, {
	  'label': "Côte d'Ivoire",
	  'value': 'CI'
	}, {
	  'label': 'Croatia',
	  'value': 'HR'
	}, {
	  'label': 'Cuba',
	  'value': 'CU'
	}, {
	  'label': 'Cyprus',
	  'value': 'CY'
	}, {
	  'label': 'Czech Republic',
	  'value': 'CZ'
	}, {
	  'label': 'Denmark',
	  'value': 'DK'
	}, {
	  'label': 'Djibouti',
	  'value': 'DJ'
	}, {
	  'label': 'Dominica',
	  'value': 'DM'
	}, {
	  'label': 'Dominican Republic',
	  'value': 'DO'
	}, {
	  'label': 'Ecuador',
	  'value': 'EC'
	}, {
	  'label': 'Egypt',
	  'value': 'EG'
	}, {
	  'label': 'El Salvador',
	  'value': 'SV'
	}, {
	  'label': 'Equatorial Guinea',
	  'value': 'GQ'
	}, {
	  'label': 'Eritrea',
	  'value': 'ER'
	}, {
	  'label': 'Estonia',
	  'value': 'EE'
	}, {
	  'label': 'Ethiopia',
	  'value': 'ET'
	}, {
	  'label': 'Falkland Islands (Malvinas)',
	  'value': 'FK'
	}, {
	  'label': 'Faroe Islands',
	  'value': 'FO'
	}, {
	  'label': 'Fiji',
	  'value': 'FJ'
	}, {
	  'label': 'Finland',
	  'value': 'FI'
	}, {
	  'label': 'France',
	  'value': 'FR'
	}, {
	  'label': 'French Guiana',
	  'value': 'GF'
	}, {
	  'label': 'French Polynesia',
	  'value': 'PF'
	}, {
	  'label': 'French Southern Territories',
	  'value': 'TF'
	}, {
	  'label': 'Gabon',
	  'value': 'GA'
	}, {
	  'label': 'Gambia',
	  'value': 'GM'
	}, {
	  'label': 'Georgia',
	  'value': 'GE'
	}, {
	  'label': 'Germany',
	  'value': 'DE'
	}, {
	  'label': 'Ghana',
	  'value': 'GH'
	}, {
	  'label': 'Gibraltar',
	  'value': 'GI'
	}, {
	  'label': 'Greece',
	  'value': 'GR'
	}, {
	  'label': 'Greenland',
	  'value': 'GL'
	}, {
	  'label': 'Grenada',
	  'value': 'GD'
	}, {
	  'label': 'Guadeloupe',
	  'value': 'GP'
	}, {
	  'label': 'Guam',
	  'value': 'GU'
	}, {
	  'label': 'Guatemala',
	  'value': 'GT'
	}, {
	  'label': 'Guernsey',
	  'value': 'GG'
	}, {
	  'label': 'Guinea',
	  'value': 'GN'
	}, {
	  'label': 'Guinea-Bissau',
	  'value': 'GW'
	}, {
	  'label': 'Guyana',
	  'value': 'GY'
	}, {
	  'label': 'Haiti',
	  'value': 'HT'
	}, {
	  'label': 'Heard Island and Mcdonald Islands',
	  'value': 'HM'
	}, {
	  'label': 'Holy See (Vatican City State)',
	  'value': 'VA'
	}, {
	  'label': 'Honduras',
	  'value': 'HN'
	}, {
	  'label': 'Hungary',
	  'value': 'HU'
	}, {
	  'label': 'Iceland',
	  'value': 'IS'
	}, {
	  'label': 'India',
	  'value': 'IN'
	}, {
	  'label': 'Indonesia',
	  'value': 'ID'
	}, {
	  'label': 'Iran, Islamic Republic of',
	  'value': 'IR'
	}, {
	  'label': 'Iraq',
	  'value': 'IQ'
	}, {
	  'label': 'Ireland',
	  'value': 'IE'
	}, {
	  'label': 'Isle of Man',
	  'value': 'IM'
	}, {
	  'label': 'Israel',
	  'value': 'IL'
	}, {
	  'label': 'Italy',
	  'value': 'IT'
	}, {
	  'label': 'Jamaica',
	  'value': 'JM'
	}, {
	  'label': 'Japan',
	  'value': 'JP'
	}, {
	  'label': 'Jersey',
	  'value': 'JE'
	}, {
	  'label': 'Jordan',
	  'value': 'JO'
	}, {
	  'label': 'Kazakhstan',
	  'value': 'KZ'
	}, {
	  'label': 'Kenya',
	  'value': 'KE'
	}, {
	  'label': 'Kiribati',
	  'value': 'KI'
	}, {
	  'label': "Korea, Democratic People's Republic of",
	  'value': 'KP'
	}, {
	  'label': 'Korea, Republic of',
	  'value': 'KR'
	}, {
	  'label': 'Kuwait',
	  'value': 'KW'
	}, {
	  'label': 'Kyrgyzstan',
	  'value': 'KG'
	}, {
	  'label': 'Lao PDR',
	  'value': 'LA'
	}, {
	  'label': 'Latvia',
	  'value': 'LV'
	}, {
	  'label': 'Lebanon',
	  'value': 'LB'
	}, {
	  'label': 'Lesotho',
	  'value': 'LS'
	}, {
	  'label': 'Liberia',
	  'value': 'LR'
	}, {
	  'label': 'Libya',
	  'value': 'LY'
	}, {
	  'label': 'Liechtenstein',
	  'value': 'LI'
	}, {
	  'label': 'Lithuania',
	  'value': 'LT'
	}, {
	  'label': 'Luxembourg',
	  'value': 'LU'
	}, {
	  'label': 'Macedonia, Republic of',
	  'value': 'MK'
	}, {
	  'label': 'Madagascar',
	  'value': 'MG'
	}, {
	  'label': 'Malawi',
	  'value': 'MW'
	}, {
	  'label': 'Malaysia',
	  'value': 'MY'
	}, {
	  'label': 'Maldives',
	  'value': 'MV'
	}, {
	  'label': 'Mali',
	  'value': 'ML'
	}, {
	  'label': 'Malta',
	  'value': 'MT'
	}, {
	  'label': 'Marshall Islands',
	  'value': 'MH'
	}, {
	  'label': 'Martinique',
	  'value': 'MQ'
	}, {
	  'label': 'Mauritania',
	  'value': 'MR'
	}, {
	  'label': 'Mauritius',
	  'value': 'MU'
	}, {
	  'label': 'Mayotte',
	  'value': 'YT'
	}, {
	  'label': 'Mexico',
	  'value': 'MX'
	}, {
	  'label': 'Micronesia, Federated States of',
	  'value': 'FM'
	}, {
	  'label': 'Moldova',
	  'value': 'MD'
	}, {
	  'label': 'Monaco',
	  'value': 'MC'
	}, {
	  'label': 'Mongolia',
	  'value': 'MN'
	}, {
	  'label': 'Montenegro',
	  'value': 'ME'
	}, {
	  'label': 'Montserrat',
	  'value': 'MS'
	}, {
	  'label': 'Morocco',
	  'value': 'MA'
	}, {
	  'label': 'Mozambique',
	  'value': 'MZ'
	}, {
	  'label': 'Myanmar',
	  'value': 'MM'
	}, {
	  'label': 'Namibia',
	  'value': 'NA'
	}, {
	  'label': 'Nauru',
	  'value': 'NR'
	}, {
	  'label': 'Nepal',
	  'value': 'NP'
	}, {
	  'label': 'Netherlands',
	  'value': 'NL'
	}, {
	  'label': 'Netherlands Antilles',
	  'value': 'AN'
	}, {
	  'label': 'New Caledonia',
	  'value': 'NC'
	}, {
	  'label': 'New Zealand',
	  'value': 'NZ'
	}, {
	  'label': 'Nicaragua',
	  'value': 'NI'
	}, {
	  'label': 'Niger',
	  'value': 'NE'
	}, {
	  'label': 'Nigeria',
	  'value': 'NG'
	}, {
	  'label': 'Niue',
	  'value': 'NU'
	}, {
	  'label': 'Norfolk Island',
	  'value': 'NF'
	}, {
	  'label': 'Northern Mariana Islands',
	  'value': 'MP'
	}, {
	  'label': 'Norway',
	  'value': 'NO'
	}, {
	  'label': 'Oman',
	  'value': 'OM'
	}, {
	  'label': 'Pakistan',
	  'value': 'PK'
	}, {
	  'label': 'Palau',
	  'value': 'PW'
	}, {
	  'label': 'Palestinian Territory, Occupied',
	  'value': 'PS'
	}, {
	  'label': 'Panama',
	  'value': 'PA'
	}, {
	  'label': 'Papua New Guinea',
	  'value': 'PG'
	}, {
	  'label': 'Paraguay',
	  'value': 'PY'
	}, {
	  'label': 'Peru',
	  'value': 'PE'
	}, {
	  'label': 'Philippines',
	  'value': 'PH'
	}, {
	  'label': 'Pitcairn',
	  'value': 'PN'
	}, {
	  'label': 'Poland',
	  'value': 'PL'
	}, {
	  'label': 'Portugal',
	  'value': 'PT'
	}, {
	  'label': 'Puerto Rico',
	  'value': 'PR'
	}, {
	  'label': 'Qatar',
	  'value': 'QA'
	}, {
	  'label': 'Réunion',
	  'value': 'RE'
	}, {
	  'label': 'Romania',
	  'value': 'RO'
	}, {
	  'label': 'Russian Federation',
	  'value': 'RU'
	}, {
	  'label': 'Rwanda',
	  'value': 'RW'
	}, {
	  'label': 'Saint-Barthélemy',
	  'value': 'BL'
	}, {
	  'label': 'Saint Helena',
	  'value': 'SH'
	}, {
	  'label': 'Saint Kitts and Nevis',
	  'value': 'KN'
	}, {
	  'label': 'Saint Lucia',
	  'value': 'LC'
	}, {
	  'label': 'Saint-Martin (French part)',
	  'value': 'MF'
	}, {
	  'label': 'Saint Pierre and Miquelon',
	  'value': 'PM'
	}, {
	  'label': 'Saint Vincent and Grenadines',
	  'value': 'VC'
	}, {
	  'label': 'Samoa',
	  'value': 'WS'
	}, {
	  'label': 'San Marino',
	  'value': 'SM'
	}, {
	  'label': 'Sao Tome and Principe',
	  'value': 'ST'
	}, {
	  'label': 'Saudi Arabia',
	  'value': 'SA'
	}, {
	  'label': 'Senegal',
	  'value': 'SN'
	}, {
	  'label': 'Serbia',
	  'value': 'RS'
	}, {
	  'label': 'Seychelles',
	  'value': 'SC'
	}, {
	  'label': 'Sierra Leone',
	  'value': 'SL'
	}, {
	  'label': 'Singapore',
	  'value': 'SG'
	}, {
	  'label': 'Slovakia',
	  'value': 'SK'
	}, {
	  'label': 'Slovenia',
	  'value': 'SI'
	}, {
	  'label': 'Solomon Islands',
	  'value': 'SB'
	}, {
	  'label': 'Somalia',
	  'value': 'SO'
	}, {
	  'label': 'South Africa',
	  'value': 'ZA'
	}, {
	  'label': 'South Georgia and the South Sandwich Islands',
	  'value': 'GS'
	}, {
	  'label': 'South Sudan',
	  'value': 'SS'
	}, {
	  'label': 'Spain',
	  'value': 'ES'
	}, {
	  'label': 'Sri Lanka',
	  'value': 'LK'
	}, {
	  'label': 'Sudan',
	  'value': 'SD'
	}, {
	  'label': 'Suriname *',
	  'value': 'SR'
	}, {
	  'label': 'Svalbard and Jan Mayen Islands',
	  'value': 'SJ'
	}, {
	  'label': 'Swaziland',
	  'value': 'SZ'
	}, {
	  'label': 'Sweden',
	  'value': 'SE'
	}, {
	  'label': 'Switzerland',
	  'value': 'CH'
	}, {
	  'label': 'Syrian Arab Republic (Syria)',
	  'value': 'SY'
	}, {
	  'label': 'Taiwan, Republic of China',
	  'value': 'TW'
	}, {
	  'label': 'Tajikistan',
	  'value': 'TJ'
	}, {
	  'label': 'Tanzania *, United Republic of',
	  'value': 'TZ'
	}, {
	  'label': 'Thailand',
	  'value': 'TH'
	}, {
	  'label': 'Timor-Leste',
	  'value': 'TL'
	}, {
	  'label': 'Togo',
	  'value': 'TG'
	}, {
	  'label': 'Tokelau',
	  'value': 'TK'
	}, {
	  'label': 'Tonga',
	  'value': 'TO'
	}, {
	  'label': 'Trinidad and Tobago',
	  'value': 'TT'
	}, {
	  'label': 'Tunisia',
	  'value': 'TN'
	}, {
	  'label': 'Turkey',
	  'value': 'TR'
	}, {
	  'label': 'Turkmenistan',
	  'value': 'TM'
	}, {
	  'label': 'Turks and Caicos Islands',
	  'value': 'TC'
	}, {
	  'label': 'Tuvalu',
	  'value': 'TV'
	}, {
	  'label': 'Uganda',
	  'value': 'UG'
	}, {
	  'label': 'Ukraine',
	  'value': 'UA'
	}, {
	  'label': 'United Arab Emirates',
	  'value': 'AE'
	}, {
	  'label': 'United Kingdom',
	  'value': 'GB'
	}, {
	  'label': 'United States of America',
	  'value': 'US'
	}, {
	  'label': 'United States Minor Outlying Islands',
	  'value': 'UM'
	}, {
	  'label': 'Uruguay',
	  'value': 'UY'
	}, {
	  'label': 'Uzbekistan',
	  'value': 'UZ'
	}, {
	  'label': 'Vanuatu',
	  'value': 'VU'
	}, {
	  'label': 'Venezuela (Bolivarian Republic of)',
	  'value': 'VE'
	}, {
	  'label': 'Viet Nam',
	  'value': 'VN'
	}, {
	  'label': 'Virgin Islands, US',
	  'value': 'VI'
	}, {
	  'label': 'Wallis and Futuna Islands',
	  'value': 'WF'
	}, {
	  'label': 'Western Sahara',
	  'value': 'EH'
	}, {
	  'label': 'Yemen',
	  'value': 'YE'
	}, {
	  'label': 'Zambia',
	  'value': 'ZM'
	}, {
	  'label': 'Zimbabwe',
	  'value': 'ZW'
	}];

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConditionList = undefined;
	
	var _keys = __webpack_require__(555);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ConditionContainer = __webpack_require__(572);
	
	var _ConditionContainer2 = _interopRequireDefault(_ConditionContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ConditionList = exports.ConditionList = function ConditionList(_ref) {
	  var ruleId = _ref.ruleId,
	      _ref$conditions = _ref.conditions,
	      conditions = _ref$conditions === undefined ? {} : _ref$conditions,
	      addCondition = _ref.addCondition;
	  return _react2.default.createElement(
	    'div',
	    null,
	    (0, _keys2.default)(conditions).length ? (0, _keys2.default)(conditions).map(function (key) {
	      return _react2.default.createElement(_ConditionContainer2.default, { key: key, id: key });
	    }) : _react2.default.createElement(
	      'p',
	      null,
	      'A rule with no conditions will be applied in every scenario.'
	    ),
	    _react2.default.createElement(
	      'button',
	      {
	        className: 'btn btn-default',
	        onClick: function onClick(e) {
	          e.preventDefault();
	          addCondition(ruleId);
	        }
	      },
	      _react2.default.createElement('div', { className: 'glyphicon glyphicon-plus' }),
	      _react2.default.createElement(
	        'span',
	        null,
	        ' Add Condition'
	      )
	    )
	  );
	};
	
	ConditionList.propTypes = {
	  ruleId: _react2.default.PropTypes.string.isRequired,
	  conditions: _react2.default.PropTypes.object.isRequired,
	  addCondition: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = ConditionList;

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _conditions = __webpack_require__(573);
	
	var _Condition = __webpack_require__(559);
	
	var _Condition2 = _interopRequireDefault(_Condition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateConditionDimension: _conditions.updateConditionDimension,
	  updateConditionOp: _conditions.updateConditionOp,
	  updateConditionValue: _conditions.updateConditionValue,
	  deleteCondition: _conditions.deleteCondition
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return state.conditions.get(ownProps.id, _immutable2.default.Map()).toJS();
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Condition2.default);

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.DELETE_CONDITION = exports.ADD_CONDITION = exports.UPDATE_CONDITION_VALUE = exports.UPDATE_CONDITION_OP = exports.UPDATE_CONDITION_DIMENSION = undefined;
	
	var _defineProperty2 = __webpack_require__(533);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.updateConditionDimension = updateConditionDimension;
	exports.updateConditionOp = updateConditionOp;
	exports.updateConditionValue = updateConditionValue;
	exports.deleteCondition = deleteCondition;
	exports.addCondition = addCondition;
	exports.default = conditionsReducer;
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _rule = __webpack_require__(534);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var UPDATE_CONDITION_DIMENSION = exports.UPDATE_CONDITION_DIMENSION = 'UPDATE_CONDITION_DIMENSION';
	var UPDATE_CONDITION_OP = exports.UPDATE_CONDITION_OP = 'UPDATE_CONDITION_OP';
	var UPDATE_CONDITION_VALUE = exports.UPDATE_CONDITION_VALUE = 'UPDATE_CONDITION_VALUE';
	var ADD_CONDITION = exports.ADD_CONDITION = 'ADD_CONDITION';
	var DELETE_CONDITION = exports.DELETE_CONDITION = 'DELETE_CONDITION';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	function updateConditionDimension(_ref) {
	  var id = _ref.id,
	      dimension = _ref.dimension;
	
	  return {
	    type: UPDATE_CONDITION_DIMENSION,
	    id: id,
	    dimension: dimension
	  };
	}
	
	function updateConditionOp(_ref2) {
	  var id = _ref2.id,
	      op = _ref2.op;
	
	  return {
	    type: UPDATE_CONDITION_OP,
	    id: id,
	    op: op
	  };
	}
	
	function updateConditionValue(_ref3) {
	  var id = _ref3.id,
	      value = _ref3.value;
	
	  return {
	    type: UPDATE_CONDITION_VALUE,
	    id: id,
	    value: value
	  };
	}
	
	function deleteCondition(_ref4) {
	  var id = _ref4.id,
	      ruleId = _ref4.ruleId;
	
	  return {
	    type: DELETE_CONDITION,
	    id: id,
	    ruleId: ruleId
	  };
	}
	
	function addCondition(ruleId) {
	  return {
	    type: ADD_CONDITION,
	    ruleId: ruleId
	  };
	}
	
	var actions = exports.actions = {
	  updateConditionDimension: updateConditionDimension,
	  updateConditionOp: updateConditionOp,
	  updateConditionValue: updateConditionValue,
	  deleteCondition: deleteCondition,
	  addCondition: addCondition
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.RECEIVE_RULE, function (state, action) {
	  return action.payload.getIn(['entities', 'conditions'], initialState);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.RECEIVE_UPDATED_RULE, function (state, action) {
	  return action.payload.getIn(['entities', 'conditions'], state);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.CREATE_RULE, function (state, action) {
	  return initialState;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_CONDITION_DIMENSION, function (state, action) {
	  return state.setIn([action.id, 'dimension'], action.dimension);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_CONDITION_OP, function (state, action) {
	  return state.setIn([action.id, 'op'], action.op);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, UPDATE_CONDITION_VALUE, function (state, action) {
	  return state.setIn([action.id, 'value'], action.value);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, DELETE_CONDITION, function (state, action) {
	  return state.delete(action.id);
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, ADD_CONDITION, function (state, action) {
	  return state.set(action.ruleId + '_' + Date.now(), defaultCondition.set('ruleId', action.ruleId));
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var defaultCondition = _immutable2.default.fromJS({
	  dimension: 'context.domain',
	  op: true,
	  value: []
	});
	var initialState = _immutable2.default.fromJS({});
	
	function conditionsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Review = undefined;
	
	var _keys = __webpack_require__(555);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(575);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO add messages when there are no conditions or no actions
	var Review = exports.Review = function Review(_ref) {
	  var conditions = _ref.conditions,
	      actions = _ref.actions;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'panel panel-default' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-heading' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'panel-title' },
	          'If'
	        )
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'list-group' },
	        conditions.map(function (_ref2, i) {
	          var dimension = _ref2.dimension,
	              op = _ref2.op,
	              value = _ref2.value;
	
	          var isInvalid = !value || !value.length;
	          var operator = isInvalid || op ? 'is' : 'is not';
	
	          return _react2.default.createElement(
	            'li',
	            {
	              key: i,
	              className: 'list-group-item ' + (isInvalid && 'list-group-item-danger') },
	            dimension.split('.').join(' '),
	            ' ',
	            operator,
	            ' ',
	            value.join(' or ') || 'undefined'
	          );
	        })
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'panel panel-default' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-heading' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'panel-title' },
	          'Then'
	        )
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'list-group' },
	        actions.map(function (a, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: i, className: 'list-group-item' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'set ',
	              a.type,
	              ' to '
	            ),
	            _react2.default.createElement(
	              'table',
	              { className: 'table table-bordered' },
	              _react2.default.createElement(
	                'tbody',
	                null,
	                (0, _keys2.default)(a.value).length ? (0, _keys2.default)(a.value).sort().map(function (key, i) {
	                  return _react2.default.createElement(
	                    'tr',
	                    { key: i },
	                    _react2.default.createElement(
	                      'td',
	                      { className: 'action-key' },
	                      key,
	                      ': '
	                    ),
	                    _react2.default.createElement(
	                      'td',
	                      { className: 'action-value' },
	                      Array.isArray(a.value[key]) ? a.value[key].join(', ') : a.value[key]
	                    )
	                  );
	                }) : _react2.default.createElement(
	                  'tr',
	                  { className: 'danger' },
	                  _react2.default.createElement(
	                    'td',
	                    { className: 'text-danger' },
	                    'undefined'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              ' with rank ',
	              a.rank,
	              ' and yield ',
	              a.yield
	            )
	          );
	        })
	      )
	    )
	  );
	};
	
	Review.propTypes = {
	  conditions: _react2.default.PropTypes.array.isRequired,
	  actions: _react2.default.PropTypes.array.isRequired
	};
	
	exports.default = Review;

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(576);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(480)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(576, function() {
				var newContent = __webpack_require__(576);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(479)();
	// imports
	
	
	// module
	exports.push([module.id, ".dimension{text-transform:capitalize}.action-key{white-space:nowrap;width:1%}.action-value{word-break:break-all}", "", {"version":3,"sources":["/./src/routes/Rules/routes/Rule/components/src/routes/Rules/routes/Rule/components/Review.scss"],"names":[],"mappings":"AAAA,WACE,yBAA0B,CAC3B,YAGC,mBAAmB,QACV,CACV,cAGG,oBAAqB,CACxB","file":"Review.scss","sourcesContent":[".dimension {\n  text-transform: capitalize;\n}\n\n.action-key {\n  white-space: nowrap;\n  width: 1%;\n}\n\n.action-value {\n    word-break: break-all;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rule = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ConditionListContainer = __webpack_require__(578);
	
	var _ConditionListContainer2 = _interopRequireDefault(_ConditionListContainer);
	
	var _ActionListContainer = __webpack_require__(579);
	
	var _ActionListContainer2 = _interopRequireDefault(_ActionListContainer);
	
	var _ReviewContainer = __webpack_require__(580);
	
	var _ReviewContainer2 = _interopRequireDefault(_ReviewContainer);
	
	var _StatusMessageContainer = __webpack_require__(581);
	
	var _StatusMessageContainer2 = _interopRequireDefault(_StatusMessageContainer);
	
	__webpack_require__(583);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO consider using redux forms
	// TODO change what is displayed based on location hash (#conditions, #actions, etc.)
	var Rule = exports.Rule = function Rule(_ref) {
	  var id = _ref.id,
	      updateRule = _ref.updateRule,
	      _ref$description = _ref.description,
	      description = _ref$description === undefined ? '' : _ref$description,
	      updateDescription = _ref.updateDescription,
	      params = _ref.params;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_StatusMessageContainer2.default, null),
	    _react2.default.createElement(
	      'form',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'label',
	          {
	            className: 'control-label',
	            htmlFor: 'description-input'
	          },
	          'Description'
	        ),
	        _react2.default.createElement('input', {
	          id: 'description-input',
	          className: 'form-control',
	          type: 'text',
	          value: description,
	          onChange: function onChange(e) {
	            updateDescription({
	              id: id,
	              description: e.target.value
	            });
	          }
	        })
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: 'nav nav-tabs', role: 'tablist' },
	        _react2.default.createElement(
	          'li',
	          { role: 'presentation', className: 'active' },
	          _react2.default.createElement(
	            'a',
	            { href: '#conditions', role: 'tab', 'data-toggle': 'tab' },
	            'Conditions'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { role: 'presentation' },
	          _react2.default.createElement(
	            'a',
	            { href: '#actions', role: 'tab', 'data-toggle': 'tab' },
	            'Actions'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { role: 'presentation' },
	          _react2.default.createElement(
	            'a',
	            { href: '#review', role: 'tab', 'data-toggle': 'tab' },
	            'Review'
	          )
	        )
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        'div',
	        { className: 'tab-content' },
	        _react2.default.createElement(
	          'div',
	          { role: 'tabpanel', id: 'conditions', className: 'form-group tab-pane active fade in' },
	          _react2.default.createElement(_ConditionListContainer2.default, { ruleId: id })
	        ),
	        _react2.default.createElement(
	          'div',
	          { role: 'tabpanel', id: 'actions', className: 'form-group tab-pane fade' },
	          _react2.default.createElement(_ActionListContainer2.default, { ruleId: id })
	        ),
	        _react2.default.createElement(
	          'div',
	          { role: 'tabpanel', id: 'review', className: 'form-group tab-pane fade' },
	          _react2.default.createElement(_ReviewContainer2.default, null),
	          _react2.default.createElement(
	            'button',
	            {
	              type: 'submit',
	              className: 'btn btn-primary ',
	              disabled: !(id === 'new' || id === params.id),
	              onClick: function onClick(e) {
	                e.preventDefault();
	                updateRule();
	              } },
	            _react2.default.createElement('div', { className: 'glyphicon glyphicon-floppy-disk' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              ' Submit'
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	Rule.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  updateRule: _react2.default.PropTypes.func.isRequired,
	  description: _react2.default.PropTypes.string.isRequired,
	  updateDescription: _react2.default.PropTypes.func.isRequired,
	  params: _react2.default.PropTypes.object.isRequired
	};
	
	exports.default = Rule;

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _conditions = __webpack_require__(573);
	
	var _ConditionList = __webpack_require__(571);
	
	var _ConditionList2 = _interopRequireDefault(_ConditionList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  addCondition: _conditions.addCondition
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    conditions: state.conditions.filter(function (c) {
	      return c.get('ruleId') === ownProps.ruleId;
	    }).toJS()
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ConditionList2.default);

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _actions = __webpack_require__(532);
	
	var _ActionList = __webpack_require__(554);
	
	var _ActionList2 = _interopRequireDefault(_ActionList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  addAction: _actions.addAction
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    actions: state.actions.filter(function (a) {
	      return a.get('ruleId') === ownProps.ruleId;
	    }).toJS()
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ActionList2.default);

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _Review = __webpack_require__(574);
	
	var _Review2 = _interopRequireDefault(_Review);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    conditions: state.conditions.toList().toJS(),
	    actions: state.actions.toList().toJS()
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Review2.default);

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _StatusMessage = __webpack_require__(582);
	
	var _StatusMessage2 = _interopRequireDefault(_StatusMessage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return state.status.toJS();
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_StatusMessage2.default);

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StatusMessage = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(315);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StatusMessage = exports.StatusMessage = function StatusMessage(_ref) {
	  var status = _ref.status,
	      payload = _ref.payload,
	      error = _ref.error;
	  return _react2.default.createElement(
	    'div',
	    { className: 'alert  ' + (error && 'alert-danger') + ' ' + (status === 'ok' && 'alert-success') + ' ' + (!status && 'hidden') },
	    status && (error || _react2.default.createElement(
	      'span',
	      null,
	      '\'Success!\' ',
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/rules/' + payload.rule },
	        'Go to updated rule'
	      ),
	      '.'
	    ))
	  );
	};
	
	StatusMessage.propTypes = {
	  status: _react2.default.PropTypes.string,
	  payload: _react2.default.PropTypes.object,
	  error: _react2.default.PropTypes.string
	};
	
	exports.default = StatusMessage;

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(584);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(480)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(584, function() {
				var newContent = __webpack_require__(584);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(479)();
	// imports
	
	
	// module
	exports.push([module.id, ".Select-value-label{word-break:break-all}", "", {"version":3,"sources":["/./src/routes/Rules/routes/Rule/components/src/routes/Rules/routes/Rule/components/Rule.scss"],"names":[],"mappings":"AAAA,oBACE,oBAAqB,CACtB","file":"Rule.scss","sourcesContent":[".Select-value-label {\n  word-break: break-all;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(447);
	
	var _rule = __webpack_require__(534);
	
	var _Rule = __webpack_require__(577);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateDescription: _rule.updateDescription,
	  addCondition: _rule.addCondition,
	  addAction: _rule.addAction,
	  updateRule: _rule.updateRule
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return state.rule.toJS();
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Rule2.default);

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.fetchDimensions = exports.RECEIVE_DIMENSIONS = exports.REQUEST_DIMENSIONS = undefined;
	
	var _defineProperty2 = __webpack_require__(533);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.default = dimensionsReducer;
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _api = __webpack_require__(535);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var REQUEST_DIMENSIONS = exports.REQUEST_DIMENSIONS = 'REQUEST_DIMENSIONS';
	var RECEIVE_DIMENSIONS = exports.RECEIVE_DIMENSIONS = 'RECEIVE_DIMENSIONS';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	var fetchDimensions = exports.fetchDimensions = function fetchDimensions(id) {
	  return (0, _api.fetchFromAPI)({
	    scope: 'dimension',
	    method: 'read'
	  }, [REQUEST_DIMENSIONS, RECEIVE_DIMENSIONS]);
	};
	
	var actions = exports.actions = {
	  fetchDimensions: fetchDimensions
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, REQUEST_DIMENSIONS, function (state, action) {
	  return state;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, RECEIVE_DIMENSIONS, function (state, action) {
	  return action.payload.getIn(['entities', 'dimensions'], state);
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = _immutable2.default.fromJS({});
	
	function dimensionsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = undefined;
	
	var _defineProperty2 = __webpack_require__(533);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.default = statusReducer;
	
	var _immutable = __webpack_require__(495);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _rule = __webpack_require__(534);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	var actions = exports.actions = {};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.RECEIVE_RULE, function (state, action) {
	  return initialState;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.CREATE_RULE, function (state, action) {
	  return initialState;
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _rule.RECEIVE_UPDATED_RULE, function (state, action) {
	  return action.payload.get('result', state);
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = _immutable2.default.fromJS({});
	
	function statusReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ }

});
//# sourceMappingURL=1.rule.6a3c90cc8c77ed645d02.js.map