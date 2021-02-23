(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jgam/OTHER/dublab/dublab/src/styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: Adieu;\n  src: url('adieu_custom.otf') format(\"opentype\");\n}\n:root {\n  --brand-purple: #562bff;\n  --icons-fx: scale(1.0);\n}\n* {\n  font-family: \"Adieu\", sans-serif;\n  font-size: 14px;\n}\n*:focus {\n    outline: 0;\n  }\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n\n  /* SCROLLBAR (firefox) */\n  scrollbar-width: thin;          /* \"auto\" or \"thin\"  */\n  scrollbar-color: white  #d7d6d6;   /* scroll thumb & track */\n}\n/* SCROLLBAR (webkit) */\n::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track {\n  background: #d7d6d6;\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track:active {\n  background: #d7d6d6;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n/* Volume Control */\ninput[type=range]::-moz-range-thumb {\n  /* box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; */\n  border: 1px solid #000000;\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  background: white;\n  cursor: pointer;\n}\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  background: black;\n  /* border-radius: 25px; */\n  border: 0px solid #000101;\n}\ninput[type=range] {\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  background: transparent; /* Otherwise white in Chrome */\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  position: relative;\n  top: -6px;\n  /* width: 100%; */\n  height: 1px;\n  cursor: pointer;\n  /* box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; */\n  background: white;\n  /* border-radius: 25px; */\n  border: 1px solid black;\n}\ninput[type=range]::-webkit-slider-thumb {\n  position: relative;\n  top: -6px;\n  /* box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; */\n  border: 1px solid #000000;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\na:link {\n  text-decoration: inherit;\n  color: black;\n  cursor: pointer;\n}\na:visited {\n  text-decoration: inherit;\n  color: black;\n  cursor: pointer;\n}\n.pointer {\n  cursor: pointer;\n}\n.cursor-default {\n  cursor: default;\n}\n.invisible {\n  display: none !important;\n}\n.no-margin-bottom {\n  margin-bottom: 0 !important;\n}\n.transparent {\n  opacity: 0.2;\n}\n.blurred {\n  filter: blur(13px);\n}\n/* DROP DOWNS */\n.drop-down-display {\n  display: block;\n}\n/* MARQUEE */\n.flickity-viewport {\n  height: 4rem !important;\n}\n/* DESKTOP */\n@media (min-width: 700px) {\n  :root {\n    --menu-height: 2rem;\n    --logo-size: 6.5rem;\n    --menu-padding: 10px;\n  }\n  @media (min-height: 1100px) {\n    body {\n      zoom: 112%;\n    }\n  }\n  @media (min-height: 1600px) {\n    body {\n      zoom: 125%;\n    }\n  }\n}\n/* MOBILE */\n@media (max-width: 700px) {\n  :root {\n    --menu-height: 2.25rem;\n    --logo-size: 6rem;\n    --menu-padding: 0px;\n  }\n\n  .tooltip {\n    display: none;\n  }\n}\n.bottom-content-margin-normal {\n  padding-bottom: calc(var(--menu-height) + var(--menu-height) + var(--menu-height));\n}\n.bottom-content-margin-mixcloud {\n  padding-bottom: 140px;\n}\n.lds-hourglass {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,+CAA0D;AAC5D;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;AAGA;EACE,gCAAgC;EAChC,eAAe;AACjB;AAEE;IACE,UAAU;EACZ;AAEF;;EAEE,YAAY;EACZ,SAAS;EACT,gBAAgB;;EAEhB,wBAAwB;EACxB,qBAAqB,WAAW,sBAAsB;EACtD,+BAA+B,IAAI,yBAAyB;AAC9D;AAEA,uBAAuB;AACvB;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AAEA,mBAAmB;AACnB;EACE,0DAA0D;EAC1D,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;AAEA;EACE,WAAW;EACX,WAAW;EACX,eAAe;EACf,oDAAoD;EACpD,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;AAC3B;AAEA;EACE,wBAAwB,EAAE,uDAAuD;EACjF,uBAAuB,EAAE,8BAA8B;AACzD;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,0DAA0D;EAC1D,iBAAiB;EACjB,yBAAyB;EACzB,uBAAuB;AACzB;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,0DAA0D;EAC1D,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,wBAAwB;AAC1B;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;AACjB;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;AACjB;AAEA;EACE,eAAe;AACjB;AAEA;EACE,eAAe;AACjB;AAEA;EACE,wBAAwB;AAC1B;AAEA;EACE,2BAA2B;AAC7B;AAEA;EACE,YAAY;AACd;AAEA;EACE,kBAAkB;AACpB;AAEA,eAAe;AACf;EACE,cAAc;AAChB;AAEA,YAAY;AACZ;EACE,uBAAuB;AACzB;AAEA,YAAY;AACZ;EACE;IACE,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;EACtB;EACA;IACE;MACE,UAAU;IACZ;EACF;EACA;IACE;MACE,UAAU;IACZ;EACF;AACF;AAEA,WAAW;AACX;EACE;IACE,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;AACF;AAEA;EACE,kFAAkF;AACpF;AAEA;EACE,qBAAqB;AACvB;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n\n@font-face {\n  font-family: Adieu;\n  src: url(\"src/assets/adieu_custom.otf\") format(\"opentype\");\n}\n\n:root {\n  --brand-purple: #562bff;\n  --icons-fx: scale(1.0);\n}\n\n\n* {\n  font-family: \"Adieu\", sans-serif;\n  font-size: 14px;\n}\n\n  *:focus {\n    outline: 0;\n  }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n\n  /* SCROLLBAR (firefox) */\n  scrollbar-width: thin;          /* \"auto\" or \"thin\"  */\n  scrollbar-color: white  #d7d6d6;   /* scroll thumb & track */\n}\n\n/* SCROLLBAR (webkit) */\n::-webkit-scrollbar {\n  width: 3px;\n  height: 3px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track {\n  background: #d7d6d6;\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track:active {\n  background: #d7d6d6;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\n/* Volume Control */\ninput[type=range]::-moz-range-thumb {\n  /* box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; */\n  border: 1px solid #000000;\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  background: white;\n  cursor: pointer;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 1px;\n  cursor: pointer;\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n  background: black;\n  /* border-radius: 25px; */\n  border: 0px solid #000101;\n}\n\ninput[type=range] {\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  background: transparent; /* Otherwise white in Chrome */\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  position: relative;\n  top: -6px;\n  /* width: 100%; */\n  height: 1px;\n  cursor: pointer;\n  /* box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; */\n  background: white;\n  /* border-radius: 25px; */\n  border: 1px solid black;\n}\n  \ninput[type=range]::-webkit-slider-thumb {\n  position: relative;\n  top: -6px;\n  /* box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; */\n  border: 1px solid #000000;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n\na:link {\n  text-decoration: inherit;\n  color: black;\n  cursor: pointer;\n}\n\na:visited {\n  text-decoration: inherit;\n  color: black;\n  cursor: pointer;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.cursor-default {\n  cursor: default;\n}\n\n.invisible {\n  display: none !important;\n}\n\n.no-margin-bottom {\n  margin-bottom: 0 !important;\n}\n\n.transparent {\n  opacity: 0.2;\n}\n\n.blurred {\n  filter: blur(13px);\n}\n\n/* DROP DOWNS */\n.drop-down-display {\n  display: block;\n}\n\n/* MARQUEE */\n.flickity-viewport {\n  height: 4rem !important;\n}\n\n/* DESKTOP */\n@media (min-width: 700px) {\n  :root {\n    --menu-height: 2rem;\n    --logo-size: 6.5rem;\n    --menu-padding: 10px;\n  }\n  @media (min-height: 1100px) {\n    body {\n      zoom: 112%;\n    }\n  }\n  @media (min-height: 1600px) {\n    body {\n      zoom: 125%;\n    }\n  }\n}\n\n/* MOBILE */\n@media (max-width: 700px) {\n  :root {\n    --menu-height: 2.25rem;\n    --logo-size: 6rem;\n    --menu-padding: 0px;\n  }\n\n  .tooltip {\n    display: none;\n  }\n}\n\n.bottom-content-margin-normal {\n  padding-bottom: calc(var(--menu-height) + var(--menu-height) + var(--menu-height));\n}\n\n.bottom-content-margin-mixcloud {\n  padding-bottom: 140px;\n}\n\n.lds-hourglass {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map