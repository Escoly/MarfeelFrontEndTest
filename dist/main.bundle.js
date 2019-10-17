/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.sass":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.sass ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Ubuntu&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \".body {\\n  background-color: lightgray;\\n  display: flex;\\n  justify-content: center;\\n  font-family: ubuntu; }\\n  .body .mainContainer {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    background-color: white;\\n    border-radius: 20px;\\n    padding: 30px 35px;\\n    box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.3);\\n    margin-top: 50px; }\\n    .body .mainContainer .searchForm {\\n      display: flex; }\\n      .body .mainContainer .searchForm .searchButton {\\n        margin-left: 10px;\\n        background-color: whitesmoke;\\n        border: solid 0.5px lightgray;\\n        border-radius: 4px;\\n        padding: 5px 15px;\\n        font-weight: bold;\\n        font-size: medium; }\\n      .body .mainContainer .searchForm .searchInput {\\n        height: 25px;\\n        width: 300px;\\n        border-radius: 4px;\\n        border-style: groove;\\n        padding: 0px 10px; }\\n    .body .mainContainer .results {\\n      padding: 30px 0px; }\\n      .body .mainContainer .results .userHeader {\\n        display: flex;\\n        align-items: flex-start; }\\n        .body .mainContainer .results .userHeader .avatar {\\n          height: 130px;\\n          width: auto;\\n          border-radius: 4px; }\\n        .body .mainContainer .results .userHeader .userMainInfo {\\n          padding-left: 30px;\\n          padding-top: 4px;\\n          display: flex;\\n          flex-direction: column; }\\n        .body .mainContainer .results .userHeader .userName {\\n          margin: 0px;\\n          font-style: italic;\\n          color: dimgray;\\n          text-transform: lowercase; }\\n        .body .mainContainer .results .userHeader .fullName {\\n          margin: 0px;\\n          padding-top: 5px; }\\n        .body .mainContainer .results .userHeader .bio {\\n          margin: 0px;\\n          padding-top: 5px;\\n          color: dimgray;\\n          white-space: nowrap;\\n          overflow: hidden;\\n          text-overflow: ellipsis;\\n          max-width: 250px; }\\n      .body .mainContainer .results .reposHeader {\\n        border-bottom: solid;\\n        padding: 10px 0px; }\\n      .body .mainContainer .results .repos {\\n        list-style-type: none;\\n        padding: 10px;\\n        height: 300px;\\n        overflow-y: scroll; }\\n        .body .mainContainer .results .repos:last-child {\\n          border: none; }\\n        .body .mainContainer .results .repos::-webkit-scrollbar-track {\\n          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\n          border-radius: 10px;\\n          background-color: #F5F5F5; }\\n        .body .mainContainer .results .repos::-webkit-scrollbar {\\n          width: 12px;\\n          background-color: #F5F5F5; }\\n        .body .mainContainer .results .repos::-webkit-scrollbar-thumb {\\n          border-radius: 10px;\\n          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\\n          background-color: lightgray; }\\n        .body .mainContainer .results .repos .repo {\\n          display: flex;\\n          align-items: center;\\n          justify-content: space-between;\\n          text-transform: capitalize;\\n          border-bottom: solid 1px lightgray;\\n          padding: 0px 10px; }\\n          .body .mainContainer .results .repos .repo .repoTitle {\\n            font-weight: bold;\\n            font-size: 20px; }\\n          .body .mainContainer .results .repos .repo .repoStats {\\n            display: flex; }\\n            .body .mainContainer .results .repos .repo .repoStats .repoStat {\\n              display: flex; }\\n              .body .mainContainer .results .repos .repo .repoStats .repoStat img {\\n                width: auto;\\n                height: 15px;\\n                padding: 0px 5px; }\\n    .body .mainContainer .errorMessageHidden {\\n      display: none; }\\n    .body .mainContainer .errorMessage {\\n      background-color: mistyrose;\\n      border: solid 1px;\\n      border-color: lightpink;\\n      border-style: solid;\\n      border-radius: 4px;\\n      margin: 20px 0px;\\n      padding: 0px 30px;\\n      color: indianred; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/sass/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/errorMessage/index.js":
/*!**********************************************!*\
  !*** ./src/components/errorMessage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar errorMessage = {\n  template: function template() {\n    return \"<div class=\\\"errorMessageHidden\\\" id=\\\"errorMessage\\\">\\n                <p>Does not exist</p>\\n            </div>\";\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (errorMessage);\n\n//# sourceURL=webpack:///./src/components/errorMessage/index.js?");

/***/ }),

/***/ "./src/components/searchForm/index.js":
/*!********************************************!*\
  !*** ./src/components/searchForm/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar searchForm = {\n  html: function html() {\n    return \"<div>\\n                <form class=\\\"searchForm\\\" id=\\\"searchForm\\\">\\n                    <input class=\\\"searchInput\\\" type=\\\"text\\\" id=\\\"searchInput\\\" placeholder=\\\"Search username...\\\">\\n                    <button class=\\\"searchButton\\\" type=\\\"submit\\\" form=\\\"searchForm\\\" id=\\\"searchButton\\\">Search</button>\\n                </form>\\n            </div>\";\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchForm);\n\n//# sourceURL=webpack:///./src/components/searchForm/index.js?");

/***/ }),

/***/ "./src/components/userInfo/index.js":
/*!******************************************!*\
  !*** ./src/components/userInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar userInfo = {\n  userInfoPanel: function userInfoPanel(username, fullName, bio, avatar, repositories) {\n    return \" <div class=\\\"results\\\" id=\\\"results\\\">\\n                <div class=\\\"userHeader\\\">\\n                    <img class=\\\"avatar\\\" src=\\\"\".concat(avatar, \"\\\"></img>\\n                    <div class=\\\"userMainInfo\\\">\\n                        <h4 class=\\\"userName\\\">@\").concat(username, \"</h4>\\n                        <h1 class=\\\"fullName\\\">\").concat(fullName ? fullName : '', \"</h1>\\n                        <p class=\\\"bio\\\" >\").concat(bio ? bio : '', \"</p>\\n                    </div>\\n                </div>\\n                <div>\\n                    <h2 class=\\\"reposHeader\\\">Repositories</h2>\\n                    <ul class=\\\"repos\\\">\\n                        \").concat(repositories.map(function (repo) {\n      return \"<li class=\\\"repo\\\">\\n                                                        <p class=\\\"repoTitle\\\">\".concat(repo.name, \"</p>\\n                                                        <div class=\\\"repoStats\\\">\\n                                                            <div class=\\\"repoStat\\\">\\n                                                                <img src=\\\"../src/files/images/star-icon.svg\\\"/>\\n                                                                <span class=\\\"repoStar\\\">\").concat(repo.stars, \"</span>\\n                                                            </div>\\n                                                            <div class=\\\"repoStat\\\">\\n                                                                <img src=\\\"../src/files/images/fork-icon.png\\\"/>\\n                                                                <span class=\\\"repoFork\\\">\").concat(repo.forks, \"</span>\\n                                                            </div>\\n                                                        </div>\\n                                                    </li>\");\n    }).join(''), \"\\n                    </ul>\\n                </div>\\n            </div>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInfo); //method1\n// userInfoPanel(username, fullName, bio, avatar, repositories) {\n//     let container = document.createElement('div');\n//     container.setAttribute(\"id\", \"results\")\n//     let reposList = document.createElement(\"UL\");\n//     container.appendChild(reposList);\n//     for (let i=0; i<repositories.length; i++) {\n//         let repo = document.createElement(\"LI\");\n//         let repoName = document.createElement(\"H3\");\n//         repoName.innerText=`${repositories[i].name}`;\n//         let repoStars = document.createElement(\"P\");\n//         repoStars.innerText=`${repositories[i].stars}`;\n//         let repoForks = document.createElement(\"P\");\n//         repoForks.innerText=`${repositories[i].forks}`\n//         reposList.appendChild(repo);\n//         repo.appendChild(repoName);\n//         repo.appendChild(repoStars);\n//         repo.appendChild(repoForks);\n//     }\n//     let avatarImg = document.createElement('img');\n//     avatarImg.src=avatar;\n//     let usernameTitle = document.createElement('h3');\n//     usernameTitle.innerText=username;\n//     let fullNameTitle = document.createElement('h2');\n//     fullNameTitle.innerText=fullName;\n//     let bioText = document.createElement('p');\n//     bioText.innerText=bio;\n//     container.appendChild(avatarImg);\n//     container.appendChild(usernameTitle);\n//     container.appendChild(fullNameTitle);\n//     container.appendChild(bioText);\n//     container.appendChild(reposList);\n//     return container;\n// }\n\n//# sourceURL=webpack:///./src/components/userInfo/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic/index.js\");\n/* harmony import */ var _components_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/userInfo */ \"./src/components/userInfo/index.js\");\n/* harmony import */ var _components_searchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/searchForm */ \"./src/components/searchForm/index.js\");\n/* harmony import */ var _components_errorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/errorMessage */ \"./src/components/errorMessage/index.js\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/style.sass */ \"./src/sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar mainContainer = document.getElementById(\"mainContainer\");\nvar searchFormTemplate = _components_searchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"].html();\nmainContainer.innerHTML += searchFormTemplate;\nvar errorTemplate = _components_errorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].template();\nmainContainer.innerHTML += errorTemplate;\nvar searchFormElement = document.getElementById(\"searchForm\");\nsearchFormElement.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  showErrorMessage(false);\n  searchUser();\n});\n\nfunction searchUser() {\n  if (document.getElementById(\"results\")) {\n    var results = document.getElementById(\"results\");\n    results.parentNode.removeChild(results);\n  }\n\n  var username = document.getElementById(\"searchInput\").value;\n  _logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RetrieveUser(username).then(function (response) {\n    if (response.login == undefined) {\n      showErrorMessage(true);\n    } else {\n      userReposRetriever(response);\n    }\n  });\n}\n\nfunction userReposRetriever(userData) {\n  var login = userData.login,\n      name = userData.name,\n      avatar_url = userData.avatar_url,\n      bio = userData.bio;\n  var repositories = [];\n  _logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RetrieveRepos(userData.repos_url).then(function (response) {\n    repositories = response;\n    var userResult = _components_userInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userInfoPanel(login, name, bio, avatar_url, repositories);\n    mainContainer.insertAdjacentHTML('beforeEnd', userResult);\n  });\n}\n\nfunction showErrorMessage(state) {\n  if (state) {\n    document.getElementById(\"errorMessage\").className = \"errorMessage\";\n  } else {\n    document.getElementById(\"errorMessage\").className = \"errorMessageHidden\";\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logic/index.js":
/*!****************************!*\
  !*** ./src/logic/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar logic = {\n  gitHubApiUrl: 'https://api.github.com',\n  RetrieveUser: function RetrieveUser(username) {\n    var usernameString = username.toString();\n    return fetch(\"\".concat(this.gitHubApiUrl, \"/users/\").concat(usernameString)).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      return {\n        repos_url: response.repos_url,\n        login: response.login,\n        name: response.name,\n        avatar_url: response.avatar_url,\n        bio: response.bio\n      };\n    });\n  },\n  RetrieveRepos: function RetrieveRepos(url) {\n    return fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      response = response.map(function (repo) {\n        return {\n          name: repo.name,\n          stars: repo.stargazers_count,\n          forks: repo.forks_count\n        };\n      });\n      return response;\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (logic);\n\n//# sourceURL=webpack:///./src/logic/index.js?");

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/sass/style.sass?");

/***/ })

/******/ });