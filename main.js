/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createIntroText() {\r\n    const introText = document.createElement('div');\r\n    introText.classList.add('intro-text');\r\n    const restaurantName = document.createElement('h1');\r\n    restaurantName.textContent = \"Joe's Pizzeria\";\r\n    const restaurantDescription = document.createElement('p');\r\n    restaurantDescription.textContent = \"Welcome! Here at Joe's Pizzeria, we make the most delicious pizza in the city. \\\r\n                                        With a unique style originated from our family, we aim to provide our customers \\\r\n                                        excellent service and the highest quality pizza.\"\r\n    introText.appendChild(restaurantName);\r\n    introText.appendChild(restaurantDescription);\r\n\r\n    return introText;\r\n}\r\n\r\nfunction createMainPizzaImg () {\r\n    const mainPizzaImg = document.createElement('div');\r\n    mainPizzaImg.classList.add('main-pizza-img');\r\n    return mainPizzaImg;\r\n}\r\n\r\nfunction createIntro() {\r\n    const intro = document.createElement('div');\r\n    intro.classList.add(\"intro\");\r\n    const introText = createIntroText();\r\n    intro.appendChild(introText);\r\n    const mainPizzaImg = createMainPizzaImg();\r\n    intro.appendChild(mainPizzaImg);\r\n\r\n    return intro;\r\n}\r\n\r\nfunction initHome() {\r\n    const main = document.querySelector('.main');\r\n\r\n    const home = document.createElement('div');\r\n    home.classList.add(\"home\");\r\n    const intro = createIntro();\r\n    home.appendChild(intro);\r\n    main.appendChild(home);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\nfunction createNavbar() {\r\n    const navbar = document.createElement('ul');\r\n    navbar.classList.add('navbar');\r\n\r\n    const homeButton = document.createElement('li');\r\n    const menuButton = document.createElement('li');\r\n    const contactButton = document.createElement('li');\r\n\r\n    homeButton.textContent = 'Home';\r\n    menuButton.textContent = 'Menu';\r\n    contactButton.textContent = 'Contact';\r\n\r\n    homeButton.classList.add('nav-button');\r\n    menuButton.classList.add('nav-button');\r\n    contactButton.classList.add('nav-button');\r\n\r\n    navbar.appendChild(homeButton);\r\n    navbar.appendChild(menuButton);\r\n    navbar.appendChild(contactButton);\r\n\r\n    return navbar;\r\n}\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement('div');\r\n    header.classList.add('header');\r\n\r\n    const restaurantName = document.createElement('h1');\r\n    restaurantName.textContent = 'Joe\\'s Pizzeria';\r\n\r\n    const navbar = createNavbar();\r\n\r\n    header.appendChild(restaurantName);\r\n    header.appendChild(navbar);\r\n\r\n    return header;\r\n}\r\n\r\nfunction createMain() {\r\n    const main = document.createElement('div');\r\n    main.classList.add('main');\r\n    return main;\r\n}\r\n\r\nfunction createFooter() {\r\n    const footer = document.createElement('div');\r\n    footer.classList.add('footer');\r\n    footer.textContent = 'created by irao12';\r\n    return footer;\r\n}\r\n\r\nfunction initWebsite() {\r\n    const content = document.querySelector('#content');\r\n\r\n    const header = createHeader();\r\n    const main = createMain();\r\n    const footer = createFooter();\r\n\r\n    content.appendChild(header);\r\n    content.appendChild(main);\r\n    content.appendChild(footer);\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;