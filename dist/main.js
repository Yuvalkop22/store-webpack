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

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart)\n/* harmony export */ });\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n\nfunction addToCart(name, amount, index) {\n  const amount1 = document.getElementById(index).value; //amount of product                             //from each product\n  _catalog__WEBPACK_IMPORTED_MODULE_0__.selectedProducts.push({\n    \"product\": name,\n    \"amount\": amount\n  });\n}\n;\n\n//# sourceURL=webpack://webpackstore/./src/cart.js?");

/***/ }),

/***/ "./src/catalog.js":
/*!************************!*\
  !*** ./src/catalog.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectedProducts\": () => (/* binding */ selectedProducts)\n/* harmony export */ });\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./src/products.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\n\n\n///////////////////////////////////////////////////////////\n//navbar search \nconst searchDiv = document.getElementById(\"navBar\");\nconst btn = document.getElementById(\"btnSearch\");\nbtn.addEventListener(\"click\", changeName);\nfunction changeName() {\n  const str = document.getElementById(\"productName\").value;\n  const productName = document.createElement(\"h3\");\n  searchDiv.appendChild(productName);\n  _products__WEBPACK_IMPORTED_MODULE_0__.products.filter(product => product.category === str).map(product => productName.innerHTML = productName.innerHTML + product.name + \",\");\n}\n///////////////////////////////////////////////////////////\nlet selectedProducts = []; //list of selected product to cart\nlet cartTotalPrice =\n//0\nNumber.parseInt(document.getElementById(\"totalP\").innerHTML //Total price = 0₪\n.split(\"=\")[1] // 0₪\n.split(\" \")[1] // 0\n);\n\nvar amount = 0;\n//for loop for each product in products.js \nfor (let i = 0; i < _products__WEBPACK_IMPORTED_MODULE_0__.products.length; i++) {\n  (0,_product__WEBPACK_IMPORTED_MODULE_1__.createDiv)(i);\n}\n\n\n//# sourceURL=webpack://webpackstore/./src/catalog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./src/products.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpackstore/./src/index.js?");

/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv)\n/* harmony export */ });\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./src/products.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n\n\nfunction createDiv(i) {\n  var productDiv = document.createElement(\"div\"); //each product from the list\n  document.querySelector(\".catalog\").append(productDiv);\n  productDiv.setAttribute('style', 'border: 1px solid black;margin:10px;font-family:sans-serif;height: 200px;border-radius: 15px; text-align: center;width: 50%;background-color: lightblue;');\n  ///////////////////////////////////////////////////////\n  const productNameText = document.createElement(\"h3\");\n  productNameText.innerHTML = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].name;\n  ///////////////////////////////////////////////////////\n  const productPriceText = document.createElement(\"h4\");\n  productPriceText.setAttribute('style', 'margin:10px');\n  productPriceText.innerHTML = \"price: \" + _products__WEBPACK_IMPORTED_MODULE_0__.products[i].price + '₪';\n  ///////////////////////////////////////////////////////\n  const productBtnAdd = document.createElement(\"button\");\n  productBtnAdd.setAttribute('style', 'margin-bottom: 20px');\n  productBtnAdd.innerHTML = \"Add to cart\";\n  //add product to cart \n  productBtnAdd.addEventListener(\"click\", (0,_cart__WEBPACK_IMPORTED_MODULE_1__.addToCart)(name, amount, i));\n\n  ///////////////////////////////////////////////////////\n  var productImg = document.createElement(\"img\");\n  productImg.src = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].imgUrl;\n  productImg.alt = _products__WEBPACK_IMPORTED_MODULE_0__.products[i].name;\n  productImg.setAttribute('style', 'width: 40px;height: 40px; text-align:center; align-items:center; justify-content: center');\n  ///////////////////////////////////////////////////////\n  const productInputAmount = document.createElement(\"input\");\n  productInputAmount.type = \"number\";\n  productInputAmount.setAttribute('style', 'width: 80px; margin:4px; text-align:center');\n  productInputAmount.placeholder = \"Enter Amount\";\n  productInputAmount.id = i;\n  amount = productInputAmount.value;\n  productDiv.append(productNameText);\n  productDiv.append(productImg);\n  productDiv.append(productPriceText);\n  productDiv.append(productInputAmount);\n  productDiv.append(productBtnAdd);\n}\n\n\n//# sourceURL=webpack://webpackstore/./src/product.js?");

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products)\n/* harmony export */ });\nconst products = [{\n  \"id\": 1,\n  \"name\": \"milk\",\n  \"price\": 10,\n  \"category\": \"Dairy\",\n  \"imgUrl\": \"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&webp=true&resize=375,341\"\n}, {\n  \"id\": 2,\n  \"name\": \"bread\",\n  \"price\": 14,\n  \"category\": \"bread\",\n  \"imgUrl\": \"https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/1:1/w_1920,c_limit/milk-bread.jpg\"\n}, {\n  \"id\": 3,\n  \"name\": \"water\",\n  \"price\": 3,\n  \"category\": \"Diary\",\n  \"imgUrl\": \"https://i5.walmartimages.com/asr/c64fe48e-d6c0-48cf-80d5-a647d0db641a_1.ad40a19cda58afb1c7baaf016423f67b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF\"\n}, {\n  \"id\": 4,\n  \"name\": \"soap\",\n  \"price\": 2,\n  \"category\": \"personal-care\",\n  \"imgUrl\": \"https://media.istockphoto.com/id/505574760/vector/pink-bar-of-soap-3d-isometric-icon.jpg?s=612x612&w=0&k=20&c=1S2_3_WlTs5plf4y5-zY7Ss3Vcvq8ghxzgPLf7sUh7w=\"\n}, {\n  \"id\": 5,\n  \"name\": \"Guava\",\n  \"price\": 10,\n  \"category\": \"food\",\n  \"imgUrl\": \"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F02%2F429048911_6119360327001_6119354197001-vs.jpg\"\n}, {\n  \"id\": 6,\n  \"name\": \"Watermelon\",\n  \"price\": 20,\n  \"category\": \"food\",\n  \"imgUrl\": \"https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg\"\n}, {\n  \"id\": 7,\n  \"name\": \"motorcycle\",\n  \"price\": 20000,\n  \"category\": \"other\",\n  \"imgUrl\": \"https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg\"\n}];\n\n\n//# sourceURL=webpack://webpackstore/./src/products.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackstore/./src/styles/main.css?");

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