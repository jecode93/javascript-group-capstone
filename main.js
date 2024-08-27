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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/global.css */ \"./src/css/global.css\");\n/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter.js */ \"./src/modules/counter.js\");\n/* harmony import */ var _modules_displayMeal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMeal.js */ \"./src/modules/displayMeal.js\");\n\n\n\nconst counter = async () => {\n  const mealList = document.querySelectorAll('.meal-list');\n  const mealCount = document.querySelector('.meal-count');\n  const span = document.createElement('span');\n  span.innerHTML = ` (${(0,_modules_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealList)})`;\n  mealCount.appendChild(span);\n};\ndocument.addEventListener('DOMContentLoaded', async () => {\n  await (0,_modules_displayMeal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  await counter();\n});\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   id: () => (/* binding */ id)\n/* harmony export */ });\n/* harmony import */ var _url_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_like.js */ \"./src/modules/url_like.js\");\n/* eslint-disable import/prefer-default-export */\n\nconst app = async () => {\n  try {\n    const data = await fetch(_url_like_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      method: 'POST',\n      body: JSON.stringify({}),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    if (data.ok) {\n      const appId = await data.text();\n      console.log(`App created: ${appId}`);\n    } else {\n      throw new Error(data.statusText);\n    }\n  } catch (error) {\n    console.error(`Error: ${error}`);\n  }\n};\nconst id = 'VGgsbNwMjLbF1Y3jHgOe';\n\n\n// App created: VGgsbNwMjLbF1Y3jHgOe\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = item => item.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/displayMeal.js":
/*!************************************!*\
  !*** ./src/modules/displayMeal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _postlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postlikes.js */ \"./src/modules/postlikes.js\");\n/* harmony import */ var _popup_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/popup.js */ \"./src/modules/popup/popup.js\");\n/* harmony import */ var _popup_newPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup/newPopup.js */ \"./src/modules/popup/newPopup.js\");\n// script.js\n\n\n\n\nconst url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';\nconst displayMeal = async () => {\n  const mealList = document.querySelector('.meals-lists');\n  const mealCount = document.querySelector('.meal-count');\n  try {\n    const apiCall = await fetch(url);\n    const response = await apiCall.json();\n    const data = response.meals;\n    data.forEach(meal => {\n      const li = document.createElement('li');\n      li.classList.add('meal-list');\n      li.innerHTML = `\n        <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n        <div class=\"meal-card-content\">\n          <div class=\"card-title\">\n          <h3>${meal.strMeal}</h3> <div class='icon-text'><span class=\"material-symbols-outlined favorite\">favorite</span> <span class=\"icon-like\"></span></div>\n          </div>\n          <button class=\"comment\">Comments</button>\n        </div>\n      `;\n\n      // const commentBtn = li.querySelector('.comment');\n      // commentBtn.addEventListener('click', () => openPopup(meal));\n\n      const updateLike = async () => {\n        await (0,_postlikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal.idMeal);\n        const updated = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal.idMeal);\n        li.querySelector('.icon-like').textContent = `${updated} likes`;\n      };\n      li.querySelector('.favorite').addEventListener('click', updateLike);\n      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal.idMeal).then(value => {\n        li.querySelector('.icon-like').textContent = `${value} likes`;\n      });\n      const btnComment = li.querySelector('.comment');\n      const popup = document.getElementById('popup');\n      btnComment.addEventListener('click', () => {\n        popup.style.display = 'block';\n        (0,_popup_newPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(meal.idMeal);\n      });\n      mealList.appendChild(li);\n    });\n  } catch (error) {\n    console.error(`Error fetching meal: ${error}`);\n  }\n};\n\n// Close the popup when the close button is clicked\n\n// Close the popup when clicking outside the popup\n(0,_popup_popup_js__WEBPACK_IMPORTED_MODULE_2__.addPopupOutsideClickListener)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeal);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/displayMeal.js?");

/***/ }),

/***/ "./src/modules/getAllComments.js":
/*!***************************************!*\
  !*** ./src/modules/getAllComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst allComments = async mealId => {\n  try {\n    const response = await fetch(`${url}/${_app_js__WEBPACK_IMPORTED_MODULE_0__.id}/comments?item_id=${mealId}`);\n    const comments = await response.json();\n    if (Array.isArray(comments) && comments.length > 0) {\n      return comments;\n    }\n    return [];\n  } catch (error) {\n    console.error('Error to get comments', error);\n    return [];\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allComments);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/getAllComments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url_like.js */ \"./src/modules/url_like.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n\n\nconst getLikes = async itemId => {\n  try {\n    const response = await fetch(`${_url_like_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/${_app_js__WEBPACK_IMPORTED_MODULE_1__.id}/likes`);\n    const data = await response.json();\n    const likeData = data.find(item => item.item_id === itemId);\n    return likeData ? likeData.likes : 0;\n  } catch (error) {\n    console.error('Error to get the like:', error);\n    return 0;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/newComment.js":
/*!***********************************!*\
  !*** ./src/modules/newComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst newComment = async (itemId, username, comment) => {\n  try {\n    await fetch(`${url}/${_app_js__WEBPACK_IMPORTED_MODULE_0__.id}/comments`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: itemId,\n        username,\n        comment\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n  } catch (error) {\n    console.error('Error to submit new comment', error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newComment);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/newComment.js?");

/***/ }),

/***/ "./src/modules/popup/commentCounter.js":
/*!*********************************************!*\
  !*** ./src/modules/popup/commentCounter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments => comments.length);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/popup/commentCounter.js?");

/***/ }),

/***/ "./src/modules/popup/newPopup.js":
/*!***************************************!*\
  !*** ./src/modules/popup/newPopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getAllComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getAllComments.js */ \"./src/modules/getAllComments.js\");\n/* harmony import */ var _newComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../newComment.js */ \"./src/modules/newComment.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup/popup.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/popup/commentCounter.js\");\n\n\n\n\nconst updateCommentsSection = (comments, commentsDiv) => {\n  commentsDiv.innerHTML = ''; // Clear the container before adding updated comments\n  if (comments.length > 0) {\n    comments.forEach(comment => {\n      const commentItem = document.createElement('div');\n      commentItem.classList.add('comment-item');\n      commentItem.innerHTML = `\n        <div class='commentaire'>\n          <p class=\"username\">\n            <span class=\"date\">${comment.creation_date}</span>\n            ${comment.username}: <span class=\"comment-text\">${comment.comment}</span>\n          </p>\n        </div>\n      `;\n      commentsDiv.appendChild(commentItem);\n    });\n  } else {\n    const noCommentsMessage = document.createElement('p');\n    noCommentsMessage.textContent = 'No comments yet.';\n    commentsDiv.appendChild(noCommentsMessage);\n  }\n};\nconst showPopup = async mealId => {\n  const blurr = document.querySelector('#overlay');\n  blurr.classList.add('overlay');\n  const popupUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;\n  try {\n    const response = await fetch(popupUrl);\n    const data = await response.json();\n    const comments = await (0,_getAllComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealId);\n    // Check if data.meals is not null and contains at least one meal\n    if (data.meals && data.meals.length > 0) {\n      const meal = data.meals[0];\n\n      // Create the popup content\n      const commentPopup = document.createElement('div');\n      commentPopup.innerHTML = `\n        <div class='popup'>\n          <span class=\"close\" id=\"close\">&times;</span>\n          <div class='image'>\n            <img id=\"popup-image\" src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n          </div>\n          <h3 id=\"popup-title\">${meal.strMeal}</h3>\n          <ul id=\"foodDetail\" class=\"food-detail\">\n            <li><strong>Area:</strong> ${meal.strArea} </li>\n            <li><strong>Category:</strong> ${meal.strCategory} Pizza</li>\n          </ul>\n          <hr>\n          <h3 id =\"cmt\"> Comments <span id=\"comments-count\">(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(comments)})</span> </h3>\n          <div class='list-comments'></div>\n          <div class='add-comment'>\n            <h2>Add a comment</h2>\n            <form id=\"form\" action=\"\">\n              <label for=\"name\">Name:</label>\n              <input type=\"text\" id=\"name\" placeholder=\"Enter your name\" required/>\n              <label for=\"message\">Comment:</label>\n              <textarea id=\"message\" name=\"message\" rows=\"4\" placeholder='Enter your comment' required></textarea>\n              <button type='button' id=\"btn-comment\">Comment</button>\n            </form>\n          </div>\n        </div>\n      `;\n      const popupSection = document.querySelector('.popup-sec');\n      popupSection.innerHTML = '';\n      popupSection.appendChild(commentPopup);\n      const commentsDiv = commentPopup.querySelector('.list-comments');\n      commentsDiv.innerHTML = ''; // Clear the container before adding updated comments\n\n      // Display initial comments\n      updateCommentsSection(comments, commentsDiv);\n\n      // Function to update comment count\n      const updateCommentCount = async count => {\n        const commentsCountElement = commentPopup.querySelector('#comments-count');\n        commentsCountElement.textContent = count;\n      };\n\n      // Add event listener to the \"Comment\" button\n      const commentButton = commentPopup.querySelector('#btn-comment');\n      commentButton.addEventListener('click', async () => {\n        const usernameInput = commentPopup.querySelector('#name');\n        const commentInput = commentPopup.querySelector('#message');\n        const username = usernameInput.value;\n        const comment = commentInput.value;\n        if (username && comment) {\n          await (0,_newComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealId, username, comment);\n          // Clear the input fields after posting the comment\n          usernameInput.value = '';\n          commentInput.value = '';\n\n          // Update comment count after a new comment is posted\n          const updatedCommentsCount = await (0,_getAllComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealId);\n          updateCommentCount(updatedCommentsCount.length);\n\n          // Update comments section with the new comment\n          const updatedComments = await (0,_getAllComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealId);\n          updateCommentsSection(updatedComments, commentsDiv);\n        }\n      });\n      const closer = commentPopup.querySelector('.close');\n      closer.addEventListener('click', () => {\n        const blurr = document.querySelector('#overlay');\n        blurr.classList.remove('overlay');\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)();\n      });\n    } else {\n      console.error('No meal found for the given mealId');\n    }\n  } catch (error) {\n    console.error('Error fetching meal details for popup', error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/popup/newPopup.js?");

/***/ }),

/***/ "./src/modules/popup/popup.js":
/*!************************************!*\
  !*** ./src/modules/popup/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPopupOutsideClickListener: () => (/* binding */ addPopupOutsideClickListener),\n/* harmony export */   closePopup: () => (/* binding */ closePopup)\n/* harmony export */ });\n// popup.js\n\nconst closePopup = () => {\n  const popup = document.querySelector('.popup-sec');\n  popup.style.display = 'none';\n};\n\n// Close the popup when clicking outside the popup\nconst addPopupOutsideClickListener = () => {\n  window.addEventListener('click', event => {\n    const popup = document.getElementById('popup');\n    if (event.target === popup) {\n      closePopup();\n    }\n  });\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/popup/popup.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --main-color: #5c3838;\n  --second-color: #9d9ac0;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: #9794932d;\n  backdrop-filter: blur(3px);\n}\n\n.hided {\n  display: none;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  background-color: #eee;\n}\n\nheader {\n  padding: 0;\n  margin: 0;\n  background-color: var(--main-color);\n  color: white;\n}\n\nheader .navigation {\n  padding: 1rem;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 1.5rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.navigation h3 {\n  font-size: 3rem;\n  font-weight: 300;\n  border: 1px solid var(--second-color);\n  padding: 0.2rem 1.5rem;\n  font-family: 'Dancing Script', cursive;\n}\n\nheader .navigation .nav-links {\n  display: -webkit-box;\n  display: flex;\n  -webkit-column-gap: 2rem;\n  -moz-column-gap: 2rem;\n  column-gap: 2rem;\n  margin-right: 1rem;\n  font-size: 1.2rem;\n  font-weight: 300;\n}\n\n.nav-links a:hover {\n  border-bottom: 1px solid var(--second-color);\n  transition: all 1s;\n}\n\nfooter {\n  height: 2rem;\n}\n\n.footer {\n  background-color: var(--main-color);\n  padding: 1rem;\n}\n\n.footer-text {\n  text-align: center;\n  font-style: italic;\n  font-size: 1.3rem;\n  color: white;\n}\n\n#meal-section {\n  margin: 2rem 2rem;\n}\n\n.meals-lists {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n\n.meal-list {\n  background-color: var(--second-color);\n  border-radius: 8px;\n  margin: 1rem;\n}\n\n.meal-list img {\n  width: 100%;\n  border-radius: 10px 10px 0 0;\n}\n\n.card-title {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  align-items: center;\n}\n\n.icon-text {\n  display: flex;\n  align-items: center;\n}\n\n.card-title h3 {\n  font-size: 2rem;\n  color: var(--main-color);\n  font-family: 'Dancing Script', cursive;\n}\n\n.icon-like {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 1.2rem;\n}\n\n.favorite {\n  color: var(--main-color);\n  margin-right: 3px;\n  cursor: pointer;\n}\n\n.favorite:hover {\n  color: white;\n  transition: 0.2s;\n}\n\n.meal-card-content {\n  padding: 1rem;\n  text-align: center;\n}\n\n.comment {\n  padding: 0.3rem 0.9rem;\n  background-color: var(--main-color);\n  border: none;\n  border-radius: 50rem;\n  color: white;\n  font-weight: 500;\n  font-size: 1rem;\n  box-shadow: 7px 7px 5px -7px rgba(0, 0, 0, 0.52);\n  margin-bottom: 1rem;\n}\n\n.comment:hover {\n  background-color: white;\n  color: var(--second-color);\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n/* Add your desired styles for the popup window here */\n.popup-sec {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fffdeb;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  max-width: 50%;\n  max-height: 90vh;\n  overflow-y: auto;\n  border-radius: 6px;\n}\n\n.popup img {\n  width: 80%;\n  height: auto;\n  border-radius: 6px;\n}\n\n.popup h3 {\n  margin: 10px 0;\n}\n\n.close {\n  position: absolute;\n  top: 5px;\n  right: 15px;\n  font-size: 30px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: red;\n}\n\n#form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n  margin-top: 5px;\n}\n\ninput {\n  border-radius: 5px;\n  border: solid rgb(0, 51, 34) 1px;\n  padding: 6px;\n}\n\ntextarea {\n  padding: 6px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n}\n\n#displayed {\n  margin-top: 3%;\n}\n\n#btn-comment {\n  padding: 8px;\n  background-color: green;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\nhr {\n  margin: 0.5rem 0;\n}\n\n.date {\n  font-style: italic;\n}\n\n.commentaire {\n  margin: 0.5rem 0;\n  font-style: italic;\n}\n\n.add-comment {\n  margin-top: 2rem;\n}\n\n.image {\n  margin: 0 auto;\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n\n#popup-image {\n  width: 100%;\n}\n\n#popup-title {\n  font-family: inherit;\n  font-size: 25px;\n  margin-top: 10px;\n}\n\n#foodDetail {\n  font-family: inherit;\n  font-size: 17px;\n  margin-top: 10px;\n}\n\n.list-comments {\n  font-family: inherit;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n#cmt {\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n@media (max-width: 820px) {\n  .meals-lists {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 560px) {\n  .navigation {\n    width: 100%;\n  }\n\n  .meals-lists {\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    margin: 20px auto;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/css/global.css?./node_modules/css-loader/dist/cjs.js");

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