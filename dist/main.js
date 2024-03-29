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

/***/ "./src/ProductsList.js":
/*!*****************************!*\
  !*** ./src/ProductsList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductsList\": () => (/* binding */ ProductsList)\n/* harmony export */ });\nconst ProductsList = [{\n  \"id\": 1,\n  \"name\": \"milk\",\n  \"price\": 10,\n  \"category\": \"Dairy\",\n  \"imgUrl\": \"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&webp=true&resize=375,341\"\n}, {\n  \"id\": 2,\n  \"name\": \"bread\",\n  \"price\": 14,\n  \"category\": \"bread\",\n  \"imgUrl\": \"https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/1:1/w_1920,c_limit/milk-bread.jpg\"\n}, {\n  \"id\": 3,\n  \"name\": \"water\",\n  \"price\": 3,\n  \"category\": \"Diary\",\n  \"imgUrl\": \"https://i5.walmartimages.com/asr/c64fe48e-d6c0-48cf-80d5-a647d0db641a_1.ad40a19cda58afb1c7baaf016423f67b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF\"\n}, {\n  \"id\": 4,\n  \"name\": \"soap\",\n  \"price\": 2,\n  \"category\": \"personal-care\",\n  \"imgUrl\": \"https://media.istockphoto.com/id/505574760/vector/pink-bar-of-soap-3d-isometric-icon.jpg?s=612x612&w=0&k=20&c=1S2_3_WlTs5plf4y5-zY7Ss3Vcvq8ghxzgPLf7sUh7w=\"\n}, {\n  \"id\": 5,\n  \"name\": \"Guava\",\n  \"price\": 10,\n  \"category\": \"food\",\n  \"imgUrl\": \"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F01%2F02%2F429048911_6119360327001_6119354197001-vs.jpg\"\n}, {\n  \"id\": 6,\n  \"name\": \"Watermelon\",\n  \"price\": 20,\n  \"category\": \"food\",\n  \"imgUrl\": \"https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg\"\n}, {\n  \"id\": 7,\n  \"name\": \"motorcycle\",\n  \"price\": 20000,\n  \"category\": \"Other\",\n  \"imgUrl\": \"https://cdn.britannica.com/16/126516-050-2D2DB8AC/Triumph-Rocket-III-motorcycle-2005.jpg\"\n}, {\n  \"id\": 8,\n  \"name\": \"pasta\",\n  \"price\": 15,\n  \"category\": \"food\",\n  \"imgUrl\": \"https://storage.googleapis.com/st2.foodsd.co.il/Images/kitchens/2.webp\"\n}];\n\n\n//# sourceURL=webpack://webpackstore/./src/ProductsList.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _ProductsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsList */ \"./src/ProductsList.js\");\n\n\nvar cartTotalPrice = 0;\nfunction addToCart(name, index) {\n  const amount = document.getElementById(index).value; //amount of product \n  let key = _product__WEBPACK_IMPORTED_MODULE_0__.selectedProducts.length + 1;\n  _product__WEBPACK_IMPORTED_MODULE_0__.selectedProducts.push({\n    \"product\": name,\n    \"productIndexInOriginalList\": index,\n    \"amount\": amount,\n    \"key\": key\n  });\n  console.log(key);\n  createDivCart(index, amount, key);\n}\nfunction createDivCart(i, amount1, key) {\n  //creating cart - html\n  var productCart = document.createElement(\"div\"); //each product in cart\n  document.querySelector(\".cart\").append(productCart);\n  productCart.setAttribute('style', 'font-family:sans-serif;border: 1px solid black; margin:0; height: 110px; width: 100%; background-color: lightgreen');\n  var selectedProductNameXAmountText = document.createElement(\"h4\");\n  selectedProductNameXAmountText.id = \"nameAmount\";\n  //for example => breadX1 = 14₪\n  selectedProductNameXAmountText.innerHTML = _ProductsList__WEBPACK_IMPORTED_MODULE_1__.ProductsList[i].name + \"X\" + amount1 + \" = \" + _ProductsList__WEBPACK_IMPORTED_MODULE_1__.ProductsList[i].price * amount1 + \"₪\";\n  productCart.append(selectedProductNameXAmountText);\n  ////////////////////////////////////////////////////////////\n  cartTotalPrice = cartTotalPrice + amount1 * _ProductsList__WEBPACK_IMPORTED_MODULE_1__.ProductsList[i].price;\n  const prefix = document.getElementById(\"totalP\").innerHTML.split(\"=\")[0]; //Total price\n  document.getElementById(\"totalP\").innerHTML = prefix + \"= \" + cartTotalPrice + \"₪\";\n  ////////////////////////////////////////////////////////////\n  const cartBtnRemove = document.createElement(\"button\");\n  cartBtnRemove.innerHTML = \"click to remove\";\n  productCart.append(cartBtnRemove);\n  cartBtnRemove.addEventListener('click', () => {\n    removeProductFromCart(productCart, amount1, i, key);\n  });\n}\nfunction removeProductFromCart(productCart, amountRemove, i, key) {\n  productCart.remove(); //remove the div not the product from the list\n  // delete selectedProducts[key];\n  _product__WEBPACK_IMPORTED_MODULE_0__.selectedProducts.splice(i, 1);\n  cartTotalPrice = cartTotalPrice - amountRemove * _ProductsList__WEBPACK_IMPORTED_MODULE_1__.ProductsList[i].price;\n  const prefix = document.getElementById(\"totalP\").innerHTML.split(\"=\")[0];\n  document.getElementById(\"totalP\").innerHTML = prefix + \"= \" + cartTotalPrice + \"₪\";\n}\nfunction setSelectedAfterRemove(arr) {}\nconst orderBtn = document.getElementById(\"btnOrder\");\norderBtn.addEventListener(\"click\", () => {\n  orderJson(_product__WEBPACK_IMPORTED_MODULE_0__.selectedProducts, cartTotalPrice);\n});\nfunction orderJson(products, cartTotalPrice) {\n  const totalAmountOfProducts = getTotalAmountProductsInOrder(products);\n  const order = {\n    \"products\": products,\n    \"totalPrice\": cartTotalPrice,\n    \"totalProducts\": totalAmountOfProducts\n  };\n  console.log(order);\n}\nfunction getTotalAmountProductsInOrder(products) {\n  let totalProductsAmount = 0;\n  products.map(product => {\n    totalProductsAmount += parseInt(product.amount);\n  });\n  return totalProductsAmount;\n}\n\n\n//# sourceURL=webpack://webpackstore/./src/cart.js?");

/***/ }),

/***/ "./src/catalog.js":
/*!************************!*\
  !*** ./src/catalog.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRelevantProducts\": () => (/* binding */ getRelevantProducts)\n/* harmony export */ });\n/* harmony import */ var _ProductsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsList */ \"./src/ProductsList.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\n\n\n///////////////////////////////////////////////////////////\n//navbar search \nlet relevantProducts = [];\nconst searchDiv = document.getElementById(\"navBar\");\nconst btnSearch = document.getElementById(\"btnSearch\");\nbtnSearch.addEventListener(\"click\", () => getRelevantProducts(_ProductsList__WEBPACK_IMPORTED_MODULE_0__.ProductsList));\nconsole.log(relevantProducts);\nfunction getRelevantProducts(products) {\n  relevantProducts.splice(0, relevantProducts.length);\n  const category = document.getElementById(\"categories\").value;\n  if (category === \"All\") {\n    products.map(item => relevantProducts.push(item));\n  }\n  products.map(item => {\n    if (item.category === category) {\n      relevantProducts.push(item);\n    }\n  });\n  document.querySelector(\".catalog\").replaceChildren();\n  for (let i = 0; i < relevantProducts.length; i++) {\n    (0,_product__WEBPACK_IMPORTED_MODULE_1__.createDiv)(i, relevantProducts);\n  }\n}\n\n\n//# sourceURL=webpack://webpackstore/./src/catalog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProductsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsList */ \"./src/ProductsList.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ \"./src/product.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpackstore/./src/index.js?");

/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"selectedProducts\": () => (/* binding */ selectedProducts)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/cart.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/catalog.js\");\n\n\nlet selectedProducts = [];\nfunction createDiv(i, relevantProducts) {\n  var productDiv = document.createElement(\"div\"); //each product from the list\n  document.querySelector(\".catalog\").append(productDiv);\n  productDiv.setAttribute('style', 'border: 1px solid black;margin:10px;font-family:sans-serif;height: 200px;border-radius: 15px; text-align: center;width: 50%;background-color: lightblue;');\n  ///////////////////////////////////////////////////////\n  const productNameText = document.createElement(\"h3\");\n  productNameText.innerHTML = relevantProducts[i].name;\n  ///////////////////////////////////////////////////////\n  const productPriceText = document.createElement(\"h4\");\n  productPriceText.setAttribute('style', 'margin:10px');\n  productPriceText.innerHTML = \"price: \" + relevantProducts[i].price + '₪';\n  ///////////////////////////////////////////////////////\n  var productImg = document.createElement(\"img\");\n  productImg.src = relevantProducts[i].imgUrl;\n  productImg.alt = relevantProducts[i].name;\n  productImg.setAttribute('style', 'width: 40px;height: 40px; text-align:center; align-items:center; justify-content: center');\n  ///////////////////////////////////////////////////////\n  const productInputAmount = document.createElement(\"input\");\n  productInputAmount.type = \"number\";\n  productInputAmount.setAttribute('style', 'width: 80px; margin:4px; text-align:center');\n  productInputAmount.placeholder = \"Enter Amount\";\n  productInputAmount.id = i;\n  const productBtnAdd = document.createElement(\"button\");\n  productBtnAdd.setAttribute('style', 'margin-bottom: 20px');\n  productBtnAdd.innerHTML = \"Add to cart\";\n  //add product to cart \n  productBtnAdd.addEventListener(\"click\", () => {\n    (0,_cart__WEBPACK_IMPORTED_MODULE_0__.addToCart)(relevantProducts[i].name, i);\n  });\n  productDiv.append(productNameText);\n  productDiv.append(productImg);\n  productDiv.append(productPriceText);\n  productDiv.append(productInputAmount);\n  productDiv.append(productBtnAdd);\n}\n\n\n//# sourceURL=webpack://webpackstore/./src/product.js?");

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