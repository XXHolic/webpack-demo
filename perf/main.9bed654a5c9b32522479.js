(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [1],
  [
    /* 0 */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */

      var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
      /* harmony import */

      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
      /* harmony import */

      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_1__
      );

      function component() {
        var element = document.createElement("div");
        var num = Object(_math__WEBPACK_IMPORTED_MODULE_0__["square"])(2);
        element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.join(
          ["Hello, Webpack ", num],
          ""
        );
        return element;
      }

      let element = component();
      document.body.appendChild(element);
    },
    /* 1 */
    function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "square", function() {
        return square;
      });
      function square(x) {
        return x * x;
      }
    }
  ],
  [[0, 0, 2]]
]);
