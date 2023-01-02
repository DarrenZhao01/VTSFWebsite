var lib;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 486:
/***/ (function() {

let cardWrappers = document.getElementsByClassName("card-wrapper");

for (let cardWrapper of cardWrappers) {
    cardWrapper.addEventListener("click", (event) => {
        event.target.classList.toggle("flipped");
    });
}

/***/ }),

/***/ 4:
/***/ (function(module) {

function openMenuDropdown() {
    document.body.classList.add("overflow-hidden");

    let menuDropdowns = document.getElementsByClassName("menu-dropdown");

    for (let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.remove("hide");
    }
}

function closeMenuDropdown() {
    document.body.classList.remove("overflow-hidden");

    let menuDropdowns = document.getElementsByClassName("menu-dropdown");

    for (let i = 0; i < menuDropdowns.length; i++) {
        menuDropdowns[i].classList.add("hide");
    }
}

module.exports = {
    openMenuDropdown: openMenuDropdown,
    closeMenuDropdown: closeMenuDropdown,
};

/***/ }),

/***/ 237:
/***/ (function(module) {

const timeToTop = 500; // ms
const scrollInterval = 3; // ms

function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function initScrollToTop() {
    const currentScrollYPosition = window.scrollY;
    let totalScrolls = Math.ceil(timeToTop / scrollInterval);
    let scrollPositions = [];

    for (let i = 1; i <= totalScrolls; i++) {
        scrollPositions.push(currentScrollYPosition - (easeInOutQuart(i / totalScrolls) * currentScrollYPosition));
    }

    scrollToTop(scrollPositions.values(), scrollInterval);
}

function scrollToTop(iterator, msDelay) {
    let result = iterator.next();
    
    window.scrollTo(0, result.value);

    if (!result.done) {
        setTimeout(() => {
            scrollToTop(iterator, msDelay);
        }, msDelay);
    }
}

addEventListener("scroll", (event) => {
    const elements = document.getElementsByClassName("scroll-to-top");

    if (window.scrollY < window.innerHeight) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("opacity-0");
        }
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("opacity-0");
        }
    }
});

module.exports = {
    initScrollToTop: initScrollToTop,
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_menuDropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _util_menuDropdown_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util_menuDropdown_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _util_menuDropdown_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _util_menuDropdown_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _util_scrollToTop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(237);
/* harmony import */ var _util_scrollToTop_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_util_scrollToTop_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _util_scrollToTop_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _util_scrollToTop_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _util_cardFlip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(486);
/* harmony import */ var _util_cardFlip_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_util_cardFlip_js__WEBPACK_IMPORTED_MODULE_2__);







}();
lib = __webpack_exports__;
/******/ })()
;