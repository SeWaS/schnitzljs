(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("schnitzlJS", [], factory);
	else if(typeof exports === 'object')
		exports["schnitzlJS"] = factory();
	else
		root["schnitzlJS"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/schnitzl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basics.js":
/*!***********************!*\
  !*** ./src/basics.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomPickFromArray = exports.randomElementInArray = exports.randomBoolean = exports.randomString = exports.randomChar = exports.randomDigit = exports.randomInt = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// generating numbers
var randomInt = function randomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.randomInt = randomInt;

var randomDigit = function randomDigit() {
  return randomInt(0, 9);
}; // generating strings


exports.randomDigit = randomDigit;
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZäöüÄÖÜß';

var randomChar = function randomChar() {
  var randomNum = randomInt(0, alphabet.length - 1);
  return alphabet.charAt(randomNum);
};

exports.randomChar = randomChar;

var randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var randomStr = '123';

  while (randomStr.length < length) {
    randomStr += randomChar();
  }

  return randomStr;
};

exports.randomString = randomString;

var randomBoolean = function randomBoolean() {
  return randomInt(1, 9) % 2 === 0;
}; // Arrays


exports.randomBoolean = randomBoolean;

var randomElementInArray = function randomElementInArray(array) {
  if (!array.length > 0) throw new RangeError('We can\'t choose a random value from an empty array, my friend!');
  return array[randomInt(0, array.length - 1)];
};

exports.randomElementInArray = randomElementInArray;

var randomPickFromArray = function randomPickFromArray(num, array) {
  if (num < 1) throw new RangeError('We can\'t choose a random subset of values of size 0 from an array, my friend!');
  return [].concat(_toConsumableArray(Array(num))).map(function (x) {
    return randomElementInArray(array);
  });
};

exports.randomPickFromArray = randomPickFromArray;

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomAge = exports.surname = exports.prename = void 0;

var _basics = __webpack_require__(/*! ./basics */ "./src/basics.js");

var prename = function prename() {
  var commons = ['Finn', 'Jan', 'Jannik', 'Jonas', 'Leon', 'Luca', 'Lukas', 'Niklas', 'Tim', 'Tom', 'Anna', 'Hannah', 'Julia', 'Lara', 'Laura', 'Lea', 'Lena', 'Lisa', 'Michelle', 'Sarah'];
  return (0, _basics.randomElementInArray)(commons);
};

exports.prename = prename;

var surname = function surname() {
  var commons = ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'];
  return (0, _basics.randomElementInArray)(commons);
};

exports.surname = surname;

var randomAge = function randomAge() {
  var ageGroup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';
  var ageGroupDef = new Map([['child', {
    minAge: 1,
    maxAge: 9
  }], ['teenager', {
    minAge: 10,
    maxAge: 17
  }], ['adult', {
    minAge: 18,
    maxAge: 59
  }], ['senior', {
    minAge: 60,
    maxAge: 120
  }]]);
  return (0, _basics.randomInt)(ageGroupDef.get(ageGroup).minAge, ageGroupDef.get(ageGroup).maxAge);
};

exports.randomAge = randomAge;

/***/ }),

/***/ "./src/schnitzl.js":
/*!*************************!*\
  !*** ./src/schnitzl.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.BasicRandoms = void 0;

var BasicRandoms = _interopRequireWildcard(__webpack_require__(/*! ./basics */ "./src/basics.js"));

exports.BasicRandoms = BasicRandoms;

var Person = _interopRequireWildcard(__webpack_require__(/*! ./person */ "./src/person.js"));

exports.Person = Person;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/***/ })

/******/ });
});
//# sourceMappingURL=schnitzlJS.js.map