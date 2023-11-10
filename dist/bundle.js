/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Marck+Script&family=Poiret+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root
{
    --font-titles: 'Marck Script', cursive;;
    --font-main: 'Poiret One', sans-serif;
    --color-main: hsl(191.65deg 91.4% 36.47%);
    --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

*,
*::before,
*::after
{
    border: 1px solid red;
    padding: 0;
    margin: 0;
    box-sizing:border-box;
}

body
{
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:150px;
    overflow-x: hidden;
    padding:75px 0;
}

div.deco
{
    width: 200%;
    height: 1000px;
    background-color: hsl(191.65deg 91.4% 36.47%);
    transform: rotate(-9deg);
    position: absolute;
    top: -76%;
    left: -401px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: -10;
}

/* Desktop version breakpoint. */

header.about-me
{
    display: flex;
    width: 90%;
}

header.about-me > div.image
{
    position:relative;
    display:flex;
}

header.about-me > div.image > img
{
    width: 500px;
    box-shadow: var(--box-shadow);
}

header.about-me > div.image > p.name
{
    position:absolute;
    bottom: 10px;
    text-align:center;
    left:0;
    right:0;
    font-size: 4rem;
    font-weight: 900;
    font-family: var(--font-titles);
    color:white;
}

header.about-me > div.info
{
    background-color:white;
    height: 80%;
    align-self:center;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    padding:50px;
    gap:25px;
    box-shadow: var(--box-shadow);
}

header.about-me > div.info > h2
{
    font-size: 3rem;
    font-weight: 100;
    font-family: var(--font-titles);
}

header.about-me > div.info > p
{
    font-size:1.8rem;
    font-family:var(--font-main);
}

header.about-me > div.info > div.icons-container
{
    display:flex;
    justify-content:flex-end;
    gap: 35px;
}

header.about-me > div.info > div.icons-container > i
{
    font-size: 2.5rem;
}

section.my-work
{
    width: 90%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap: 10px;
}

section.my-work > h2
{
    font-size: 3.5rem;
    font-family:var(--font-titles);
    font-weight: 100;
}

section.my-work > div.container
{
    width: 100%;
    display:grid;
    grid-template-columns: repeat(3, minmax(375px, 1fr));    
    gap:50px;
}

section.my-work > div.container > div.card
{
    height: 500px;
    box-shadow: var(--box-shadow);
}

section.my-work > div.container > div.card > div.upper
{
    height: 60%;
    display:flex;
    align-items:center;
    justify-content:center;
}

section.my-work > div.container > div.card:first-of-type > div.upper
{
    background-color: hsl(0deg 69.89% 36.47%);
}
section.my-work > div.container > div.card:nth-child(2) > div.upper
{
    background-color: hsl(244.94deg 44.5% 62.55%);
}
section.my-work > div.container > div.card:nth-child(3) > div.upper
{
    background-color: hsl(104.55deg 30% 43.14%);
}
section.my-work > div.container > div.card:nth-child(4) > div.upper
{
    background-color: hsl(309.38deg 44.44% 57.65%);
}
section.my-work > div.container > div.card:nth-child(5) > div.upper
{
    background-color: hsl(32.45deg 67.09% 53.53%);
}
section.my-work > div.container > div.card:nth-child(6) > div.upper
{
    background-color: hsl(201.33deg 60% 55.88%);
}





section.my-work > div.container > div.card > div.upper > p
{
    font-size:3rem;
    text-align:center;
    font-family: var(--font-titles);
    color: white;
}

section.my-work > div.container > div.card > div.lower
{
    display:flex; 
    flex-direction: column;
    gap: 20px; 
    height: 40%;
    padding: 20px 25px;
}

section.my-work > div.container > div.card > div.lower > div.title
{
    display:flex;
    justify-content:space-between;
}

section.my-work > div.container > div.card > div.lower > div.title > h3
{
    font-size: 1.5rem;    
    font-weight: 100;
    font-family: var(--font-titles);
}

section.my-work > div.container > div.card > div.lower > div.title > div.icons
{
    display:flex;
    align-items:center;
    gap:15px;
}

section.my-work > div.container > div.card > div.lower > div.title > div.icons > i
{
    font-size: 1.75rem;
}

section.my-work > div.container > div.card > div.lower > p
{
    font-size: 1.5rem;
    font-family: var(--font-main);
}



/* Mobile version breakpoint */
@media (max-width: 500px)
{

}

/* Table version breakpoint. */
@media (max-width: 1000px)
{

}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAEA;;IAEI,sCAAsC;IACtC,qCAAqC;IACrC,yCAAyC;IACzC,8CAA8C;AAClD;;AAEA;;;;IAII,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;IAClB,cAAc;AAClB;;AAEA;;IAEI,WAAW;IACX,cAAc;IACd,6CAA6C;IAC7C,wBAAwB;IACxB,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,4CAA4C;IAC5C,YAAY;AAChB;;AAEA,gCAAgC;;AAEhC;;IAEI,aAAa;IACb,UAAU;AACd;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;;IAEI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,MAAM;IACN,OAAO;IACP,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,WAAW;AACf;;AAEA;;IAEI,sBAAsB;IACtB,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,YAAY;IACZ,QAAQ;IACR,6BAA6B;AACjC;;AAEA;;IAEI,eAAe;IACf,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;;IAEI,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;;IAEI,YAAY;IACZ,wBAAwB;IACxB,SAAS;AACb;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,qBAAqB;IACrB,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,iBAAiB;IACjB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,oDAAoD;IACpD,QAAQ;AACZ;;AAEA;;IAEI,aAAa;IACb,6BAA6B;AACjC;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;;IAEI,yCAAyC;AAC7C;AACA;;IAEI,6CAA6C;AACjD;AACA;;IAEI,2CAA2C;AAC/C;AACA;;IAEI,8CAA8C;AAClD;AACA;;IAEI,6CAA6C;AACjD;AACA;;IAEI,2CAA2C;AAC/C;;;;;;AAMA;;IAEI,cAAc;IACd,iBAAiB;IACjB,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;IACjB,6BAA6B;AACjC;;;;AAIA,8BAA8B;AAC9B;;;AAGA;;AAEA,8BAA8B;AAC9B;;;AAGA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Poiret+One&display=swap');\n\n:root\n{\n    --font-titles: 'Marck Script', cursive;;\n    --font-main: 'Poiret One', sans-serif;\n    --color-main: hsl(191.65deg 91.4% 36.47%);\n    --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n*,\n*::before,\n*::after\n{\n    border: 1px solid red;\n    padding: 0;\n    margin: 0;\n    box-sizing:border-box;\n}\n\nbody\n{\n    height: 100%;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    gap:150px;\n    overflow-x: hidden;\n    padding:75px 0;\n}\n\ndiv.deco\n{\n    width: 200%;\n    height: 1000px;\n    background-color: hsl(191.65deg 91.4% 36.47%);\n    transform: rotate(-9deg);\n    position: absolute;\n    top: -76%;\n    left: -401px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    z-index: -10;\n}\n\n/* Desktop version breakpoint. */\n\nheader.about-me\n{\n    display: flex;\n    width: 90%;\n}\n\nheader.about-me > div.image\n{\n    position:relative;\n    display:flex;\n}\n\nheader.about-me > div.image > img\n{\n    width: 500px;\n    box-shadow: var(--box-shadow);\n}\n\nheader.about-me > div.image > p.name\n{\n    position:absolute;\n    bottom: 10px;\n    text-align:center;\n    left:0;\n    right:0;\n    font-size: 4rem;\n    font-weight: 900;\n    font-family: var(--font-titles);\n    color:white;\n}\n\nheader.about-me > div.info\n{\n    background-color:white;\n    height: 80%;\n    align-self:center;\n    display:flex;\n    flex-direction:column;\n    justify-content: space-between;\n    padding:50px;\n    gap:25px;\n    box-shadow: var(--box-shadow);\n}\n\nheader.about-me > div.info > h2\n{\n    font-size: 3rem;\n    font-weight: 100;\n    font-family: var(--font-titles);\n}\n\nheader.about-me > div.info > p\n{\n    font-size:1.8rem;\n    font-family:var(--font-main);\n}\n\nheader.about-me > div.info > div.icons-container\n{\n    display:flex;\n    justify-content:flex-end;\n    gap: 35px;\n}\n\nheader.about-me > div.info > div.icons-container > i\n{\n    font-size: 2.5rem;\n}\n\nsection.my-work\n{\n    width: 90%;\n    display:flex;\n    flex-direction:column;\n    align-items:flex-start;\n    gap: 10px;\n}\n\nsection.my-work > h2\n{\n    font-size: 3.5rem;\n    font-family:var(--font-titles);\n    font-weight: 100;\n}\n\nsection.my-work > div.container\n{\n    width: 100%;\n    display:grid;\n    grid-template-columns: repeat(3, minmax(375px, 1fr));    \n    gap:50px;\n}\n\nsection.my-work > div.container > div.card\n{\n    height: 500px;\n    box-shadow: var(--box-shadow);\n}\n\nsection.my-work > div.container > div.card > div.upper\n{\n    height: 60%;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n\nsection.my-work > div.container > div.card:first-of-type > div.upper\n{\n    background-color: hsl(0deg 69.89% 36.47%);\n}\nsection.my-work > div.container > div.card:nth-child(2) > div.upper\n{\n    background-color: hsl(244.94deg 44.5% 62.55%);\n}\nsection.my-work > div.container > div.card:nth-child(3) > div.upper\n{\n    background-color: hsl(104.55deg 30% 43.14%);\n}\nsection.my-work > div.container > div.card:nth-child(4) > div.upper\n{\n    background-color: hsl(309.38deg 44.44% 57.65%);\n}\nsection.my-work > div.container > div.card:nth-child(5) > div.upper\n{\n    background-color: hsl(32.45deg 67.09% 53.53%);\n}\nsection.my-work > div.container > div.card:nth-child(6) > div.upper\n{\n    background-color: hsl(201.33deg 60% 55.88%);\n}\n\n\n\n\n\nsection.my-work > div.container > div.card > div.upper > p\n{\n    font-size:3rem;\n    text-align:center;\n    font-family: var(--font-titles);\n    color: white;\n}\n\nsection.my-work > div.container > div.card > div.lower\n{\n    display:flex; \n    flex-direction: column;\n    gap: 20px; \n    height: 40%;\n    padding: 20px 25px;\n}\n\nsection.my-work > div.container > div.card > div.lower > div.title\n{\n    display:flex;\n    justify-content:space-between;\n}\n\nsection.my-work > div.container > div.card > div.lower > div.title > h3\n{\n    font-size: 1.5rem;    \n    font-weight: 100;\n    font-family: var(--font-titles);\n}\n\nsection.my-work > div.container > div.card > div.lower > div.title > div.icons\n{\n    display:flex;\n    align-items:center;\n    gap:15px;\n}\n\nsection.my-work > div.container > div.card > div.lower > div.title > div.icons > i\n{\n    font-size: 1.75rem;\n}\n\nsection.my-work > div.container > div.card > div.lower > p\n{\n    font-size: 1.5rem;\n    font-family: var(--font-main);\n}\n\n\n\n/* Mobile version breakpoint */\n@media (max-width: 500px)\n{\n\n}\n\n/* Table version breakpoint. */\n@media (max-width: 1000px)\n{\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/person.jpg */ "./src/images/person.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Homepage</title>\n    <" + "script src=\"https://kit.fontawesome.com/64a715bddf.js\" crossorigin=\"anonymous\"><" + "/script>\n</head>\n<body>\n    <div class=\"deco\"></div>\n    <header class=\"about-me\" aria-label=\"About me\">\n        <div class=\"image\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Person using a computer\">\n            <p class=\"name\">Ignacio Gandur</p>\n        </div>\n        <div class=\"info\">\n            <h2>About me</h2>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facilis hic aperiam in maxime sit quis rem. Quae animi ullam laboriosam id molestiae a atque fugit. In soluta ducimus excepturi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate accusamus sint ipsum, adipisci, et ad non obcaecati tempore totam iusto libero voluptas? Aperiam minima beatae, corporis nostrum laudantium placeat in?</p>\n            <div class=\"icons-container\">\n                <i class=\"fa-brands fa-github\"></i>\n                <i class=\"fa-brands fa-linkedin\"></i>\n                <i class=\"fa-brands fa-x-twitter\"></i>\n            </div>\n        </div>\n    </header>\n    <section class=\"my-work\" aria-label=\"My work\">\n        <h2>My work</h2>\n        <div class=\"container\">\n            <div class=\"card\">\n                <div class=\"upper\">\n                    <p>Screenshot of project</p>\n                </div>\n                <div class=\"lower\">\n                   <div class=\"title\">\n                     <h3>Project name</h3>\n                     <div class=\"icons\">\n                        <i class=\"fa-brands fa-github\"></i>\n                        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                     </div>\n                   </div> \n                   <p>Short description of the project. Just a couple of sentences will do.</p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"upper\">\n                    <p>Screenshot of project</p>\n                </div>\n                <div class=\"lower\">\n                   <div class=\"title\">\n                     <h3>Project name</h3>\n                     <div class=\"icons\">\n                        <i class=\"fa-brands fa-github\"></i>\n                        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                     </div>\n                   </div> \n                   <p>Short description of the project. Just a couple of sentences will do.</p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"upper\">\n                    <p>Screenshot of project</p>\n                </div>\n                <div class=\"lower\">\n                   <div class=\"title\">\n                     <h3>Project name</h3>\n                     <div class=\"icons\">\n                        <i class=\"fa-brands fa-github\"></i>\n                        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                     </div>\n                   </div> \n                   <p>Short description of the project. Just a couple of sentences will do.</p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"upper\">\n                    <p>Screenshot of project</p>\n                </div>\n                <div class=\"lower\">\n                   <div class=\"title\">\n                     <h3>Project name</h3>\n                     <div class=\"icons\">\n                        <i class=\"fa-brands fa-github\"></i>\n                        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                     </div>\n                   </div> \n                   <p>Short description of the project. Just a couple of sentences will do.</p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"upper\">\n                    <p>Screenshot of project</p>\n                </div>\n                <div class=\"lower\">\n                   <div class=\"title\">\n                     <h3>Project name</h3>\n                     <div class=\"icons\">\n                        <i class=\"fa-brands fa-github\"></i>\n                        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                     </div>\n                   </div> \n                   <p>Short description of the project. Just a couple of sentences will do.</p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"upper\">\n                    <p>Screenshot of project</p>\n                </div>\n                <div class=\"lower\">\n                   <div class=\"title\">\n                     <h3>Project name</h3>\n                     <div class=\"icons\">\n                        <i class=\"fa-brands fa-github\"></i>\n                        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n                     </div>\n                   </div> \n                   <p>Short description of the project. Just a couple of sentences will do.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n    <footer class=\"contact-info\" aria-label=\"Contact info\">\n        <div class=\"info\">\n            <h3>Contact me</h3>\n            <p>Please get in touch if you think our work could be mutually beneficial!</p>\n            <p class=\"address\">1234 Random Road<br>Random Town, California 12345</p>\n            <p class=\"phone-number\"><i class=\"fa-solid fa-phone\"></i>555-555-5555</p>\n            <p><i class=\"fa-regular fa-envelope\"></i> ignaciogandur.is.not.real@gmail.com</p>\n        </div>\n        <img src=\"\" alt=\"\">\n    </footer>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/person.jpg":
/*!*******************************!*\
  !*** ./src/images/person.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "839eaeced9e33fab4062.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNElBQTRJO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLHlGQUF5RixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLGFBQWEsT0FBTyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFyY2srU2NyaXB0JmZhbWlseT1Qb2lyZXQrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3RcbntcbiAgICAtLWZvbnQtdGl0bGVzOiAnTWFyY2sgU2NyaXB0JywgY3Vyc2l2ZTs7XG4gICAgLS1mb250LW1haW46ICdQb2lyZXQgT25lJywgc2Fucy1zZXJpZjtcbiAgICAtLWNvbG9yLW1haW46IGhzbCgxOTEuNjVkZWcgOTEuNCUgMzYuNDclKTtcbiAgICAtLWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG5ib2R5XG57XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGdhcDoxNTBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZzo3NXB4IDA7XG59XG5cbmRpdi5kZWNvXG57XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5MS42NWRlZyA5MS40JSAzNi40NyUpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05ZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNzYlO1xuICAgIGxlZnQ6IC00MDFweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbiAgICB6LWluZGV4OiAtMTA7XG59XG5cbi8qIERlc2t0b3AgdmVyc2lvbiBicmVha3BvaW50LiAqL1xuXG5oZWFkZXIuYWJvdXQtbWVcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbmhlYWRlci5hYm91dC1tZSA+IGRpdi5pbWFnZVxue1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmltYWdlID4gaW1nXG57XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG5oZWFkZXIuYWJvdXQtbWUgPiBkaXYuaW1hZ2UgPiBwLm5hbWVcbntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmluZm9cbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6NTBweDtcbiAgICBnYXA6MjVweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cblxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmluZm8gPiBoMlxue1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XG59XG5cbmhlYWRlci5hYm91dC1tZSA+IGRpdi5pbmZvID4gcFxue1xuICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZm9udC1tYWluKTtcbn1cblxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmluZm8gPiBkaXYuaWNvbnMtY29udGFpbmVyXG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICBnYXA6IDM1cHg7XG59XG5cbmhlYWRlci5hYm91dC1tZSA+IGRpdi5pbmZvID4gZGl2Lmljb25zLWNvbnRhaW5lciA+IGlcbntcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuc2VjdGlvbi5teS13b3JrXG57XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5zZWN0aW9uLm15LXdvcmsgPiBoMlxue1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtdGl0bGVzKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgzNzVweCwgMWZyKSk7ICAgIFxuICAgIGdhcDo1MHB4O1xufVxuXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmRcbntcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQgPiBkaXYudXBwZXJcbntcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZDpmaXJzdC1vZi10eXBlID4gZGl2LnVwcGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcgNjkuODklIDM2LjQ3JSk7XG59XG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQ6bnRoLWNoaWxkKDIpID4gZGl2LnVwcGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0NC45NGRlZyA0NC41JSA2Mi41NSUpO1xufVxuc2VjdGlvbi5teS13b3JrID4gZGl2LmNvbnRhaW5lciA+IGRpdi5jYXJkOm50aC1jaGlsZCgzKSA+IGRpdi51cHBlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMDQuNTVkZWcgMzAlIDQzLjE0JSk7XG59XG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQ6bnRoLWNoaWxkKDQpID4gZGl2LnVwcGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDMwOS4zOGRlZyA0NC40NCUgNTcuNjUlKTtcbn1cbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZDpudGgtY2hpbGQoNSkgPiBkaXYudXBwZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzIuNDVkZWcgNjcuMDklIDUzLjUzJSk7XG59XG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQ6bnRoLWNoaWxkKDYpID4gZGl2LnVwcGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwMS4zM2RlZyA2MCUgNTUuODglKTtcbn1cblxuXG5cblxuXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQgPiBkaXYudXBwZXIgPiBwXG57XG4gICAgZm9udC1zaXplOjNyZW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlclxue1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7IFxuICAgIGhlaWdodDogNDAlO1xuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcbn1cblxuc2VjdGlvbi5teS13b3JrID4gZGl2LmNvbnRhaW5lciA+IGRpdi5jYXJkID4gZGl2Lmxvd2VyID4gZGl2LnRpdGxlXG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xufVxuXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQgPiBkaXYubG93ZXIgPiBkaXYudGl0bGUgPiBoM1xue1xuICAgIGZvbnQtc2l6ZTogMS41cmVtOyAgICBcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XG59XG5cbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlciA+IGRpdi50aXRsZSA+IGRpdi5pY29uc1xue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZ2FwOjE1cHg7XG59XG5cbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlciA+IGRpdi50aXRsZSA+IGRpdi5pY29ucyA+IGlcbntcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlciA+IHBcbntcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcbn1cblxuXG5cbi8qIE1vYmlsZSB2ZXJzaW9uIGJyZWFrcG9pbnQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcbntcblxufVxuXG4vKiBUYWJsZSB2ZXJzaW9uIGJyZWFrcG9pbnQuICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KVxue1xuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7SUFFSSxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6Qyw4Q0FBOEM7QUFDbEQ7O0FBRUE7Ozs7SUFJSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztJQUNkLDZDQUE2QztJQUM3Qyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7O0FBRUEsZ0NBQWdDOztBQUVoQzs7SUFFSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFFBQVE7SUFDUiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9EQUFvRDtJQUNwRCxRQUFRO0FBQ1o7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUkseUNBQXlDO0FBQzdDO0FBQ0E7O0lBRUksNkNBQTZDO0FBQ2pEO0FBQ0E7O0lBRUksMkNBQTJDO0FBQy9DO0FBQ0E7O0lBRUksOENBQThDO0FBQ2xEO0FBQ0E7O0lBRUksNkNBQTZDO0FBQ2pEO0FBQ0E7O0lBRUksMkNBQTJDO0FBQy9DOzs7Ozs7QUFNQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7OztBQUlBLDhCQUE4QjtBQUM5Qjs7O0FBR0E7O0FBRUEsOEJBQThCO0FBQzlCOzs7QUFHQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXJjaytTY3JpcHQmZmFtaWx5PVBvaXJldCtPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3RcXG57XFxuICAgIC0tZm9udC10aXRsZXM6ICdNYXJjayBTY3JpcHQnLCBjdXJzaXZlOztcXG4gICAgLS1mb250LW1haW46ICdQb2lyZXQgT25lJywgc2Fucy1zZXJpZjtcXG4gICAgLS1jb2xvci1tYWluOiBoc2woMTkxLjY1ZGVnIDkxLjQlIDM2LjQ3JSk7XFxuICAgIC0tYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyXFxue1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5XFxue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDoxNTBweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBwYWRkaW5nOjc1cHggMDtcXG59XFxuXFxuZGl2LmRlY29cXG57XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5MS42NWRlZyA5MS40JSAzNi40NyUpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOWRlZyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNzYlO1xcbiAgICBsZWZ0OiAtNDAxcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgICB6LWluZGV4OiAtMTA7XFxufVxcblxcbi8qIERlc2t0b3AgdmVyc2lvbiBicmVha3BvaW50LiAqL1xcblxcbmhlYWRlci5hYm91dC1tZVxcbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmltYWdlXFxue1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG5oZWFkZXIuYWJvdXQtbWUgPiBkaXYuaW1hZ2UgPiBpbWdcXG57XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbmhlYWRlci5hYm91dC1tZSA+IGRpdi5pbWFnZSA+IHAubmFtZVxcbntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC10aXRsZXMpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmluZm9cXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzo1MHB4O1xcbiAgICBnYXA6MjVweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbmhlYWRlci5hYm91dC1tZSA+IGRpdi5pbmZvID4gaDJcXG57XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGVzKTtcXG59XFxuXFxuaGVhZGVyLmFib3V0LW1lID4gZGl2LmluZm8gPiBwXFxue1xcbiAgICBmb250LXNpemU6MS44cmVtO1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xcbn1cXG5cXG5oZWFkZXIuYWJvdXQtbWUgPiBkaXYuaW5mbyA+IGRpdi5pY29ucy1jb250YWluZXJcXG57XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6IDM1cHg7XFxufVxcblxcbmhlYWRlci5hYm91dC1tZSA+IGRpdi5pbmZvID4gZGl2Lmljb25zLWNvbnRhaW5lciA+IGlcXG57XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5zZWN0aW9uLm15LXdvcmtcXG57XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbnNlY3Rpb24ubXktd29yayA+IGgyXFxue1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZm9udC10aXRsZXMpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyXFxue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMzc1cHgsIDFmcikpOyAgICBcXG4gICAgZ2FwOjUwcHg7XFxufVxcblxcbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZFxcbntcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi51cHBlclxcbntcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQ6Zmlyc3Qtb2YtdHlwZSA+IGRpdi51cHBlclxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcgNjkuODklIDM2LjQ3JSk7XFxufVxcbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZDpudGgtY2hpbGQoMikgPiBkaXYudXBwZXJcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDQuOTRkZWcgNDQuNSUgNjIuNTUlKTtcXG59XFxuc2VjdGlvbi5teS13b3JrID4gZGl2LmNvbnRhaW5lciA+IGRpdi5jYXJkOm50aC1jaGlsZCgzKSA+IGRpdi51cHBlclxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEwNC41NWRlZyAzMCUgNDMuMTQlKTtcXG59XFxuc2VjdGlvbi5teS13b3JrID4gZGl2LmNvbnRhaW5lciA+IGRpdi5jYXJkOm50aC1jaGlsZCg0KSA+IGRpdi51cHBlclxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDMwOS4zOGRlZyA0NC40NCUgNTcuNjUlKTtcXG59XFxuc2VjdGlvbi5teS13b3JrID4gZGl2LmNvbnRhaW5lciA+IGRpdi5jYXJkOm50aC1jaGlsZCg1KSA+IGRpdi51cHBlclxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDMyLjQ1ZGVnIDY3LjA5JSA1My41MyUpO1xcbn1cXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQ6bnRoLWNoaWxkKDYpID4gZGl2LnVwcGVyXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjAxLjMzZGVnIDYwJSA1NS44OCUpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQgPiBkaXYudXBwZXIgPiBwXFxue1xcbiAgICBmb250LXNpemU6M3JlbTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc2VjdGlvbi5teS13b3JrID4gZGl2LmNvbnRhaW5lciA+IGRpdi5jYXJkID4gZGl2Lmxvd2VyXFxue1xcbiAgICBkaXNwbGF5OmZsZXg7IFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7IFxcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xcbn1cXG5cXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQgPiBkaXYubG93ZXIgPiBkaXYudGl0bGVcXG57XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxufVxcblxcbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlciA+IGRpdi50aXRsZSA+IGgzXFxue1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgICAgXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlcyk7XFxufVxcblxcbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlciA+IGRpdi50aXRsZSA+IGRpdi5pY29uc1xcbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDoxNXB4O1xcbn1cXG5cXG5zZWN0aW9uLm15LXdvcmsgPiBkaXYuY29udGFpbmVyID4gZGl2LmNhcmQgPiBkaXYubG93ZXIgPiBkaXYudGl0bGUgPiBkaXYuaWNvbnMgPiBpXFxue1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbnNlY3Rpb24ubXktd29yayA+IGRpdi5jb250YWluZXIgPiBkaXYuY2FyZCA+IGRpdi5sb3dlciA+IHBcXG57XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG59XFxuXFxuXFxuXFxuLyogTW9iaWxlIHZlcnNpb24gYnJlYWtwb2ludCAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcXG57XFxuXFxufVxcblxcbi8qIFRhYmxlIHZlcnNpb24gYnJlYWtwb2ludC4gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KVxcbntcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wZXJzb24uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gICAgPHRpdGxlPkhvbWVwYWdlPC90aXRsZT5cXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vNjRhNzE1YmRkZi5qc1xcXCIgY3Jvc3NvcmlnaW49XFxcImFub255bW91c1xcXCI+PFwiICsgXCIvc2NyaXB0PlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZGVjb1xcXCI+PC9kaXY+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImFib3V0LW1lXFxcIiBhcmlhLWxhYmVsPVxcXCJBYm91dCBtZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIlBlcnNvbiB1c2luZyBhIGNvbXB1dGVyXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwibmFtZVxcXCI+SWduYWNpbyBHYW5kdXI8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9cXFwiPlxcbiAgICAgICAgICAgIDxoMj5BYm91dCBtZTwvaDI+XFxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4IGZhY2lsaXMgaGljIGFwZXJpYW0gaW4gbWF4aW1lIHNpdCBxdWlzIHJlbS4gUXVhZSBhbmltaSB1bGxhbSBsYWJvcmlvc2FtIGlkIG1vbGVzdGlhZSBhIGF0cXVlIGZ1Z2l0LiBJbiBzb2x1dGEgZHVjaW11cyBleGNlcHR1cmkhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdXBpZGl0YXRlIGFjY3VzYW11cyBzaW50IGlwc3VtLCBhZGlwaXNjaSwgZXQgYWQgbm9uIG9iY2FlY2F0aSB0ZW1wb3JlIHRvdGFtIGl1c3RvIGxpYmVybyB2b2x1cHRhcz8gQXBlcmlhbSBtaW5pbWEgYmVhdGFlLCBjb3Jwb3JpcyBub3N0cnVtIGxhdWRhbnRpdW0gcGxhY2VhdCBpbj88L3A+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbnMtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1saW5rZWRpblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtYnJhbmRzIGZhLXgtdHdpdHRlclxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwibXktd29ya1xcXCIgYXJpYS1sYWJlbD1cXFwiTXkgd29ya1xcXCI+XFxuICAgICAgICA8aDI+TXkgd29yazwvaDI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5TY3JlZW5zaG90IG9mIHByb2plY3Q8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb3dlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5TY3JlZW5zaG90IG9mIHByb2plY3Q8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb3dlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5TY3JlZW5zaG90IG9mIHByb2plY3Q8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb3dlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5TY3JlZW5zaG90IG9mIHByb2plY3Q8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb3dlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5TY3JlZW5zaG90IG9mIHByb2plY3Q8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb3dlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1cHBlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5TY3JlZW5zaG90IG9mIHByb2plY3Q8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb3dlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICA8aDM+UHJvamVjdCBuYW1lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhLWJyYW5kcyBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYXJyb3ctdXAtcmlnaHQtZnJvbS1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+IFxcbiAgICAgICAgICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkby48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiY29udGFjdC1pbmZvXFxcIiBhcmlhLWxhYmVsPVxcXCJDb250YWN0IGluZm9cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxuICAgICAgICAgICAgPGgzPkNvbnRhY3QgbWU8L2gzPlxcbiAgICAgICAgICAgIDxwPlBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IHRoaW5rIG91ciB3b3JrIGNvdWxkIGJlIG11dHVhbGx5IGJlbmVmaWNpYWwhPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJhZGRyZXNzXFxcIj4xMjM0IFJhbmRvbSBSb2FkPGJyPlJhbmRvbSBUb3duLCBDYWxpZm9ybmlhIDEyMzQ1PC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJwaG9uZS1udW1iZXJcXFwiPjxpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS1waG9uZVxcXCI+PC9pPjU1NS01NTUtNTU1NTwvcD5cXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cXFwiZmEtcmVndWxhciBmYS1lbnZlbG9wZVxcXCI+PC9pPiBpZ25hY2lvZ2FuZHVyLmlzLm5vdC5yZWFsQGdtYWlsLmNvbTwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICA8L2Zvb3Rlcj5cXG48L2JvZHk+XFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9pbmRleC5odG1sJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=