"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.37_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.37_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.37_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.37_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ $b1b2314f5f9a1d84$export$25bec8c6f54ee79a)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\n/**\n * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a\n * prop or avoid re-executing effects when passed as a dependency\n */ function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {\n    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        callbackRef.current = callback;\n    }); // https://github.com/facebook/react/issues/19240\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(...args)=>{\n            var _callbackRef$current;\n            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);\n        }\n    , []);\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jYWxsYmFjay1yZWZAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjIuMzdfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3Rzs7O0FBR3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFhO0FBQ3JDLElBQUksZ0RBQWdCO0FBQ3BCO0FBQ0EsS0FBSyxHQUFHO0FBQ1IsV0FBVyw4Q0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtxRTtBQUNyRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxzdGFjay8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtdXNlLWNhbGxiYWNrLXJlZkAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi4zN19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmL2Rpc3QvaW5kZXgubWpzPzhiZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYgYXMgJGx3aVdqJHVzZVJlZiwgdXNlRWZmZWN0IGFzICRsd2lXaiR1c2VFZmZlY3QsIHVzZU1lbW8gYXMgJGx3aVdqJHVzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xuXG5cbi8qKlxuICogQSBjdXN0b20gaG9vayB0aGF0IGNvbnZlcnRzIGEgY2FsbGJhY2sgdG8gYSByZWYgdG8gYXZvaWQgdHJpZ2dlcmluZyByZS1yZW5kZXJzIHdoZW4gcGFzc2VkIGFzIGFcbiAqIHByb3Agb3IgYXZvaWQgcmUtZXhlY3V0aW5nIGVmZmVjdHMgd2hlbiBwYXNzZWQgYXMgYSBkZXBlbmRlbmN5XG4gKi8gZnVuY3Rpb24gJGIxYjIzMTRmNWY5YTFkODQkZXhwb3J0JDI1YmVjOGM2ZjU0ZWU3OWEoY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja1JlZiA9ICRsd2lXaiR1c2VSZWYoY2FsbGJhY2spO1xuICAgICRsd2lXaiR1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrO1xuICAgIH0pOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MjQwXG4gICAgcmV0dXJuICRsd2lXaiR1c2VNZW1vKCgpPT4oLi4uYXJncyk9PntcbiAgICAgICAgICAgIHZhciBfY2FsbGJhY2tSZWYkY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiAoX2NhbGxiYWNrUmVmJGN1cnJlbnQgPSBjYWxsYmFja1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfY2FsbGJhY2tSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NhbGxiYWNrUmVmJGN1cnJlbnQuY2FsbChjYWxsYmFja1JlZiwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAsIFtdKTtcbn1cblxuXG5cblxuZXhwb3J0IHskYjFiMjMxNGY1ZjlhMWQ4NCRleHBvcnQkMjViZWM4YzZmNTRlZTc5YSBhcyB1c2VDYWxsYmFja1JlZn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.37_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\n");

/***/ })

};
;