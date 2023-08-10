"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSimpleTypewriter = require("react-simple-typewriter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MyComponent = function MyComponent() {
  var _useTypewriter = (0, _reactSimpleTypewriter.useTypewriter)({
    words: ["Full Stack Web Developer", "Programmer"],
    // "Front end Developer + Back end Developer",
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 1500,
    onLoopDone: function onLoopDone() {
      return console.log("loop completed after 3 runs.");
    }
  }),
      _useTypewriter2 = _slicedToArray(_useTypewriter, 1),
      text = _useTypewriter2[0];

  return text;
};

var _default = MyComponent;
exports["default"] = _default;
//# sourceMappingURL=WordFlick.dev.js.map
