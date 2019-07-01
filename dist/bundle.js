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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/color.js":
/*!**********************!*\
  !*** ./lib/color.js ***!
  \**********************/
/*! exports provided: fromString, add, add_, multiply, multiply_, interpolate, lerp, interpolateHSL, lerpHSL, randomize, rgb2hsl, hsl2rgb, toRGB, toHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_", function() { return add_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply_", function() { return multiply_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHSL", function() { return interpolateHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerpHSL", function() { return lerpHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomize", function() { return randomize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hsl", function() { return rgb2hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl2rgb", function() { return hsl2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRGB", function() { return toRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHex", function() { return toHex; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./lib/util.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./lib/rng.js");


function fromString(str) {
    let cached, r;
    if (str in CACHE) {
        cached = CACHE[str];
    }
    else {
        if (str.charAt(0) == "#") {
            let matched = str.match(/[0-9a-f]/gi) || [];
            let values = matched.map((x) => parseInt(x, 16));
            if (values.length == 3) {
                cached = values.map((x) => x * 17);
            }
            else {
                for (let i = 0; i < 3; i++) {
                    values[i + 1] += 16 * values[i];
                    values.splice(i, 1);
                }
                cached = values;
            }
        }
        else if ((r = str.match(/rgb\(([0-9, ]+)\)/i))) {
            cached = r[1].split(/\s*,\s*/).map((x) => parseInt(x));
        }
        else {
            cached = [0, 0, 0];
        }
        CACHE[str] = cached;
    }
    return cached.slice();
}
function add(color1, ...colors) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            result[i] += colors[j][i];
        }
    }
    return result;
}
function add_(color1, ...colors) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            color1[i] += colors[j][i];
        }
    }
    return color1;
}
function multiply(color1, ...colors) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            result[i] *= colors[j][i] / 255;
        }
        result[i] = Math.round(result[i]);
    }
    return result;
}
function multiply_(color1, ...colors) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            color1[i] *= colors[j][i] / 255;
        }
        color1[i] = Math.round(color1[i]);
    }
    return color1;
}
function interpolate(color1, color2, factor = 0.5) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}
const lerp = interpolate;
function interpolateHSL(color1, color2, factor = 0.5) {
    let hsl1 = rgb2hsl(color1);
    let hsl2 = rgb2hsl(color2);
    for (let i = 0; i < 3; i++) {
        hsl1[i] += factor * (hsl2[i] - hsl1[i]);
    }
    return hsl2rgb(hsl1);
}
const lerpHSL = interpolateHSL;
function randomize(color, diff) {
    if (!(diff instanceof Array)) {
        diff = Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getNormal(0, diff));
    }
    let result = color.slice();
    for (let i = 0; i < 3; i++) {
        result[i] += (diff instanceof Array ? Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getNormal(0, diff[i])) : diff);
    }
    return result;
}
function rgb2hsl(color) {
    let r = color[0] / 255;
    let g = color[1] / 255;
    let b = color[2] / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;
    if (max == min) {
        s = 0;
    }
    else {
        let d = max - min;
        s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
}
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hsl2rgb(color) {
    let l = color[2];
    if (color[1] == 0) {
        l = Math.round(l * 255);
        return [l, l, l];
    }
    else {
        let s = color[1];
        let q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
        let p = 2 * l - q;
        let r = hue2rgb(p, q, color[0] + 1 / 3);
        let g = hue2rgb(p, q, color[0]);
        let b = hue2rgb(p, q, color[0] - 1 / 3);
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
}
function toRGB(color) {
    let clamped = color.map(x => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(x, 0, 255));
    return `rgb(${clamped.join(",")})`;
}
function toHex(color) {
    let clamped = color.map(x => Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(x, 0, 255).toString(16).padStart(2, "0"));
    return `#${clamped.join("")}`;
}
const CACHE = {
    "black": [0, 0, 0],
    "navy": [0, 0, 128],
    "darkblue": [0, 0, 139],
    "mediumblue": [0, 0, 205],
    "blue": [0, 0, 255],
    "darkgreen": [0, 100, 0],
    "green": [0, 128, 0],
    "teal": [0, 128, 128],
    "darkcyan": [0, 139, 139],
    "deepskyblue": [0, 191, 255],
    "darkturquoise": [0, 206, 209],
    "mediumspringgreen": [0, 250, 154],
    "lime": [0, 255, 0],
    "springgreen": [0, 255, 127],
    "aqua": [0, 255, 255],
    "cyan": [0, 255, 255],
    "midnightblue": [25, 25, 112],
    "dodgerblue": [30, 144, 255],
    "forestgreen": [34, 139, 34],
    "seagreen": [46, 139, 87],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "limegreen": [50, 205, 50],
    "mediumseagreen": [60, 179, 113],
    "turquoise": [64, 224, 208],
    "royalblue": [65, 105, 225],
    "steelblue": [70, 130, 180],
    "darkslateblue": [72, 61, 139],
    "mediumturquoise": [72, 209, 204],
    "indigo": [75, 0, 130],
    "darkolivegreen": [85, 107, 47],
    "cadetblue": [95, 158, 160],
    "cornflowerblue": [100, 149, 237],
    "mediumaquamarine": [102, 205, 170],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "slateblue": [106, 90, 205],
    "olivedrab": [107, 142, 35],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "mediumslateblue": [123, 104, 238],
    "lawngreen": [124, 252, 0],
    "chartreuse": [127, 255, 0],
    "aquamarine": [127, 255, 212],
    "maroon": [128, 0, 0],
    "purple": [128, 0, 128],
    "olive": [128, 128, 0],
    "gray": [128, 128, 128],
    "grey": [128, 128, 128],
    "skyblue": [135, 206, 235],
    "lightskyblue": [135, 206, 250],
    "blueviolet": [138, 43, 226],
    "darkred": [139, 0, 0],
    "darkmagenta": [139, 0, 139],
    "saddlebrown": [139, 69, 19],
    "darkseagreen": [143, 188, 143],
    "lightgreen": [144, 238, 144],
    "mediumpurple": [147, 112, 216],
    "darkviolet": [148, 0, 211],
    "palegreen": [152, 251, 152],
    "darkorchid": [153, 50, 204],
    "yellowgreen": [154, 205, 50],
    "sienna": [160, 82, 45],
    "brown": [165, 42, 42],
    "darkgray": [169, 169, 169],
    "darkgrey": [169, 169, 169],
    "lightblue": [173, 216, 230],
    "greenyellow": [173, 255, 47],
    "paleturquoise": [175, 238, 238],
    "lightsteelblue": [176, 196, 222],
    "powderblue": [176, 224, 230],
    "firebrick": [178, 34, 34],
    "darkgoldenrod": [184, 134, 11],
    "mediumorchid": [186, 85, 211],
    "rosybrown": [188, 143, 143],
    "darkkhaki": [189, 183, 107],
    "silver": [192, 192, 192],
    "mediumvioletred": [199, 21, 133],
    "indianred": [205, 92, 92],
    "peru": [205, 133, 63],
    "chocolate": [210, 105, 30],
    "tan": [210, 180, 140],
    "lightgray": [211, 211, 211],
    "lightgrey": [211, 211, 211],
    "palevioletred": [216, 112, 147],
    "thistle": [216, 191, 216],
    "orchid": [218, 112, 214],
    "goldenrod": [218, 165, 32],
    "crimson": [220, 20, 60],
    "gainsboro": [220, 220, 220],
    "plum": [221, 160, 221],
    "burlywood": [222, 184, 135],
    "lightcyan": [224, 255, 255],
    "lavender": [230, 230, 250],
    "darksalmon": [233, 150, 122],
    "violet": [238, 130, 238],
    "palegoldenrod": [238, 232, 170],
    "lightcoral": [240, 128, 128],
    "khaki": [240, 230, 140],
    "aliceblue": [240, 248, 255],
    "honeydew": [240, 255, 240],
    "azure": [240, 255, 255],
    "sandybrown": [244, 164, 96],
    "wheat": [245, 222, 179],
    "beige": [245, 245, 220],
    "whitesmoke": [245, 245, 245],
    "mintcream": [245, 255, 250],
    "ghostwhite": [248, 248, 255],
    "salmon": [250, 128, 114],
    "antiquewhite": [250, 235, 215],
    "linen": [250, 240, 230],
    "lightgoldenrodyellow": [250, 250, 210],
    "oldlace": [253, 245, 230],
    "red": [255, 0, 0],
    "fuchsia": [255, 0, 255],
    "magenta": [255, 0, 255],
    "deeppink": [255, 20, 147],
    "orangered": [255, 69, 0],
    "tomato": [255, 99, 71],
    "hotpink": [255, 105, 180],
    "coral": [255, 127, 80],
    "darkorange": [255, 140, 0],
    "lightsalmon": [255, 160, 122],
    "orange": [255, 165, 0],
    "lightpink": [255, 182, 193],
    "pink": [255, 192, 203],
    "gold": [255, 215, 0],
    "peachpuff": [255, 218, 185],
    "navajowhite": [255, 222, 173],
    "moccasin": [255, 228, 181],
    "bisque": [255, 228, 196],
    "mistyrose": [255, 228, 225],
    "blanchedalmond": [255, 235, 205],
    "papayawhip": [255, 239, 213],
    "lavenderblush": [255, 240, 245],
    "seashell": [255, 245, 238],
    "cornsilk": [255, 248, 220],
    "lemonchiffon": [255, 250, 205],
    "floralwhite": [255, 250, 240],
    "snow": [255, 250, 250],
    "yellow": [255, 255, 0],
    "lightyellow": [255, 255, 224],
    "ivory": [255, 255, 240],
    "white": [255, 255, 255]
};


/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! exports provided: DEFAULT_WIDTH, DEFAULT_HEIGHT, DIRS, KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return DEFAULT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return DEFAULT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRS", function() { return DIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
let DEFAULT_WIDTH = 80;
let DEFAULT_HEIGHT = 25;
const DIRS = {
    4: [[0, -1], [1, 0], [0, 1], [-1, 0]],
    8: [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]],
    6: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1], [-2, 0]]
};
const KEYS = {
    VK_CANCEL: 3,
    VK_HELP: 6,
    VK_BACK_SPACE: 8,
    VK_TAB: 9,
    VK_CLEAR: 12,
    VK_RETURN: 13,
    VK_ENTER: 14,
    VK_SHIFT: 16,
    VK_CONTROL: 17,
    VK_ALT: 18,
    VK_PAUSE: 19,
    VK_CAPS_LOCK: 20,
    VK_ESCAPE: 27,
    VK_SPACE: 32,
    VK_PAGE_UP: 33,
    VK_PAGE_DOWN: 34,
    VK_END: 35,
    VK_HOME: 36,
    VK_LEFT: 37,
    VK_UP: 38,
    VK_RIGHT: 39,
    VK_DOWN: 40,
    VK_PRINTSCREEN: 44,
    VK_INSERT: 45,
    VK_DELETE: 46,
    VK_0: 48,
    VK_1: 49,
    VK_2: 50,
    VK_3: 51,
    VK_4: 52,
    VK_5: 53,
    VK_6: 54,
    VK_7: 55,
    VK_8: 56,
    VK_9: 57,
    VK_COLON: 58,
    VK_SEMICOLON: 59,
    VK_LESS_THAN: 60,
    VK_EQUALS: 61,
    VK_GREATER_THAN: 62,
    VK_QUESTION_MARK: 63,
    VK_AT: 64,
    VK_A: 65,
    VK_B: 66,
    VK_C: 67,
    VK_D: 68,
    VK_E: 69,
    VK_F: 70,
    VK_G: 71,
    VK_H: 72,
    VK_I: 73,
    VK_J: 74,
    VK_K: 75,
    VK_L: 76,
    VK_M: 77,
    VK_N: 78,
    VK_O: 79,
    VK_P: 80,
    VK_Q: 81,
    VK_R: 82,
    VK_S: 83,
    VK_T: 84,
    VK_U: 85,
    VK_V: 86,
    VK_W: 87,
    VK_X: 88,
    VK_Y: 89,
    VK_Z: 90,
    VK_CONTEXT_MENU: 93,
    VK_NUMPAD0: 96,
    VK_NUMPAD1: 97,
    VK_NUMPAD2: 98,
    VK_NUMPAD3: 99,
    VK_NUMPAD4: 100,
    VK_NUMPAD5: 101,
    VK_NUMPAD6: 102,
    VK_NUMPAD7: 103,
    VK_NUMPAD8: 104,
    VK_NUMPAD9: 105,
    VK_MULTIPLY: 106,
    VK_ADD: 107,
    VK_SEPARATOR: 108,
    VK_SUBTRACT: 109,
    VK_DECIMAL: 110,
    VK_DIVIDE: 111,
    VK_F1: 112,
    VK_F2: 113,
    VK_F3: 114,
    VK_F4: 115,
    VK_F5: 116,
    VK_F6: 117,
    VK_F7: 118,
    VK_F8: 119,
    VK_F9: 120,
    VK_F10: 121,
    VK_F11: 122,
    VK_F12: 123,
    VK_F13: 124,
    VK_F14: 125,
    VK_F15: 126,
    VK_F16: 127,
    VK_F17: 128,
    VK_F18: 129,
    VK_F19: 130,
    VK_F20: 131,
    VK_F21: 132,
    VK_F22: 133,
    VK_F23: 134,
    VK_F24: 135,
    VK_NUM_LOCK: 144,
    VK_SCROLL_LOCK: 145,
    VK_CIRCUMFLEX: 160,
    VK_EXCLAMATION: 161,
    VK_DOUBLE_QUOTE: 162,
    VK_HASH: 163,
    VK_DOLLAR: 164,
    VK_PERCENT: 165,
    VK_AMPERSAND: 166,
    VK_UNDERSCORE: 167,
    VK_OPEN_PAREN: 168,
    VK_CLOSE_PAREN: 169,
    VK_ASTERISK: 170,
    VK_PLUS: 171,
    VK_PIPE: 172,
    VK_HYPHEN_MINUS: 173,
    VK_OPEN_CURLY_BRACKET: 174,
    VK_CLOSE_CURLY_BRACKET: 175,
    VK_TILDE: 176,
    VK_COMMA: 188,
    VK_PERIOD: 190,
    VK_SLASH: 191,
    VK_BACK_QUOTE: 192,
    VK_OPEN_BRACKET: 219,
    VK_BACK_SLASH: 220,
    VK_CLOSE_BRACKET: 221,
    VK_QUOTE: 222,
    VK_META: 224,
    VK_ALTGR: 225,
    VK_WIN: 91,
    VK_KANA: 21,
    VK_HANGUL: 21,
    VK_EISU: 22,
    VK_JUNJA: 23,
    VK_FINAL: 24,
    VK_HANJA: 25,
    VK_KANJI: 25,
    VK_CONVERT: 28,
    VK_NONCONVERT: 29,
    VK_ACCEPT: 30,
    VK_MODECHANGE: 31,
    VK_SELECT: 41,
    VK_PRINT: 42,
    VK_EXECUTE: 43,
    VK_SLEEP: 95
};


/***/ }),

/***/ "./lib/display/backend.js":
/*!********************************!*\
  !*** ./lib/display/backend.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Backend; });
class Backend {
    getContainer() { return null; }
    setOptions(options) { this._options = options; }
}


/***/ }),

/***/ "./lib/display/canvas.js":
/*!*******************************!*\
  !*** ./lib/display/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.js */ "./lib/display/backend.js");

class Canvas extends _backend_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._ctx = document.createElement("canvas").getContext("2d");
    }
    schedule(cb) { requestAnimationFrame(cb); }
    getContainer() { return this._ctx.canvas; }
    setOptions(opts) {
        super.setOptions(opts);
        const style = (opts.fontStyle ? `${opts.fontStyle} ` : ``);
        const font = `${style} ${opts.fontSize}px ${opts.fontFamily}`;
        this._ctx.font = font;
        this._updateSize();
        this._ctx.font = font;
        this._ctx.textAlign = "center";
        this._ctx.textBaseline = "middle";
    }
    clear() {
        this._ctx.fillStyle = this._options.bg;
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    }
    eventToPosition(x, y) {
        let canvas = this._ctx.canvas;
        let rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
    }
}


/***/ }),

/***/ "./lib/display/display.js":
/*!********************************!*\
  !*** ./lib/display/display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var _hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hex.js */ "./lib/display/hex.js");
/* harmony import */ var _rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect.js */ "./lib/display/rect.js");
/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.js */ "./lib/display/tile.js");
/* harmony import */ var _term_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term.js */ "./lib/display/term.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text.js */ "./lib/text.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");






const BACKENDS = {
    "hex": _hex_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "rect": _rect_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    "tile": _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    "term": _term_js__WEBPACK_IMPORTED_MODULE_3__["default"]
};
const DEFAULT_OPTIONS = {
    width: _constants_js__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_WIDTH"],
    height: _constants_js__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_HEIGHT"],
    transpose: false,
    layout: "rect",
    fontSize: 15,
    spacing: 1,
    border: 0,
    forceSquareRatio: false,
    fontFamily: "monospace",
    fontStyle: "",
    fg: "#ccc",
    bg: "#000",
    tileWidth: 32,
    tileHeight: 32,
    tileMap: {},
    tileSet: null,
    tileColorize: false
};
class Display {
    constructor(options = {}) {
        this._data = {};
        this._dirty = false;
        this._options = {};
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        this.setOptions(options);
        this.DEBUG = this.DEBUG.bind(this);
        this._tick = this._tick.bind(this);
        this._backend.schedule(this._tick);
    }
    DEBUG(x, y, what) {
        let colors = [this._options.bg, this._options.fg];
        this.draw(x, y, null, null, colors[what % colors.length]);
    }
    clear() {
        this._data = {};
        this._dirty = true;
    }
    setOptions(options) {
        Object.assign(this._options, options);
        if (options.width || options.height || options.fontSize || options.fontFamily || options.spacing || options.layout) {
            if (options.layout) {
                let ctor = BACKENDS[options.layout];
                this._backend = new ctor();
            }
            this._backend.setOptions(this._options);
            this._dirty = true;
        }
        return this;
    }
    getOptions() { return this._options; }
    getContainer() { return this._backend.getContainer(); }
    computeSize(availWidth, availHeight) {
        return this._backend.computeSize(availWidth, availHeight);
    }
    computeFontSize(availWidth, availHeight) {
        return this._backend.computeFontSize(availWidth, availHeight);
    }
    computeTileSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.width);
        let height = Math.floor(availHeight / this._options.height);
        return [width, height];
    }
    eventToPosition(e) {
        let x, y;
        if ("touches" in e) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        }
        else {
            x = e.clientX;
            y = e.clientY;
        }
        return this._backend.eventToPosition(x, y);
    }
    draw(x, y, ch, fg, bg) {
        if (!fg) {
            fg = this._options.fg;
        }
        if (!bg) {
            bg = this._options.bg;
        }
        let key = `${x},${y}`;
        this._data[key] = [x, y, ch, fg, bg];
        if (this._dirty === true) {
            return;
        }
        if (!this._dirty) {
            this._dirty = {};
        }
        this._dirty[key] = true;
    }
    drawText(x, y, text, maxWidth) {
        let fg = null;
        let bg = null;
        let cx = x;
        let cy = y;
        let lines = 1;
        if (!maxWidth) {
            maxWidth = this._options.width - x;
        }
        let tokens = _text_js__WEBPACK_IMPORTED_MODULE_4__["tokenize"](text, maxWidth);
        while (tokens.length) {
            let token = tokens.shift();
            switch (token.type) {
                case _text_js__WEBPACK_IMPORTED_MODULE_4__["TYPE_TEXT"]:
                    let isSpace = false, isPrevSpace = false, isFullWidth = false, isPrevFullWidth = false;
                    for (let i = 0; i < token.value.length; i++) {
                        let cc = token.value.charCodeAt(i);
                        let c = token.value.charAt(i);
                        isFullWidth = (cc > 0xff00 && cc < 0xff61) || (cc > 0xffdc && cc < 0xffe8) || cc > 0xffee;
                        isSpace = (c.charCodeAt(0) == 0x20 || c.charCodeAt(0) == 0x3000);
                        if (isPrevFullWidth && !isFullWidth && !isSpace) {
                            cx++;
                        }
                        if (isFullWidth && !isPrevSpace) {
                            cx++;
                        }
                        this.draw(cx++, cy, c, fg, bg);
                        isPrevSpace = isSpace;
                        isPrevFullWidth = isFullWidth;
                    }
                    break;
                case _text_js__WEBPACK_IMPORTED_MODULE_4__["TYPE_FG"]:
                    fg = token.value || null;
                    break;
                case _text_js__WEBPACK_IMPORTED_MODULE_4__["TYPE_BG"]:
                    bg = token.value || null;
                    break;
                case _text_js__WEBPACK_IMPORTED_MODULE_4__["TYPE_NEWLINE"]:
                    cx = x;
                    cy++;
                    lines++;
                    break;
            }
        }
        return lines;
    }
    _tick() {
        this._backend.schedule(this._tick);
        if (!this._dirty) {
            return;
        }
        if (this._dirty === true) {
            this._backend.clear();
            for (let id in this._data) {
                this._draw(id, false);
            }
        }
        else {
            for (let key in this._dirty) {
                this._draw(key, true);
            }
        }
        this._dirty = false;
    }
    _draw(key, clearBefore) {
        let data = this._data[key];
        if (data[4] != this._options.bg) {
            clearBefore = true;
        }
        this._backend.draw(data, clearBefore);
    }
}
Display.Rect = _rect_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Display.Hex = _hex_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Display.Tile = _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Display.Term = _term_js__WEBPACK_IMPORTED_MODULE_3__["default"];


/***/ }),

/***/ "./lib/display/hex.js":
/*!****************************!*\
  !*** ./lib/display/hex.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hex; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./lib/display/canvas.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./lib/util.js");


class Hex extends _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._spacingX = 0;
        this._spacingY = 0;
        this._hexSize = 0;
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let px = [
            (x + 1) * this._spacingX,
            y * this._spacingY + this._hexSize
        ];
        if (this._options.transpose) {
            px.reverse();
        }
        if (clearBefore) {
            this._ctx.fillStyle = bg;
            this._fill(px[0], px[1]);
        }
        if (!ch) {
            return;
        }
        this._ctx.fillStyle = fg;
        let chars = [].concat(ch);
        for (let i = 0; i < chars.length; i++) {
            this._ctx.fillText(chars[i], px[0], Math.ceil(px[1]));
        }
    }
    computeSize(availWidth, availHeight) {
        if (this._options.transpose) {
            availWidth += availHeight;
            availHeight = availWidth - availHeight;
            availWidth -= availHeight;
        }
        let width = Math.floor(availWidth / this._spacingX) - 1;
        let height = Math.floor((availHeight - 2 * this._hexSize) / this._spacingY + 1);
        return [width, height];
    }
    computeFontSize(availWidth, availHeight) {
        if (this._options.transpose) {
            availWidth += availHeight;
            availHeight = availWidth - availHeight;
            availWidth -= availHeight;
        }
        let hexSizeWidth = 2 * availWidth / ((this._options.width + 1) * Math.sqrt(3)) - 1;
        let hexSizeHeight = availHeight / (2 + 1.5 * (this._options.height - 1));
        let hexSize = Math.min(hexSizeWidth, hexSizeHeight);
        let oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        let width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        let ratio = width / 100;
        hexSize = Math.floor(hexSize) + 1;
        let fontSize = 2 * hexSize / (this._options.spacing * (1 + ratio / Math.sqrt(3)));
        return Math.ceil(fontSize) - 1;
    }
    _normalizedEventToPosition(x, y) {
        let nodeSize;
        if (this._options.transpose) {
            x += y;
            y = x - y;
            x -= y;
            nodeSize = this._ctx.canvas.width;
        }
        else {
            nodeSize = this._ctx.canvas.height;
        }
        let size = nodeSize / this._options.height;
        y = Math.floor(y / size);
        if (Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["mod"])(y, 2)) {
            x -= this._spacingX;
            x = 1 + 2 * Math.floor(x / (2 * this._spacingX));
        }
        else {
            x = 2 * Math.floor(x / (2 * this._spacingX));
        }
        return [x, y];
    }
    _fill(cx, cy) {
        let a = this._hexSize;
        let b = this._options.border;
        const ctx = this._ctx;
        ctx.beginPath();
        if (this._options.transpose) {
            ctx.moveTo(cx - a + b, cy);
            ctx.lineTo(cx - a / 2 + b, cy + this._spacingX - b);
            ctx.lineTo(cx + a / 2 - b, cy + this._spacingX - b);
            ctx.lineTo(cx + a - b, cy);
            ctx.lineTo(cx + a / 2 - b, cy - this._spacingX + b);
            ctx.lineTo(cx - a / 2 + b, cy - this._spacingX + b);
            ctx.lineTo(cx - a + b, cy);
        }
        else {
            ctx.moveTo(cx, cy - a + b);
            ctx.lineTo(cx + this._spacingX - b, cy - a / 2 + b);
            ctx.lineTo(cx + this._spacingX - b, cy + a / 2 - b);
            ctx.lineTo(cx, cy + a - b);
            ctx.lineTo(cx - this._spacingX + b, cy + a / 2 - b);
            ctx.lineTo(cx - this._spacingX + b, cy - a / 2 + b);
            ctx.lineTo(cx, cy - a + b);
        }
        ctx.fill();
    }
    _updateSize() {
        const opts = this._options;
        const charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._hexSize = Math.floor(opts.spacing * (opts.fontSize + charWidth / Math.sqrt(3)) / 2);
        this._spacingX = this._hexSize * Math.sqrt(3) / 2;
        this._spacingY = this._hexSize * 1.5;
        let xprop;
        let yprop;
        if (opts.transpose) {
            xprop = "height";
            yprop = "width";
        }
        else {
            xprop = "width";
            yprop = "height";
        }
        this._ctx.canvas[xprop] = Math.ceil((opts.width + 1) * this._spacingX);
        this._ctx.canvas[yprop] = Math.ceil((opts.height - 1) * this._spacingY + 2 * this._hexSize);
    }
}


/***/ }),

/***/ "./lib/display/rect.js":
/*!*****************************!*\
  !*** ./lib/display/rect.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./lib/display/canvas.js");

class Rect extends _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._spacingX = 0;
        this._spacingY = 0;
        this._canvasCache = {};
    }
    setOptions(options) {
        super.setOptions(options);
        this._canvasCache = {};
    }
    draw(data, clearBefore) {
        if (Rect.cache) {
            this._drawWithCache(data);
        }
        else {
            this._drawNoCache(data, clearBefore);
        }
    }
    _drawWithCache(data) {
        let [x, y, ch, fg, bg] = data;
        let hash = "" + ch + fg + bg;
        let canvas;
        if (hash in this._canvasCache) {
            canvas = this._canvasCache[hash];
        }
        else {
            let b = this._options.border;
            canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = this._spacingX;
            canvas.height = this._spacingY;
            ctx.fillStyle = bg;
            ctx.fillRect(b, b, canvas.width - b, canvas.height - b);
            if (ch) {
                ctx.fillStyle = fg;
                ctx.font = this._ctx.font;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                let chars = [].concat(ch);
                for (let i = 0; i < chars.length; i++) {
                    ctx.fillText(chars[i], this._spacingX / 2, Math.ceil(this._spacingY / 2));
                }
            }
            this._canvasCache[hash] = canvas;
        }
        this._ctx.drawImage(canvas, x * this._spacingX, y * this._spacingY);
    }
    _drawNoCache(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        if (clearBefore) {
            let b = this._options.border;
            this._ctx.fillStyle = bg;
            this._ctx.fillRect(x * this._spacingX + b, y * this._spacingY + b, this._spacingX - b, this._spacingY - b);
        }
        if (!ch) {
            return;
        }
        this._ctx.fillStyle = fg;
        let chars = [].concat(ch);
        for (let i = 0; i < chars.length; i++) {
            this._ctx.fillText(chars[i], (x + 0.5) * this._spacingX, Math.ceil((y + 0.5) * this._spacingY));
        }
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._spacingX);
        let height = Math.floor(availHeight / this._spacingY);
        return [width, height];
    }
    computeFontSize(availWidth, availHeight) {
        let boxWidth = Math.floor(availWidth / this._options.width);
        let boxHeight = Math.floor(availHeight / this._options.height);
        let oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        let width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        let ratio = width / 100;
        let widthFraction = ratio * boxHeight / boxWidth;
        if (widthFraction > 1) {
            boxHeight = Math.floor(boxHeight / widthFraction);
        }
        return Math.floor(boxHeight / this._options.spacing);
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._spacingX), Math.floor(y / this._spacingY)];
    }
    _updateSize() {
        const opts = this._options;
        const charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._spacingX = Math.ceil(opts.spacing * charWidth);
        this._spacingY = Math.ceil(opts.spacing * opts.fontSize);
        if (opts.forceSquareRatio) {
            this._spacingX = this._spacingY = Math.max(this._spacingX, this._spacingY);
        }
        this._ctx.canvas.width = opts.width * this._spacingX;
        this._ctx.canvas.height = opts.height * this._spacingY;
    }
}
Rect.cache = false;


/***/ }),

/***/ "./lib/display/term.js":
/*!*****************************!*\
  !*** ./lib/display/term.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Term; });
/* harmony import */ var _backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.js */ "./lib/display/backend.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color.js */ "./lib/color.js");


function clearToAnsi(bg) {
    return `\x1b[0;48;5;${termcolor(bg)}m\x1b[2J`;
}
function colorToAnsi(fg, bg) {
    return `\x1b[0;38;5;${termcolor(fg)};48;5;${termcolor(bg)}m`;
}
function positionToAnsi(x, y) {
    return `\x1b[${y + 1};${x + 1}H`;
}
function termcolor(color) {
    const SRC_COLORS = 256.0;
    const DST_COLORS = 6.0;
    const COLOR_RATIO = DST_COLORS / SRC_COLORS;
    let rgb = _color_js__WEBPACK_IMPORTED_MODULE_1__["fromString"](color);
    let r = Math.floor(rgb[0] * COLOR_RATIO);
    let g = Math.floor(rgb[1] * COLOR_RATIO);
    let b = Math.floor(rgb[2] * COLOR_RATIO);
    return r * 36 + g * 6 + b * 1 + 16;
}
class Term extends _backend_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._offset = [0, 0];
        this._cursor = [-1, -1];
        this._lastColor = "";
    }
    schedule(cb) { setTimeout(cb, 1000 / 60); }
    setOptions(options) {
        super.setOptions(options);
        let size = [options.width, options.height];
        let avail = this.computeSize();
        this._offset = avail.map((val, index) => Math.floor((val - size[index]) / 2));
    }
    clear() {
        process.stdout.write(clearToAnsi(this._options.bg));
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let dx = this._offset[0] + x;
        let dy = this._offset[1] + y;
        let size = this.computeSize();
        if (dx < 0 || dx >= size[0]) {
            return;
        }
        if (dy < 0 || dy >= size[1]) {
            return;
        }
        if (dx !== this._cursor[0] || dy !== this._cursor[1]) {
            process.stdout.write(positionToAnsi(dx, dy));
            this._cursor[0] = dx;
            this._cursor[1] = dy;
        }
        if (clearBefore) {
            if (!ch) {
                ch = " ";
            }
        }
        if (!ch) {
            return;
        }
        let newColor = colorToAnsi(fg, bg);
        if (newColor !== this._lastColor) {
            process.stdout.write(newColor);
            this._lastColor = newColor;
        }
        let chars = [].concat(ch);
        process.stdout.write(chars[0]);
        this._cursor[0]++;
        if (this._cursor[0] >= size[0]) {
            this._cursor[0] = 0;
            this._cursor[1]++;
        }
    }
    computeFontSize() { throw new Error("Terminal backend has no notion of font size"); }
    eventToPosition(x, y) { return [x, y]; }
    computeSize() { return [process.stdout.columns, process.stdout.rows]; }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/display/tile.js":
/*!*****************************!*\
  !*** ./lib/display/tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ "./lib/display/canvas.js");

class Tile extends _canvas_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._colorCanvas = document.createElement("canvas");
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let tileWidth = this._options.tileWidth;
        let tileHeight = this._options.tileHeight;
        if (clearBefore) {
            if (this._options.tileColorize) {
                this._ctx.clearRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
            else {
                this._ctx.fillStyle = bg;
                this._ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
        if (!ch) {
            return;
        }
        let chars = [].concat(ch);
        let fgs = [].concat(fg);
        let bgs = [].concat(bg);
        for (let i = 0; i < chars.length; i++) {
            let tile = this._options.tileMap[chars[i]];
            if (!tile) {
                throw new Error(`Char "${chars[i]}" not found in tileMap`);
            }
            if (this._options.tileColorize) {
                let canvas = this._colorCanvas;
                let context = canvas.getContext("2d");
                context.globalCompositeOperation = "source-over";
                context.clearRect(0, 0, tileWidth, tileHeight);
                let fg = fgs[i];
                let bg = bgs[i];
                context.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
                if (fg != "transparent") {
                    context.fillStyle = fg;
                    context.globalCompositeOperation = "source-atop";
                    context.fillRect(0, 0, tileWidth, tileHeight);
                }
                if (bg != "transparent") {
                    context.fillStyle = bg;
                    context.globalCompositeOperation = "destination-over";
                    context.fillRect(0, 0, tileWidth, tileHeight);
                }
                this._ctx.drawImage(canvas, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
            else {
                this._ctx.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.tileWidth);
        let height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
    }
    computeFontSize() {
        throw new Error("Tile backend does not understand font size");
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
    _updateSize() {
        const opts = this._options;
        this._ctx.canvas.width = opts.width * opts.tileWidth;
        this._ctx.canvas.height = opts.height * opts.tileHeight;
        this._colorCanvas.width = opts.tileWidth;
        this._colorCanvas.height = opts.tileHeight;
    }
}


/***/ }),

/***/ "./lib/engine.js":
/*!***********************!*\
  !*** ./lib/engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Engine; });
class Engine {
    constructor(scheduler) {
        this._scheduler = scheduler;
        this._lock = 1;
    }
    start() { return this.unlock(); }
    lock() {
        this._lock++;
        return this;
    }
    unlock() {
        if (!this._lock) {
            throw new Error("Cannot unlock unlocked engine");
        }
        this._lock--;
        while (!this._lock) {
            let actor = this._scheduler.next();
            if (!actor) {
                return this.lock();
            }
            let result = actor.act();
            if (result && result.then) {
                this.lock();
                result.then(this.unlock.bind(this));
            }
        }
        return this;
    }
}


/***/ }),

/***/ "./lib/eventqueue.js":
/*!***************************!*\
  !*** ./lib/eventqueue.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventQueue; });
class EventQueue {
    constructor() {
        this._time = 0;
        this._events = [];
        this._eventTimes = [];
    }
    getTime() { return this._time; }
    clear() {
        this._events = [];
        this._eventTimes = [];
        return this;
    }
    add(event, time) {
        let index = this._events.length;
        for (let i = 0; i < this._eventTimes.length; i++) {
            if (this._eventTimes[i] > time) {
                index = i;
                break;
            }
        }
        this._events.splice(index, 0, event);
        this._eventTimes.splice(index, 0, time);
    }
    get() {
        if (!this._events.length) {
            return null;
        }
        let time = this._eventTimes.splice(0, 1)[0];
        if (time > 0) {
            this._time += time;
            for (let i = 0; i < this._eventTimes.length; i++) {
                this._eventTimes[i] -= time;
            }
        }
        return this._events.splice(0, 1)[0];
    }
    getEventTime(event) {
        let index = this._events.indexOf(event);
        if (index == -1) {
            return undefined;
        }
        return this._eventTimes[index];
    }
    remove(event) {
        let index = this._events.indexOf(event);
        if (index == -1) {
            return false;
        }
        this._remove(index);
        return true;
    }
    ;
    _remove(index) {
        this._events.splice(index, 1);
        this._eventTimes.splice(index, 1);
    }
    ;
}


/***/ }),

/***/ "./lib/fov/discrete-shadowcasting.js":
/*!*******************************************!*\
  !*** ./lib/fov/discrete-shadowcasting.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscreteShadowcasting; });
/* harmony import */ var _fov_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fov.js */ "./lib/fov/fov.js");

class DiscreteShadowcasting extends _fov_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    compute(x, y, R, callback) {
        callback(x, y, 0, 1);
        if (!this._lightPasses(x, y)) {
            return;
        }
        let DATA = [];
        let A, B, cx, cy, blocks;
        for (let r = 1; r <= R; r++) {
            let neighbors = this._getCircle(x, y, r);
            let angle = 360 / neighbors.length;
            for (let i = 0; i < neighbors.length; i++) {
                cx = neighbors[i][0];
                cy = neighbors[i][1];
                A = angle * (i - 0.5);
                B = A + angle;
                blocks = !this._lightPasses(cx, cy);
                if (this._visibleCoords(Math.floor(A), Math.ceil(B), blocks, DATA)) {
                    callback(cx, cy, r, 1);
                }
                if (DATA.length == 2 && DATA[0] == 0 && DATA[1] == 360) {
                    return;
                }
            }
        }
    }
    _visibleCoords(A, B, blocks, DATA) {
        if (A < 0) {
            let v1 = this._visibleCoords(0, B, blocks, DATA);
            let v2 = this._visibleCoords(360 + A, 360, blocks, DATA);
            return v1 || v2;
        }
        let index = 0;
        while (index < DATA.length && DATA[index] < A) {
            index++;
        }
        if (index == DATA.length) {
            if (blocks) {
                DATA.push(A, B);
            }
            return true;
        }
        let count = 0;
        if (index % 2) {
            while (index < DATA.length && DATA[index] < B) {
                index++;
                count++;
            }
            if (count == 0) {
                return false;
            }
            if (blocks) {
                if (count % 2) {
                    DATA.splice(index - count, count, B);
                }
                else {
                    DATA.splice(index - count, count);
                }
            }
            return true;
        }
        else {
            while (index < DATA.length && DATA[index] < B) {
                index++;
                count++;
            }
            if (A == DATA[index - count] && count == 1) {
                return false;
            }
            if (blocks) {
                if (count % 2) {
                    DATA.splice(index - count, count, A);
                }
                else {
                    DATA.splice(index - count, count, A, B);
                }
            }
            return true;
        }
    }
}


/***/ }),

/***/ "./lib/fov/fov.js":
/*!************************!*\
  !*** ./lib/fov/fov.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FOV; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");

;
;
class FOV {
    constructor(lightPassesCallback, options = {}) {
        this._lightPasses = lightPassesCallback;
        this._options = Object.assign({ topology: 8 }, options);
    }
    _getCircle(cx, cy, r) {
        let result = [];
        let dirs, countFactor, startOffset;
        switch (this._options.topology) {
            case 4:
                countFactor = 1;
                startOffset = [0, 1];
                dirs = [
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][7],
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][1],
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][3],
                    _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][8][5]
                ];
                break;
            case 6:
                dirs = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][6];
                countFactor = 1;
                startOffset = [-1, 1];
                break;
            case 8:
                dirs = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][4];
                countFactor = 2;
                startOffset = [-1, 1];
                break;
            default:
                throw new Error("Incorrect topology for FOV computation");
                break;
        }
        let x = cx + startOffset[0] * r;
        let y = cy + startOffset[1] * r;
        for (let i = 0; i < dirs.length; i++) {
            for (let j = 0; j < r * countFactor; j++) {
                result.push([x, y]);
                x += dirs[i][0];
                y += dirs[i][1];
            }
        }
        return result;
    }
}


/***/ }),

/***/ "./lib/fov/index.js":
/*!**************************!*\
  !*** ./lib/fov/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discrete_shadowcasting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discrete-shadowcasting.js */ "./lib/fov/discrete-shadowcasting.js");
/* harmony import */ var _precise_shadowcasting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precise-shadowcasting.js */ "./lib/fov/precise-shadowcasting.js");
/* harmony import */ var _recursive_shadowcasting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recursive-shadowcasting.js */ "./lib/fov/recursive-shadowcasting.js");



/* harmony default export */ __webpack_exports__["default"] = ({ DiscreteShadowcasting: _discrete_shadowcasting_js__WEBPACK_IMPORTED_MODULE_0__["default"], PreciseShadowcasting: _precise_shadowcasting_js__WEBPACK_IMPORTED_MODULE_1__["default"], RecursiveShadowcasting: _recursive_shadowcasting_js__WEBPACK_IMPORTED_MODULE_2__["default"] });


/***/ }),

/***/ "./lib/fov/precise-shadowcasting.js":
/*!******************************************!*\
  !*** ./lib/fov/precise-shadowcasting.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreciseShadowcasting; });
/* harmony import */ var _fov_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fov.js */ "./lib/fov/fov.js");

class PreciseShadowcasting extends _fov_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    compute(x, y, R, callback) {
        callback(x, y, 0, 1);
        if (!this._lightPasses(x, y)) {
            return;
        }
        let SHADOWS = [];
        let cx, cy, blocks, A1, A2, visibility;
        for (let r = 1; r <= R; r++) {
            let neighbors = this._getCircle(x, y, r);
            let neighborCount = neighbors.length;
            for (let i = 0; i < neighborCount; i++) {
                cx = neighbors[i][0];
                cy = neighbors[i][1];
                A1 = [i ? 2 * i - 1 : 2 * neighborCount - 1, 2 * neighborCount];
                A2 = [2 * i + 1, 2 * neighborCount];
                blocks = !this._lightPasses(cx, cy);
                visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);
                //if (visibility) {
                    callback(cx, cy, r, visibility);
                //}
                if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) {
                    return;
                }
            }
        }
    }
    _checkVisibility(A1, A2, blocks, SHADOWS) {
        if (A1[0] > A2[0]) {
            let v1 = this._checkVisibility(A1, [A1[1], A1[1]], blocks, SHADOWS);
            let v2 = this._checkVisibility([0, 1], A2, blocks, SHADOWS);
            return (v1 + v2) / 2;
        }
        let index1 = 0, edge1 = false;
        while (index1 < SHADOWS.length) {
            let old = SHADOWS[index1];
            let diff = old[0] * A1[1] - A1[0] * old[1];
            if (diff >= 0) {
                if (diff == 0 && !(index1 % 2)) {
                    edge1 = true;
                }
                break;
            }
            index1++;
        }
        let index2 = SHADOWS.length, edge2 = false;
        while (index2--) {
            let old = SHADOWS[index2];
            let diff = A2[0] * old[1] - old[0] * A2[1];
            if (diff >= 0) {
                if (diff == 0 && (index2 % 2)) {
                    edge2 = true;
                }
                break;
            }
        }
        let visible = true;
        if (index1 == index2 && (edge1 || edge2)) {
            visible = false;
        }
        else if (edge1 && edge2 && index1 + 1 == index2 && (index2 % 2)) {
            visible = false;
        }
        else if (index1 > index2 && (index1 % 2)) {
            visible = false;
        }
        if (!visible) {
            return 0;
        }
        let visibleLength;
        let remove = index2 - index1 + 1;
        if (remove % 2) {
            if (index1 % 2) {
                let P = SHADOWS[index1];
                visibleLength = (A2[0] * P[1] - P[0] * A2[1]) / (P[1] * A2[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove, A2);
                }
            }
            else {
                let P = SHADOWS[index2];
                visibleLength = (P[0] * A1[1] - A1[0] * P[1]) / (A1[1] * P[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove, A1);
                }
            }
        }
        else {
            if (index1 % 2) {
                let P1 = SHADOWS[index1];
                let P2 = SHADOWS[index2];
                visibleLength = (P2[0] * P1[1] - P1[0] * P2[1]) / (P1[1] * P2[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove);
                }
            }
            else {
                if (blocks) {
                    SHADOWS.splice(index1, remove, A1, A2);
                }
                return 1;
            }
        }
        let arcLength = (A2[0] * A1[1] - A1[0] * A2[1]) / (A1[1] * A2[1]);
        return visibleLength / arcLength;
    }
}


/***/ }),

/***/ "./lib/fov/recursive-shadowcasting.js":
/*!********************************************!*\
  !*** ./lib/fov/recursive-shadowcasting.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecursiveShadowcasting; });
/* harmony import */ var _fov_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fov.js */ "./lib/fov/fov.js");

const OCTANTS = [
    [-1, 0, 0, 1],
    [0, -1, 1, 0],
    [0, -1, -1, 0],
    [-1, 0, 0, -1],
    [1, 0, 0, -1],
    [0, 1, -1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1]
];
class RecursiveShadowcasting extends _fov_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    compute(x, y, R, callback) {
        callback(x, y, 0, 1);
        for (let i = 0; i < OCTANTS.length; i++) {
            this._renderOctant(x, y, OCTANTS[i], R, callback);
        }
    }
    compute180(x, y, R, dir, callback) {
        callback(x, y, 0, 1);
        let previousOctant = (dir - 1 + 8) % 8;
        let nextPreviousOctant = (dir - 2 + 8) % 8;
        let nextOctant = (dir + 1 + 8) % 8;
        this._renderOctant(x, y, OCTANTS[nextPreviousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[nextOctant], R, callback);
    }
    ;
    compute90(x, y, R, dir, callback) {
        callback(x, y, 0, 1);
        let previousOctant = (dir - 1 + 8) % 8;
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
    }
    _renderOctant(x, y, octant, R, callback) {
        this._castVisibility(x, y, 1, 1.0, 0.0, R + 1, octant[0], octant[1], octant[2], octant[3], callback);
    }
    _castVisibility(startX, startY, row, visSlopeStart, visSlopeEnd, radius, xx, xy, yx, yy, callback) {
        if (visSlopeStart < visSlopeEnd) {
            return;
        }
        for (let i = row; i <= radius; i++) {
            let dx = -i - 1;
            let dy = -i;
            let blocked = false;
            let newStart = 0;
            while (dx <= 0) {
                dx += 1;
                let mapX = startX + dx * xx + dy * xy;
                let mapY = startY + dx * yx + dy * yy;
                let slopeStart = (dx - 0.5) / (dy + 0.5);
                let slopeEnd = (dx + 0.5) / (dy - 0.5);
                if (slopeEnd > visSlopeStart) {
                    continue;
                }
                if (slopeStart < visSlopeEnd) {
                    break;
                }
                if ((dx * dx + dy * dy) < (radius * radius)) {
                    callback(mapX, mapY, i, 1);
                }
                if (!blocked) {
                    if (!this._lightPasses(mapX, mapY) && i < radius) {
                        blocked = true;
                        this._castVisibility(startX, startY, i + 1, visSlopeStart, slopeStart, radius, xx, xy, yx, yy, callback);
                        newStart = slopeEnd;
                    }
                }
                else {
                    if (!this._lightPasses(mapX, mapY)) {
                        newStart = slopeEnd;
                        continue;
                    }
                    blocked = false;
                    visSlopeStart = newStart;
                }
            }
            if (blocked) {
                break;
            }
        }
    }
}


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: RNG, Display, StringGenerator, EventQueue, Scheduler, FOV, Map, Noise, Path, Engine, Lighting, DEFAULT_WIDTH, DEFAULT_HEIGHT, DIRS, KEYS, Util, Color, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./lib/rng.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNG", function() { return _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display.js */ "./lib/display/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return _display_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _stringgenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringgenerator.js */ "./lib/stringgenerator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringGenerator", function() { return _stringgenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventqueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventqueue.js */ "./lib/eventqueue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventQueue", function() { return _eventqueue_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _scheduler_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheduler/index.js */ "./lib/scheduler/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _scheduler_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _fov_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fov/index.js */ "./lib/fov/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOV", function() { return _fov_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _map_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/index.js */ "./lib/map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _noise_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./noise/index.js */ "./lib/noise/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Noise", function() { return _noise_index_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _path_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./path/index.js */ "./lib/path/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _path_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine.js */ "./lib/engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return _engine_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _lighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lighting.js */ "./lib/lighting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lighting", function() { return _lighting_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants.js */ "./lib/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_WIDTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIRS", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["DIRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_11__["KEYS"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util.js */ "./lib/util.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color.js */ "./lib/color.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./text.js */ "./lib/text.js");













const Util = _util_js__WEBPACK_IMPORTED_MODULE_12__;

const Color = _color_js__WEBPACK_IMPORTED_MODULE_13__;

const Text = _text_js__WEBPACK_IMPORTED_MODULE_14__;


/***/ }),

/***/ "./lib/lighting.js":
/*!*************************!*\
  !*** ./lib/lighting.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lighting; });
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./lib/color.js");

;
;
;
;
class Lighting {
    constructor(reflectivityCallback, options = {}) {
        this._reflectivityCallback = reflectivityCallback;
        this._options = {};
        options = Object.assign({
            passes: 1,
            emissionThreshold: 100,
            range: 10
        }, options);
        this._lights = {};
        this._reflectivityCache = {};
        this._fovCache = {};
        this.setOptions(options);
    }
    setOptions(options) {
        Object.assign(this._options, options);
        if (options && options.range) {
            this.reset();
        }
        return this;
    }
    setFOV(fov) {
        this._fov = fov;
        this._fovCache = {};
        return this;
    }
    setLight(x, y, color) {
        let key = x + "," + y;
        if (color) {
            this._lights[key] = (typeof (color) == "string" ? _color_js__WEBPACK_IMPORTED_MODULE_0__["fromString"](color) : color);
        }
        else {
            delete this._lights[key];
        }
        return this;
    }
    clearLights() { this._lights = {}; }
    reset() {
        this._reflectivityCache = {};
        this._fovCache = {};
        return this;
    }
    compute(lightingCallback) {
        let doneCells = {};
        let emittingCells = {};
        let litCells = {};
        for (let key in this._lights) {
            let light = this._lights[key];
            emittingCells[key] = [0, 0, 0];
            _color_js__WEBPACK_IMPORTED_MODULE_0__["add_"](emittingCells[key], light);
        }
        for (let i = 0; i < this._options.passes; i++) {
            this._emitLight(emittingCells, litCells, doneCells);
            if (i + 1 == this._options.passes) {
                continue;
            }
            emittingCells = this._computeEmitters(litCells, doneCells);
        }
        for (let litKey in litCells) {
            let parts = litKey.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            lightingCallback(x, y, litCells[litKey]);
        }
        return this;
    }
    _emitLight(emittingCells, litCells, doneCells) {
        for (let key in emittingCells) {
            let parts = key.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            this._emitLightFromCell(x, y, emittingCells[key], litCells);
            doneCells[key] = 1;
        }
        return this;
    }
    _computeEmitters(litCells, doneCells) {
        let result = {};
        for (let key in litCells) {
            if (key in doneCells) {
                continue;
            }
            let color = litCells[key];
            let reflectivity;
            if (key in this._reflectivityCache) {
                reflectivity = this._reflectivityCache[key];
            }
            else {
                let parts = key.split(",");
                let x = parseInt(parts[0]);
                let y = parseInt(parts[1]);
                reflectivity = this._reflectivityCallback(x, y);
                this._reflectivityCache[key] = reflectivity;
            }
            if (reflectivity == 0) {
                continue;
            }
            let emission = [0, 0, 0];
            let intensity = 0;
            for (let i = 0; i < 3; i++) {
                let part = Math.round(color[i] * reflectivity);
                emission[i] = part;
                intensity += part;
            }
            if (intensity > this._options.emissionThreshold) {
                result[key] = emission;
            }
        }
        return result;
    }
    _emitLightFromCell(x, y, color, litCells) {
        let key = x + "," + y;
        let fov;
        if (key in this._fovCache) {
            fov = this._fovCache[key];
        }
        else {
            fov = this._updateFOV(x, y);
        }
        for (let fovKey in fov) {
            let formFactor = fov[fovKey];
            let result;
            if (fovKey in litCells) {
                result = litCells[fovKey];
            }
            else {
                result = [0, 0, 0];
                litCells[fovKey] = result;
            }
            for (let i = 0; i < 3; i++) {
                result[i] += Math.round(color[i] * formFactor);
            }
        }
        return this;
    }
    _updateFOV(x, y) {
        let key1 = x + "," + y;
        let cache = {};
        this._fovCache[key1] = cache;
        let range = this._options.range;
        function cb(x, y, r, vis) {
            let key2 = x + "," + y;
            let formFactor = vis * (1 - r / range);
            if (formFactor == 0) {
                return;
            }
            cache[key2] = formFactor;
        }
        ;
        this._fov.compute(x, y, range, cb.bind(this));
        return cache;
    }
}


/***/ }),

/***/ "./lib/map/arena.js":
/*!**************************!*\
  !*** ./lib/map/arena.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arena; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");

class Arena extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    create(callback) {
        let w = this._width - 1;
        let h = this._height - 1;
        for (let i = 0; i <= w; i++) {
            for (let j = 0; j <= h; j++) {
                let empty = (i && j && i < w && j < h);
                callback(i, j, empty ? 0 : 1);
            }
        }
        return this;
    }
}


/***/ }),

/***/ "./lib/map/cellular.js":
/*!*****************************!*\
  !*** ./lib/map/cellular.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cellular; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");



;
class Cellular extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options = {}) {
        super(width, height);
        this._options = {
            born: [5, 6, 7, 8],
            survive: [4, 5, 6, 7, 8],
            topology: 8
        };
        this.setOptions(options);
        this._dirs = _constants_js__WEBPACK_IMPORTED_MODULE_1__["DIRS"][this._options.topology];
        this._map = this._fillMap(0);
    }
    randomize(probability) {
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                this._map[i][j] = (_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniform() < probability ? 1 : 0);
            }
        }
        return this;
    }
    setOptions(options) { Object.assign(this._options, options); }
    set(x, y, value) { this._map[x][y] = value; }
    create(callback) {
        let newMap = this._fillMap(0);
        let born = this._options.born;
        let survive = this._options.survive;
        for (let j = 0; j < this._height; j++) {
            let widthStep = 1;
            let widthStart = 0;
            if (this._options.topology == 6) {
                widthStep = 2;
                widthStart = j % 2;
            }
            for (let i = widthStart; i < this._width; i += widthStep) {
                let cur = this._map[i][j];
                let ncount = this._getNeighbors(i, j);
                if (cur && survive.indexOf(ncount) != -1) {
                    newMap[i][j] = 1;
                }
                else if (!cur && born.indexOf(ncount) != -1) {
                    newMap[i][j] = 1;
                }
            }
        }
        this._map = newMap;
        callback && this._serviceCallback(callback);
    }
    _serviceCallback(callback) {
        for (let j = 0; j < this._height; j++) {
            let widthStep = 1;
            let widthStart = 0;
            if (this._options.topology == 6) {
                widthStep = 2;
                widthStart = j % 2;
            }
            for (let i = widthStart; i < this._width; i += widthStep) {
                callback(i, j, this._map[i][j]);
            }
        }
    }
    _getNeighbors(cx, cy) {
        let result = 0;
        for (let i = 0; i < this._dirs.length; i++) {
            let dir = this._dirs[i];
            let x = cx + dir[0];
            let y = cy + dir[1];
            if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
                continue;
            }
            result += (this._map[x][y] == 1 ? 1 : 0);
        }
        return result;
    }
    connect(callback, value, connectionCallback) {
        if (!value)
            value = 0;
        let allFreeSpace = [];
        let notConnected = {};
        let widthStep = 1;
        let widthStarts = [0, 0];
        if (this._options.topology == 6) {
            widthStep = 2;
            widthStarts = [0, 1];
        }
        for (let y = 0; y < this._height; y++) {
            for (let x = widthStarts[y % 2]; x < this._width; x += widthStep) {
                if (this._freeSpace(x, y, value)) {
                    let p = [x, y];
                    notConnected[this._pointKey(p)] = p;
                    allFreeSpace.push([x, y]);
                }
            }
        }
        let start = allFreeSpace[_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniformInt(0, allFreeSpace.length - 1)];
        let key = this._pointKey(start);
        let connected = {};
        connected[key] = start;
        delete notConnected[key];
        this._findConnected(connected, notConnected, [start], false, value);
        while (Object.keys(notConnected).length > 0) {
            let p = this._getFromTo(connected, notConnected);
            let from = p[0];
            let to = p[1];
            let local = {};
            local[this._pointKey(from)] = from;
            this._findConnected(local, notConnected, [from], true, value);
            let tunnelFn = (this._options.topology == 6 ? this._tunnelToConnected6 : this._tunnelToConnected);
            tunnelFn.call(this, to, from, connected, notConnected, value, connectionCallback);
            for (let k in local) {
                let pp = local[k];
                this._map[pp[0]][pp[1]] = value;
                connected[k] = pp;
                delete notConnected[k];
            }
        }
        callback && this._serviceCallback(callback);
    }
    _getFromTo(connected, notConnected) {
        let from = [0, 0], to = [0, 0], d;
        let connectedKeys = Object.keys(connected);
        let notConnectedKeys = Object.keys(notConnected);
        for (let i = 0; i < 5; i++) {
            if (connectedKeys.length < notConnectedKeys.length) {
                let keys = connectedKeys;
                to = connected[keys[_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniformInt(0, keys.length - 1)]];
                from = this._getClosest(to, notConnected);
            }
            else {
                let keys = notConnectedKeys;
                from = notConnected[keys[_rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getUniformInt(0, keys.length - 1)]];
                to = this._getClosest(from, connected);
            }
            d = (from[0] - to[0]) * (from[0] - to[0]) + (from[1] - to[1]) * (from[1] - to[1]);
            if (d < 64) {
                break;
            }
        }
        return [from, to];
    }
    _getClosest(point, space) {
        let minPoint = null;
        let minDist = null;
        for (let k in space) {
            let p = space[k];
            let d = (p[0] - point[0]) * (p[0] - point[0]) + (p[1] - point[1]) * (p[1] - point[1]);
            if (minDist == null || d < minDist) {
                minDist = d;
                minPoint = p;
            }
        }
        return minPoint;
    }
    _findConnected(connected, notConnected, stack, keepNotConnected, value) {
        while (stack.length > 0) {
            let p = stack.splice(0, 1)[0];
            let tests;
            if (this._options.topology == 6) {
                tests = [
                    [p[0] + 2, p[1]],
                    [p[0] + 1, p[1] - 1],
                    [p[0] - 1, p[1] - 1],
                    [p[0] - 2, p[1]],
                    [p[0] - 1, p[1] + 1],
                    [p[0] + 1, p[1] + 1],
                ];
            }
            else {
                tests = [
                    [p[0] + 1, p[1]],
                    [p[0] - 1, p[1]],
                    [p[0], p[1] + 1],
                    [p[0], p[1] - 1]
                ];
            }
            for (let i = 0; i < tests.length; i++) {
                let key = this._pointKey(tests[i]);
                if (connected[key] == null && this._freeSpace(tests[i][0], tests[i][1], value)) {
                    connected[key] = tests[i];
                    if (!keepNotConnected) {
                        delete notConnected[key];
                    }
                    stack.push(tests[i]);
                }
            }
        }
    }
    _tunnelToConnected(to, from, connected, notConnected, value, connectionCallback) {
        let a, b;
        if (from[0] < to[0]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        for (let xx = a[0]; xx <= b[0]; xx++) {
            this._map[xx][a[1]] = value;
            let p = [xx, a[1]];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback && a[0] < b[0]) {
            connectionCallback(a, [b[0], a[1]]);
        }
        let x = b[0];
        if (from[1] < to[1]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        for (let yy = a[1]; yy < b[1]; yy++) {
            this._map[x][yy] = value;
            let p = [x, yy];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback && a[1] < b[1]) {
            connectionCallback([b[0], a[1]], [b[0], b[1]]);
        }
    }
    _tunnelToConnected6(to, from, connected, notConnected, value, connectionCallback) {
        let a, b;
        if (from[0] < to[0]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        let xx = a[0];
        let yy = a[1];
        while (!(xx == b[0] && yy == b[1])) {
            let stepWidth = 2;
            if (yy < b[1]) {
                yy++;
                stepWidth = 1;
            }
            else if (yy > b[1]) {
                yy--;
                stepWidth = 1;
            }
            if (xx < b[0]) {
                xx += stepWidth;
            }
            else if (xx > b[0]) {
                xx -= stepWidth;
            }
            else if (b[1] % 2) {
                xx -= stepWidth;
            }
            else {
                xx += stepWidth;
            }
            this._map[xx][yy] = value;
            let p = [xx, yy];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback) {
            connectionCallback(from, to);
        }
    }
    _freeSpace(x, y, value) {
        return x >= 0 && x < this._width && y >= 0 && y < this._height && this._map[x][y] == value;
    }
    _pointKey(p) { return p[0] + "." + p[1]; }
}


/***/ }),

/***/ "./lib/map/digger.js":
/*!***************************!*\
  !*** ./lib/map/digger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Digger; });
/* harmony import */ var _dungeon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dungeon.js */ "./lib/map/dungeon.js");
/* harmony import */ var _features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.js */ "./lib/map/features.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");




const FEATURES = {
    "room": _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"],
    "corridor": _features_js__WEBPACK_IMPORTED_MODULE_1__["Corridor"]
};
class Digger extends _dungeon_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options = {}) {
        super(width, height);
        this._options = Object.assign({
            roomWidth: [3, 9],
            roomHeight: [3, 5],
            corridorLength: [3, 10],
            dugPercentage: 0.2,
            timeLimit: 1000
        }, options);
        this._features = {
            "room": 4,
            "corridor": 4
        };
        this._map = [];
        this._featureAttempts = 20;
        this._walls = {};
        this._dug = 0;
        this._digCallback = this._digCallback.bind(this);
        this._canBeDugCallback = this._canBeDugCallback.bind(this);
        this._isWallCallback = this._isWallCallback.bind(this);
        this._priorityWallCallback = this._priorityWallCallback.bind(this);
    }
    create(callback) {
        this._rooms = [];
        this._corridors = [];
        this._map = this._fillMap(1);
        this._walls = {};
        this._dug = 0;
        let area = (this._width - 2) * (this._height - 2);
        this._firstRoom();
        let t1 = Date.now();
        let priorityWalls;
        do {
            priorityWalls = 0;
            let t2 = Date.now();
            if (t2 - t1 > this._options.timeLimit) {
                break;
            }
            let wall = this._findWall();
            if (!wall) {
                break;
            }
            let parts = wall.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            let dir = this._getDiggingDirection(x, y);
            if (!dir) {
                continue;
            }
            let featureAttempts = 0;
            do {
                featureAttempts++;
                if (this._tryFeature(x, y, dir[0], dir[1])) {
                    this._removeSurroundingWalls(x, y);
                    this._removeSurroundingWalls(x - dir[0], y - dir[1]);
                    break;
                }
            } while (featureAttempts < this._featureAttempts);
            for (let id in this._walls) {
                if (this._walls[id] > 1) {
                    priorityWalls++;
                }
            }
        } while (this._dug / area < this._options.dugPercentage || priorityWalls);
        this._addDoors();
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this._map[i][j]);
                }
            }
        }
        this._walls = {};
        this._map = [];
        return this;
    }
    _digCallback(x, y, value) {
        if (value == 0 || value == 2) {
            this._map[x][y] = 0;
            this._dug++;
        }
        else {
            this._walls[x + "," + y] = 1;
        }
    }
    _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _priorityWallCallback(x, y) { this._walls[x + "," + y] = 2; }
    ;
    _firstRoom() {
        let cx = Math.floor(this._width / 2);
        let cy = Math.floor(this._height / 2);
        let room = _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"].createRandomCenter(cx, cy, this._options);
        this._rooms.push(room);
        room.create(this._digCallback);
    }
    _findWall() {
        let prio1 = [];
        let prio2 = [];
        for (let id in this._walls) {
            let prio = this._walls[id];
            if (prio == 2) {
                prio2.push(id);
            }
            else {
                prio1.push(id);
            }
        }
        let arr = (prio2.length ? prio2 : prio1);
        if (!arr.length) {
            return null;
        }
        let id = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(arr.sort());
        delete this._walls[id];
        return id;
    }
    _tryFeature(x, y, dx, dy) {
        let featureName = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getWeightedValue(this._features);
        let ctor = FEATURES[featureName];
        let feature = ctor.createRandomAt(x, y, dx, dy, this._options);
        if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
            return false;
        }
        feature.create(this._digCallback);
        if (feature instanceof _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"]) {
            this._rooms.push(feature);
        }
        if (feature instanceof _features_js__WEBPACK_IMPORTED_MODULE_1__["Corridor"]) {
            feature.createPriorityWalls(this._priorityWallCallback);
            this._corridors.push(feature);
        }
        return true;
    }
    _removeSurroundingWalls(cx, cy) {
        let deltas = _constants_js__WEBPACK_IMPORTED_MODULE_3__["DIRS"][4];
        for (let i = 0; i < deltas.length; i++) {
            let delta = deltas[i];
            let x = cx + delta[0];
            let y = cy + delta[1];
            delete this._walls[x + "," + y];
            x = cx + 2 * delta[0];
            y = cy + 2 * delta[1];
            delete this._walls[x + "," + y];
        }
    }
    _getDiggingDirection(cx, cy) {
        if (cx <= 0 || cy <= 0 || cx >= this._width - 1 || cy >= this._height - 1) {
            return null;
        }
        let result = null;
        let deltas = _constants_js__WEBPACK_IMPORTED_MODULE_3__["DIRS"][4];
        for (let i = 0; i < deltas.length; i++) {
            let delta = deltas[i];
            let x = cx + delta[0];
            let y = cy + delta[1];
            if (!this._map[x][y]) {
                if (result) {
                    return null;
                }
                result = delta;
            }
        }
        if (!result) {
            return null;
        }
        return [-result[0], -result[1]];
    }
    _addDoors() {
        let data = this._map;
        function isWallCallback(x, y) {
            return (data[x][y] == 1);
        }
        ;
        for (let i = 0; i < this._rooms.length; i++) {
            let room = this._rooms[i];
            room.clearDoors();
            room.addDoors(isWallCallback);
        }
    }
}


/***/ }),

/***/ "./lib/map/dividedmaze.js":
/*!********************************!*\
  !*** ./lib/map/dividedmaze.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DividedMaze; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");


class DividedMaze extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this._stack = [];
        this._map = [];
    }
    create(callback) {
        let w = this._width;
        let h = this._height;
        this._map = [];
        for (let i = 0; i < w; i++) {
            this._map.push([]);
            for (let j = 0; j < h; j++) {
                let border = (i == 0 || j == 0 || i + 1 == w || j + 1 == h);
                this._map[i].push(border ? 1 : 0);
            }
        }
        this._stack = [
            [1, 1, w - 2, h - 2]
        ];
        this._process();
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                callback(i, j, this._map[i][j]);
            }
        }
        this._map = [];
        return this;
    }
    _process() {
        while (this._stack.length) {
            let room = this._stack.shift();
            this._partitionRoom(room);
        }
    }
    _partitionRoom(room) {
        let availX = [];
        let availY = [];
        for (let i = room[0] + 1; i < room[2]; i++) {
            let top = this._map[i][room[1] - 1];
            let bottom = this._map[i][room[3] + 1];
            if (top && bottom && !(i % 2)) {
                availX.push(i);
            }
        }
        for (let j = room[1] + 1; j < room[3]; j++) {
            let left = this._map[room[0] - 1][j];
            let right = this._map[room[2] + 1][j];
            if (left && right && !(j % 2)) {
                availY.push(j);
            }
        }
        if (!availX.length || !availY.length) {
            return;
        }
        let x = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(availX);
        let y = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(availY);
        this._map[x][y] = 1;
        let walls = [];
        let w = [];
        walls.push(w);
        for (let i = room[0]; i < x; i++) {
            this._map[i][y] = 1;
            w.push([i, y]);
        }
        w = [];
        walls.push(w);
        for (let i = x + 1; i <= room[2]; i++) {
            this._map[i][y] = 1;
            w.push([i, y]);
        }
        w = [];
        walls.push(w);
        for (let j = room[1]; j < y; j++) {
            this._map[x][j] = 1;
            w.push([x, j]);
        }
        w = [];
        walls.push(w);
        for (let j = y + 1; j <= room[3]; j++) {
            this._map[x][j] = 1;
            w.push([x, j]);
        }
        let solid = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(walls);
        for (let i = 0; i < walls.length; i++) {
            let w = walls[i];
            if (w == solid) {
                continue;
            }
            let hole = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(w);
            this._map[hole[0]][hole[1]] = 0;
        }
        this._stack.push([room[0], room[1], x - 1, y - 1]);
        this._stack.push([x + 1, room[1], room[2], y - 1]);
        this._stack.push([room[0], y + 1, x - 1, room[3]]);
        this._stack.push([x + 1, y + 1, room[2], room[3]]);
    }
}


/***/ }),

/***/ "./lib/map/dungeon.js":
/*!****************************!*\
  !*** ./lib/map/dungeon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dungeon; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");

class Dungeon extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height) {
        super(width, height);
        this._rooms = [];
        this._corridors = [];
    }
    getRooms() { return this._rooms; }
    getCorridors() { return this._corridors; }
}


/***/ }),

/***/ "./lib/map/ellermaze.js":
/*!******************************!*\
  !*** ./lib/map/ellermaze.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EllerMaze; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");


function addToList(i, L, R) {
    R[L[i + 1]] = R[i];
    L[R[i]] = L[i + 1];
    R[i] = i + 1;
    L[i + 1] = i;
}
function removeFromList(i, L, R) {
    R[L[i]] = R[i];
    L[R[i]] = L[i];
    R[i] = i;
    L[i] = i;
}
class EllerMaze extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    create(callback) {
        let map = this._fillMap(1);
        let w = Math.ceil((this._width - 2) / 2);
        let rand = 9 / 24;
        let L = [];
        let R = [];
        for (let i = 0; i < w; i++) {
            L.push(i);
            R.push(i);
        }
        L.push(w - 1);
        let j;
        for (j = 1; j + 3 < this._height; j += 2) {
            for (let i = 0; i < w; i++) {
                let x = 2 * i + 1;
                let y = j;
                map[x][y] = 0;
                if (i != L[i + 1] && _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() > rand) {
                    addToList(i, L, R);
                    map[x + 1][y] = 0;
                }
                if (i != L[i] && _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() > rand) {
                    removeFromList(i, L, R);
                }
                else {
                    map[x][y + 1] = 0;
                }
            }
        }
        for (let i = 0; i < w; i++) {
            let x = 2 * i + 1;
            let y = j;
            map[x][y] = 0;
            if (i != L[i + 1] && (i == L[i] || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() > rand)) {
                addToList(i, L, R);
                map[x + 1][y] = 0;
            }
            removeFromList(i, L, R);
        }
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                callback(i, j, map[i][j]);
            }
        }
        return this;
    }
}


/***/ }),

/***/ "./lib/map/features.js":
/*!*****************************!*\
  !*** ./lib/map/features.js ***!
  \*****************************/
/*! exports provided: Room, Corridor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corridor", function() { return Corridor; });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");

;
class Feature {
}
class Room extends Feature {
    constructor(x1, y1, x2, y2, doorX, doorY) {
        super();
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._doors = {};
        if (doorX !== undefined && doorY !== undefined) {
            this.addDoor(doorX, doorY);
        }
    }
    ;
    static createRandomAt(x, y, dx, dy, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        if (dx == 1) {
            let y2 = y - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * height);
            return new this(x + 1, y2, x + width, y2 + height - 1, x, y);
        }
        if (dx == -1) {
            let y2 = y - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * height);
            return new this(x - width, y2, x - 1, y2 + height - 1, x, y);
        }
        if (dy == 1) {
            let x2 = x - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * width);
            return new this(x2, y + 1, x2 + width - 1, y + height, x, y);
        }
        if (dy == -1) {
            let x2 = x - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * width);
            return new this(x2, y - height, x2 + width - 1, y - 1, x, y);
        }
        throw new Error("dx or dy must be 1 or -1");
    }
    static createRandomCenter(cx, cy, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        let x1 = cx - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * width);
        let y1 = cy - Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * height);
        let x2 = x1 + width - 1;
        let y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
    }
    static createRandom(availWidth, availHeight, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        let left = availWidth - width - 1;
        let top = availHeight - height - 1;
        let x1 = 1 + Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * left);
        let y1 = 1 + Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniform() * top);
        let x2 = x1 + width - 1;
        let y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
    }
    addDoor(x, y) {
        this._doors[x + "," + y] = 1;
        return this;
    }
    getDoors(cb) {
        for (let key in this._doors) {
            let parts = key.split(",");
            cb(parseInt(parts[0]), parseInt(parts[1]));
        }
        return this;
    }
    clearDoors() {
        this._doors = {};
        return this;
    }
    addDoors(isWallCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x != left && x != right && y != top && y != bottom) {
                    continue;
                }
                if (isWallCallback(x, y)) {
                    continue;
                }
                this.addDoor(x, y);
            }
        }
        return this;
    }
    debug() {
        console.log("room", this._x1, this._y1, this._x2, this._y2);
    }
    isValid(isWallCallback, canBeDugCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x == left || x == right || y == top || y == bottom) {
                    if (!isWallCallback(x, y)) {
                        return false;
                    }
                }
                else {
                    if (!canBeDugCallback(x, y)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    create(digCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        let value = 0;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x + "," + y in this._doors) {
                    value = 2;
                }
                else if (x == left || x == right || y == top || y == bottom) {
                    value = 1;
                }
                else {
                    value = 0;
                }
                digCallback(x, y, value);
            }
        }
    }
    getCenter() {
        return [Math.round((this._x1 + this._x2) / 2), Math.round((this._y1 + this._y2) / 2)];
    }
    getLeft() { return this._x1; }
    getRight() { return this._x2; }
    getTop() { return this._y1; }
    getBottom() { return this._y2; }
}
class Corridor extends Feature {
    constructor(startX, startY, endX, endY) {
        super();
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._endsWithAWall = true;
    }
    static createRandomAt(x, y, dx, dy, options) {
        let min = options.corridorLength[0];
        let max = options.corridorLength[1];
        let length = _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getUniformInt(min, max);
        return new this(x, y, x + dx * length, y + dy * length);
    }
    debug() {
        console.log("corridor", this._startX, this._startY, this._endX, this._endY);
    }
    isValid(isWallCallback, canBeDugCallback) {
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        let length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        let nx = dy;
        let ny = -dx;
        let ok = true;
        for (let i = 0; i < length; i++) {
            let x = sx + i * dx;
            let y = sy + i * dy;
            if (!canBeDugCallback(x, y)) {
                ok = false;
            }
            if (!isWallCallback(x + nx, y + ny)) {
                ok = false;
            }
            if (!isWallCallback(x - nx, y - ny)) {
                ok = false;
            }
            if (!ok) {
                length = i;
                this._endX = x - dx;
                this._endY = y - dy;
                break;
            }
        }
        if (length == 0) {
            return false;
        }
        if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) {
            return false;
        }
        let firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
        let secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
        this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);
        if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) {
            return false;
        }
        return true;
    }
    create(digCallback) {
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        let length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        for (let i = 0; i < length; i++) {
            let x = sx + i * dx;
            let y = sy + i * dy;
            digCallback(x, y, 0);
        }
        return true;
    }
    createPriorityWalls(priorityWallCallback) {
        if (!this._endsWithAWall) {
            return;
        }
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        let nx = dy;
        let ny = -dx;
        priorityWallCallback(this._endX + dx, this._endY + dy);
        priorityWallCallback(this._endX + nx, this._endY + ny);
        priorityWallCallback(this._endX - nx, this._endY - ny);
    }
}


/***/ }),

/***/ "./lib/map/iceymaze.js":
/*!*****************************!*\
  !*** ./lib/map/iceymaze.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IceyMaze; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");


class IceyMaze extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, regularity = 0) {
        super(width, height);
        this._regularity = regularity;
        this._map = [];
    }
    create(callback) {
        let width = this._width;
        let height = this._height;
        let map = this._fillMap(1);
        width -= (width % 2 ? 1 : 2);
        height -= (height % 2 ? 1 : 2);
        let cx = 0;
        let cy = 0;
        let nx = 0;
        let ny = 0;
        let done = 0;
        let blocked = false;
        let dirs = [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ];
        do {
            cx = 1 + 2 * Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * (width - 1) / 2);
            cy = 1 + 2 * Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * (height - 1) / 2);
            if (!done) {
                map[cx][cy] = 0;
            }
            if (!map[cx][cy]) {
                this._randomize(dirs);
                do {
                    if (Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * (this._regularity + 1)) == 0) {
                        this._randomize(dirs);
                    }
                    blocked = true;
                    for (let i = 0; i < 4; i++) {
                        nx = cx + dirs[i][0] * 2;
                        ny = cy + dirs[i][1] * 2;
                        if (this._isFree(map, nx, ny, width, height)) {
                            map[nx][ny] = 0;
                            map[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
                            cx = nx;
                            cy = ny;
                            blocked = false;
                            done++;
                            break;
                        }
                    }
                } while (!blocked);
            }
        } while (done + 1 < width * height / 4);
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                callback(i, j, map[i][j]);
            }
        }
        this._map = [];
        return this;
    }
    _randomize(dirs) {
        for (let i = 0; i < 4; i++) {
            dirs[i][0] = 0;
            dirs[i][1] = 0;
        }
        switch (Math.floor(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform() * 4)) {
            case 0:
                dirs[0][0] = -1;
                dirs[1][0] = 1;
                dirs[2][1] = -1;
                dirs[3][1] = 1;
                break;
            case 1:
                dirs[3][0] = -1;
                dirs[2][0] = 1;
                dirs[1][1] = -1;
                dirs[0][1] = 1;
                break;
            case 2:
                dirs[2][0] = -1;
                dirs[3][0] = 1;
                dirs[0][1] = -1;
                dirs[1][1] = 1;
                break;
            case 3:
                dirs[1][0] = -1;
                dirs[0][0] = 1;
                dirs[3][1] = -1;
                dirs[2][1] = 1;
                break;
        }
    }
    _isFree(map, x, y, width, height) {
        if (x < 1 || y < 1 || x >= width || y >= height) {
            return false;
        }
        return map[x][y];
    }
}


/***/ }),

/***/ "./lib/map/index.js":
/*!**************************!*\
  !*** ./lib/map/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arena_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arena.js */ "./lib/map/arena.js");
/* harmony import */ var _uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniform.js */ "./lib/map/uniform.js");
/* harmony import */ var _cellular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellular.js */ "./lib/map/cellular.js");
/* harmony import */ var _digger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digger.js */ "./lib/map/digger.js");
/* harmony import */ var _ellermaze_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ellermaze.js */ "./lib/map/ellermaze.js");
/* harmony import */ var _dividedmaze_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dividedmaze.js */ "./lib/map/dividedmaze.js");
/* harmony import */ var _iceymaze_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iceymaze.js */ "./lib/map/iceymaze.js");
/* harmony import */ var _rogue_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rogue.js */ "./lib/map/rogue.js");








/* harmony default export */ __webpack_exports__["default"] = ({ Arena: _arena_js__WEBPACK_IMPORTED_MODULE_0__["default"], Uniform: _uniform_js__WEBPACK_IMPORTED_MODULE_1__["default"], Cellular: _cellular_js__WEBPACK_IMPORTED_MODULE_2__["default"], Digger: _digger_js__WEBPACK_IMPORTED_MODULE_3__["default"], EllerMaze: _ellermaze_js__WEBPACK_IMPORTED_MODULE_4__["default"], DividedMaze: _dividedmaze_js__WEBPACK_IMPORTED_MODULE_5__["default"], IceyMaze: _iceymaze_js__WEBPACK_IMPORTED_MODULE_6__["default"], Rogue: _rogue_js__WEBPACK_IMPORTED_MODULE_7__["default"] });


/***/ }),

/***/ "./lib/map/map.js":
/*!************************!*\
  !*** ./lib/map/map.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");

;
class Map {
    constructor(width = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_WIDTH"], height = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_HEIGHT"]) {
        this._width = width;
        this._height = height;
    }
    ;
    _fillMap(value) {
        let map = [];
        for (let i = 0; i < this._width; i++) {
            map.push([]);
            for (let j = 0; j < this._height; j++) {
                map[i].push(value);
            }
        }
        return map;
    }
}


/***/ }),

/***/ "./lib/map/rogue.js":
/*!**************************!*\
  !*** ./lib/map/rogue.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rogue; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./lib/map/map.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");



class Rogue extends _map_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options) {
        super(width, height);
        this.map = [];
        this.rooms = [];
        this.connectedCells = [];
        options = Object.assign({
            cellWidth: 3,
            cellHeight: 3
        }, options);
        if (!options.hasOwnProperty("roomWidth")) {
            options["roomWidth"] = this._calculateRoomSize(this._width, options["cellWidth"]);
        }
        if (!options.hasOwnProperty("roomHeight")) {
            options["roomHeight"] = this._calculateRoomSize(this._height, options["cellHeight"]);
        }
        this._options = options;
    }
    create(callback) {
        this.map = this._fillMap(1);
        this.rooms = [];
        this.connectedCells = [];
        this._initRooms();
        this._connectRooms();
        this._connectUnconnectedRooms();
        this._createRandomRoomConnections();
        this._createRooms();
        this._createCorridors();
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this.map[i][j]);
                }
            }
        }
        return this;
    }
    _calculateRoomSize(size, cell) {
        let max = Math.floor((size / cell) * 0.8);
        let min = Math.floor((size / cell) * 0.25);
        if (min < 2) {
            min = 2;
        }
        if (max < 2) {
            max = 2;
        }
        return [min, max];
    }
    _initRooms() {
        for (let i = 0; i < this._options.cellWidth; i++) {
            this.rooms.push([]);
            for (let j = 0; j < this._options.cellHeight; j++) {
                this.rooms[i].push({ "x": 0, "y": 0, "width": 0, "height": 0, "connections": [], "cellx": i, "celly": j });
            }
        }
    }
    _connectRooms() {
        let cgx = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, this._options.cellWidth - 1);
        let cgy = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, this._options.cellHeight - 1);
        let idx;
        let ncgx;
        let ncgy;
        let found = false;
        let room;
        let otherRoom;
        let dirToCheck;
        do {
            dirToCheck = [0, 2, 4, 6];
            dirToCheck = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(dirToCheck);
            do {
                found = false;
                idx = dirToCheck.pop();
                ncgx = cgx + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][idx][0];
                ncgy = cgy + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][idx][1];
                if (ncgx < 0 || ncgx >= this._options.cellWidth) {
                    continue;
                }
                if (ncgy < 0 || ncgy >= this._options.cellHeight) {
                    continue;
                }
                room = this.rooms[cgx][cgy];
                if (room["connections"].length > 0) {
                    if (room["connections"][0][0] == ncgx && room["connections"][0][1] == ncgy) {
                        break;
                    }
                }
                otherRoom = this.rooms[ncgx][ncgy];
                if (otherRoom["connections"].length == 0) {
                    otherRoom["connections"].push([cgx, cgy]);
                    this.connectedCells.push([ncgx, ncgy]);
                    cgx = ncgx;
                    cgy = ncgy;
                    found = true;
                }
            } while (dirToCheck.length > 0 && found == false);
        } while (dirToCheck.length > 0);
    }
    _connectUnconnectedRooms() {
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        this.connectedCells = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(this.connectedCells);
        let room;
        let otherRoom;
        let validRoom;
        for (let i = 0; i < this._options.cellWidth; i++) {
            for (let j = 0; j < this._options.cellHeight; j++) {
                room = this.rooms[i][j];
                if (room["connections"].length == 0) {
                    let directions = [0, 2, 4, 6];
                    directions = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(directions);
                    validRoom = false;
                    do {
                        let dirIdx = directions.pop();
                        let newI = i + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][dirIdx][0];
                        let newJ = j + _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][dirIdx][1];
                        if (newI < 0 || newI >= cw || newJ < 0 || newJ >= ch) {
                            continue;
                        }
                        otherRoom = this.rooms[newI][newJ];
                        validRoom = true;
                        if (otherRoom["connections"].length == 0) {
                            break;
                        }
                        for (let k = 0; k < otherRoom["connections"].length; k++) {
                            if (otherRoom["connections"][k][0] == i && otherRoom["connections"][k][1] == j) {
                                validRoom = false;
                                break;
                            }
                        }
                        if (validRoom) {
                            break;
                        }
                    } while (directions.length);
                    if (validRoom) {
                        room["connections"].push([otherRoom["cellx"], otherRoom["celly"]]);
                    }
                    else {
                        console.log("-- Unable to connect room.");
                    }
                }
            }
        }
    }
    _createRandomRoomConnections() {
    }
    _createRooms() {
        let w = this._width;
        let h = this._height;
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        let cwp = Math.floor(this._width / cw);
        let chp = Math.floor(this._height / ch);
        let roomw;
        let roomh;
        let roomWidth = this._options["roomWidth"];
        let roomHeight = this._options["roomHeight"];
        let sx;
        let sy;
        let otherRoom;
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                sx = cwp * i;
                sy = chp * j;
                if (sx == 0) {
                    sx = 1;
                }
                if (sy == 0) {
                    sy = 1;
                }
                roomw = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(roomWidth[0], roomWidth[1]);
                roomh = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(roomHeight[0], roomHeight[1]);
                if (j > 0) {
                    otherRoom = this.rooms[i][j - 1];
                    while (sy - (otherRoom["y"] + otherRoom["height"]) < 3) {
                        sy++;
                    }
                }
                if (i > 0) {
                    otherRoom = this.rooms[i - 1][j];
                    while (sx - (otherRoom["x"] + otherRoom["width"]) < 3) {
                        sx++;
                    }
                }
                let sxOffset = Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, cwp - roomw) / 2);
                let syOffset = Math.round(_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(0, chp - roomh) / 2);
                while (sx + sxOffset + roomw >= w) {
                    if (sxOffset) {
                        sxOffset--;
                    }
                    else {
                        roomw--;
                    }
                }
                while (sy + syOffset + roomh >= h) {
                    if (syOffset) {
                        syOffset--;
                    }
                    else {
                        roomh--;
                    }
                }
                sx = sx + sxOffset;
                sy = sy + syOffset;
                this.rooms[i][j]["x"] = sx;
                this.rooms[i][j]["y"] = sy;
                this.rooms[i][j]["width"] = roomw;
                this.rooms[i][j]["height"] = roomh;
                for (let ii = sx; ii < sx + roomw; ii++) {
                    for (let jj = sy; jj < sy + roomh; jj++) {
                        this.map[ii][jj] = 0;
                    }
                }
            }
        }
    }
    _getWallPosition(aRoom, aDirection) {
        let rx;
        let ry;
        let door;
        if (aDirection == 1 || aDirection == 3) {
            rx = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(aRoom["x"] + 1, aRoom["x"] + aRoom["width"] - 2);
            if (aDirection == 1) {
                ry = aRoom["y"] - 2;
                door = ry + 1;
            }
            else {
                ry = aRoom["y"] + aRoom["height"] + 1;
                door = ry - 1;
            }
            this.map[rx][door] = 0;
        }
        else {
            ry = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniformInt(aRoom["y"] + 1, aRoom["y"] + aRoom["height"] - 2);
            if (aDirection == 2) {
                rx = aRoom["x"] + aRoom["width"] + 1;
                door = rx - 1;
            }
            else {
                rx = aRoom["x"] - 2;
                door = rx + 1;
            }
            this.map[door][ry] = 0;
        }
        return [rx, ry];
    }
    _drawCorridor(startPosition, endPosition) {
        let xOffset = endPosition[0] - startPosition[0];
        let yOffset = endPosition[1] - startPosition[1];
        let xpos = startPosition[0];
        let ypos = startPosition[1];
        let tempDist;
        let xDir;
        let yDir;
        let move;
        let moves = [];
        let xAbs = Math.abs(xOffset);
        let yAbs = Math.abs(yOffset);
        let percent = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUniform();
        let firstHalf = percent;
        let secondHalf = 1 - percent;
        xDir = xOffset > 0 ? 2 : 6;
        yDir = yOffset > 0 ? 4 : 0;
        if (xAbs < yAbs) {
            tempDist = Math.ceil(yAbs * firstHalf);
            moves.push([yDir, tempDist]);
            moves.push([xDir, xAbs]);
            tempDist = Math.floor(yAbs * secondHalf);
            moves.push([yDir, tempDist]);
        }
        else {
            tempDist = Math.ceil(xAbs * firstHalf);
            moves.push([xDir, tempDist]);
            moves.push([yDir, yAbs]);
            tempDist = Math.floor(xAbs * secondHalf);
            moves.push([xDir, tempDist]);
        }
        this.map[xpos][ypos] = 0;
        while (moves.length > 0) {
            move = moves.pop();
            while (move[1] > 0) {
                xpos += _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][move[0]][0];
                ypos += _constants_js__WEBPACK_IMPORTED_MODULE_2__["DIRS"][8][move[0]][1];
                this.map[xpos][ypos] = 0;
                move[1] = move[1] - 1;
            }
        }
    }
    _createCorridors() {
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        let room;
        let connection;
        let otherRoom;
        let wall;
        let otherWall;
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                room = this.rooms[i][j];
                for (let k = 0; k < room["connections"].length; k++) {
                    connection = room["connections"][k];
                    otherRoom = this.rooms[connection[0]][connection[1]];
                    if (otherRoom["cellx"] > room["cellx"]) {
                        wall = 2;
                        otherWall = 4;
                    }
                    else if (otherRoom["cellx"] < room["cellx"]) {
                        wall = 4;
                        otherWall = 2;
                    }
                    else if (otherRoom["celly"] > room["celly"]) {
                        wall = 3;
                        otherWall = 1;
                    }
                    else {
                        wall = 1;
                        otherWall = 3;
                    }
                    this._drawCorridor(this._getWallPosition(room, wall), this._getWallPosition(otherRoom, otherWall));
                }
            }
        }
    }
}


/***/ }),

/***/ "./lib/map/uniform.js":
/*!****************************!*\
  !*** ./lib/map/uniform.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uniform; });
/* harmony import */ var _dungeon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dungeon.js */ "./lib/map/dungeon.js");
/* harmony import */ var _features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.js */ "./lib/map/features.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");



;
class Uniform extends _dungeon_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, options) {
        super(width, height);
        this._options = {
            roomWidth: [3, 9],
            roomHeight: [3, 5],
            roomDugPercentage: 0.1,
            timeLimit: 1000
        };
        Object.assign(this._options, options);
        this._map = [];
        this._dug = 0;
        this._roomAttempts = 20;
        this._corridorAttempts = 20;
        this._connected = [];
        this._unconnected = [];
        this._digCallback = this._digCallback.bind(this);
        this._canBeDugCallback = this._canBeDugCallback.bind(this);
        this._isWallCallback = this._isWallCallback.bind(this);
    }
    create(callback) {
        let t1 = Date.now();
        while (1) {
            let t2 = Date.now();
            if (t2 - t1 > this._options.timeLimit) {
                return null;
            }
            this._map = this._fillMap(1);
            this._dug = 0;
            this._rooms = [];
            this._unconnected = [];
            this._generateRooms();
            if (this._rooms.length < 2) {
                continue;
            }
            if (this._generateCorridors()) {
                break;
            }
        }
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this._map[i][j]);
                }
            }
        }
        return this;
    }
    _generateRooms() {
        let w = this._width - 2;
        let h = this._height - 2;
        let room;
        do {
            room = this._generateRoom();
            if (this._dug / (w * h) > this._options.roomDugPercentage) {
                break;
            }
        } while (room);
    }
    _generateRoom() {
        let count = 0;
        while (count < this._roomAttempts) {
            count++;
            let room = _features_js__WEBPACK_IMPORTED_MODULE_1__["Room"].createRandom(this._width, this._height, this._options);
            if (!room.isValid(this._isWallCallback, this._canBeDugCallback)) {
                continue;
            }
            room.create(this._digCallback);
            this._rooms.push(room);
            return room;
        }
        return null;
    }
    _generateCorridors() {
        let cnt = 0;
        while (cnt < this._corridorAttempts) {
            cnt++;
            this._corridors = [];
            this._map = this._fillMap(1);
            for (let i = 0; i < this._rooms.length; i++) {
                let room = this._rooms[i];
                room.clearDoors();
                room.create(this._digCallback);
            }
            this._unconnected = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].shuffle(this._rooms.slice());
            this._connected = [];
            if (this._unconnected.length) {
                this._connected.push(this._unconnected.pop());
            }
            while (1) {
                let connected = _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(this._connected);
                if (!connected) {
                    break;
                }
                let room1 = this._closestRoom(this._unconnected, connected);
                if (!room1) {
                    break;
                }
                let room2 = this._closestRoom(this._connected, room1);
                if (!room2) {
                    break;
                }
                let ok = this._connectRooms(room1, room2);
                if (!ok) {
                    break;
                }
                if (!this._unconnected.length) {
                    return true;
                }
            }
        }
        return false;
    }
    ;
    _closestRoom(rooms, room) {
        let dist = Infinity;
        let center = room.getCenter();
        let result = null;
        for (let i = 0; i < rooms.length; i++) {
            let r = rooms[i];
            let c = r.getCenter();
            let dx = c[0] - center[0];
            let dy = c[1] - center[1];
            let d = dx * dx + dy * dy;
            if (d < dist) {
                dist = d;
                result = r;
            }
        }
        return result;
    }
    _connectRooms(room1, room2) {
        let center1 = room1.getCenter();
        let center2 = room2.getCenter();
        let diffX = center2[0] - center1[0];
        let diffY = center2[1] - center1[1];
        let start;
        let end;
        let dirIndex1, dirIndex2, min, max, index;
        if (Math.abs(diffX) < Math.abs(diffY)) {
            dirIndex1 = (diffY > 0 ? 2 : 0);
            dirIndex2 = (dirIndex1 + 2) % 4;
            min = room2.getLeft();
            max = room2.getRight();
            index = 0;
        }
        else {
            dirIndex1 = (diffX > 0 ? 1 : 3);
            dirIndex2 = (dirIndex1 + 2) % 4;
            min = room2.getTop();
            max = room2.getBottom();
            index = 1;
        }
        start = this._placeInWall(room1, dirIndex1);
        if (!start) {
            return false;
        }
        if (start[index] >= min && start[index] <= max) {
            end = start.slice();
            let value = 0;
            switch (dirIndex2) {
                case 0:
                    value = room2.getTop() - 1;
                    break;
                case 1:
                    value = room2.getRight() + 1;
                    break;
                case 2:
                    value = room2.getBottom() + 1;
                    break;
                case 3:
                    value = room2.getLeft() - 1;
                    break;
            }
            end[(index + 1) % 2] = value;
            this._digLine([start, end]);
        }
        else if (start[index] < min - 1 || start[index] > max + 1) {
            let diff = start[index] - center2[index];
            let rotation = 0;
            switch (dirIndex2) {
                case 0:
                case 1:
                    rotation = (diff < 0 ? 3 : 1);
                    break;
                case 2:
                case 3:
                    rotation = (diff < 0 ? 1 : 3);
                    break;
            }
            dirIndex2 = (dirIndex2 + rotation) % 4;
            end = this._placeInWall(room2, dirIndex2);
            if (!end) {
                return false;
            }
            let mid = [0, 0];
            mid[index] = start[index];
            let index2 = (index + 1) % 2;
            mid[index2] = end[index2];
            this._digLine([start, mid, end]);
        }
        else {
            let index2 = (index + 1) % 2;
            end = this._placeInWall(room2, dirIndex2);
            if (!end) {
                return false;
            }
            let mid = Math.round((end[index2] + start[index2]) / 2);
            let mid1 = [0, 0];
            let mid2 = [0, 0];
            mid1[index] = start[index];
            mid1[index2] = mid;
            mid2[index] = end[index];
            mid2[index2] = mid;
            this._digLine([start, mid1, mid2, end]);
        }
        room1.addDoor(start[0], start[1]);
        room2.addDoor(end[0], end[1]);
        index = this._unconnected.indexOf(room1);
        if (index != -1) {
            this._unconnected.splice(index, 1);
            this._connected.push(room1);
        }
        index = this._unconnected.indexOf(room2);
        if (index != -1) {
            this._unconnected.splice(index, 1);
            this._connected.push(room2);
        }
        return true;
    }
    _placeInWall(room, dirIndex) {
        let start = [0, 0];
        let dir = [0, 0];
        let length = 0;
        switch (dirIndex) {
            case 0:
                dir = [1, 0];
                start = [room.getLeft(), room.getTop() - 1];
                length = room.getRight() - room.getLeft() + 1;
                break;
            case 1:
                dir = [0, 1];
                start = [room.getRight() + 1, room.getTop()];
                length = room.getBottom() - room.getTop() + 1;
                break;
            case 2:
                dir = [1, 0];
                start = [room.getLeft(), room.getBottom() + 1];
                length = room.getRight() - room.getLeft() + 1;
                break;
            case 3:
                dir = [0, 1];
                start = [room.getLeft() - 1, room.getTop()];
                length = room.getBottom() - room.getTop() + 1;
                break;
        }
        let avail = [];
        let lastBadIndex = -2;
        for (let i = 0; i < length; i++) {
            let x = start[0] + i * dir[0];
            let y = start[1] + i * dir[1];
            avail.push(null);
            let isWall = (this._map[x][y] == 1);
            if (isWall) {
                if (lastBadIndex != i - 1) {
                    avail[i] = [x, y];
                }
            }
            else {
                lastBadIndex = i;
                if (i) {
                    avail[i - 1] = null;
                }
            }
        }
        for (let i = avail.length - 1; i >= 0; i--) {
            if (!avail[i]) {
                avail.splice(i, 1);
            }
        }
        return (avail.length ? _rng_js__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(avail) : null);
    }
    _digLine(points) {
        for (let i = 1; i < points.length; i++) {
            let start = points[i - 1];
            let end = points[i];
            let corridor = new _features_js__WEBPACK_IMPORTED_MODULE_1__["Corridor"](start[0], start[1], end[0], end[1]);
            corridor.create(this._digCallback);
            this._corridors.push(corridor);
        }
    }
    _digCallback(x, y, value) {
        this._map[x][y] = value;
        if (value == 0) {
            this._dug++;
        }
    }
    _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
}


/***/ }),

/***/ "./lib/noise/index.js":
/*!****************************!*\
  !*** ./lib/noise/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simplex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simplex.js */ "./lib/noise/simplex.js");

/* harmony default export */ __webpack_exports__["default"] = ({ Simplex: _simplex_js__WEBPACK_IMPORTED_MODULE_0__["default"] });


/***/ }),

/***/ "./lib/noise/noise.js":
/*!****************************!*\
  !*** ./lib/noise/noise.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Noise; });
class Noise {
}


/***/ }),

/***/ "./lib/noise/simplex.js":
/*!******************************!*\
  !*** ./lib/noise/simplex.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simplex; });
/* harmony import */ var _noise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noise.js */ "./lib/noise/noise.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rng.js */ "./lib/rng.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ "./lib/util.js");



const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
class Simplex extends _noise_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(gradients = 256) {
        super();
        this._gradients = [
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1]
        ];
        let permutations = [];
        for (let i = 0; i < gradients; i++) {
            permutations.push(i);
        }
        permutations = _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"].shuffle(permutations);
        this._perms = [];
        this._indexes = [];
        for (let i = 0; i < 2 * gradients; i++) {
            this._perms.push(permutations[i % gradients]);
            this._indexes.push(this._perms[i] % this._gradients.length);
        }
    }
    get(xin, yin) {
        let perms = this._perms;
        let indexes = this._indexes;
        let count = perms.length / 2;
        let n0 = 0, n1 = 0, n2 = 0, gi;
        let s = (xin + yin) * F2;
        let i = Math.floor(xin + s);
        let j = Math.floor(yin + s);
        let t = (i + j) * G2;
        let X0 = i - t;
        let Y0 = j - t;
        let x0 = xin - X0;
        let y0 = yin - Y0;
        let i1, j1;
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        }
        else {
            i1 = 0;
            j1 = 1;
        }
        let x1 = x0 - i1 + G2;
        let y1 = y0 - j1 + G2;
        let x2 = x0 - 1 + 2 * G2;
        let y2 = y0 - 1 + 2 * G2;
        let ii = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["mod"])(i, count);
        let jj = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["mod"])(j, count);
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            t0 *= t0;
            gi = indexes[ii + perms[jj]];
            let grad = this._gradients[gi];
            n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            t1 *= t1;
            gi = indexes[ii + i1 + perms[jj + j1]];
            let grad = this._gradients[gi];
            n1 = t1 * t1 * (grad[0] * x1 + grad[1] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            t2 *= t2;
            gi = indexes[ii + 1 + perms[jj + 1]];
            let grad = this._gradients[gi];
            n2 = t2 * t2 * (grad[0] * x2 + grad[1] * y2);
        }
        return 70 * (n0 + n1 + n2);
    }
}


/***/ }),

/***/ "./lib/path/astar.js":
/*!***************************!*\
  !*** ./lib/path/astar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AStar; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./lib/path/path.js");

class AStar extends _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(toX, toY, passableCallback, options = {}) {
        super(toX, toY, passableCallback, options);
        this._todo = [];
        this._done = {};
    }
    compute(fromX, fromY, callback) {
        this._todo = [];
        this._done = {};
        this._fromX = fromX;
        this._fromY = fromY;
        this._add(this._toX, this._toY, null);
        while (this._todo.length) {
            let item = this._todo.shift();
            let id = item.x + "," + item.y;
            if (id in this._done) {
                continue;
            }
            this._done[id] = item;
            if (item.x == fromX && item.y == fromY) {
                break;
            }
            let neighbors = this._getNeighbors(item.x, item.y);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let x = neighbor[0];
                let y = neighbor[1];
                let id = x + "," + y;
                if (id in this._done) {
                    continue;
                }
                this._add(x, y, item);
            }
        }
        let item = this._done[fromX + "," + fromY];
        if (!item) {
            return;
        }
        while (item) {
            callback(item.x, item.y);
            item = item.prev;
        }
    }
    _add(x, y, prev) {
        let h = this._distance(x, y);
        let obj = {
            x: x,
            y: y,
            prev: prev,
            g: (prev ? prev.g + 1 : 0),
            h: h
        };
        let f = obj.g + obj.h;
        for (let i = 0; i < this._todo.length; i++) {
            let item = this._todo[i];
            let itemF = item.g + item.h;
            if (f < itemF || (f == itemF && h < item.h)) {
                this._todo.splice(i, 0, obj);
                return;
            }
        }
        this._todo.push(obj);
    }
    _distance(x, y) {
        switch (this._options.topology) {
            case 4:
                return (Math.abs(x - this._fromX) + Math.abs(y - this._fromY));
                break;
            case 6:
                let dx = Math.abs(x - this._fromX);
                let dy = Math.abs(y - this._fromY);
                return dy + Math.max(0, (dx - dy) / 2);
                break;
            case 8:
                return Math.max(Math.abs(x - this._fromX), Math.abs(y - this._fromY));
                break;
        }
    }
}


/***/ }),

/***/ "./lib/path/dijkstra.js":
/*!******************************!*\
  !*** ./lib/path/dijkstra.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dijkstra; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./lib/path/path.js");

class Dijkstra extends _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(toX, toY, passableCallback, options) {
        super(toX, toY, passableCallback, options);
        this._computed = {};
        this._todo = [];
        this._add(toX, toY, null);
    }
    compute(fromX, fromY, callback) {
        let key = fromX + "," + fromY;
        if (!(key in this._computed)) {
            this._compute(fromX, fromY);
        }
        if (!(key in this._computed)) {
            return;
        }
        let item = this._computed[key];
        while (item) {
            callback(item.x, item.y);
            item = item.prev;
        }
    }
    _compute(fromX, fromY) {
        while (this._todo.length) {
            let item = this._todo.shift();
            if (item.x == fromX && item.y == fromY) {
                return;
            }
            let neighbors = this._getNeighbors(item.x, item.y);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let x = neighbor[0];
                let y = neighbor[1];
                let id = x + "," + y;
                if (id in this._computed) {
                    continue;
                }
                this._add(x, y, item);
            }
        }
    }
    _add(x, y, prev) {
        let obj = {
            x: x,
            y: y,
            prev: prev
        };
        this._computed[x + "," + y] = obj;
        this._todo.push(obj);
    }
}


/***/ }),

/***/ "./lib/path/index.js":
/*!***************************!*\
  !*** ./lib/path/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dijkstra_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dijkstra.js */ "./lib/path/dijkstra.js");
/* harmony import */ var _astar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./astar.js */ "./lib/path/astar.js");


/* harmony default export */ __webpack_exports__["default"] = ({ Dijkstra: _dijkstra_js__WEBPACK_IMPORTED_MODULE_0__["default"], AStar: _astar_js__WEBPACK_IMPORTED_MODULE_1__["default"] });


/***/ }),

/***/ "./lib/path/path.js":
/*!**************************!*\
  !*** ./lib/path/path.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./lib/constants.js");

class Path {
    constructor(toX, toY, passableCallback, options = {}) {
        this._toX = toX;
        this._toY = toY;
        this._passableCallback = passableCallback;
        this._options = Object.assign({
            topology: 8
        }, options);
        this._dirs = _constants_js__WEBPACK_IMPORTED_MODULE_0__["DIRS"][this._options.topology];
        if (this._options.topology == 8) {
            this._dirs = [
                this._dirs[0],
                this._dirs[2],
                this._dirs[4],
                this._dirs[6],
                this._dirs[1],
                this._dirs[3],
                this._dirs[5],
                this._dirs[7]
            ];
        }
    }
    _getNeighbors(cx, cy) {
        let result = [];
        for (let i = 0; i < this._dirs.length; i++) {
            let dir = this._dirs[i];
            let x = cx + dir[0];
            let y = cy + dir[1];
            if (!this._passableCallback(x, y)) {
                continue;
            }
            result.push([x, y]);
        }
        return result;
    }
}


/***/ }),

/***/ "./lib/rng.js":
/*!********************!*\
  !*** ./lib/rng.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FRAC = 2.3283064365386963e-10;
class RNG {
    constructor() {
        this._seed = 0;
        this._s0 = 0;
        this._s1 = 0;
        this._s2 = 0;
        this._c = 0;
    }
    getSeed() { return this._seed; }
    setSeed(seed) {
        seed = (seed < 1 ? 1 / seed : seed);
        this._seed = seed;
        this._s0 = (seed >>> 0) * FRAC;
        seed = (seed * 69069 + 1) >>> 0;
        this._s1 = seed * FRAC;
        seed = (seed * 69069 + 1) >>> 0;
        this._s2 = seed * FRAC;
        this._c = 1;
        return this;
    }
    getUniform() {
        let t = 2091639 * this._s0 + this._c * FRAC;
        this._s0 = this._s1;
        this._s1 = this._s2;
        this._c = t | 0;
        this._s2 = t - this._c;
        return this._s2;
    }
    getUniformInt(lowerBound, upperBound) {
        let max = Math.max(lowerBound, upperBound);
        let min = Math.min(lowerBound, upperBound);
        return Math.floor(this.getUniform() * (max - min + 1)) + min;
    }
    getNormal(mean = 0, stddev = 1) {
        let u, v, r;
        do {
            u = 2 * this.getUniform() - 1;
            v = 2 * this.getUniform() - 1;
            r = u * u + v * v;
        } while (r > 1 || r == 0);
        let gauss = u * Math.sqrt(-2 * Math.log(r) / r);
        return mean + gauss * stddev;
    }
    getPercentage() {
        return 1 + Math.floor(this.getUniform() * 100);
    }
    getItem(array) {
        if (!array.length) {
            return null;
        }
        return array[Math.floor(this.getUniform() * array.length)];
    }
    shuffle(array) {
        let result = [];
        let clone = array.slice();
        while (clone.length) {
            let index = clone.indexOf(this.getItem(clone));
            result.push(clone.splice(index, 1)[0]);
        }
        return result;
    }
    getWeightedValue(data) {
        let total = 0;
        for (let id in data) {
            total += data[id];
        }
        let random = this.getUniform() * total;
        let id, part = 0;
        for (id in data) {
            part += data[id];
            if (random < part) {
                return id;
            }
        }
        return id;
    }
    getState() { return [this._s0, this._s1, this._s2, this._c]; }
    setState(state) {
        this._s0 = state[0];
        this._s1 = state[1];
        this._s2 = state[2];
        this._c = state[3];
        return this;
    }
    clone() {
        let clone = new RNG();
        return clone.setState(this.getState());
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new RNG().setSeed(Date.now()));


/***/ }),

/***/ "./lib/scheduler/action.js":
/*!*********************************!*\
  !*** ./lib/scheduler/action.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./lib/scheduler/scheduler.js");

class Action extends _scheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this._defaultDuration = 1;
        this._duration = this._defaultDuration;
    }
    add(item, repeat, time) {
        this._queue.add(item, time || this._defaultDuration);
        return super.add(item, repeat);
    }
    clear() {
        this._duration = this._defaultDuration;
        return super.clear();
    }
    remove(item) {
        if (item == this._current) {
            this._duration = this._defaultDuration;
        }
        return super.remove(item);
    }
    next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, this._duration || this._defaultDuration);
            this._duration = this._defaultDuration;
        }
        return super.next();
    }
    setDuration(time) {
        if (this._current) {
            this._duration = time;
        }
        return this;
    }
}


/***/ }),

/***/ "./lib/scheduler/index.js":
/*!********************************!*\
  !*** ./lib/scheduler/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple.js */ "./lib/scheduler/simple.js");
/* harmony import */ var _speed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed.js */ "./lib/scheduler/speed.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action.js */ "./lib/scheduler/action.js");



/* harmony default export */ __webpack_exports__["default"] = ({ Simple: _simple_js__WEBPACK_IMPORTED_MODULE_0__["default"], Speed: _speed_js__WEBPACK_IMPORTED_MODULE_1__["default"], Action: _action_js__WEBPACK_IMPORTED_MODULE_2__["default"] });


/***/ }),

/***/ "./lib/scheduler/scheduler.js":
/*!************************************!*\
  !*** ./lib/scheduler/scheduler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scheduler; });
/* harmony import */ var _eventqueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventqueue.js */ "./lib/eventqueue.js");

class Scheduler {
    constructor() {
        this._queue = new _eventqueue_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._repeat = [];
        this._current = null;
    }
    getTime() { return this._queue.getTime(); }
    add(item, repeat) {
        if (repeat) {
            this._repeat.push(item);
        }
        return this;
    }
    getTimeOf(item) {
        return this._queue.getEventTime(item);
    }
    clear() {
        this._queue.clear();
        this._repeat = [];
        this._current = null;
        return this;
    }
    remove(item) {
        let result = this._queue.remove(item);
        let index = this._repeat.indexOf(item);
        if (index != -1) {
            this._repeat.splice(index, 1);
        }
        if (this._current == item) {
            this._current = null;
        }
        return result;
    }
    next() {
        this._current = this._queue.get();
        return this._current;
    }
}


/***/ }),

/***/ "./lib/scheduler/simple.js":
/*!*********************************!*\
  !*** ./lib/scheduler/simple.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simple; });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./lib/scheduler/scheduler.js");

class Simple extends _scheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    add(item, repeat) {
        this._queue.add(item, 0);
        return super.add(item, repeat);
    }
    next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, 0);
        }
        return super.next();
    }
}


/***/ }),

/***/ "./lib/scheduler/speed.js":
/*!********************************!*\
  !*** ./lib/scheduler/speed.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Speed; });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./lib/scheduler/scheduler.js");

class Speed extends _scheduler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    add(item, repeat, time) {
        this._queue.add(item, time !== undefined ? time : 1 / item.getSpeed());
        return super.add(item, repeat);
    }
    next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, 1 / this._current.getSpeed());
        }
        return super.next();
    }
}


/***/ }),

/***/ "./lib/stringgenerator.js":
/*!********************************!*\
  !*** ./lib/stringgenerator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringGenerator; });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./lib/rng.js");

class StringGenerator {
    constructor(options) {
        this._options = {
            words: false,
            order: 3,
            prior: 0.001
        };
        Object.assign(this._options, options);
        this._boundary = String.fromCharCode(0);
        this._suffix = this._boundary;
        this._prefix = [];
        for (let i = 0; i < this._options.order; i++) {
            this._prefix.push(this._boundary);
        }
        this._priorValues = {};
        this._priorValues[this._boundary] = this._options.prior;
        this._data = {};
    }
    clear() {
        this._data = {};
        this._priorValues = {};
    }
    generate() {
        let result = [this._sample(this._prefix)];
        while (result[result.length - 1] != this._boundary) {
            result.push(this._sample(result));
        }
        return this._join(result.slice(0, -1));
    }
    observe(string) {
        let tokens = this._split(string);
        for (let i = 0; i < tokens.length; i++) {
            this._priorValues[tokens[i]] = this._options.prior;
        }
        tokens = this._prefix.concat(tokens).concat(this._suffix);
        for (let i = this._options.order; i < tokens.length; i++) {
            let context = tokens.slice(i - this._options.order, i);
            let event = tokens[i];
            for (let j = 0; j < context.length; j++) {
                let subcontext = context.slice(j);
                this._observeEvent(subcontext, event);
            }
        }
    }
    getStats() {
        let parts = [];
        let priorCount = Object.keys(this._priorValues).length;
        priorCount--;
        parts.push("distinct samples: " + priorCount);
        let dataCount = Object.keys(this._data).length;
        let eventCount = 0;
        for (let p in this._data) {
            eventCount += Object.keys(this._data[p]).length;
        }
        parts.push("dictionary size (contexts): " + dataCount);
        parts.push("dictionary size (events): " + eventCount);
        return parts.join(", ");
    }
    _split(str) {
        return str.split(this._options.words ? /\s+/ : "");
    }
    _join(arr) {
        return arr.join(this._options.words ? " " : "");
    }
    _observeEvent(context, event) {
        let key = this._join(context);
        if (!(key in this._data)) {
            this._data[key] = {};
        }
        let data = this._data[key];
        if (!(event in data)) {
            data[event] = 0;
        }
        data[event]++;
    }
    _sample(context) {
        context = this._backoff(context);
        let key = this._join(context);
        let data = this._data[key];
        let available = {};
        if (this._options.prior) {
            for (let event in this._priorValues) {
                available[event] = this._priorValues[event];
            }
            for (let event in data) {
                available[event] += data[event];
            }
        }
        else {
            available = data;
        }
        return _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeightedValue(available);
    }
    _backoff(context) {
        if (context.length > this._options.order) {
            context = context.slice(-this._options.order);
        }
        else if (context.length < this._options.order) {
            context = this._prefix.slice(0, this._options.order - context.length).concat(context);
        }
        while (!(this._join(context) in this._data) && context.length > 0) {
            context = context.slice(1);
        }
        return context;
    }
}


/***/ }),

/***/ "./lib/text.js":
/*!*********************!*\
  !*** ./lib/text.js ***!
  \*********************/
/*! exports provided: TYPE_TEXT, TYPE_NEWLINE, TYPE_FG, TYPE_BG, measure, tokenize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TEXT", function() { return TYPE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_NEWLINE", function() { return TYPE_NEWLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_FG", function() { return TYPE_FG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_BG", function() { return TYPE_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
const RE_COLORS = /%([bc]){([^}]*)}/g;
const TYPE_TEXT = 0;
const TYPE_NEWLINE = 1;
const TYPE_FG = 2;
const TYPE_BG = 3;
function measure(str, maxWidth) {
    let result = { width: 0, height: 1 };
    let tokens = tokenize(str, maxWidth);
    let lineWidth = 0;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TYPE_TEXT:
                lineWidth += token.value.length;
                break;
            case TYPE_NEWLINE:
                result.height++;
                result.width = Math.max(result.width, lineWidth);
                lineWidth = 0;
                break;
        }
    }
    result.width = Math.max(result.width, lineWidth);
    return result;
}
function tokenize(str, maxWidth) {
    let result = [];
    let offset = 0;
    str.replace(RE_COLORS, function (match, type, name, index) {
        let part = str.substring(offset, index);
        if (part.length) {
            result.push({
                type: TYPE_TEXT,
                value: part
            });
        }
        result.push({
            type: (type == "c" ? TYPE_FG : TYPE_BG),
            value: name.trim()
        });
        offset = index + match.length;
        return "";
    });
    let part = str.substring(offset);
    if (part.length) {
        result.push({
            type: TYPE_TEXT,
            value: part
        });
    }
    return breakLines(result, maxWidth);
}
function breakLines(tokens, maxWidth) {
    if (!maxWidth) {
        maxWidth = Infinity;
    }
    let i = 0;
    let lineLength = 0;
    let lastTokenWithSpace = -1;
    while (i < tokens.length) {
        let token = tokens[i];
        if (token.type == TYPE_NEWLINE) {
            lineLength = 0;
            lastTokenWithSpace = -1;
        }
        if (token.type != TYPE_TEXT) {
            i++;
            continue;
        }
        while (lineLength == 0 && token.value.charAt(0) == " ") {
            token.value = token.value.substring(1);
        }
        let index = token.value.indexOf("\n");
        if (index != -1) {
            token.value = breakInsideToken(tokens, i, index, true);
            let arr = token.value.split("");
            while (arr.length && arr[arr.length - 1] == " ") {
                arr.pop();
            }
            token.value = arr.join("");
        }
        if (!token.value.length) {
            tokens.splice(i, 1);
            continue;
        }
        if (lineLength + token.value.length > maxWidth) {
            let index = -1;
            while (1) {
                let nextIndex = token.value.indexOf(" ", index + 1);
                if (nextIndex == -1) {
                    break;
                }
                if (lineLength + nextIndex > maxWidth) {
                    break;
                }
                index = nextIndex;
            }
            if (index != -1) {
                token.value = breakInsideToken(tokens, i, index, true);
            }
            else if (lastTokenWithSpace != -1) {
                let token = tokens[lastTokenWithSpace];
                let breakIndex = token.value.lastIndexOf(" ");
                token.value = breakInsideToken(tokens, lastTokenWithSpace, breakIndex, true);
                i = lastTokenWithSpace;
            }
            else {
                token.value = breakInsideToken(tokens, i, maxWidth - lineLength, false);
            }
        }
        else {
            lineLength += token.value.length;
            if (token.value.indexOf(" ") != -1) {
                lastTokenWithSpace = i;
            }
        }
        i++;
    }
    tokens.push({ type: TYPE_NEWLINE });
    let lastTextToken = null;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TYPE_TEXT:
                lastTextToken = token;
                break;
            case TYPE_NEWLINE:
                if (lastTextToken) {
                    let arr = lastTextToken.value.split("");
                    while (arr.length && arr[arr.length - 1] == " ") {
                        arr.pop();
                    }
                    lastTextToken.value = arr.join("");
                }
                lastTextToken = null;
                break;
        }
    }
    tokens.pop();
    return tokens;
}
function breakInsideToken(tokens, tokenIndex, breakIndex, removeBreakChar) {
    let newBreakToken = {
        type: TYPE_NEWLINE
    };
    let newTextToken = {
        type: TYPE_TEXT,
        value: tokens[tokenIndex].value.substring(breakIndex + (removeBreakChar ? 1 : 0))
    };
    tokens.splice(tokenIndex + 1, 0, newBreakToken, newTextToken);
    return tokens[tokenIndex].value.substring(0, breakIndex);
}


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: mod, clamp, capitalize, format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
function mod(x, n) {
    return (x % n + n) % n;
}
function clamp(val, min = 0, max = 1) {
    if (val < min)
        return min;
    if (val > max)
        return max;
    return val;
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}
function format(template, ...args) {
    let map = format.map;
    let replacer = function (match, group1, group2, index) {
        if (template.charAt(index - 1) == "%") {
            return match.substring(1);
        }
        if (!args.length) {
            return match;
        }
        let obj = args[0];
        let group = group1 || group2;
        let parts = group.split(",");
        let name = parts.shift() || "";
        let method = map[name.toLowerCase()];
        if (!method) {
            return match;
        }
        obj = args.shift();
        let replaced = obj[method].apply(obj, parts);
        let first = name.charAt(0);
        if (first != first.toLowerCase()) {
            replaced = capitalize(replaced);
        }
        return replaced;
    };
    return template.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, replacer);
}
format.map = {
    "s": "toString"
};


/***/ }),

/***/ "./logo/logo.ts":
/*!**********************!*\
  !*** ./logo/logo.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Logo() {
    let i = ["%c{black}.%c{}.  . `  .: . :. : .  . :.  .  . . .     . .    '    '' .  .  . ..  ",
        "%c{black}.%c{}.  :` . :   .  .'.' '....xxxxx...,'. '   ' .     ..",
        "%c{black}.%c{} ` . : . .' :  . ..XXXXXXXXXXXXXXXXXXXXx.    `     . ",
        ".    .  . . .   ..XXXXXXXXWWWWWWWWWWWWWWWWXX.  .     .     ",
        "%c{black}.%c{}' : . : .  ...XXXXXWWW'  W88N88@888888WWWWWXX.   .   .       . .",
        ". ' .   :...XXXXXXWWW'  M88N88GGGGGG88888M 'WMBX.          .   ..  :",
        "%c{black}.%c{}:  ..XXXXXXXXWWW'     M88888WWRWWW W8oo88M   WWMX.     .    :    .",
        "%c{black}.%c{} XXXXXXXXXXXXWW'       WN8888WWWW   WW8@@@8M    BMBRX.         .  : :",
        ".XXXXXXXX=MMWW':  .      W8N888WWWW ,WW88888W      XRBRXX.  .       .",
        "%c{black}.%c{}.'XXXXXMM::::. .        W8@889WWWWWM8@8N8W    . . :RRXx.    .",
        "%c{black}.%c{} ``.''  MMM::.:.  .      W888N89999888@8W   . . ::::'RXV    .  :",
        ".      ..'''MMMm::.  .      WW888N88888WW  .  . mmMMMMMRXx",
        "%c{black}.%c{}.'.        ''MMmm .  .       WWWWWWW   . :. :,miMM'''  : ''`    .",
        ".             .   ''MMMMmm . .  .  .   ._,mMMMM'''  :  ' .  :",
        "%c{black}.%c{}    .                  ''MMMMMMMMMMMMM''' .  : . '   .        .",
        "%c{black}.%c{}  .           .     .    .                      .         .",
        ".                                   .          .         ."];
    return i;
}
exports.Logo = Logo;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/components/damageBlock.ts":
/*!***************************************!*\
  !*** ./src/components/damageBlock.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../helper/deathFunction */ "./src/helper/deathFunction.ts");
class DamageBlock {
    constructor(multi, timeout = 6) {
        this.expire = false;
        this.multiplier = multi;
        this.timeout = timeout;
    }
    startCountDown() {
        var counter = this.timeout;
        var interval = setInterval(() => {
            counter--;
            if (counter == 2) {
                let newColor = this.owner.glyph.foreground.map(element => {
                    element = element * 4 > 250 ? 250 : element * 4;
                    return element;
                });
                this.owner.glyph.foreground = [250, newColor[1], newColor[2]]; //[216, 112, 147] //
            }
            if (counter == 0) {
                clearInterval(interval);
                let targets = this.owner._map.getEntitiesAt(this.owner.x, this.owner.x2, this.owner.y, this.owner.y2);
                if (targets.length > 0) {
                    this.owner.skill(targets);
                }
                deathFunction_1.deathFunction(this.owner);
            }
        }, 100);
    }
}
exports.DamageBlock = DamageBlock;


/***/ }),

/***/ "./src/components/equipment.ts":
/*!*************************************!*\
  !*** ./src/components/equipment.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Equipment {
    constructor(type) {
        this.expire = false;
        this.prefix = '';
        this.type = type;
    }
    strike() {
    }
    defend(amount) {
        return amount;
    }
}
exports.Equipment = Equipment;


/***/ }),

/***/ "./src/components/fighter.ts":
/*!***********************************!*\
  !*** ./src/components/fighter.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../helper/deathFunction */ "./src/helper/deathFunction.ts");
class Fighter {
    constructor(hp, def, atk, xp) {
        this.hp = hp;
        this.base_max_hp = hp;
        this.base_defense = def;
        this.base_power = atk;
        this.xp = xp;
        this.status = 'normal';
        this.current_exp = 0;
        this.nextRank = 10;
        this.unspentPoints = 0;
        this.rank = 1;
    }
    power() {
        let bonus = 0;
        if (this.owner != undefined) {
            if (this.owner.equipment != undefined)
                bonus += this.owner.equipment.power_bonus;
            if (this.owner.subequipment != undefined)
                bonus += this.owner.subequipment.power_bonus;
        }
        let totalBase = (this.base_power + bonus) < 0 ? 0 : this.base_power + bonus;
        return totalBase;
    }
    skill_power() {
        let bonus = 1;
        if (this.owner.ai != undefined)
            return this.power() * this.owner.ai.skill_bonus;
        if (this.owner.equipment != undefined)
            bonus += this.owner.equipment.skill_bonus;
        if (this.owner.subequipment != undefined)
            bonus += this.owner.equipment.skill_bonus;
        let basePower = this.power() < 1 ? 1 : this.power();
        return basePower * bonus;
    }
    defense() {
        let bonus = 0;
        if (this.owner != undefined) {
            if (this.owner.equipment != undefined)
                bonus += this.owner.equipment.defense_bonus;
            if (this.owner.subequipment != undefined)
                bonus += this.owner.equipment.defense_bonus;
        }
        return this.base_defense + bonus;
    }
    max_hp() {
        let bonus = 0;
        if (this.owner != undefined) {
            if (this.owner.equipment != undefined)
                bonus += this.owner.equipment.hp_bonus;
            if (this.owner.subequipment != undefined)
                bonus += this.owner.subequipment.hp_bonus;
        }
        return this.base_max_hp + bonus;
    }
    takeDamage(amount) {
        if (this.owner.player == true && this.owner.subequipment != undefined) {
            amount = this.owner.subequipment.defend(amount);
        }
        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
            let msg = {
                message: "%c{0}" + this.owner.name + "%c{1} morreu",
                type: 'death',
                color0: this.owner.glyph.foreground,
                color1: [255, 255, 255],
                color2: [255, 255, 255]
            };
            this.owner._map.messageLog.addMessage(msg); //"%c{"+ this.owner.glyph.foreground +"}" + this.owner.name + "%c{} morreu")
            deathFunction_1.deathFunction(this.owner);
            return true;
        }
    }
    heal(amount) {
        this.hp += amount;
        if (this.hp > this.max_hp()) {
            this.hp = this.max_hp();
        }
    }
    attack(target) {
        let result = {
            message: '',
            type: 'fight',
            color0: target.glyph.foreground,
            color1: [255, 255, 255],
            color2: [255, 255, 255]
        };
        let damage = this.power() * (1 - (target.fighter.defense() / (10 + target.fighter.defense())));
        damage = +damage.toFixed(2);
        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            let death = target.fighter.takeDamage(damage);
            if (death)
                this.getExp(target.fighter.xp);
            this.owner._map.messageLog.newMessage(this.owner, 'fight', target, undefined, damage.toString());
            //result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} com "+ damage + " de dano! (" +target.fighter.hp.toFixed(2) +")";
        }
        else {
            this.owner._map.messageLog.newMessage(this.owner, 'fightZeroDamage', target, undefined, damage.toString());
            //result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} mas não causou dano!";
        }
        return result;
    }
    equipment_skill(target, dmgBlock) {
        let result = {
            message: '',
            type: 'skill',
            color0: target.glyph.foreground,
            color1: [255, 255, 255],
            color2: [255, 255, 255]
        };
        let damage = this.skill_power() * dmgBlock.damage.multiplier * (1 - (target.fighter.defense() / (10 + target.fighter.defense())));
        damage = +damage.toFixed(2);
        if (damage > 0) {
            // results.append({'message': Message('{0} ataca {1} e mandou {2} de dano.'.format(
            //     this.owner.name.capitalize(), target.name, str(round(damage))), libtcod.white)})
            // results.extend(target.fighter.take_damage(damage))
            let death = target.fighter.takeDamage(damage);
            if (death)
                this.getExp(target.fighter.xp);
            this.owner._map.messageLog.newMessage(this.owner, 'skill', target, dmgBlock, damage.toString());
            //result.message = this.owner.name + " usou uma " + dmgBlock.name + " em um %c{0}" + target.name + "%c{1} com "+ damage + " de dano! (" +target.fighter.hp.toFixed(2) +")";
        }
        else {
            this.owner._map.messageLog.newMessage(this.owner, 'skillZeroDamage', target, dmgBlock, damage.toString());
            //result.message = this.owner.name + " bateu em um %c{0}" + target.name + "%c{1} mas não causou dano!";
        }
        return result;
    }
    getExp(amount) {
        this.current_exp += amount;
        while (this.current_exp >= this.nextRank) {
            this.rank += 1;
            this.nextRank += (this.nextRank + 10);
            this.unspentPoints += 1;
        }
    }
}
exports.Fighter = Fighter;


/***/ }),

/***/ "./src/components/skilllist.ts":
/*!*************************************!*\
  !*** ./src/components/skilllist.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const createDamageBlock_1 = __webpack_require__(/*! ../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
function poison_cloud(owner, target, damageMultiplier) {
    let nameAtk = 'spore cloud';
    createDamageBlock_1.createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x + 1, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x - 1, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x, target.y + 1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x, target.y - 1, nameAtk, damageMultiplier, "ꙮ");
}
exports.poison_cloud = poison_cloud;
function poison_shield(owner, target, damageMultiplier) {
    let nameAtk = 'spore shield';
    createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 1, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 1, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 1, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 1, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 1, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y, nameAtk, damageMultiplier);
    createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 1, nameAtk, damageMultiplier);
}
exports.poison_shield = poison_shield;
function punch(owner, target, damageMultiplier) {
    let nameAtk = 'smite';
    if (owner.face == 'n') {
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 1, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 2, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 3, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 4, nameAtk, damageMultiplier);
    }
    if (owner.face == 's') {
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 1, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 2, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 3, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 4, nameAtk, damageMultiplier);
    }
    if (owner.face == 'w') {
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x - 3, owner.y, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y, nameAtk, damageMultiplier);
    }
    if (owner.face == 'e') {
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x + 3, owner.y, nameAtk, damageMultiplier);
        createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y, nameAtk, damageMultiplier);
    }
}
exports.punch = punch;
function smash(owner, target, damageMultiplier) {
    let nameAtk = 'smash';
    if (owner.face == 'n') {
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 1, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 2, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 3, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 4, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 4, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 4, nameAtk, damageMultiplier, '✶');
    }
    if (owner.face == 's') {
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 1, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 2, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 3, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 4, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 4, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 4, nameAtk, damageMultiplier, '✶');
    }
    if (owner.face == 'w') {
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 3, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y + 1, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y - 1, nameAtk, damageMultiplier, '✶');
    }
    if (owner.face == 'e') {
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 3, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y + 1, nameAtk, damageMultiplier, '✶');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y - 1, nameAtk, damageMultiplier, '✶');
    }
}
exports.smash = smash;
function windBlow(owner, target, damageMultiplier) {
    let nameAtk = 'wind blow';
    createDamageBlock_1.createDamageBlock(owner, target.x, target.y, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x + 1, target.y + 1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x - 1, target.y - 1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x - 1, target.y + 1, nameAtk, damageMultiplier, "ꙮ");
    createDamageBlock_1.createDamageBlock(owner, target.x + 1, target.y - 1, nameAtk, damageMultiplier, "ꙮ");
}
exports.windBlow = windBlow;
function snipe(owner, target, damageMultiplier) {
    let nameAtk = 'shot';
    let dx = target.x - owner.x;
    let dy = target.y - owner.y;
    if (Math.abs(dx) < Math.abs(dy)) {
        if (dy > 0) {
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 2, nameAtk, damageMultiplier, "↓", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 3, nameAtk, damageMultiplier, "↓", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 4, nameAtk, damageMultiplier, "↓", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 5, nameAtk, damageMultiplier, "↓", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 6, nameAtk, damageMultiplier, "↓", 10);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 7, nameAtk, damageMultiplier, "↓", 11);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 8, nameAtk, damageMultiplier, "↓", 12);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 9, nameAtk, damageMultiplier, "↓", 13);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 10, nameAtk, damageMultiplier, "↓", 14);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 11, nameAtk, damageMultiplier, "↓", 15);
        }
        else {
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 2, nameAtk, damageMultiplier, "↑", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 3, nameAtk, damageMultiplier, "↑", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 4, nameAtk, damageMultiplier, "↑", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 5, nameAtk, damageMultiplier, "↑", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 6, nameAtk, damageMultiplier, "↑", 10);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 7, nameAtk, damageMultiplier, "↑", 11);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 8, nameAtk, damageMultiplier, "↑", 12);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 9, nameAtk, damageMultiplier, "↑", 13);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 10, nameAtk, damageMultiplier, "↑", 14);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 11, nameAtk, damageMultiplier, "↑", 15);
        }
    }
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
            createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y, nameAtk, damageMultiplier, "→", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 3, owner.y, nameAtk, damageMultiplier, "→", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y, nameAtk, damageMultiplier, "→", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 5, owner.y, nameAtk, damageMultiplier, "→", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 6, owner.y, nameAtk, damageMultiplier, "→", 10);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 7, owner.y, nameAtk, damageMultiplier, "→", 11);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 8, owner.y, nameAtk, damageMultiplier, "→", 12);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 9, owner.y, nameAtk, damageMultiplier, "→", 13);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 10, owner.y, nameAtk, damageMultiplier, "→", 14);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 11, owner.y, nameAtk, damageMultiplier, "→", 15);
        }
        else {
            createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y, nameAtk, damageMultiplier, "←", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 3, owner.y, nameAtk, damageMultiplier, "←", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y, nameAtk, damageMultiplier, "←", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 5, owner.y, nameAtk, damageMultiplier, "←", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 6, owner.y, nameAtk, damageMultiplier, "←", 10);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 7, owner.y, nameAtk, damageMultiplier, "←", 11);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 8, owner.y, nameAtk, damageMultiplier, "←", 12);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 9, owner.y, nameAtk, damageMultiplier, "←", 13);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 10, owner.y, nameAtk, damageMultiplier, "←", 14);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 11, owner.y, nameAtk, damageMultiplier, "←", 15);
        }
    }
}
exports.snipe = snipe;
function flamestrike(owner, target, damageMultiplier) {
    let nameAtk = 'flamestrike';
    if (owner.face == 'n') {
        createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y - 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 1, nameAtk, damageMultiplier, '⽕');
    }
    if (owner.face == 's') {
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y + 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y + 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 1, nameAtk, damageMultiplier, '⽕');
    }
    if (owner.face == 'w') {
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 1, nameAtk, damageMultiplier, '⽕');
    }
    if (owner.face == 'e') {
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 2, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 1, nameAtk, damageMultiplier, '⽕');
        createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 1, nameAtk, damageMultiplier, '⽕');
    }
}
exports.flamestrike = flamestrike;
function firebreath(owner, target, damageMultiplier) {
    let nameAtk = 'firebreath';
    let dx = target.x - owner.x;
    let dy = target.y - owner.y;
    if (Math.abs(dx) < Math.abs(dy)) {
        if (dy > 0) {
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 1, nameAtk, damageMultiplier, "⮇", 5);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 2, nameAtk, damageMultiplier, "⮇", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 2, nameAtk, damageMultiplier, "⮇", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 2, nameAtk, damageMultiplier, "⮇", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 3, nameAtk, damageMultiplier, "⮇", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 3, nameAtk, damageMultiplier, "⮇", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 3, nameAtk, damageMultiplier, "⮇", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y + 4, nameAtk, damageMultiplier, "⮇", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y + 4, nameAtk, damageMultiplier, "⮇", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y + 4, nameAtk, damageMultiplier, "⮇", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y + 4, nameAtk, damageMultiplier, "⮇", 9);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y + 4, nameAtk, damageMultiplier, "⮇", 9);
        }
        else {
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 1, nameAtk, damageMultiplier, "⮅", 5);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 2, nameAtk, damageMultiplier, "⮅", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 2, nameAtk, damageMultiplier, "⮅", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 2, nameAtk, damageMultiplier, "⮅", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 3, nameAtk, damageMultiplier, "⮅", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 3, nameAtk, damageMultiplier, "⮅", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 3, nameAtk, damageMultiplier, "⮅", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y - 4, nameAtk, damageMultiplier, "⮅", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y - 4, nameAtk, damageMultiplier, "⮅", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x, owner.y - 4, nameAtk, damageMultiplier, "⮅", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y - 4, nameAtk, damageMultiplier, "⮅", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y - 4, nameAtk, damageMultiplier, "⮅", 8);
        }
    }
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
            createDamageBlock_1.createDamageBlock(owner, owner.x + 1, owner.y, nameAtk, damageMultiplier, "⮆", 5);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y + 1, nameAtk, damageMultiplier, "⮆", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y, nameAtk, damageMultiplier, "⮆", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 2, owner.y - 1, nameAtk, damageMultiplier, "⮆", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 3, owner.y + 1, nameAtk, damageMultiplier, "⮆", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 3, owner.y, nameAtk, damageMultiplier, "⮆", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 3, owner.y - 1, nameAtk, damageMultiplier, "⮆", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y + 2, nameAtk, damageMultiplier, "⮆", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y + 1, nameAtk, damageMultiplier, "⮆", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y, nameAtk, damageMultiplier, "⮆", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y - 1, nameAtk, damageMultiplier, "⮆", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x + 4, owner.y - 2, nameAtk, damageMultiplier, "⮆", 8);
        }
        else {
            createDamageBlock_1.createDamageBlock(owner, owner.x - 1, owner.y, nameAtk, damageMultiplier, "⮄", 5);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y + 1, nameAtk, damageMultiplier, "⮄", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y, nameAtk, damageMultiplier, "⮄", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 2, owner.y - 1, nameAtk, damageMultiplier, "⮄", 6);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 3, owner.y + 1, nameAtk, damageMultiplier, "⮄", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 3, owner.y, nameAtk, damageMultiplier, "⮄", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 3, owner.y - 1, nameAtk, damageMultiplier, "⮄", 7);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y + 2, nameAtk, damageMultiplier, "⮄", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y + 1, nameAtk, damageMultiplier, "⮄", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y, nameAtk, damageMultiplier, "⮄", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y - 1, nameAtk, damageMultiplier, "⮄", 8);
            createDamageBlock_1.createDamageBlock(owner, owner.x - 4, owner.y - 2, nameAtk, damageMultiplier, "⮄", 8);
        }
    }
}
exports.firebreath = firebreath;


/***/ }),

/***/ "./src/content/itens/dagger.ts":
/*!*************************************!*\
  !*** ./src/content/itens/dagger.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const damageBlock_1 = __webpack_require__(/*! ../../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const createDamageBlock_1 = __webpack_require__(/*! ../../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
const qualityGenerator_1 = __webpack_require__(/*! ../../helper/qualityGenerator */ "./src/helper/qualityGenerator.ts");
class Dagger extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("main");
        this.power_bonus = 2.5;
        this.skill_bonus = 0.7;
        this.defense_bonus = 0;
        this.hp_bonus = 0;
        this.prefix = '';
        this.name = 'dagger';
        this.fullname = 'dagger';
        this.cooldown = 8;
        this.max_cooldown = 8;
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
            this.glyph = drop.glyph;
        }
        else {
            let item = qualityGenerator_1.qualityGenerator("main");
            this.power_bonus += this.power_bonus * item.power_bonus;
            this.skill_bonus += this.skill_bonus * item.skill_bonus;
            if (item.defense_bonus * 100 > 13)
                this.defense_bonus += (Math.random() * 2);
            this.defense_bonus += this.defense_bonus * item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown * item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new glyph_1.Glyph('🗡', [0, 0, 0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }
    startCountDown() {
        var interval = setInterval(() => {
            if (this.cooldown > 0)
                this.cooldown--;
        }, 100);
    }
    strike() {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir = this.owner.face;
            let dmg = new damageBlock_1.DamageBlock(this.skill_bonus);
            let attack = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 2, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y + 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y + 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 4, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 2, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y - 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y - 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 4, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y - 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y - 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y, this.name, this.skill_bonus);
            }
        }
    }
}
exports.Dagger = Dagger;


/***/ }),

/***/ "./src/content/itens/exit.ts":
/*!***********************************!*\
  !*** ./src/content/itens/exit.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Exit {
    constructor(map) {
        this._map = map;
    }
    climb() {
        this._map.owner.level += 1;
        this._map.owner.switchScreen(this._map.owner.Screen.playScreen);
    }
}
exports.Exit = Exit;


/***/ }),

/***/ "./src/content/itens/firerod.ts":
/*!**************************************!*\
  !*** ./src/content/itens/firerod.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const damageBlock_1 = __webpack_require__(/*! ../../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const createDamageBlock_1 = __webpack_require__(/*! ../../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
const qualityGenerator_1 = __webpack_require__(/*! ../../helper/qualityGenerator */ "./src/helper/qualityGenerator.ts");
class Firerod extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("main");
        this.power_bonus = -2;
        this.skill_bonus = 1.5;
        this.defense_bonus = 0;
        this.hp_bonus = 0;
        this.prefix = '';
        this.name = 'firerod';
        this.fullname = 'firerod';
        this.cooldown = 8;
        this.max_cooldown = 8;
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
            this.glyph = drop.glyph;
        }
        else {
            let item = qualityGenerator_1.qualityGenerator("main");
            this.power_bonus += this.power_bonus * item.power_bonus;
            this.skill_bonus += this.skill_bonus * item.skill_bonus;
            if (item.defense_bonus * 100 > 13)
                this.defense_bonus += (Math.random() * 2);
            this.defense_bonus += this.defense_bonus * item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown * item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new glyph_1.Glyph('‽', [0, 0, 0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }
    startCountDown() {
        var interval = setInterval(() => {
            if (this.cooldown > 0)
                this.cooldown--;
        }, 100);
    }
    strike() {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir = this.owner.face;
            let dmg = new damageBlock_1.DamageBlock(this.skill_bonus);
            let attack = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 1, this.name, this.skill_bonus, 'f', 7);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y + 2, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 2, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y + 2, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 3, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y + 3, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y + 3, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y + 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y + 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y + 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y + 4, this.name, this.skill_bonus, 'f', 10);
            }
            else if (this.owner.face == 'n') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 1, this.name, this.skill_bonus, 'f', 7);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y - 2, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 2, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y - 2, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 3, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y - 3, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y - 3, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y - 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y - 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y - 4, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y - 4, this.name, this.skill_bonus, 'f', 10);
            }
            else if (this.owner.face == 'w') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y, this.name, this.skill_bonus, 'f', 7);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y + 1, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y - 1, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y + 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y - 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y + 2, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y + 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y - 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y - 2, this.name, this.skill_bonus, 'f', 10);
            }
            else if (this.owner.face == 'e') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y, this.name, this.skill_bonus, 'f', 7);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y + 1, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y - 1, this.name, this.skill_bonus, 'f', 9);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y + 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y - 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y + 2, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y + 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y - 1, this.name, this.skill_bonus, 'f', 10);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y - 2, this.name, this.skill_bonus, 'f', 10);
            }
        }
    }
}
exports.Firerod = Firerod;


/***/ }),

/***/ "./src/content/itens/knife.ts":
/*!************************************!*\
  !*** ./src/content/itens/knife.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const damageBlock_1 = __webpack_require__(/*! ../../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const createDamageBlock_1 = __webpack_require__(/*! ../../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
const qualityGenerator_1 = __webpack_require__(/*! ../../helper/qualityGenerator */ "./src/helper/qualityGenerator.ts");
class Knife extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("main");
        this.power_bonus = 2;
        this.skill_bonus = 0.5;
        this.defense_bonus = 0;
        this.hp_bonus = 0;
        this.prefix = '';
        this.name = 'knife';
        this.fullname = 'knife';
        this.cooldown = 8;
        this.max_cooldown = 8;
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
            this.glyph = drop.glyph;
        }
        else {
            let item = qualityGenerator_1.qualityGenerator("main");
            this.power_bonus += this.power_bonus * item.power_bonus;
            this.skill_bonus += this.skill_bonus * item.skill_bonus;
            if (item.defense_bonus * 100 > 13)
                this.defense_bonus += (Math.random() * 2);
            this.defense_bonus += this.defense_bonus * item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown * item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new glyph_1.Glyph('🗡', [0, 0, 0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }
    startCountDown() {
        var interval = setInterval(() => {
            if (this.cooldown > 0)
                this.cooldown--;
        }, 100);
    }
    strike() {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir = this.owner.face;
            let dmg = new damageBlock_1.DamageBlock(this.skill_bonus);
            let attack = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 2, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 2, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y, this.name, this.skill_bonus);
            }
        }
    }
}
exports.Knife = Knife;


/***/ }),

/***/ "./src/content/itens/potion.ts":
/*!*************************************!*\
  !*** ./src/content/itens/potion.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const damageBlock_1 = __webpack_require__(/*! ../../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const createDamageBlock_1 = __webpack_require__(/*! ../../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
class Potion extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("bag");
        this.power_bonus = 2;
        this.skill_bonus = 0.5;
        this.defense_bonus = 0;
        this.hp_bonus = 0;
        this.prefix = '';
        this.name = 'potion';
        this.cooldown = 8;
        this.max_cooldown = 8;
        this.glyph = new glyph_1.Glyph('ზ', [0, 0, 0], [204, 200, 0]);
    }
    strike() {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir = this.owner.face;
            let dmg = new damageBlock_1.DamageBlock(this.skill_bonus);
            let attack = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 1, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 1, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y, this.name, this.skill_bonus);
            }
        }
    }
}
exports.Potion = Potion;


/***/ }),

/***/ "./src/content/itens/shield.ts":
/*!*************************************!*\
  !*** ./src/content/itens/shield.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const qualityGenerator_1 = __webpack_require__(/*! ../../helper/qualityGenerator */ "./src/helper/qualityGenerator.ts");
class Shield extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("sub");
        this.power_bonus = 0;
        this.skill_bonus = 1;
        this.defense_bonus = 2;
        this.hp_bonus = 10;
        this.name = 'shield';
        this.fullname = 'shield';
        this.cooldown = 8;
        this.max_cooldown = 8;
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
        }
        else {
            let item = qualityGenerator_1.qualityGenerator("sub");
            this.power_bonus += this.power_bonus * item.power_bonus;
            this.skill_bonus += this.skill_bonus * item.skill_bonus;
            this.defense_bonus += this.defense_bonus * item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown * item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new glyph_1.Glyph('ꂷ', [0, 0, 0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }
    startCountDown() {
        var interval = setInterval(() => {
            if (this.cooldown > 0)
                this.cooldown--;
        }, 100);
    }
    defend(amount) {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            amount = amount - (this.owner.fighter.defense() * this.skill_bonus);
            amount = amount < 0 ? 0 : amount;
        }
        return amount;
    }
}
exports.Shield = Shield;


/***/ }),

/***/ "./src/content/itens/spear.ts":
/*!************************************!*\
  !*** ./src/content/itens/spear.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const damageBlock_1 = __webpack_require__(/*! ../../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const createDamageBlock_1 = __webpack_require__(/*! ../../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
const qualityGenerator_1 = __webpack_require__(/*! ../../helper/qualityGenerator */ "./src/helper/qualityGenerator.ts");
class Spear extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("main");
        this.power_bonus = 4;
        this.skill_bonus = 1.1;
        this.defense_bonus = 0;
        this.hp_bonus = 0;
        this.name = 'spear';
        this.fullname = 'spear';
        this.max_cooldown = 8;
        this.cooldown = 13;
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
        }
        else {
            let item = qualityGenerator_1.qualityGenerator("main");
            this.power_bonus += this.power_bonus * item.power_bonus;
            this.skill_bonus += this.skill_bonus * item.skill_bonus;
            if (item.defense_bonus * 100 > 13)
                this.defense_bonus += (Math.random() * 2);
            this.defense_bonus += this.defense_bonus * item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown * item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new glyph_1.Glyph('ﴽ', [0, 0, 0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }
    startCountDown() {
        var interval = setInterval(() => {
            if (this.cooldown > 0)
                this.cooldown--;
        }, 100);
    }
    strike() {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir = this.owner.face;
            let dmg = new damageBlock_1.DamageBlock(this.skill_bonus);
            let attack = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 2, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 4, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y + 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y + 3, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 2, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 4, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y - 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y - 3, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y - 1, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y - 1, this.name, this.skill_bonus);
            }
        }
    }
}
exports.Spear = Spear;


/***/ }),

/***/ "./src/content/itens/sword.ts":
/*!************************************!*\
  !*** ./src/content/itens/sword.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = __webpack_require__(/*! ../../components/equipment */ "./src/components/equipment.ts");
const damageBlock_1 = __webpack_require__(/*! ../../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../../glyph */ "./src/glyph.ts");
const createDamageBlock_1 = __webpack_require__(/*! ../../helper/createDamageBlock */ "./src/helper/createDamageBlock.ts");
const qualityGenerator_1 = __webpack_require__(/*! ../../helper/qualityGenerator */ "./src/helper/qualityGenerator.ts");
class Sword extends equipment_1.Equipment {
    constructor(drop = undefined) {
        super("main");
        this.power_bonus = 4;
        this.skill_bonus = 0.7;
        this.defense_bonus = 0;
        this.hp_bonus = 0;
        this.name = 'sword';
        this.fullname = 'sword';
        this.cooldown = 10;
        this.max_cooldown = 10;
        if (drop != undefined) {
            this.power_bonus = drop.power_bonus;
            this.skill_bonus = drop.skill_bonus;
            this.defense_bonus = drop.defense_bonus;
            this.hp_bonus = drop.hp_bonus;
            this.name = drop.name;
            this.fullname = drop.fullname;
            this.max_cooldown = drop.max_cooldown;
        }
        else {
            let item = qualityGenerator_1.qualityGenerator("main");
            this.power_bonus += this.power_bonus * item.power_bonus;
            this.skill_bonus += this.skill_bonus * item.skill_bonus;
            if (item.defense_bonus * 100 > 13)
                this.defense_bonus += (Math.random() * 2);
            this.defense_bonus += this.defense_bonus * item.defense_bonus;
            this.max_cooldown += Math.round(this.max_cooldown * item.max_cooldown);
            this.fullname = item.prefix + this.name;
            this.glyph = new glyph_1.Glyph('ރ', [0, 0, 0], [item.alpha, item.alpha, 0]);
        }
        this.startCountDown();
    }
    startCountDown() {
        var interval = setInterval(() => {
            if (this.cooldown > 0)
                this.cooldown--;
        }, 100);
    }
    strike() {
        if (this.cooldown <= 0) {
            this.cooldown = this.max_cooldown;
            let dir = this.owner.face;
            let dmg = new damageBlock_1.DamageBlock(this.skill_bonus);
            let attack = null;
            dmg.owner = this.owner;
            if (this.owner.face == 's') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 2, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y + 4, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'n') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 1, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 2, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 3, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x, this.owner.y - 4, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'w') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x - 4, this.owner.y, this.name, this.skill_bonus);
            }
            else if (this.owner.face == 'e') {
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 1, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 2, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 3, this.owner.y, this.name, this.skill_bonus);
                createDamageBlock_1.createDamageBlock(this.owner, this.owner.x + 4, this.owner.y, this.name, this.skill_bonus);
            }
        }
    }
}
exports.Sword = Sword;


/***/ }),

/***/ "./src/content/monsters/dragon.ts":
/*!****************************************!*\
  !*** ./src/content/monsters/dragon.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../../helper/deathFunction */ "./src/helper/deathFunction.ts");
const skilllist_1 = __webpack_require__(/*! ../../components/skilllist */ "./src/components/skilllist.ts");
class Dragon {
    constructor() {
        this.skill_bonus = 5;
        this.skills = [{
                name: 'fire breath',
                cooldown: 10,
                maxCooldown: 10
            },
            {
                name: 'flamestrike',
                cooldown: 20,
                maxCooldown: 20
            }];
    }
    startCountDown(seconds) {
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown)
                    element.cooldown++;
            });
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                    deathFunction_1.deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }
        }, 100);
    }
    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined)
            return;
        let dist = Math.sqrt(Math.pow((player.x - this.owner.x), 2) + Math.pow((player.y - this.owner.y), 2));
        if (dist < this.owner.sight) {
            this.owner.hunt(player);
            if (this.skills[0].cooldown >= this.skills[0].maxCooldown) {
                skilllist_1.firebreath(this.owner, player, this.skill_bonus * 0.5);
                this.skills[0].cooldown = 0;
            }
            //this.poison_cloud(player);
        }
        else {
            this.owner.wander();
        }
        if (dist < 2)
            if (this.skills[1].cooldown >= this.skills[1].maxCooldown) {
                this.owner.hunt(player);
                skilllist_1.flamestrike(this.owner, player, this.skill_bonus);
                this.skills[1].cooldown = 0;
            }
    }
}
exports.Dragon = Dragon;


/***/ }),

/***/ "./src/content/monsters/fungi.ts":
/*!***************************************!*\
  !*** ./src/content/monsters/fungi.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../../helper/deathFunction */ "./src/helper/deathFunction.ts");
const skilllist_1 = __webpack_require__(/*! ../../components/skilllist */ "./src/components/skilllist.ts");
class Fungi {
    constructor() {
        this.skill_bonus = 1;
        this.skills = [{
                name: 'poison cloud',
                cooldown: 10,
                maxCooldown: 10
            },
            {
                name: 'poison shield',
                cooldown: 20,
                maxCooldown: 20
            }];
    }
    startCountDown(seconds) {
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown)
                    element.cooldown++;
            });
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                    deathFunction_1.deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }
        }, 100);
    }
    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined)
            return;
        let dist = Math.sqrt(Math.pow((player.x - this.owner.x), 2) + Math.pow((player.y - this.owner.y), 2));
        if (dist < this.owner.sight * 1.4) {
            if (this.skills[0].cooldown >= this.skills[0].maxCooldown) {
                skilllist_1.poison_cloud(this.owner, player, this.skill_bonus * 0.5);
                this.skills[0].cooldown = 0;
            }
            //this.owner.hunt(player);
            //this.poison_cloud(player);
        }
        else {
            this.owner.wander();
        }
        if (dist < 2)
            if (this.skills[1].cooldown >= this.skills[1].maxCooldown) {
                skilllist_1.poison_shield(this.owner, player, 1);
                this.skills[1].cooldown = 0;
            }
    }
}
exports.Fungi = Fungi;


/***/ }),

/***/ "./src/content/monsters/orc.ts":
/*!*************************************!*\
  !*** ./src/content/monsters/orc.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../../helper/deathFunction */ "./src/helper/deathFunction.ts");
const skilllist_1 = __webpack_require__(/*! ../../components/skilllist */ "./src/components/skilllist.ts");
class Orc {
    constructor() {
        this.skill_bonus = 1.5;
        this.skills = [{
                name: 'punch',
                cooldown: 12,
                maxCooldown: 12
            }];
    }
    startCountDown(seconds) {
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown)
                    element.cooldown++;
            });
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                    deathFunction_1.deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }
        }, 100);
    }
    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined)
            return;
        let dist = Math.sqrt(Math.pow((player.x - this.owner.x), 2) + Math.pow((player.y - this.owner.y), 2));
        if (dist < this.owner.sight) {
            this.owner.hunt(player);
            if (dist <= 5 && (this.owner.x == player.x || this.owner.y == player.y)) {
                skilllist_1.punch(this.owner, player, 1.2);
            }
        }
        else {
            this.owner.wander();
        }
    }
}
exports.Orc = Orc;


/***/ }),

/***/ "./src/content/monsters/ranger.ts":
/*!****************************************!*\
  !*** ./src/content/monsters/ranger.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../../helper/deathFunction */ "./src/helper/deathFunction.ts");
const skilllist_1 = __webpack_require__(/*! ../../components/skilllist */ "./src/components/skilllist.ts");
class Ranger {
    constructor() {
        this.skill_bonus = 1.5;
        this.skills = [{
                name: 'snipe',
                cooldown: 24,
                maxCooldown: 24
            }];
    }
    startCountDown(seconds) {
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown)
                    element.cooldown++;
            });
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                    deathFunction_1.deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }
        }, 100);
    }
    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined)
            return;
        let dist = Math.sqrt(Math.pow((player.x - this.owner.x), 2) + Math.pow((player.y - this.owner.y), 2));
        if (dist < this.owner.sight * 1.5 && dist > 9) {
            this.owner.hunt(player);
            if (dist <= 9 && (this.owner.x == player.x || this.owner.y == player.y)) {
                skilllist_1.snipe(this.owner, player, 1.2);
            }
        }
        else if (dist < 12) {
            let dx = player.x - this.owner.x;
            let dy = player.y - this.owner.y;
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dy > 0) {
                    this.owner.move(0, 1, this.owner._map);
                }
                else {
                    this.owner.move(0, -1, this.owner._map);
                }
            }
            else {
                if (dx > 0) {
                    this.owner.move(1, 0, this.owner._map);
                }
                else {
                    this.owner.move(-1, 0, this.owner._map);
                }
            }
            if (dist < 5) {
                this.owner.kite(player);
            }
            skilllist_1.snipe(this.owner, player, 1.2);
        }
        else {
            this.owner.wander();
        }
    }
}
exports.Ranger = Ranger;


/***/ }),

/***/ "./src/content/monsters/troll.ts":
/*!***************************************!*\
  !*** ./src/content/monsters/troll.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../../helper/deathFunction */ "./src/helper/deathFunction.ts");
const skilllist_1 = __webpack_require__(/*! ../../components/skilllist */ "./src/components/skilllist.ts");
class Troll {
    constructor() {
        this.skill_bonus = 1.5;
        this.skills = [{
                name: 'smash',
                cooldown: 12,
                maxCooldown: 12
            }];
    }
    startCountDown(seconds) {
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown)
                    element.cooldown++;
            });
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                    deathFunction_1.deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }
        }, 100);
    }
    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined)
            return;
        let dist = Math.sqrt(Math.pow((player.x - this.owner.x), 2) + Math.pow((player.y - this.owner.y), 2));
        if (dist < this.owner.sight) {
            this.owner.hunt(player);
            if (dist <= 5 && (this.owner.x == player.x || this.owner.y == player.y)) {
                skilllist_1.smash(this.owner, player, this.skill_bonus);
            }
        }
        else {
            this.owner.wander();
        }
    }
}
exports.Troll = Troll;


/***/ }),

/***/ "./src/content/monsters/wyvern.ts":
/*!****************************************!*\
  !*** ./src/content/monsters/wyvern.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const deathFunction_1 = __webpack_require__(/*! ../../helper/deathFunction */ "./src/helper/deathFunction.ts");
const skilllist_1 = __webpack_require__(/*! ../../components/skilllist */ "./src/components/skilllist.ts");
class Wyvern {
    constructor() {
        this.skill_bonus = 1.5;
        this.skills = [{
                name: 'windBlow',
                cooldown: 8,
                maxCooldown: 8
            }];
    }
    startCountDown(seconds) {
        var counter = seconds;
        var interval = setInterval(() => {
            counter--;
            this.skills.forEach(element => {
                if (element.cooldown < element.maxCooldown)
                    element.cooldown++;
            });
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (this.owner.fighter.hp == 0) {
                    clearInterval(interval);
                    deathFunction_1.deathFunction(this.owner);
                }
                else {
                    counter = this.owner.maxStamina;
                    this.act();
                }
            }
        }, 100);
    }
    act() {
        let player = this.owner._map.getPlayer();
        if (player == undefined)
            return;
        let dist = Math.sqrt(Math.pow((player.x - this.owner.x), 2) + Math.pow((player.y - this.owner.y), 2));
        if (dist < this.owner.sight) {
            this.owner.hunt(player);
            if (dist <= this.owner.sight) {
                if (this.skills[0].cooldown == this.skills[0].maxCooldown) {
                    skilllist_1.windBlow(this.owner, player, this.skill_bonus);
                    this.skills[0].cooldown = 0;
                }
            }
        }
        else {
            this.owner.wander();
        }
    }
}
exports.Wyvern = Wyvern;


/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ../lib */ "./lib/index.js");
const randint_1 = __webpack_require__(/*! ./helper/randint */ "./src/helper/randint.ts");
const deathFunction_1 = __webpack_require__(/*! ./helper/deathFunction */ "./src/helper/deathFunction.ts");
const createItens_1 = __webpack_require__(/*! ./helper/createItens */ "./src/helper/createItens.ts");
class Entity {
    constructor(x, y, glyph, name, size = 0, blocks = false, maxStamina = 0, render_order = 99, fighter = undefined, ai = undefined, player = false, item = undefined, inventory = undefined, damage = undefined, stairs = undefined, level = undefined, equipment = undefined, equippable = undefined, _map = undefined, _entities = undefined) {
        this.regen = undefined;
        this.regenMax = 10;
        this.x = x;
        this.y = y;
        this.x2 = x + size - 1;
        this.y2 = y + size - 1;
        this.glyph = glyph;
        this.name = name;
        this.blocks = blocks;
        this.render_order = render_order;
        this.maxStamina = maxStamina;
        this.stamina = 0;
        this._map = _map;
        this.ai = ai;
        this.fighter = fighter;
        this.equipment = equipment;
        this.subequipment = undefined;
        this.cooldown = 0;
        this.face = 'n';
        this.damage = damage;
        this.player = player;
        this.item = item;
        this.inventory = 10;
        this.stairs = stairs;
        if (this.player == true) {
            this.startMoveCountDown();
            this.startAttackCountDown();
        }
        if (this.ai != undefined) {
            this.ai.owner = this;
            this.ai.startCountDown(this.maxStamina);
            this.sight = 10;
        }
        else
            this.sight = 12; //12
        if (this.fighter != undefined) {
            this.fighter.owner = this;
        }
        if (this.equipment != undefined) {
            this.equipment.owner = this;
        }
        if (this.damage != undefined) {
            this.damage.owner = this;
        }
        if (this.item != undefined) {
            this.item.owner = this;
        }
        if (this.inventory != undefined) {
            this.inventory = 10;
        }
    }
    move(dx, dy, map) {
        let moveerror = this.changeFace(dx, dy);
        if (this.player == true && this.stamina < this.maxStamina && moveerror)
            return;
        else if (this.player == true)
            this.stamina = 0;
        let tx = this.x + dx;
        let tx2 = this.x2 + dx;
        let ty = this.y + dy;
        let ty2 = this.y2 + dy;
        if (dx == 0 && dy == 0)
            return;
        if (map.getMovableArea(tx, tx2, ty, ty2)) {
            let targets = [];
            targets = map.getEntitiesAt(tx, tx2, ty, ty2);
            if (targets.length == 0) {
                this.x = tx;
                this.x2 = tx2;
                this.y = ty;
                this.y2 = ty2;
            }
            else {
                if (this.player == true) {
                    if (this.cooldown == 0) {
                        this.attack(targets);
                        this.cooldown = 5;
                    }
                }
                else {
                    this.attack(targets);
                }
            }
        }
        else {
        }
    }
    changeFace(dx, dy) {
        if (dx == -1) {
            if (this.face == 'w')
                return true;
            this.face = 'w';
            return false;
        }
        if (dx == 1) {
            if (this.face == 'e')
                return true;
            this.face = 'e';
            return false;
        }
        if (dy == -1) {
            if (this.face == 'n')
                return true;
            this.face = 'n';
            return false;
        }
        if (dy == 1) {
            if (this.face == 's')
                return true;
            this.face = 's';
            return false;
        }
    }
    startMoveCountDown() {
        var moveinterval = setInterval(() => {
            if (this.stamina <= this.maxStamina) {
                this.stamina++;
            }
            // code here will run when the counter reaches zero.
            if (this.fighter.hp == 0) {
                clearInterval(moveinterval);
                deathFunction_1.deathFunction(this);
            }
        }, 100);
    }
    startAttackCountDown() {
        var attackinterval = setInterval(() => {
            if (this.cooldown > 0) {
                this.cooldown--;
            }
            // code here will run when the counter reaches zero.
            if (this.fighter.hp == 0) {
                clearInterval(attackinterval);
                deathFunction_1.deathFunction(this);
            }
        }, 100);
    }
    equipStart(item) {
        this.equipment = item.item;
        this.equipment.owner = this;
        item.item.expire = true;
    }
    equip(item) {
        console.log('item chao: ');
        console.log(item); //item do chao
        if (item.item.type == "main") {
            if (this.equipment == undefined) {
                this.equipment = item.item;
                this.equipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'pickup', item);
            }
            else {
                // colocar na backpack
                let drop = createItens_1.CreateDropItem(this.equipment, this.x, this.y);
                let droppedItem = new Entity(this.x, this.y, drop.item.glyph, drop.item.fullname, 1, false, 5, 2, undefined, undefined, false, drop.item); //cria entidade para dropar
                this._map._entities.push(droppedItem);
                this.equipment = item.item;
                this.equipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'switchEquip', droppedItem, item);
            }
            console.log('this:');
            console.log(this);
        }
        else if (item.item.type == "sub") {
            if (this.subequipment == undefined) {
                this.subequipment = item.item;
                this.subequipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'pickup', item);
            }
            else {
                // colocar na backpack
                let drop = createItens_1.CreateDropItem(this.subequipment, this.x, this.y);
                let droppedItem = new Entity(this.x, this.y, drop.item.glyph, drop.item.fullname, 1, false, 5, 2, undefined, undefined, false, drop.item); //cria entidade para dropar
                this._map._entities.push(droppedItem);
                this.subequipment = item.item;
                this.subequipment.owner = this;
                item.item.expire = true;
                this._map.messageLog.newMessage(this, 'switchEquip', item, this);
            }
        }
        else if (item.item.type == "bag") {
            if (item.item.expire == false) {
                this.inventory += 1;
                this._map.messageLog.newMessage(this, 'pickup', item);
            }
            item.item.expire = true;
        }
    }
    usePotion() {
        if (this.inventory == 0) {
            this._map.messageLog.newMessage(this, 'potionZero');
            return;
        }
        this._map.messageLog.newMessage(this, 'potion');
        this.inventory -= 1;
        if (this.regen == undefined) {
            this.regen = setInterval(() => {
                if (this.regenMax > 0) {
                    this.fighter.heal(this.fighter.max_hp() * 0.035);
                    this.regenMax -= 1;
                }
                if (this.regenMax == 0) {
                    this.regenMax = 10;
                    clearInterval(this.regen);
                    this.regen = undefined;
                }
            }, 500);
        }
    }
    attack(targets) {
        if (this.fighter != undefined) {
            if (this.glyph.char == '@') {
                this.fighter.attack(targets[0]);
            }
            else {
                let player = undefined;
                targets.forEach(element => {
                    if (element.glyph.char == '@') {
                        player = element;
                    }
                });
                if (player != undefined) {
                    this.fighter.attack(player);
                }
                else {
                }
            }
        }
    }
    skill(targets) {
        targets.forEach((entity, i) => {
            if (entity != this.owner) {
                if (entity.fighter != undefined) {
                    this.owner.fighter.equipment_skill(entity, this);
                }
            }
        });
    }
    hunt(target) {
        let source = this;
        var path = new lib_1.Path.AStar(target.x, target.y, function (x, y) {
            // If an entity is present at the tile, can't move there.
            let entity = source._map.getEntitiesAt(this.x1, this.x2, this.y1, this.y2);
            if (entity.length > 0) {
                return false;
            }
            return source._map.getTile(x, y)._isWalkable;
        }, { topology: 8 });
        var count = 0;
        path.compute(source.x, source.y, function (x, y) {
            if (count == 1) {
                let dx = x - source.x;
                let dy = y - source.y;
                source.move(dx, dy, source._map);
            }
            if (count > 1) {
                return;
            }
            count++;
        });
    }
    wander() {
        let dy = 0;
        let dx = 0;
        while (dy == 0 && dx == 0) {
            dy = randint_1.randint(-1, 1);
            dx = randint_1.randint(-1, 1);
        }
        this.move(dx, dy, this._map);
    }
    kite(target) {
        let source = this;
        let targetx = this.x - (target.x - this.x);
        let targety = this.y - (target.y - this.y);
        var path = new lib_1.Path.AStar(targetx, targety, function (x, y) {
            // If an entity is present at the tile, can't move there.
            let entity = source._map.getEntitiesAt(this.x1, this.x2, this.y1, this.y2);
            if (entity.length > 0) {
                return false;
            }
            return source._map.getTile(x, y)._isWalkable;
        }, { topology: 8 });
        var count = 0;
        path.compute(source.x, source.y, function (x, y) {
            if (count == 1) {
                let dx = (x - source.x);
                let dy = (y - source.y);
                source.move(dx, dy, source._map);
            }
            if (count > 1) {
                return;
            }
            count++;
        });
    }
    // startCountDown(seconds: number){
    //     var counter = seconds;
    //     var interval = setInterval(() => {
    //         //(counter);
    //         counter--;
    //         if (counter < 0 ) {
    //             // code here will run when the counter reaches zero.
    //             //clearInterval(interval);
    //             counter = this.maxStamina;
    //             this.act();
    //         }	
    //     }, 1000);
    // }
    act() {
    }
}
exports.Entity = Entity;


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(/*! ../lib/index */ "./lib/index.js");
const entity_1 = __webpack_require__(/*! ./entity */ "./src/entity.ts");
const screens_1 = __webpack_require__(/*! ./screens */ "./src/screens.ts");
const glyph_1 = __webpack_require__(/*! ./glyph */ "./src/glyph.ts");
const fighter_1 = __webpack_require__(/*! ./components/fighter */ "./src/components/fighter.ts");
const messages_1 = __webpack_require__(/*! ./messages */ "./src/messages.ts");
const logo_1 = __webpack_require__(/*! ../logo/logo */ "./logo/logo.ts");
const createItens_1 = __webpack_require__(/*! ./helper/createItens */ "./src/helper/createItens.ts");
class Game {
    constructor() {
        this._messageBoxSize = 10;
        this._screenWidth = 74;
        this._screenHeight = 40;
        this._entities = [];
        this.timer = true;
        this.level = 1;
        this.blinkLevel = 0;
        this.lang = "En";
        this.mainmenuOpt = 0;
        this._centerX = 0;
        this._centerY = 0;
        this._display = null;
        this._currentScreen = null;
        this.Screen = {
            startScreen: screens_1.startScreen(),
            debugScreen: screens_1.debugScreen(),
            playScreen: screens_1.playScreen(),
            winScreen: screens_1.winScreen(),
            loseScreen: screens_1.loseScreen()
        };
        this._map = null;
        this._entities = new Array();
    }
    init() {
        // Any necessary initialization will go here.
        this.logo = logo_1.Logo();
        this._display = new index_1.Display({
            width: this._screenWidth,
            height: this._screenHeight,
            forceSquareRatio: true,
            fontFamily: "Courier",
            fontStyle: "bold",
            spacing: 0.75
        });
        this._inventory = new index_1.Display({ width: 20, height: this._screenHeight * 0.8 });
        this._messaging = new index_1.Display({ width: this._screenWidth * 1.5, height: this._messageBoxSize });
        this.messageLog = new messages_1.Messagelog(0, this._screenHeight, this._messageBoxSize, this);
        this.messageLog.messages = [{ message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" },
            { message: '', color0: [0, 0, 0], color1: [0, 0, 0], color2: [0, 0, 0], type: "empty" }];
        //let game = this; // So that we don't lose this
        let event = "keydown";
        let menu = document.getElementById("menu");
        window.addEventListener(event, e => {
            // When an event is received, send it to the
            // screen if there is one
            if (this._currentScreen !== null) {
                // Send the event type and data to the screen
                this._currentScreen.handleInput(event, e, this);
                this._display.clear();
                this._currentScreen.render(this._display, this);
            }
        });
        window.onkeydown = ((e) => {
            if (e.keyCode == 8 && e.target == document.body)
                e.preventDefault();
        });
        //add event listener to inv
        menu.addEventListener("click", e => {
            this._currentScreen.handleInput("click", e, this);
            this._display.clear();
            this._currentScreen.render(this._display, this);
        });
    }
    getDisplay() {
        return this._display;
    }
    getInventory() {
        return this._inventory;
    }
    getMessaging() {
        return this._messaging;
    }
    writeMessages() {
        let x = 0;
        let alpha = 0;
        let fading = '';
        let fading2 = '';
        let fading3 = '';
        let out = '';
        let out2 = '';
        let out3 = '';
        let outf = '';
        let base = 255;
        for (let message of this.messageLog.messages) {
            alpha += 0.1;
            //if (message.type.startsWith('death') || message.type.startsWith('fight') || message.type.startsWith('skill') || message.type.startsWith('pickup') || message.type.startsWith('potion')) {
            let basefading = "%c{rgb(" + (base * alpha).toString() + "," + (base * alpha).toString() + "," + (base * alpha).toString() + ")}";
            fading = "%c{rgb(" + Math.round(message.color0[0] * alpha).toString() + "," + Math.round(message.color0[1] * alpha).toString() + "," + Math.round(message.color0[2] * alpha).toString() + ")}";
            fading2 = "%c{rgb(" + Math.round(message.color1[0] * alpha).toString() + "," + Math.round(message.color1[1] * alpha).toString() + "," + Math.round(message.color1[2] * alpha).toString() + ")}";
            fading3 = "%c{rgb(" + Math.round(message.color2[0] * alpha).toString() + "," + Math.round(message.color2[1] * alpha).toString() + "," + Math.round(message.color2[2] * alpha).toString() + ")}";
            out = message.message.replace(/%c\{0}/g, fading);
            out2 = out.replace(/%c\{1}/g, fading2);
            out3 = out2.replace(/%c\{2}/g, fading3);
            outf = out3.replace(/%c\{base}/g, basefading);
            this._messaging.drawText(1, x, '' + outf, this._screenWidth * 2);
            //}
            x += 1;
        }
    }
    writeStats() {
        let hp = this._player.fighter.hp.toFixed(2);
        let max_hp = this._player.fighter.max_hp();
        this._inventory.drawText(0, 1, "Status: ");
        if (this.lang == "En") {
            this._inventory.drawText(1, 3, "%c{rgb(255,0,0)}HP: %c{}" + hp + "/" + max_hp);
            this._inventory.drawText(1, 4, "%c{blue}Atk: %c{}" + this._player.fighter.power().toFixed(2));
            this._inventory.drawText(1, 5, "%c{yellow}Def: %c{}" + this._player.fighter.defense().toFixed(2));
            if (this._player.fighter.unspentPoints > 0) {
                let blink = "";
                if (this.blinkLevel < 2)
                    blink = "%c{rgb(140, 140, 140)}";
                if (this.blinkLevel >= 2)
                    blink = "%c{rgb(240, 240, 240)}";
                if (this.blinkLevel > 5)
                    this.blinkLevel = 0;
                this.blinkLevel += 1;
                this._inventory.drawText(1, 7, blink + " LEVEL UP! : " + this._player.fighter.unspentPoints);
                this._inventory.drawText(1, 8, "%c{rgb(24,191,230)}Might: %c{}" + this._player.fighter.base_power.toFixed(2) + blink + " (a)");
                this._inventory.drawText(1, 9, "%c{rgb(211, 234, 49)}Resist: %c{}" + this._player.fighter.base_defense.toFixed(2) + blink + " (s)");
                this._inventory.drawText(1, 10, "%c{rgb(230, 121, 70)}Base HP: %c{}" + this._player.fighter.base_max_hp.toFixed(2) + blink + " (d)");
            }
            else {
                this._inventory.drawText(1, 8, "%c{rgb(24,191,230)}Might: %c{}" + this._player.fighter.base_power.toFixed(2));
                this._inventory.drawText(1, 9, "%c{rgb(211, 234, 49)}Resist: %c{}" + this._player.fighter.base_defense.toFixed(2));
                this._inventory.drawText(1, 10, "%c{rgb(230, 121, 70)}Base HP: %c{}" + this._player.fighter.base_max_hp.toFixed(2));
            }
            this._inventory.drawText(1, 12, "%c{rgb(140, 140, 160)}Rank: %c{}" + this._player.fighter.rank);
            this._inventory.drawText(1, 13, "%c{rgb(140, 140, 160)}Exp: %c{}" + this._player.fighter.current_exp + "/" + this._player.fighter.nextRank);
            if (this._player.equipment != undefined) {
                this._inventory.drawText(1, 15, "%c{rgb(140, 140, 160)}Main: %c{rgb(" + this._player.equipment.glyph.foreground.toString() + ")}" + this._player.equipment.name);
                this._inventory.drawText(3, 16, "%c{rgb(140, 140, 160)}atk: %c{}" + this._player.equipment.power_bonus.toFixed(2));
                this._inventory.drawText(3, 17, "%c{rgb(140, 140, 160)}skl: %c{}" + this._player.equipment.skill_bonus.toFixed(2));
                this._inventory.drawText(3, 18, "%c{rgb(140, 140, 160)}def: %c{}" + this._player.equipment.defense_bonus.toFixed(2));
                this._inventory.drawText(3, 19, "%c{rgb(140, 140, 160)}hp: %c{}" + this._player.equipment.hp_bonus.toFixed(2));
                this._inventory.drawText(3, 20, "%c{rgb(140, 140, 160)}cd: %c{}" + (this._player.equipment.max_cooldown - this._player.equipment.cooldown).toFixed(0) + "/" + this._player.equipment.max_cooldown.toFixed(0));
            }
            if (this._player.subequipment != undefined) {
                this._inventory.drawText(1, 22, "%c{rgb(140, 140, 160)}Sub: %c{}" + this._player.subequipment.name);
                this._inventory.drawText(3, 23, "%c{rgb(140, 140, 160)}atk: %c{}" + this._player.subequipment.power_bonus.toFixed(2));
                this._inventory.drawText(3, 24, "%c{rgb(140, 140, 160)}skl: %c{}" + this._player.subequipment.skill_bonus.toFixed(2));
                this._inventory.drawText(3, 25, "%c{rgb(140, 140, 160)}def: %c{}" + this._player.subequipment.defense_bonus.toFixed(2));
                this._inventory.drawText(3, 26, "%c{rgb(140, 140, 160)}hp: %c{}" + this._player.subequipment.hp_bonus.toFixed(2));
                this._inventory.drawText(3, 27, "%c{rgb(140, 140, 160)}cd: %c{}" + (this._player.subequipment.max_cooldown - this._player.subequipment.cooldown).toFixed(0) + "/" + this._player.subequipment.max_cooldown.toFixed(0));
                this._inventory.drawText(1, 29, "%c{rgb(0, 255, 102)}Potions: %c{}" + this._player.inventory + " [p]");
            }
            else {
                this._inventory.drawText(1, 22, "%c{rgb(0, 255, 102)}Potions: %c{}" + this._player.inventory + " [p]");
            }
            this._inventory.drawText(1, 29, "%c{rgb(140, 140, 160)}posdebug: %c{}" + this._player.x + " " + this._player.y);
            this._inventory.drawText(1, 30, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 31, "%c{rgb(140, 140, 160)}exit: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}32: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
        }
        else if (this.lang = "Pt") {
            this._inventory.drawText(1, 3, "%c{rgb(255,0,0)}PV: %c{}" + hp + "/" + max_hp);
            this._inventory.drawText(1, 4, "%c{blue}Ataque: %c{}" + this._player.fighter.power().toFixed(2));
            this._inventory.drawText(1, 5, "%c{yellow}Defesa: %c{}" + this._player.fighter.defense().toFixed(2));
            if (this._player.fighter.unspentPoints > 0) {
                let blink = "";
                if (this.blinkLevel < 2)
                    blink = "%c{rgb(140, 140, 140)}";
                if (this.blinkLevel >= 2)
                    blink = "%c{rgb(240, 240, 240)}";
                if (this.blinkLevel > 5)
                    this.blinkLevel = 0;
                this.blinkLevel += 1;
                this._inventory.drawText(1, 7, blink + " SUBIU DE NIVEL! : " + this._player.fighter.unspentPoints);
                this._inventory.drawText(1, 8, "%c{rgb(24,191,230)}Força: %c{}" + this._player.fighter.base_power.toFixed(2) + blink + " (a)");
                this._inventory.drawText(1, 9, "%c{rgb(211, 234, 49)}Proteção: %c{}" + this._player.fighter.base_defense.toFixed(2) + blink + " (s)");
                this._inventory.drawText(1, 10, "%c{rgb(230, 121, 70)}PV Base: %c{}" + this._player.fighter.base_max_hp.toFixed(2) + blink + " (d)");
            }
            else {
                this._inventory.drawText(1, 8, "%c{rgb(24,191,230)}Força: %c{}" + this._player.fighter.base_power.toFixed(2));
                this._inventory.drawText(1, 9, "%c{rgb(211, 234, 49)}Proteção: %c{}" + this._player.fighter.base_defense.toFixed(2));
                this._inventory.drawText(1, 10, "%c{rgb(230, 121, 70)}PV Base: %c{}" + this._player.fighter.base_max_hp.toFixed(2));
            }
            this._inventory.drawText(1, 12, "%c{rgb(140, 140, 160)}Rank: %c{}" + this._player.fighter.rank);
            this._inventory.drawText(1, 13, "%c{rgb(140, 140, 160)}Exp: %c{}" + this._player.fighter.current_exp + "/" + this._player.fighter.nextRank);
            if (this._player.equipment != undefined) {
                this._inventory.drawText(1, 15, "%c{rgb(140, 140, 160)}Principal: %c{rgb(" + this._player.equipment.glyph.foreground.toString() + ")}" + this._player.equipment.name);
                this._inventory.drawText(3, 16, "%c{rgb(140, 140, 160)}atq: %c{}" + this._player.equipment.power_bonus.toFixed(2));
                this._inventory.drawText(3, 17, "%c{rgb(140, 140, 160)}hab: %c{}" + this._player.equipment.skill_bonus.toFixed(2));
                this._inventory.drawText(3, 18, "%c{rgb(140, 140, 160)}def: %c{}" + this._player.equipment.defense_bonus.toFixed(2));
                this._inventory.drawText(3, 19, "%c{rgb(140, 140, 160)}pv: %c{}" + this._player.equipment.hp_bonus.toFixed(2));
                this._inventory.drawText(3, 20, "%c{rgb(140, 140, 160)}cd: %c{}" + (this._player.equipment.max_cooldown - this._player.equipment.cooldown).toFixed(0) + "/" + this._player.equipment.max_cooldown.toFixed(0));
            }
            if (this._player.subequipment != undefined) {
                this._inventory.drawText(1, 22, "%c{rgb(140, 140, 160)}Sub: %c{}" + this._player.subequipment.name);
                this._inventory.drawText(3, 23, "%c{rgb(140, 140, 160)}atq: %c{}" + this._player.subequipment.power_bonus.toFixed(2));
                this._inventory.drawText(3, 24, "%c{rgb(140, 140, 160)}hab: %c{}" + this._player.subequipment.skill_bonus.toFixed(2));
                this._inventory.drawText(3, 25, "%c{rgb(140, 140, 160)}def: %c{}" + this._player.subequipment.defense_bonus.toFixed(2));
                this._inventory.drawText(3, 26, "%c{rgb(140, 140, 160)}pv: %c{}" + this._player.subequipment.hp_bonus.toFixed(2));
                this._inventory.drawText(3, 27, "%c{rgb(140, 140, 160)}cd: %c{}" + (this._player.subequipment.max_cooldown - this._player.subequipment.cooldown).toFixed(0) + "/" + this._player.subequipment.max_cooldown.toFixed(0));
                this._inventory.drawText(1, 29, "%c{rgb(0, 255, 102)}Poções: %c{}" + this._player.inventory + " [p]");
            }
            else {
                this._inventory.drawText(1, 22, "%c{rgb(0, 255, 102)}Poções: %c{}" + this._player.inventory + " [p]");
            }
            this._inventory.drawText(1, 29, "%c{rgb(140, 140, 160)}29: %c{}" + this._player.x + " " + this._player.y);
            this._inventory.drawText(1, 30, "%c{rgb(140, 140, 160)}30: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 31, "%c{rgb(140, 140, 160)}31: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}32: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
            this._inventory.drawText(1, 32, "%c{rgb(140, 140, 160)}Floor: %c{}" + this._map.dungeon_level);
        }
    }
    switchScreen(screen) {
        // If we had a screen before, notify it that we exited
        if (this._currentScreen !== null) {
            this._currentScreen.exit(this);
        }
        // Clear the display
        this.getDisplay().clear();
        // Update our current screen, notify it we entered
        // and then render it
        this._currentScreen = screen;
        if (!this._currentScreen !== null) {
            this._currentScreen.enter(this);
            this.refresh();
        }
    }
    refresh() {
        this._display.clear();
        this._messaging.clear();
        this._inventory.clear();
        if (this._currentScreen == this.Screen.playScreen) {
            this.writeMessages();
            this.writeStats();
        }
        this._currentScreen.render(this._display, this);
    }
    startCountDown() {
        let counter = 1;
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                // code here will run when the counter reaches zero.
                if (!this.timer)
                    clearInterval(interval);
                else
                    counter = 1;
                this.refresh();
            }
        }, 50);
    }
}
exports.Game = Game;
window.onload = function () {
    let game = new Game();
    // Initialize the game
    let fighter = new fighter_1.Fighter(100, 1, 4, 0);
    let player = new entity_1.Entity(60, 45, new glyph_1.Glyph('@', [0, 0, 0], [0, 191, 255]), 'The Princess', 1, true, 1, 1, fighter, undefined, true);
    player.fighter.unspentPoints = 2;
    game._player = player;
    game._entities = [game._player];
    //let knife = new Knife();
    //knife.owner = game._player;
    //game._player.equipment = CreateItem('knife', game._player.x, game._player.y).item;
    game._player.equipStart(createItens_1.CreateItem('knife', game._player.x, game._player.y));
    game._player.equipment.owner = game._player;
    game.init();
    // Add the container to our HTML page
    let doc = document.getElementById("game");
    doc.appendChild(game.getDisplay().getContainer());
    let inv = document.getElementById("menu");
    inv.appendChild(game.getInventory().getContainer());
    let msg = document.getElementById("info");
    msg.appendChild(game.getMessaging().getContainer());
    // Load the start screen
    game.startCountDown();
    game.switchScreen(game.Screen.startScreen);
};


/***/ }),

/***/ "./src/glyph.ts":
/*!**********************!*\
  !*** ./src/glyph.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Glyph {
    constructor(char, background, foreground) {
        this.char = ' ';
        this.foreground = [255, 255, 255];
        this.background = [0, 0, 0];
        this.char = char;
        this.background = background;
        this.foreground = foreground;
    }
}
exports.Glyph = Glyph;


/***/ }),

/***/ "./src/helper/createDamageBlock.ts":
/*!*****************************************!*\
  !*** ./src/helper/createDamageBlock.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = __webpack_require__(/*! ../entity */ "./src/entity.ts");
const damageBlock_1 = __webpack_require__(/*! ../components/damageBlock */ "./src/components/damageBlock.ts");
const glyph_1 = __webpack_require__(/*! ../glyph */ "./src/glyph.ts");
function createDamageBlock(creator, x, y, name, multi, glyph = '╳', timeout = 6) {
    let dir = creator.face;
    let dmg = new damageBlock_1.DamageBlock(multi, timeout);
    let attack = null;
    dmg.owner = creator;
    if (creator.player)
        attack = new entity_1.Entity(x, y, new glyph_1.Glyph(glyph, [0, 0, 0], [creator.glyph.foreground[1], creator.glyph.foreground[1] / 3, creator.glyph.foreground[2] / 3]), name, 1, false, 0, 5, undefined, undefined, false, undefined, undefined, dmg);
    else
        attack = new entity_1.Entity(x, y, new glyph_1.Glyph(glyph, [0, 0, 0], [150, creator.glyph.foreground[1] / 3, creator.glyph.foreground[2] / 3]), name, 1, false, 0, 5, undefined, undefined, false, undefined, undefined, dmg);
    attack._map = creator._map;
    attack.damage.startCountDown();
    attack.owner = creator;
    creator._map._entities.push(attack);
}
exports.createDamageBlock = createDamageBlock;


/***/ }),

/***/ "./src/helper/createItens.ts":
/*!***********************************!*\
  !*** ./src/helper/createItens.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = __webpack_require__(/*! ../entity */ "./src/entity.ts");
const knife_1 = __webpack_require__(/*! ../content/itens/knife */ "./src/content/itens/knife.ts");
const glyph_1 = __webpack_require__(/*! ../glyph */ "./src/glyph.ts");
const sword_1 = __webpack_require__(/*! ../content/itens/sword */ "./src/content/itens/sword.ts");
const spear_1 = __webpack_require__(/*! ../content/itens/spear */ "./src/content/itens/spear.ts");
const shield_1 = __webpack_require__(/*! ../content/itens/shield */ "./src/content/itens/shield.ts");
const potion_1 = __webpack_require__(/*! ../content/itens/potion */ "./src/content/itens/potion.ts");
const firerod_1 = __webpack_require__(/*! ../content/itens/firerod */ "./src/content/itens/firerod.ts");
const dagger_1 = __webpack_require__(/*! ../content/itens/dagger */ "./src/content/itens/dagger.ts");
// function ItemFactory(name: string, x: number, y): Entity{
//     return new Entity(x, y, new Glyph('Ϯ', [0,0,0], [204, 200, 0]), 'knife', 1, false, 5, 2, undefined, undefined, false, item_component);
// }
function CreateItem(item_choice, x, y) {
    if (item_choice == 'potion') {
        let item_component = new potion_1.Potion();
        let item = new entity_1.Entity(x, y, new glyph_1.Glyph('ზ', [0, 0, 0], [50, 200, 50]), item_component.name, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    if (item_choice == 'knife') {
        let item_component = new knife_1.Knife();
        let item = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'sword') {
        let item_component = new sword_1.Sword();
        let item = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'spear') {
        let item_component = new spear_1.Spear();
        let item = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'dagger') {
        let item_component = new dagger_1.Dagger();
        let item = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'firerod') {
        let item_component = new firerod_1.Firerod();
        let item = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
    else if (item_choice == 'shield') {
        let item_component = new shield_1.Shield();
        console.log(item_component);
        let item = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        item.item.glyph = item.glyph;
        return item;
    }
}
exports.CreateItem = CreateItem;
function CreateDropItem(item, x, y) {
    console.log(item);
    let item_choice = item.name;
    if (item_choice == 'knife') {
        let item_component = new knife_1.Knife(item);
        let itemDrop = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'sword') {
        let item_component = new sword_1.Sword(item);
        let itemDrop = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'spear') {
        let item_component = new spear_1.Spear(item);
        let itemDrop = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'dagger') {
        let item_component = new dagger_1.Dagger(item);
        let itemDrop = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'firerod') {
        let item_component = new firerod_1.Firerod(item);
        let itemDrop = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
    else if (item_choice == 'shield') {
        let item_component = new shield_1.Shield(item);
        let itemDrop = new entity_1.Entity(x, y, item_component.glyph, item_component.fullname, 1, false, 5, 2, undefined, undefined, false, item_component);
        itemDrop.item.glyph = item.glyph;
        return itemDrop;
    }
}
exports.CreateDropItem = CreateDropItem;


/***/ }),

/***/ "./src/helper/createMonters.ts":
/*!*************************************!*\
  !*** ./src/helper/createMonters.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = __webpack_require__(/*! ../entity */ "./src/entity.ts");
const fungi_1 = __webpack_require__(/*! ../content/monsters/fungi */ "./src/content/monsters/fungi.ts");
const orc_1 = __webpack_require__(/*! ../content/monsters/orc */ "./src/content/monsters/orc.ts");
const troll_1 = __webpack_require__(/*! ../content/monsters/troll */ "./src/content/monsters/troll.ts");
const glyph_1 = __webpack_require__(/*! ../glyph */ "./src/glyph.ts");
const fighter_1 = __webpack_require__(/*! ../components/fighter */ "./src/components/fighter.ts");
const ranger_1 = __webpack_require__(/*! ../content/monsters/ranger */ "./src/content/monsters/ranger.ts");
const wyvern_1 = __webpack_require__(/*! ../content/monsters/wyvern */ "./src/content/monsters/wyvern.ts");
const dragon_1 = __webpack_require__(/*! ../content/monsters/dragon */ "./src/content/monsters/dragon.ts");
const randperc_1 = __webpack_require__(/*! ./randperc */ "./src/helper/randperc.ts");
function CreateMonster(monster_choice, x, y) {
    let qHp = randperc_1.randperc(100) + 0.2;
    let qAtk = randperc_1.randperc(50);
    let qDef = randperc_1.randperc(30);
    let qExp = qHp + (qAtk * 3) + (qDef * 5);
    qExp = qExp / 3;
    if (monster_choice == 'fungi') {
        let fighter_component = new fighter_1.Fighter(30 + 30 * qHp, 2 + 2 * qDef, 4 + 4 * qAtk, 25 + 25 * qExp);
        let ai_component = new fungi_1.Fungi();
        let monster = new entity_1.Entity(x, y, new glyph_1.Glyph('f', [0, 0, 0], [0, 200, 0]), 'Fungi', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'orc') {
        let fighter_component = new fighter_1.Fighter(40 + 40 * qHp, 2 + 2 * qDef, 4 + 4 * qAtk, 35 + 35 * qExp);
        let ai_component = new orc_1.Orc();
        let monster = new entity_1.Entity(x, y, new glyph_1.Glyph('o', [0, 0, 0], [0, 128, 0]), 'Orc', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'troll') {
        let fighter_component = new fighter_1.Fighter(90 + 90 * qHp, 3 + 3 * qDef, 8 + 8 * qAtk, 60 + 60 * qExp);
        let ai_component = new troll_1.Troll();
        let monster = new entity_1.Entity(x, y, new glyph_1.Glyph('t', [0, 0, 0], [128, 0, 128]), 'Troll', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'wyvern') {
        let fighter_component = new fighter_1.Fighter(30 + 30 * qHp, 2 + 2 * qDef, 5 + 5 * qAtk, 20 + 20 * qExp);
        let ai_component = new wyvern_1.Wyvern();
        let monster = new entity_1.Entity(x, y, new glyph_1.Glyph('w', [0, 0, 0], [148, 0, 211]), 'Wyvern', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'ranger') {
        let fighter_component = new fighter_1.Fighter(40 + 40 * qHp, 3 + 3 * qDef, 8 + 8 * qAtk, 40 + 40 * qExp);
        let ai_component = new ranger_1.Ranger(); //Ranger()
        let monster = new entity_1.Entity(x, y, new glyph_1.Glyph('r', [0, 0, 0], [233, 150, 122]), 'Ranger', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
    else if (monster_choice == 'dragon') {
        let fighter_component = new fighter_1.Fighter(100 + 100 * qHp, 6 + 6 * qDef, 14 + 14 * qAtk, 300 + 300 * qExp);
        let ai_component = new dragon_1.Dragon();
        let monster = new entity_1.Entity(x, y, new glyph_1.Glyph('Đ', [0, 0, 0], [220, 20, 60]), 'Dragon', 1, true, 5, 2, fighter_component, ai_component);
        return monster;
    }
}
exports.CreateMonster = CreateMonster;


/***/ }),

/***/ "./src/helper/deathFunction.ts":
/*!*************************************!*\
  !*** ./src/helper/deathFunction.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glyph_1 = __webpack_require__(/*! ../glyph */ "./src/glyph.ts");
function deathFunction(entity) {
    if (entity.fighter != undefined) {
        let deadG = new glyph_1.Glyph('%', [0, 0, 0], [139, 0, 0]);
        entity.glyph = deadG;
        entity.blocks = false;
        entity.render_order = 99;
        entity.fighter.status = 'dead';
    }
    if (entity.damage != undefined) {
        entity.damage.expire = true;
    }
}
exports.deathFunction = deathFunction;


/***/ }),

/***/ "./src/helper/dungeonMaze.ts":
/*!***********************************!*\
  !*** ./src/helper/dungeonMaze.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const randint_1 = __webpack_require__(/*! ./randint */ "./src/helper/randint.ts");
function ones(maxx, maxy) {
    let array = [[1]];
    for (let x = 0; x < maxx; x++) {
        // Create the nested array for the y values
        array.push([]);
        // Add all the tiles
        for (let y = 0; y < maxy; y++) {
            array[x].push(1);
        }
    }
    return array;
}
function randomRoom(maxx, maxy) {
    let room;
    let roomsizex = randint_1.randint(4, 16);
    while (roomsizex % 2 == 0)
        roomsizex -= 1;
    roomsizex = (roomsizex * 2) - 1;
    let roomsizey = randint_1.randint(4, 14);
    while (roomsizey % 2 == 0)
        roomsizey -= 1;
    roomsizey = (roomsizey * 2) - 1;
    let roomx = randint_1.randint(5, maxx - roomsizex - 1);
    while (roomx % 4 != 0)
        roomx += 1;
    roomx += 1;
    let roomy = randint_1.randint(5, maxy - roomsizey - 1);
    while (roomy % 4 != 0)
        roomy += 1;
    roomy += 1;
    room = {
        x: roomx,
        y: roomy,
        sizex: roomsizex,
        sizey: roomsizey
    };
    return room;
}
function digHere(here, map) {
    let x = here.x;
    let y = here.y;
    switch (here.past) {
        case 'N':
            if (map[x - 1][y] != 0 && map[x - 1][y - 1] != 0 && map[x][y - 1] != 0 && map[x + 2][y - 1] != 0 && map[x + 2][y] != 0) {
                map[x][y] = 0;
                map[x + 1][y] = 0;
                map[x][y + 1] = 0;
                map[x + 1][y + 1] = 0;
            }
            else {
                //map[x][y] = 2;
            }
            break;
        case 'S':
            if (map[x - 1][y] != 0 && map[x - 1][y + 2] != 0 && map[x][y + 2] != 0 && map[x + 2][y + 2] != 0 && map[x + 2][y] != 0) {
                map[x][y] = 0;
                map[x + 1][y] = 0;
                map[x][y + 1] = 0;
                map[x + 1][y + 1] = 0;
            }
            else {
                //map[x][y] = 2;
            }
            break;
        case 'E':
            if (map[x][y - 1] != 0 && map[x + 2][y - 1] != 0 && map[x + 2][y] != 0 && map[x + 2][y + 2] != 0 && map[x][y + 2] != 0) {
                map[x][y] = 0;
                map[x + 1][y] = 0;
                map[x][y + 1] = 0;
                map[x + 1][y + 1] = 0;
            }
            else {
                //map[x][y] = 2;
            }
            break;
        case 'W':
            if (map[x][y - 1] != 0 && map[x - 1][y - 1] != 0 && map[x - 1][y] != 0 && map[x - 1][y + 2] != 0 && map[x][y + 2] != 0) {
                map[x][y] = 0;
                map[x + 1][y] = 0;
                map[x][y + 1] = 0;
                map[x + 1][y + 1] = 0;
            }
            else {
                //map[x][y] = 2;
            }
            break;
        default:
            //map[x][y] = 2;
            break;
    }
}
function testDirections(here, map, path, maxx, maxy) {
    let next = [];
    let nextCandidates = [];
    let y = here.y;
    let x = here.x;
    if (y + 4 < maxy)
        if (map[x][y + 4] == 1) {
            if (map[x - 1][y + 3] == 1 && map[x + 2][y + 3] == 1)
                nextCandidates.push({
                    x: x,
                    y: y + 2,
                    dir: 'S',
                    past: 'S'
                });
        }
    if (x + 4 < maxx)
        if (map[x + 4][y] == 1) {
            if (map[x + 3][y - 1] == 1 && map[x + 3][y + 2] == 1)
                nextCandidates.push({
                    x: x + 2,
                    y: y,
                    dir: 'E',
                    past: 'E'
                });
        }
    if (y - 3 > 0)
        if (map[x][y - 3] == 1) {
            if (map[x - 1][y - 3] == 1 && map[x + 2][y - 3] == 1)
                nextCandidates.push({
                    x: x,
                    y: y - 2,
                    dir: 'N',
                    past: 'N'
                });
        }
    if (x - 3 > 0)
        if (map[x - 3][y] == 1) {
            if (map[x - 3][y + 2] == 1 && map[x - 3][y - 1] == 1)
                nextCandidates.push({
                    x: x - 2,
                    y: y,
                    dir: 'W',
                    past: 'W'
                });
        }
    if (nextCandidates.length != 0) {
        if (nextCandidates.length == 1) {
            next.push(nextCandidates[0]);
        }
        else {
            let selected = randint_1.randint(0, nextCandidates.length - 1);
            let priority = (selected + 1) % nextCandidates.length;
            while (priority != selected) {
                next.push(nextCandidates[priority]);
                priority = (priority + 1) % nextCandidates.length;
            }
            next.push(nextCandidates[selected]);
        }
    }
    else {
        map[x][y] = 2;
        // map[x+1][y] = 2;
        // map[x+1][y+1] = 2;
        // map[x][y+1] = 2;
    }
    return next;
}
function digFront(here, pathFRONT, map) {
    let next;
    if (here.dir == 'N') {
        next = {
            x: here.x,
            y: here.y - 2,
            dir: 'z',
            past: 'N'
        };
    }
    if (here.dir == 'E') {
        next = {
            x: here.x + 2,
            y: here.y,
            dir: 'z',
            past: 'E'
        };
    }
    if (here.dir == 'S') {
        next = {
            x: here.x,
            y: here.y + 2,
            dir: 'z',
            past: 'S'
        };
    }
    if (here.dir == 'W') {
        next = {
            x: here.x - 2,
            y: here.y,
            dir: 'z',
            past: 'W'
        };
    }
    return next;
}
function digUp(pathGO, map, maxx, maxy) {
    let db = 0;
    while (pathGO.length > 0) {
        let here = pathGO.pop();
        if (map[here.x][here.y] != 0) {
            digHere(here, map);
            if (((here.x - 1) % 4 == 0) && ((here.y - 1) % 4 == 0)) {
                let nxt = testDirections(here, map, pathGO, maxx, maxy);
                nxt.forEach(element => {
                    pathGO.push(element);
                });
            }
            else {
                pathGO.push(digFront(here, pathGO, map));
            }
            db += 1;
            if (db == 10000) {
                const pate = pathGO;
                pathGO = [];
            }
            ;
        }
    }
}
function digBack(here, map, maxx, maxy) {
    let digHere = [];
    digHere.push(here);
    while (digHere.length == 1) {
        here = digHere.pop();
        let next = {
            x: here.x,
            y: here.y
        };
        let walls = 0;
        if (here.x + 2 < maxx) {
            if (map[here.x + 2][here.y] >= 1)
                walls += 1;
            else {
                next.x = here.x + 2;
                digHere.push(next);
            }
        }
        else
            walls += 1;
        if (here.x - 2 > 0) {
            if (map[here.x - 2][here.y] >= 1)
                walls += 1;
            else {
                next.x = here.x - 2;
                digHere.push(next);
            }
        }
        else
            walls += 1;
        if (here.y + 2 < maxy) {
            if (map[here.x][here.y + 2] >= 1)
                walls += 1;
            else {
                next.y = here.y + 2;
                digHere.push(next);
            }
        }
        else
            walls += 1;
        if (here.y - 2 > 0) {
            if (map[here.x][here.y - 2] >= 1)
                walls += 1;
            else {
                next.y = here.y - 2;
                digHere.push(next);
            }
        }
        else
            walls += 1;
        if (walls > 2) {
            map[here.x][here.y] = 1;
            map[here.x + 1][here.y] = 1;
            map[here.x][here.y + 1] = 1;
            map[here.x + 1][here.y + 1] = 1;
        }
    }
}
function openWalls(roomsInGame, map, maxx, maxy) {
    let directions = [];
    let rooms = roomsInGame.length;
    for (let i = 0; i < rooms; i++) {
        if (Math.random() * 100 > 70)
            directions.push('n');
        if (Math.random() * 100 > 70)
            directions.push('e');
        if (Math.random() * 100 > 70)
            directions.push('s');
        if (Math.random() * 100 > 70)
            directions.push('w');
        if (directions.length == 0)
            directions.push('z');
        while (directions.length > 0) {
            let dir = directions.pop();
            let candidates = [];
            switch (dir) {
                case 'n':
                    if (roomsInGame[i].y - 3 > 0) {
                        for (let roomTop = 0; roomTop < roomsInGame[i].sizex; roomTop += 2) {
                            if (map[roomsInGame[i].x + roomTop][roomsInGame[i].y - 3] < 1) {
                                candidates.push(roomTop);
                                //map[roomsInGame[i].x + roomTop][roomsInGame[i].y-3] = 1
                            }
                            else {
                                if (candidates.length > 0) {
                                    let x = randint_1.randint(0, candidates.length - 1);
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y - 1] = 0;
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y - 1] = 0;
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y - 2] = 0;
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y - 2] = 0;
                                    candidates = [];
                                }
                            }
                        }
                        if (candidates.length > 0) {
                            let x = randint_1.randint(0, candidates.length - 1);
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y - 1] = 0;
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y - 1] = 0;
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y - 2] = 0;
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y - 2] = 0;
                            candidates = [];
                        }
                    }
                    break;
                case 'e':
                    if (roomsInGame[i].x + roomsInGame[i].sizex + 3 < maxx) {
                        for (let roomRight = 0; roomRight < roomsInGame[i].sizey; roomRight += 2) {
                            if (map[roomsInGame[i].x + roomsInGame[i].sizex + 3][roomsInGame[i].y + roomRight] < 1) {
                                candidates.push(roomRight);
                                //map[roomsInGame[i].x + roomsInGame[i].sizex + 3][roomsInGame[i].y + roomRight] = 2
                            }
                            else {
                                if (candidates.length > 0) {
                                    let x = randint_1.randint(0, candidates.length - 1);
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x]] = 0;
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x]] = 0;
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x] + 1] = 0;
                                    map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x] + 1] = 0;
                                    candidates = [];
                                }
                            }
                        }
                        if (candidates.length > 0) {
                            let x = randint_1.randint(0, candidates.length - 1);
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x]] = 0;
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x]] = 0;
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 1][roomsInGame[i].y + candidates[x] + 1] = 0;
                            map[roomsInGame[i].x + roomsInGame[i].sizex + 2][roomsInGame[i].y + candidates[x] + 1] = 0;
                            candidates = [];
                        }
                    }
                    break;
                case 's':
                    if (roomsInGame[i].y + 3 < maxy) {
                        for (let roomBot = 0; roomBot < roomsInGame[i].sizex; roomBot += 2) {
                            if (map[roomsInGame[i].x + roomBot][roomsInGame[i].y + 3 + roomsInGame[i].sizey] < 1) {
                                candidates.push(roomBot);
                                //map[roomsInGame[i].x + roomBot][roomsInGame[i].y+3 + roomsInGame[i].sizey] = 2
                            }
                            else {
                                if (candidates.length > 0) {
                                    let x = randint_1.randint(0, candidates.length - 1);
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y + 1 + roomsInGame[i].sizey] = 0;
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y + 1 + roomsInGame[i].sizey] = 0;
                                    map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y + 2 + roomsInGame[i].sizey] = 0;
                                    map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y + 2 + roomsInGame[i].sizey] = 0;
                                    candidates = [];
                                }
                            }
                        }
                        if (candidates.length > 0) {
                            let x = randint_1.randint(0, candidates.length - 1);
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y + 1 + roomsInGame[i].sizey] = 0;
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y + 1 + roomsInGame[i].sizey] = 0;
                            map[roomsInGame[i].x + candidates[x]][roomsInGame[i].y + 2 + roomsInGame[i].sizey] = 0;
                            map[roomsInGame[i].x + candidates[x] + 1][roomsInGame[i].y + 2 + roomsInGame[i].sizey] = 0;
                            candidates = [];
                        }
                    }
                    break;
                case 'w':
                    if (roomsInGame[i].x - 3 > 0) {
                        for (let roomLeft = 0; roomLeft < roomsInGame[i].sizey; roomLeft += 2) {
                            if (map[roomsInGame[i].x - 3][roomsInGame[i].y + roomLeft] < 1) {
                                candidates.push(roomLeft);
                                //map[roomsInGame[i].x - 3][roomsInGame[i].y + roomLeft] = 2
                            }
                            else {
                                if (candidates.length > 0) {
                                    let x = randint_1.randint(0, candidates.length - 1);
                                    map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x]] = 0;
                                    map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x]] = 0;
                                    map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x] + 1] = 0;
                                    map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x] + 1] = 0;
                                    candidates = [];
                                }
                            }
                        }
                        if (candidates.length > 0) {
                            let x = randint_1.randint(0, candidates.length - 1);
                            map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x]] = 0;
                            map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x]] = 0;
                            map[roomsInGame[i].x - 1][roomsInGame[i].y + candidates[x] + 1] = 0;
                            map[roomsInGame[i].x - 2][roomsInGame[i].y + candidates[x] + 1] = 0;
                            candidates = [];
                        }
                    }
                    break;
                default:
                    i--;
                    break;
            }
        }
    }
}
function generateDunMaze(maxx, maxy) {
    let map = ones(maxx, maxy);
    let rooms = 400;
    let roomsInGame = [];
    let path = [];
    let deadEnds = [];
    let reject = 0;
    for (let i = 0; i < rooms; i++) {
        let room = randomRoom(maxx, maxy);
        for (let ri = room.x - 1; ri <= room.x + room.sizex; ri++) {
            for (let rj = room.y - 1; rj <= room.y + room.sizey; rj++) {
                if (ri > maxx || rj > maxy)
                    reject = 1;
                else if (map[ri][rj] == 0) {
                    ri = maxx;
                    reject = 1;
                }
            }
        }
        if (reject != 1) {
            roomsInGame.push(room);
            for (let ri = room.x; ri <= room.x + room.sizex; ri++) {
                for (let rj = room.y; rj <= room.y + room.sizey; rj++) {
                    map[ri][rj] = 0;
                }
            }
        }
        reject = 0;
    }
    for (let i = 1; i < maxx; i = i + 4) {
        for (let j = 1; j < maxy; j = j + 4) {
            if (map[i][j] == 1 && map[i + 1][j] == 1 && map[i][j + 1] == 1 && map[i + 1][j + 1] == 1) { // coordenada atual
                path.push({
                    x: i,
                    y: j,
                    dir: 'z',
                    past: 'S'
                });
                digUp(path, map, maxx, maxy);
            }
            if (map[i][j] == 2)
                deadEnds.push({ x: i, y: j });
        }
    }
    openWalls(roomsInGame, map, maxx, maxy);
    removeDeadEnds(deadEnds, map, maxx, maxy);
    return map;
}
exports.generateDunMaze = generateDunMaze;
function removeDeadEnds(deadEnds, map, maxx, maxy) {
    deadEnds.push({ x: 1, y: 1 });
    let deadlen = deadEnds.length;
    let count = 0;
    for (let i = 0; i < deadlen; i = i + 1) {
        let walls = 0;
        if (deadEnds[i].x + 2 < maxx) {
            if (map[deadEnds[i].x + 2][deadEnds[i].y] == 1)
                walls += 1;
        }
        else
            walls += 1;
        if (deadEnds[i].x - 2 > 0) {
            if (map[deadEnds[i].x - 2][deadEnds[i].y] == 1)
                walls += 1;
        }
        else
            walls += 1;
        if (deadEnds[i].y + 2 < maxy) {
            if (map[deadEnds[i].x][deadEnds[i].y + 2] == 1)
                walls += 1;
        }
        else
            walls += 1;
        if (deadEnds[i].y - 2 > 0) {
            if (map[deadEnds[i].x][deadEnds[i].y - 2] == 1)
                walls += 1;
        }
        else
            walls += 1;
        if (walls > 2) {
            count += 1;
            digBack(deadEnds[i], map, maxx, maxy);
            map[deadEnds[i].x][deadEnds[i].y] = 1;
        }
        else {
            map[deadEnds[i].x][deadEnds[i].y] = 0;
        }
    }
}


/***/ }),

/***/ "./src/helper/qualityGenerator.ts":
/*!****************************************!*\
  !*** ./src/helper/qualityGenerator.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const randperc_1 = __webpack_require__(/*! ./randperc */ "./src/helper/randperc.ts");
function qualityGenerator(type) {
    let item = {
        power_bonus: 0,
        skill_bonus: 0,
        defense_bonus: 0,
        max_cooldown: 0,
        prefix: '',
        alpha: 0,
    };
    item.power_bonus = randperc_1.randperc(30);
    item.skill_bonus = randperc_1.randperc(30);
    item.defense_bonus = randperc_1.randperc(30);
    item.max_cooldown = randperc_1.randperc(40);
    let quality = item.power_bonus * 100 + item.skill_bonus * 100 + item.defense_bonus * 100 + item.max_cooldown * 100;
    if (quality <= -60)
        item.prefix = 'crappy ';
    else if (quality < -30)
        item.prefix = 'inferior ';
    else if (quality < -15)
        item.prefix = 'weak ';
    else if (quality < 15)
        item.prefix = '';
    else if (quality < 30)
        item.prefix = 'strong ';
    else if (quality < 45)
        item.prefix = 'superior ';
    else if (quality < 60)
        item.prefix = 'legendary ';
    else if (quality >= 60)
        item.prefix = 'infinite ';
    item.alpha = 180 + 180 * Math.ceil(quality / 100);
    if (type == "main") {
        if (item.power_bonus * 100 > 13)
            item.prefix += 'fierce ';
        else if (item.skill_bonus * 100 > 13)
            item.prefix += 'skillful ';
        else if (item.defense_bonus * 100 > 13)
            item.prefix += 'parry ';
        else if (item.max_cooldown * 100 > 17)
            item.prefix += 'quick ';
    }
    if (type == "sub") {
        if (item.power_bonus * 100 > 13)
            item.prefix += 'empowered ';
        else if (item.skill_bonus * 100 > 13)
            item.prefix += 'enchanted ';
        else if (item.defense_bonus * 100 > 13)
            item.prefix += 'vanguard ';
        else if (item.max_cooldown * 100 > 17)
            item.prefix += 'lightweight ';
    }
    return item;
}
exports.qualityGenerator = qualityGenerator;


/***/ }),

/***/ "./src/helper/randFromLevel.ts":
/*!*************************************!*\
  !*** ./src/helper/randFromLevel.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const randint_1 = __webpack_require__(/*! ./randint */ "./src/helper/randint.ts");
function from_dungeon_level(table, dungeon_level) {
    for (let x = table.length - 1; x > -1; x--) {
        if (dungeon_level >= table[x][1])
            return table[x][0];
    }
    return 0;
}
exports.from_dungeon_level = from_dungeon_level;
function random_choice_index(chances) {
    let sum = chances.reduce((a, b) => a + b, 0);
    let random_chance = randint_1.randint(0, sum);
    let running_sum = 0;
    let choice = 0;
    for (const n of chances) {
        running_sum += n;
        if (random_chance <= running_sum)
            return choice;
        choice += 1;
    }
    return 0;
}
exports.random_choice_index = random_choice_index;
function random_choice_from_dict(choice_dict) {
    let chances = [];
    let choices = [];
    for (let key in choice_dict) {
        choices.push(key);
        chances.push(choice_dict[key]);
    }
    return choices[random_choice_index(chances)];
}
exports.random_choice_from_dict = random_choice_from_dict;


/***/ }),

/***/ "./src/helper/randint.ts":
/*!*******************************!*\
  !*** ./src/helper/randint.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function randint(floor, ceil) {
    let t = (Math.random() * (ceil - floor + 1)) + floor - 0.5;
    return Math.round(t);
}
exports.randint = randint;


/***/ }),

/***/ "./src/helper/randperc.ts":
/*!********************************!*\
  !*** ./src/helper/randperc.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function randperc(perc) {
    /// Return -(0.perc/2) ~ +(0.perc/2)
    let t = (Math.random() * (perc)) - Math.ceil(perc / 2);
    return (t / 100);
}
exports.randperc = randperc;


/***/ }),

/***/ "./src/map.ts":
/*!********************!*\
  !*** ./src/map.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tiles_1 = __webpack_require__(/*! ./tiles */ "./src/tiles.ts");
const glyph_1 = __webpack_require__(/*! ./glyph */ "./src/glyph.ts");
const entity_1 = __webpack_require__(/*! ./entity */ "./src/entity.ts");
const randFromLevel_1 = __webpack_require__(/*! ./helper/randFromLevel */ "./src/helper/randFromLevel.ts");
const randint_1 = __webpack_require__(/*! ./helper/randint */ "./src/helper/randint.ts");
const createMonters_1 = __webpack_require__(/*! ./helper/createMonters */ "./src/helper/createMonters.ts");
const lib_1 = __webpack_require__(/*! ../lib */ "./lib/index.js");
const createItens_1 = __webpack_require__(/*! ./helper/createItens */ "./src/helper/createItens.ts");
const monsterProbabilities_1 = __webpack_require__(/*! ./settings/monsterProbabilities */ "./src/settings/monsterProbabilities.ts");
const itemProbabilities_1 = __webpack_require__(/*! ./settings/itemProbabilities */ "./src/settings/itemProbabilities.ts");
const exit_1 = __webpack_require__(/*! ./content/itens/exit */ "./src/content/itens/exit.ts");
class Map {
    constructor(width, height) {
        this._width = width;
        this._height = height;
        this._tiles = [];
        this.dungeon_level = 1;
        this._entities = [];
    }
    getTile(x, y) {
        let emptyTile = new tiles_1.Tile('empty', ' ', [0, 0, 0], [255, 255, 255]);
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return emptyTile;
        }
        else {
            return this._tiles[x][y] || emptyTile;
        }
    }
    getMovableArea(x, x2, y, y2) {
        let moveable = true;
        for (let i = x; i <= x2; i++) {
            for (let j = y; j <= y2; j++) {
                if (!this.getTile(i, j)._isWalkable) {
                    moveable = false;
                }
            }
        }
        return moveable;
    }
    getEntitiesAt(x, x2, y, y2) {
        let targets = [];
        for (let index = 0; index < this._entities.length; index++) {
            for (let i = x; i <= x2; i++) {
                for (let j = y; j <= y2; j++) {
                    if (this._entities[index].x == i && this._entities[index].y == j && this._entities[index].blocks == true) {
                        targets.push(this._entities[index]);
                    }
                }
            }
        }
        return targets;
    }
    getItemAt(x, x2, y, y2) {
        let targets = [];
        for (let index = 0; index < this._entities.length; index++) {
            for (let i = x; i <= x2; i++) {
                for (let j = y; j <= y2; j++) {
                    if (this._entities[index].x == i && this._entities[index].y == j
                        && this._entities[index].item != undefined
                        && this._entities[index].item.expire == false) {
                        targets.push(this._entities[index]);
                    }
                    if (this._entities[index].x == i && this._entities[index].y == j
                        && this._entities[index].stairs != undefined) {
                        targets.push(this._entities[index]);
                    }
                }
            }
        }
        return targets;
    }
    getPlayer() {
        let player;
        for (let index = 0; index < this._entities.length; index++) {
            if (this._entities[index].glyph.char == '@')
                player = this._entities[index];
        }
        return player;
    }
    addEntityToMap() {
        let max_monsters_per_room = randFromLevel_1.from_dungeon_level([[30, 1], [40, 4], [40, 6]], this.dungeon_level);
        let max_items_per_room = randFromLevel_1.from_dungeon_level([[10, 1], [15, 4]], this.dungeon_level);
        let number_of_monsters = randint_1.randint(Math.ceil(max_monsters_per_room / (1.5)), max_monsters_per_room);
        let number_of_items = randint_1.randint(Math.ceil(max_monsters_per_room / 2), max_items_per_room);
        let monster_chances = monsterProbabilities_1.monsterProbabilities(this.dungeon_level);
        let item_chances = itemProbabilities_1.itemProbabilities(this.dungeon_level);
        let playerStart = false;
        for (let index = 0; index < number_of_monsters; index++) {
            let x = randint_1.randint(0, this._width - 1);
            let y = randint_1.randint(0, this._height - 1);
            let emptyspace = true;
            for (let index = 0; index < this._entities.length; index++) {
                if (this._entities[index].x == x && this._entities[index].y == y) {
                    emptyspace = false;
                }
            }
            if (this.getTile(x, y)._isWalkable == false) {
                emptyspace = false;
            }
            if (emptyspace == true) {
                let monster_choice = randFromLevel_1.random_choice_from_dict(monster_chances);
                let q = createMonters_1.CreateMonster(monster_choice, x, y);
                //console.log(q);
                q._map = this;
                this._entities.push(q);
            }
            else {
                index -= 1;
            }
        }
        for (let index = 0; index < number_of_items; index++) {
            let x = randint_1.randint(0, this._width - 1);
            let y = randint_1.randint(0, this._height - 1);
            let emptyspace = true;
            for (let index = 0; index < this._entities.length; index++) {
                if (this._entities[index].x == x && this._entities[index].y == y) {
                    emptyspace = false;
                }
            }
            if (this.getTile(x, y)._isWalkable == false) {
                emptyspace = false;
            }
            if (emptyspace == true) {
                let item_choice = randFromLevel_1.random_choice_from_dict(item_chances);
                let q;
                if (index == 1)
                    q = createItens_1.CreateItem("potion", 61, 45);
                else
                    q = createItens_1.CreateItem(item_choice, x, y);
                console.log(item_choice + '- ' + x + ' ' + y);
                console.log(q);
                q._map = this;
                this._entities.push(q);
            }
            else {
                index -= 1;
            }
        }
        let xexit = randint_1.randint(0, this._width - 1);
        let yexit = randint_1.randint(0, this._height - 1);
        let emptyspace = true;
        while (emptyspace) {
            console.log('exit: ' + xexit + ' ' + yexit);
            let dist = Math.sqrt(Math.pow((this._entities[0].x - xexit), 2) + Math.pow((this._entities[0].y - yexit), 2));
            if (dist > 30 && this.getTile(xexit, yexit)._isWalkable)
                emptyspace = false;
            else {
                xexit = randint_1.randint(0, this._width - 1);
                yexit = randint_1.randint(0, this._height - 1);
            }
        }
        let exit = new exit_1.Exit(this);
        let newex = new entity_1.Entity(xexit, yexit, new glyph_1.Glyph("⍝", [0, 0, 0], [20, 150, 200]), "saida", 1, false, -1, 2, undefined, undefined, false, undefined, undefined, undefined, exit);
        this._entities.push(newex);
        return null;
    }
    lightPasses(x, y) {
        return this._tiles[x][y]._blocksLight;
    }
    setupFov(topleftX, topleftY) {
        let fov = new lib_1.FOV.PreciseShadowcasting((x, y) => {
            // x = x <= 0 ? this._entities[0].sight+1 : x >= this._width ? this._width-this._entities[0].sight-1 : x;
            // y = y <= 0 ? this._entities[0].sight+1 : y >= this._height ? this._height-this._entities[0].sight-1 : y;
            if (x >= this._width)
                x = this._width - 1;
            if (x <= 0)
                x = 0;
            if (y >= this._height)
                y = this._height - 1;
            if (y <= 0)
                y = 0;
            return !this._tiles[x][y]._blocksLight;
        });
        fov.compute(this._entities[0].x, this._entities[0].y, this._entities[0].sight, (x, y, r, visibility) => {
            let dx = Math.pow(this._entities[0].x - x, 2);
            let dy = Math.pow(this._entities[0].y - y, 2);
            let dist = Math.sqrt(dx + dy);
            if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
                return;
            }
            if (visibility == 0) {
                this._tiles[x][y].visibility = visibility;
            }
            else {
                let fogRGB = this._tiles[x][y].baseTile.foreground;
                let perc = visibility + 0.1;
                this._tiles[x][y].visibility = visibility;
                if (dist <= this._entities[0].sight - 2) {
                    if (dist <= this._entities[0].sight / 2)
                        this._tiles[x][y].visited = true;
                    perc = 1 - ((dist) / this._entities[0].sight) + 0.2;
                    this._tiles[x][y].tile.foreground = [Math.floor(fogRGB[0] * perc), Math.floor(fogRGB[1] * perc), Math.floor(fogRGB[2] * perc)];
                }
                else {
                    this._tiles[x][y].tile.foreground = [Math.floor(fogRGB[0] * 0.2), Math.floor(fogRGB[1] * 0.2), Math.floor(fogRGB[2] * 0.2)];
                }
                this._display.draw(x - topleftX, y - topleftY, this._tiles[x][y].tile.char, lib_1.Color.toRGB(this._tiles[x][y].tile.foreground), lib_1.Color.toRGB([0, 0, 0]));
            }
        });
        //this._fov.push(new FOV.DiscreteShadowcasting(this.lightPasses(x,y)) ) 
    }
    getFov() {
        return this._fov;
    }
}
exports.Map = Map;


/***/ }),

/***/ "./src/messages.ts":
/*!*************************!*\
  !*** ./src/messages.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Messagelog {
    constructor(x, width, height, game) {
        this.messages = [];
        this.x = x;
        this.width = width;
        this.height = height;
        this.game = game;
    }
    addMessage(message) {
        if (this.messages.length == this.height) {
            this.messages.shift();
        }
        this.messages.push(message);
    }
    newMessage(actor, type, target1 = undefined, target2 = undefined, extrainfo = '') {
        let newMessage = {
            message: '',
            type: type,
            color0: actor.glyph.foreground,
            color1: target1 == undefined ? [255, 255, 255] : target1.glyph.foreground,
            color2: target2 == undefined ? [255, 255, 255] : target2.glyph.foreground,
        };
        switch (this.game.lang) {
            case "En":
                if (type == 'pickup') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} got: %c{1}" + target1.name + "%c{base} !";
                }
                if (type == 'switchEquip') {
                    newMessage.color2 = actor.equipment.glyph.foreground;
                    newMessage.message = "%c{0}" + actor.name + "%c{base} switched: %c{1}" + target1.name.toString() + "%c{base} for: %c{2}" + target2.name.toString() + " %c{base}!";
                }
                if (type == 'fight') {
                    let damage = extrainfo;
                    newMessage.message = "%c{0}" + actor.name + "%c{base} hit %c{1}" + target1.name + "%c{base} and dealt " + damage + " damage! (" + target1.fighter.hp.toFixed(2) + ")";
                }
                if (type == 'fightZeroDamage') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} hit %c{1}" + target1.name + "%c{base}, but it was ineffective!";
                }
                if (type == 'skill') {
                    let damage = extrainfo;
                    newMessage.message = "%c{0}" + actor.name + "%c{base} used %c{2}" + target2.name + "%c{base}, on %c{1}" + target1.name + "%c{base} and caused " + damage + " damage! (" + target1.fighter.hp.toFixed(2) + ")";
                }
                if (type == 'skillZeroDamage') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} hit %c{2}" + target2.name + "%c{base}, but it was ineffective!";
                }
                if (type == 'potion') {
                    newMessage.color1 = [0, 255, 120];
                    newMessage.message = "%c{0}" + actor.name + "%c{base} used a %c{1}Potion%c{base}, regenerating " + (actor.fighter.max_hp() * 0.35).toFixed(0) + " of hp!";
                }
                if (type == 'potionZero') {
                    newMessage.color1 = [0, 255, 120];
                    newMessage.message = "%c{0}" + actor.name + "%c{base} have no %c{1}Potion%c{base} to use!";
                }
                break;
            case "Pt":
                if (type == 'pickup') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} empunhou: %c{1}" + target1.name + "%c{base} !";
                }
                if (type == 'switchEquip') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} trocou: %c{1}" + target1.name.toString() + "%c{base} por: %c{2}" + actor.equipment.name.toString() + " %c{base}!";
                }
                if (type == 'fight') {
                    let damage = extrainfo;
                    newMessage.message = "%c{0}" + actor.name + "%c{base} bateu em %c{1}" + target1.name + "%c{base} com " + damage + " de dano! (" + target1.fighter.hp.toFixed(2) + ")";
                }
                if (type == 'fightZeroDamage') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} bateu em %c{1}" + target1.name + "%c{base}, mas não causou dano!";
                }
                if (type == 'skill') {
                    let damage = extrainfo;
                    newMessage.message = "%c{0}" + actor.name + "%c{base} usou %c{2}" + target2.name + "%c{base} em %c{1}" + target1.name + "%c{base} com " + damage + " de dano! (" + target1.fighter.hp.toFixed(2) + ")";
                }
                if (type == 'skillZeroDamage') {
                    newMessage.message = "%c{0}" + actor.name + "%c{base} bateu em %c{2}" + target2.name + "%c{base}, mas não causou dano!";
                }
                if (type == 'potion') {
                    newMessage.color1 = [0, 255, 120];
                    newMessage.message = "%c{0}" + actor.name + "%c{base} usou uma %c{1}Poção%c{base}, regenerando " + (actor.fighter.max_hp() * 0.35).toFixed(0) + " de vida!";
                }
                if (type == 'potionZero') {
                    newMessage.color1 = [0, 255, 120];
                    newMessage.message = "%c{0}" + actor.name + "%c{base} não tem %c{1}Poção%c{base} pra usar!";
                }
                break;
            default:
                break;
        }
        this.addMessage(newMessage);
    }
}
exports.Messagelog = Messagelog;


/***/ }),

/***/ "./src/screens.ts":
/*!************************!*\
  !*** ./src/screens.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __webpack_require__(/*! ./map */ "./src/map.ts");
const constants_1 = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
const Color = __webpack_require__(/*! ../lib/color */ "./lib/color.js");
const tiles_1 = __webpack_require__(/*! ./tiles */ "./src/tiles.ts");
const maps = __webpack_require__(/*! ../lib/map */ "./lib/map/index.js");
const randint_1 = __webpack_require__(/*! ./helper/randint */ "./src/helper/randint.ts");
const knife_1 = __webpack_require__(/*! ./content/itens/knife */ "./src/content/itens/knife.ts");
const dungeonMaze_1 = __webpack_require__(/*! ./helper/dungeonMaze */ "./src/helper/dungeonMaze.ts");
function startScreen() {
    //Game.Screen.startScreen = {
    return {
        enter: () => {
            console.log('enter');
        },
        exit: () => {
            console.log("Exited start screen.");
        },
        render: (display, game) => {
            display.drawText(0, 0, "%c{rgb(50, 50, 50)}Alpha: v.1971");
            let y = 8;
            for (const line of game.logo) {
                display.drawText(10, y, line);
                y += 1;
            }
            let blink = "";
            if (game.blinkLevel < 2)
                blink = "%c{rgb(140, 140, 140)}";
            if (game.blinkLevel >= 2)
                blink = "%c{rgb(240, 240, 240)}";
            if (game.blinkLevel > 5)
                game.blinkLevel = 0;
            game.blinkLevel += 1;
            // Render our prompt to the screen
            display.drawText((game._screenWidth / 2), game._screenHeight - 10, "%c{rgb(0, 191, 255)}We are lost...");
            display.drawText((game._screenWidth / 2) - 5, game._screenHeight - 7, "%c{rgb(0, 191, 255)}Who are you? %c{}" + game._entities[0].name + blink + "_");
            if (game.mainmenuOpt == 0)
                display.drawText((game._screenWidth / 2) - 1, game._screenHeight - 5, "%c{yellow}>Eng%c{}      Port");
            if (game.mainmenuOpt == 1)
                display.drawText((game._screenWidth / 2), game._screenHeight - 5, "Eng     %c{yellow}>Port%c{}");
            display.drawText((game._screenWidth / 10), game._screenHeight - 3, "%c{yellow}Arrow%c{}: move");
            display.drawText((game._screenWidth / 10), game._screenHeight - 2, "%c{yellow}Enter%c{}: pickup");
            display.drawText((game._screenWidth / 10), game._screenHeight - 1, "%c{yellow}Space%c{}: skill");
        },
        handleInput: (inputType, inputData, game) => {
            // When [Enter] is pressed, go to the play screen
            if (inputType === "keydown") {
                // if (inputData.keyCode === KEYS.VK_E) {
                //     game.lang = "En";
                //     game.switchScreen(game.Screen.playScreen);
                // }
                // if (inputData.keyCode === KEYS.VK_P) {
                //     game.lang = "Pt";
                //     game.switchScreen(game.Screen.playScreen);
                // }
                if (inputData.keyCode === constants_1.KEYS.VK_RETURN || inputData.keyCode === constants_1.KEYS.VK_ENTER) {
                    if (game.mainmenuOpt == 0)
                        game.lang = "En";
                    if (game.mainmenuOpt == 1)
                        game.lang = "Pt";
                    let hash = hashStringToColor(game._entities[0].name);
                    game._entities[0].glyph.foreground[0] = Color.fromString(hash)[0];
                    game._entities[0].glyph.foreground[1] = Color.fromString(hash)[1];
                    game._entities[0].glyph.foreground[2] = Color.fromString(hash)[2];
                    game.switchScreen(game.Screen.playScreen);
                }
                if (inputData.keyCode === constants_1.KEYS.VK_COMMA) {
                    game.switchScreen(game.Screen.debugScreen);
                }
                if (inputData.keyCode === constants_1.KEYS.VK_LEFT) {
                    game.mainmenuOpt -= 1;
                    if (game.mainmenuOpt < 0)
                        game.mainmenuOpt = 0;
                }
                if (inputData.keyCode === constants_1.KEYS.VK_RIGHT) {
                    game.mainmenuOpt += 1;
                    if (game.mainmenuOpt > 1)
                        game.mainmenuOpt = 1;
                }
                if (inputData.keyCode >= 65 && inputData.keyCode <= 90)
                    game._entities[0].name = game._entities[0].name + inputData.key;
                if (inputData.keyCode == 8 && game._entities[0].name.length > 0) {
                    game._entities[0].name = game._entities[0].name.slice(0, -1);
                }
                if (inputData.keyCode == 32 && game._entities[0].name.length > 0)
                    game._entities[0].name = game._entities[0].name + " ";
            }
        }
    };
}
exports.startScreen = startScreen;
function debugScreen() {
    return {
        enter: (game) => {
            createDungeon(game);
            //game._map._tiles[0][0] = new Tile('Floor', 'X', [0,0,0] , [200, 0, 200], true, false);
            // Sync map and game variables
            game._map._entities = [];
            // debug stuff
            let knife = new knife_1.Knife();
            knife.owner = game._player;
            game._player.equipment = knife;
            game._map._entities.push(game._player); //player always [0]
            game._player._map = game._map;
            game._map._display = game._display;
            game._map.messageLog = game.messageLog;
            //let ai_component = new Fungi();
            //let fighter_component = new Fighter(20, 0, 3, 35);
            //let monster = new Entity(60, 47, new Glyph('f', 'black', '#0000aa'), 'fungi', 1, true, 2, 2, fighter_component, ai_component, false);
            //monster._map = game._map;
            //game._map._entities.push(monster);
            //let knifeItem = new Entity()
            game.timer = true;
            //game.startCountDown();
            game._map.addEntityToMap();
            game._entities = game._map._entities;
        },
        exit: () => {
            console.log("Exited play screen.");
        },
        render: (display, game) => {
            let screenWidth = game._screenWidth;
            let screenHeight = game._screenHeight;
            let player = game._player;
            // Make sure the x-axis doesn't go to the left of the left bound
            let topLeftX = Math.max(0, player.x - (screenWidth / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftX = Math.min(topLeftX, game._map._width - screenWidth);
            // Make sure the y-axis doesn't above the top bound
            let topLeftY = Math.max(0, player.y - (screenHeight / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftY = Math.min(topLeftY, game._map._height - screenHeight);
            for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
                for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
                    // Fetch the glyph for the tile and render it to the screen
                    let cell = game._map.getTile(x, y);
                    //cell.visited ?
                    display.draw(x - topLeftX, y - topLeftY, cell.visitedTile.char, Color.toRGB(cell.tile.foreground), Color.toRGB(cell.tile.background)); //:
                    /* display.draw(
                        x - topLeftX,
                        y - topLeftY,
                        ' ',
                        Color.toRGB([0,0,0]),
                        Color.toRGB([0,0,0]));*/
                }
            }
            //game._map.setupFov(topLeftX, topLeftY);
            removeExpiredDamage(game._entities);
            game._map._entities = entityRenderSort(game);
            game._entities = game._map._entities;
            for (let i = game._entities.length - 1; i >= 0; i--) {
                //console.log(game._entities[i]); 
                let cell = game._map.getTile(game._entities[i].x, game._entities[i].y);
                if (cell.visibility != 0) { // 0
                    let dx = Math.pow(game._entities[0].x - game._entities[i].x, 2);
                    let dy = Math.pow(game._entities[0].y - game._entities[i].y, 2);
                    let dist = Math.sqrt(dx + dy);
                    if (dist == 0 || dist <= game._entities[0].sight) {
                        display.draw(game._entities[i].x - topLeftX, game._entities[i].y - topLeftY, game._entities[i].glyph.char, Color.toRGB(game._entities[i].glyph.foreground), Color.toRGB(game._entities[i].glyph.background));
                    }
                }
            }
        },
        handleInput: (inputType, inputData, game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case constants_1.KEYS.VK_RETURN:
                        //game.switchScreen(game.Screen.winScreen);
                        let gnd = game._map.getItemAt(game._entities[0].x, game._entities[0].x2, game._entities[0].y, game._entities[0].y2);
                        if (gnd.length > 0) {
                            game._entities[0].equip(gnd[0]);
                        }
                        else {
                        }
                        break;
                    case constants_1.KEYS.VK_ESCAPE:
                        //game.switchScreen(game.Screen.loseScreen);
                        game.timer = false;
                        break;
                    case constants_1.KEYS.VK_SPACE:
                        if (game._entities[0].equipment != undefined) {
                            game._entities[0].equipment.strike();
                        }
                        break;
                    case constants_1.KEYS.VK_LEFT:
                        game._entities[0].move(-1, 0, game._map);
                        break;
                    case constants_1.KEYS.VK_DOWN:
                        game._entities[0].move(0, 1, game._map);
                        break;
                    case constants_1.KEYS.VK_UP:
                        game._entities[0].move(0, -1, game._map);
                        break;
                    case constants_1.KEYS.VK_RIGHT:
                        game._entities[0].move(1, 0, game._map);
                        break;
                    default:
                        break;
                }
            }
            if (inputType === 'click') {
                let xx = randint_1.randint(-5, 5);
                let yy = randint_1.randint(-5, 5);
                game._entities[0].move(xx, yy, game._map);
            }
        }
    };
}
exports.debugScreen = debugScreen;
function playScreen() {
    return {
        enter: (game) => {
            if (game.level <= 2) {
                createCave(game);
            }
            if (game.level > 2 && game.level <= 4) {
                if (Math.random() * 100 < 51) {
                    createCave(game);
                }
                else {
                    createDungeon(game);
                }
            }
            if (game.level >= 5 && game.level < 7) {
                createDungeon(game);
            }
            // Sync map and game variables
            game._map._entities = [];
            game._map._entities.push(game._player); //player always [0]
            let newPlayerPositionBlocked = true;
            while (newPlayerPositionBlocked) {
                let x = randint_1.randint(0, game._map._width - 1);
                let y = randint_1.randint(0, game._map._height - 1);
                if (game._map.getTile(x, y)._isWalkable == false) {
                    newPlayerPositionBlocked = true;
                }
                else {
                    game._player.x = x;
                    game._player.x2 = x;
                    game._player.y = y;
                    game._player.y2 = y;
                    newPlayerPositionBlocked = false;
                }
            }
            game._player._map = game._map;
            game._map._display = game._display;
            game._map.messageLog = game.messageLog;
            game.timer = true;
            //game.startCountDown();
            game._map.dungeon_level = game.level;
            game._map.addEntityToMap();
            game._entities = game._map._entities;
        },
        exit: (game) => {
            console.log("Exited play screen.");
            for (let i = 0; i < game._map._entities.length; i++) {
                let element = game._map._entities[i];
                if (element.fighter != undefined && element.player == false)
                    element.fighter.hp = 0;
            }
            game._map._entities = [];
            game._map._tiles = [];
        },
        render: (display, game) => {
            let screenWidth = game._screenWidth;
            let screenHeight = game._screenHeight;
            if (game._player.fighter.status == 'dead') {
                game.switchScreen(game.Screen.loseScreen);
                return;
            }
            let player = game._player;
            // Make sure the x-axis doesn't go to the left of the left bound
            let topLeftX = Math.max(0, player.x - (screenWidth / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftX = Math.min(topLeftX, game._map._width - screenWidth);
            // Make sure the y-axis doesn't above the top bound
            let topLeftY = Math.max(0, player.y - (screenHeight / 2));
            // Make sure we still have enough space to fit an entire game screen
            topLeftY = Math.min(topLeftY, game._map._height - screenHeight);
            for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
                for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
                    // Fetch the glyph for the tile and render it to the screen
                    let cell = game._map.getTile(x, y);
                    cell.visited ?
                        display.draw(x - topLeftX, y - topLeftY, cell.visitedTile.char, Color.toRGB(cell.visitedTile.foreground), Color.toRGB(cell.visitedTile.background)) :
                        display.draw(x - topLeftX, y - topLeftY, ' ', Color.toRGB([0, 0, 0]), Color.toRGB([0, 0, 0]));
                }
            }
            game._map.setupFov(topLeftX, topLeftY);
            removeExpiredDamage(game._entities);
            game._map._entities = entityRenderSort(game);
            game._entities = game._map._entities;
            for (let i = game._entities.length - 1; i >= 0; i--) {
                //console.log(game._entities[i]); 
                let cell = game._map.getTile(game._entities[i].x, game._entities[i].y);
                if (cell.visibility > 0) {
                    let dx = Math.pow(game._entities[0].x - game._entities[i].x, 2);
                    let dy = Math.pow(game._entities[0].y - game._entities[i].y, 2);
                    let dist = Math.sqrt(dx + dy);
                    if (dist == 0 || dist <= game._entities[0].sight) {
                        display.draw(game._entities[i].x - topLeftX, game._entities[i].y - topLeftY, game._entities[i].glyph.char, Color.toRGB(game._entities[i].glyph.foreground), Color.toRGB(game._entities[i].glyph.background));
                    }
                }
            }
        },
        handleInput: (inputType, inputData, game) => {
            if (inputType === 'keydown') {
                switch (inputData.keyCode) {
                    case constants_1.KEYS.VK_RETURN:
                        let gnd = game._map.getItemAt(game._entities[0].x, game._entities[0].x2, game._entities[0].y, game._entities[0].y2);
                        if (gnd.length > 0) {
                            if (gnd[0].stairs == undefined) {
                                game._entities[0].equip(gnd[0]);
                            }
                            else {
                                gnd[0].stairs.climb();
                            }
                        }
                        else {
                            console.log("nada");
                        }
                        break;
                    case constants_1.KEYS.VK_ESCAPE:
                        //game.switchScreen(game.Screen.loseScreen);
                        game.timer = false;
                        break;
                    case constants_1.KEYS.VK_SPACE:
                        if (game._entities[0].equipment != undefined) {
                            game._entities[0].equipment.strike();
                        }
                        break;
                    case constants_1.KEYS.VK_LEFT:
                        game._entities[0].move(-1, 0, game._map);
                        break;
                    case constants_1.KEYS.VK_DOWN:
                        game._entities[0].move(0, 1, game._map);
                        break;
                    case constants_1.KEYS.VK_UP:
                        game._entities[0].move(0, -1, game._map);
                        break;
                    case constants_1.KEYS.VK_RIGHT:
                        game._entities[0].move(1, 0, game._map);
                        break;
                    case constants_1.KEYS.VK_P:
                        game._entities[0].usePotion();
                    default:
                        break;
                }
                if (game._player.fighter.unspentPoints > 0) {
                    switch (inputData.keyCode) {
                        case constants_1.KEYS.VK_A:
                            game._player.fighter.base_power += 0.8;
                            game._player.fighter.unspentPoints -= 1;
                            break;
                        case constants_1.KEYS.VK_S:
                            game._player.fighter.base_defense += 0.8;
                            game._player.fighter.unspentPoints -= 1;
                            break;
                        case constants_1.KEYS.VK_D:
                            game._player.fighter.base_max_hp += 10;
                            game._player.fighter.unspentPoints -= 1;
                            break;
                        default:
                            break;
                    }
                    if (game._player.fighter.unspentPoints < 0)
                        game._player.fighter.unspentPoints = 0;
                }
            }
            if (inputType === 'click') {
                let xx = randint_1.randint(-5, 5);
                let yy = randint_1.randint(-5, 5);
                game._entities[0].move(xx, yy, game._map);
            }
        }
    };
}
exports.playScreen = playScreen;
function createCave(game) {
    let mapWidth = 120;
    let mapHeight = 88;
    game._map = new map_1.Map(mapWidth, mapHeight);
    game._map.owner = game;
    let emptyTile = new tiles_1.Tile('empty', ' ', [0, 0, 0], [255, 255, 255]);
    console.log("Entered play screen.");
    for (let x = 0; x < mapWidth; x++) {
        // Create the nested array for the y values
        game._map._tiles.push([]);
        // Add all the tiles
        for (let y = 0; y < mapHeight; y++) {
            game._map._tiles[x].push(emptyTile);
        }
    }
    let generator = new maps.default.Cellular(mapWidth, mapHeight);
    generator.randomize(0.66);
    let totalIterations = 3;
    // Iteratively smoothen the map
    for (let i = 0; i < totalIterations - 1; i++) {
        generator.create();
    }
    // Smoothen it one last time and then update our map
    generator.create((x, y, v) => {
        if (v === 1) { // || x == 0 || y == 0 || x == mapWidth - 1 || x == mapHeight - 1) {
            game._map._tiles[x][y] = new tiles_1.Tile('floor', '.', [0, 0, 0], [84, 54, 11]); //floor
        }
        else {
            game._map._tiles[x][y] = new tiles_1.Tile('wall', '#', [0, 0, 0], [218, 165, 32]);
        }
        if (x == 0 || y == 0 || x == mapWidth - 1 || y == mapHeight - 1)
            game._map._tiles[x][y] = new tiles_1.Tile('wall', '#', [0, 0, 0], [218, 165, 32]);
    });
}
function createDungeon(game) {
    let mapWidth = 120;
    let mapHeight = 88;
    game._map = new map_1.Map(mapWidth, mapHeight);
    game._map.owner = game;
    let emptyTile = new tiles_1.Tile('empty', ' ', [0, 0, 0], [255, 255, 255]);
    //console.log("Entered debug screen.");
    for (let x = 0; x < mapWidth; x++) {
        // Create the nested array for the y values
        game._map._tiles.push([]);
        // Add all the tiles
        for (let y = 0; y < mapHeight; y++) {
            game._map._tiles[x].push(emptyTile);
        }
    }
    let generator = dungeonMaze_1.generateDunMaze(mapWidth, mapHeight);
    for (let x = 0; x < mapWidth; x++) {
        for (let y = 0; y < mapHeight; y++) {
            // if (generator[x][y] == 1) {
            //     game._map._tiles[x][y] = new Tile('Wall', '#', [0,0,0], [218, 165, 32], true, true, false); // false, true, true
            // } else {
            //     game._map._tiles[x][y] = new Tile('Floor', '.', [0,0,0] , [84, 54, 11], true, false); //floor
            // }
            if (generator[x][y] == 1) {
                game._map._tiles[x][y] = new tiles_1.Tile('wall', '#', [0, 0, 0], [128, 128, 128]); // false, true, true
            }
            if (generator[x][y] == 0) {
                game._map._tiles[x][y] = new tiles_1.Tile('floor', '·', [0, 0, 0], [60, 60, 60]); //floor
            }
            if (generator[x][y] == 2) {
                game._map._tiles[x][y] = new tiles_1.Tile('floor', 'E', [0, 0, 0], [200, 0, 0]);
            }
        }
    }
}
function winScreen() {
    return {
        enter: () => {
            console.log("Entered win screen.");
        },
        exit: () => {
            console.log("Exited win screen.");
        },
        render: (display) => {
            // Render our prompt to the screen
            for (var i = 0; i < 22; i++) {
                // Generate random background colors
                var r = Math.round(Math.random() * 255);
                var g = Math.round(Math.random() * 255);
                var b = Math.round(Math.random() * 255);
                var background = Color.toRGB([r, g, b]);
                display.drawText(2, i + 1, "%b{" + background + "}You win!");
            }
        },
        handleInput: (inputType, inputData) => {
            // Nothing to do here      
        }
    };
}
exports.winScreen = winScreen;
// Define our winning screen
function loseScreen() {
    return {
        enter: () => { console.log("Entered lose screen."); },
        exit: () => { console.log("Exited lose screen."); },
        render: (display) => {
            // Render our prompt to the screen
            for (var i = 0; i < 22; i++) {
                display.drawText(2, i + 1, "%b{red}You lose! :(");
            }
        },
        handleInput: (inputType, inputData) => {
            // Nothing to do here      
        }
    };
}
exports.loseScreen = loseScreen;
function entityRenderSort(game) {
    return game._entities.sort(function (a, b) {
        if (a.render_order == b.render_order)
            return 0;
        if (a.render_order == 1)
            return -1;
        if (b.render_order == 1)
            return 1;
        if (a.render_order < b.render_order)
            return -1;
        if (a.render_order > b.render_order)
            return 1;
        return 0;
    });
}
exports.entityRenderSort = entityRenderSort;
function removeExpiredDamage(entities) {
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].damage != undefined) {
            if (entities[i].damage.expire) {
                entities.splice(i, 1);
                i--;
            }
        }
        if (entities[i].item != undefined) {
            if (entities[i].item.expire) {
                entities.splice(i, 1);
                i--;
            }
        }
    }
}
exports.removeExpiredDamage = removeExpiredDamage;
function djb2(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
    }
    return hash;
}
function hashStringToColor(str) {
    var hash = djb2(str);
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}


/***/ }),

/***/ "./src/settings/itemProbabilities.ts":
/*!*******************************************!*\
  !*** ./src/settings/itemProbabilities.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const randFromLevel_1 = __webpack_require__(/*! ../helper/randFromLevel */ "./src/helper/randFromLevel.ts");
function itemProbabilities(dungeon_level) {
    return {
        'potion': 35,
        'knife': randFromLevel_1.from_dungeon_level([[10, 1], [5, 3]], dungeon_level),
        'dagger': randFromLevel_1.from_dungeon_level([[10, 1], [5, 3]], dungeon_level),
        'sword': randFromLevel_1.from_dungeon_level([[5, 1], [10, 3]], dungeon_level),
        'spear': randFromLevel_1.from_dungeon_level([[5, 1], [10, 3]], dungeon_level),
        'firerod': randFromLevel_1.from_dungeon_level([[1, 1], [10, 3]], dungeon_level),
        'shield': randFromLevel_1.from_dungeon_level([[1, 0], [10, 2]], dungeon_level),
    };
}
exports.itemProbabilities = itemProbabilities;


/***/ }),

/***/ "./src/settings/monsterProbabilities.ts":
/*!**********************************************!*\
  !*** ./src/settings/monsterProbabilities.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const randFromLevel_1 = __webpack_require__(/*! ../helper/randFromLevel */ "./src/helper/randFromLevel.ts");
function monsterProbabilities(dungeon_level) {
    return {
        'fungi': randFromLevel_1.from_dungeon_level([[5, 1], [15, 1]], dungeon_level),
        'orc': randFromLevel_1.from_dungeon_level([[40, 1], [20, 3], [10, 7]], dungeon_level),
        'troll': randFromLevel_1.from_dungeon_level([[10, 1], [20, 3], [30, 5], [60, 7]], dungeon_level),
        'wyvern': randFromLevel_1.from_dungeon_level([[10, 1], [30, 2], [50, 5]], dungeon_level),
        'dragon': randFromLevel_1.from_dungeon_level([[1, 3], [20, 7]], dungeon_level),
        'ranger': randFromLevel_1.from_dungeon_level([[5, 1], [10, 2]], dungeon_level),
    };
}
exports.monsterProbabilities = monsterProbabilities;


/***/ }),

/***/ "./src/tiles.ts":
/*!**********************!*\
  !*** ./src/tiles.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const glyph_1 = __webpack_require__(/*! ./glyph */ "./src/glyph.ts");
class Tile {
    constructor(name, char = ' ', background = [0, 0, 0], foreground = [255, 255, 255]) {
        this.visibility = 0;
        this.visited = false;
        this._isWalkable = false;
        this._isDiggable = false;
        this._blocksLight = false;
        let walkable = false;
        let diggable = false;
        let blockslight = false;
        switch (name) {
            case 'debugWall':
                blockslight = false;
            case 'wall':
                walkable = false;
                diggable = false;
                blockslight = true;
                break;
            case 'floor':
                walkable = true;
            case 'empty':
                walkable = true;
            default:
                break;
        }
        this.name = name;
        this._isDiggable = diggable;
        this._isWalkable = walkable;
        this._blocksLight = blockslight;
        this.tile = new glyph_1.Glyph(char, background, foreground);
        this.baseTile = new glyph_1.Glyph(char, background, foreground);
        this.visitedTile = new glyph_1.Glyph(char, background, foreground);
        let fogRGB = this.tile.foreground;
        this.visitedTile.foreground = [Math.floor(fogRGB[0] * 0.2), Math.floor(fogRGB[1] * 0.2), Math.floor(fogRGB[2] * 0.2)];
    }
}
exports.Tile = Tile;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map