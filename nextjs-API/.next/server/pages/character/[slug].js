"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/character/[slug]";
exports.ids = ["pages/character/[slug]"];
exports.modules = {

/***/ "./pages/character/[slug].js":
/*!***********************************!*\
  !*** ./pages/character/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slug */ \"slug\");\n/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CharacterDetail = ({ character  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Charachter Details Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lamiya\\\\Desktop\\\\nextjs-API\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: character.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lamiya\\\\Desktop\\\\nextjs-API\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fiqure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: character.image,\n                    alt: character.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lamiya\\\\Desktop\\\\nextjs-API\\\\pages\\\\character\\\\[slug].js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lamiya\\\\Desktop\\\\nextjs-API\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lamiya\\\\Desktop\\\\nextjs-API\\\\pages\\\\character\\\\[slug].js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined));\n};\nasync function getStaticPaths() {\n    const data = await fetch(\"https://rickandmortyapi.com/api/character/\");\n    const characters = await data.json();\n    return {\n        paths: characters.results.map((character)=>{\n            return {\n                params: {\n                    slug: `${slug__WEBPACK_IMPORTED_MODULE_2___default()(character.name)}-${character.id}`\n                }\n            };\n        }),\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // data fetch\n    // gelen deyerleri split - (-) qoyulanlari secir, slice - ise character sozunden sonra enbasdan 0-ci indexden baslayir goturmeye.\n    const id = params.slug.split('-').slice(-1)[0];\n    const data = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"https://rickandmortyapi.com/api/character/\" + id);\n    const character = await data.json();\n    return {\n        props: {\n            character\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterDetail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDakI7QUFFdkIsS0FBSyxDQUFDRSxlQUFlLElBQUksQ0FBQ0MsQ0FBQUEsU0FBUyxHQUFDLEdBQUcsQ0FBQztJQUNwQyxNQUFNLDZFQUNEQyxDQUFHOzt3RkFDQ0MsQ0FBRTswQkFBQyxDQUF1Qjs7Ozs7O3dGQUUxQkQsQ0FBRzswQkFBRUQsU0FBUyxDQUFDRyxJQUFJOzs7Ozs7d0ZBR25CQyxDQUFNO3NHQUNGQyxDQUFHO29CQUFDQyxHQUFHLEVBQUVOLFNBQVMsQ0FBQ08sS0FBSztvQkFBRUMsR0FBRyxFQUFFUixTQUFTLENBQUNHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlELENBQUM7QUFFTSxlQUFlTSxjQUFjLEdBQUcsQ0FBQztJQUNwQyxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE0QztJQUNyRSxLQUFLLENBQUNDLFVBQVUsR0FBRyxLQUFLLENBQUNGLElBQUksQ0FBQ0csSUFBSTtJQUVwQyxNQUFNLENBQUMsQ0FBQztRQUNGQyxLQUFLLEVBQUNGLFVBQVUsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLEVBQUNoQixTQUFTLEdBQUksQ0FBQztZQUNuQyxNQUFNLENBQUMsQ0FBQ2lCO2dCQUFBQSxNQUFNLEVBQUMsQ0FBQ25CO29CQUFBQSxJQUFJLEtBQUlBLDJDQUFJLENBQUNFLFNBQVMsQ0FBQ0csSUFBSSxFQUFFLENBQUMsRUFBRUgsU0FBUyxDQUFDa0IsRUFBRTtnQkFBRSxDQUFDO1lBQUEsQ0FBQztRQUN4RSxDQUFDO1FBQ0RDLFFBQVEsRUFBRSxLQUFLO0lBQ3JCLENBQUM7QUFDSCxDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLENBQUNILENBQUFBLE1BQU0sR0FBQyxFQUFFLENBQUM7SUFDNUMsRUFBYTtJQUVkLEVBQWlJO0lBQ2pJLEtBQUssQ0FBQ0MsRUFBRSxHQUFHRCxNQUFNLENBQUNuQixJQUFJLENBQUN1QixLQUFLLENBQUMsQ0FBRyxJQUFFQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDWixJQUFJLEdBQUcsS0FBSyxDQUFDYix5REFBTyxDQUFDLENBQTRDLDhDQUFDcUIsRUFBRTtJQUN6RSxLQUFLLENBQUNsQixTQUFTLEdBQUcsS0FBSyxDQUFDVSxJQUFJLENBQUNHLElBQUk7SUFDbkMsTUFBTSxDQUFDLENBQUM7UUFDTlUsS0FBSyxFQUFFLENBQUM7WUFDTnZCLFNBQVM7UUFDWCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUQsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hcGkvLi9wYWdlcy9jaGFyYWN0ZXIvW3NsdWddLmpzPzhkY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHNsdWcgZnJvbSAnc2x1Zyc7XHJcbiAgXHJcbmNvbnN0IENoYXJhY3RlckRldGFpbCA9ICh7Y2hhcmFjdGVyfSk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q2hhcmFjaHRlciBEZXRhaWxzIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgICB7Lypwcm9wcyB2YXNpdGVzaWxlIGNoYXJhY3RlcmluIGFkaW5pIGNla2RpayovfVxyXG4gICAgICAgICAgICA8ZGl2PntjaGFyYWN0ZXIubmFtZX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKnByb3BzIHZhc2l0ZXNpbGUgY2hhcmFjdGVyaW4gc2VrbGluaSBjZWtkaWsqL31cclxuICAgICAgICAgICAgPGZpcXVyZT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGFyYWN0ZXIuaW1hZ2V9IGFsdD17Y2hhcmFjdGVyLm5hbWV9IC8+XHJcbiAgICAgICAgICAgIDwvZmlxdXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9cIik7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6Y2hhcmFjdGVycy5yZXN1bHRzLm1hcChjaGFyYWN0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtwYXJhbXM6e3NsdWc6YCR7c2x1ZyhjaGFyYWN0ZXIubmFtZSl9LSR7Y2hhcmFjdGVyLmlkfWB9fVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSBcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIC8vIGRhdGEgZmV0Y2hcclxuXHJcbiAgIC8vIGdlbGVuIGRleWVybGVyaSBzcGxpdCAtICgtKSBxb3l1bGFubGFyaSBzZWNpciwgc2xpY2UgLSBpc2UgY2hhcmFjdGVyIHNvenVuZGVuIHNvbnJhIGVuYmFzZGFuIDAtY2kgaW5kZXhkZW4gYmFzbGF5aXIgZ290dXJtZXllLlxyXG4gICBjb25zdCBpZCA9IHBhcmFtcy5zbHVnLnNwbGl0KCctJykuc2xpY2UoLTEpWzBdXHJcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1bmZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvXCIraWQpO1xyXG4gICAgY29uc3QgY2hhcmFjdGVyID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNoYXJhY3RlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyRGV0YWlsIl0sIm5hbWVzIjpbInVuZmV0Y2giLCJzbHVnIiwiQ2hhcmFjdGVyRGV0YWlsIiwiY2hhcmFjdGVyIiwiZGl2IiwiaDEiLCJuYW1lIiwiZmlxdXJlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJnZXRTdGF0aWNQYXRocyIsImRhdGEiLCJmZXRjaCIsImNoYXJhY3RlcnMiLCJqc29uIiwicGF0aHMiLCJyZXN1bHRzIiwibWFwIiwicGFyYW1zIiwiaWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwic3BsaXQiLCJzbGljZSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/character/[slug].js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("slug");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/character/[slug].js"));
module.exports = __webpack_exports__;

})();