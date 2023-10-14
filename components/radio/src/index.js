(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["ORadio"] = factory(require("omi"));
	else
		root["ORadio"] = factory(root["Omi"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./src/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\n.o-radio,\n.o-radio--medium.is-bordered .o-radio__label {\n  font-size: 14px; }\n\n.o-radio,\n.o-radio__input {\n  white-space: nowrap;\n  line-height: 1;\n  outline: 0; }\n\n.o-radio,\n.o-radio__inner,\n.o-radio__input {\n  position: relative;\n  display: inline-block; }\n\n.o-radio {\n  color: #606266;\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 30px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n\n.o-radio.is-bordered {\n  padding: 12px 20px 0 10px;\n  border-radius: 4px;\n  border: 1px solid #DCDFE6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  height: 40px; }\n\n.o-radio.is-bordered.is-checked {\n  border-color: #07c160; }\n\n.o-radio.is-bordered.is-disabled {\n  cursor: not-allowed;\n  border-color: #EBEEF5; }\n\n.o-radio__input.is-disabled .o-radio__inner,\n.o-radio__input.is-disabled.is-checked .o-radio__inner {\n  background-color: #F5F7FA;\n  border-color: #E4E7ED; }\n\n.o-radio.is-bordered + .o-radio.is-bordered {\n  margin-left: 10px; }\n\n.o-radio--medium.is-bordered {\n  padding: 10px 20px 0 10px;\n  border-radius: 4px;\n  height: 36px; }\n\n.o-radio--mini.is-bordered .o-radio__label,\n.o-radio--small.is-bordered .o-radio__label {\n  font-size: 12px; }\n\n.o-radio--medium.is-bordered .o-radio__inner {\n  height: 14px;\n  width: 14px; }\n\n.o-radio--small.is-bordered {\n  padding: 8px 15px 0 10px;\n  border-radius: 3px;\n  height: 32px; }\n\n.o-radio--small.is-bordered .o-radio__inner {\n  height: 12px;\n  width: 12px; }\n\n.o-radio--mini.is-bordered {\n  padding: 6px 15px 0 10px;\n  border-radius: 3px;\n  height: 28px; }\n\n.o-radio--mini.is-bordered .o-radio__inner {\n  height: 12px;\n  width: 12px; }\n\n.o-radio:last-child {\n  margin-right: 0; }\n\n.o-radio__input {\n  cursor: pointer;\n  vertical-align: middle; }\n\n.o-radio__input.is-disabled .o-radio__inner {\n  cursor: not-allowed; }\n\n.o-radio__input.is-disabled .o-radio__inner::after {\n  cursor: not-allowed;\n  background-color: #F5F7FA; }\n\n.o-radio__input.is-disabled .o-radio__inner + .o-radio__label {\n  cursor: not-allowed; }\n\n.o-radio__input.is-disabled.is-checked .o-radio__inner::after {\n  background-color: #C0C4CC; }\n\n.o-radio__input.is-disabled + span.o-radio__label {\n  color: #C0C4CC;\n  cursor: not-allowed; }\n\n.o-radio__input.is-checked .o-radio__inner {\n  border-color: #07c160;\n  background: #07c160; }\n\n.o-radio__input.is-checked .o-radio__inner::after {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1); }\n\n.o-radio__input.is-checked + .o-radio__label {\n  color: #07c160; }\n\n.o-radio__input.is-focus .o-radio__inner {\n  border-color: #07c160; }\n\n.o-radio__inner {\n  border: 1px solid #DCDFE6;\n  border-radius: 100%;\n  width: 14px;\n  height: 14px;\n  background-color: #FFF;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.o-radio__inner:hover {\n  border-color: #07c160; }\n\n.o-radio__inner::after {\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background-color: #FFF;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n  transform: translate(-50%, -50%) scale(0);\n  -webkit-transition: -webkit-transform .15s ease-in;\n  transition: -webkit-transform .15s ease-in;\n  transition: transform .15s ease-in;\n  transition: transform .15s ease-in, -webkit-transform .15s ease-in; }\n\n.o-radio__original {\n  opacity: 0;\n  outline: 0;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0; }\n\n.o-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .o-radio__inner {\n  -webkit-box-shadow: 0 0 2px 2px #07c160;\n  box-shadow: 0 0 2px 2px #07c160; }\n\n.o-radio__label {\n  font-size: 14px;\n  padding-left: 10px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../node_modules/_css-loader@1.0.1@css-loader!../node_modules/_resolve-url-loader@3.1.1@resolve-url-loader!../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.1@resolve-url-loader/index.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js?!./src/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var omi_1 = __webpack_require__(/*! omi */ "omi");
var css = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickHandler = function () {
            if (_this.props.disabled)
                return;
            if (!_this.props.checked) {
                _this.group.forEach(function (item) {
                    item.updateProps({
                        checked: false
                    });
                });
                _this.updateProps({
                    checked: true
                });
                _this.fire('change', { value: _this.props.value });
            }
        };
        return _this;
    }
    Radio.prototype.installed = function () {
        var _this = this;
        this.group = this.getScopeRoot(this.shadowRoot.host).querySelectorAll("o-radio[name='" + this.props.name + "']");
        //fix group 不一致
        this.group.forEach(function (ele) {
            ele.group = _this.group;
        });
    };
    Radio.prototype.render = function (props) {
        return omi_1.h("label", __assign({ role: "radio", tabindex: "0", onClick: this.clickHandler }, omi_1.extractClass(props, 'o-radio', {
            'is-disabled': props.disabled,
            'is-checked': props.checked
        }), { "aria-checked": props.checked }),
            omi_1.h("span", __assign({}, omi_1.extractClass(props, 'o-radio__input', {
                'is-disabled': props.disabled,
                'is-checked': props.checked
            })),
                omi_1.h("span", { class: "o-radio__inner" }),
                omi_1.h("input", __assign({ type: "radio", "aria-hidden": "true" }, extract(props, ['checked', 'value', 'disabled']), { tabindex: "-1", class: "o-radio__original" }))),
            omi_1.h("span", { class: "o-radio__label" },
                props.label,
                omi_1.h("slot", null)));
    };
    Radio.prototype.getScopeRoot = function (current) {
        while (true) {
            var p = current.parentNode;
            if (p) {
                current = p;
            }
            else {
                return current;
            }
        }
    };
    Radio.css = css;
    Radio.propTypes = {
        label: String,
        disabled: Boolean,
        checked: Boolean,
        value: String,
        name: String
    };
    Radio = __decorate([
        omi_1.tag('o-radio')
    ], Radio);
    return Radio;
}(omi_1.WeElement));
exports.default = Radio;
function extract(props, prop) {
    var _a;
    if (typeof prop === 'string') {
        if (props.hasOwnProperty(prop)) {
            return _a = {}, _a[prop] = props[prop], _a;
        }
    }
    else {
        var res_1 = {};
        prop.forEach(function (key) {
            if (props.hasOwnProperty(key)) {
                res_1[key] = props[key];
            }
        });
        return res_1;
    }
}


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map