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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/global.css */ \"./src/css/global.css\");\n/* harmony import */ var _modules_displayMeal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayMeal.js */ \"./src/modules/displayMeal.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_displayMeal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst apiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGgsbNwMjLbF1Y3jHgOe';\nconst postCommentToAPI = async (index, username, comment) => {\n  const body = {\n    item_id: index,\n    username: username,\n    comment: comment\n  };\n  const commentsURL = `${apiBaseURL}/comments`;\n  const headers = {\n    'Content-Type': 'application/json'\n  };\n  try {\n    const response = await fetch(commentsURL, {\n      method: 'POST',\n      headers: headers,\n      body: JSON.stringify(body)\n    });\n    if (!response.ok) {\n      throw new Error('Failed to post comment.');\n    }\n    console.log('Comment added successfully');\n    return true; // Indicate success\n  } catch (error) {\n    console.error(error);\n    alert('Failed to add comment. Please try again.');\n    return false; // Indicate failure\n  }\n};\n\nconst getCommentsFromAPI = async item_id => {\n  const commentsURL = `${apiBaseURL}/comments?item_id=${encodeURIComponent(item_id)}`;\n  try {\n    const response = await fetch(commentsURL);\n    const comments = await response.json();\n    console.log('Comments:', comments);\n    return comments;\n  } catch (error) {\n    console.error(error);\n    alert('Failed to retrieve comments. Please try again.');\n    return [];\n  }\n};\n\n// Handle form submission for posting comments\ndocument.getElementById('post-comment-btn').addEventListener('click', async event => {\n  event.preventDefault();\n  const usernameInput = document.querySelector('.your-name');\n  const commentInput = document.querySelector('.msg');\n  const username = usernameInput.value;\n  const comment = commentInput.value;\n  const sampleIndex = 'sample_item_id'; // Replace with an actual item_id for testing\n\n  // Call the function to post the comment\n  const success = await postCommentToAPI(sampleIndex, username, comment);\n\n  // Clear input fields after posting\n  usernameInput.value = '';\n  commentInput.value = '';\n\n  // Display success message if the comment was successfully posted\n  if (success) {\n    console.log('Comment posted successfully!');\n  }\n});\n\n// Handle retrieval of comments for an item when the DOM is loaded (for testing purposes)\ndocument.addEventListener('DOMContentLoaded', async () => {\n  const sampleItemID = 'sample_item_id'; // Replace with an actual item_id for testing\n\n  // Call the function to get comments for an item\n  const comments = await getCommentsFromAPI(sampleItemID);\n\n  // Do something with the retrieved comments, e.g., display them on the page\n  comments.forEach(comment => {\n    console.log(`${comment.username}: ${comment.comment}`);\n  });\n});\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass API {\n  involveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n  constructor() {\n    this.involveUrl = this.involveURL;\n    this.mealsList = [];\n  }\n  fetchData = (() => async function (url, method, body) {\n    let headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    const settingRequest = {\n      method,\n      headers\n    };\n    let request;\n    if (method === 'GET') {\n      request = new Request(url);\n    } else if (method === 'POST') {\n      settingRequest.body = JSON.stringify(body);\n      request = new Request(url, settingRequest);\n    }\n    if (!request) throw new Error('invalid');\n    const response = await fetch(request);\n    const contentType = response.headers.get('content-type');\n    if (contentType && (contentType.includes('text/html') || contentType.includes('text/plain'))) {\n      const htmlResponse = await response.text();\n      return htmlResponse;\n    }\n    const jsonResponse = await response.json();\n    return jsonResponse;\n  })();\n  createApp = async () => {\n    const endPoint = 'apps/';\n    const url = this.involveUrl + endPoint;\n    const responseJson = await this.fetchData(url, 'POST');\n    return responseJson;\n  };\n  retrieveMealID = index => this.mealsList[index].idMeal;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   id: () => (/* binding */ id)\n/* harmony export */ });\n/* harmony import */ var _url_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_like.js */ \"./src/modules/url_like.js\");\n/* eslint-disable import/prefer-default-export */\n\nconst app = async () => {\n  try {\n    const data = await fetch(_url_like_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      method: 'POST',\n      body: JSON.stringify({}),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    if (data.ok) {\n      const appId = await data.text();\n      console.log(`App created: ${appId}`);\n    } else {\n      throw new Error(data.statusText);\n    }\n  } catch (error) {\n    console.error(`Error: ${error}`);\n  }\n};\napp();\nconst id = 'VGgsbNwMjLbF1Y3jHgOe';\n\n\n// App created: VGgsbNwMjLbF1Y3jHgOe\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/displayMeal.js":
/*!************************************!*\
  !*** ./src/modules/displayMeal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _postlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postlikes.js */ \"./src/modules/postlikes.js\");\n/* harmony import */ var _popup_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup/popup.js */ \"./src/modules/popup/popup.js\");\n// script.js\n\n\n\n\nconst url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';\nconst api = new _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst displayMeal = async () => {\n  const mealList = document.querySelector('.meals-lists');\n  const mealCount = document.querySelector('.meal-count');\n  try {\n    const apiCall = await fetch(url);\n    const response = await apiCall.json();\n    const data = response.meals;\n    const span = document.createElement('span');\n    span.innerHTML = ` (${data.length})`;\n    mealCount.appendChild(span);\n    data.forEach(meal => {\n      const li = document.createElement('li');\n      li.classList.add('meal-list');\n      li.innerHTML = `\n        <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n        <div class=\"meal-card-content\">\n          <div class=\"card-title\">\n          <h3>${meal.strMeal}</h3> <div class='icon-text'><span class=\"material-symbols-outlined favorite\">favorite</span> <span class=\"icon-like\"></span></div>\n          </div>\n          <button class=\"comment\">Comments</button>\n        </div>\n      `;\n      const commentBtn = li.querySelector('.comment');\n      commentBtn.addEventListener('click', () => (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(meal));\n      const updateLike = async () => {\n        await (0,_postlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meal.idMeal);\n        const updated = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal.idMeal);\n        li.querySelector('.icon-like').textContent = `${updated} likes`;\n      };\n      li.querySelector('.favorite').addEventListener('click', updateLike);\n      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal.idMeal).then(value => {\n        li.querySelector('.icon-like').textContent = `${value} likes`;\n      });\n      mealList.appendChild(li);\n    });\n  } catch (error) {\n    console.error(`Error fetching dish: ${error}`);\n  }\n};\ndocument.addEventListener('DOMContentLoaded', displayMeal);\n\n// Close the popup when the close button is clicked\ndocument.getElementById('close').addEventListener('click', () => {\n  (0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)();\n});\n\n// Close the popup when clicking outside the popup\n(0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_3__.addPopupOutsideClickListener)();\ndocument.addEventListener('DOMContentLoaded', displayMeal);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeal);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/displayMeal.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_like.js */ \"./src/modules/url_like.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n\n\nconst getLikes = async itemId => {\n  try {\n    const response = await fetch(`${_url_like_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/${_app_js__WEBPACK_IMPORTED_MODULE_1__.id}/likes`);\n    const data = await response.json();\n    const likeData = data.find(item => item.item_id === itemId);\n    return likeData ? likeData.likes : 0;\n  } catch (error) {\n    console.error('Error to get the like:', error);\n    return 0;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/popup/popup.js":
/*!************************************!*\
  !*** ./src/modules/popup/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPopupOutsideClickListener: () => (/* binding */ addPopupOutsideClickListener),\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\n// popup.js\n\nconst openPopup = meal => {\n  const popup = document.getElementById('popup');\n  const popupImage = document.getElementById('popup-image');\n  const popupTitle = document.getElementById('popup-title');\n  const foodDetail = document.getElementById('foodDetail');\n  popupImage.src = meal.strMealThumb;\n  popupImage.alt = meal.strMeal;\n  popupTitle.textContent = meal.strMeal;\n  foodDetail.innerHTML = `<li>Area:${meal.strArea} </li>\n  <li>Category:${meal.strCategory} Pizaaa</li>\n`;\n  popup.style.display = 'block';\n};\nconst closePopup = () => {\n  const popup = document.getElementById('popup');\n  popup.style.display = 'none';\n};\n\n// Close the popup when clicking outside the popup\nconst addPopupOutsideClickListener = () => {\n  window.addEventListener('click', event => {\n    const popup = document.getElementById('popup');\n    if (event.target === popup) {\n      closePopup();\n    }\n  });\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/popup/popup.js?");

/***/ }),

/***/ "./src/modules/postlikes.js":
/*!**********************************!*\
  !*** ./src/modules/postlikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_like.js */ \"./src/modules/url_like.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n\n\nconst postLike = async itemId => {\n  try {\n    await fetch(`${_url_like_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/${_app_js__WEBPACK_IMPORTED_MODULE_1__.id}/likes`, {\n      method: 'post',\n      body: JSON.stringify({\n        item_id: itemId\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n  } catch (error) {\n    console.error('Error to post the likes', error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/postlikes.js?");

/***/ }),

/***/ "./src/modules/url_like.js":
/*!*********************************!*\
  !*** ./src/modules/url_like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (url);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/url_like.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/global.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-color: #5c3838;\r\n  --second-color: #9d9ac0;\r\n}\r\n\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #eee;\r\n}\r\n\r\nheader {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--main-color);\r\n  color: white;\r\n}\r\n\r\nheader .navigation {\r\n  padding: 1rem;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.navigation h3 {\r\n  font-size: 3rem;\r\n  font-weight: 300;\r\n  border: 1px solid var(--second-color);\r\n  padding: 0.2rem 1.5rem;\r\n  font-family: 'Dancing Script', cursive;\r\n}\r\n\r\nheader .navigation .nav-links {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-column-gap: 2rem;\r\n  -moz-column-gap: 2rem;\r\n  column-gap: 2rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.2rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.nav-links a:hover {\r\n  border-bottom: 1px solid var(--second-color);\r\n  transition: all 1s;\r\n}\r\n\r\nfooter {\r\n  height: 2rem;\r\n}\r\n\r\n.footer {\r\n  background-color: var(--main-color);\r\n  padding: 1rem;\r\n}\r\n\r\n.footer-text {\r\n  text-align: center;\r\n  font-style: italic;\r\n  font-size: 1.3rem;\r\n  color: white;\r\n}\r\n\r\n#meal-section {\r\n  margin: 2rem 2rem;\r\n}\r\n\r\n.meals-lists {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n}\r\n\r\n.meal-list {\r\n  background-color: var(--second-color);\r\n  border-radius: 8px;\r\n  margin: 1rem;\r\n}\r\n\r\n.meal-list img {\r\n  width: 100%;\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.card-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 1.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.icon-text {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.card-title h3 {\r\n  font-size: 2rem;\r\n  color: var(--main-color);\r\n  font-family: 'Dancing Script', cursive;\r\n}\r\n\r\n.icon-like {\r\n  display: flex;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.favorite {\r\n  color: var(--main-color);\r\n  margin-right: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n.favorite:hover {\r\n  color: white;\r\n  transition: 0.2s;\r\n}\r\n\r\n.meal-card-content {\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.comment {\r\n  padding: 0.3rem 0.9rem;\r\n  background-color: var(--main-color);\r\n  border: none;\r\n  border-radius: 50rem;\r\n  color: white;\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  box-shadow: 7px 7px 5px -7px rgba(0, 0, 0, 0.52);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.comment:hover {\r\n  background-color: white;\r\n  color: var(--second-color);\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Add your desired styles for the popup window here */\r\n.popup {\r\n  display: none;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #f1f1f1;\r\n  padding: 20px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.popup img {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  height: auto;\r\n}\r\n\r\n.popup h3 {\r\n  margin: 10px 0;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 2px;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.close:hover {\r\n  color: red;\r\n}\r\n\r\n.commentss {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n}\r\n\r\n#form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 5px;\r\n  margin-top: 5px;\r\n}\r\n\r\ninput {\r\n  border-radius: 3px;\r\n  border: solid rgb(0, 51, 34) 1px;\r\n  padding: 6px;\r\n}\r\n\r\ntextarea {\r\n  border-radius: 5px;\r\n}\r\n\r\n#displayed {\r\n  margin-top: 3%;\r\n}\r\n\r\n#btn-comment {\r\n  padding: 8px;\r\n  background-color: green;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/css/global.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/global.css":
/*!****************************!*\
  !*** ./src/css/global.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/global.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/css/global.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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