/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initContact () {
    const main = document.querySelector('.main');
    main.textContent = '';
    
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';

    const phoneHeading = document.createElement('h2');
    phoneHeading.textContent = 'Phone Number';
    phoneHeading.classList.add('phone-heading');

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('phone-number');
    phoneNum.textContent = '23123-2323-23232';

    const addressHeading = document.createElement('h2');
    addressHeading.classList.add('address-heading');
    addressHeading.textContent = 'Address';
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = 'Somewhere out there';

    const restaurantImage = document.createElement('img');
    restaurantImage.src = '../dist/images/restaurant.jpg';

    contact.appendChild(contactHeading);
    contact.appendChild(phoneHeading);
    contact.appendChild(phoneNum);
    contact.appendChild(addressHeading);
    contact.appendChild(address);
    contact.appendChild(restaurantImage);

    main.appendChild(contact);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createIntroText() {
    const introText = document.createElement('div');
    introText.classList.add('intro-text');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Joe's Pizzeria";
    const restaurantDescription = document.createElement('p');
    restaurantDescription.textContent = "Welcome! Here at Joe's Pizzeria, we make the most delicious pizza in the city. \
                                        With a unique style originated from our family, we aim to provide our customers \
                                        excellent service and the highest quality pizza."
    introText.appendChild(restaurantName);
    introText.appendChild(restaurantDescription);

    return introText;
}

function createMainPizzaImg () {
    const mainPizzaImg = document.createElement('div');
    mainPizzaImg.classList.add('main-pizza-img');
    return mainPizzaImg;
}

function createIntro() {
    const intro = document.createElement('div');
    intro.classList.add("intro");
    const introText = createIntroText();
    intro.appendChild(introText);
    const mainPizzaImg = createMainPizzaImg();
    intro.appendChild(mainPizzaImg);

    return intro;
}

function initHome() {
    const main = document.querySelector('.main');
    main.textContent= '';

    const home = document.createElement('div');
    home.classList.add("home");
    const intro = createIntro();
    home.appendChild(intro);
    main.appendChild(home);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createMenuItem (name, price, description, image){
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemImage = document.createElement('img');
    itemImage.src=image;

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemImage);
    item.appendChild(itemDescription);

    return item;
}

function createMenuList() {
    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');
    const plainPizza = createMenuItem('Plain Pizza', '$11',
                                      'A pizza pie with our signature\
                                      tomato sauce, premium mozarella cheese, \
                                      and delicious crust',
                                      './images/plainpizza.jpg'
                                     );
    const pepperoniPizza = createMenuItem('Pepperoni Pizza', '$13',
                                      'A pizza pie with our \
                                      tomato sauce, mozarella cheese, \
                                      and locally produced pepperoni',
                                      './images/pepperonipizza.jpg'
                                     );
    const margheritaPizza = createMenuItem('Margherita Pizza', '$15',
                                           'A beautifully made margherita pizza\
                                           with home-grown basil, amazing cheese',
                                           './images/margheritapizza.jpg'
                                          );
    const randomPizza = createMenuItem('Build Your Own Pizza', '$11 + $2 per topping',
                                           'Have your own preferences? You can build \
                                           your own pizza with our fresh ingredients',
                                           './images/randompizza.jpg'
                                          );                                      
    menuList.appendChild(plainPizza);
    menuList.appendChild(pepperoniPizza);
    menuList.appendChild(margheritaPizza);
    menuList.appendChild(randomPizza);

    return menuList;
}

function initMenu () {
    const main = document.querySelector('.main');
    main.textContent = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHeading = document.createElement('h1');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Menu';

    const menuList = createMenuList();

    menu.appendChild(menuHeading);
    menu.appendChild(menuList);

    main.appendChild(menu);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function updateSelected(selected) {
    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');
    const contactButton = document.querySelector('.contact-button');

    if (document.querySelector('.selected'))
        document.querySelector('.selected').classList.remove('selected');

    switch (selected) {
        case 'home':
            homeButton.classList.add('selected');
            break;
        case 'menu':
            menuButton.classList.add('selected');
            break;
        case 'contact':
            contactButton.classList.add('selected');
            break;
    }
}

function createNavbar() {
    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');

    const homeButton = document.createElement('li');
    const menuButton = document.createElement('li');
    const contactButton = document.createElement('li');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    homeButton.classList.add('nav-button');
    homeButton.classList.add('home-button');

    menuButton.classList.add('nav-button');
    menuButton.classList.add('menu-button');
    
    contactButton.classList.add('nav-button');
    contactButton.classList.add('contact-button');

    homeButton.addEventListener('click', ()=>{
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        updateSelected('home');
    });
    menuButton.addEventListener('click', ()=>{
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        updateSelected('menu');
    });
    contactButton.addEventListener('click', ()=>{
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
        updateSelected('contact');
    });

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Joe\'s Pizzeria';

    const navbar = createNavbar();

    header.appendChild(restaurantName);
    header.appendChild(navbar);

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'created by irao12';

    const github = document.createElement('a');
    github.href='https://github.com/irao12';

    const githubIcon = document.createElement('img');
    githubIcon.classList.add('github-icon');
    githubIcon.src = '../dist/images/GitHub-Mark-32px.png';
    github.appendChild(githubIcon);

    footer.appendChild(github);

    return footer;
}

function initWebsite() {
    const content = document.querySelector('#content');

    const header = createHeader();
    const main = createMain();
    const footer = createFooter();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    updateSelected('home');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_website_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

document.querySelector('.home-button').addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.querySelector('.menu-button').addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.querySelector('.contact-button').addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3RDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzNDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VPO0FBQ0E7QUFDTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsaURBQVE7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLG9EQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQ3hIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNQO0FBQ0M7QUFDSztBQUN0QztBQUNBLHVEQUFXO0FBQ1g7QUFDQSxpRUFBaUUsZ0RBQVE7QUFDekUsaUVBQWlFLGdEQUFRO0FBQ3pFLG9FQUFvRSxtREFBVyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRDb250YWN0ICgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcclxuXHJcbiAgICBjb25zdCBwaG9uZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcGhvbmVIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Bob25lIE51bWJlcic7XHJcbiAgICBwaG9uZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGhvbmUtaGVhZGluZycpO1xyXG5cclxuICAgIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGhvbmVOdW0uY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XHJcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9ICcyMzEyMy0yMzIzLTIzMjMyJztcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhZGRyZXNzSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLWhlYWRpbmcnKTtcclxuICAgIGFkZHJlc3NIZWFkaW5nLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdTb21ld2hlcmUgb3V0IHRoZXJlJztcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlc3RhdXJhbnRJbWFnZS5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvcmVzdGF1cmFudC5qcGcnO1xyXG5cclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRpbmcpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZUhlYWRpbmcpO1xyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZU51bSk7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdENvbnRhY3Q7IiwiZnVuY3Rpb24gY3JlYXRlSW50cm9UZXh0KCkge1xyXG4gICAgY29uc3QgaW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRyb1RleHQuY2xhc3NMaXN0LmFkZCgnaW50cm8tdGV4dCcpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkpvZSdzIFBpenplcmlhXCI7XHJcbiAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIldlbGNvbWUhIEhlcmUgYXQgSm9lJ3MgUGl6emVyaWEsIHdlIG1ha2UgdGhlIG1vc3QgZGVsaWNpb3VzIHBpenphIGluIHRoZSBjaXR5LiBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2l0aCBhIHVuaXF1ZSBzdHlsZSBvcmlnaW5hdGVkIGZyb20gb3VyIGZhbWlseSwgd2UgYWltIHRvIHByb3ZpZGUgb3VyIGN1c3RvbWVycyBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjZWxsZW50IHNlcnZpY2UgYW5kIHRoZSBoaWdoZXN0IHF1YWxpdHkgcGl6emEuXCJcclxuICAgIGludHJvVGV4dC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XHJcbiAgICBpbnRyb1RleHQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gaW50cm9UZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluUGl6emFJbWcgKCkge1xyXG4gICAgY29uc3QgbWFpblBpenphSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluUGl6emFJbWcuY2xhc3NMaXN0LmFkZCgnbWFpbi1waXp6YS1pbWcnKTtcclxuICAgIHJldHVybiBtYWluUGl6emFJbWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUludHJvKCkge1xyXG4gICAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuICAgIGNvbnN0IGludHJvVGV4dCA9IGNyZWF0ZUludHJvVGV4dCgpO1xyXG4gICAgaW50cm8uYXBwZW5kQ2hpbGQoaW50cm9UZXh0KTtcclxuICAgIGNvbnN0IG1haW5QaXp6YUltZyA9IGNyZWF0ZU1haW5QaXp6YUltZygpO1xyXG4gICAgaW50cm8uYXBwZW5kQ2hpbGQobWFpblBpenphSW1nKTtcclxuXHJcbiAgICByZXR1cm4gaW50cm87XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb21lKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBtYWluLnRleHRDb250ZW50PSAnJztcclxuXHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xyXG4gICAgY29uc3QgaW50cm8gPSBjcmVhdGVJbnRybygpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbnRybyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0SG9tZTsiLCJcclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0gKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW1hZ2Upe1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuXHJcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpdGVtSW1hZ2Uuc3JjPWltYWdlO1xyXG5cclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdCgpIHtcclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QnKTtcclxuICAgIGNvbnN0IHBsYWluUGl6emEgPSBjcmVhdGVNZW51SXRlbSgnUGxhaW4gUGl6emEnLCAnJDExJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQSBwaXp6YSBwaWUgd2l0aCBvdXIgc2lnbmF0dXJlXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b21hdG8gc2F1Y2UsIHByZW1pdW0gbW96YXJlbGxhIGNoZWVzZSwgXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgZGVsaWNpb3VzIGNydXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLi9pbWFnZXMvcGxhaW5waXp6YS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgY29uc3QgcGVwcGVyb25pUGl6emEgPSBjcmVhdGVNZW51SXRlbSgnUGVwcGVyb25pIFBpenphJywgJyQxMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0EgcGl6emEgcGllIHdpdGggb3VyIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9tYXRvIHNhdWNlLCBtb3phcmVsbGEgY2hlZXNlLCBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBsb2NhbGx5IHByb2R1Y2VkIHBlcHBlcm9uaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy4vaW1hZ2VzL3BlcHBlcm9uaXBpenphLmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICBjb25zdCBtYXJnaGVyaXRhUGl6emEgPSBjcmVhdGVNZW51SXRlbSgnTWFyZ2hlcml0YSBQaXp6YScsICckMTUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0EgYmVhdXRpZnVsbHkgbWFkZSBtYXJnaGVyaXRhIHBpenphXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggaG9tZS1ncm93biBiYXNpbCwgYW1hemluZyBjaGVlc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy4vaW1hZ2VzL21hcmdoZXJpdGFwaXp6YS5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICBjb25zdCByYW5kb21QaXp6YSA9IGNyZWF0ZU1lbnVJdGVtKCdCdWlsZCBZb3VyIE93biBQaXp6YScsICckMTEgKyAkMiBwZXIgdG9wcGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSGF2ZSB5b3VyIG93biBwcmVmZXJlbmNlcz8gWW91IGNhbiBidWlsZCBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBvd24gcGl6emEgd2l0aCBvdXIgZnJlc2ggaW5ncmVkaWVudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy4vaW1hZ2VzL3JhbmRvbXBpenphLmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQocGxhaW5QaXp6YSk7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChwZXBwZXJvbmlQaXp6YSk7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtYXJnaGVyaXRhUGl6emEpO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQocmFuZG9tUGl6emEpO1xyXG5cclxuICAgIHJldHVybiBtZW51TGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1lbnUgKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWVudUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XHJcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9ICdNZW51JztcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdCA9IGNyZWF0ZU1lbnVMaXN0KCk7XHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0TWVudTsiLCJpbXBvcnQgaW5pdEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgaW5pdE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgaW5pdENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWQoc2VsZWN0ZWQpIHtcclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idXR0b24nKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKTtcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICBzd2l0Y2ggKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgY2FzZSAnaG9tZSc6XHJcbiAgICAgICAgICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWVudSc6XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XHJcbiAgICAgICAgICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuXHJcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZS1idXR0b24nKTtcclxuXHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcclxuICAgIFxyXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnV0dG9uJyk7XHJcblxyXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgaW5pdEhvbWUoKTtcclxuICAgICAgICB1cGRhdGVTZWxlY3RlZCgnaG9tZScpO1xyXG4gICAgfSk7XHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBpbml0TWVudSgpO1xyXG4gICAgICAgIHVwZGF0ZVNlbGVjdGVkKCdtZW51Jyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGluaXRDb250YWN0KCk7XHJcbiAgICAgICAgdXBkYXRlU2VsZWN0ZWQoJ2NvbnRhY3QnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gbmF2YmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdKb2VcXCdzIFBpenplcmlhJztcclxuXHJcbiAgICBjb25zdCBuYXZiYXIgPSBjcmVhdGVOYXZiYXIoKTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ2NyZWF0ZWQgYnkgaXJhbzEyJztcclxuXHJcbiAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBnaXRodWIuaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2lyYW8xMic7XHJcblxyXG4gICAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKCdnaXRodWItaWNvbicpO1xyXG4gICAgZ2l0aHViSWNvbi5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvR2l0SHViLU1hcmstMzJweC5wbmcnO1xyXG4gICAgZ2l0aHViLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWIpO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XHJcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICBpbml0SG9tZSgpO1xyXG4gICAgdXBkYXRlU2VsZWN0ZWQoJ2hvbWUnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdFdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdFdlYnNpdGUgZnJvbSAnLi93ZWJzaXRlLmpzJztcclxuaW1wb3J0IGluaXRNZW51IGZyb20gJy4vbWVudS5qcydcclxuaW1wb3J0IGluaXRIb21lIGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBpbml0Q29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXHJcblxyXG5pbml0V2Vic2l0ZSgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0SG9tZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdE1lbnUpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRDb250YWN0KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==