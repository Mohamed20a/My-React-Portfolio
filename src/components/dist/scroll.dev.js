"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// components/ScrollAnimation.js
function ScrollAnimation() {
  var scrollElements = document.querySelectorAll('.js-scroll');

  var elementInView = function elementInView(el) {
    var dividend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };

  var elementOutofView = function elementOutofView(el) {
    var elementTop = el.getBoundingClientRect().top;
    return elementTop > (window.innerHeight || document.documentElement.clientHeight);
  };

  var displayScrollElement = function displayScrollElement(element) {
    element.classList.add('scrolled');
  };

  var hideScrollElement = function hideScrollElement(element) {
    element.classList.remove('scrolled');
  };

  var handleScrollAnimation = function handleScrollAnimation() {
    scrollElements.forEach(function (el) {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScrollAnimation); // Clean up event listener on component unmount

    return function () {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  return null;
}

var _default = ScrollAnimation;
exports["default"] = _default;
//# sourceMappingURL=scroll.dev.js.map
