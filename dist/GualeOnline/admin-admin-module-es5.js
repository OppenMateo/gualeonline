function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/conversion.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/conversion.js ***!
    \****************************************************************/

  /*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex, numberInputToObject */

  /***/
  function node_modulesCtrlTinycolorDistModuleConversionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbToRgb", function () {
      return rgbToRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbToHsl", function () {
      return rgbToHsl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hslToRgb", function () {
      return hslToRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbToHsv", function () {
      return rgbToHsv;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hsvToRgb", function () {
      return hsvToRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbToHex", function () {
      return rgbToHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbaToHex", function () {
      return rgbaToHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function () {
      return rgbaToArgbHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function () {
      return convertDecimalToHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function () {
      return convertHexToDecimal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function () {
      return parseIntFromHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numberInputToObject", function () {
      return numberInputToObject;
    });
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util */
    "./node_modules/@ctrl/tinycolor/dist/module/util.js"); // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

    /**
     * Handle bounds / percentage checking to conform to CSS color spec
     * <http://www.w3.org/TR/css3-color/>
     * *Assumes:* r, g, b in [0, 255] or [0, 1]
     * *Returns:* { r, g, b } in [0, 255]
     */


    function rgbToRgb(r, g, b) {
      return {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
        g: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
        b: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255
      };
    }
    /**
     * Converts an RGB color value to HSL.
     * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
     * *Returns:* { h, s, l } in [0,1]
     */


    function rgbToHsl(r, g, b) {
      r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
      g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
      b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h = 0;
      var s = 0;
      var l = (max + min) / 2;

      if (max === min) {
        s = 0;
        h = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

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

          default:
            break;
        }

        h /= 6;
      }

      return {
        h: h,
        s: s,
        l: l
      };
    }

    function hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }

      if (t > 1) {
        t -= 1;
      }

      if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
      }

      if (t < 1 / 2) {
        return q;
      }

      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }

      return p;
    }
    /**
     * Converts an HSL color value to RGB.
     *
     * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
     * *Returns:* { r, g, b } in the set [0, 255]
     */


    function hslToRgb(h, s, l) {
      var r;
      var g;
      var b;
      h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
      s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
      l = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);

      if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    }
    /**
     * Converts an RGB color value to HSV
     *
     * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
     * *Returns:* { h, s, v } in [0,1]
     */


    function rgbToHsv(r, g, b) {
      r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
      g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
      b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h = 0;
      var v = max;
      var d = max - min;
      var s = max === 0 ? 0 : d / max;

      if (max === min) {
        h = 0; // achromatic
      } else {
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

          default:
            break;
        }

        h /= 6;
      }

      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * Converts an HSV color value to RGB.
     *
     * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
     * *Returns:* { r, g, b } in the set [0, 255]
     */


    function hsvToRgb(h, s, v) {
      h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
      s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
      v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
      var i = Math.floor(h);
      var f = h - i;
      var p = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);
      var mod = i % 6;
      var r = [v, q, p, p, t, v][mod];
      var g = [t, v, v, q, p, p][mod];
      var b = [p, p, t, v, v, q][mod];
      return {
        r: r * 255,
        g: g * 255,
        b: b * 255
      };
    }
    /**
     * Converts an RGB color to hex
     *
     * Assumes r, g, and b are contained in the set [0, 255]
     * Returns a 3 or 6 character hex
     */


    function rgbToHex(r, g, b, allow3Char) {
      var hex = [Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16))]; // Return a 3 character hex if possible

      if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }

      return hex.join('');
    }
    /**
     * Converts an RGBA color plus alpha transparency to hex
     *
     * Assumes r, g, b are contained in the set [0, 255] and
     * a in [0, 1]. Returns a 4 or 8 character rgba hex
     */


    function rgbaToHex(r, g, b, a, allow4Char) {
      var hex = [Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a))]; // Return a 4 character hex if possible

      if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }

      return hex.join('');
    }
    /**
     * Converts an RGBA color to an ARGB Hex8 string
     * Rarely used, but required for "toFilter()"
     */


    function rgbaToArgbHex(r, g, b, a) {
      var hex = [Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)), Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16))];
      return hex.join('');
    }
    /** Converts a decimal to a hex value */


    function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
    }
    /** Converts a hex value to a decimal */


    function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
    }
    /** Parse a base-16 hex value into a base-10 integer */


    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }

    function numberInputToObject(color) {
      return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff
      };
    } //# sourceMappingURL=conversion.js.map

    /***/

  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js ***!
    \*********************************************************************/

  /*! exports provided: names */

  /***/
  function node_modulesCtrlTinycolorDistModuleCssColorNamesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "names", function () {
      return names;
    }); // https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json

    /**
     * @hidden
     */


    var names = {
      aliceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      goldenrod: '#daa520',
      gold: '#ffd700',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      lavenderblush: '#fff0f5',
      lavender: '#e6e6fa',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrodyellow: '#fafad2',
      lightgray: '#d3d3d3',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370db',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#db7093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      rebeccapurple: '#663399',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32'
    }; //# sourceMappingURL=css-color-names.js.map

    /***/
  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/format-input.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/format-input.js ***!
    \******************************************************************/

  /*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */

  /***/
  function node_modulesCtrlTinycolorDistModuleFormatInputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "inputToRGB", function () {
      return inputToRGB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stringInputToObject", function () {
      return stringInputToObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function () {
      return isValidCSSUnit;
    });
    /* harmony import */


    var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./conversion */
    "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
    /* harmony import */


    var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./css-color-names */
    "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util */
    "./node_modules/@ctrl/tinycolor/dist/module/util.js");
    /**
     * Given a string or object, convert that input to RGB
     *
     * Possible string inputs:
     * ```
     * "red"
     * "#f00" or "f00"
     * "#ff0000" or "ff0000"
     * "#ff000000" or "ff000000"
     * "rgb 255 0 0" or "rgb (255, 0, 0)"
     * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
     * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
     * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
     * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
     * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
     * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
     * ```
     */


    function inputToRGB(color) {
      var rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;

      if (typeof color === 'string') {
        color = stringInputToObject(color);
      }

      if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
          v = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
          rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
          ok = true;
          format = 'hsv';
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
          l = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
          rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
          ok = true;
          format = 'hsl';
        }

        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
          a = color.a;
        }
      }

      a = Object(_util__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
      return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a
      };
    } // <http://www.w3.org/TR/css3-values/#integers>


    var CSS_INTEGER = '[-\\+]?\\d+%?'; // <http://www.w3.org/TR/css3-values/#number-value>

    var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

    var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")"); // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren

    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    var matchers = {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
      rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
      hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
      hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
      hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
      hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    /**
     * Permissive string parsing.  Take in a number of formats, and output an object
     * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
     */

    function stringInputToObject(color) {
      color = color.trim().toLowerCase();

      if (color.length === 0) {
        return false;
      }

      var named = false;

      if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color];
        named = true;
      } else if (color === 'transparent') {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: 'name'
        };
      } // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.


      var match = matchers.rgb.exec(color);

      if (match) {
        return {
          r: match[1],
          g: match[2],
          b: match[3]
        };
      }

      match = matchers.rgba.exec(color);

      if (match) {
        return {
          r: match[1],
          g: match[2],
          b: match[3],
          a: match[4]
        };
      }

      match = matchers.hsl.exec(color);

      if (match) {
        return {
          h: match[1],
          s: match[2],
          l: match[3]
        };
      }

      match = matchers.hsla.exec(color);

      if (match) {
        return {
          h: match[1],
          s: match[2],
          l: match[3],
          a: match[4]
        };
      }

      match = matchers.hsv.exec(color);

      if (match) {
        return {
          h: match[1],
          s: match[2],
          v: match[3]
        };
      }

      match = matchers.hsva.exec(color);

      if (match) {
        return {
          h: match[1],
          s: match[2],
          v: match[3],
          a: match[4]
        };
      }

      match = matchers.hex8.exec(color);

      if (match) {
        return {
          r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
          g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
          b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
          a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
          format: named ? 'name' : 'hex8'
        };
      }

      match = matchers.hex6.exec(color);

      if (match) {
        return {
          r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
          g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
          b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
          format: named ? 'name' : 'hex'
        };
      }

      match = matchers.hex4.exec(color);

      if (match) {
        return {
          r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
          g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
          b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
          a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
          format: named ? 'name' : 'hex8'
        };
      }

      match = matchers.hex3.exec(color);

      if (match) {
        return {
          r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
          g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
          b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
          format: named ? 'name' : 'hex'
        };
      }

      return false;
    }
    /**
     * Check to see if it looks like a CSS unit
     * (see `matchers` above for definition).
     */


    function isValidCSSUnit(color) {
      return Boolean(matchers.CSS_UNIT.exec(String(color)));
    } //# sourceMappingURL=format-input.js.map

    /***/

  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/from-ratio.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/from-ratio.js ***!
    \****************************************************************/

  /*! exports provided: fromRatio, legacyRandom */

  /***/
  function node_modulesCtrlTinycolorDistModuleFromRatioJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromRatio", function () {
      return fromRatio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "legacyRandom", function () {
      return legacyRandom;
    });
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@ctrl/tinycolor/dist/module/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./util */
    "./node_modules/@ctrl/tinycolor/dist/module/util.js");
    /**
     * If input is an object, force 1 into "1.0" to handle ratios properly
     * String input requires "1.0" as input, so 1 will be treated as 1
     */


    function fromRatio(ratio, opts) {
      var newColor = {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
        g: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
        b: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b)
      };

      if (ratio.a !== undefined) {
        newColor.a = Number(ratio.a);
      }

      return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
    }
    /** old random function */


    function legacyRandom() {
      return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
      });
    } //# sourceMappingURL=from-ratio.js.map

    /***/

  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/index.js ***!
    \***********************************************************/

  /*! exports provided: TinyColor, tinycolor */

  /***/
  function node_modulesCtrlTinycolorDistModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TinyColor", function () {
      return TinyColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tinycolor", function () {
      return tinycolor;
    });
    /* harmony import */


    var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./conversion */
    "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
    /* harmony import */


    var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./css-color-names */
    "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
    /* harmony import */


    var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./format-input */
    "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util */
    "./node_modules/@ctrl/tinycolor/dist/module/util.js");

    var TinyColor = /*#__PURE__*/function () {
      function TinyColor() {
        var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, TinyColor);

        var _a; // If input is already a tinycolor, return itself


        if (color instanceof TinyColor) {
          // eslint-disable-next-line no-constructor-return
          return color;
        }

        if (typeof color === 'number') {
          color = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["numberInputToObject"])(color);
        }

        this.originalInput = color;
        var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`

        if (this.r < 1) {
          this.r = Math.round(this.r);
        }

        if (this.g < 1) {
          this.g = Math.round(this.g);
        }

        if (this.b < 1) {
          this.b = Math.round(this.b);
        }

        this.isValid = rgb.ok;
      }

      _createClass(TinyColor, [{
        key: "isDark",
        value: function isDark() {
          return this.getBrightness() < 128;
        }
      }, {
        key: "isLight",
        value: function isLight() {
          return !this.isDark();
        }
        /**
         * Returns the perceived brightness of the color, from 0-255.
         */

      }, {
        key: "getBrightness",
        value: function getBrightness() {
          // http://www.w3.org/TR/AERT#color-contrast
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        }
        /**
         * Returns the perceived luminance of a color, from 0-1.
         */

      }, {
        key: "getLuminance",
        value: function getLuminance() {
          // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          var rgb = this.toRgb();
          var R;
          var G;
          var B;
          var RsRGB = rgb.r / 255;
          var GsRGB = rgb.g / 255;
          var BsRGB = rgb.b / 255;

          if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
          } else {
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
          }

          if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
          } else {
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
          }

          if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
          } else {
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
          }

          return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        }
        /**
         * Returns the alpha value of a color, from 0-1.
         */

      }, {
        key: "getAlpha",
        value: function getAlpha() {
          return this.a;
        }
        /**
         * Sets the alpha value on the current color.
         *
         * @param alpha - The new alpha value. The accepted range is 0-1.
         */

      }, {
        key: "setAlpha",
        value: function setAlpha(alpha) {
          this.a = Object(_util__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
          this.roundA = Math.round(100 * this.a) / 100;
          return this;
        }
        /**
         * Returns the object as a HSVA object.
         */

      }, {
        key: "toHsv",
        value: function toHsv() {
          var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
          return {
            h: hsv.h * 360,
            s: hsv.s,
            v: hsv.v,
            a: this.a
          };
        }
        /**
         * Returns the hsva values interpolated into a string with the following format:
         * "hsva(xxx, xxx, xxx, xx)".
         */

      }, {
        key: "toHsvString",
        value: function toHsvString() {
          var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
          var h = Math.round(hsv.h * 360);
          var s = Math.round(hsv.s * 100);
          var v = Math.round(hsv.v * 100);
          return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
        }
        /**
         * Returns the object as a HSLA object.
         */

      }, {
        key: "toHsl",
        value: function toHsl() {
          var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
          return {
            h: hsl.h * 360,
            s: hsl.s,
            l: hsl.l,
            a: this.a
          };
        }
        /**
         * Returns the hsla values interpolated into a string with the following format:
         * "hsla(xxx, xxx, xxx, xx)".
         */

      }, {
        key: "toHslString",
        value: function toHslString() {
          var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
          var h = Math.round(hsl.h * 360);
          var s = Math.round(hsl.s * 100);
          var l = Math.round(hsl.l * 100);
          return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
        }
        /**
         * Returns the hex value of the color.
         * @param allow3Char will shorten hex value to 3 char if possible
         */

      }, {
        key: "toHex",
        value: function toHex() {
          var allow3Char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
        }
        /**
         * Returns the hex value of the color -with a # appened.
         * @param allow3Char will shorten hex value to 3 char if possible
         */

      }, {
        key: "toHexString",
        value: function toHexString() {
          var allow3Char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return '#' + this.toHex(allow3Char);
        }
        /**
         * Returns the hex 8 value of the color.
         * @param allow4Char will shorten hex value to 4 char if possible
         */

      }, {
        key: "toHex8",
        value: function toHex8() {
          var allow4Char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
        }
        /**
         * Returns the hex 8 value of the color -with a # appened.
         * @param allow4Char will shorten hex value to 4 char if possible
         */

      }, {
        key: "toHex8String",
        value: function toHex8String() {
          var allow4Char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return '#' + this.toHex8(allow4Char);
        }
        /**
         * Returns the object as a RGBA object.
         */

      }, {
        key: "toRgb",
        value: function toRgb() {
          return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
          };
        }
        /**
         * Returns the RGBA values interpolated into a string with the following format:
         * "RGBA(xxx, xxx, xxx, xx)".
         */

      }, {
        key: "toRgbString",
        value: function toRgbString() {
          var r = Math.round(this.r);
          var g = Math.round(this.g);
          var b = Math.round(this.b);
          return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
        }
        /**
         * Returns the object as a RGBA object.
         */

      }, {
        key: "toPercentageRgb",
        value: function toPercentageRgb() {
          var fmt = function fmt(x) {
            return "".concat(Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100), "%");
          };

          return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a
          };
        }
        /**
         * Returns the RGBA relative values interpolated into a string
         */

      }, {
        key: "toPercentageRgbString",
        value: function toPercentageRgbString() {
          var rnd = function rnd(x) {
            return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100);
          };

          return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
        }
        /**
         * The 'real' name of the color -if there is one.
         */

      }, {
        key: "toName",
        value: function toName() {
          if (this.a === 0) {
            return 'transparent';
          }

          if (this.a < 1) {
            return false;
          }

          var hex = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);

          for (var _i = 0, _Object$entries = Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (hex === value) {
              return key;
            }
          }

          return false;
        }
        /**
         * String representation of the color.
         *
         * @param format - The format to be used when displaying the string representation.
         */

      }, {
        key: "toString",
        value: function toString(format) {
          var formatSet = Boolean(format);
          format = format !== null && format !== void 0 ? format : this.format;
          var formattedString = false;
          var hasAlpha = this.a < 1 && this.a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');

          if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
              return this.toName();
            }

            return this.toRgbString();
          }

          if (format === 'rgb') {
            formattedString = this.toRgbString();
          }

          if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
          }

          if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
          }

          if (format === 'hex3') {
            formattedString = this.toHexString(true);
          }

          if (format === 'hex4') {
            formattedString = this.toHex8String(true);
          }

          if (format === 'hex8') {
            formattedString = this.toHex8String();
          }

          if (format === 'name') {
            formattedString = this.toName();
          }

          if (format === 'hsl') {
            formattedString = this.toHslString();
          }

          if (format === 'hsv') {
            formattedString = this.toHsvString();
          }

          return formattedString || this.toHexString();
        }
      }, {
        key: "toNumber",
        value: function toNumber() {
          return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        }
      }, {
        key: "clone",
        value: function clone() {
          return new TinyColor(this.toString());
        }
        /**
         * Lighten the color a given amount. Providing 100 will always return white.
         * @param amount - valid between 1-100
         */

      }, {
        key: "lighten",
        value: function lighten() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          var hsl = this.toHsl();
          hsl.l += amount / 100;
          hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
          return new TinyColor(hsl);
        }
        /**
         * Brighten the color a given amount, from 0 to 100.
         * @param amount - valid between 1-100
         */

      }, {
        key: "brighten",
        value: function brighten() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          var rgb = this.toRgb();
          rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
          rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
          rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
          return new TinyColor(rgb);
        }
        /**
         * Darken the color a given amount, from 0 to 100.
         * Providing 100 will always return black.
         * @param amount - valid between 1-100
         */

      }, {
        key: "darken",
        value: function darken() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          var hsl = this.toHsl();
          hsl.l -= amount / 100;
          hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
          return new TinyColor(hsl);
        }
        /**
         * Mix the color with pure white, from 0 to 100.
         * Providing 0 will do nothing, providing 100 will always return white.
         * @param amount - valid between 1-100
         */

      }, {
        key: "tint",
        value: function tint() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          return this.mix('white', amount);
        }
        /**
         * Mix the color with pure black, from 0 to 100.
         * Providing 0 will do nothing, providing 100 will always return black.
         * @param amount - valid between 1-100
         */

      }, {
        key: "shade",
        value: function shade() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          return this.mix('black', amount);
        }
        /**
         * Desaturate the color a given amount, from 0 to 100.
         * Providing 100 will is the same as calling greyscale
         * @param amount - valid between 1-100
         */

      }, {
        key: "desaturate",
        value: function desaturate() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          var hsl = this.toHsl();
          hsl.s -= amount / 100;
          hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
          return new TinyColor(hsl);
        }
        /**
         * Saturate the color a given amount, from 0 to 100.
         * @param amount - valid between 1-100
         */

      }, {
        key: "saturate",
        value: function saturate() {
          var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          var hsl = this.toHsl();
          hsl.s += amount / 100;
          hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
          return new TinyColor(hsl);
        }
        /**
         * Completely desaturates a color into greyscale.
         * Same as calling `desaturate(100)`
         */

      }, {
        key: "greyscale",
        value: function greyscale() {
          return this.desaturate(100);
        }
        /**
         * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
         * Values outside of this range will be wrapped into this range.
         */

      }, {
        key: "spin",
        value: function spin(amount) {
          var hsl = this.toHsl();
          var hue = (hsl.h + amount) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return new TinyColor(hsl);
        }
        /**
         * Mix the current color a given amount with another color, from 0 to 100.
         * 0 means no mixing (return current color).
         */

      }, {
        key: "mix",
        value: function mix(color) {
          var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
          var rgb1 = this.toRgb();
          var rgb2 = new TinyColor(color).toRgb();
          var p = amount / 100;
          var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
          };
          return new TinyColor(rgba);
        }
      }, {
        key: "analogous",
        value: function analogous() {
          var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
          var slices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
          var hsl = this.toHsl();
          var part = 360 / slices;
          var ret = [this];

          for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
          }

          return ret;
        }
        /**
         * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
         */

      }, {
        key: "complement",
        value: function complement() {
          var hsl = this.toHsl();
          hsl.h = (hsl.h + 180) % 360;
          return new TinyColor(hsl);
        }
      }, {
        key: "monochromatic",
        value: function monochromatic() {
          var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
          var hsv = this.toHsv();
          var h = hsv.h;
          var s = hsv.s;
          var v = hsv.v;
          var res = [];
          var modification = 1 / results;

          while (results--) {
            res.push(new TinyColor({
              h: h,
              s: s,
              v: v
            }));
            v = (v + modification) % 1;
          }

          return res;
        }
      }, {
        key: "splitcomplement",
        value: function splitcomplement() {
          var hsl = this.toHsl();
          var h = hsl.h;
          return [this, new TinyColor({
            h: (h + 72) % 360,
            s: hsl.s,
            l: hsl.l
          }), new TinyColor({
            h: (h + 216) % 360,
            s: hsl.s,
            l: hsl.l
          })];
        }
        /**
         * Alias for `polyad(3)`
         */

      }, {
        key: "triad",
        value: function triad() {
          return this.polyad(3);
        }
        /**
         * Alias for `polyad(4)`
         */

      }, {
        key: "tetrad",
        value: function tetrad() {
          return this.polyad(4);
        }
        /**
         * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
         * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
         */

      }, {
        key: "polyad",
        value: function polyad(n) {
          var hsl = this.toHsl();
          var h = hsl.h;
          var result = [this];
          var increment = 360 / n;

          for (var i = 1; i < n; i++) {
            result.push(new TinyColor({
              h: (h + i * increment) % 360,
              s: hsl.s,
              l: hsl.l
            }));
          }

          return result;
        }
        /**
         * compare color vs current color
         */

      }, {
        key: "equals",
        value: function equals(color) {
          return this.toRgbString() === new TinyColor(color).toRgbString();
        }
      }]);

      return TinyColor;
    }(); // kept for backwards compatability with v1


    function tinycolor() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new TinyColor(color, opts);
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/public_api.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/public_api.js ***!
    \****************************************************************/

  /*! exports provided: TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds, default */

  /***/
  function node_modulesCtrlTinycolorDistModulePublic_apiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@ctrl/tinycolor/dist/module/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TinyColor", function () {
      return _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "tinycolor", function () {
      return _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"];
    });
    /* harmony import */


    var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./css-color-names */
    "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "names", function () {
      return _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"];
    });
    /* harmony import */


    var _readability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./readability */
    "./node_modules/@ctrl/tinycolor/dist/module/readability.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "readability", function () {
      return _readability__WEBPACK_IMPORTED_MODULE_2__["readability"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isReadable", function () {
      return _readability__WEBPACK_IMPORTED_MODULE_2__["isReadable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mostReadable", function () {
      return _readability__WEBPACK_IMPORTED_MODULE_2__["mostReadable"];
    });
    /* harmony import */


    var _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./to-ms-filter */
    "./node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toMsFilter", function () {
      return _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"];
    });
    /* harmony import */


    var _from_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./from-ratio */
    "./node_modules/@ctrl/tinycolor/dist/module/from-ratio.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fromRatio", function () {
      return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["fromRatio"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "legacyRandom", function () {
      return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"];
    });
    /* harmony import */


    var _format_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./format-input */
    "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "inputToRGB", function () {
      return _format_input__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "stringInputToObject", function () {
      return _format_input__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function () {
      return _format_input__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"];
    });
    /* harmony import */


    var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./random */
    "./node_modules/@ctrl/tinycolor/dist/module/random.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "random", function () {
      return _random__WEBPACK_IMPORTED_MODULE_6__["random"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bounds", function () {
      return _random__WEBPACK_IMPORTED_MODULE_6__["bounds"];
    }); // kept for backwards compatability with v1

    /* harmony default export */


    __webpack_exports__["default"] = _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; //# sourceMappingURL=public_api.js.map

    /***/
  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/random.js":
  /*!************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/random.js ***!
    \************************************************************/

  /*! exports provided: random, bounds */

  /***/
  function node_modulesCtrlTinycolorDistModuleRandomJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "random", function () {
      return random;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounds", function () {
      return bounds;
    });
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@ctrl/tinycolor/dist/module/index.js"); // randomColor by David Merfield under the CC0 license
    // https://github.com/davidmerfield/randomColor/


    function random() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Check if we need to generate multiple colors
      if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;

        while (totalColors > colors.length) {
          // Since we're generating multiple colors,
          // incremement the seed. Otherwise we'd just
          // generate the same color each time...
          options.count = null;

          if (options.seed) {
            options.seed += 1;
          }

          colors.push(random(options));
        }

        options.count = totalColors;
        return colors;
      } // First we pick a hue (H)


      var h = pickHue(options.hue, options.seed); // Then use H to determine saturation (S)

      var s = pickSaturation(h, options); // Then use S and H to determine brightness (B).

      var v = pickBrightness(h, s, options);
      var res = {
        h: h,
        s: s,
        v: v
      };

      if (options.alpha !== undefined) {
        res.a = options.alpha;
      } // Then we return the HSB color in the desired format


      return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
    }

    function pickHue(hue, seed) {
      var hueRange = getHueRange(hue);
      var res = randomWithin(hueRange, seed); // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers

      if (res < 0) {
        res = 360 + res;
      }

      return res;
    }

    function pickSaturation(hue, options) {
      if (options.hue === 'monochrome') {
        return 0;
      }

      if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
      }

      var _getColorInfo = getColorInfo(hue),
          saturationRange = _getColorInfo.saturationRange;

      var sMin = saturationRange[0];
      var sMax = saturationRange[1];

      switch (options.luminosity) {
        case 'bright':
          sMin = 55;
          break;

        case 'dark':
          sMin = sMax - 10;
          break;

        case 'light':
          sMax = 55;
          break;

        default:
          break;
      }

      return randomWithin([sMin, sMax], options.seed);
    }

    function pickBrightness(H, S, options) {
      var bMin = getMinimumBrightness(H, S);
      var bMax = 100;

      switch (options.luminosity) {
        case 'dark':
          bMax = bMin + 20;
          break;

        case 'light':
          bMin = (bMax + bMin) / 2;
          break;

        case 'random':
          bMin = 0;
          bMax = 100;
          break;

        default:
          break;
      }

      return randomWithin([bMin, bMax], options.seed);
    }

    function getMinimumBrightness(H, S) {
      var _getColorInfo2 = getColorInfo(H),
          lowerBounds = _getColorInfo2.lowerBounds;

      for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];

        if (S >= s1 && S <= s2) {
          var m = (v2 - v1) / (s2 - s1);
          var b = v1 - m * s1;
          return m * S + b;
        }
      }

      return 0;
    }

    function getHueRange(colorInput) {
      var num = parseInt(colorInput, 10);

      if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
      }

      if (typeof colorInput === 'string') {
        var namedColor = bounds.find(function (n) {
          return n.name === colorInput;
        });

        if (namedColor) {
          var color = defineColor(namedColor);

          if (color.hueRange) {
            return color.hueRange;
          }
        }

        var parsed = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);

        if (parsed.isValid) {
          var hue = parsed.toHsv().h;
          return [hue, hue];
        }
      }

      return [0, 360];
    }

    function getColorInfo(hue) {
      // Maps red colors to make picking hue easier
      if (hue >= 334 && hue <= 360) {
        hue -= 360;
      }

      var _iterator = _createForOfIteratorHelper(bounds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var bound = _step.value;
          var color = defineColor(bound);

          if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      throw Error('Color not found');
    }

    function randomWithin(range, seed) {
      if (seed === undefined) {
        return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
      } // Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/


      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }

    function defineColor(bound) {
      var sMin = bound.lowerBounds[0][0];
      var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
      var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
      var bMax = bound.lowerBounds[0][1];
      return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax]
      };
    }
    /**
     * @hidden
     */


    var bounds = [{
      name: 'monochrome',
      hueRange: null,
      lowerBounds: [[0, 0], [100, 0]]
    }, {
      name: 'red',
      hueRange: [-26, 18],
      lowerBounds: [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
    }, {
      name: 'orange',
      hueRange: [19, 46],
      lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
    }, {
      name: 'yellow',
      hueRange: [47, 62],
      lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
    }, {
      name: 'green',
      hueRange: [63, 178],
      lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
    }, {
      name: 'blue',
      hueRange: [179, 257],
      lowerBounds: [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
    }, {
      name: 'purple',
      hueRange: [258, 282],
      lowerBounds: [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
    }, {
      name: 'pink',
      hueRange: [283, 334],
      lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
    }]; //# sourceMappingURL=random.js.map

    /***/
  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/readability.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/readability.js ***!
    \*****************************************************************/

  /*! exports provided: readability, isReadable, mostReadable */

  /***/
  function node_modulesCtrlTinycolorDistModuleReadabilityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "readability", function () {
      return readability;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isReadable", function () {
      return isReadable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mostReadable", function () {
      return mostReadable;
    });
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@ctrl/tinycolor/dist/module/index.js"); // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

    /**
     * AKA `contrast`
     *
     * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
     */


    function readability(color1, color2) {
      var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
      var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
      return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    }
    /**
     * Ensure that foreground and background color combinations meet WCAG2 guidelines.
     * The third argument is an object.
     *      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
     *      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
     * If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
     *
     * Example
     * ```ts
     * new TinyColor().isReadable('#000', '#111') => false
     * new TinyColor().isReadable('#000', '#111', { level: 'AA', size: 'large' }) => false
     * ```
     */


    function isReadable(color1, color2) {
      var wcag2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        level: 'AA',
        size: 'small'
      };

      var _a, _b;

      var readabilityLevel = readability(color1, color2);

      switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : 'AA') + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : 'small')) {
        case 'AAsmall':
        case 'AAAlarge':
          return readabilityLevel >= 4.5;

        case 'AAlarge':
          return readabilityLevel >= 3;

        case 'AAAsmall':
          return readabilityLevel >= 7;

        default:
          return false;
      }
    }
    /**
     * Given a base color and a list of possible foreground or background
     * colors for that base, returns the most readable color.
     * Optionally returns Black or White if the most readable color is unreadable.
     *
     * @param baseColor - the base color.
     * @param colorList - array of colors to pick the most readable one from.
     * @param args - and object with extra arguments
     *
     * Example
     * ```ts
     * new TinyColor().mostReadable('#123', ['#124", "#125'], { includeFallbackColors: false }).toHexString(); // "#112255"
     * new TinyColor().mostReadable('#123', ['#124", "#125'],{ includeFallbackColors: true }).toHexString();  // "#ffffff"
     * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'large' }).toHexString(); // "#faf3f3"
     * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'small' }).toHexString(); // "#ffffff"
     * ```
     */


    function mostReadable(baseColor, colorList) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        includeFallbackColors: false,
        level: 'AA',
        size: 'small'
      };
      var bestColor = null;
      var bestScore = 0;
      var includeFallbackColors = args.includeFallbackColors,
          level = args.level,
          size = args.size;

      var _iterator2 = _createForOfIteratorHelper(colorList),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var color = _step2.value;
          var score = readability(baseColor, color);

          if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (isReadable(baseColor, bestColor, {
        level: level,
        size: size
      }) || !includeFallbackColors) {
        return bestColor;
      }

      args.includeFallbackColors = false;
      return mostReadable(baseColor, ['#fff', '#000'], args);
    } //# sourceMappingURL=readability.js.map

    /***/

  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js ***!
    \******************************************************************/

  /*! exports provided: toMsFilter */

  /***/
  function node_modulesCtrlTinycolorDistModuleToMsFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toMsFilter", function () {
      return toMsFilter;
    });
    /* harmony import */


    var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./conversion */
    "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@ctrl/tinycolor/dist/module/index.js");
    /**
     * Returns the color represented as a Microsoft filter for use in old versions of IE.
     */


    function toMsFilter(firstColor, secondColor) {
      var color = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
      var hex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
      var secondHex8String = hex8String;
      var gradientType = color.gradientType ? 'GradientType = 1, ' : '';

      if (secondColor) {
        var s = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
        secondHex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
      }

      return "progid:DXImageTransform.Microsoft.gradient(".concat(gradientType, "startColorstr=").concat(hex8String, ",endColorstr=").concat(secondHex8String, ")");
    } //# sourceMappingURL=to-ms-filter.js.map

    /***/

  },

  /***/
  "./node_modules/@ctrl/tinycolor/dist/module/util.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@ctrl/tinycolor/dist/module/util.js ***!
    \**********************************************************/

  /*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */

  /***/
  function node_modulesCtrlTinycolorDistModuleUtilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bound01", function () {
      return bound01;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clamp01", function () {
      return clamp01;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isOnePointZero", function () {
      return isOnePointZero;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPercentage", function () {
      return isPercentage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "boundAlpha", function () {
      return boundAlpha;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "convertToPercentage", function () {
      return convertToPercentage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pad2", function () {
      return pad2;
    });
    /**
     * Take input from [0, n] and return it as [0, 1]
     * @hidden
     */


    function bound01(n, max) {
      if (isOnePointZero(n)) {
        n = '100%';
      }

      var isPercent = isPercentage(n);
      n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n))); // Automatically convert percentage into number

      if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
      } // Handle floating point rounding errors


      if (Math.abs(n - max) < 0.000001) {
        return 1;
      } // Convert into [0, 1] range if it isn't already


      if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
      } else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = n % max / parseFloat(String(max));
      }

      return n;
    }
    /**
     * Force a number between 0 and 1
     * @hidden
     */


    function clamp01(val) {
      return Math.min(1, Math.max(0, val));
    }
    /**
     * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
     * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
     * @hidden
     */


    function isOnePointZero(n) {
      return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
    }
    /**
     * Check to see if string passed in is a percentage
     * @hidden
     */


    function isPercentage(n) {
      return typeof n === 'string' && n.includes('%');
    }
    /**
     * Return a valid alpha value [0,1] with all invalid values being set to 1
     * @hidden
     */


    function boundAlpha(a) {
      a = parseFloat(a);

      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }

      return a;
    }
    /**
     * Replace a decimal with it's percentage value
     * @hidden
     */


    function convertToPercentage(n) {
      if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
      }

      return n;
    }
    /**
     * Force a hex value to have 2 characters
     * @hidden
     */


    function pad2(c) {
      return c.length === 1 ? '0' + c : String(c);
    } //# sourceMappingURL=util.js.map

    /***/

  },

  /***/
  "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js ***!
    \*******************************************************************************/

  /*! exports provided: NgImageSliderComponent, NgImageSliderModule, NgImageSliderService, ɵa, ɵb */

  /***/
  function node_modulesNgImageSlider__ivy_ngcc__Fesm2015NgImageSliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgImageSliderComponent", function () {
      return NgImageSliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgImageSliderModule", function () {
      return NgImageSliderModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgImageSliderService", function () {
      return NgImageSliderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return SliderCustomImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return SliderLightboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["sliderMain"];
    var _c1 = ["imageDiv"];

    function NgImageSliderComponent_div_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx_r11.textDirection);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r8.title);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "image-popup": a0
      };
    };

    var _c3 = function _c3(a0, a1, a2) {
      return {
        "width": a0,
        "margin-left": a1,
        "margin-right": a2
      };
    };

    function NgImageSliderComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgImageSliderComponent_div_4_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var img_r8 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.imageOnClick(img_r8.index);
        })("mouseenter", function NgImageSliderComponent_div_4_div_1_Template_div_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.imageMouseEnterHandler();
        })("mouseleave", function NgImageSliderComponent_div_4_div_1_Template_div_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.imageAutoSlide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgImageSliderComponent_div_4_div_1_div_3_Template, 2, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r7.imagePopup))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c3, ctx_r7.sliderImageWidth + "px", ctx_r7.imageMargin + "px", ctx_r7.imageMargin + "px"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", img_r8.thumbImage || img_r8.posterImage || img_r8.video)("isVideo", !!(img_r8.posterImage || img_r8.video))("alt", img_r8.alt || img_r8.title || "")("title", img_r8.title || img_r8.alt || "")("direction", ctx_r7.textDirection)("ratio", ctx_r7.manageImageRatio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", img_r8.title);
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "with-ng-main-pagination": a0
      };
    };

    var _c5 = function _c5(a0, a1, a2) {
      return {
        "margin-left": a0,
        "width": a1,
        "transition": a2
      };
    };

    function NgImageSliderComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function NgImageSliderComponent_div_4_Template_div_touchstart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.swipe($event, "start");
        })("touchend", function NgImageSliderComponent_div_4_Template_div_touchend_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.swipe($event, "end");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgImageSliderComponent_div_4_div_1_Template, 4, 15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx_r1.paginationShow))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c5, ctx_r1.leftPos + "px", ctx_r1.imageParentDivWidth + "px", ctx_r1.effectStyle));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.imageObj);
      }
    }

    function NgImageSliderComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Provided images array not valid. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c6 = function _c6(a0) {
      return {
        "disable": a0
      };
    };

    function NgImageSliderComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgImageSliderComponent_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.prev();
        })("mouseenter", function NgImageSliderComponent_a_6_Template_a_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.imageMouseEnterHandler();
        })("mouseleave", function NgImageSliderComponent_a_6_Template_a_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.imageAutoSlide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2039");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx_r3.sliderPrevDisable));
      }
    }

    function NgImageSliderComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgImageSliderComponent_a_7_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.next();
        })("mouseenter", function NgImageSliderComponent_a_7_Template_a_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.imageMouseEnterHandler();
        })("mouseleave", function NgImageSliderComponent_a_7_Template_a_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.imageAutoSlide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u203A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx_r4.sliderNextDisable));
      }
    }

    function NgImageSliderComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.visiableImageIndex + 1, " of ", ctx_r5.totalImages, "");
      }
    }

    function NgImageSliderComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "slider-lightbox", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("prevImage", function NgImageSliderComponent_div_9_Template_slider_lightbox_prevImage_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.lightboxArrowClickHandler($event);
        })("nextImage", function NgImageSliderComponent_div_9_Template_slider_lightbox_nextImage_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.lightboxArrowClickHandler($event);
        })("close", function NgImageSliderComponent_div_9_Template_slider_lightbox_close_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paginationShow", ctx_r6.paginationShow)("showVideoControls", ctx_r6.showVideoControls)("arrowKeyMove", ctx_r6.arrowKeyMove)("images", ctx_r6.ligthboxImageObj)("infinite", ctx_r6.infinite)("animationSpeed", ctx_r6.speed)("imageIndex", ctx_r6.activeImageIndex)("show", ctx_r6.ligthboxShow)("direction", ctx_r6.textDirection)("videoAutoPlay", ctx_r6.videoAutoPlay);
      }
    }

    var _c7 = function _c7(a0) {
      return {
        "height": a0
      };
    };

    var _c8 = function _c8(a0) {
      return {
        "ratio": a0
      };
    };

    function SliderCustomImageComponent_div_0_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r1.ratio))("src", ctx_r1.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.alt)("title", ctx_r1.title);
      }
    }

    function SliderCustomImageComponent_div_0_iframe_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 8);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function SliderCustomImageComponent_div_0_video_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderCustomImageComponent_div_0_video_3_Template_video_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.videoClickHandler($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "video_" + ctx_r3.imageIndex)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c8, ctx_r3.ratio))("autoplay", ctx_r3.videoAutoPlay);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("controls", ctx_r3.showVideoControls ? ctx_r3.showVideoControls : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SliderCustomImageComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid file format");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx_r4.direction);
      }
    }

    function SliderCustomImageComponent_div_0_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
      }
    }

    function SliderCustomImageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SliderCustomImageComponent_div_0_img_1_Template, 1, 6, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderCustomImageComponent_div_0_iframe_2_Template, 1, 1, "iframe", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderCustomImageComponent_div_0_video_3_Template, 3, 7, "video", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SliderCustomImageComponent_div_0_div_4_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SliderCustomImageComponent_div_0_span_5_Template, 1, 0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.IMAGE && ctx_r0.fileUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.YOUTUBE && ctx_r0.fileUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.VIDEO);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.fileUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === ctx_r0.YOUTUBE || ctx_r0.type === ctx_r0.VIDEO || ctx_r0.isVideo);
      }
    }

    var _c9 = ["lightboxDiv"];
    var _c10 = ["lightboxImageDiv"];

    function SliderLightboxComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c11 = function _c11(a0) {
      return {
        "width": a0
      };
    };

    function SliderLightboxComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function SliderLightboxComponent_div_0_div_7_Template_div_touchstart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.swipeLightboxImg($event, "start");
        })("touchend", function SliderLightboxComponent_div_0_div_7_Template_div_touchend_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.swipeLightboxImg($event, "end");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r7 = ctx.$implicit;
        var i_r8 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c11, ctx_r3.popupWidth + "px"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "ng-lightbox-image-" + i_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", img_r7.image || img_r7.video)("isVideo", !!(img_r7.posterImage || img_r7.video))("currentImageIndex", ctx_r3.currentImageIndex)("imageIndex", i_r8)("speed", ctx_r3.speed)("videoAutoPlay", ctx_r3.videoAutoPlay && i_r8 == ctx_r3.currentImageIndex)("showVideoControls", ctx_r3.showVideoControls ? 1 : 0)("alt", img_r7.alt || img_r7.title || "")("title", img_r7.title || img_r7.alt || "")("showVideo", true)("direction", ctx_r3.direction);
      }
    }

    function SliderLightboxComponent_div_0_a_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderLightboxComponent_div_0_a_10_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.prevImageLightbox();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2039");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx_r4.lightboxPrevDisable));
      }
    }

    function SliderLightboxComponent_div_0_a_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderLightboxComponent_div_0_a_11_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.nextImageLightbox();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u203A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx_r5.lightboxNextDisable));
      }
    }

    function SliderLightboxComponent_div_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r6.currentImageIndex + 1, " of ", ctx_r6.totalImages, "");
      }
    }

    var _c12 = function _c12(a0, a1, a2) {
      return {
        "margin-left": a0,
        "grid-template-columns": a1,
        "transition": a2
      };
    };

    var _c13 = function _c13(a0, a1) {
      return {
        "show": a0,
        "hide": a1
      };
    };

    function SliderLightboxComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderLightboxComponent_div_0_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.closeLightbox();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SliderLightboxComponent_div_0_div_5_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SliderLightboxComponent_div_0_div_7_Template, 3, 15, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SliderLightboxComponent_div_0_a_10_Template, 2, 3, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SliderLightboxComponent_div_0_a_11_Template, 2, 3, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SliderLightboxComponent_div_0_div_12_Template, 2, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c12, ctx_r0.marginLeft + "px", "repeat(" + ctx_r0.images.length + ",1fr)", ctx_r0.effectStyle));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx_r0.direction)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c13, ctx_r0.title, !ctx_r0.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.images.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.images.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paginationShow);
      }
    }

    var NgImageSliderService = /*#__PURE__*/function () {
      function NgImageSliderService() {
        _classCallCheck(this, NgImageSliderService);
      }
      /**
       * @param {?} str
       * @return {?}
       */


      _createClass(NgImageSliderService, [{
        key: "isBase64",
        value: function isBase64(str) {
          /** @type {?} */
          var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
          return base64regex.test(str);
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "base64FileExtension",
        value: function base64FileExtension(str) {
          return str.substring("data:image/".length, str.indexOf(";base64"));
        }
      }]);

      return NgImageSliderService;
    }();

    NgImageSliderService.ɵfac = function NgImageSliderService_Factory(t) {
      return new (t || NgImageSliderService)();
    };

    NgImageSliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgImageSliderService,
      factory: NgImageSliderService.ɵfac
    });
    /** @nocollapse */

    NgImageSliderService.ctorParameters = function () {
      return [];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgImageSliderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NEXT_ARROW_CLICK_MESSAGE = 'next';
    /** @type {?} */

    var PREV_ARROW_CLICK_MESSAGE = 'previous';

    var NgImageSliderComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdRef
       * @param {?} platformId
       * @param {?} imageSliderService
       * @param {?} elRef
       */
      function NgImageSliderComponent(cdRef, platformId, imageSliderService, elRef // @Inject(ElementRef) private _elementRef: ElementRef
      ) {
        _classCallCheck(this, NgImageSliderComponent);

        this.cdRef = cdRef;
        this.platformId = platformId;
        this.imageSliderService = imageSliderService;
        this.elRef = elRef; // for slider

        this.sliderMainDivWidth = 0;
        this.imageParentDivWidth = 0;
        this.imageObj = [];
        this.ligthboxImageObj = [];
        this.totalImages = 0;
        this.leftPos = 0;
        this.effectStyle = 'all 1s ease-in-out';
        this.speed = 1; // default speed in second
        // default speed in second

        this.sliderPrevDisable = false;
        this.sliderNextDisable = false;
        this.slideImageCount = 1;
        this.sliderImageWidth = 205;
        this.sliderImageReceivedWidth = 205;
        this.sliderImageHeight = 200;
        this.sliderImageReceivedHeight = 205;
        this.sliderImageSizeWithPadding = 211;
        this.autoSlideCount = 0;
        this.showArrowButton = true;
        this.textDirection = 'ltr';
        this.imageMargin = 3;
        this.infinite = false;
        this.imagePopup = true;
        this.images = [];
        this.videoAutoPlay = false;
        this.paginationShow = false;
        this.arrowKeyMove = true;
        this.manageImageRatio = false;
        this.showVideoControls = true; // @Outputs

        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lightboxArrowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lightboxClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // for lightbox

        this.ligthboxShow = false;
        this.activeImageIndex = 0;
        this.visiableImageIndex = 0;
      } // @inputs

      /**
       * @param {?} data
       * @return {?}
       */


      _createClass(NgImageSliderComponent, [{
        key: "onResize",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onResize(event) {
          this.setSliderWidth();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          if (event && event.key) {
            if (event.key.toLowerCase() === 'arrowright' && !this.ligthboxShow && this.arrowKeyMove) {
              this.next();
            }

            if (event.key.toLowerCase() === 'arrowleft' && !this.ligthboxShow && this.arrowKeyMove) {
              this.prev();
            }

            if (event.key.toLowerCase() === 'escape' && this.ligthboxShow) {
              this.close();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // @TODO: for future use
          // console.log(this._elementRef)
          // for slider
          if (this.infinite) {
            this.effectStyle = 'none';
            this.leftPos = -1 * this.sliderImageSizeWithPadding * this.slideImageCount;

            for (var i = 1; i <= this.slideImageCount; i++) {
              this.imageObj.unshift(this.imageObj[this.imageObj.length - i]);
            }
          }
        } // for slider

        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.setSliderWidth();
          this.cdRef.detectChanges();

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.imageAutoSlide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.images && changes.images.hasOwnProperty('previousValue') && changes.images.hasOwnProperty('currentValue') && changes.images.previousValue != changes.images.currentValue) {
            this.setSliderImages(changes.images.currentValue);
          }

          if (changes && changes.imageSize) {
            /** @type {?} */
            var size = changes.imageSize;

            if (size && size.previousValue && size.currentValue && size.previousValue.width && size.previousValue.height && size.currentValue.width && size.currentValue.height && (size.previousValue.width !== size.currentValue.width || size.previousValue.height !== size.currentValue.height)) {
              this.setSliderWidth();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.images && this.ligthboxImageObj && this.images.length !== this.ligthboxImageObj.length) {
            this.setSliderImages(this.images);
          }
        }
        /**
         * @param {?} imgObj
         * @return {?}
         */

      }, {
        key: "setSliderImages",
        value: function setSliderImages(imgObj) {
          if (imgObj && imgObj instanceof Array && imgObj.length) {
            this.imageObj = imgObj.map(
            /**
            * @param {?} img
            * @param {?} index
            * @return {?}
            */
            function (img, index) {
              img['index'] = index;
              return img;
            });
            this.ligthboxImageObj = _toConsumableArray(this.imageObj);
            this.totalImages = this.imageObj.length; // this.imageParentDivWidth = imgObj.length * this.sliderImageSizeWithPadding;

            this.setSliderWidth();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setSliderWidth",
        value: function setSliderWidth() {
          if (this.sliderMain && this.sliderMain.nativeElement && this.sliderMain.nativeElement.offsetWidth) {
            this.sliderMainDivWidth = this.sliderMain.nativeElement.offsetWidth;
          }

          if (this.sliderMainDivWidth && this.sliderImageReceivedWidth) {
            if (typeof this.sliderImageReceivedWidth === 'number') {
              this.sliderImageWidth = this.sliderImageReceivedWidth;
            } else if (typeof this.sliderImageReceivedWidth === 'string') {
              if (this.sliderImageReceivedWidth.indexOf('px') >= 0) {
                this.sliderImageWidth = parseFloat(this.sliderImageReceivedWidth);
              } else if (this.sliderImageReceivedWidth.indexOf('%') >= 0) {
                this.sliderImageWidth = +(this.sliderMainDivWidth * parseFloat(this.sliderImageReceivedWidth) / 100).toFixed(2);
              } else if (parseFloat(this.sliderImageReceivedWidth)) {
                this.sliderImageWidth = parseFloat(this.sliderImageReceivedWidth);
              }
            }
          }

          if (window && window.innerHeight && this.sliderImageReceivedHeight) {
            if (typeof this.sliderImageReceivedHeight === 'number') {
              this.sliderImageHeight = this.sliderImageReceivedHeight;
            } else if (typeof this.sliderImageReceivedHeight === 'string') {
              if (this.sliderImageReceivedHeight.indexOf('px') >= 0) {
                this.sliderImageHeight = parseFloat(this.sliderImageReceivedHeight);
              } else if (this.sliderImageReceivedHeight.indexOf('%') >= 0) {
                this.sliderImageHeight = +(window.innerHeight * parseFloat(this.sliderImageReceivedHeight) / 100).toFixed(2);
              } else if (parseFloat(this.sliderImageReceivedHeight)) {
                this.sliderImageHeight = parseFloat(this.sliderImageReceivedHeight);
              }
            }
          }

          this.sliderImageSizeWithPadding = this.sliderImageWidth + this.imageMargin * 2;
          this.imageParentDivWidth = this.imageObj.length * this.sliderImageSizeWithPadding;

          if (this.imageDiv && this.imageDiv.nativeElement && this.imageDiv.nativeElement.offsetWidth) {
            this.leftPos = this.infinite ? -1 * this.sliderImageSizeWithPadding * this.slideImageCount : 0;
          }

          this.nextPrevSliderButtonDisable();
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "imageOnClick",
        value: function imageOnClick(index) {
          if (this.imagePopup) {
            this.activeImageIndex = index;
            this.showLightbox();
          }

          this.imageClick.emit(index);
        }
        /**
         * @return {?}
         */

      }, {
        key: "imageAutoSlide",
        value: function imageAutoSlide() {
          var _this = this;

          if (this.infinite && this.autoSlideCount && !this.ligthboxShow) {
            this.autoSlideInterval = setInterval(
            /**
            * @return {?}
            */
            function () {
              _this.next();
            }, this.autoSlideCount);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "imageMouseEnterHandler",
        value: function imageMouseEnterHandler() {
          if (this.infinite && this.autoSlideCount && this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "prev",
        value: function prev() {
          if (!this.sliderPrevDisable) {
            if (this.infinite) {
              this.infinitePrevImg();
            } else {
              this.prevImg();
            }

            this.arrowClick.emit(PREV_ARROW_CLICK_MESSAGE);
            this.sliderArrowDisableTeam();
            this.getVisiableIndex();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          if (!this.sliderNextDisable) {
            if (this.infinite) {
              this.infiniteNextImg();
            } else {
              this.nextImg();
            }

            this.arrowClick.emit(NEXT_ARROW_CLICK_MESSAGE);
            this.sliderArrowDisableTeam();
            this.getVisiableIndex();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "prevImg",
        value: function prevImg() {
          if (0 >= this.leftPos + this.sliderImageSizeWithPadding * this.slideImageCount) {
            this.leftPos += this.sliderImageSizeWithPadding * this.slideImageCount;
          } else {
            this.leftPos = 0;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "nextImg",
        value: function nextImg() {
          if (this.imageParentDivWidth + this.leftPos - this.sliderMainDivWidth > this.sliderImageSizeWithPadding * this.slideImageCount) {
            this.leftPos -= this.sliderImageSizeWithPadding * this.slideImageCount;
          } else if (this.imageParentDivWidth + this.leftPos - this.sliderMainDivWidth > 0) {
            this.leftPos -= this.imageParentDivWidth + this.leftPos - this.sliderMainDivWidth;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "infinitePrevImg",
        value: function infinitePrevImg() {
          var _this2 = this;

          this.effectStyle = "all ".concat(this.speed, "s ease-in-out");
          this.leftPos = 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this2.effectStyle = 'none';
            _this2.leftPos = -1 * _this2.sliderImageSizeWithPadding * _this2.slideImageCount;

            for (var i = 0; i < _this2.slideImageCount; i++) {
              _this2.imageObj.unshift(_this2.imageObj[_this2.imageObj.length - _this2.slideImageCount - 1]);

              _this2.imageObj.pop();
            }
          }, this.speed * 1000);
        }
        /**
         * @return {?}
         */

      }, {
        key: "infiniteNextImg",
        value: function infiniteNextImg() {
          var _this3 = this;

          this.effectStyle = "all ".concat(this.speed, "s ease-in-out");
          this.leftPos = -2 * this.sliderImageSizeWithPadding * this.slideImageCount;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this3.effectStyle = 'none';

            for (var i = 0; i < _this3.slideImageCount; i++) {
              _this3.imageObj.push(_this3.imageObj[_this3.slideImageCount]);

              _this3.imageObj.shift();
            }

            _this3.leftPos = -1 * _this3.sliderImageSizeWithPadding * _this3.slideImageCount;
          }, this.speed * 1000);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getVisiableIndex",
        value: function getVisiableIndex() {
          /** @type {?} */
          var currentIndex = Math.round((Math.abs(this.leftPos) + this.sliderImageWidth) / this.sliderImageWidth);

          if (this.imageObj[currentIndex - 1] && this.imageObj[currentIndex - 1]['index'] !== undefined) {
            this.visiableImageIndex = this.imageObj[currentIndex - 1]['index'];
          }
        }
        /**
         * Disable slider left/right arrow when image moving
         * @return {?}
         */

      }, {
        key: "sliderArrowDisableTeam",
        value: function sliderArrowDisableTeam() {
          var _this4 = this;

          this.sliderNextDisable = true;
          this.sliderPrevDisable = true;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this4.nextPrevSliderButtonDisable();
          }, this.speed * 1000);
        }
        /**
         * @return {?}
         */

      }, {
        key: "nextPrevSliderButtonDisable",
        value: function nextPrevSliderButtonDisable() {
          this.sliderNextDisable = false;
          this.sliderPrevDisable = false;

          if (!this.infinite) {
            if (this.imageParentDivWidth + this.leftPos <= this.sliderMainDivWidth) {
              this.sliderNextDisable = true;
            }

            if (this.leftPos >= 0) {
              this.sliderPrevDisable = true;
            }
          }
        } // for lightbox

        /**
         * @return {?}
         */

      }, {
        key: "showLightbox",
        value: function showLightbox() {
          if (this.imageObj.length) {
            this.imageMouseEnterHandler();
            this.ligthboxShow = true;
            this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.ligthboxShow = false;
          this.elRef.nativeElement.ownerDocument.body.style.overflow = '';
          this.lightboxClose.emit();
          this.imageAutoSlide();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "lightboxArrowClickHandler",
        value: function lightboxArrowClickHandler(event) {
          this.lightboxArrowClick.emit(event);
        }
        /**
         * Swipe event handler
         * Reference from https://stackoverflow.com/a/44511007/2067646
         * @param {?} e
         * @param {?} when
         * @return {?}
         */

      }, {
        key: "swipe",
        value: function swipe(e, when) {
          /** @type {?} */
          var coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
          /** @type {?} */

          var time = new Date().getTime();

          if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
          } else if (when === 'end') {
            /** @type {?} */
            var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            /** @type {?} */

            var duration = time - this.swipeTime;

            if (duration < 1000 //
            && Math.abs(direction[0]) > 30 // Long enough
            && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
              // Horizontal enough
              if (direction[0] < 0) {
                this.next();
              } else {
                this.prev();
              }
            }
          }
        }
      }, {
        key: "imageSize",
        set: function set(data) {
          if (data && typeof data === 'object') {
            if (data.hasOwnProperty('space') && typeof data['space'] === 'number' && data['space'] > -1) {
              this.imageMargin = data['space'];
            }

            if (data.hasOwnProperty('width') && (typeof data['width'] === 'number' || typeof data['width'] === 'string')) {
              this.sliderImageReceivedWidth = data['width']; // this.sliderImageSizeWithPadding = data['width'] + (this.imageMargin * 2); // addeing padding with image width
            }

            if (data.hasOwnProperty('height') && (typeof data['height'] === 'number' || typeof data['height'] === 'string')) {
              this.sliderImageReceivedHeight = data['height'];
            }
          }
        }
        /**
         * @param {?} dir
         * @return {?}
         */

      }, {
        key: "direction",
        set: function set(dir) {
          if (dir) {
            this.textDirection = dir;
          }
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "animationSpeed",
        set: function set(data) {
          if (data && typeof data === 'number' && data >= 0.1 && data <= 5) {
            this.speed = data;
            this.effectStyle = "all ".concat(this.speed, "s ease-in-out");
          }
        }
        /**
         * @param {?} count
         * @return {?}
         */

      }, {
        key: "slideImage",
        set: function set(count) {
          if (count && typeof count === 'number') {
            this.slideImageCount = Math.round(count);
          }
        }
        /**
         * @param {?} count
         * @return {?}
         */

      }, {
        key: "autoSlide",
        set: function set(count) {
          if (count && (typeof count === 'number' || typeof count === 'boolean')) {
            if (typeof count === 'number' && count >= 1 && count <= 5) {
              count = Math.round(count);
            } else if (typeof count === 'boolean') {
              count = 1;
            }

            this.autoSlideCount = count * 1000;
          }
        }
        /**
         * @param {?} flag
         * @return {?}
         */

      }, {
        key: "showArrow",
        set: function set(flag) {
          if (flag !== undefined && typeof flag === 'boolean') {
            this.showArrowButton = flag;
          }
        }
      }]);

      return NgImageSliderComponent;
    }();

    NgImageSliderComponent.ɵfac = function NgImageSliderComponent_Factory(t) {
      return new (t || NgImageSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgImageSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NgImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgImageSliderComponent,
      selectors: [["ng-image-slider"]],
      viewQuery: function NgImageSliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderMain = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageDiv = _t.first);
        }
      },
      hostBindings: function NgImageSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NgImageSliderComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup", function NgImageSliderComponent_keyup_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        infinite: "infinite",
        imagePopup: "imagePopup",
        images: "images",
        videoAutoPlay: "videoAutoPlay",
        paginationShow: "paginationShow",
        arrowKeyMove: "arrowKeyMove",
        manageImageRatio: "manageImageRatio",
        showVideoControls: "showVideoControls",
        imageSize: "imageSize",
        direction: "direction",
        animationSpeed: "animationSpeed",
        slideImage: "slideImage",
        autoSlide: "autoSlide",
        showArrow: "showArrow"
      },
      outputs: {
        imageClick: "imageClick",
        arrowClick: "arrowClick",
        lightboxArrowClick: "lightboxArrowClick",
        lightboxClose: "lightboxClose"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 10,
      vars: 12,
      consts: [[1, "ng-image-slider", 3, "ngStyle"], [1, "ng-image-slider-container"], [1, "main", 3, "ngStyle"], ["sliderMain", ""], ["class", "main-inner", 3, "ngClass", "ngStyle", "touchstart", "touchend", 4, "ngIf"], ["class", "ng-image-slider-error", 4, "ngIf"], ["class", "prev icons prev-icon", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "next icons next-icon", 3, "ngClass", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "ng-main-pagination", 4, "ngIf"], [4, "ngIf"], [1, "main-inner", 3, "ngClass", "ngStyle", "touchstart", "touchend"], ["class", "img-div", 3, "ngClass", "ngStyle", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "img-div", 3, "ngClass", "ngStyle", "click", "mouseenter", "mouseleave"], ["imageDiv", ""], [3, "imageUrl", "isVideo", "alt", "title", "direction", "ratio"], ["class", "caption", 3, "dir", 4, "ngIf"], [1, "caption", 3, "dir"], [1, "ng-image-slider-error"], [1, "prev", "icons", "prev-icon", 3, "ngClass", "click", "mouseenter", "mouseleave"], [1, "next", "icons", "next-icon", 3, "ngClass", "click", "mouseenter", "mouseleave"], [1, "ng-main-pagination"], [3, "paginationShow", "showVideoControls", "arrowKeyMove", "images", "infinite", "animationSpeed", "imageIndex", "show", "direction", "videoAutoPlay", "prevImage", "nextImage", "close"]],
      template: function NgImageSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgImageSliderComponent_div_4_Template, 2, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgImageSliderComponent_div_5_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgImageSliderComponent_a_6_Template, 2, 3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgImageSliderComponent_a_7_Template, 2, 3, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgImageSliderComponent_div_8_Template, 2, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgImageSliderComponent_div_9_Template, 2, 10, "div", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c7, ctx.sliderImageHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c7, ctx.sliderImageHeight + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageObj.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageObj.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArrowButton && ctx.imageObj.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArrowButton && ctx.imageObj.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageObj.length && ctx.paginationShow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ligthboxShow);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], SliderCustomImageComponent, SliderLightboxComponent];
      },
      styles: [".ng-image-slider{display:inline-block;position:relative;width:100%}.ng-image-slider .ng-image-slider-container .main{overflow:hidden;position:absolute;height:200px;width:100%}.ng-image-slider .ng-image-slider-container .main .main-inner{width:1760px;padding:0;height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner.with-ng-main-pagination{height:calc(100% - 30px)}.ng-image-slider .ng-image-slider-container .main .main-inner .full-screen{background:url(data:image/png;base64,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) 0 0/40px 40px no-repeat;position:absolute;z-index:8;display:block;height:40px;width:40px;top:4px;right:8px;opacity:.4;transition:.5s ease-in-out;cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:205px;height:100%;margin-right:3px;margin-left:3px;position:relative;border-radius:5px;display:inline-block;box-shadow:inset 0 0 1px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div.image-popup{cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video{position:absolute;top:0;bottom:0;margin:auto;height:100%;width:100%;left:0;right:0;border-radius:5px}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img.ratio,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video.ratio{width:auto;height:auto;max-width:100%;max-height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .youtube-icon{background:url(data:image/png;base64,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) center center/140px 80px no-repeat;position:absolute;z-index:6;display:block;height:100%;width:100%;top:0;left:0}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .caption{position:absolute;bottom:0;padding:5px;color:#fff;background-image:linear-gradient(to right,rgba(0,0,0,.1),rgba(0,0,0,.25),rgba(0,0,0,.5),rgba(0,0,0,.25),rgba(0,0,0,.1));width:100%;text-align:center;box-sizing:border-box;border-radius:0 0 5px 5px}.ng-image-slider .ng-image-slider-container .main .main-inner:hover .full-screen{transition:.5s ease-in-out;opacity:1}.ng-image-slider .ng-image-slider-container .main .next,.ng-image-slider .ng-image-slider-container .main .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;outline:0;width:35px;height:35px;font-size:35px;line-height:30px;z-index:8;transition:.5s ease-in-out;text-align:center}.ng-image-slider .ng-image-slider-container .main .next:hover,.ng-image-slider .ng-image-slider-container .main .prev:hover{background-color:#d4cdcd;background-position:-192px -415px}.ng-image-slider .ng-image-slider-container .main .next.disable,.ng-image-slider .ng-image-slider-container .main .prev.disable{color:#bbb;background-color:#fff;opacity:.5;cursor:default}.ng-image-slider .ng-image-slider-container .main .prev{left:10px}.ng-image-slider .ng-image-slider-container .main .prev:hover{background-position:-194px -450px}.ng-image-slider .ng-image-slider-container .ng-main-pagination{background-color:inherit;color:inherit;position:absolute;height:30px;width:calc(100% - 6px);text-align:center;bottom:0;font-size:16px;line-height:30px;border-radius:0 0 5px 5px;margin:0 3px}.ng-image-slider .ng-image-slider-error{color:red;text-align:center;height:100%;top:50%;position:relative}@media (max-width:1199px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:170px;max-width:100%}}@media (max-width:991px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:297px;max-width:100%}}@media (max-width:768px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:247px;max-width:100%}}@media (max-width:576px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:350px;max-width:100%}}.ng-image-fullscreen-view{position:fixed;z-index:1031;background-color:rgba(0,0,0,.6);width:100%;height:100%;top:0;overflow:hidden;transition:.5s ease-in-out;left:0;text-align:center}.ng-image-fullscreen-view.image-fullview-hide{display:none!important}.ng-image-fullscreen-view .lightbox-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1f1f1f;transition:.5s;display:flex;justify-content:center;align-items:center}.ng-image-fullscreen-view .lightbox-wrapper.ng-ligthbox-pagination{height:calc(100% - 30px)}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div{width:100%;height:100%;border:1px solid rgba(0,0,0,.35);position:relative;overflow:hidden}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader{background-color:inherit;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader .mnml-spinner{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr);-ms-grid-rows:100%;grid-template-rows:100%;grid-column-gap:0;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image{width:1299px;height:100%;position:relative}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-show{opacity:1;display:block}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-hide{opacity:0;display:none}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main img{transition:.5s ease-in-out;width:auto;height:auto;max-height:100%;max-width:100%;position:absolute;z-index:11;top:0;bottom:0;margin:auto;left:0;right:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main iframe,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main video{top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;border:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption{position:absolute;z-index:11;top:0;margin:auto;padding:5px;color:#fff;background-color:rgba(0,0,0,.35);max-width:100%;left:0;right:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.show{display:block}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.hide{display:none}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;width:38px;height:38px;font-size:35px;z-index:12;line-height:30px;outline:0;color:#000;transition:.3s ease-in-out}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next:hover,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev:hover{background-color:#d4cdcd}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next.disable,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev.disable{color:#bbb;background-color:#fff}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{left:10px}.ng-image-fullscreen-view .lightbox-wrapper .close{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:center center;background-size:32px;position:absolute;top:10px;right:10px;color:#000;background-color:#fff;padding:0;opacity:1;border-radius:50%;height:36px;width:36px;z-index:12;cursor:pointer;transition:.2s}.ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}.ng-image-fullscreen-view .invalid-msg{color:#fff;font-size:18px;position:absolute;top:45%;left:45%}.ng-image-fullscreen-view .popup-pagination{background-color:#1f1f1f;color:#fff;position:absolute;height:30px;width:100%;text-align:center;bottom:0;font-size:16px;line-height:30px}@media (max-width:768px){.ng-image-fullscreen-view .lightbox-wrapper{width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}}"],
      encapsulation: 2
    });
    /** @nocollapse */

    NgImageSliderComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: NgImageSliderService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgImageSliderComponent.propDecorators = {
      sliderMain: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sliderMain', {
          "static": false
        }]
      }],
      imageDiv: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['imageDiv', {
          "static": false
        }]
      }],
      imageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infinite: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imagePopup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationSpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      images: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoSlide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showArrow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      videoAutoPlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      paginationShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowKeyMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      manageImageRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showVideoControls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      arrowClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      lightboxArrowClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      lightboxClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize', ['$event']]
      }],
      handleKeyboardEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:keyup', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgImageSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-image-slider',
          template: "<div class=\"ng-image-slider\" [ngStyle]=\"{'height':sliderImageHeight+'px'}\">\n    <div class=\"ng-image-slider-container\">\n        <div class=\"main\"\n            [ngStyle]=\"{'height':sliderImageHeight+'px'}\"\n            #sliderMain>\n            <div class=\"main-inner\"\n                *ngIf=\"imageObj.length\"\n                [ngClass]=\"{'with-ng-main-pagination': paginationShow}\"\n                [ngStyle]=\"{'margin-left':leftPos+'px', 'width':imageParentDivWidth+'px', 'transition': effectStyle}\"\n                (touchstart)=\"swipe($event, 'start')\"\n                (touchend)=\"swipe($event, 'end')\">\n                <div [ngClass]=\"{'image-popup': imagePopup}\"\n                    [ngStyle]=\"{'width':sliderImageWidth+'px', 'margin-left':imageMargin+'px', 'margin-right':imageMargin+'px'}\"\n                    class=\"img-div\"\n                    *ngFor=\"let img of imageObj; let i = index\"\n                    (click)=\"imageOnClick(img.index)\"\n                    (mouseenter)=\"imageMouseEnterHandler()\"\n                    (mouseleave)=\"imageAutoSlide()\"\n                    #imageDiv>\n                    <custom-img [imageUrl]=\"img.thumbImage || img.posterImage || img.video\"\n                        [isVideo]=\"!!(img.posterImage || img.video)\"\n                        [alt]=\"img.alt || img.title || ''\"\n                        [title]=\"img.title || img.alt || ''\"\n                        [direction]=\"textDirection\"\n                        [ratio]=\"manageImageRatio\">\n                    </custom-img>\n                    <div [dir]=\"textDirection\" class=\"caption\" *ngIf=\"img.title\">{{ img.title }}</div>\n                </div>\n            </div>\n            <div class=\"ng-image-slider-error\"\n                *ngIf=\"!imageObj.length\">\n                Provided images array not valid.\n            </div>\n            <a *ngIf=\"showArrowButton && imageObj.length > 1\"\n                [ngClass]=\"{'disable': sliderPrevDisable}\"\n                class=\"prev icons prev-icon\"\n                (click)=\"prev()\"\n                (mouseenter)=\"imageMouseEnterHandler()\"\n                (mouseleave)=\"imageAutoSlide()\">&lsaquo;</a>\n            <a *ngIf=\"showArrowButton && imageObj.length > 1\"\n                [ngClass]=\"{'disable': sliderNextDisable}\"\n                class=\"next icons next-icon\"\n                (click)=\"next()\"\n                (mouseenter)=\"imageMouseEnterHandler()\"\n                (mouseleave)=\"imageAutoSlide()\">&rsaquo;</a>\n        </div>\n        <div *ngIf=\"imageObj.length && paginationShow\" class=\"ng-main-pagination\">{{visiableImageIndex + 1}} of {{totalImages}}</div>\n    </div>\n</div>\n<div *ngIf=\"ligthboxShow\">\n    <slider-lightbox\n        [paginationShow]=\"paginationShow\"\n        [showVideoControls]=\"showVideoControls\"\n        [arrowKeyMove]=\"arrowKeyMove\"\n        [images]=\"ligthboxImageObj\"\n        [infinite]=\"infinite\"\n        [animationSpeed]=\"speed\"\n        [imageIndex]=\"activeImageIndex\"\n        [show]=\"ligthboxShow\"\n        [direction]=\"textDirection\"\n        [videoAutoPlay]=\"videoAutoPlay\"\n        (prevImage)=\"lightboxArrowClickHandler($event)\"\n        (nextImage)=\"lightboxArrowClickHandler($event)\"\n        (close)=\"close()\">\n    </slider-lightbox>\n</div>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".ng-image-slider{display:inline-block;position:relative;width:100%}.ng-image-slider .ng-image-slider-container .main{overflow:hidden;position:absolute;height:200px;width:100%}.ng-image-slider .ng-image-slider-container .main .main-inner{width:1760px;padding:0;height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner.with-ng-main-pagination{height:calc(100% - 30px)}.ng-image-slider .ng-image-slider-container .main .main-inner .full-screen{background:url(data:image/png;base64,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) 0 0/40px 40px no-repeat;position:absolute;z-index:8;display:block;height:40px;width:40px;top:4px;right:8px;opacity:.4;transition:.5s ease-in-out;cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:205px;height:100%;margin-right:3px;margin-left:3px;position:relative;border-radius:5px;display:inline-block;box-shadow:inset 0 0 1px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div.image-popup{cursor:pointer}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video{position:absolute;top:0;bottom:0;margin:auto;height:100%;width:100%;left:0;right:0;border-radius:5px}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div img.ratio,.ng-image-slider .ng-image-slider-container .main .main-inner .img-div video.ratio{width:auto;height:auto;max-width:100%;max-height:100%}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .youtube-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAC0CAMAAADSOgUjAAAAA3NCSVQICAjb4U/gAAAC9FBMVEX///+vr6+lpaWPj498fHx4eHh2dnZ0dHRvb29sbGxqampmZmZiYmJeXl5aWlpYWFhUVFRSUlJQUFBMTExKSkpISEhERERCQkJAQEA+Pj44ODg2NjYzMzMwMDAuLi4sLCwqKiooKCgkJCQiIiIgICAYGBgUFBQSEhIODg4MDAwKCgoICAgGBgYEBAQAAADj4+PV1dXBwcG/v7+9vb23t7ezs7Ovr6+rq6ulpaWhoaGPj4+Li4uJiYmHh4eDg4OBgYF+fn58fHx4eHhycnJvb29sbGxmZmZiYmJeXl5aWlpWVlZUVFRSUlJQUFBOTk5KSkpISEhGRkZERERCQkI+Pj47Ozs4ODg2NjYzMzMwMDAuLi4oKCgkJCQiIiIgICAeHh4cHBwUFBQSEhIODg4ICAgEBAQAAADl5eWrq6unp6ejo6OhoaGdnZ2ZmZmVlZWTk5OPj4+Li4uJiYmHh4eBgYF+fn58fHx4eHh0dHRycnJsbGxqampmZmZiYmJWVlYiIiIaGhoAAADMzMzDw8PBwcG/v7+9vb27u7u5ubm3t7e1tbWzs7OxsbGvr6+tra2pqamnp6elpaWhoaGfn5+dnZ2ZmZmVlZWTk5ORkZGJiYlISEjv7+/p6enj4+PT09PPz8/MzMzJycnHx8fFxcXDw8PBwcG/v7+9vb27u7u5ubm3t7ezs7Ovr6+Li4vf39/Z2dnX19fV1dXT09PR0dHPz8/MzMzJycnHx8e9vb3t7e3l5eXj4+Pf39/d3d3b29vZ2dnX19fV1dXT09PR0dHPz8/MzMzp6enn5+fl5eXj4+Ph4eHf39/d3d3X19fT09O9vb3v7+/t7e3r6+vp6enn5+fl5eXj4+Pf39/Z2dnT09PHx8f19fXz8/Px8fHv7+/t7e3r6+vp6enn5+fl5eXj4+P5+fn39/f19fXz8/Px8fHv7+/t7e3f39/7+/v5+fn39/f19fXz8/Px8fHv7+/////7+/v5+fn39/fz8/P////7+/v///9a1shPAAAA/HRSTlMAERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzRERERERERERERERERERERERERERERERERFVVVVVVVVVVVVVVVVVVVVVVVVVmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3eIiIiIiIiIiIiImZmZmZmZmZmZmZmqqqqqqqqqqqqqu7u7u7u7u7vMzMzMzMzM3d3d3d3u7v9/AAjkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADA2LzEyLzE09BLGOQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAA/MSURBVHic7Z15fBTlGcenhz20rbWXKHhU5RDhra22ilal0IpC1VJb1IKlVpmiRUBiuBEBFWIQMXgfAUtIREAIgciVBIpCLjUXeITdRITsJrqHurPp7PzTea+59pjZza7JOzu/z8eoO7PvO893n+d933nned/hOEeOHDly5MiRI0eOHDly5MiRI0eOsAAAvX0JbApAdFpxDkirAonU2xfX15UQngMxsSzBcyDGU1L4HIRGmQByECZUTDLg+1f/+pe/+JesSy+/8rvngpgnOgy5KCryJ6OWvvRyXbPbGwx2h8Pd3YGgx9VWve+lV6YOiQM7m2Xk8WDh7gaPPyJCSaKEJGIJgWMNe/KnOAg10nEAY/P3tfoEUVWISPOJ4G/cmTPJQYikY/D7R/d0aLmJemk/CzVsnfFDB6HW/u9N3+cRJcJJyy0SiRgxouD2NRZfmeUINaYPyGsSZHwqvJAQCLpr6g8eLC8p2bjhrbf217Z4A35B64uS6Cmdms0ENU3fskbofBSf4GmvK189lzd2FROe23ig2uXXOqK/YjqXpQQ1Ri9zK/gkMdxWWZhLDvE64c/uzN9W97ncNxOEUqBqdFYiVC0ecUjANEKSFOp6a/nYKHIGjBy4YtPRIA14SQpuzcIwVg1+w6/Eo7d29WgDPeX/tB/L51wwq7wlRBFGGvOyjKBq7fJW3J5BfG8u0NIzNoD6qJb/647n63z0y769t2QTQsXQG/eGCAHBU3SbSicePcKQnAemzD7sRwjlPx1Z5ISKmf92YXxS5Nha1fcSwjM6Yu7hIAlk4b9naDsmG0sxcq1fwm3Y59sBlxQ+FSHgprVEJPwzNF+ZFQSphT/bE8H8hNoxHEgOnhYi4Io6CcHgo+qh3jYzY6L2XdtIwte7SfGm5IUJjqsP4bKEnUBpP3vb0AyJWvcrL/GalpHx8RkeY0Y95lQQgtcDuLhQpc0JUtuWEYOF8v5x+MUtwUgRf3t6Gy5QrLE1QWr0I6j7kId+BTHxWS5H44Q/rYpgl27qb70c1kQNy/Nhb2keE6PzSLIsihCAInRLI0qN/exKkFr1BOFXMymKXyrlKU6Yj9oFuVm90KZRTGy6l/CrB0Z+KZaoELzPgwiKtUo7mAErek/EpBEeSe4tRfEg7UF7FG/6MH7Ai9vWCq5HhfZNEYtOd2MveTst/IwE53YigpF19msGqUHV+Obf6H9pKBkRzMU+GH7Cds0gsWY75lefPn4GgjOCiKDnOpu5IDFmqYD4HRmq45em0jHB/DCqoukiWxEktlzzBXIP923p5acjyK3FP9J+O3Uk1JQW1IH4Z6abn94HK1EzEV5uI4LEkPW4ASzW8kt3HXLBk9vgQFPqvNA2AIkdN5xENwq1GeGnJZjrQxUdTE8f1QdErDiMHKNrHMgIPy3BjcjVhedsApAYgXtg4akMOaAWIKhBd4uNU+wxGMQ2DIZPkETxQMb4aQnmBOGPFVpvi3tiYkIhnK+Tum7KVACrVUGC/0FB3HqHHQhiCy6Ed6liZFMm+akEQb+PYXXiVo59gMQA6BKi1AwsAkzRYtUFn0Utrqcf8y5ITOrnhh4hFHAW+CmjjxSsVlwQHJUH7WLkVY71foRcfQlqkxo0PYjZV1KEqLjg09AFJfclrLsgvvpT25ADrjYPYDC4ZwRVF2yGLii+lro39w3hq39UdUATfuC03btP6QlCSpB7DE7LSG2MA8QXP6AFpSGYO6B84Dut0smt3wAGJVuj7ILDYe4D8nqWCeJrH4FuTt13W+AHftIqieLJslFA22GnRLBYgB1//TCWXZBcehmK4F3AAj9w1jEJ5vt53p5vfGqXXKXyFztgrR0jWQ5ifOXnozFMYJElgP1d+Mma9MWBkakhVFxwG5o9W84wQHLl02EES/XAZAiDj53jRh4Is8e/rJpvTP1IolqefwjGsFh3FrsEyXWXotuqzdYAnteGAaI1D1+886Ix8dJytfKXGqELBq5lHeCwJuiA3pGWIhhMxABp6nnw3YeSRqjEcDmak1nJbj+Mr/sPfhiQ7w8GJjch2OpJFCBF6H930T1JIqQAn0cxXHExqwCJuXloIrDYzAE5HHeT2hWAdPVS97uz/2lMg7NSMRgPey/J9VdWY5hcdgUEGLzMUgTz/N8/1gDEEEUp/OELyQSyclIVbH39sxkH6IIO2D7eLNkiHkD8KA8itJ7NRc/YRJ2fZYATYBMoVlmKYPmkydEAEUGp+4MXLCfE0eMzAzCGqxgFSIx40gcBFnLWmkD+H8ejASoInzF6YeKqwSloFqglvQ/xvzKRa94G0wH9eRb7kDgA0dBaRvh+gbW2kBwcWgPntLx/YRrgIWi7Z4HZIMYUIF4TFz6+ZYoFhPTYTli5bw7TABugDW2g5wAJQuGTZyfqEcatG4AV6EtPs9kI4mse5oamN5tGsBWAdGHxic1m+V34c567NAxDv4RlgNd7rXXCCsBPEgAkjaEUObFJhzBO3QBcHiRP85kFyE0NQJvLTSOYAnzYFCAaWkdOFE9JNDtBAI5E+RA1TLaB5JKXwWGg8Fo6AWKE4sdv8vHXMxBi49vh6S2ARYLkigvhDb2wCpiOxZIBiOcZIl27JsYplFY2tAWe3chkyjm54lcgQP/z5iYkBZB0J5HOdadzCQnWwhA+Zu7/fVDkil+OQIC56Q1hJZBFsWPbt7gY5VKAaCbDwy5AnnsJAZybbg9UA1n0vfGD+ABhwrTYweTaLy3AwMKMACQT/w2/iQ+wCgI8ybwHZgygjK/r5UQhvF8PkCGCgABEbWBgTiYAoh0/tp4fsxfRhbCHxWXsOoD+B9MOELV/4XfmcKTkmNUrnQiDAPXDmOfSP4yR/7y/hY/XulGA7A9jlqKB9JPpBYjwfbplsTopE7t2ANBA2s0yQHwrtzHN98Ki+OWuxfyS+PmahN+ZTfALLSwDVCYT0uWBqPH733sv8ksS8KMAr0OTCbUMAwQ3oOmsynTdCyN83R9CfEt4UwcEl+mns1gECNCE6mEuPSGMBs6fbVmyJDE/xf/xhOoGJgFGTemnASDk9+nmJUZ+8QGugIMocQ2Ld3LKrQh+qLTI1AksAJTx4caP4DPjB0A5SvOdyzBAwJXCcYwv3yrAeFP6eKu8jxZFu1+Ch0oDq+FjTc94lgGCVYYH64lOjwsQz/6d2KLBl7BXIoe+iXJjm6ew2Amrs+o+/FTJzAsowFhP5RC+Ty3jU+p+QJ/awSZA4III2m/tAUA0cH7vYWvRq617U0iXXMQowAqUaHu5leysWADxwPkj3HdYw6fOxaD0tlxGAaoJlhBBkcX0NgNAPGX64bxY0WsK8M8owdI9kc0+RDFjIUrxrbvYxAzigZMNAOV/Pkui8dPVPAst8KkbyqgDUjPuQUnmnaNNXJB4oC4/ELrul5sXJ9H4aSsG61GS+WZWI1ixAy1zMLWDAFQyVEN01iCp4NXWfDda5hC8ilmAlCBeultnJUuf5+9sp+tE4A7xusbPIj2l3vloAHX0bDZHgVDEkP5oONthdjeHAU6iAOWR3ydJN36aaulSrxJ2HVCJYbzY0MwSbDZeJ4JmnHelhE+tthWNn5gdxHCqJfehHSDaEsw+qWfDlUrocdvbt8cY+VmCgH8JLk+gS/SYBUgJ/vwI2jb/mcS+gA+dCz1QEj6YzfOp4aOV4nk0YQ2Ts9FU1PDlKIYbTWxBh85xS6J4HKbjk9hNeqM84oBT8ZL/gQxHMKcQnIB3PVlpwQXPapW8JbcBnk8Rn/KjHUL7nhQz7YDaIS3sFw6ZtEfwwI8O7fl2D/ApAXxfN3T6rrsYB0jt+Rtchy6G8xPvgwMPDBwEtG9OSjr86DfQVGpknfmzmD4uCmC9svWTaRBHK/n6QAHq+DtvYt0BlUHtALz52EoTj+ghPqWAwU1olfx20wVmfV+EILdORFsxDbAymk4Zn+LwG1C33zGWeQdUXfDMY+jGaoe1hf+p4VO+PMqDRuNFTA+iqagLrsBbgN5vYVyWss0UYI1Eb32Yd0DFKB4cQpvQuq/P3MiW8ivCm9A+bQsHVIN4rh+/7eOSTBGkFc0MoBSG/Wb7rLAixQXfRI4R2pAhx6D+d44bb8Q9xiYOqFo25CjeCn52ZlyQlrkX9ffC47bhp7rgOPy+FJfZWKYntXDrI6il2Gllt1FWRAlyq/CbFjLx8jda3jQBDaGPDLGPA2pckCsV6bsqkp8msFAD4K4jL2S5MbP7LX/VUggOasYEd6SXIC0KjEIvKhWFAnvx0xC81YUJbgdpJKjwG+PCr7wqsxs/DcHpHpztUnqxSrBnRiqlgDkuXPY++/FTAPJguR9bWTkoPQTVMmaS36ZmeMLsVUZFzZQJhvEmnzUXaF+m3sNi5QLWBPDzvCN3pTKT3fcVRVBqPoNL9olb/EK5R7pxqccvALbkp4libiMh6L6XS23eXl8i6o/eiOAym86wYQOIpfGWFYRgYC3QhnFKk89Io5tIJubRHwN7BjCUhuDjHST95fBYoFeSZWE91kH41d9uY34agjyY6SYmux4fYkBoOfuKnn5zpYALE0oHpfQolB1pCN5cHSFWV/xWH8cmthtxD1t6jPwWQd0b6+zIT9/sl/nxi+Ulz9oBRiqYgJ5B1PvpkabWRsj76dtzU9x9nylpCHJPdRGCYvuG2HQSSmbFXVNJfwWhMtW3FzAm1X4ejKuLUIRtxUM4wBsjOSE+jrt2b5Am8n/+WJbw0xMEhV6JbBYdcRUO5KLawvjiuHv3BET8bUmsuUrX/NmZn54g97t6ge63HfHuzrHugYUNAYmmUneWDM8ifjqCPLhkTWOIbuIk+lvL5k02ZTd8QsGeDoEuYhL9ZTeBrOKnHYlAs+8uaY0oNERfY9mqBefHp/enGRtqO0Kiiq96oQGf/flxRoRgnSuixKMohTzNFa+ufuBrp1Ec6N8Xff2KGa+V1rh9dBEJ7HsCh3Os729uKwEdQg4sawyTHgHtuS2Jgt/bVFtRVlael59XvGPHgbpqd9APX9OiniR6D9zPGbwvW/gZfFDuTcC0eq/MhDoXhCjpVm1K6AN6VJTCbUU301TMLOTHGZ1Q/vvHotqAssqLcNIv3FQ+FdwHCkDU1vpZhY/T39USENNer/MIouJqRkHPE0P+9p0rx8XAl238jPMCGMfgES/srHYHQqIkGiVz9XmbKjZffWoselnIjzMgVNqz8ybMW/Xq/pomb4ffBycNI4Lf73W11JeVPDvu7GFKDjqf9fig9E6kzc/n77r1oQXzcmbl5MyaPX/hLbfz2hOSmP+yvUCUYkJS145E3zD3tgm9rWiEOl58InYOPqRYXBBGQDvouPM0vX3pfUXx+Jioty+7T8mh12M5+NIgB14a5MBLhxx2aZIDzpEjR44cOXLkyJEjR44cOXLkyJGjdOr/ODCzC5DKTiMAAAAASUVORK5CYII=) center center/140px 80px no-repeat;position:absolute;z-index:6;display:block;height:100%;width:100%;top:0;left:0}.ng-image-slider .ng-image-slider-container .main .main-inner .img-div .caption{position:absolute;bottom:0;padding:5px;color:#fff;background-image:linear-gradient(to right,rgba(0,0,0,.1),rgba(0,0,0,.25),rgba(0,0,0,.5),rgba(0,0,0,.25),rgba(0,0,0,.1));width:100%;text-align:center;box-sizing:border-box;border-radius:0 0 5px 5px}.ng-image-slider .ng-image-slider-container .main .main-inner:hover .full-screen{transition:.5s ease-in-out;opacity:1}.ng-image-slider .ng-image-slider-container .main .next,.ng-image-slider .ng-image-slider-container .main .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;outline:0;width:35px;height:35px;font-size:35px;line-height:30px;z-index:8;transition:.5s ease-in-out;text-align:center}.ng-image-slider .ng-image-slider-container .main .next:hover,.ng-image-slider .ng-image-slider-container .main .prev:hover{background-color:#d4cdcd;background-position:-192px -415px}.ng-image-slider .ng-image-slider-container .main .next.disable,.ng-image-slider .ng-image-slider-container .main .prev.disable{color:#bbb;background-color:#fff;opacity:.5;cursor:default}.ng-image-slider .ng-image-slider-container .main .prev{left:10px}.ng-image-slider .ng-image-slider-container .main .prev:hover{background-position:-194px -450px}.ng-image-slider .ng-image-slider-container .ng-main-pagination{background-color:inherit;color:inherit;position:absolute;height:30px;width:calc(100% - 6px);text-align:center;bottom:0;font-size:16px;line-height:30px;border-radius:0 0 5px 5px;margin:0 3px}.ng-image-slider .ng-image-slider-error{color:red;text-align:center;height:100%;top:50%;position:relative}@media (max-width:1199px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:170px;max-width:100%}}@media (max-width:991px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:297px;max-width:100%}}@media (max-width:768px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:247px;max-width:100%}}@media (max-width:576px){.ng-image-slider .ng-image-slider-container .main .main-inner .img-div{width:350px;max-width:100%}}.ng-image-fullscreen-view{position:fixed;z-index:1031;background-color:rgba(0,0,0,.6);width:100%;height:100%;top:0;overflow:hidden;transition:.5s ease-in-out;left:0;text-align:center}.ng-image-fullscreen-view.image-fullview-hide{display:none!important}.ng-image-fullscreen-view .lightbox-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1f1f1f;transition:.5s;display:flex;justify-content:center;align-items:center}.ng-image-fullscreen-view .lightbox-wrapper.ng-ligthbox-pagination{height:calc(100% - 30px)}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div{width:100%;height:100%;border:1px solid rgba(0,0,0,.35);position:relative;overflow:hidden}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader{background-color:inherit;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .pre-loader .mnml-spinner{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr);-ms-grid-rows:100%;grid-template-rows:100%;grid-column-gap:0;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image{width:1299px;height:100%;position:relative}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main{background-image:url(data:image/gif;base64,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);background-repeat:no-repeat;background-position:center center;width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-show{opacity:1;display:block}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image.ng-image-slider-hide{opacity:0;display:none}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main img{transition:.5s ease-in-out;width:auto;height:auto;max-height:100%;max-width:100%;position:absolute;z-index:11;top:0;bottom:0;margin:auto;left:0;right:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main iframe,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .lightbox-image-main .lightbox-image .custom-image-main video{top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;border:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption{position:absolute;z-index:11;top:0;margin:auto;padding:5px;color:#fff;background-color:rgba(0,0,0,.35);max-width:100%;left:0;right:0}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.show{display:block}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .caption.hide{display:none}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{position:absolute;right:10px;top:50%;background-color:#fff;border-radius:50%;cursor:pointer;margin-top:-16px;width:38px;height:38px;font-size:35px;z-index:12;line-height:30px;outline:0;color:#000;transition:.3s ease-in-out}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next:hover,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev:hover{background-color:#d4cdcd}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .next.disable,.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev.disable{color:#bbb;background-color:#fff}.ng-image-fullscreen-view .lightbox-wrapper .lightbox-div .prev{left:10px}.ng-image-fullscreen-view .lightbox-wrapper .close{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:center center;background-size:32px;position:absolute;top:10px;right:10px;color:#000;background-color:#fff;padding:0;opacity:1;border-radius:50%;height:36px;width:36px;z-index:12;cursor:pointer;transition:.2s}.ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}.ng-image-fullscreen-view .invalid-msg{color:#fff;font-size:18px;position:absolute;top:45%;left:45%}.ng-image-fullscreen-view .popup-pagination{background-color:#1f1f1f;color:#fff;position:absolute;height:30px;width:100%;text-align:center;bottom:0;font-size:16px;line-height:30px}@media (max-width:768px){.ng-image-fullscreen-view .lightbox-wrapper{width:100%;height:100%}.ng-image-fullscreen-view .lightbox-wrapper.error-msg{background-image:none}}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: NgImageSliderService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imagePopup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoAutoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginationShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrowKeyMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        manageImageRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showVideoControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        arrowClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        lightboxArrowClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        lightboxClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        imageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationSpeed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup', ['$event']]
        }],
        sliderMain: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderMain', {
            "static": false
          }]
        }],
        imageDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageDiv', {
            "static": false
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    /** @type {?} */

    var validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'];
    /** @type {?} */

    var validVideoExtensions = ['mp4'];

    var SliderCustomImageComponent = /*#__PURE__*/function () {
      /**
       * @param {?} imageSliderService
       * @param {?} sanitizer
       * @param {?} document
       */
      function SliderCustomImageComponent(imageSliderService, sanitizer, document) {
        _classCallCheck(this, SliderCustomImageComponent);

        this.imageSliderService = imageSliderService;
        this.sanitizer = sanitizer;
        this.YOUTUBE = 'youtube';
        this.IMAGE = 'image';
        this.VIDEO = 'video';
        this.fileUrl = '';
        this.fileExtension = '';
        this.type = this.IMAGE; // @inputs

        this.showVideo = false;
        this.videoAutoPlay = false;
        this.showVideoControls = 1;
        this.speed = 1;
        this.isVideo = false;
        this.alt = '';
        this.title = '';
        this.direction = 'ltr';
        this.ratio = false;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(SliderCustomImageComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.imageUrl && this.imageUrl && this.imageUrl && typeof this.imageUrl === 'string' && (changes.imageUrl && changes.imageUrl.firstChange || this.videoAutoPlay)) {
            this.setUrl();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setUrl",
        value: function setUrl() {
          /** @type {?} */
          var url = this.imageUrl;
          this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.fileExtension = url.split('.').pop().split(/\#|\?/)[0];

          if (this.imageSliderService.base64FileExtension(url) && (validFileExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1 || validVideoExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1)) {
            this.fileExtension = this.imageSliderService.base64FileExtension(url);
          } // verify for youtube url

          /** @type {?} */


          var match = url.match(youtubeRegExp);

          if (match && match[2].length === 11) {
            if (this.showVideo) {
              this.type = this.YOUTUBE;
              this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'.concat(match[2]).concat(this.videoAutoPlay ? '?autoplay=1&enablejsapi=1' : '?autoplay=0&enablejsapi=1', '&controls=').concat(this.showVideoControls));
            } else {
              this.type = this.IMAGE;
              this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/".concat(match[2], "/0.jpg"));
            }
          } else if (this.fileExtension && validFileExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
            this.type = this.IMAGE;
          } else if (this.fileExtension && validVideoExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
            this.type = this.VIDEO;

            if (this.videoAutoPlay && document.getElementById("video_".concat(this.imageIndex))) {
              /** @type {?} */
              var videoObj = document.getElementById("video_".concat(this.imageIndex));
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                videoObj.play();
              }, this.speed * 1000);
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "videoClickHandler",
        value: function videoClickHandler(event) {
          if (event && event.srcElement && !this.showVideoControls) {
            if (event.srcElement.paused) {
              event.srcElement.play();
            } else {
              event.srcElement.pause();
            }
          }
        }
      }]);

      return SliderCustomImageComponent;
    }();

    SliderCustomImageComponent.ɵfac = function SliderCustomImageComponent_Factory(t) {
      return new (t || SliderCustomImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgImageSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    SliderCustomImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderCustomImageComponent,
      selectors: [["custom-img"]],
      inputs: {
        showVideo: "showVideo",
        videoAutoPlay: "videoAutoPlay",
        showVideoControls: "showVideoControls",
        speed: "speed",
        isVideo: "isVideo",
        alt: "alt",
        title: "title",
        direction: "direction",
        ratio: "ratio",
        currentImageIndex: "currentImageIndex",
        imageIndex: "imageIndex",
        imageUrl: "imageUrl"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "custom-image-main", 4, "ngIf"], [1, "custom-image-main"], ["class", "image", 3, "ngClass", "src", "alt", "title", 4, "ngIf"], ["class", "youtube", "frameborder", "0", "allow", "autoplay", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["class", "video", "type", "video/mp4", "controlsList", "nodownload", 3, "id", "ngClass", "autoplay", "click", 4, "ngIf"], ["class", "invalid-msg", 3, "dir", 4, "ngIf"], ["class", "youtube-icon", 4, "ngIf"], [1, "image", 3, "ngClass", "src", "alt", "title"], ["frameborder", "0", "allow", "autoplay", "allowfullscreen", "", 1, "youtube", 3, "src"], ["type", "video/mp4", "controlsList", "nodownload", 1, "video", 3, "id", "ngClass", "autoplay", "click"], ["type", "video/mp4", 3, "src"], [1, "invalid-msg", 3, "dir"], [1, "youtube-icon"]],
      template: function SliderCustomImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SliderCustomImageComponent_div_0_Template, 6, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileUrl);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });
    /** @nocollapse */

    SliderCustomImageComponent.ctorParameters = function () {
      return [{
        type: NgImageSliderService
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    SliderCustomImageComponent.propDecorators = {
      showVideo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      videoAutoPlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showVideoControls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      currentImageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      speed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isVideo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      alt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ratio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderCustomImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'custom-img',
          template: "<div *ngIf=\"fileUrl\" class=\"custom-image-main\">\n    <img class=\"image\"\n        [ngClass]=\"{'ratio': ratio}\"\n        *ngIf=\"type === IMAGE && fileUrl\"\n        [src]=\"fileUrl\"\n        [alt]=\"alt\"\n        [title]=\"title\">\n    <iframe class=\"youtube\"\n        *ngIf=\"type === YOUTUBE && fileUrl\"\n        [src]=\"fileUrl\"\n        frameborder=\"0\"\n        allow=\"autoplay\"\n        allowfullscreen></iframe>\n    <video class=\"video\"\n        [id]=\"'video_' + imageIndex\"\n        [ngClass]=\"{'ratio': ratio}\"\n        (click)=\"videoClickHandler($event)\"\n        [autoplay]=\"videoAutoPlay\"\n        *ngIf=\"type === VIDEO\"\n        type=\"video/mp4\"\n        [attr.controls]=\"showVideoControls ? showVideoControls : null\"\n        controlsList=\"nodownload\">\n        <source [src]=\"fileUrl\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n    </video>\n    <div [dir]=\"direction\" *ngIf=\"!fileUrl\" class=\"invalid-msg\">Invalid file format</div>\n    <span *ngIf=\"type === YOUTUBE || type === VIDEO || isVideo\" class=\"youtube-icon\"></span>\n</div>"
        }]
      }], function () {
        return [{
          type: NgImageSliderService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        showVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoAutoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showVideoControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        speed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentImageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE = 'lightbox next';
    /** @type {?} */

    var LIGHTBOX_PREV_ARROW_CLICK_MESSAGE = 'lightbox previous';

    var SliderLightboxComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdRef
       * @param {?} sanitizer
       * @param {?} elRef
       * @param {?} document
       */
      function SliderLightboxComponent(cdRef, sanitizer, elRef, document) {
        _classCallCheck(this, SliderLightboxComponent);

        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.elRef = elRef;
        this.document = document;
        this.totalImages = 0;
        this.nextImageIndex = -1;
        this.popupWidth = 1200;
        this.marginLeft = 0;
        this.imageFullscreenView = false;
        this.lightboxPrevDisable = false;
        this.lightboxNextDisable = false;
        this.showLoading = true;
        this.effectStyle = 'none';
        this.speed = 1; // default speed in second
        // default speed in second

        this.title = '';
        this.currentImageIndex = 0; // @Inputs

        this.images = [];
        this.videoAutoPlay = false;
        this.direction = 'ltr';
        this.paginationShow = false;
        this.infinite = false;
        this.arrowKeyMove = true;
        this.showVideoControls = true; // @Output

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.prevImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} index
       * @return {?}
       */


      _createClass(SliderLightboxComponent, [{
        key: "onResize",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onResize(event) {
          this.effectStyle = 'none';
          this.setPopupSliderWidth();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          if (event && event.key && this.arrowKeyMove) {
            if (event.key.toLowerCase() === 'arrowright') {
              this.nextImageLightbox();
            }

            if (event.key.toLowerCase() === 'arrowleft') {
              this.prevImageLightbox();
            }

            if (event.key.toLowerCase() === 'escape') {
              this.closeLightbox();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.resetState();
        }
        /**
         * @return {?}
         */

      }, {
        key: "setPopupSliderWidth",
        value: function setPopupSliderWidth() {
          var _this5 = this;

          if (window && window.innerWidth) {
            this.popupWidth = window.innerWidth;
            this.totalImages = this.images.length;

            if (typeof this.currentImageIndex === 'number' && this.currentImageIndex !== undefined) {
              this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
              this.getImageData();
              this.nextPrevDisable();
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this5.showLoading = false;
              }, 500);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeLightbox",
        value: function closeLightbox() {
          this.close.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "prevImageLightbox",
        value: function prevImageLightbox() {
          this.effectStyle = "all ".concat(this.speed, "s ease-in-out");

          if (this.currentImageIndex > 0 && !this.lightboxPrevDisable) {
            this.currentImageIndex--;
            this.prevImage.emit(LIGHTBOX_PREV_ARROW_CLICK_MESSAGE);
            this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
            this.getImageData();
            this.nextPrevDisable();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "nextImageLightbox",
        value: function nextImageLightbox() {
          this.effectStyle = "all ".concat(this.speed, "s ease-in-out");

          if (this.currentImageIndex < this.images.length - 1 && !this.lightboxNextDisable) {
            this.currentImageIndex++;
            this.nextImage.emit(LIGHTBOX_NEXT_ARROW_CLICK_MESSAGE);
            this.marginLeft = -1 * this.popupWidth * this.currentImageIndex;
            this.getImageData();
            this.nextPrevDisable();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "nextPrevDisable",
        value: function nextPrevDisable() {
          var _this6 = this;

          this.lightboxNextDisable = true;
          this.lightboxPrevDisable = true;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this6.applyButtonDisableCondition();
          }, this.speed * 1000);
        }
        /**
         * @return {?}
         */

      }, {
        key: "applyButtonDisableCondition",
        value: function applyButtonDisableCondition() {
          this.lightboxNextDisable = false;
          this.lightboxPrevDisable = false;

          if (!this.infinite && this.currentImageIndex >= this.images.length - 1) {
            this.lightboxNextDisable = true;
          }

          if (!this.infinite && this.currentImageIndex <= 0) {
            this.lightboxPrevDisable = true;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getImageData",
        value: function getImageData() {
          if (this.images && this.images.length && typeof this.currentImageIndex === 'number' && this.currentImageIndex !== undefined && this.images[this.currentImageIndex] && (this.images[this.currentImageIndex]['image'] || this.images[this.currentImageIndex]['video'])) {
            this.title = this.images[this.currentImageIndex]['title'] || '';
            this.totalImages = this.images.length;

            for (var iframeI in this.document.getElementsByTagName('iframe')) {
              if (this.document.getElementsByTagName('iframe')[iframeI] && this.document.getElementsByTagName('iframe')[iframeI].contentWindow && this.document.getElementsByTagName('iframe')[iframeI].contentWindow.postMessage) {
                this.document.getElementsByTagName('iframe')[iframeI].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
              }
            }

            for (var videoI in this.document.getElementsByTagName('video')) {
              if (this.document.getElementsByTagName('video')[videoI] && this.document.getElementsByTagName('video')[videoI].pause) {
                this.document.getElementsByTagName('video')[videoI].pause();
              }
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetState",
        value: function resetState() {
          this.images = [];
        }
        /**
         * Swipe event handler
         * Reference from https://stackoverflow.com/a/44511007/2067646
         * @param {?} e
         * @param {?} when
         * @return {?}
         */

      }, {
        key: "swipeLightboxImg",
        value: function swipeLightboxImg(e, when) {
          /** @type {?} */
          var coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
          /** @type {?} */

          var time = new Date().getTime();

          if (when === 'start') {
            this.swipeLightboxImgCoord = coord;
            this.swipeLightboxImgTime = time;
          } else if (when === 'end') {
            /** @type {?} */
            var direction = [coord[0] - this.swipeLightboxImgCoord[0], coord[1] - this.swipeLightboxImgCoord[1]];
            /** @type {?} */

            var duration = time - this.swipeLightboxImgTime;

            if (duration < 1000 //
            && Math.abs(direction[0]) > 30 // Long enough
            && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
              // Horizontal enough
              if (direction[0] < 0) {
                this.nextImageLightbox();
              } else {
                this.prevImageLightbox();
              }
            }
          }
        }
      }, {
        key: "imageIndex",
        set: function set(index) {
          if (index !== undefined && index > -1 && index < this.images.length) {
            this.currentImageIndex = index;
          }

          this.nextPrevDisable();
        }
        /**
         * @param {?} visiableFlag
         * @return {?}
         */

      }, {
        key: "show",
        set: function set(visiableFlag) {
          this.imageFullscreenView = visiableFlag;
          this.elRef.nativeElement.ownerDocument.body.style.overflow = '';

          if (visiableFlag === true) {
            this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden'; // this.getImageData();

            this.setPopupSliderWidth();
          }
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "animationSpeed",
        set: function set(data) {
          if (data && typeof data === 'number' && data >= 0.1 && data <= 5) {
            this.speed = data;
          }
        }
      }]);

      return SliderLightboxComponent;
    }();

    SliderLightboxComponent.ɵfac = function SliderLightboxComponent_Factory(t) {
      return new (t || SliderLightboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    SliderLightboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderLightboxComponent,
      selectors: [["slider-lightbox"]],
      viewQuery: function SliderLightboxComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lightboxDiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lightboxImageDiv = _t.first);
        }
      },
      hostBindings: function SliderLightboxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SliderLightboxComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup", function SliderLightboxComponent_keyup_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        images: "images",
        videoAutoPlay: "videoAutoPlay",
        direction: "direction",
        paginationShow: "paginationShow",
        infinite: "infinite",
        arrowKeyMove: "arrowKeyMove",
        showVideoControls: "showVideoControls",
        imageIndex: "imageIndex",
        show: "show",
        animationSpeed: "animationSpeed"
      },
      outputs: {
        close: "close",
        prevImage: "prevImage",
        nextImage: "nextImage"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "ng-image-fullscreen-view", 4, "ngIf"], [1, "ng-image-fullscreen-view"], [1, "lightbox-wrapper"], [1, "close", 3, "click"], [1, "lightbox-div"], ["lightboxDiv", ""], ["class", "pre-loader", 4, "ngIf"], [1, "lightbox-image-main", 3, "ngStyle"], ["class", "lightbox-image", 3, "ngStyle", "touchstart", "touchend", 4, "ngFor", "ngForOf"], [1, "caption", 3, "dir", "ngClass"], ["class", "prev icons prev-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "next icons next-icon", 3, "ngClass", "click", 4, "ngIf"], ["class", "popup-pagination", 4, "ngIf"], [1, "pre-loader"], [1, "mnml-spinner"], [1, "lightbox-image", 3, "ngStyle", "touchstart", "touchend"], ["lightboxImageDiv", ""], [3, "imageUrl", "isVideo", "currentImageIndex", "imageIndex", "speed", "videoAutoPlay", "showVideoControls", "alt", "title", "showVideo", "direction"], [1, "prev", "icons", "prev-icon", 3, "ngClass", "click"], [1, "next", "icons", "next-icon", 3, "ngClass", "click"], [1, "popup-pagination"]],
      template: function SliderLightboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SliderLightboxComponent_div_0_Template, 13, 16, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageFullscreenView);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], SliderCustomImageComponent],
      encapsulation: 2
    });
    /** @nocollapse */

    SliderLightboxComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    SliderLightboxComponent.propDecorators = {
      lightboxDiv: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['lightboxDiv', {
          "static": false
        }]
      }],
      lightboxImageDiv: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['lightboxImageDiv', {
          "static": false
        }]
      }],
      images: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      show: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      videoAutoPlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      paginationShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationSpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infinite: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowKeyMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showVideoControls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      close: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      prevImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nextImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize', ['$event']]
      }],
      handleKeyboardEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:keyup', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderLightboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'slider-lightbox',
          template: "<div *ngIf=\"imageFullscreenView\" class=\"ng-image-fullscreen-view\">\n    <div class=\"lightbox-wrapper\">\n        <a class=\"close\" (click)=\"closeLightbox()\"></a>\n        <div class=\"lightbox-div\" #lightboxDiv>\n            <div *ngIf=\"showLoading\" class=\"pre-loader\">\n                <div class=\"mnml-spinner\"></div>\n            </div>\n            <div class=\"lightbox-image-main\"\n                [ngStyle]=\"{'margin-left': marginLeft + 'px', 'grid-template-columns': 'repeat('+images.length+',1fr)', 'transition': effectStyle}\">\n                <div class=\"lightbox-image\"\n                    [ngStyle]=\"{'width': popupWidth + 'px'}\"\n                    *ngFor=\"let img of images; let i = index\"\n                    [attr.id]=\"'ng-lightbox-image-' + i\"\n                    (touchstart)=\"swipeLightboxImg($event, 'start')\"\n                    (touchend)=\"swipeLightboxImg($event, 'end')\"\n                    #lightboxImageDiv>\n                    <custom-img\n                        [imageUrl]=\"img.image || img.video\"\n                        [isVideo]=\"!!(img.posterImage || img.video)\"\n                        [currentImageIndex]=\"currentImageIndex\"\n                        [imageIndex]=\"i\"\n                        [speed]=\"speed\"\n                        [videoAutoPlay]=\"videoAutoPlay && i == currentImageIndex\"\n                        [showVideoControls]=\"showVideoControls ? 1 : 0\"\n                        [alt]=\"img.alt || img.title || ''\"\n                        [title]=\"img.title || img.alt || ''\"\n                        [showVideo]=\"true\"\n                        [direction]=\"direction\">\n                    </custom-img>\n                </div>\n            </div>\n            <div [dir]=\"direction\" [ngClass]=\"{'show': title, 'hide': !title}\" class=\"caption\">{{ title }}</div>\n            <a *ngIf=\"images.length > 1\" [ngClass]=\"{'disable': lightboxPrevDisable}\" class=\"prev icons prev-icon\" (click)=\"prevImageLightbox()\">&lsaquo;</a>\n            <a *ngIf=\"images.length > 1\" [ngClass]=\"{'disable': lightboxNextDisable}\" class=\"next icons next-icon\" (click)=\"nextImageLightbox()\">&rsaquo;</a>\n        </div>\n    </div>\n    <div *ngIf=\"paginationShow\" class=\"popup-pagination\">{{currentImageIndex + 1}} of {{totalImages}}</div>\n</div>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoAutoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paginationShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrowKeyMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showVideoControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        prevImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nextImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        imageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationSpeed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup', ['$event']]
        }],
        lightboxDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['lightboxDiv', {
            "static": false
          }]
        }],
        lightboxImageDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['lightboxImageDiv', {
            "static": false
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgImageSliderModule = function NgImageSliderModule() {
      _classCallCheck(this, NgImageSliderModule);
    };

    NgImageSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgImageSliderModule
    });
    NgImageSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgImageSliderModule_Factory(t) {
        return new (t || NgImageSliderModule)();
      },
      providers: [NgImageSliderService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgImageSliderModule, {
        declarations: function declarations() {
          return [NgImageSliderComponent, SliderCustomImageComponent, SliderLightboxComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [NgImageSliderComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgImageSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [NgImageSliderComponent, SliderCustomImageComponent, SliderLightboxComponent],
          providers: [NgImageSliderService],
          exports: [NgImageSliderComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-image-slider.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-color/__ivy_ngcc__/fesm2015/ngx-color.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/ngx-color/__ivy_ngcc__/fesm2015/ngx-color.js ***!
    \*******************************************************************/

  /*! exports provided: AlphaComponent, AlphaModule, CheckboardComponent, CheckboardModule, ColorWrap, ColorWrapModule, CoordinatesDirective, CoordinatesModule, EditableInputComponent, EditableInputModule, HueComponent, HueModule, RaisedComponent, RaisedModule, SaturationComponent, SaturationModule, ShadeComponent, ShadeModule, SwatchComponent, SwatchModule, getCheckerboard, getContrastingColor, isValidHex, render, simpleCheckForValidColor, toState */

  /***/
  function node_modulesNgxColor__ivy_ngcc__Fesm2015NgxColorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlphaComponent", function () {
      return AlphaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlphaModule", function () {
      return AlphaModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboardComponent", function () {
      return CheckboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboardModule", function () {
      return CheckboardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorWrap", function () {
      return ColorWrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorWrapModule", function () {
      return ColorWrapModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoordinatesDirective", function () {
      return CoordinatesDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoordinatesModule", function () {
      return CoordinatesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableInputComponent", function () {
      return EditableInputComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableInputModule", function () {
      return EditableInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HueComponent", function () {
      return HueComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HueModule", function () {
      return HueModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RaisedComponent", function () {
      return RaisedComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RaisedModule", function () {
      return RaisedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaturationComponent", function () {
      return SaturationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaturationModule", function () {
      return SaturationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShadeComponent", function () {
      return ShadeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShadeModule", function () {
      return ShadeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwatchComponent", function () {
      return SwatchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwatchModule", function () {
      return SwatchModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCheckerboard", function () {
      return getCheckerboard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getContrastingColor", function () {
      return getContrastingColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isValidHex", function () {
      return isValidHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "simpleCheckForValidColor", function () {
      return simpleCheckForValidColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toState", function () {
      return toState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ctrl/tinycolor */
    "./node_modules/@ctrl/tinycolor/dist/module/public_api.js");

    function EditableInputComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function EditableInputComponent_span_2_Template_span_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r1.handleMousedown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.labelStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
      }
    }

    function HueComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r0.left)("top", ctx_r0.top);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r0.pointer);
      }
    }

    var _c0 = ["*"];

    function SwatchComponent_color_checkboard_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "color-checkboard", 2);
      }
    }

    var checkboardCache = {};

    function render(c1, c2, size) {
      if (typeof document === 'undefined') {
        return null;
      }

      var canvas = document.createElement('canvas');
      canvas.width = size * 2;
      canvas.height = size * 2;
      var ctx = canvas.getContext('2d');

      if (!ctx) {
        return null;
      } // If no context can be found, return early.


      ctx.fillStyle = c1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = c2;
      ctx.fillRect(0, 0, size, size);
      ctx.translate(size, size);
      ctx.fillRect(0, 0, size, size);
      return canvas.toDataURL();
    }

    function getCheckerboard(c1, c2, size) {
      var key = "".concat(c1, "-").concat(c2, "-").concat(size);

      if (checkboardCache[key]) {
        return checkboardCache[key];
      }

      var checkboard = render(c1, c2, size);

      if (!checkboard) {
        return null;
      }

      checkboardCache[key] = checkboard;
      return checkboard;
    }

    var CheckboardComponent = /*#__PURE__*/function () {
      function CheckboardComponent() {
        _classCallCheck(this, CheckboardComponent);

        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
      }

      _createClass(CheckboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var background = getCheckerboard(this.white, this.grey, this.size);
          this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: "url(".concat(background, ") center left")
          };
        }
      }]);

      return CheckboardComponent;
    }();

    CheckboardComponent.ɵfac = function CheckboardComponent_Factory(t) {
      return new (t || CheckboardComponent)();
    };

    CheckboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CheckboardComponent,
      selectors: [["color-checkboard"]],
      inputs: {
        white: "white",
        size: "size",
        grey: "grey",
        boxShadow: "boxShadow",
        borderRadius: "borderRadius"
      },
      decls: 1,
      vars: 1,
      consts: [[1, "grid", 3, "ngStyle"]],
      template: function CheckboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.gridStyles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".grid[_ngcontent-%COMP%] {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n  }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CheckboardComponent.prototype, "white", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CheckboardComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CheckboardComponent.prototype, "grey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CheckboardComponent.prototype, "boxShadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], CheckboardComponent.prototype, "borderRadius", void 0);

    var CheckboardModule = function CheckboardModule() {
      _classCallCheck(this, CheckboardModule);
    };

    CheckboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CheckboardModule
    });
    CheckboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CheckboardModule_Factory(t) {
        return new (t || CheckboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    var CoordinatesDirective = /*#__PURE__*/function () {
      function CoordinatesDirective(el) {
        _classCallCheck(this, CoordinatesDirective);

        this.el = el;
        this.coordinatesChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mousechange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mouseListening = false;
      }

      _createClass(CoordinatesDirective, [{
        key: "mousemove",
        value: function mousemove($event, x, y) {
          var isTouch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({
              $event: $event,
              x: x,
              y: y,
              isTouch: isTouch
            });
          }
        }
      }, {
        key: "mouseup",
        value: function mouseup() {
          this.mouseListening = false;
        }
      }, {
        key: "mousedown",
        value: function mousedown($event, x, y) {
          var isTouch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          $event.preventDefault();
          this.mouseListening = true;
          this.mousechange.next({
            $event: $event,
            x: x,
            y: y,
            isTouch: isTouch
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.sub = this.mousechange.pipe( // limit times it is updated for the same area
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (p, q) {
            return p.x === q.x && p.y === q.y;
          })).subscribe(function (n) {
            return _this7.handleChange(n.x, n.y, n.$event, n.isTouch);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "handleChange",
        value: function handleChange(x, y, $event, isTouch) {
          var containerWidth = this.el.nativeElement.clientWidth;
          var containerHeight = this.el.nativeElement.clientHeight;
          var left = x - (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
          var top = y - this.el.nativeElement.getBoundingClientRect().top;

          if (!isTouch) {
            top = top - window.pageYOffset;
          }

          this.coordinatesChange.next({
            x: x,
            y: y,
            top: top,
            left: left,
            containerWidth: containerWidth,
            containerHeight: containerHeight,
            $event: $event
          });
        }
      }]);

      return CoordinatesDirective;
    }();

    CoordinatesDirective.ɵfac = function CoordinatesDirective_Factory(t) {
      return new (t || CoordinatesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
    };

    CoordinatesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CoordinatesDirective,
      selectors: [["", "ngx-color-coordinates", ""]],
      hostBindings: function CoordinatesDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousemove", function CoordinatesDirective_mousemove_HostBindingHandler($event) {
            return ctx.mousemove($event, $event.pageX, $event.pageY);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("touchmove", function CoordinatesDirective_touchmove_HostBindingHandler($event) {
            return ctx.mousemove($event, $event.touches[0].clientX, $event.touches[0].clientY, true);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mouseup", function CoordinatesDirective_mouseup_HostBindingHandler() {
            return ctx.mouseup();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("touchend", function CoordinatesDirective_touchend_HostBindingHandler() {
            return ctx.mouseup();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function CoordinatesDirective_mousedown_HostBindingHandler($event) {
            return ctx.mousedown($event, $event.pageX, $event.pageY);
          })("touchstart", function CoordinatesDirective_touchstart_HostBindingHandler($event) {
            return ctx.mousedown($event, $event.touches[0].clientX, $event.touches[0].clientY, true);
          });
        }
      },
      outputs: {
        coordinatesChange: "coordinatesChange"
      }
    });

    CoordinatesDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], CoordinatesDirective.prototype, "coordinatesChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mousemove', ['$event', '$event.pageX', '$event.pageY']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchmove', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY', 'true'])], CoordinatesDirective.prototype, "mousemove", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mouseup'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchend')], CoordinatesDirective.prototype, "mouseup", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('mousedown', ['$event', '$event.pageX', '$event.pageY']), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY', 'true'])], CoordinatesDirective.prototype, "mousedown", null);

    var CoordinatesModule = function CoordinatesModule() {
      _classCallCheck(this, CoordinatesModule);
    };

    CoordinatesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CoordinatesModule
    });
    CoordinatesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CoordinatesModule_Factory(t) {
        return new (t || CoordinatesModule)();
      }
    });

    var AlphaComponent = /*#__PURE__*/function () {
      function AlphaComponent() {
        _classCallCheck(this, AlphaComponent);

        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(AlphaComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
              background: "linear-gradient(to bottom, rgba(".concat(this.rgb.r, ",").concat(this.rgb.g, ",").concat(this.rgb.b, ", 0) 0%,\n          rgba(").concat(this.rgb.r, ",").concat(this.rgb.g, ",").concat(this.rgb.b, ", 1) 100%)")
            };
          } else {
            this.gradient = {
              background: "linear-gradient(to right, rgba(".concat(this.rgb.r, ",").concat(this.rgb.g, ",").concat(this.rgb.b, ", 0) 0%,\n          rgba(").concat(this.rgb.r, ",").concat(this.rgb.g, ",").concat(this.rgb.b, ", 1) 100%)")
            };
            this.pointerLeft = this.rgb.a * 100;
          }
        }
      }, {
        key: "handleChange",
        value: function handleChange(_ref) {
          var top = _ref.top,
              left = _ref.left,
              containerHeight = _ref.containerHeight,
              containerWidth = _ref.containerWidth,
              $event = _ref.$event;
          var data;

          if (this.direction === 'vertical') {
            var a;

            if (top < 0) {
              a = 0;
            } else if (top > containerHeight) {
              a = 1;
            } else {
              a = Math.round(top * 100 / containerHeight) / 100;
            }

            if (this.hsl.a !== a) {
              data = {
                h: this.hsl.h,
                s: this.hsl.s,
                l: this.hsl.l,
                a: a,
                source: 'rgb'
              };
            }
          } else {
            var _a2;

            if (left < 0) {
              _a2 = 0;
            } else if (left > containerWidth) {
              _a2 = 1;
            } else {
              _a2 = Math.round(left * 100 / containerWidth) / 100;
            }

            if (this.hsl.a !== _a2) {
              data = {
                h: this.hsl.h,
                s: this.hsl.s,
                l: this.hsl.l,
                a: _a2,
                source: 'rgb'
              };
            }
          }

          if (!data) {
            return null;
          }

          this.onChange.emit({
            data: data,
            $event: $event
          });
        }
      }]);

      return AlphaComponent;
    }();

    AlphaComponent.ɵfac = function AlphaComponent_Factory(t) {
      return new (t || AlphaComponent)();
    };

    AlphaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AlphaComponent,
      selectors: [["color-alpha"]],
      inputs: {
        direction: "direction",
        hsl: "hsl",
        rgb: "rgb",
        pointer: "pointer",
        shadow: "shadow",
        radius: "radius"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 15,
      consts: [[1, "alpha"], [1, "alpha-checkboard"], [1, "alpha-gradient", 3, "ngStyle"], ["ngx-color-coordinates", "", 3, "coordinatesChange"], [1, "alpha-pointer"], [1, "alpha-slider", 3, "ngStyle"]],
      template: function AlphaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "color-checkboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function AlphaComponent_Template_div_coordinatesChange_4_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-radius", ctx.radius);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("box-shadow", ctx.shadow)("border-radius", ctx.radius);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.gradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("alpha-container color-alpha-", ctx.direction, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.pointerLeft, "%")("top", ctx.pointerTop, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.pointer);
        }
      },
      directives: [CheckboardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], CoordinatesDirective],
      styles: [".alpha[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-checkboard[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n    .alpha-gradient[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-container[_ngcontent-%COMP%] {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .alpha-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n    }\n    .alpha-slider[_ngcontent-%COMP%] {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AlphaComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AlphaComponent.prototype, "rgb", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AlphaComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AlphaComponent.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AlphaComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], AlphaComponent.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], AlphaComponent.prototype, "onChange", void 0);

    var AlphaModule = function AlphaModule() {
      _classCallCheck(this, AlphaModule);
    };

    AlphaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AlphaModule
    });
    AlphaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AlphaModule_Factory(t) {
        return new (t || AlphaModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule]]
    });

    function simpleCheckForValidColor(data) {
      var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
      var checked = 0;
      var passed = 0;
      keysToCheck.forEach(function (letter) {
        if (!data[letter]) {
          return;
        }

        checked += 1;

        if (!isNaN(data[letter])) {
          passed += 1;
        }

        if (letter === 's' || letter === 'l') {
          var percentPatt = /^\d+%$/;

          if (percentPatt.test(data[letter])) {
            passed += 1;
          }
        }
      });
      return checked === passed ? data : false;
    }

    function toState(data, oldHue) {
      var color = data.hex ? new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data.hex) : new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data);
      var hsl = color.toHsl();
      var hsv = color.toHsv();
      var rgb = color.toRgb();
      var hex = color.toHex();

      if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
      }

      var transparent = hex === '000000' && rgb.a === 0;
      return {
        hsl: hsl,
        hex: transparent ? 'transparent' : color.toHexString(),
        rgb: rgb,
        hsv: hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source
      };
    }

    function isValidHex(hex) {
      return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](hex).isValid;
    }

    function getContrastingColor(data) {
      if (!data) {
        return '#fff';
      }

      var col = toState(data);

      if (col.hex === 'transparent') {
        return 'rgba(0,0,0,0.4)';
      }

      var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
      return yiq >= 128 ? '#000' : '#fff';
    }

    var ColorWrap = /*#__PURE__*/function () {
      function ColorWrap() {
        _classCallCheck(this, ColorWrap);

        this.color = {
          h: 250,
          s: 0.5,
          l: 0.2,
          a: 1
        };
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChangeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(ColorWrap, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.changes = this.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100)).subscribe(function (x) {
            return _this8.onChangeComplete.emit(x);
          });
          this.setState(toState(this.color, 0));
          this.currentColor = this.hex;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.setState(toState(this.color, this.oldHue));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.changes.unsubscribe();
        }
      }, {
        key: "setState",
        value: function setState(data) {
          this.oldHue = data.oldHue;
          this.hsl = data.hsl;
          this.hsv = data.hsv;
          this.rgb = data.rgb;
          this.hex = data.hex;
          this.source = data.source;
          this.afterValidChange();
        }
      }, {
        key: "handleChange",
        value: function handleChange(data, $event) {
          var isValidColor = simpleCheckForValidColor(data);

          if (isValidColor) {
            var color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({
              color: color,
              $event: $event
            });
            this.afterValidChange();
          }
        }
        /** hook for components after a complete change */

      }, {
        key: "afterValidChange",
        value: function afterValidChange() {}
      }, {
        key: "handleSwatchHover",
        value: function handleSwatchHover(data, $event) {
          var isValidColor = simpleCheckForValidColor(data);

          if (isValidColor) {
            var color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({
              color: color,
              $event: $event
            });
          }
        }
      }]);

      return ColorWrap;
    }();

    ColorWrap.ɵfac = function ColorWrap_Factory(t) {
      return new (t || ColorWrap)();
    };

    ColorWrap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ColorWrap,
      selectors: [["color-wrap"]],
      inputs: {
        color: "color",
        className: "className"
      },
      outputs: {
        onChange: "onChange",
        onChangeComplete: "onChangeComplete",
        onSwatchHover: "onSwatchHover"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function ColorWrap_Template(rf, ctx) {},
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ColorWrap.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ColorWrap.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ColorWrap.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ColorWrap.prototype, "onChangeComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ColorWrap.prototype, "onSwatchHover", void 0);

    var ColorWrapModule = function ColorWrapModule() {
      _classCallCheck(this, ColorWrapModule);
    };

    ColorWrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ColorWrapModule
    });
    ColorWrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ColorWrapModule_Factory(t) {
        return new (t || ColorWrapModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    var EditableInputComponent = /*#__PURE__*/function () {
      function EditableInputComponent() {
        _classCallCheck(this, EditableInputComponent);

        this.placeholder = '';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focus = false;
      }

      _createClass(EditableInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
          this.inputStyle = this.style && this.style.input ? this.style.input : {};
          this.labelStyle = this.style && this.style.label ? this.style.label : {};

          if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
          }
        }
      }, {
        key: "handleFocus",
        value: function handleFocus($event) {
          this.focus = true;
        }
      }, {
        key: "handleFocusOut",
        value: function handleFocusOut($event) {
          this.focus = false;
          this.currentValue = this.blurValue;
        }
      }, {
        key: "handleKeydown",
        value: function handleKeydown($event) {
          // In case `e.target.value` is a percentage remove the `%` character
          // and update accordingly with a percentage
          // https://github.com/casesandberg/react-color/issues/383
          var stringValue = String($event.target.value);
          var isPercentage = stringValue.indexOf('%') > -1;
          var num = Number(stringValue.replace(/%/g, ''));

          if (!isNaN(num)) {
            var amount = this.arrowOffset || 1; // Up

            if ($event.keyCode === 38) {
              if (this.label) {
                this.onChange.emit({
                  data: _defineProperty({}, this.label, num + amount),
                  $event: $event
                });
              } else {
                this.onChange.emit({
                  data: num + amount,
                  $event: $event
                });
              }

              if (isPercentage) {
                this.currentValue = "".concat(num + amount, "%");
              } else {
                this.currentValue = num + amount;
              }
            } // Down


            if ($event.keyCode === 40) {
              if (this.label) {
                this.onChange.emit({
                  data: _defineProperty({}, this.label, num - amount),
                  $event: $event
                });
              } else {
                this.onChange.emit({
                  data: num - amount,
                  $event: $event
                });
              }

              if (isPercentage) {
                this.currentValue = "".concat(num - amount, "%");
              } else {
                this.currentValue = num - amount;
              }
            }
          }
        }
      }, {
        key: "handleKeyup",
        value: function handleKeyup($event) {
          if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
          }

          if (this.label) {
            this.onChange.emit({
              data: _defineProperty({}, this.label, $event.target.value),
              $event: $event
            });
          } else {
            this.onChange.emit({
              data: $event.target.value,
              $event: $event
            });
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
          } else {
            this.blurValue = String(this.value).toUpperCase();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe();
        }
      }, {
        key: "subscribe",
        value: function subscribe() {
          var _this9 = this;

          this.mousemove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').subscribe(function (ev) {
            return _this9.handleDrag(ev);
          });
          this.mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').subscribe(function () {
            return _this9.unsubscribe();
          });
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.mousemove) {
            this.mousemove.unsubscribe();
          }

          if (this.mouseup) {
            this.mouseup.unsubscribe();
          }
        }
      }, {
        key: "handleMousedown",
        value: function handleMousedown($event) {
          if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
          }
        }
      }, {
        key: "handleDrag",
        value: function handleDrag($event) {
          if (this.dragLabel) {
            var newValue = Math.round(this.value + $event.movementX);

            if (newValue >= 0 && newValue <= this.dragMax) {
              this.onChange.emit({
                data: _defineProperty({}, this.label, newValue),
                $event: $event
              });
            }
          }
        }
      }]);

      return EditableInputComponent;
    }();

    EditableInputComponent.ɵfac = function EditableInputComponent_Factory(t) {
      return new (t || EditableInputComponent)();
    };

    EditableInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EditableInputComponent,
      selectors: [["color-editable-input"]],
      inputs: {
        placeholder: "placeholder",
        style: "style",
        label: "label",
        value: "value",
        arrowOffset: "arrowOffset",
        dragLabel: "dragLabel",
        dragMax: "dragMax"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 5,
      consts: [[1, "wrap", 3, "ngStyle"], ["spellCheck", "false", 3, "ngStyle", "value", "placeholder", "keydown", "keyup", "focus", "focusout"], [3, "ngStyle", "mousedown", 4, "ngIf"], [3, "ngStyle", "mousedown"]],
      template: function EditableInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function EditableInputComponent_Template_input_keydown_1_listener($event) {
            return ctx.handleKeydown($event);
          })("keyup", function EditableInputComponent_Template_input_keyup_1_listener($event) {
            return ctx.handleKeyup($event);
          })("focus", function EditableInputComponent_Template_input_focus_1_listener($event) {
            return ctx.handleFocus($event);
          })("focusout", function EditableInputComponent_Template_input_focusout_1_listener($event) {
            return ctx.handleFocusOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditableInputComponent_span_2_Template, 2, 2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.wrapStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.inputStyle)("value", ctx.currentValue)("placeholder", ctx.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.label);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n      display: flex;\n    }\n    .wrap[_ngcontent-%COMP%] {\n      position: relative;\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "arrowOffset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "dragLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "dragMax", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EditableInputComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], EditableInputComponent.prototype, "onChange", void 0);

    var EditableInputModule = function EditableInputModule() {
      _classCallCheck(this, EditableInputModule);
    };

    EditableInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: EditableInputModule
    });
    EditableInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function EditableInputModule_Factory(t) {
        return new (t || EditableInputModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    var HueComponent = /*#__PURE__*/function () {
      function HueComponent() {
        _classCallCheck(this, HueComponent);

        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.left = '0px';
        this.top = '';
      }

      _createClass(HueComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.direction === 'horizontal') {
            this.left = "".concat(this.hsl.h * 100 / 360, "%");
          } else {
            this.top = "".concat(-(this.hsl.h * 100 / 360) + 100, "%");
          }
        }
      }, {
        key: "handleChange",
        value: function handleChange(_ref2) {
          var top = _ref2.top,
              left = _ref2.left,
              containerHeight = _ref2.containerHeight,
              containerWidth = _ref2.containerWidth,
              $event = _ref2.$event;
          var data;

          if (this.direction === 'vertical') {
            var h;

            if (top < 0) {
              h = 359;
            } else if (top > containerHeight) {
              h = 0;
            } else {
              var percent = -(top * 100 / containerHeight) + 100;
              h = 360 * percent / 100;
            }

            if (this.hsl.h !== h) {
              data = {
                h: h,
                s: this.hsl.s,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb'
              };
            }
          } else {
            var _h;

            if (left < 0) {
              _h = 0;
            } else if (left > containerWidth) {
              _h = 359;
            } else {
              var _percent = left * 100 / containerWidth;

              _h = 360 * _percent / 100;
            }

            if (this.hsl.h !== _h) {
              data = {
                h: _h,
                s: this.hsl.s,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb'
              };
            }
          }

          if (!data) {
            return null;
          }

          this.onChange.emit({
            data: data,
            $event: $event
          });
        }
      }]);

      return HueComponent;
    }();

    HueComponent.ɵfac = function HueComponent_Factory(t) {
      return new (t || HueComponent)();
    };

    HueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HueComponent,
      selectors: [["color-hue"]],
      inputs: {
        hidePointer: "hidePointer",
        direction: "direction",
        hsl: "hsl",
        pointer: "pointer",
        radius: "radius",
        shadow: "shadow"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 8,
      consts: [["ngx-color-coordinates", "", 1, "color-hue-container", 3, "coordinatesChange"], ["class", "color-hue-pointer", 3, "left", "top", 4, "ngIf"], [1, "color-hue-pointer"], [1, "color-hue-slider", 3, "ngStyle"]],
      template: function HueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function HueComponent_Template_div_coordinatesChange_1_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HueComponent_div_2_Template, 2, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("color-hue color-hue-", ctx.direction, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-radius", ctx.radius, "px")("box-shadow", ctx.shadow);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hidePointer);
        }
      },
      directives: [CoordinatesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".color-hue[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-hue-container[_ngcontent-%COMP%] {\n      margin: 0 2px;\n      position: relative;\n      height: 100%;\n    }\n    .color-hue-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n    }\n    .color-hue-slider[_ngcontent-%COMP%] {\n      margin-top: 1px;\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      transform: translateX(-2px);\n    }\n    .color-hue-horizontal[_ngcontent-%COMP%] {\n      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n    .color-hue-vertical[_ngcontent-%COMP%] {\n      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HueComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HueComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HueComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HueComponent.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HueComponent.prototype, "hidePointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], HueComponent.prototype, "direction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], HueComponent.prototype, "onChange", void 0);

    var HueModule = function HueModule() {
      _classCallCheck(this, HueModule);
    };

    HueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: HueModule
    });
    HueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function HueModule_Factory(t) {
        return new (t || HueModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]]
    });

    var RaisedComponent = function RaisedComponent() {
      _classCallCheck(this, RaisedComponent);

      this.zDepth = 1;
      this.radius = 1;
      this.background = '#fff';
    };

    RaisedComponent.ɵfac = function RaisedComponent_Factory(t) {
      return new (t || RaisedComponent)();
    };

    RaisedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RaisedComponent,
      selectors: [["color-raised"]],
      inputs: {
        zDepth: "zDepth",
        radius: "radius",
        background: "background"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 5,
      consts: [[1, "raised-wrap"], [1, "raised-content"]],
      template: function RaisedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("raised-bg zDepth-", ctx.zDepth, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.background, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefaultStyleSanitizer"]);
        }
      },
      styles: [".raised-wrap[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n    }\n    .raised-bg[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    .raised-content[_ngcontent-%COMP%] {\n      position: relative;\n    }\n    .zDepth-0[_ngcontent-%COMP%] {\n      box-shadow: none;\n    }\n    .zDepth-1[_ngcontent-%COMP%] {\n      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n    }\n    .zDepth-2[_ngcontent-%COMP%] {\n      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);\n    }\n    .zDepth-3[_ngcontent-%COMP%] {\n      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);\n    }\n    .zDepth-4[_ngcontent-%COMP%] {\n      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);\n    }\n    .zDepth-5[_ngcontent-%COMP%] {\n      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], RaisedComponent.prototype, "zDepth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], RaisedComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], RaisedComponent.prototype, "background", void 0);

    var RaisedModule = function RaisedModule() {
      _classCallCheck(this, RaisedModule);
    };

    RaisedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: RaisedModule
    });
    RaisedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function RaisedModule_Factory(t) {
        return new (t || RaisedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    var SaturationComponent = /*#__PURE__*/function () {
      function SaturationComponent() {
        _classCallCheck(this, SaturationComponent);

        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(SaturationComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.background = "hsl(".concat(this.hsl.h, ", 100%, 50%)");
          this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
          this.pointerLeft = this.hsv.s * 100 + '%';
        }
      }, {
        key: "handleChange",
        value: function handleChange(_ref3) {
          var top = _ref3.top,
              left = _ref3.left,
              containerHeight = _ref3.containerHeight,
              containerWidth = _ref3.containerWidth,
              $event = _ref3.$event;

          if (left < 0) {
            left = 0;
          } else if (left > containerWidth) {
            left = containerWidth;
          } else if (top < 0) {
            top = 0;
          } else if (top > containerHeight) {
            top = containerHeight;
          }

          var saturation = left / containerWidth;
          var bright = -(top / containerHeight) + 1;
          bright = bright > 0 ? bright : 0;
          bright = bright > 1 ? 1 : bright;
          var data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva'
          };
          this.onChange.emit({
            data: data,
            $event: $event
          });
        }
      }]);

      return SaturationComponent;
    }();

    SaturationComponent.ɵfac = function SaturationComponent_Factory(t) {
      return new (t || SaturationComponent)();
    };

    SaturationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SaturationComponent,
      selectors: [["color-saturation"]],
      inputs: {
        hsl: "hsl",
        hsv: "hsv",
        radius: "radius",
        pointer: "pointer",
        circle: "circle"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 8,
      consts: [["ngx-color-coordinates", "", 1, "color-saturation", 3, "coordinatesChange"], [1, "saturation-white"], [1, "saturation-black"], [1, "saturation-pointer", 3, "ngStyle"], [1, "saturation-circle", 3, "ngStyle"]],
      template: function SaturationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function SaturationComponent_Template_div_coordinatesChange_0_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.background, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx.pointerTop)("left", ctx.pointerLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.pointer);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.circle);
        }
      },
      directives: [CoordinatesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".saturation-white[_ngcontent-%COMP%] {\n      background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-black[_ngcontent-%COMP%] {\n      background: linear-gradient(to top, #000, rgba(0,0,0,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-saturation[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n      cursor: default;\n    }\n    .saturation-circle[_ngcontent-%COMP%] {\n      width: 4px;\n      height: 4px;\n      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n      border-radius: 50%;\n      cursor: hand;\n      transform: translate(-2px, -4px);\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SaturationComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SaturationComponent.prototype, "hsv", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SaturationComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SaturationComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SaturationComponent.prototype, "circle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], SaturationComponent.prototype, "onChange", void 0);

    var SaturationModule = function SaturationModule() {
      _classCallCheck(this, SaturationModule);
    };

    SaturationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SaturationModule
    });
    SaturationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function SaturationModule_Factory(t) {
        return new (t || SaturationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]]
    });

    var SwatchComponent = /*#__PURE__*/function () {
      function SwatchComponent() {
        _classCallCheck(this, SwatchComponent);

        this.style = {};
        this.focusStyle = {};
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
      }

      _createClass(SwatchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.divStyles = Object.assign({
            background: this.color,
            height: '100%',
            width: '100%',
            cursor: 'pointer',
            position: 'relative',
            outline: 'none'
          }, this.style);
        }
      }, {
        key: "currentStyles",
        value: function currentStyles() {
          this.focusStyles = Object.assign(Object.assign({}, this.divStyles), this.focusStyle);
          return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
        }
      }, {
        key: "handleFocusOut",
        value: function handleFocusOut() {
          this.inFocus = false;
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          this.inFocus = true;
        }
      }, {
        key: "handleHover",
        value: function handleHover(hex, $event) {
          this.onHover.emit({
            hex: hex,
            $event: $event
          });
        }
      }, {
        key: "handleClick",
        value: function handleClick(hex, $event) {
          this.onClick.emit({
            hex: hex,
            $event: $event
          });
        }
      }]);

      return SwatchComponent;
    }();

    SwatchComponent.ɵfac = function SwatchComponent_Factory(t) {
      return new (t || SwatchComponent)();
    };

    SwatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SwatchComponent,
      selectors: [["color-swatch"]],
      inputs: {
        style: "style",
        focusStyle: "focusStyle",
        color: "color",
        focus: "focus"
      },
      outputs: {
        onClick: "onClick",
        onHover: "onHover"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 3,
      consts: [["tabindex", "0", 1, "swatch", 3, "ngStyle", "click", "keydown.enter", "focus", "blur", "mouseover"], ["boxShadow", "inset 0 0 0 1px rgba(0,0,0,0.1)", 4, "ngIf"], ["boxShadow", "inset 0 0 0 1px rgba(0,0,0,0.1)"]],
      template: function SwatchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SwatchComponent_Template_div_click_0_listener($event) {
            return ctx.handleClick(ctx.color, $event);
          })("keydown.enter", function SwatchComponent_Template_div_keydown_enter_0_listener($event) {
            return ctx.handleClick(ctx.color, $event);
          })("focus", function SwatchComponent_Template_div_focus_0_listener() {
            return ctx.handleFocus();
          })("blur", function SwatchComponent_Template_div_blur_0_listener() {
            return ctx.handleFocusOut();
          })("mouseover", function SwatchComponent_Template_div_mouseover_0_listener($event) {
            return ctx.handleHover(ctx.color, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SwatchComponent_color_checkboard_2_Template, 1, 0, "color-checkboard", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.currentStyles());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.color === "transparent");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], CheckboardComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SwatchComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SwatchComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SwatchComponent.prototype, "focusStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SwatchComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], SwatchComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], SwatchComponent.prototype, "onHover", void 0);

    var SwatchModule = function SwatchModule() {
      _classCallCheck(this, SwatchModule);
    };

    SwatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SwatchModule
    });
    SwatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function SwatchModule_Factory(t) {
        return new (t || SwatchModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule]]
    });

    var ShadeComponent = /*#__PURE__*/function () {
      function ShadeComponent() {
        _classCallCheck(this, ShadeComponent);

        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }

      _createClass(ShadeComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.gradient = {
            background: "linear-gradient(to right,\n          hsl(".concat(this.hsl.h, ", 90%, 55%),\n          #000)")
          };
          var hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
          this.pointerLeft = 100 - hsv.v * 100;
        }
      }, {
        key: "handleChange",
        value: function handleChange(_ref4) {
          var left = _ref4.left,
              containerWidth = _ref4.containerWidth,
              $event = _ref4.$event;
          var data;
          var v;

          if (left < 0) {
            v = 0;
          } else if (left > containerWidth) {
            v = 1;
          } else {
            v = Math.round(left * 100 / containerWidth) / 100;
          }

          var hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();

          if (hsv.v !== v) {
            data = {
              h: this.hsl.h,
              s: 100,
              v: 1 - v,
              l: this.hsl.l,
              a: this.hsl.a,
              source: 'rgb'
            };
          }

          if (!data) {
            return null;
          }

          this.onChange.emit({
            data: data,
            $event: $event
          });
        }
      }]);

      return ShadeComponent;
    }();

    ShadeComponent.ɵfac = function ShadeComponent_Factory(t) {
      return new (t || ShadeComponent)();
    };

    ShadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ShadeComponent,
      selectors: [["color-shade"]],
      inputs: {
        hsl: "hsl",
        rgb: "rgb",
        pointer: "pointer",
        shadow: "shadow",
        radius: "radius"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 12,
      consts: [[1, "shade"], [1, "shade-gradient", 3, "ngStyle"], ["ngx-color-coordinates", "", 1, "shade-container", 3, "coordinatesChange"], [1, "shade-pointer"], [1, "shade-slider", 3, "ngStyle"]],
      template: function ShadeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("coordinatesChange", function ShadeComponent_Template_div_coordinatesChange_2_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-radius", ctx.radius);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("box-shadow", ctx.shadow)("border-radius", ctx.radius);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.gradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.pointerLeft, "%")("top", ctx.pointerTop, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.pointer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], CoordinatesDirective],
      styles: [".shade[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-gradient[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-container[_ngcontent-%COMP%] {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .shade-pointer[_ngcontent-%COMP%] {\n      position: absolute;\n    }\n    .shade-slider[_ngcontent-%COMP%] {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ShadeComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ShadeComponent.prototype, "rgb", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ShadeComponent.prototype, "pointer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ShadeComponent.prototype, "shadow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ShadeComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ShadeComponent.prototype, "onChange", void 0);

    var ShadeModule = function ShadeModule() {
      _classCallCheck(this, ShadeModule);
    };

    ShadeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ShadeModule
    });
    ShadeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ShadeModule_Factory(t) {
        return new (t || ShadeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-checkboard',
          template: "<div class=\"grid\" [ngStyle]=\"gridStyles\"></div>",
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n  .grid {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n  }\n  "]
        }]
      }], function () {
        return [];
      }, {
        white: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        grey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        boxShadow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        borderRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckboardModule, {
        declarations: function declarations() {
          return [CheckboardComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [CheckboardComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [CheckboardComponent],
          exports: [CheckboardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoordinatesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[ngx-color-coordinates]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      }, {
        coordinatesChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        mousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:mousemove', ['$event', '$event.pageX', '$event.pageY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:touchmove', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY', 'true']]
        }],
        mouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:mouseup']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:touchend']
        }],
        mousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['mousedown', ['$event', '$event.pageX', '$event.pageY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY', 'true']]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoordinatesModule, {
        declarations: [CoordinatesDirective],
        exports: [CoordinatesDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CoordinatesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [CoordinatesDirective],
          exports: [CoordinatesDirective]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlphaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-alpha',
          template: "\n  <div class=\"alpha\" [style.border-radius]=\"radius\">\n    <div class=\"alpha-checkboard\">\n      <color-checkboard></color-checkboard>\n    </div>\n    <div class=\"alpha-gradient\" [ngStyle]=\"gradient\" [style.box-shadow]=\"shadow\" [style.border-radius]=\"radius\"></div>\n    <div ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" class=\"alpha-container color-alpha-{{direction}}\">\n      <div class=\"alpha-pointer\" [style.left.%]=\"pointerLeft\" [style.top.%]=\"pointerTop\">\n        <div class=\"alpha-slider\" [ngStyle]=\"pointer\"></div>\n      </div>\n    </div>\n  </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          styles: ["\n    .alpha {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-checkboard {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n    .alpha-gradient {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .alpha-container {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .alpha-pointer {\n      position: absolute;\n    }\n    .alpha-slider {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },\n  "]
        }]
      }], function () {
        return [];
      }, {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        hsl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        rgb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pointer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        shadow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AlphaModule, {
        declarations: function declarations() {
          return [AlphaComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule];
        },
        exports: function exports() {
          return [AlphaComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlphaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [AlphaComponent],
          exports: [AlphaComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorWrap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          // create seletor base for test override property
          selector: 'color-wrap',
          template: ""
        }]
      }], function () {
        return [];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onChangeComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onSwatchHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ColorWrapModule, {
        declarations: function declarations() {
          return [ColorWrap];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [ColorWrap];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorWrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [ColorWrap],
          exports: [ColorWrap],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditableInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-editable-input',
          template: "\n  <div class=\"wrap\" [ngStyle]=\"wrapStyle\">\n    <input [ngStyle]=\"inputStyle\" spellCheck=\"false\"\n      [value]=\"currentValue\" [placeholder]=\"placeholder\"\n      (keydown)=\"handleKeydown($event)\" (keyup)=\"handleKeyup($event)\"\n      (focus)=\"handleFocus($event)\" (focusout)=\"handleFocusOut($event)\" />\n    <span *ngIf=\"label\" [ngStyle]=\"labelStyle\" (mousedown)=\"handleMousedown($event)\">\n      {{ label }}\n    </span>\n  </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n    :host {\n      display: flex;\n    }\n    .wrap {\n      position: relative;\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        arrowOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dragLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dragMax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditableInputModule, {
        declarations: function declarations() {
          return [EditableInputComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [EditableInputComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditableInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [EditableInputComponent],
          exports: [EditableInputComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-hue',
          template: "\n  <div class=\"color-hue color-hue-{{direction}}\" [style.border-radius.px]=\"radius\" [style.box-shadow]=\"shadow\">\n    <div ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" class=\"color-hue-container\">\n      <div class=\"color-hue-pointer\" [style.left]=\"left\" [style.top]=\"top\" *ngIf=\"!hidePointer\">\n        <div class=\"color-hue-slider\" [ngStyle]=\"pointer\"></div>\n      </div>\n    </div>\n  </div>\n  ",
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n    .color-hue {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-hue-container {\n      margin: 0 2px;\n      position: relative;\n      height: 100%;\n    }\n    .color-hue-pointer {\n      position: absolute;\n    }\n    .color-hue-slider {\n      margin-top: 1px;\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      transform: translateX(-2px);\n    }\n    .color-hue-horizontal {\n      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n    .color-hue-vertical {\n      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        hidePointer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        hsl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pointer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        shadow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HueModule, {
        declarations: function declarations() {
          return [HueComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule];
        },
        exports: function exports() {
          return [HueComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [HueComponent],
          exports: [HueComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RaisedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-raised',
          template: "\n  <div class=\"raised-wrap\">\n    <div class=\"raised-bg zDepth-{{zDepth}}\" [style.background]=\"background\"></div>\n    <div class=\"raised-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  ",
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n    .raised-wrap {\n      position: relative;\n      display: inline-block;\n    }\n    .raised-bg {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    .raised-content {\n      position: relative;\n    }\n    .zDepth-0 {\n      box-shadow: none;\n    }\n    .zDepth-1 {\n      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n    }\n    .zDepth-2 {\n      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);\n    }\n    .zDepth-3 {\n      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);\n    }\n    .zDepth-4 {\n      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);\n    }\n    .zDepth-5 {\n      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        zDepth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RaisedModule, {
        declarations: function declarations() {
          return [RaisedComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [RaisedComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RaisedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [RaisedComponent],
          exports: [RaisedComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SaturationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-saturation',
          template: "\n  <div class=\"color-saturation\" ngx-color-coordinates (coordinatesChange)=\"handleChange($event)\" [style.background]=\"background\">\n    <div class=\"saturation-white\">\n      <div class=\"saturation-black\"></div>\n      <div class=\"saturation-pointer\" [ngStyle]=\"pointer\" [style.top]=\"pointerTop\" [style.left]=\"pointerLeft\">\n        <div class=\"saturation-circle\" [ngStyle]=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n  ",
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          styles: ["\n    .saturation-white {\n      background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-black {\n      background: linear-gradient(to top, #000, rgba(0,0,0,0));\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .color-saturation {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .saturation-pointer {\n      position: absolute;\n      cursor: default;\n    }\n    .saturation-circle {\n      width: 4px;\n      height: 4px;\n      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n      border-radius: 50%;\n      cursor: hand;\n      transform: translate(-2px, -4px);\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        hsl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hsv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pointer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        circle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaturationModule, {
        declarations: function declarations() {
          return [SaturationComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule];
        },
        exports: function exports() {
          return [SaturationComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SaturationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [SaturationComponent],
          exports: [SaturationComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SwatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-swatch',
          template: "\n    <div\n      class=\"swatch\"\n      [ngStyle]=\"currentStyles()\"\n      [attr.title]=\"color\"\n      (click)=\"handleClick(color, $event)\"\n      (keydown.enter)=\"handleClick(color, $event)\"\n      (focus)=\"handleFocus()\"\n      (blur)=\"handleFocusOut()\"\n      (mouseover)=\"handleHover(color, $event)\"\n      tabindex=\"0\"\n    >\n      <ng-content></ng-content>\n      <color-checkboard\n        *ngIf=\"color === 'transparent'\"\n        boxShadow=\"inset 0 0 0 1px rgba(0,0,0,0.1)\"\n      ></color-checkboard>\n    </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        focusStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        focus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SwatchModule, {
        declarations: function declarations() {
          return [SwatchComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule];
        },
        exports: function exports() {
          return [SwatchComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SwatchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [SwatchComponent],
          exports: [SwatchComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShadeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-shade',
          template: "\n    <div class=\"shade\" [style.border-radius]=\"radius\">\n      <div\n        class=\"shade-gradient\"\n        [ngStyle]=\"gradient\"\n        [style.box-shadow]=\"shadow\"\n        [style.border-radius]=\"radius\"\n      ></div>\n      <div\n        ngx-color-coordinates\n        (coordinatesChange)=\"handleChange($event)\"\n        class=\"shade-container\"\n      >\n        <div\n          class=\"shade-pointer\"\n          [style.left.%]=\"pointerLeft\"\n          [style.top.%]=\"pointerTop\"\n        >\n          <div class=\"shade-slider\" [ngStyle]=\"pointer\"></div>\n        </div>\n      </div>\n    </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          styles: ["\n    .shade {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-gradient {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n    .shade-container {\n      position: relative;\n      height: 100%;\n      margin: 0 3px;\n    }\n    .shade-pointer {\n      position: absolute;\n    }\n    .shade-slider {\n      width: 4px;\n      border-radius: 1px;\n      height: 8px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n      background: #fff;\n      margin-top: 1px;\n      transform: translateX(-2px);\n    },\n  "]
        }]
      }], function () {
        return [];
      }, {
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        hsl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        rgb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pointer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        shadow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShadeModule, {
        declarations: function declarations() {
          return [ShadeComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule];
        },
        exports: function exports() {
          return [ShadeComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShadeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [ShadeComponent],
          exports: [ShadeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-color.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-color/__ivy_ngcc__/sketch/fesm2015/ngx-color-sketch.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ngx-color/__ivy_ngcc__/sketch/fesm2015/ngx-color-sketch.js ***!
    \*********************************************************************************/

  /*! exports provided: ColorSketchModule, SketchComponent, ɵa, ɵb */

  /***/
  function node_modulesNgxColor__ivy_ngcc__SketchFesm2015NgxColorSketchJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorSketchModule", function () {
      return ColorSketchModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SketchComponent", function () {
      return SketchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return SketchFieldsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return SketchPresetColorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-color */
    "./node_modules/ngx-color/__ivy_ngcc__/fesm2015/ngx-color.js");
    /* harmony import */


    var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ctrl/tinycolor */
    "./node_modules/@ctrl/tinycolor/dist/module/public_api.js");

    var _c0 = function _c0(a0, a1) {
      return {
        input: a0,
        label: a1
      };
    };

    function SketchFieldsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-editable-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_div_9_Template_color_editable_input_onChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r1.handleChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r0.input, ctx_r0.label));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.round(ctx_r0.rgb.a * 100))("dragLabel", true)("dragMax", 100);
      }
    }

    function SketchPresetColorsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-swatch", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function SketchPresetColorsComponent_div_1_Template_color_swatch_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r2.handleClick($event);
        })("onHover", function SketchPresetColorsComponent_div_1_Template_color_swatch_onHover_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r4.onSwatchHover.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r0.swatchStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r0.normalizeValue(c_r1).color)("focusStyle", ctx_r0.focusStyle(c_r1));
      }
    }

    function SketchComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-alpha", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_div_7_Template_color_alpha_onChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r2.handleValueChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("radius", 2)("rgb", ctx_r0.rgb)("hsl", ctx_r0.hsl);
      }
    }

    function SketchComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "color-sketch-preset-colors", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function SketchComponent_div_13_Template_color_sketch_preset_colors_onClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r4.handleBlockChange($event);
        })("onSwatchHover", function SketchComponent_div_13_Template_color_sketch_preset_colors_onSwatchHover_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r6.onSwatchHover.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colors", ctx_r1.presetColors);
      }
    }

    var SketchFieldsComponent = /*#__PURE__*/function () {
      function SketchFieldsComponent() {
        _classCallCheck(this, SketchFieldsComponent);

        this.disableAlpha = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.input = {
          width: '100%',
          padding: '4px 10% 3px',
          border: 'none',
          boxSizing: 'border-box',
          boxShadow: 'inset 0 0 0 1px #ccc',
          fontSize: '11px'
        };
        this.label = {
          display: 'block',
          textAlign: 'center',
          fontSize: '11px',
          color: '#222',
          paddingTop: '3px',
          paddingBottom: '4px',
          textTransform: 'capitalize'
        };
      }

      _createClass(SketchFieldsComponent, [{
        key: "round",
        value: function round(value) {
          return Math.round(value);
        }
      }, {
        key: "handleChange",
        value: function handleChange(_ref5) {
          var data = _ref5.data,
              $event = _ref5.$event;

          if (data.hex) {
            if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(data.hex)) {
              var color = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_4__["TinyColor"](data.hex);
              this.onChange.emit({
                data: {
                  hex: this.disableAlpha ? color.toHex() : color.toHex8(),
                  source: 'hex'
                },
                $event: $event
              });
            }
          } else if (data.r || data.g || data.b) {
            this.onChange.emit({
              data: {
                r: data.r || this.rgb.r,
                g: data.g || this.rgb.g,
                b: data.b || this.rgb.b,
                source: 'rgb'
              },
              $event: $event
            });
          } else if (data.a) {
            if (data.a < 0) {
              data.a = 0;
            } else if (data.a > 100) {
              data.a = 100;
            }

            data.a /= 100;

            if (this.disableAlpha) {
              data.a = 1;
            }

            this.onChange.emit({
              data: {
                h: this.hsl.h,
                s: this.hsl.s,
                l: this.hsl.l,
                a: Math.round(data.a * 100) / 100,
                source: 'rgb'
              },
              $event: $event
            });
          } else if (data.h || data.s || data.l) {
            this.onChange.emit({
              data: {
                h: data.h || this.hsl.h,
                s: Number(data.s && data.s || this.hsl.s),
                l: Number(data.l && data.l || this.hsl.l),
                source: 'hsl'
              },
              $event: $event
            });
          }
        }
      }]);

      return SketchFieldsComponent;
    }();

    SketchFieldsComponent.ɵfac = function SketchFieldsComponent_Factory(t) {
      return new (t || SketchFieldsComponent)();
    };

    SketchFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SketchFieldsComponent,
      selectors: [["color-sketch-fields"]],
      inputs: {
        disableAlpha: "disableAlpha",
        hsl: "hsl",
        rgb: "rgb",
        hex: "hex"
      },
      outputs: {
        onChange: "onChange"
      },
      decls: 10,
      vars: 31,
      consts: [[1, "sketch-fields"], [1, "sketch-double"], ["label", "hex", 3, "value", "onChange"], [1, "sketch-single"], ["label", "r", 3, "value", "dragLabel", "dragMax", "onChange"], ["label", "g", 3, "value", "dragLabel", "dragMax", "onChange"], ["label", "b", 3, "value", "dragLabel", "dragMax", "onChange"], ["class", "sketch-alpha", 4, "ngIf"], [1, "sketch-alpha"], ["label", "a", 3, "value", "dragLabel", "dragMax", "onChange"]],
      template: function SketchFieldsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "color-editable-input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_2_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "color-editable-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_4_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "color-editable-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_6_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "color-editable-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchFieldsComponent_Template_color_editable_input_onChange_8_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SketchFieldsComponent_div_9_Template, 2, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c0, ctx.input, ctx.label));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.hex.replace("#", ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](22, _c0, ctx.input, ctx.label));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rgb.r)("dragLabel", true)("dragMax", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c0, ctx.input, ctx.label));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rgb.g)("dragLabel", true)("dragMax", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c0, ctx.input, ctx.label));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.rgb.b)("dragLabel", true)("dragMax", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.disableAlpha === false);
        }
      },
      directives: [ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".sketch-fields[_ngcontent-%COMP%] {\n      display: flex;\n      padding-top: 4px;\n    }\n    .sketch-double[_ngcontent-%COMP%] {\n      -webkit-box-flex: 2;\n      flex: 2 1 0%;\n    }\n    .sketch-single[_ngcontent-%COMP%] {\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }\n    .sketch-alpha[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchFieldsComponent.prototype, "hsl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchFieldsComponent.prototype, "rgb", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchFieldsComponent.prototype, "hex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchFieldsComponent.prototype, "disableAlpha", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], SketchFieldsComponent.prototype, "onChange", void 0);

    var SketchPresetColorsComponent = /*#__PURE__*/function () {
      function SketchPresetColorsComponent() {
        _classCallCheck(this, SketchPresetColorsComponent);

        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.swatchStyle = {
          borderRadius: '3px',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
        };
      }

      _createClass(SketchPresetColorsComponent, [{
        key: "handleClick",
        value: function handleClick(_ref6) {
          var hex = _ref6.hex,
              $event = _ref6.$event;
          this.onClick.emit({
            hex: hex,
            $event: $event
          });
        }
      }, {
        key: "normalizeValue",
        value: function normalizeValue(val) {
          if (typeof val === 'string') {
            return {
              color: val
            };
          }

          return val;
        }
      }, {
        key: "focusStyle",
        value: function focusStyle(val) {
          var c = this.normalizeValue(val);
          return {
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ".concat(c.color)
          };
        }
      }]);

      return SketchPresetColorsComponent;
    }();

    SketchPresetColorsComponent.ɵfac = function SketchPresetColorsComponent_Factory(t) {
      return new (t || SketchPresetColorsComponent)();
    };

    SketchPresetColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SketchPresetColorsComponent,
      selectors: [["color-sketch-preset-colors"]],
      inputs: {
        colors: "colors"
      },
      outputs: {
        onClick: "onClick",
        onSwatchHover: "onSwatchHover"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "sketch-swatches"], ["class", "sketch-wrap", 4, "ngFor", "ngForOf"], [1, "sketch-wrap"], [1, "swatch", 3, "color", "focusStyle", "onClick", "onHover"]],
      template: function SketchPresetColorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SketchPresetColorsComponent_div_1_Template, 2, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchComponent"]],
      styles: [".sketch-swatches[_ngcontent-%COMP%] {\n      position: relative;\n      display: flex;\n      flex-wrap: wrap;\n      margin: 0px -10px;\n      padding: 10px 0px 0px 10px;\n      border-top: 1px solid rgb(238, 238, 238);\n    }\n    .sketch-wrap[_ngcontent-%COMP%] {\n      width: 16px;\n      height: 16px;\n      margin: 0px 10px 10px 0px;\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchPresetColorsComponent.prototype, "colors", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], SketchPresetColorsComponent.prototype, "onClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], SketchPresetColorsComponent.prototype, "onSwatchHover", void 0);

    var SketchComponent = /*#__PURE__*/function (_ngx_color__WEBPACK_I) {
      _inherits(SketchComponent, _ngx_color__WEBPACK_I);

      var _super = _createSuper(SketchComponent);

      function SketchComponent() {
        var _this10;

        _classCallCheck(this, SketchComponent);

        _this10 = _super.call(this);
        /** Remove alpha slider and options from picker */

        _this10.disableAlpha = false;
        /** Hex strings for default colors at bottom of picker */

        _this10.presetColors = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];
        /** Width of picker */

        _this10.width = 200;
        return _this10;
      }

      _createClass(SketchComponent, [{
        key: "afterValidChange",
        value: function afterValidChange() {
          var alpha = this.disableAlpha ? 1 : this.rgb.a;
          this.activeBackground = "rgba(".concat(this.rgb.r, ", ").concat(this.rgb.g, ", ").concat(this.rgb.b, ", ").concat(alpha, ")");
        }
      }, {
        key: "handleValueChange",
        value: function handleValueChange(_ref7) {
          var data = _ref7.data,
              $event = _ref7.$event;
          this.handleChange(data, $event);
        }
      }, {
        key: "handleBlockChange",
        value: function handleBlockChange(_ref8) {
          var hex = _ref8.hex,
              $event = _ref8.$event;

          if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_3__["isValidHex"])(hex)) {
            // this.hex = hex;
            this.handleChange({
              hex: hex,
              source: 'hex'
            }, $event);
          }
        }
      }]);

      return SketchComponent;
    }(ngx_color__WEBPACK_IMPORTED_MODULE_3__["ColorWrap"]);

    SketchComponent.ɵfac = function SketchComponent_Factory(t) {
      return new (t || SketchComponent)();
    };

    SketchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SketchComponent,
      selectors: [["color-sketch"]],
      inputs: {
        disableAlpha: "disableAlpha",
        presetColors: "presetColors",
        width: "width"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 16,
      consts: [[1, "sketch-saturation"], [3, "hsl", "hsv", "onChange"], [1, "sketch-controls"], [1, "sketch-sliders"], [1, "sketch-hue"], [3, "hsl", "onChange"], ["class", "sketch-alpha", 4, "ngIf"], [1, "sketch-color"], [1, "sketch-active"], [1, "sketch-fields-container"], [3, "rgb", "hsl", "hex", "disableAlpha", "onChange"], ["class", "sketch-swatches-container", 4, "ngIf"], [1, "sketch-alpha"], [3, "radius", "rgb", "hsl", "onChange"], [1, "sketch-swatches-container"], [3, "colors", "onClick", "onSwatchHover"]],
      template: function SketchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "color-saturation", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_Template_color_saturation_onChange_2_listener($event) {
            return ctx.handleValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "color-hue", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_Template_color_hue_onChange_6_listener($event) {
            return ctx.handleValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SketchComponent_div_7_Template, 2, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "color-checkboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "color-sketch-fields", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function SketchComponent_Template_color_sketch_fields_onChange_12_listener($event) {
            return ctx.handleValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SketchComponent_div_13_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("sketch-picker ", ctx.className, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hsl", ctx.hsl)("hsv", ctx.hsv);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hsl", ctx.hsl);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.disableAlpha === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.activeBackground, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rgb", ctx.rgb)("hsl", ctx.hsl)("hex", ctx.hex)("disableAlpha", ctx.disableAlpha);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.presetColors && ctx.presetColors.length);
        }
      },
      directives: [ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationComponent"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardComponent"], SketchFieldsComponent, ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaComponent"], SketchPresetColorsComponent],
      styles: [".sketch-picker[_ngcontent-%COMP%] {\n      padding: 10px 10px 3px;\n      box-sizing: initial;\n      background: #fff;\n      border-radius: 4px;\n      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);\n    }\n    .sketch-saturation[_ngcontent-%COMP%] {\n      width: 100%;\n      padding-bottom: 75%;\n      position: relative;\n      overflow: hidden;\n    }\n    .sketch-fields-container[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .sketch-swatches-container[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .sketch-controls[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .sketch-sliders[_ngcontent-%COMP%] {\n      padding: 4px 0px;\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n    }\n    .sketch-hue[_ngcontent-%COMP%] {\n      position: relative;\n      height: 10px;\n      overflow: hidden;\n    }\n    .sketch-alpha[_ngcontent-%COMP%] {\n      position: relative;\n      height: 10px;\n      margin-top: 4px;\n      overflow: hidden;\n    }\n    .sketch-color[_ngcontent-%COMP%] {\n      width: 24px;\n      height: 24px;\n      position: relative;\n      margin-top: 4px;\n      margin-left: 4px;\n      border-radius: 3px;\n    }\n    .sketch-active[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      border-radius: 2px;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;\n    }"],
      changeDetection: 0
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchComponent.prototype, "disableAlpha", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchComponent.prototype, "presetColors", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], SketchComponent.prototype, "width", void 0);

    var ColorSketchModule = function ColorSketchModule() {
      _classCallCheck(this, ColorSketchModule);
    };

    ColorSketchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ColorSketchModule
    });
    ColorSketchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ColorSketchModule_Factory(t) {
        return new (t || ColorSketchModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SketchFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-sketch-fields',
          template: "\n  <div class=\"sketch-fields\">\n    <div class=\"sketch-double\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"hex\"\n        [value]=\"hex.replace('#', '')\"\n        (onChange)=\"handleChange($event)\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-single\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"r\"\n        [value]=\"rgb.r\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"255\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-single\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"g\"\n        [value]=\"rgb.g\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"255\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-single\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"b\"\n        [value]=\"rgb.b\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"255\"\n      ></color-editable-input>\n    </div>\n    <div class=\"sketch-alpha\" *ngIf=\"disableAlpha === false\">\n      <color-editable-input\n        [style]=\"{ input: input, label: label }\"\n        label=\"a\"\n        [value]=\"round(rgb.a * 100)\"\n        (onChange)=\"handleChange($event)\"\n        [dragLabel]=\"true\"\n        [dragMax]=\"100\"\n      ></color-editable-input>\n    </div>\n  </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          styles: ["\n    .sketch-fields {\n      display: flex;\n      padding-top: 4px;\n    }\n    .sketch-double {\n      -webkit-box-flex: 2;\n      flex: 2 1 0%;\n    }\n    .sketch-single {\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }\n    .sketch-alpha {\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n      padding-left: 6px;\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        disableAlpha: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        hsl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        rgb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SketchPresetColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-sketch-preset-colors',
          template: "\n  <div class=\"sketch-swatches\">\n    <div class=\"sketch-wrap\" *ngFor=\"let c of colors\">\n      <color-swatch\n        [color]=\"normalizeValue(c).color\"\n        [style]=\"swatchStyle\"\n        [focusStyle]=\"focusStyle(c)\"\n        (onClick)=\"handleClick($event)\"\n        (onHover)=\"onSwatchHover.emit($event)\"\n        class=\"swatch\"\n      ></color-swatch>\n    </div>\n  </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          styles: ["\n    .sketch-swatches {\n      position: relative;\n      display: flex;\n      flex-wrap: wrap;\n      margin: 0px -10px;\n      padding: 10px 0px 0px 10px;\n      border-top: 1px solid rgb(238, 238, 238);\n    }\n    .sketch-wrap {\n      width: 16px;\n      height: 16px;\n      margin: 0px 10px 10px 0px;\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onSwatchHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SketchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'color-sketch',
          template: "\n  <div class=\"sketch-picker {{ className }}\" [style.width]=\"width\">\n    <div class=\"sketch-saturation\">\n      <color-saturation [hsl]=\"hsl\" [hsv]=\"hsv\"\n        (onChange)=\"handleValueChange($event)\"\n      >\n      </color-saturation>\n    </div>\n    <div class=\"sketch-controls\">\n      <div class=\"sketch-sliders\">\n        <div class=\"sketch-hue\">\n          <color-hue [hsl]=\"hsl\"\n            (onChange)=\"handleValueChange($event)\"\n          ></color-hue>\n        </div>\n        <div class=\"sketch-alpha\" *ngIf=\"disableAlpha === false\">\n          <color-alpha\n            [radius]=\"2\" [rgb]=\"rgb\" [hsl]=\"hsl\"\n            (onChange)=\"handleValueChange($event)\"\n          ></color-alpha>\n        </div>\n      </div>\n      <div class=\"sketch-color\">\n        <color-checkboard></color-checkboard>\n        <div class=\"sketch-active\" [style.background]=\"activeBackground\"></div>\n      </div>\n    </div>\n    <div class=\"sketch-fields-container\">\n      <color-sketch-fields\n        [rgb]=\"rgb\" [hsl]=\"hsl\" [hex]=\"hex\"\n        [disableAlpha]=\"disableAlpha\"\n        (onChange)=\"handleValueChange($event)\"\n      ></color-sketch-fields>\n    </div>\n    <div class=\"sketch-swatches-container\" *ngIf=\"presetColors && presetColors.length\">\n      <color-sketch-preset-colors\n        [colors]=\"presetColors\"\n        (onClick)=\"handleBlockChange($event)\"\n        (onSwatchHover)=\"onSwatchHover.emit($event)\"\n      ></color-sketch-preset-colors>\n    </div>\n  </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          styles: ["\n    .sketch-picker {\n      padding: 10px 10px 3px;\n      box-sizing: initial;\n      background: #fff;\n      border-radius: 4px;\n      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);\n    }\n    .sketch-saturation {\n      width: 100%;\n      padding-bottom: 75%;\n      position: relative;\n      overflow: hidden;\n    }\n    .sketch-fields-container {\n      display: flex;\n    }\n    .sketch-swatches-container {\n      display: flex;\n    }\n    .sketch-controls {\n      display: flex;\n    }\n    .sketch-sliders {\n      padding: 4px 0px;\n      -webkit-box-flex: 1;\n      flex: 1 1 0%;\n    }\n    .sketch-hue {\n      position: relative;\n      height: 10px;\n      overflow: hidden;\n    }\n    .sketch-alpha {\n      position: relative;\n      height: 10px;\n      margin-top: 4px;\n      overflow: hidden;\n    }\n    .sketch-color {\n      width: 24px;\n      height: 24px;\n      position: relative;\n      margin-top: 4px;\n      margin-left: 4px;\n      border-radius: 3px;\n    }\n    .sketch-active {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n      border-radius: 2px;\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;\n    }\n  "]
        }]
      }], function () {
        return [];
      }, {
        disableAlpha: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        presetColors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ColorSketchModule, {
        declarations: function declarations() {
          return [SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"]];
        },
        exports: function exports() {
          return [SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ColorSketchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent],
          exports: [SketchComponent, SketchFieldsComponent, SketchPresetColorsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["AlphaModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["CheckboardModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["EditableInputModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["HueModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SaturationModule"], ngx_color__WEBPACK_IMPORTED_MODULE_3__["SwatchModule"]]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-color-sketch.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js ***!
    \***************************************************************************/

  /*! exports provided: NgxFileDropComponent, NgxFileDropEntry, NgxFileDropModule, ɵa */

  /***/
  function node_modulesNgxFileDrop__ivy_ngcc__Fesm2015NgxFileDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxFileDropComponent", function () {
      return NgxFileDropComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxFileDropEntry", function () {
      return NgxFileDropEntry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxFileDropModule", function () {
      return NgxFileDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NgxFileDropContentTemplateDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * fileEntry is an instance of {@link FileSystemFileEntry} or {@link FileSystemDirectoryEntry}.
     * Which one is it can be checked using {@link FileSystemEntry.isFile} or {@link FileSystemEntry.isDirectory}
     * properties of the given {@link FileSystemEntry}.
     */


    var _c0 = ["fileSelector"];

    function NgxFileDropComponent_ng_template_4_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.dropZoneLabel);
      }
    }

    function NgxFileDropComponent_ng_template_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxFileDropComponent_ng_template_4_div_1_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.openFileSelector($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.browseBtnLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r5.browseBtnClassName);
      }
    }

    function NgxFileDropComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxFileDropComponent_ng_template_4_div_0_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxFileDropComponent_ng_template_4_div_1_Template, 2, 2, "div", 7);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropZoneLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showBrowseBtn);
      }
    }

    function NgxFileDropComponent_ng_template_6_Template(rf, ctx) {}

    var _c1 = function _c1(a0) {
      return {
        openFileSelector: a0
      };
    };

    var NgxFileDropEntry = function NgxFileDropEntry(relativePath, fileEntry) {
      _classCallCheck(this, NgxFileDropEntry);

      this.relativePath = relativePath;
      this.fileEntry = fileEntry;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var NgxFileDropContentTemplateDirective = function NgxFileDropContentTemplateDirective(template) {
      _classCallCheck(this, NgxFileDropContentTemplateDirective);

      this.template = template;
    };

    NgxFileDropContentTemplateDirective.ɵfac = function NgxFileDropContentTemplateDirective_Factory(t) {
      return new (t || NgxFileDropContentTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgxFileDropContentTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxFileDropContentTemplateDirective,
      selectors: [["", "ngx-file-drop-content-tmp", ""]]
    });

    NgxFileDropContentTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    NgxFileDropContentTemplateDirective = __decorate([__metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])], NgxFileDropContentTemplateDirective);

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var NgxFileDropComponent = /*#__PURE__*/function () {
      function NgxFileDropComponent(zone, renderer) {
        var _this11 = this;

        _classCallCheck(this, NgxFileDropComponent);

        this.zone = zone;
        this.renderer = renderer;
        this.accept = '*';
        this.directory = false;
        this.multiple = true;
        this.dropZoneLabel = '';
        this.dropZoneClassName = 'ngx-file-drop__drop-zone';
        this.useDragEnter = false;
        this.contentClassName = 'ngx-file-drop__content';
        this.showBrowseBtn = false;
        this.browseBtnClassName = 'btn btn-primary btn-xs ngx-file-drop__browse-btn';
        this.browseBtnLabel = 'Browse files';
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDraggingOverDropZone = false;
        this.globalDraggingInProgress = false;
        this.files = [];
        this.numOfActiveReadEntries = 0;
        this.helperFormEl = null;
        this.fileInputPlaceholderEl = null;
        this.dropEventTimerSubscription = null;
        this._disabled = false;

        this.openFileSelector = function (event) {
          if (_this11.fileSelector && _this11.fileSelector.nativeElement) {
            _this11.fileSelector.nativeElement.click();
          }
        };

        this.globalDragStartListener = this.renderer.listen('document', 'dragstart', function (evt) {
          _this11.globalDraggingInProgress = true;
        });
        this.globalDragEndListener = this.renderer.listen('document', 'dragend', function (evt) {
          _this11.globalDraggingInProgress = false;
        });
      }

      _createClass(NgxFileDropComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.dropEventTimerSubscription) {
            this.dropEventTimerSubscription.unsubscribe();
            this.dropEventTimerSubscription = null;
          }

          this.globalDragStartListener();
          this.globalDragEndListener();
          this.files = [];
          this.helperFormEl = null;
          this.fileInputPlaceholderEl = null;
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          if (this.useDragEnter) {
            this.preventAndStop(event);
          } else if (!this.isDropzoneDisabled() && !this.useDragEnter) {
            if (!this.isDraggingOverDropZone) {
              this.isDraggingOverDropZone = true;
              this.onFileOver.emit(event);
            }

            this.preventAndStop(event);
          }
        }
      }, {
        key: "onDragEnter",
        value: function onDragEnter(event) {
          if (!this.isDropzoneDisabled() && this.useDragEnter) {
            if (!this.isDraggingOverDropZone) {
              this.isDraggingOverDropZone = true;
              this.onFileOver.emit(event);
            }

            this.preventAndStop(event);
          }
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (!this.isDropzoneDisabled()) {
            if (this.isDraggingOverDropZone) {
              this.isDraggingOverDropZone = false;
              this.onFileLeave.emit(event);
            }

            this.preventAndStop(event);
          }
        }
      }, {
        key: "dropFiles",
        value: function dropFiles(event) {
          if (!this.isDropzoneDisabled()) {
            this.isDraggingOverDropZone = false;

            if (event.dataTransfer) {
              event.dataTransfer.dropEffect = 'copy';
              var items;

              if (event.dataTransfer.items) {
                items = event.dataTransfer.items;
              } else {
                items = event.dataTransfer.files;
              }

              this.preventAndStop(event);
              this.checkFiles(items);
            }
          }
        }
        /**
         * Processes the change event of the file input and adds the given files.
         * @param Event event
         */

      }, {
        key: "uploadFiles",
        value: function uploadFiles(event) {
          if (!this.isDropzoneDisabled()) {
            if (event.target) {
              var items = event.target.files || [];
              this.checkFiles(items);
              this.resetFileInput();
            }
          }
        }
      }, {
        key: "checkFiles",
        value: function checkFiles(items) {
          var _this12 = this;

          var _loop = function _loop(i) {
            var item = items[i];
            var entry = null;

            if (_this12.canGetAsEntry(item)) {
              entry = item.webkitGetAsEntry();
            }

            if (!entry) {
              if (item) {
                var fakeFileEntry = {
                  name: item.name,
                  isDirectory: false,
                  isFile: true,
                  file: function file(callback) {
                    callback(item);
                  }
                };
                var toUpload = new NgxFileDropEntry(fakeFileEntry.name, fakeFileEntry);

                _this12.addToQueue(toUpload);
              }
            } else {
              if (entry.isFile) {
                var _toUpload = new NgxFileDropEntry(entry.name, entry);

                _this12.addToQueue(_toUpload);
              } else if (entry.isDirectory) {
                _this12.traverseFileTree(entry, entry.name);
              }
            }
          };

          for (var i = 0; i < items.length; i++) {
            _loop(i);
          }

          if (this.dropEventTimerSubscription) {
            this.dropEventTimerSubscription.unsubscribe();
          }

          this.dropEventTimerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 200).subscribe(function () {
            if (_this12.files.length > 0 && _this12.numOfActiveReadEntries === 0) {
              var files = _this12.files;
              _this12.files = [];

              _this12.onFileDrop.emit(files);
            }
          });
        }
      }, {
        key: "traverseFileTree",
        value: function traverseFileTree(item, path) {
          var _this13 = this;

          if (item.isFile) {
            var toUpload = new NgxFileDropEntry(path, item);
            this.files.push(toUpload);
          } else {
            path = path + '/';
            var dirReader = item.createReader();
            var entries = [];

            var readEntries = function readEntries() {
              _this13.numOfActiveReadEntries++;
              dirReader.readEntries(function (result) {
                if (!result.length) {
                  // add empty folders
                  if (entries.length === 0) {
                    var _toUpload2 = new NgxFileDropEntry(path, item);

                    _this13.zone.run(function () {
                      _this13.addToQueue(_toUpload2);
                    });
                  } else {
                    var _loop2 = function _loop2(i) {
                      _this13.zone.run(function () {
                        _this13.traverseFileTree(entries[i], path + entries[i].name);
                      });
                    };

                    for (var i = 0; i < entries.length; i++) {
                      _loop2(i);
                    }
                  }
                } else {
                  // continue with the reading
                  entries = entries.concat(result);
                  readEntries();
                }

                _this13.numOfActiveReadEntries--;
              });
            };

            readEntries();
          }
        }
        /**
         * Clears any added files from the file input element so the same file can subsequently be added multiple times.
         */

      }, {
        key: "resetFileInput",
        value: function resetFileInput() {
          if (this.fileSelector && this.fileSelector.nativeElement) {
            var fileInputEl = this.fileSelector.nativeElement;
            var fileInputContainerEl = fileInputEl.parentElement;
            var helperFormEl = this.getHelperFormElement();
            var fileInputPlaceholderEl = this.getFileInputPlaceholderElement(); // Just a quick check so we do not mess up the DOM (will never happen though).

            if (fileInputContainerEl !== helperFormEl) {
              // Insert the form input placeholder in the DOM before the form input element.
              this.renderer.insertBefore(fileInputContainerEl, fileInputPlaceholderEl, fileInputEl); // Add the form input as child of the temporary form element, removing the form input from the DOM.

              this.renderer.appendChild(helperFormEl, fileInputEl); // Reset the form, thus clearing the input element of any files.

              helperFormEl.reset(); // Add the file input back to the DOM in place of the file input placeholder element.

              this.renderer.insertBefore(fileInputContainerEl, fileInputEl, fileInputPlaceholderEl); // Remove the input placeholder from the DOM

              this.renderer.removeChild(fileInputContainerEl, fileInputPlaceholderEl);
            }
          }
        }
        /**
         * Get a cached HTML form element as a helper element to clear the file input element.
         */

      }, {
        key: "getHelperFormElement",
        value: function getHelperFormElement() {
          if (!this.helperFormEl) {
            this.helperFormEl = this.renderer.createElement('form');
          }

          return this.helperFormEl;
        }
        /**
         * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
         */

      }, {
        key: "getFileInputPlaceholderElement",
        value: function getFileInputPlaceholderElement() {
          if (!this.fileInputPlaceholderEl) {
            this.fileInputPlaceholderEl = this.renderer.createElement('div');
          }

          return this.fileInputPlaceholderEl;
        }
      }, {
        key: "canGetAsEntry",
        value: function canGetAsEntry(item) {
          return !!item.webkitGetAsEntry;
        }
      }, {
        key: "isDropzoneDisabled",
        value: function isDropzoneDisabled() {
          return this.globalDraggingInProgress || this.disabled;
        }
      }, {
        key: "addToQueue",
        value: function addToQueue(item) {
          this.files.push(item);
        }
      }, {
        key: "preventAndStop",
        value: function preventAndStop(event) {
          event.stopPropagation();
          event.preventDefault();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        },
        set: function set(value) {
          this._disabled = value != null && "".concat(value) !== 'false';
        }
      }]);

      return NgxFileDropComponent;
    }();

    NgxFileDropComponent.ɵfac = function NgxFileDropComponent_Factory(t) {
      return new (t || NgxFileDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NgxFileDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxFileDropComponent,
      selectors: [["ngx-file-drop"]],
      contentQueries: function NgxFileDropComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxFileDropContentTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
        }
      },
      viewQuery: function NgxFileDropComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileSelector = _t.first);
        }
      },
      inputs: {
        accept: "accept",
        directory: "directory",
        multiple: "multiple",
        dropZoneLabel: "dropZoneLabel",
        dropZoneClassName: "dropZoneClassName",
        useDragEnter: "useDragEnter",
        contentClassName: "contentClassName",
        showBrowseBtn: "showBrowseBtn",
        browseBtnClassName: "browseBtnClassName",
        browseBtnLabel: "browseBtnLabel",
        disabled: "disabled"
      },
      outputs: {
        onFileDrop: "onFileDrop",
        onFileOver: "onFileOver",
        onFileLeave: "onFileLeave"
      },
      decls: 7,
      vars: 15,
      consts: [[3, "className", "drop", "dragover", "dragenter", "dragleave"], [3, "className"], ["type", "file", 1, "ngx-file-drop__file-input", 3, "accept", "multiple", "change"], ["fileSelector", ""], ["defaultContentTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ngx-file-drop__drop-zone-label", 4, "ngIf"], [4, "ngIf"], [1, "ngx-file-drop__drop-zone-label"], ["type", "button", 3, "className", "value", "click"]],
      template: function NgxFileDropComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function NgxFileDropComponent_Template_div_drop_0_listener($event) {
            return ctx.dropFiles($event);
          })("dragover", function NgxFileDropComponent_Template_div_dragover_0_listener($event) {
            return ctx.onDragOver($event);
          })("dragenter", function NgxFileDropComponent_Template_div_dragenter_0_listener($event) {
            return ctx.onDragEnter($event);
          })("dragleave", function NgxFileDropComponent_Template_div_dragleave_0_listener($event) {
            return ctx.onDragLeave($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxFileDropComponent_Template_input_change_2_listener($event) {
            return ctx.uploadFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxFileDropComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxFileDropComponent_ng_template_6_Template, 0, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-file-drop__drop-zone--over", ctx.isDraggingOverDropZone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.dropZoneClassName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.contentClassName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx.accept)("multiple", ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("directory", ctx.directory || undefined)("webkitdirectory", ctx.directory || undefined)("mozdirectory", ctx.directory || undefined)("msdirectory", ctx.directory || undefined)("odirectory", ctx.directory || undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate || _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.openFileSelector));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]
    });

    NgxFileDropComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], NgxFileDropComponent.prototype, "accept", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean)], NgxFileDropComponent.prototype, "directory", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean)], NgxFileDropComponent.prototype, "multiple", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], NgxFileDropComponent.prototype, "dropZoneLabel", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], NgxFileDropComponent.prototype, "dropZoneClassName", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean)], NgxFileDropComponent.prototype, "useDragEnter", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], NgxFileDropComponent.prototype, "contentClassName", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], NgxFileDropComponent.prototype, "disabled", null);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean)], NgxFileDropComponent.prototype, "showBrowseBtn", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], NgxFileDropComponent.prototype, "browseBtnClassName", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], NgxFileDropComponent.prototype, "browseBtnLabel", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], NgxFileDropComponent.prototype, "onFileDrop", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], NgxFileDropComponent.prototype, "onFileOver", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], NgxFileDropComponent.prototype, "onFileLeave", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(NgxFileDropContentTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
    }), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])], NgxFileDropComponent.prototype, "contentTemplate", void 0);

    __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileSelector', {
      "static": true
    }), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], NgxFileDropComponent.prototype, "fileSelector", void 0);

    NgxFileDropComponent = __decorate$1([__metadata$1("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])], NgxFileDropComponent);

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxFileDropModule = function NgxFileDropModule() {
      _classCallCheck(this, NgxFileDropModule);
    };

    NgxFileDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxFileDropModule,
      bootstrap: function bootstrap() {
        return [NgxFileDropComponent];
      }
    });
    NgxFileDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxFileDropModule_Factory(t) {
        return new (t || NgxFileDropModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFileDropContentTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngx-file-drop-content-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFileDropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-file-drop',
          template: "<div [className]=\"dropZoneClassName\"\r\n     [class.ngx-file-drop__drop-zone--over]=\"isDraggingOverDropZone\"\r\n     (drop)=\"dropFiles($event)\"\r\n     (dragover)=\"onDragOver($event)\"\r\n     (dragenter)=\"onDragEnter($event)\"\r\n     (dragleave)=\"onDragLeave($event)\">\r\n  <div [className]=\"contentClassName\">\r\n    <input \r\n      type=\"file\" \r\n      #fileSelector \r\n      [accept]=\"accept\" \r\n      [attr.directory]=\"directory || undefined\" \r\n      [attr.webkitdirectory]=\"directory || undefined\"\r\n      [attr.mozdirectory]=\"directory || undefined\"\r\n      [attr.msdirectory]=\"directory || undefined\"\r\n      [attr.odirectory]=\"directory || undefined\"\r\n      [multiple]=\"multiple\"\r\n      (change)=\"uploadFiles($event)\" \r\n      class=\"ngx-file-drop__file-input\" \r\n    />\r\n\r\n    <ng-template #defaultContentTemplate>\r\n      <div *ngIf=\"dropZoneLabel\" class=\"ngx-file-drop__drop-zone-label\">{{dropZoneLabel}}</div>\r\n      <div *ngIf=\"showBrowseBtn\">\r\n        <input type=\"button\" [className]=\"browseBtnClassName\" value=\"{{browseBtnLabel}}\" (click)=\"openFileSelector($event)\" />\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"contentTemplate || defaultContentTemplate\"\r\n      [ngTemplateOutletContext]=\"{ openFileSelector: openFileSelector }\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
          styles: [".ngx-file-drop__drop-zone{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label{text-align:center}.ngx-file-drop__file-input{display:none}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropZoneLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropZoneClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBrowseBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        browseBtnClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        browseBtnLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgxFileDropContentTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        fileSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileSelector', {
            "static": true
          }]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxFileDropModule, {
        declarations: function declarations() {
          return [NgxFileDropComponent, NgxFileDropContentTemplateDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [NgxFileDropComponent, NgxFileDropContentTemplateDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFileDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
          providers: [],
          bootstrap: [NgxFileDropComponent]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-file-drop.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js ***!
    \***********************************************************************************/

  /*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile */

  /***/
  function node_modulesNgxImageCropper__ivy_ngcc__Fesm2015NgxImageCropperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function () {
      return ImageCropperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function () {
      return ImageCropperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "base64ToFile", function () {
      return base64ToFile;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Black 2x1 JPEG, with the following meta information set:
    // - EXIF Orientation: 6 (Rotated 90° CCW)
    // Source: https://github.com/blueimp/JavaScript-Load-Image

    /** @type {?} */


    var _c0 = ["wrapper"];
    var _c1 = ["sourceImage"];

    function ImageCropperComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.imageLoadedInView();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.startMove($event, ctx_r7.moveTypes.Resize, "topleft");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.startMove($event, ctx_r9.moveTypes.Resize, "topleft");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topright");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.startMove($event, ctx_r11.moveTypes.Resize, "topright");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "bottomright");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "bottomright");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "bottomleft");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomleft");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "top");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "top");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "right");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "right");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "bottom");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "bottom");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "left");
        })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "left");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ImageCropperComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.keyboardAccess($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.startMove($event, ctx_r26.moveTypes.Move);
        })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.startMove($event, ctx_r27.moveTypes.Move);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", ctx_r2.roundCropper);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
      }
    }

    var testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
    /**
     * @return {?}
     */

    function supportsAutomaticRotation() {
      return new Promise(
      /**
      * @param {?} resolve
      * @return {?}
      */
      function (resolve) {
        /** @type {?} */
        var img = new Image();

        img.onload =
        /**
        * @return {?}
        */
        function () {
          // Check if browser supports automatic image orientation:

          /** @type {?} */
          var supported = img.width === 1 && img.height === 2;
          resolve(supported);
        };

        img.src = testAutoOrientationImageURL;
      });
    }
    /**
     * @param {?} exifRotationOrBase64Image
     * @return {?}
     */


    function getTransformationsFromExifData(exifRotationOrBase64Image) {
      if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
      }

      switch (exifRotationOrBase64Image) {
        case 2:
          return {
            rotate: 0,
            flip: true
          };

        case 3:
          return {
            rotate: 2,
            flip: false
          };

        case 4:
          return {
            rotate: 2,
            flip: true
          };

        case 5:
          return {
            rotate: 1,
            flip: true
          };

        case 6:
          return {
            rotate: 1,
            flip: false
          };

        case 7:
          return {
            rotate: 3,
            flip: true
          };

        case 8:
          return {
            rotate: 3,
            flip: false
          };

        default:
          return {
            rotate: 0,
            flip: false
          };
      }
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */


    function getExifRotation(imageBase64) {
      /** @type {?} */
      var view = new DataView(base64ToArrayBuffer(imageBase64));

      if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
      }
      /** @type {?} */


      var length = view.byteLength;
      /** @type {?} */

      var offset = 2;

      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return -1;
        /** @type {?} */

        var marker = view.getUint16(offset, false);
        offset += 2;

        if (marker == 0xFFE1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) {
            return -1;
          }
          /** @type {?} */


          var little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          /** @type {?} */

          var tags = view.getUint16(offset, little);
          offset += 2;

          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) == 0x0112) {
              return view.getUint16(offset + i * 12 + 8, little);
            }
          }
        } else if ((marker & 0xFF00) != 0xFF00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }

      return -1;
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */


    function base64ToArrayBuffer(imageBase64) {
      imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
      /** @type {?} */

      var binaryString = atob(imageBase64);
      /** @type {?} */

      var len = binaryString.length;
      /** @type {?} */

      var bytes = new Uint8Array(len);

      for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      return bytes.buffer;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /*
     * Hermite resize - fast image resize/resample using Hermite filter.
     * https://github.com/viliusle/Hermite-resize
     */

    /**
     * @param {?} canvas
     * @param {?} width
     * @param {?} height
     * @return {?}
     */


    function resizeCanvas(canvas, width, height) {
      /** @type {?} */
      var width_source = canvas.width;
      /** @type {?} */

      var height_source = canvas.height;
      width = Math.round(width);
      height = Math.round(height);
      /** @type {?} */

      var ratio_w = width_source / width;
      /** @type {?} */

      var ratio_h = height_source / height;
      /** @type {?} */

      var ratio_w_half = Math.ceil(ratio_w / 2);
      /** @type {?} */

      var ratio_h_half = Math.ceil(ratio_h / 2);
      /** @type {?} */

      var ctx = canvas.getContext('2d');

      if (ctx) {
        /** @type {?} */
        var img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */

        var img2 = ctx.createImageData(width, height);
        /** @type {?} */

        var data = img.data;
        /** @type {?} */

        var data2 = img2.data;

        for (var j = 0; j < height; j++) {
          for (var i = 0; i < width; i++) {
            /** @type {?} */
            var x2 = (i + j * width) * 4;
            /** @type {?} */

            var center_y = j * ratio_h;
            /** @type {?} */

            var weight = 0;
            /** @type {?} */

            var weights = 0;
            /** @type {?} */

            var weights_alpha = 0;
            /** @type {?} */

            var gx_r = 0;
            /** @type {?} */

            var gx_g = 0;
            /** @type {?} */

            var gx_b = 0;
            /** @type {?} */

            var gx_a = 0;
            /** @type {?} */

            var xx_start = Math.floor(i * ratio_w);
            /** @type {?} */

            var yy_start = Math.floor(j * ratio_h);
            /** @type {?} */

            var xx_stop = Math.ceil((i + 1) * ratio_w);
            /** @type {?} */

            var yy_stop = Math.ceil((j + 1) * ratio_h);
            xx_stop = Math.min(xx_stop, width_source);
            yy_stop = Math.min(yy_stop, height_source);

            for (var yy = yy_start; yy < yy_stop; yy++) {
              /** @type {?} */
              var dy = Math.abs(center_y - yy) / ratio_h_half;
              /** @type {?} */

              var center_x = i * ratio_w;
              /** @type {?} */

              var w0 = dy * dy;

              for (var xx = xx_start; xx < xx_stop; xx++) {
                /** @type {?} */
                var dx = Math.abs(center_x - xx) / ratio_w_half;
                /** @type {?} */

                var w = Math.sqrt(w0 + dx * dx);

                if (w >= 1) {
                  //pixel too far
                  continue;
                } //hermite filter


                weight = 2 * w * w * w - 3 * w * w + 1;
                /** @type {?} */

                var pos_x = 4 * (xx + yy * width_source); //alpha

                gx_a += weight * data[pos_x + 3];
                weights_alpha += weight; //colors

                if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
                gx_r += weight * data[pos_x];
                gx_g += weight * data[pos_x + 1];
                gx_b += weight * data[pos_x + 2];
                weights += weight;
              }
            }

            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
          }
        }

        canvas.width = width;
        canvas.height = height; //draw

        ctx.putImageData(img2, 0, 0);
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function MoveStart() {}

    if (false) {}
    /** @enum {string} */


    var MoveTypes = {
      Move: 'move',
      Resize: 'resize',
      Pinch: 'pinch'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ImageCropperComponent = /*#__PURE__*/function () {
      /**
       * @param {?} sanitizer
       * @param {?} cd
       */
      function ImageCropperComponent(sanitizer, cd) {
        _classCallCheck(this, ImageCropperComponent);

        this.sanitizer = sanitizer;
        this.cd = cd;
        this.Hammer = typeof window !== 'undefined' ?
        /** @type {?} */

        /** @type {?} */
        window.Hammer : null;
        this.setImageMaxSizeRetries = 0;
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.exifTransform = {
          rotate: 0,
          flip: false
        };
        this.autoRotateSupported = supportsAutomaticRotation();
        this.stepSize = 3;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.moveTypes = MoveTypes;
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.transform = {};
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.canvasRotation = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.containWithinAspectRatio = false;
        this.hideResizeSquares = false;
        this.cropper = {
          x1: -100,
          y1: -100,
          x2: 10000,
          y2: 10000
        };
        this.alignImage = 'center';
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initCropper();
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(ImageCropperComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.onChangesInputImage(changes);

          if (this.originalImage && this.originalImage.complete && this.exifTransform && (changes.containWithinAspectRatio || changes.canvasRotation)) {
            this.transformOriginalImage();
          }

          if (changes.cropper) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
          }

          if (changes.aspectRatio && this.imageVisible) {
            this.resetCropperPosition();
          }

          if (changes.transform) {
            this.transform = this.transform || {};
            this.setCssTransform();
            this.doAutoCrop();
          }
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "onChangesInputImage",
        value: function onChangesInputImage(changes) {
          if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
            this.initCropper();
          }

          if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
            this.loadImageFile(this.imageChangedEvent.target.files[0]);
          }

          if (changes.imageURL && this.imageURL) {
            this.loadImageFromURL(this.imageURL);
          }

          if (changes.imageBase64 && this.imageBase64) {
            this.loadBase64Image(this.imageBase64);
          }

          if (changes.imageFile && this.imageFile) {
            this.loadImageFile(this.imageFile);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "isValidImageChangedEvent",
        value: function isValidImageChangedEvent() {
          return this.imageChangedEvent && this.imageChangedEvent.target && this.imageChangedEvent.target.files && this.imageChangedEvent.target.files.length > 0;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCssTransform",
        value: function setCssTransform() {
          this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + 'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + 'rotate(' + (this.transform.rotate || 0) + 'deg)');
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stepSize = this.initialStepSize;
          this.activatePinchGesture();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "initCropper",
        value: function initCropper() {
          this.imageVisible = false;
          this.transformedImage = null;
          this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
          this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
          };
          this.maxSize = {
            width: 0,
            height: 0
          };
          this.originalSize = {
            width: 0,
            height: 0
          };
          this.transformedSize = {
            width: 0,
            height: 0
          };
          this.cropper.x1 = -100;
          this.cropper.y1 = -100;
          this.cropper.x2 = 10000;
          this.cropper.y2 = 10000;
        }
        /**
         * @private
         * @param {?} imageBase64
         * @param {?} imageType
         * @return {?}
         */

      }, {
        key: "loadImage",
        value: function loadImage(imageBase64, imageType) {
          if (this.isValidImageType(imageType)) {
            this.loadBase64Image(imageBase64);
          } else {
            this.loadImageFailed.emit();
          }
        }
        /**
         * @private
         * @param {?} file
         * @return {?}
         */

      }, {
        key: "loadImageFile",
        value: function loadImageFile(file) {
          var _this14 = this;

          /** @type {?} */
          var fileReader = new FileReader();

          fileReader.onload =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this14.loadImage(event.target.result, file.type);
          };

          fileReader.readAsDataURL(file);
        }
        /**
         * @private
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "isValidImageType",
        value: function isValidImageType(type) {
          return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
        }
        /**
         * @private
         * @param {?} imageBase64
         * @return {?}
         */

      }, {
        key: "loadBase64Image",
        value: function loadBase64Image(imageBase64) {
          var _this15 = this;

          this.autoRotateSupported.then(
          /**
          * @param {?} supported
          * @return {?}
          */
          function (supported) {
            return _this15.checkExifAndLoadBase64Image(imageBase64, supported);
          }).then(
          /**
          * @return {?}
          */
          function () {
            return _this15.transformOriginalImage();
          })["catch"](
          /**
          * @param {?} error
          * @return {?}
          */
          function (error) {
            _this15.loadImageFailed.emit();

            _this15.originalImage = null;
            _this15.originalBase64 = null;
            console.error(error);
          });
        }
        /**
         * @private
         * @param {?} imageBase64
         * @param {?} autoRotateSupported
         * @return {?}
         */

      }, {
        key: "checkExifAndLoadBase64Image",
        value: function checkExifAndLoadBase64Image(imageBase64, autoRotateSupported) {
          var _this16 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            _this16.originalImage = new Image();

            _this16.originalImage.onload =
            /**
            * @return {?}
            */
            function () {
              _this16.originalBase64 = imageBase64;
              _this16.exifTransform = getTransformationsFromExifData(autoRotateSupported ? -1 : imageBase64);
              _this16.originalSize.width = _this16.originalImage.naturalWidth;
              _this16.originalSize.height = _this16.originalImage.naturalHeight;
              resolve();
            };

            _this16.originalImage.onerror = reject;
            _this16.originalImage.src = imageBase64;
          });
        }
        /**
         * @private
         * @param {?} url
         * @return {?}
         */

      }, {
        key: "loadImageFromURL",
        value: function loadImageFromURL(url) {
          var _this17 = this;

          /** @type {?} */
          var img = new Image();

          img.onerror =
          /**
          * @return {?}
          */
          function () {
            return _this17.loadImageFailed.emit();
          };

          img.onload =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var canvas = document.createElement('canvas');
            /** @type {?} */

            var context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);

            _this17.loadBase64Image(canvas.toDataURL());
          };

          img.crossOrigin = 'anonymous';
          img.src = url;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "transformOriginalImage",
        value: function transformOriginalImage() {
          if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
            return Promise.reject(new Error('No image loaded'));
          }
          /** @type {?} */


          var transformedBase64 = this.transformImageBase64();
          return this.setTransformedImage(transformedBase64);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "transformImageBase64",
        value: function transformImageBase64() {
          /** @type {?} */
          var canvasRotation = this.canvasRotation + this.exifTransform.rotate;

          if (canvasRotation === 0 && !this.exifTransform.flip && !this.containWithinAspectRatio) {
            return this.originalBase64;
          }
          /** @type {?} */


          var transformedSize = this.getTransformedSize();
          /** @type {?} */

          var canvas = document.createElement('canvas');
          canvas.width = transformedSize.width;
          canvas.height = transformedSize.height;
          /** @type {?} */

          var ctx = canvas.getContext('2d');
          ctx.setTransform(this.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
          ctx.rotate(Math.PI * (canvasRotation / 2));
          ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
          return canvas.toDataURL();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getTransformedSize",
        value: function getTransformedSize() {
          /** @type {?} */
          var canvasRotation = this.canvasRotation + this.exifTransform.rotate;

          if (this.containWithinAspectRatio) {
            if (canvasRotation % 2) {
              /** @type {?} */
              var minWidthToContain = this.originalSize.width * this.aspectRatio;
              /** @type {?} */

              var minHeightToContain = this.originalSize.height / this.aspectRatio;
              return {
                width: Math.max(this.originalSize.height, minWidthToContain),
                height: Math.max(this.originalSize.width, minHeightToContain)
              };
            } else {
              /** @type {?} */
              var _minWidthToContain = this.originalSize.height * this.aspectRatio;
              /** @type {?} */


              var _minHeightToContain = this.originalSize.width / this.aspectRatio;

              return {
                width: Math.max(this.originalSize.width, _minWidthToContain),
                height: Math.max(this.originalSize.height, _minHeightToContain)
              };
            }
          }

          if (canvasRotation % 2) {
            return {
              height: this.originalSize.width,
              width: this.originalSize.height
            };
          }

          return {
            width: this.originalSize.width,
            height: this.originalSize.height
          };
        }
        /**
         * @private
         * @param {?} transformedBase64
         * @return {?}
         */

      }, {
        key: "setTransformedImage",
        value: function setTransformedImage(transformedBase64) {
          var _this18 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this18.transformedBase64 = transformedBase64;
            _this18.safeImgDataUrl = _this18.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
            _this18.transformedImage = new Image();

            _this18.transformedImage.onload =
            /**
            * @return {?}
            */
            function () {
              _this18.transformedSize.width = _this18.transformedImage.naturalWidth;
              _this18.transformedSize.height = _this18.transformedImage.naturalHeight;

              _this18.cd.markForCheck();

              resolve();
            };

            _this18.transformedImage.src = _this18.transformedBase64;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "imageLoadedInView",
        value: function imageLoadedInView() {
          var _this19 = this;

          if (this.transformedImage != null) {
            this.imageLoaded.emit();
            this.setImageMaxSizeRetries = 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this19.checkImageMaxSizeRecursively();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkImageMaxSizeRecursively",
        value: function checkImageMaxSizeRecursively() {
          var _this20 = this;

          if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
          } else if (this.sourceImageLoaded()) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object.assign({}, this.maxSize));
            this.cd.markForCheck();
          } else {
            this.setImageMaxSizeRetries++;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this20.checkImageMaxSizeRecursively();
            }, 50);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "sourceImageLoaded",
        value: function sourceImageLoaded() {
          return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onResize",
        value: function onResize() {
          this.resizeCropperPosition();
          this.setMaxSize();
          this.setCropperScaledMinSize();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "activatePinchGesture",
        value: function activatePinchGesture() {
          if (this.Hammer) {
            /** @type {?} */
            var hammer = new this.Hammer(this.wrapper.nativeElement);
            hammer.get('pinch').set({
              enable: true
            });
            hammer.on('pinchmove', this.onPinch.bind(this));
            hammer.on('pinchend', this.pinchStop.bind(this));
            hammer.on('pinchstart', this.startPinch.bind(this));
          } else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "resizeCropperPosition",
        value: function resizeCropperPosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;

          if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetCropperPosition",
        value: function resetCropperPosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;

          if (!this.maintainAspectRatio) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
          } else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth;
            /** @type {?} */

            var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
          } else {
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight;
            /** @type {?} */

            var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
          }

          this.doAutoCrop();
          this.imageVisible = true;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "keyboardAccess",
        value: function keyboardAccess(event) {
          this.changeKeyboardStepSize(event);
          this.keyboardMoveCropper(event);
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "changeKeyboardStepSize",
        value: function changeKeyboardStepSize(event) {
          if (event.key >= '1' && event.key <= '9') {
            this.stepSize = +event.key;
            return;
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "keyboardMoveCropper",
        value: function keyboardMoveCropper(event) {
          /** @type {?} */
          var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

          if (!keyboardWhiteList.includes(event.key)) {
            return;
          }
          /** @type {?} */


          var moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
          /** @type {?} */

          var position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
          /** @type {?} */

          var moveEvent = this.getEventForKey(event.key, this.stepSize);
          event.preventDefault();
          event.stopPropagation();
          this.startMove({
            clientX: 0,
            clientY: 0
          }, moveType, position);
          this.moveImg(moveEvent);
          this.moveStop();
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getPositionForKey",
        value: function getPositionForKey(key) {
          switch (key) {
            case 'ArrowUp':
              return 'top';

            case 'ArrowRight':
              return 'right';

            case 'ArrowDown':
              return 'bottom';

            case 'ArrowLeft':
            default:
              return 'left';
          }
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getInvertedPositionForKey",
        value: function getInvertedPositionForKey(key) {
          switch (key) {
            case 'ArrowUp':
              return 'bottom';

            case 'ArrowRight':
              return 'left';

            case 'ArrowDown':
              return 'top';

            case 'ArrowLeft':
            default:
              return 'right';
          }
        }
        /**
         * @private
         * @param {?} key
         * @param {?} stepSize
         * @return {?}
         */

      }, {
        key: "getEventForKey",
        value: function getEventForKey(key, stepSize) {
          switch (key) {
            case 'ArrowUp':
              return {
                clientX: 0,
                clientY: stepSize * -1
              };

            case 'ArrowRight':
              return {
                clientX: stepSize,
                clientY: 0
              };

            case 'ArrowDown':
              return {
                clientX: 0,
                clientY: stepSize
              };

            case 'ArrowLeft':
            default:
              return {
                clientX: stepSize * -1,
                clientY: 0
              };
          }
        }
        /**
         * @param {?} event
         * @param {?} moveType
         * @param {?=} position
         * @return {?}
         */

      }, {
        key: "startMove",
        value: function startMove(event, moveType) {
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
            return;
          }

          if (event.preventDefault) {
            event.preventDefault();
          }

          this.moveStart = Object.assign({
            active: true,
            type: moveType,
            position: position,
            clientX: this.getClientX(event),
            clientY: this.getClientY(event)
          }, this.cropper);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "startPinch",
        value: function startPinch(event) {
          if (!this.safeImgDataUrl) {
            return;
          }

          if (event.preventDefault) {
            event.preventDefault();
          }

          this.moveStart = Object.assign({
            active: true,
            type: MoveTypes.Pinch,
            position: 'center',
            clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
            clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2
          }, this.cropper);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "moveImg",
        value: function moveImg(event) {
          if (this.moveStart.active) {
            if (event.stopPropagation) {
              event.stopPropagation();
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            if (this.moveStart.type === MoveTypes.Move) {
              this.move(event);
              this.checkCropperPosition(true);
            } else if (this.moveStart.type === MoveTypes.Resize) {
              this.resize(event);
              this.checkCropperPosition(false);
            }

            this.cd.detectChanges();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onPinch",
        value: function onPinch(event) {
          if (this.moveStart.active) {
            if (event.stopPropagation) {
              event.stopPropagation();
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            if (this.moveStart.type === MoveTypes.Pinch) {
              this.resize(event);
              this.checkCropperPosition(false);
            }

            this.cd.detectChanges();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setMaxSize",
        value: function setMaxSize() {
          if (this.sourceImage) {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCropperScaledMinSize",
        value: function setCropperScaledMinSize() {
          if (this.transformedImage) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
          } else {
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCropperScaledMinWidth",
        value: function setCropperScaledMinWidth() {
          this.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width) : 20;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setCropperScaledMinHeight",
        value: function setCropperScaledMinHeight() {
          if (this.maintainAspectRatio) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
          } else if (this.cropperMinHeight > 0) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
          } else {
            this.cropperScaledMinHeight = 20;
          }
        }
        /**
         * @private
         * @param {?=} maintainSize
         * @return {?}
         */

      }, {
        key: "checkCropperPosition",
        value: function checkCropperPosition() {
          var maintainSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
          }

          if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
          }

          if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
            this.cropper.x2 = this.maxSize.width;
          }

          if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
            this.cropper.y2 = this.maxSize.height;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "moveStop",
        value: function moveStop() {
          if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "pinchStop",
        value: function pinchStop() {
          if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "move",
        value: function move(event) {
          /** @type {?} */
          var diffX = this.getClientX(event) - this.moveStart.clientX;
          /** @type {?} */

          var diffY = this.getClientY(event) - this.moveStart.clientY;
          this.cropper.x1 = this.moveStart.x1 + diffX;
          this.cropper.y1 = this.moveStart.y1 + diffY;
          this.cropper.x2 = this.moveStart.x2 + diffX;
          this.cropper.y2 = this.moveStart.y2 + diffY;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "resize",
        value: function resize(event) {
          /** @type {?} */
          var diffX = this.getClientX(event) - this.moveStart.clientX;
          /** @type {?} */

          var diffY = this.getClientY(event) - this.moveStart.clientY;

          switch (this.moveStart.position) {
            case 'left':
              this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
              break;

            case 'topleft':
              this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
              this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
              break;

            case 'top':
              this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
              break;

            case 'topright':
              this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
              this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
              break;

            case 'right':
              this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
              break;

            case 'bottomright':
              this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
              this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
              break;

            case 'bottom':
              this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
              break;

            case 'bottomleft':
              this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
              this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
              break;

            case 'center':
              /** @type {?} */
              var scale = event.scale;
              /** @type {?} */

              var newWidth = Math.abs(this.moveStart.x2 - this.moveStart.x1) * scale;
              /** @type {?} */

              var newHeight = Math.abs(this.moveStart.y2 - this.moveStart.y1) * scale;
              /** @type {?} */

              var x1 = this.cropper.x1;
              /** @type {?} */

              var y1 = this.cropper.y1;
              this.cropper.x1 = Math.min(this.moveStart.clientX - newWidth / 2, this.cropper.x2 - this.cropperScaledMinWidth);
              this.cropper.y1 = Math.min(this.moveStart.clientY - newHeight / 2, this.cropper.y2 - this.cropperScaledMinHeight);
              this.cropper.x2 = Math.max(this.moveStart.clientX + newWidth / 2, x1 + this.cropperScaledMinWidth);
              this.cropper.y2 = Math.max(this.moveStart.clientY + newHeight / 2, y1 + this.cropperScaledMinHeight);
              break;
          }

          if (this.maintainAspectRatio) {
            this.checkAspectRatio();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkAspectRatio",
        value: function checkAspectRatio() {
          /** @type {?} */
          var overflowX = 0;
          /** @type {?} */

          var overflowY = 0;

          switch (this.moveStart.position) {
            case 'top':
              this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(0 - this.cropper.y1, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'bottom':
              this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'topleft':
              this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(0 - this.cropper.x1, 0);
              overflowY = Math.max(0 - this.cropper.y1, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'topright':
              this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(0 - this.cropper.y1, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'right':
            case 'bottomright':
              this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'left':
            case 'bottomleft':
              this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              overflowX = Math.max(0 - this.cropper.x1, 0);
              overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

              if (overflowX > 0 || overflowY > 0) {
                this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
              }

              break;

            case 'center':
              this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
              this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
              /** @type {?} */

              var overflowX1 = Math.max(0 - this.cropper.x1, 0);
              /** @type {?} */

              var overflowX2 = Math.max(this.cropper.x2 - this.maxSize.width, 0);
              /** @type {?} */

              var overflowY1 = Math.max(this.cropper.y2 - this.maxSize.height, 0);
              /** @type {?} */

              var overflowY2 = Math.max(0 - this.cropper.y1, 0);

              if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                this.cropper.x1 += overflowY1 * this.aspectRatio > overflowX1 ? overflowY1 * this.aspectRatio : overflowX1;
                this.cropper.x2 -= overflowY2 * this.aspectRatio > overflowX2 ? overflowY2 * this.aspectRatio : overflowX2;
                this.cropper.y1 += overflowY2 * this.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / this.aspectRatio;
                this.cropper.y2 -= overflowY1 * this.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / this.aspectRatio;
              }

              break;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "doAutoCrop",
        value: function doAutoCrop() {
          if (this.autoCrop) {
            this.crop();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "crop",
        value: function crop() {
          if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
            this.startCropImage.emit();
            /** @type {?} */

            var imagePosition = this.getImagePosition();
            /** @type {?} */

            var width = imagePosition.x2 - imagePosition.x1;
            /** @type {?} */

            var height = imagePosition.y2 - imagePosition.y1;
            /** @type {?} */

            var cropCanvas =
            /** @type {?} */
            document.createElement('canvas');
            cropCanvas.width = width;
            cropCanvas.height = height;
            /** @type {?} */

            var ctx = cropCanvas.getContext('2d');

            if (ctx) {
              if (this.backgroundColor != null) {
                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(0, 0, width, height);
              }
              /** @type {?} */


              var scaleX = (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1);
              /** @type {?} */

              var scaleY = (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1);
              ctx.setTransform(scaleX, 0, 0, scaleY, this.transformedSize.width / 2, this.transformedSize.height / 2);
              ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
              ctx.rotate((this.transform.rotate || 0) * Math.PI / 180);
              ctx.drawImage(this.transformedImage, -this.transformedSize.width / 2, -this.transformedSize.height / 2);
              /** @type {?} */

              var output = {
                width: width,
                height: height,
                imagePosition: imagePosition,
                cropperPosition: Object.assign({}, this.cropper)
              };

              if (this.containWithinAspectRatio) {
                output.offsetImagePosition = this.getOffsetImagePosition();
              }
              /** @type {?} */


              var resizeRatio = this.getResizeRatio(width, height);

              if (resizeRatio !== 1) {
                output.width = Math.round(width * resizeRatio);
                output.height = this.maintainAspectRatio ? Math.round(output.width / this.aspectRatio) : Math.round(height * resizeRatio);
                resizeCanvas(cropCanvas, output.width, output.height);
              }

              output.base64 = this.cropToBase64(cropCanvas);
              this.imageCropped.emit(output);
              return output;
            }
          }

          return null;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getImagePosition",
        value: function getImagePosition() {
          /** @type {?} */
          var sourceImageElement = this.sourceImage.nativeElement;
          /** @type {?} */

          var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
          /** @type {?} */

          var out = {
            x1: Math.round(this.cropper.x1 * ratio),
            y1: Math.round(this.cropper.y1 * ratio),
            x2: Math.round(this.cropper.x2 * ratio),
            y2: Math.round(this.cropper.y2 * ratio)
          };

          if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
          }

          return out;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getOffsetImagePosition",
        value: function getOffsetImagePosition() {
          /** @type {?} */
          var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
          /** @type {?} */

          var sourceImageElement = this.sourceImage.nativeElement;
          /** @type {?} */

          var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
          /** @type {?} */

          var offsetX;
          /** @type {?} */

          var offsetY;

          if (canvasRotation % 2) {
            offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
          } else {
            offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
          }
          /** @type {?} */


          var out = {
            x1: Math.round(this.cropper.x1 * ratio) - offsetX,
            y1: Math.round(this.cropper.y1 * ratio) - offsetY,
            x2: Math.round(this.cropper.x2 * ratio) - offsetX,
            y2: Math.round(this.cropper.y2 * ratio) - offsetY
          };

          if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
          }

          return out;
        }
        /**
         * @private
         * @param {?} cropCanvas
         * @return {?}
         */

      }, {
        key: "cropToBase64",
        value: function cropToBase64(cropCanvas) {
          return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getQuality",
        value: function getQuality() {
          return Math.min(1, Math.max(0, this.imageQuality / 100));
        }
        /**
         * @private
         * @param {?} width
         * @param {?} height
         * @return {?}
         */

      }, {
        key: "getResizeRatio",
        value: function getResizeRatio(width, height) {
          if (this.resizeToWidth > 0) {
            if (!this.onlyScaleDown || width > this.resizeToWidth) {
              return this.resizeToWidth / width;
            }
          } else if (this.resizeToHeight > 0) {
            if (!this.onlyScaleDown || height > this.resizeToHeight) {
              return this.resizeToHeight / height;
            }
          }

          return 1;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "getClientX",
        value: function getClientX(event) {
          return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "getClientY",
        value: function getClientY(event) {
          return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
        }
      }]);

      return ImageCropperComponent;
    }();

    ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
      return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ImageCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageCropperComponent,
      selectors: [["image-cropper"]],
      viewQuery: function ImageCropperComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) {
            return ctx.moveImg($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) {
            return ctx.moveImg($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() {
            return ctx.moveStop();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() {
            return ctx.moveStop();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
        }
      },
      inputs: {
        format: "format",
        maintainAspectRatio: "maintainAspectRatio",
        transform: "transform",
        aspectRatio: "aspectRatio",
        resizeToWidth: "resizeToWidth",
        resizeToHeight: "resizeToHeight",
        cropperMinWidth: "cropperMinWidth",
        cropperMinHeight: "cropperMinHeight",
        canvasRotation: "canvasRotation",
        initialStepSize: "initialStepSize",
        roundCropper: "roundCropper",
        onlyScaleDown: "onlyScaleDown",
        imageQuality: "imageQuality",
        autoCrop: "autoCrop",
        containWithinAspectRatio: "containWithinAspectRatio",
        hideResizeSquares: "hideResizeSquares",
        cropper: "cropper",
        alignImage: "alignImage",
        disabled: "disabled",
        imageChangedEvent: "imageChangedEvent",
        imageURL: "imageURL",
        imageBase64: "imageBase64",
        imageFile: "imageFile",
        backgroundColor: "backgroundColor"
      },
      outputs: {
        imageCropped: "imageCropped",
        startCropImage: "startCropImage",
        imageLoaded: "imageLoaded",
        cropperReady: "cropperReady",
        loadImageFailed: "loadImageFailed"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 10,
      consts: [["wrapper", ""], ["class", "source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "overlay"], ["class", "cropper", "tabindex", "0", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "cropper", 3, "keydown"], [1, "move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 5, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"],
      changeDetection: 0
    });
    /** @nocollapse */

    ImageCropperComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    ImageCropperComponent.propDecorators = {
      wrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['wrapper', {
          "static": true
        }]
      }],
      sourceImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sourceImage', {
          "static": false
        }]
      }],
      imageChangedEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageURL: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageBase64: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageFile: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      format: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maintainAspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transform: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      aspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resizeToWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resizeToHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropperMinWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropperMinHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      canvasRotation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialStepSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      roundCropper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onlyScaleDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageQuality: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoCrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      containWithinAspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideResizeSquares: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cropper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      alignImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.text-align']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.disabled']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      imageCropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      startCropImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      imageLoaded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      cropperReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      loadImageFailed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }],
      moveImg: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:mousemove', ['$event']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:touchmove', ['$event']]
      }],
      moveStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:mouseup']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:touchend']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'image-cropper',
          template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maintainAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeToWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeToHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropperMinWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropperMinHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        canvasRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialStepSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roundCropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onlyScaleDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageQuality: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoCrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containWithinAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideResizeSquares: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alignImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.text-align']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.disabled']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageCropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        startCropImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        imageLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cropperReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        loadImageFailed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }],
        moveImg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchmove', ['$event']]
        }],
        moveStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchend']
        }],
        wrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['wrapper', {
            "static": true
          }]
        }],
        sourceImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sourceImage', {
            "static": false
          }]
        }],
        imageChangedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageBase64: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ImageCropperModule = function ImageCropperModule() {
      _classCallCheck(this, ImageCropperModule);
    };

    ImageCropperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImageCropperModule
    });
    ImageCropperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImageCropperModule_Factory(t) {
        return new (t || ImageCropperModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageCropperModule, {
        declarations: function declarations() {
          return [ImageCropperComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [ImageCropperComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [ImageCropperComponent],
          exports: [ImageCropperComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} base64Image
     * @return {?}
     */


    function base64ToFile(base64Image) {
      /** @type {?} */
      var split = base64Image.split(',');
      /** @type {?} */

      var type = split[0].replace('data:', '').replace(';base64', '');
      /** @type {?} */

      var byteString = atob(split[1]);
      /** @type {?} */

      var ab = new ArrayBuffer(byteString.length);
      /** @type {?} */

      var ia = new Uint8Array(ab);

      for (var i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ab], {
        type: type
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-image-cropper.js.map

    /***/

  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin-index/admin-index.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-index/admin-index.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminIndexComponent */

  /***/
  function srcAppAdminAdminIndexAdminIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminIndexComponent", function () {
      return AdminIndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/admin/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminIndexComponent = /*#__PURE__*/function () {
      function AdminIndexComponent() {
        _classCallCheck(this, AdminIndexComponent);
      }

      _createClass(AdminIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminIndexComponent;
    }();

    AdminIndexComponent.ɵfac = function AdminIndexComponent_Factory(t) {
      return new (t || AdminIndexComponent)();
    };

    AdminIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminIndexComponent,
      selectors: [["app-admin-index"]],
      decls: 3,
      vars: 0,
      consts: [[1, "div-container-admin", 2, "padding-top", "100px"]],
      template: function AdminIndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWluZGV4L2FkbWluLWluZGV4LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-index',
          templateUrl: './admin-index.component.html',
          styleUrls: ['./admin-index.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-index/admin-index.component */
    "./src/app/admin/admin-index/admin-index.component.ts");
    /* harmony import */


    var _datos_lugar_datos_lugar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./datos-lugar/datos-lugar.component */
    "./src/app/admin/datos-lugar/datos-lugar.component.ts");
    /* harmony import */


    var _productos_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./productos/productos.component */
    "./src/app/admin/productos/productos.component.ts");
    /* harmony import */


    var _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./disenio/disenio.component */
    "./src/app/admin/disenio/disenio.component.ts");
    /* harmony import */


    var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorias/categorias.component */
    "./src/app/admin/categorias/categorias.component.ts");

    var routes = [{
      path: '',
      component: _admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_2__["AdminIndexComponent"],
      children: [{
        path: '',
        redirectTo: 'Productos',
        pathMatch: 'full'
      }, {
        path: 'comercio',
        component: _datos_lugar_datos_lugar_component__WEBPACK_IMPORTED_MODULE_3__["DatosLugarComponent"]
      }, {
        path: 'Productos',
        component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_4__["ProductosComponent"]
      }, {
        path: 'diseño',
        component: _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_5__["DisenioComponent"]
      }, {
        path: 'categorias',
        component: _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasComponent"]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-index/admin-index.component */
    "./src/app/admin/admin-index/admin-index.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/admin/navbar/navbar.component.ts");
    /* harmony import */


    var _datos_lugar_datos_lugar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./datos-lugar/datos-lugar.component */
    "./src/app/admin/datos-lugar/datos-lugar.component.ts");
    /* harmony import */


    var _productos_productos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./productos/productos.component */
    "./src/app/admin/productos/productos.component.ts");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
    /* harmony import */


    var ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-file-drop */
    "./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-color/sketch */
    "./node_modules/ngx-color/__ivy_ngcc__/sketch/fesm2015/ngx-color-sketch.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
    /* harmony import */


    var _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./disenio/disenio.component */
    "./src/app/admin/disenio/disenio.component.ts");
    /* harmony import */


    var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./categorias/categorias.component */
    "./src/app/admin/categorias/categorias.component.ts");
    /* harmony import */


    var _modal_imgs_producto_modal_imgs_producto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modal-imgs-producto/modal-imgs-producto.component */
    "./src/app/admin/modal-imgs-producto/modal-imgs-producto.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["NgxFileDropModule"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_11__["ColorSketchModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_4__["AdminIndexComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _datos_lugar_datos_lugar_component__WEBPACK_IMPORTED_MODULE_6__["DatosLugarComponent"], _productos_productos_component__WEBPACK_IMPORTED_MODULE_7__["ProductosComponent"], _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_13__["DisenioComponent"], _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_14__["CategoriasComponent"], _modal_imgs_producto_modal_imgs_producto_component__WEBPACK_IMPORTED_MODULE_15__["ModalImgsProductoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["NgxFileDropModule"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_11__["ColorSketchModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_index_admin_index_component__WEBPACK_IMPORTED_MODULE_4__["AdminIndexComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _datos_lugar_datos_lugar_component__WEBPACK_IMPORTED_MODULE_6__["DatosLugarComponent"], _productos_productos_component__WEBPACK_IMPORTED_MODULE_7__["ProductosComponent"], _disenio_disenio_component__WEBPACK_IMPORTED_MODULE_13__["DisenioComponent"], _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_14__["CategoriasComponent"], _modal_imgs_producto_modal_imgs_producto_component__WEBPACK_IMPORTED_MODULE_15__["ModalImgsProductoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["NgxFileDropModule"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_11__["ColorSketchModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]],
          entryComponents: [_modal_imgs_producto_modal_imgs_producto_component__WEBPACK_IMPORTED_MODULE_15__["ModalImgsProductoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/categorias/categorias.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/categorias/categorias.component.ts ***!
    \**********************************************************/

  /*! exports provided: CategoriasComponent */

  /***/
  function srcAppAdminCategoriasCategoriasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function () {
      return CategoriasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function CategoriasComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.showNuevo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A\xF1adir nueva categoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_9_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_9_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoriasComponent_div_9_div_3_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_9_image_cropper_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "image-cropper", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function CategoriasComponent_div_9_image_cropper_4_Template_image_cropper_imageCropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.imageCropped($event);
        })("imageLoaded", function CategoriasComponent_div_9_image_cropper_4_Template_image_cropper_imageLoaded_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.imageLoaded();
        })("cropperReady", function CategoriasComponent_div_9_image_cropper_4_Template_image_cropper_cropperReady_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.cropperReady();
        })("loadImageFailed", function CategoriasComponent_div_9_image_cropper_4_Template_image_cropper_loadImageFailed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx_r7.imageChangedEvent)("maintainAspectRatio", false)("aspectRatio", 9 / 16);
      }
    }

    function CategoriasComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriasComponent_div_9_div_2_Template, 3, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoriasComponent_div_9_div_3_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriasComponent_div_9_image_cropper_4_Template, 1, 3, "image-cropper", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriasComponent_div_9_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.new_cat.nombre = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_9_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.guardarCategoriaProd(ctx_r17.new_cat);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_9_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.hideNuevo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.newCrop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.newCrop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newCrop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.new_cat.nombre);
      }
    }

    function CategoriasComponent_div_11_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
      }

      if (rf & 2) {
        var categoria_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", categoria_r19.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CategoriasComponent_div_11_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoriasComponent_div_11_input_3_Template_input_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var categoria_r19 = ctx_r30.$implicit;
          var i_r20 = ctx_r30.index;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.fileChangeEventLista($event, categoria_r19, i_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file_", i_r20, "");
      }
    }

    function CategoriasComponent_div_11_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_11_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.edit = i_r20;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_11_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_11_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var categoria_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.eliminarCategoriaProd(categoria_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_11_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_11_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var categoria_r19 = ctx_r39.$implicit;
          var i_r20 = ctx_r39.index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.editarCategoriaProd(categoria_r19, i_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_11_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasComponent_div_11_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.edit = 10000;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CategoriasComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriasComponent_div_11_img_2_Template, 1, 1, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoriasComponent_div_11_input_3_Template, 1, 1, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "image-cropper", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function CategoriasComponent_div_11_Template_image_cropper_imageCropped_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var categoria_r19 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.imageCroppedLista($event, categoria_r19);
        })("imageLoaded", function CategoriasComponent_div_11_Template_image_cropper_imageLoaded_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.imageLoaded();
        })("cropperReady", function CategoriasComponent_div_11_Template_image_cropper_cropperReady_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.cropperReady();
        })("loadImageFailed", function CategoriasComponent_div_11_Template_image_cropper_loadImageFailed_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoriasComponent_div_11_button_8_Template, 2, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoriasComponent_div_11_button_9_Template, 2, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoriasComponent_div_11_button_10_Template, 2, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoriasComponent_div_11_button_11_Template, 2, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var categoria_r19 = ctx.$implicit;
        var i_r20 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !categoria_r19.cropper);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit == i_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "cropper_", i_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !categoria_r19.cropper)("imageChangedEvent", ctx_r2.imageChangedEventLista)("maintainAspectRatio", true)("aspectRatio", 4 / 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", categoria_r19.nombre_categoria);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.edit != i_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit == 10000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit == 10000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit == i_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit == i_r20);
      }
    }

    var CategoriasComponent = /*#__PURE__*/function () {
      function CategoriasComponent(adminService, fb) {
        _classCallCheck(this, CategoriasComponent);

        this.adminService = adminService;
        this.fb = fb;
        this.nuevo = false;
        this.new_cat = {
          imagen: '',
          imagen_nombre: '',
          nombre: ''
        };
        this.edit = 10000;
        this.imageChangedEvent = '';
        this.imageChangedEventLista = '';
        this.croppedImage = '';
        this.newCrop = false;
      }

      _createClass(CategoriasComponent, [{
        key: "showNuevo",
        value: function showNuevo() {
          this.nuevo = true;
          this.newCrop = false;
        }
      }, {
        key: "hideNuevo",
        value: function hideNuevo() {
          this.nuevo = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.adminService.getComercioSeleccionado().subscribe(function (res) {
            _this21.adminService.comercioSeleccionado = res;

            _this21.cargarLista();
          });
        }
      }, {
        key: "cargarLista",
        value: function cargarLista() {
          var _this22 = this;

          this.adminService.getCategoriasProducto().subscribe(function (res) {
            _this22.categorias = res;

            _this22.categorias.forEach(function (element) {
              element.crop = false;
              element.imagen = "https://api.gualeonline.com.ar/public/img/categorias_productos/" + element.imagen_nombre;
            });

            console.log(_this22.categorias);
          });
        }
      }, {
        key: "guardarCategoriaProd",
        value: function guardarCategoriaProd(categoriaProd) {
          var _this23 = this;

          var comercio = this.adminService.comercioSeleccionado[0].id;

          if (categoriaProd.imagen_nombre == '' || categoriaProd.imagen_nombre == null) {
            var currentDate = new Date();
            var fechaHora = currentDate.getDate() + (currentDate.getMonth() + 1) + currentDate.getFullYear() + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();
            categoriaProd.imagen_nombre = comercio + '_' + fechaHora;
            this.hideNuevo();
          }

          if (categoriaProd.imagen == '') {
            alert("Es necesario subir una imagen para la categoría.");
          } else {
            categoriaProd.id_comercio = comercio;
            this.adminService.guardarCategoriaProducto(categoriaProd).subscribe(function (res) {
              _this23.newCrop = false;
              _this23.new_cat = {
                imagen: '',
                imagen_nombre: '',
                nombre: ''
              };

              _this23.cargarLista();
            });
          }
        }
      }, {
        key: "editarCategoriaProd",
        value: function editarCategoriaProd(cat, i) {
          var _this24 = this;

          this.edit = i;
          var element = document.getElementById(i);
          var valiu = element.value;
          cat.nombre_categoria = valiu;
          console.log(cat, i);
          this.adminService.editarCategoriaProducto(cat).subscribe(function (res) {
            _this24.edit = 10000;
            cat.cropper = false;

            _this24.cargarLista();
          });
        }
      }, {
        key: "eliminarCategoriaProd",
        value: function eliminarCategoriaProd(categoriaProd) {
          var _this25 = this;

          this.adminService.eliminarCategoriaProducto(categoriaProd).subscribe(function (res) {
            _this25.cargarLista();
          });
        } // IMAGEN/CROPPER //

      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
          this.new_cat.imagen = event.base64;
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.newCrop = true;
          this.imageChangedEvent = event;
        }
      }, {
        key: "fileChangeEventLista",
        value: function fileChangeEventLista(event, categoria, index) {
          categoria.cropper = true;
          categoria.otraImagen = true;
          this.imageChangedEventLista = event;
          /*
          console.log(this.imageChangedEvent);
          let file_element = document.getElementById("file_"+index) as HTMLInputElement;
          let cropper_element = document.getElementById("cropper_"+index) as HTMLInputElement;
          console.log(categoria);
          */
        }
      }, {
        key: "imageCroppedLista",
        value: function imageCroppedLista(event, categoria) {
          categoria.imagen = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {}
      }, {
        key: "cropperReady",
        value: function cropperReady() {}
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {}
      }]);

      return CategoriasComponent;
    }();

    CategoriasComponent.ɵfac = function CategoriasComponent_Factory(t) {
      return new (t || CategoriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    CategoriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoriasComponent,
      selectors: [["app-categorias"]],
      decls: 12,
      vars: 3,
      consts: [[1, "div-container"], [1, "div-titulo"], [1, "row"], [1, "div-menu", "col-md-12", "flex"], ["class", "div-nueva-categoria", 4, "ngIf"], [1, "div-buscar"], ["type", "text", "placeholder", "Buscar...", 1, "buscar"], [1, "div-categorias"], ["class", "div-nuevo row", 4, "ngIf"], [1, "div-lista-categorias", "row"], ["class", "div-categoria col-md-6 flex", 4, "ngFor", "ngForOf"], [1, "div-nueva-categoria"], [1, "btn-nuevo", 3, "click"], [1, "div-nuevo", "row"], [1, "div-imagen", "col-md-3", "rel"], ["class", "div-opciones label-file", 4, "ngIf"], ["class", "input-file", 4, "ngIf"], ["style", "width: 230px; height: 260px;", "format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", 4, "ngIf"], [1, "div-nombre", "col-md-5"], ["type", "text", "placeholder", "Ingresa el nombre de tu nueva categoria", 1, "nombre", 3, "ngModel", "ngModelChange"], [1, "div-opciones", "col-md-2"], [1, "btn", 3, "click"], [1, "fa", "fa-save"], [1, "fa", "fa-window-close"], [1, "div-opciones", "label-file"], [1, "btn"], ["src", "../../../assets/imgs/icons/C\xE1mara_negra.png", "alt", ""], [1, "input-file"], ["type", "file", 1, "input-file", 3, "change"], ["format", "png", 2, "width", "230px", "height", "260px", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "div-categoria", "col-md-6", "flex"], [1, "div-imagen"], ["class", "imagen", "alt", "", 3, "src", 4, "ngIf"], ["type", "file", 3, "id", "change", 4, "ngIf"], ["format", "png", 2, "width", "200px", "height", "200px", 3, "id", "hidden", "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "div-nombre"], ["type", "text", 1, "nombre", 3, "value", "disabled", "id"], [1, "div-opciones", "flex"], ["class", "btn", 3, "click", 4, "ngIf"], ["alt", "", 1, "imagen", 3, "src"], ["type", "file", 3, "id", "change"], [1, "fa", "fa-edit"], [1, "fa", "fa-trash"]],
      template: function CategoriasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoriasComponent_div_5_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoriasComponent_div_9_Template, 12, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoriasComponent_div_11_Template, 12, 14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nuevo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nuevo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropperComponent"]],
      styles: [".div-titulo[_ngcontent-%COMP%]\r\n{\r\n  font-family: opensans-semibold;\r\n  font-size: 2rem;\r\n  padding-bottom: .5rem;\r\n  border-bottom: solid 2px;\r\n}\r\n\r\n.div-menu[_ngcontent-%COMP%]\r\n{\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.div-nueva-categoria[_ngcontent-%COMP%]\r\n{\r\n  \r\n  padding: 1rem 0;  \r\n  font-size: 1.3rem;\r\n}\r\n\r\n.btn-nuevo[_ngcontent-%COMP%]\r\n{\r\n  padding: 1rem;\r\n  font-size: 1.4 !important;\r\n  font-family: opensans-semibold;\r\n  background-color: var(--gris-claro);\r\n}\r\n\r\n.div-nuevo[_ngcontent-%COMP%] \r\n{\r\n  height: fit-contet;\r\n  \r\n  padding: 1rem 0;\r\n  background-color: var(--gris-claro);\r\n}\r\n\r\n.input-file[_ngcontent-%COMP%]\r\n{\r\n  height: 20vh;\r\n  width: 30vh;\r\n  left: auto;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]\r\n{\r\n  padding: 0;\r\n  margin-left: 5px;\r\n  font-family: opensans-reg;\r\n}\r\n\r\n.div-buscar[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.buscar[_ngcontent-%COMP%]\r\n{\r\n  border: solid 1px var(--gris);\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  height: 40px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.div-imagen[_ngcontent-%COMP%]\r\n{\r\n  margin: auto 0;\r\n}\r\n\r\n.imagen[_ngcontent-%COMP%]\r\n{\r\n  width: 230px;\r\n  height: 260px;\r\n  border: solid 1px var(--gris);\r\n  border-radius: 3px;\r\n  padding: 1px;\r\n}\r\n\r\n\r\n\r\n.nombre[_ngcontent-%COMP%]\r\n{\r\n  width: 100%;\r\n  border: none;\r\n  background: none;\r\n  color: var(--black);\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n\r\n.div-lista-categorias[_ngcontent-%COMP%]\r\n{\r\n  border-bottom: solid 1px var(--gris);\r\n  padding: 1rem 0;\r\n}\r\n\r\n.div-categoria[_ngcontent-%COMP%]\r\n{\r\n  \r\n  margin: 2rem 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDs7RUFFRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7OztHQUdHOztBQUVIOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7OztHQUlHOztBQUVIOztFQUVFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXRpdHVsb1xyXG57XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXNlbWlib2xkO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xyXG59XHJcblxyXG4uZGl2LW1lbnVcclxue1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdi1udWV2YS1jYXRlZ29yaWFcclxue1xyXG4gIC8qIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1ncmlzKTsgKi9cclxuICBwYWRkaW5nOiAxcmVtIDA7ICBcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmJ0bi1udWV2b1xyXG57XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDEuNCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuc2Fucy1zZW1pYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzLWNsYXJvKTtcclxufVxyXG5cclxuLmRpdi1udWV2byBcclxue1xyXG4gIGhlaWdodDogZml0LWNvbnRldDtcclxuICAvKiBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tZ3Jpcyk7ICovXHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMtY2xhcm8pO1xyXG59XHJcblxyXG4uaW5wdXQtZmlsZVxyXG57XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIHdpZHRoOiAzMHZoO1xyXG4gIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIC5kaXYtZW1wdHlcclxue1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG59ICovXHJcblxyXG4uYnRuXHJcbntcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXJlZztcclxufVxyXG5cclxuLmRpdi1idXNjYXJcclxue1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5idXNjYXJcclxue1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaXMpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGl2LWltYWdlblxyXG57XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuXHJcbi5pbWFnZW5cclxue1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaXMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbi8qIC5kaXYtbm9tYnJlXHJcbntcclxuICBtYXJnaW46IGF1dG8gMDtcclxufSAqL1xyXG5cclxuLm5vbWJyZVxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8qIC5kaXYtb3BjaW9uZXNcclxue1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbn0gKi9cclxuXHJcbi5kaXYtbGlzdGEtY2F0ZWdvcmlhc1xyXG57XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWdyaXMpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuLmRpdi1jYXRlZ29yaWFcclxue1xyXG4gIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cclxuICBtYXJnaW46IDJyZW0gMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-categorias',
          templateUrl: './categorias.component.html',
          styleUrls: ['./categorias.component.css']
        }]
      }], function () {
        return [{
          type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/datos-lugar/datos-lugar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/datos-lugar/datos-lugar.component.ts ***!
    \************************************************************/

  /*! exports provided: DatosLugarComponent */

  /***/
  function srcAppAdminDatosLugarDatosLugarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosLugarComponent", function () {
      return DatosLugarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //import { MatDialog, MatSnackBar } from '@angular/material';


    function DatosLugarComponent_button_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatosLugarComponent_button_55_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.toggleHorarios();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Agregar horario");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DatosLugarComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D\xEDas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Seleccionar los d\xEDas de atenci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lunes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Martes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mi\xE9rcoles");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Jueves");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Viernes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "S\xE1bado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Domingo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Horarios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ingresar horarios de atenci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "HS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "A ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "HS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatosLugarComponent_div_56_Template_button_click_61_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.newHorario("", [], "", "", "", "", "");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Guardar horario");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatosLugarComponent_div_56_Template_button_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.toggleHorarios();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DatosLugarComponent_div_58_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var horario_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" y de ", horario_r8.desde2, " a ", horario_r8.hasta2, " hs.");
      }
    }

    function DatosLugarComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatosLugarComponent_div_58_span_3_Template, 2, 2, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatosLugarComponent_div_58_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var horario_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.deleteHorario(horario_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var horario_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "horario_", horario_r8.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", horario_r8.dias, " de ", horario_r8.desde, " a ", horario_r8.hasta, " hs.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", horario_r8.desde2 !== "");
      }
    } //import { ModalSubcategoriasComponent } from '../modal-subcategorias/modal-subcategorias.component';


    var DatosLugarComponent = /*#__PURE__*/function () {
      function DatosLugarComponent(adminService, fb) {
        _classCallCheck(this, DatosLugarComponent);

        this.adminService = adminService;
        this.fb = fb;
        this.comercio = {
          nombre: '',
          direccion: '',
          telefono: 0,
          medio_pago: 0,
          subcategoria: '',
          descripcion: '',
          entrega: '',
          medida_entrega: '',
          url: ''
        };
        this.agregarHorario = false;
        this.dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
        this.horarios = [];
      }

      _createClass(DatosLugarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.adminService.getComercioSeleccionado().subscribe(function (res) {
            _this26.adminService.comercioSeleccionado = res[0];
            _this26.comercio = {
              nombre: res[0].nombre,
              direccion: res[0].direccion,
              telefono: res[0].telefono,
              medio_pago: res[0].medio_pago,
              subcategoria: res[0].subcategoria,
              descripcion: res[0].descripcion,
              entrega: res[0].entrega,
              medida_entrega: res[0].medida_entrega,
              url: res[0].url
            };
            console.log(res[0]);

            _this26.form.controls['subcategoria'].setValue(_this26.comercio.subcategoria);

            _this26.form.controls['nombre'].setValue(_this26.comercio.nombre);

            _this26.form.controls['descripcion'].setValue(_this26.comercio.descripcion);

            _this26.form.controls['direccion'].setValue(_this26.comercio.direccion);

            _this26.form.controls['entrega'].setValue(_this26.comercio.entrega);

            _this26.form.controls['medida_entrega'].setValue(_this26.comercio.medida_entrega);

            _this26.form.controls['telefono'].setValue(_this26.comercio.telefono);

            _this26.form.controls['medio_pago'].setValue(_this26.comercio.medio_pago);

            _this26.form.controls['url'].setValue(_this26.comercio.url);

            _this26.getHorarios();

            _this26.adminService.getSubCategoriasComercios().subscribe(function (res) {
              _this26.adminService.listaSubCategorias = res;
              _this26.listaSubCategoriasComercios = res;
            }, function (err) {
              console.log(err);
            });
          }, function (err) {
            console.log(err);
          });
          this.form = this.fb.group({
            'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'medio_pago': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'subcategoria': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'descripcion': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'direccion': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'entrega': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'medida_entrega': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'url': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "getSubcategoriasComercio",
        value: function getSubcategoriasComercio() {
          var _this27 = this;

          this.adminService.getSubCategoriasComercios().subscribe(function (res) {
            _this27.listaSubCategoriasComercios = res;
            _this27.adminService.listaSubCategorias = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "guardarDatos",
        value: function guardarDatos(form) {
          var formData = new FormData();
          formData.append("id", this.adminService.comercioSeleccionado.id);
          formData.append("nombre", form.value.nombre);
          formData.append("subcat", form.value.subcategoria);
          formData.append("desc", form.value.descripcion);
          formData.append("direct", form.value.direccion);
          formData.append("entrega", form.value.entrega);
          formData.append("medida_entrega", form.value.medida_entrega);
          formData.append("telefono", form.value.telefono);
          formData.append("medio_pago", form.value.medio_pago);
          formData.append("url", form.value.url);
          this.adminService.guardarDatosComercio(formData).subscribe(function (res) {
            if (res > 0) {
              var message = "Los datos se modificaron exitosamente."; //    this.openMessage(message, "Cerrar", 5000, "");
            } else {
              var message = "Valide que los datos sean correctos. Si el error persiste comuniquese con el administrador."; //    this.openMessage(message, "Cerrar", 50000, "error");
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "newHorario",
        value: function newHorario(id, dias, diasCod, desde, hasta, desde2, hasta2) {
          var _this28 = this;

          if (diasCod == '') {
            this.dias.forEach(function (element) {
              var dia = document.getElementById(element);

              if (dia.checked) {
                dias.push(dia.value);
                diasCod += dia.getAttribute('codigo');
              }
            });
          } //ASIGNO VALORES HASTA, DONDE


          if (desde == '' || hasta == '') {
            desde = document.getElementById('desde');
            hasta = document.getElementById('hasta');
            desde2 = document.getElementById('desde2');
            hasta2 = document.getElementById('hasta2');
            desde = desde.value;
            hasta = hasta.value;
            desde2 = desde2.value;
            hasta2 = hasta2.value;
          }

          var id_comercio = this.adminService.comercioSeleccionado.id;
          var horario = {
            id: id,
            dias: dias,
            diasCod: diasCod,
            desde: desde,
            hasta: hasta,
            desde2: desde2,
            hasta2: hasta2,
            id_comercio: id_comercio
          }; //this.horarios.push(horario);

          this.adminService.guardarHorarios(horario).subscribe(function (res) {
            _this28.toggleHorarios();

            _this28.getHorarios();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "deleteHorario",
        value: function deleteHorario(h) {
          var _this29 = this;

          this.adminService.deleteHorario(h.id).subscribe(function (res) {
            _this29.getHorarios();
          });
        }
      }, {
        key: "guardarHorarios",
        value: function guardarHorarios() {
          var _this30 = this;

          this.adminService.deleteHorariosComercio(4).subscribe(function (res) {
            if (res > 0) {
              var message = "Los datos se modificaron exitosamente.";
            } else {
              var message = "Valide que los datos sean correctos. Si el error persiste comuniquese con el administrador.";
            }
          }, function (err) {
            console.log(err);
          });
          this.horarios.forEach(function (h) {
            _this30.adminService.guardarHorarios(h).subscribe(function (res) {
              if (res > 0) {
                var message = "Los datos se modificaron exitosamente.";
              } else {
                var message = "Valide que los datos sean correctos. Si el error persiste comuniquese con el administrador.";
              }
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "getHorarios",
        value: function getHorarios() {
          var _this31 = this;

          this.horarios = [];
          this.adminService.getHorarios().subscribe(function (res) {
            var horarios = Object.values(res); //lo convierto en objeto

            horarios.forEach(function (h) {
              if (h.desde2 == null || h.hasta2 == null) {
                h.desde2 = '';
                h.hasta2 = '';
              }

              h.diasCod = h.dias;
              h.dias = Array.from(h.dias); //convierto los dias en strings

              for (var index = 0; index < h.dias.length; index++) {
                //const element = array[index];
                switch (h.dias[index]) {
                  case '0':
                    h.dias[index] = 'lunes';
                    break;

                  case '1':
                    h.dias[index] = 'martes';
                    break;

                  case '2':
                    h.dias[index] = 'miércoles';
                    break;

                  case '3':
                    h.dias[index] = 'jueves';
                    break;

                  case '4':
                    h.dias[index] = 'viernes';
                    break;

                  case '5':
                    h.dias[index] = 'sábado';
                    break;

                  case '6':
                    h.dias[index] = 'domingo';
                    break;
                }
              }

              _this31.horarios.push(h);
            }); //end forEach horarios
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "resetFrom",
        value: function resetFrom() {
          this.form.reset();
        }
      }, {
        key: "toggleHorarios",
        value: function toggleHorarios() {
          this.agregarHorario = !this.agregarHorario;
        }
      }, {
        key: "nombre",
        get: function get() {
          return this.form.get('nombre');
        }
      }, {
        key: "telefono",
        get: function get() {
          return this.form.get('telefono');
        }
      }, {
        key: "medio_pago",
        get: function get() {
          return this.form.get('medio_pago');
        }
      }, {
        key: "subcategoria",
        get: function get() {
          return this.form.get('subcategoria');
        }
      }, {
        key: "descripcion",
        get: function get() {
          return this.form.get('descripcion');
        }
      }, {
        key: "direccion",
        get: function get() {
          return this.form.get('direccion');
        }
      }, {
        key: "entrega",
        get: function get() {
          return this.form.get('entrega');
        }
      }, {
        key: "medida_entrega",
        get: function get() {
          return this.form.get('medida_entrega');
        }
      }, {
        key: "url",
        get: function get() {
          return this.form.get('url');
        }
      }]);

      return DatosLugarComponent;
    }();

    DatosLugarComponent.ɵfac = function DatosLugarComponent_Factory(t) {
      return new (t || DatosLugarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    DatosLugarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DatosLugarComponent,
      selectors: [["app-datos-lugar"]],
      decls: 64,
      vars: 10,
      consts: [[1, "div-container"], [1, "div-titulo"], [3, "formGroup", "submit"], [1, "div-datos", "row", "col-md-12"], [1, "div-item", "col-md-4"], [1, "titulo-item"], ["type", "text", "formControlName", "nombre", "required", "", "placeholder", "Ingresar nombre de comercio", 1, "input-form", "form-control", "form-item", 3, "value"], ["maxlength", "300", "formControlName", "descripcion", "required", "", "placeholder", "Ingresar descripci\xF3n", 1, "input-form", "form-control", "form-item", 3, "value"], [1, "url", "rel"], ["type", "text", "id", "url", "formControlName", "url", "required", "", 1, "input-form", "form-control", "form-item", 2, "padding-left", "211px", 3, "value"], ["for", "url", 1, "static-value"], ["type", "text", "formControlName", "direccion", "required", "", "placeholder", "Ingresar direcci\xF3n", 1, "input-form", "form-control", "form-item", 3, "value"], ["type", "Number", "id", "telefono", "formControlName", "telefono", "placeholder", "Ingresar tel\xE9fono de contacto", 1, "form-control", "form-item"], ["formControlName", "medio_pago", 1, "form-control", "form-item"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "from-item", "flex"], ["type", "text", "formControlName", "entrega", "required", "", "placeholder", "40...", 1, "input-form", "form-control", "form-select", "ng-touched", 3, "value"], ["name", "", "id", "", "formControlName", "medida_entrega", 1, "select-subcat", "form-control", "form-select", 3, "value"], [1, "opt-subcat"], [1, "div-item", "col-md-12"], ["class", "btn-horario", 3, "click", 4, "ngIf"], ["class", "div-item", 4, "ngIf"], ["id", "horarios", 2, "border-bottom", "solid 1px var(--gris)"], [3, "id", 4, "ngFor", "ngForOf"], [1, "div-botones", 2, "text-align", "center"], ["type", "submit", 1, "btn"], [1, "btn"], [1, "btn-horario", 3, "click"], [1, "div-item"], [1, "div-sub-item"], [1, "div-horario", "flex"], [1, "div-dia"], ["type", "checkbox", "id", "lunes", "value", "lunes", "codigo", "0", 1, "input-dia"], ["for", "lunes"], ["type", "checkbox", "id", "martes", "value", "martes", "codigo", "1", 1, "input-dia"], ["for", "martes"], ["type", "checkbox", "id", "mi\xE9rcoles", "value", "mi\xE9rcoles", "codigo", "2", 1, "input-dia"], ["for", "mi\xE9rcoles"], ["type", "checkbox", "id", "jueves", "value", "jueves", "codigo", "3", 1, "input-dia"], ["for", "jueves"], [1, "div-item", "flex"], ["type", "checkbox", "id", "viernes", "value", "viernes", "codigo", "4", 1, "input-dia"], ["for", "viernes"], ["type", "checkbox", "id", "s\xE1bado", "value", "s\xE1bado", "codigo", "5", 1, "input-dia"], ["for", "s\xE1bado"], ["type", "checkbox", "id", "domingo", "value", "domingo", "codigo", "6", 1, "input-dia"], ["for", "domingo"], [1, "div-item-form"], [1, "div-horas", "flex"], ["type", "Number", "id", "desde", "placeholder", "9:00", 1, "form-control", "form-hora"], [2, "padding", "0 .5rem", "margin", "auto 0"], ["type", "Number", "id", "hasta", "placeholder", "13:00", 1, "form-control", "form-hora"], ["type", "Number", "id", "desde2", "placeholder", "16:30", 1, "form-control", "form-hora"], ["type", "Number", "id", "hasta2", "placeholder", "20:30", 1, "form-control", "form-hora"], [1, "btn-hora", 3, "click"], [3, "id"], [4, "ngIf"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]],
      template: function DatosLugarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Datos de comercio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DatosLugarComponent_Template_form_submit_3_listener() {
            return ctx.guardarDatos(ctx.form);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Descripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Direccion WEB (URL)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "http://GualeOnline.com.ar/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Direcci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tel\xE9fono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Medios de pago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Efectivo y tarjeta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Efectivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tarjeta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Entrega estimada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Minutos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Horas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "D\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Horarios de atenci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DatosLugarComponent_button_55_Template, 2, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DatosLugarComponent_div_56_Template, 65, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DatosLugarComponent_div_58_Template, 6, 5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.comercio.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.comercio.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.comercio.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.comercio.direccion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.comercio.entrega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.comercio.medida_entrega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.agregarHorario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.agregarHorario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.horarios);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".div-titulo[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-family: opensans-semibold;\r\n  padding-bottom: .5rem;\r\n  border-bottom: solid 2px;\r\n}\r\n\r\n.div-datos[_ngcontent-%COMP%]\r\n{\r\n  padding: 1rem 0;\r\n}\r\n\r\n.titulo-item[_ngcontent-%COMP%]\r\n{\r\n  font-family: opensans-reg;\r\n  font-size: 1.5rem;\r\n  margin: .5rem auto;\r\n}\r\n\r\n.div-item[_ngcontent-%COMP%]\r\n{\r\n  padding : 1rem 0;\r\n}\r\n\r\n.div-sub-item[_ngcontent-%COMP%]\r\n{\r\n  padding-bottom: .3rem;\r\n  font-size: .7rem;\r\n}\r\n\r\n.form-item[_ngcontent-%COMP%] {\r\n  border-radius: 5px;  \r\n  width: 90%;\r\n}\r\n\r\n.form-select[_ngcontent-%COMP%]\r\n{\r\n  border-radius: 5px;  \r\n  max-width: 30%;\r\n  margin-right: .5rem;  \r\n}\r\n\r\n.static-value[_ngcontent-%COMP%]\r\n{\r\n  font-family: opensans-reg;\r\n  color: var(--back);\r\n  position:absolute;\r\n\tleft:10px;\r\n\t\r\n\ttop:8px;\r\n}\r\n\r\n.ng-untouched[_ngcontent-%COMP%]::-webkit-input-placeholder\r\n{\r\n   color: var(--gris);\r\n   font-style: italic; \r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  height: calc(1.5em + .75rem + 2px);\r\n  resize: none;\r\n}\r\n\r\n.btn-horario[_ngcontent-%COMP%]\r\n{\r\n  margin: .5rem 0;\r\n  background-color: var(--gris-claro);\r\n  font-size: 1.2rem !important;\r\n  font-family: opensans-semibold;\r\n}\r\n\r\n.div-dia[_ngcontent-%COMP%]\r\n{\r\n  margin-right: 1rem;\r\n  width: 15vh;\r\n}\r\n\r\n.input-dia[_ngcontent-%COMP%]\r\n{\r\n  margin-right: 5px;\r\n}\r\n\r\n.div-horas[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-hora[_ngcontent-%COMP%]\r\n{\r\n  max-width: 15% ;\r\n}\r\n\r\n.btn-hora[_ngcontent-%COMP%]\r\n{\r\n  padding: .5rem;\r\n  margin: .5rem .5rem;\r\n  background-color: var(--gris-claro);\r\n  font-size: .8rem !important;\r\n  font-family: opensans-semibold;\r\n  border-radius: 5px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]\r\n{\r\n  margin: 1.5rem 1.5rem;\r\n  background-color: var(--gris-claro);\r\n  font-size: 2rem !important;\r\n  font-family: opensans-semibold;\r\n}\r\n\r\n.imgSelect[_ngcontent-%COMP%] {\r\n  margin: 1px;\r\n  width: 64%;\r\n}\r\n\r\n.radioImg[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n}\r\n\r\n.portada[_ngcontent-%COMP%] {\r\n  max-height: 247.833px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  max-height: 100px;\r\n}\r\n\r\n.input-file[_ngcontent-%COMP%]\r\n{\r\n    opacity: 0;\r\n    position: absolute;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.label-file[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    height: auto;\r\n    border-radius: 4px;\r\n    font-size: 1.2rem;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-file[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n}\r\n\r\n.div-input[_ngcontent-%COMP%]\r\n{\r\n    margin-bottom:10px;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGF0b3MtbHVnYXIvZGF0b3MtbHVnYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQixTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLE9BQU87QUFDUjs7QUFFQTs7R0FFRyxrQkFBa0I7R0FDbEIsa0JBQWtCO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXRvcy1sdWdhci9kYXRvcy1sdWdhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi10aXR1bG8ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LWZhbWlseTogb3BlbnNhbnMtc2VtaWJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcclxufVxyXG5cclxuLmRpdi1kYXRvc1xyXG57XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4udGl0dWxvLWl0ZW1cclxue1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuc2Fucy1yZWc7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAuNXJlbSBhdXRvO1xyXG59XHJcblxyXG4uZGl2LWl0ZW1cclxue1xyXG4gIHBhZGRpbmcgOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5kaXYtc3ViLWl0ZW1cclxue1xyXG4gIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcclxuICBmb250LXNpemU6IC43cmVtO1xyXG59XHJcblxyXG4uZm9ybS1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7ICBcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uZm9ybS1zZWxlY3Rcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgIFxyXG4gIG1heC13aWR0aDogMzAlO1xyXG4gIG1hcmdpbi1yaWdodDogLjVyZW07ICBcclxufVxyXG5cclxuLnN0YXRpYy12YWx1ZVxyXG57XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXJlZztcclxuICBjb2xvcjogdmFyKC0tYmFjayk7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDoxMHB4O1xyXG5cdC8qIGZvbnQtd2VpZ2h0OmJvbGQ7ICovXHJcblx0dG9wOjhweDtcclxufVxyXG5cclxuLm5nLXVudG91Y2hlZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlclxyXG57XHJcbiAgIGNvbG9yOiB2YXIoLS1ncmlzKTtcclxuICAgZm9udC1zdHlsZTogaXRhbGljOyBcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWhvcmFyaW9cclxue1xyXG4gIG1hcmdpbjogLjVyZW0gMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlzLWNsYXJvKTtcclxuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuc2Fucy1zZW1pYm9sZDtcclxufVxyXG5cclxuLmRpdi1kaWFcclxue1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB3aWR0aDogMTV2aDtcclxufVxyXG5cclxuLmlucHV0LWRpYVxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5kaXYtaG9yYXNcclxue1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWhvcmFcclxue1xyXG4gIG1heC13aWR0aDogMTUlIDtcclxufVxyXG5cclxuLmJ0bi1ob3JhXHJcbntcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBtYXJnaW46IC41cmVtIC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMtY2xhcm8pO1xyXG4gIGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogb3BlbnNhbnMtc2VtaWJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYnRuXHJcbntcclxuICBtYXJnaW46IDEuNXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcy1jbGFybyk7XHJcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXNlbWlib2xkO1xyXG59XHJcblxyXG4uaW1nU2VsZWN0IHtcclxuICBtYXJnaW46IDFweDtcclxuICB3aWR0aDogNjQlO1xyXG59XHJcblxyXG4ucmFkaW9JbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLnBvcnRhZGEge1xyXG4gIG1heC1oZWlnaHQ6IDI0Ny44MzNweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZmlsZVxyXG57XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxhYmVsLWZpbGVcclxue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kaXYtZmlsZVxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaXYtaW5wdXRcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBGaXJlZm94ICovXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosLugarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-datos-lugar',
          templateUrl: './datos-lugar.component.html',
          styleUrls: ['./datos-lugar.component.css']
        }]
      }], function () {
        return [{
          type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/disenio/disenio.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admin/disenio/disenio.component.ts ***!
    \****************************************************/

  /*! exports provided: DisenioComponent */

  /***/
  function srcAppAdminDisenioDisenioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisenioComponent", function () {
      return DisenioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function DisenioComponent_div_28_div_8_image_cropper_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "image-cropper", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function DisenioComponent_div_28_div_8_image_cropper_1_Template_image_cropper_imageCropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r9.imageCropped($event);
        })("imageLoaded", function DisenioComponent_div_28_div_8_image_cropper_1_Template_image_cropper_imageLoaded_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.imageLoaded();
        })("cropperReady", function DisenioComponent_div_28_div_8_image_cropper_1_Template_image_cropper_cropperReady_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.cropperReady();
        })("loadImageFailed", function DisenioComponent_div_28_div_8_image_cropper_1_Template_image_cropper_loadImageFailed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r13.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx_r6.imageChangedEvent)("maintainAspectRatio", false)("autoCrop", true)("aspectRatio", 4 / 3)("containWithinAspectRatio", false);
      }
    }

    function DisenioComponent_div_28_div_8_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DisenioComponent_div_28_div_8_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DisenioComponent_div_28_div_8_div_3_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ Cargar foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DisenioComponent_div_28_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisenioComponent_div_28_div_8_image_cropper_1_Template, 1, 5, "image-cropper", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DisenioComponent_div_28_div_8_img_2_Template, 1, 1, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisenioComponent_div_28_div_8_div_3_Template, 7, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_div_28_div_8_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.aceptarCropper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aceptar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_div_28_div_8_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.cancelarCropper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.imageChangedEvent != "" && ctx_r4.cropping == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.imageChangedEvent != "" && !ctx_r4.cropping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.imageChangedEvent == "");
      }
    }

    function DisenioComponent_div_28_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_div_28_div_9_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.mostrarLoadImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+ Subir Foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DisenioComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Selecciona una predeterminada o carga tu propia portada. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DisenioComponent_div_28_div_8_Template, 8, 3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisenioComponent_div_28_div_9_Template, 4, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisenioComponent_div_28_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.imgPortada = $event;
        })("change", function DisenioComponent_div_28_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.changeImgPortada($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisenioComponent_div_28_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.imgPortada = $event;
        })("change", function DisenioComponent_div_28_Template_input_change_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.changeImgPortada($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisenioComponent_div_28_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.imgPortada = $event;
        })("change", function DisenioComponent_div_28_Template_input_change_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.changeImgPortada($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imgURL == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imgURL != "" && !ctx_r0.cropping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.imgPortada);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.imgPortada);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.imgPortada);
      }
    }

    function DisenioComponent_div_29_div_8_image_cropper_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "image-cropper", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function DisenioComponent_div_29_div_8_image_cropper_1_Template_image_cropper_imageCropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r35.imageCropped($event);
        })("imageLoaded", function DisenioComponent_div_29_div_8_image_cropper_1_Template_image_cropper_imageLoaded_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r37.imageLoaded();
        })("cropperReady", function DisenioComponent_div_29_div_8_image_cropper_1_Template_image_cropper_cropperReady_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r38.cropperReady();
        })("loadImageFailed", function DisenioComponent_div_29_div_8_image_cropper_1_Template_image_cropper_loadImageFailed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r39.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx_r32.imageChangedEvent)("maintainAspectRatio", false)("aspectRatio", 16 / 9);
      }
    }

    function DisenioComponent_div_29_div_8_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r33.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DisenioComponent_div_29_div_8_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DisenioComponent_div_29_div_8_div_3_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r40.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ Cargar foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DisenioComponent_div_29_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisenioComponent_div_29_div_8_image_cropper_1_Template, 1, 3, "image-cropper", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DisenioComponent_div_29_div_8_img_2_Template, 1, 1, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisenioComponent_div_29_div_8_div_3_Template, 7, 0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_div_29_div_8_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.aceptarCropper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aceptar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_div_29_div_8_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.cancelarCropper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.imageChangedEvent != "" && ctx_r28.cropping == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.imageChangedEvent != "" && !ctx_r28.cropping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.imageChangedEvent == "");
      }
    }

    function DisenioComponent_div_29_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_div_29_div_9_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r45.mostrarLoadImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+ Subir Foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r29.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DisenioComponent_div_29_img_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 75);
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r30.imgLogoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DisenioComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Selecciona una predeterminada o carga tu propia portada. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DisenioComponent_div_29_div_8_Template, 8, 3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisenioComponent_div_29_div_9_Template, 4, 1, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisenioComponent_div_29_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.imgPortada = $event;
        })("change", function DisenioComponent_div_29_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.changeImgPortada($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisenioComponent_div_29_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.imgPortada = $event;
        })("change", function DisenioComponent_div_29_Template_input_change_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.changeImgPortada($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisenioComponent_div_29_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.imgPortada = $event;
        })("change", function DisenioComponent_div_29_Template_input_change_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.changeImgPortada($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logo que aparecer\xE1 en la p\xE1gina de su comercio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DisenioComponent_div_29_img_24_Template, 1, 1, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 62, 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DisenioComponent_div_29_Template_input_change_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.uploadLogo(_r31.files);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " + Subir foto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imgURL == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imgURL != "" && !ctx_r1.cropping);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.imgPortada);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.imgPortada);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.imgPortada);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imgLogoURL !== "");
      }
    }

    function DisenioComponent_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.guardarImagenes();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DisenioComponent_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.cancelar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DisenioComponent = /*#__PURE__*/function () {
      function DisenioComponent(adminService, fb, snackBar) {
        _classCallCheck(this, DisenioComponent);

        this.adminService = adminService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.comercio = {
          id_comercio: 0,
          disenio: 0,
          imagen: '',
          img_portada: '',
          portada_file: File = null,
          logo_file: File = null
        };
        this.design = 0; //VARIABLES DE PORTADA Y LOGO

        this.extensionLogo = '.jpeg';
        this.extensionPortada = '.jpeg';
        this.guardarImagen = false;
        this.imgURL = '';
        this.imgPortada = '';
        this.imgLogo = '';
        this.pathPortadas = "https://api.gualeonline.com.ar/public/img/portadas/";
        this.pathLogos = "https://api.gualeonline.com.ar/public/img/logos/";
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.template = false;
        this.cropping = false;
      }

      _createClass(DisenioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.adminService.getComercioSeleccionado().subscribe(function (res) {
            _this32.adminService.comercioSeleccionado = res[0];
            _this32.comercio = {
              id_comercio: res[0].id,
              disenio: res[0].diseño,
              imagen: res[0].imagen,
              img_portada: res[0].portada,
              portada_file: File = null,
              logo_file: File = null
            };

            if (_this32.comercio.img_portada == null) {
              _this32.imageChangedEvent = ''; //  this.comercio.img_portada = "template_sushi_1.jpg";

              _this32.template = true;
            }

            if (_this32.comercio.img_portada != null) {
              _this32.imgURL = _this32.pathPortadas + _this32.imgPortada;
            }

            if (_this32.comercio.img_portada.split('_')[0] == 'template') {
              _this32.template = true;
            }

            if (_this32.comercio.imagen == null) {
              _this32.imgLogo = "";
            } else {
              _this32.extensionLogo = '.' + _this32.comercio.imagen.split('.')[1];
            }

            _this32.imgLogoURL = '';
            _this32.design = _this32.comercio.disenio;

            _this32.changeImgPortada(_this32.comercio.img_portada);

            _this32.changeImgLogo(_this32.comercio.imagen);
          });
        }
      }, {
        key: "getUrlImagen",
        value: function getUrlImagen() {
          return "../../../assets/imgs/comercios/" + this.adminService.comercioSeleccionado.imagen;
        }
      }, {
        key: "cambiarDiseno",
        value: function cambiarDiseno(temp) {
          this.imageChangedEvent = '';
          this.design = temp;

          if (this.design != temp) {
            this.imageChangedEvent = ''; // this.imgURL = '';
          }
        }
      }, {
        key: "cancelar",
        value: function cancelar() {//limpiar campos form
        }
      }, {
        key: "mostrarTemplate",
        value: function mostrarTemplate(temp) {}
      }, {
        key: "changeImgPortada",
        value: function changeImgPortada(event) {
          if (typeof event == 'object') {
            this.imgURL = this.pathPortadas + event.target.value;
            this.template = true;
            this.comercio.img_portada = event.target.value;
            this.croppedImage = this.pathPortadas + event.target.value;
          } else {
            this.imgURL = this.pathPortadas + event;
            this.croppedImage = this.pathPortadas + event;
            this.cropping = false;
          }
        }
      }, {
        key: "changeImgLogo",
        value: function changeImgLogo(logo) {
          this.imgLogoURL = this.pathLogos + logo;
        }
      }, {
        key: "preview",
        value: function preview(files) {
          var _this33 = this;

          if (files.length === 0) return;
          var mimeType = files[0].type;

          if (mimeType.match(/image\/*/) == null) {
            this.message = "No ha cargado una imagen válida.";
            return;
          }

          var reader = new FileReader();
          this.imagePath = files;
          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            _this33.imgURL = reader.result;
          };

          this.imgPortada = '';
          this.comercio.portada_file = files.item(0);
          this.extensionPortada = this.comercio.portada_file.type.replace('image/', '.');
        }
      }, {
        key: "uploadLogo",
        value: function uploadLogo(files) {
          var _this34 = this;

          if (files.length === 0) return;
          var mimeType = files[0].type;

          if (mimeType.match(/image\/*/) == null) {
            this.message = "No ha cargado una imagen válida.";
            return;
          }

          var reader = new FileReader();
          this.imagePath = files;
          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            _this34.imgLogoURL = reader.result;
          };

          this.comercio.logo_file = files.item(0);
          this.extensionLogo = this.comercio.logo_file.type.replace('image/', '.');
        }
      }, {
        key: "guardarImagenes",
        value: function guardarImagenes() {
          var _this35 = this;

          this.comercio.disenio = this.design;
          this.cropping = false;
          this.imgURL = this.croppedImage;
          this.imageChangedEvent = '';
          var formData = new FormData();

          if (this.comercio.disenio == 1) {
            if (this.imgURL == '') {
              var message = "No se ha modificado ningún valor.";
              this.adminService.openMessage(message, "Cerrar", 50000, "error");
            }
          }

          if (this.comercio.logo_file != null) {
            this.comercio.imagen = this.comercio.id_comercio + "_logo" + this.extensionLogo;
            formData.append('logo_file', this.comercio.logo_file, this.comercio.imagen);
          } else {
            this.comercio.imagen = this.imgLogo;
          }

          formData.append('imgURL', this.imgURL);
          formData.append("id_comercio", this.comercio.id_comercio.toString());
          formData.append("disenio", this.comercio.disenio.toString());
          formData.append("imagen", this.comercio.imagen);
          formData.append("img_portada", this.comercio.img_portada);
          formData.append("template", this.template.toString());
          this.adminService.guardarImagenesComercio(formData).subscribe(function (res) {
            _this35.adminService.openMessage(res, "Cerrar", 50000, "error");
          }, function (err) {
            var message = "Los datos no se pudieron modificar.";

            _this35.adminService.openMessage(message, "Cerrar", 50000, "error");

            console.log(err);
          });
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64; // this.imgURL = event.base64;

          this.comercio.img_portada = this.comercio.id_comercio + "_portada.jpeg";
          this.template = false;
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.cropping = true;
          this.imageChangedEvent = event;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {}
      }, {
        key: "cropperReady",
        value: function cropperReady() {}
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {}
      }, {
        key: "mostrarLoadImg",
        value: function mostrarLoadImg() {
          this.imgURL = '';
          this.cropping = true;
        }
      }, {
        key: "aceptarCropper",
        value: function aceptarCropper() {
          this.cropping = false;
          this.imgURL = this.croppedImage;
          this.imageChangedEvent = '';
        }
      }, {
        key: "cancelarCropper",
        value: function cancelarCropper() {
          this.imgURL = '';
          this.cropping = false;
          this.imageChangedEvent = '';
        }
      }]);

      return DisenioComponent;
    }();

    DisenioComponent.ɵfac = function DisenioComponent_Factory(t) {
      return new (t || DisenioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    DisenioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisenioComponent,
      selectors: [["app-disenio"]],
      decls: 33,
      vars: 4,
      consts: [[1, "div-container", "box-shadow"], [1, "titulo-top-admin", "br-admin"], [1, "desc-admin", "gris"], [1, "div-cont-templates", "row"], [1, "div-template", "col-md-5", "col-xs-12", "no-pad-h"], [1, "div-cont-imgs", "rel"], [1, "div-img-template"], ["src", "../../../assets/imgs/templates/Template_Web_Disenio1.png", "alt", "", 1, "img-template", "imagen"], [1, "div-img-template-mob", "abs"], ["src", "../../../assets/imgs/templates/Template_mobile_Disenio1.png", "alt", "", 1, "img-template", "imagen"], [1, "div-btns-temp"], [1, "btn-template", "br-10", 3, "click"], ["src", "../../../assets/imgs/templates/Template_Web_Disenio2.png", "alt", "", 1, "img-template", "imagen"], ["src", "../../../assets/imgs/templates/Template_mobile_Disenio2.png", "alt", "", 1, "img-template", "imagen"], ["class", "design_1 m-b-3 br-admin", 4, "ngIf"], ["class", "design_2 m-b-3 br-admin", 4, "ngIf"], [1, "div-btn-okcancel-admin", "spc-btw", "flex", "m-b-3"], ["class", "btn-ok-admin br-10", 3, "click", 4, "ngIf"], ["class", "btn-cancel-admin br-10", 3, "click", 4, "ngIf"], [1, "design_1", "m-b-3", "br-admin"], [1, "div-portada", "m-b-3"], [1, "desc-admin"], [1, "row"], [1, "col-md-8", "no-pad-h", "rel"], ["class", "div-img-load-cropper", "style", "height: 100%;", 4, "ngIf"], ["class", "div-img-port-temp", "style", "height: 100%", 4, "ngIf"], [1, "col-md-4"], ["src", "https://api.gualeonline.com.ar/public/img/portadas/Portada_Diseno1.jpg", 1, "imgSelect"], ["type", "radio", "name", "portada", "value", "Portada_Diseno1.jpg", 1, "radioImg", 3, "ngModel", "ngModelChange", "change"], ["src", "https://api.gualeonline.com.ar/public/img/portadas/Portada_Diseno2.jpg", 1, "imgSelect"], ["type", "radio", "name", "portada", "value", "Portada_Diseno2.jpg", 1, "radioImg", 3, "ngModel", "ngModelChange", "change"], ["src", "https://api.gualeonline.com.ar/public/img/portadas/Portada_Diseno3.jpg", 1, "imgSelect"], ["type", "radio", "name", "portada", "value", "Portada_Diseno3.jpg", 1, "radioImg", 3, "ngModel", "ngModelChange", "change"], [1, "div-img-load-cropper", 2, "height", "100%"], ["style", "width: 100%; height: 100%;", "format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "autoCrop", "aspectRatio", "containWithinAspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", 4, "ngIf"], ["class", "imagen", 3, "src", 4, "ngIf"], ["class", "load-imagen br-10", "style", "height: 100%", 4, "ngIf"], [1, "btn-ok-admin", 3, "click"], [1, "btn-cancel-admin", 3, "click"], ["format", "png", 2, "width", "100%", "height", "100%", 3, "imageChangedEvent", "maintainAspectRatio", "autoCrop", "aspectRatio", "containWithinAspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "imagen", 3, "src"], [1, "load-imagen", "br-10", 2, "height", "100%"], ["type", "file", 1, "input-file", 2, "height", "100%", 3, "change"], [1, "cont-load-imagen", "m-auto"], [1, "icon-camera"], [1, "fa", "fa-camera"], [1, "div-subir-img"], [1, "div-img-port-temp", 2, "height", "100%"], [1, "imagen-portada", 2, "height", "100%", "width", "100%", 3, "src"], [1, "btn-sub-img", "bold", 3, "click"], [1, "design_2", "m-b-3", "br-admin"], ["class", "div-img-load-cropper", 4, "ngIf"], ["class", "div-img-port-temp", 4, "ngIf"], ["src", "https://api.gualeonline.com.ar/public/img/portadas/template_sushi_1.jpg", 1, "imgSelect"], ["type", "radio", "name", "portada", "value", "template_sushi_1.jpg", 1, "radioImg", 3, "ngModel", "ngModelChange", "change"], ["src", "https://api.gualeonline.com.ar/public/img/portadas/template_sushi_2.jpg", 1, "imgSelect"], ["type", "radio", "name", "portada", "value", "template_sushi_2.jpg", 1, "radioImg", 3, "ngModel", "ngModelChange", "change"], ["src", "https://api.gualeonline.com.ar/public/img/portadas/template_sushi_3.jpg", 1, "imgSelect"], ["type", "radio", "name", "portada", "value", "template_sushi_3.jpg", 1, "radioImg", 3, "ngModel", "ngModelChange", "change"], ["class", "logo", 3, "src", 4, "ngIf"], [1, "div-input", 2, "font-size", "1rem"], [1, "div-file"], ["type", "file", "accept", "image/*", 1, "input-file", 3, "change"], ["file2", ""], ["for", "fileDropRef", 1, "label-file"], [1, "div-icon-label"], ["src", "../../../assets/imgs/icons/Ca\u0301mara_Gris.png", "alt", "", 1, "icon-cam"], [1, "label-subir-foto"], [1, "div-img-load-cropper"], ["style", "width: 100%; height: 315px;", "format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", 4, "ngIf"], ["class", "load-imagen br-10", 4, "ngIf"], ["format", "png", 2, "width", "100%", "height", "315px", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "load-imagen", "br-10"], ["type", "file", 1, "input-file", 3, "change"], [1, "div-img-port-temp"], [1, "logo", 3, "src"], [1, "btn-ok-admin", "br-10", 3, "click"], [1, "btn-cancel-admin", "br-10", 3, "click"]],
      template: function DisenioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dise\xF1o de comercio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Seleccione el dise\xF1o que quiere para la p\xE1gina de su comercio. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_Template_button_click_13_listener() {
            return ctx.cambiarDiseno(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Elegir dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_Template_button_click_15_listener() {
            return ctx.mostrarTemplate(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ver Dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_Template_button_click_24_listener() {
            return ctx.cambiarDiseno(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Elegir dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisenioComponent_Template_button_click_26_listener() {
            return ctx.mostrarTemplate(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ver Dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DisenioComponent_div_28_Template, 20, 5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DisenioComponent_div_29_Template, 35, 6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DisenioComponent_button_31_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DisenioComponent_button_32_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.design == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.design == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.design != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.design != 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperComponent"]],
      styles: [".div-cont-templates[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: 4rem !important;\r\n}\r\n\r\n.div-template[_ngcontent-%COMP%] \r\n{\r\n  position: relative;\r\n  \r\n}\r\n\r\n\r\n\r\n.div-img-template-mob[_ngcontent-%COMP%]\r\n{\r\n  top: 92px;\r\n  right: -53px;\r\n}\r\n\r\n.imagen-portada[_ngcontent-%COMP%]\r\n{\r\n  height: 100%\r\n}\r\n\r\n.div-over-templates[_ngcontent-%COMP%]:hover\r\n{\r\n  opacity: 1;\r\n}\r\n\r\n.div-over-templates[_ngcontent-%COMP%]\r\n{  \r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgb(35,35,35, .8);  \r\n  border-radius: 18px;\r\n  \r\n}\r\n\r\n.div-cont-imgs[_ngcontent-%COMP%]\r\n{\r\n  width: 80%;\r\n}\r\n\r\n.div-btns-temp[_ngcontent-%COMP%]\r\n{  \r\n  display: flex; \r\n  justify-content: space-around;  \r\n  width: 80%;\r\n}\r\n\r\n.btn-template[_ngcontent-%COMP%]\r\n{\r\n  color: white;\r\n  background-color: var(--gris-oscuro);  \r\n  padding: 7px 10px;\r\n  width: 45%;\r\n}\r\n\r\n.load-imagen[_ngcontent-%COMP%]\r\n{\r\n  height: 100%;\r\n  border: dashed 1px var(--gris);  \r\n  color: var(--gris);\r\n}\r\n\r\n.cont-load-imagen[_ngcontent-%COMP%]\r\n{\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n\r\n.fa-camera[_ngcontent-%COMP%]\r\n{\r\n  font-size: 4rem;\r\n}\r\n\r\n.div-subir-img[_ngcontent-%COMP%]\r\n{\r\n  font-size: 2rem;  \r\n}\r\n\r\n.imgSelect[_ngcontent-%COMP%] {\r\n  margin: 1px;\r\n  width: 64%;\r\n}\r\n\r\n.radioImg[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n}\r\n\r\n.subirFoto[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.div-icon-label[_ngcontent-%COMP%]\r\n{\r\n  border: dashed 2px var(--gris);\r\n  padding: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.icon-cam[_ngcontent-%COMP%]\r\n{\r\n  width: 50px;\r\n}\r\n\r\n.label-subir-foto[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 1rem;\r\n  font-size: 1rem;\r\n  color: var(--gris);\r\n}\r\n\r\n.btn-sub-img[_ngcontent-%COMP%]\r\n{\r\n  color: var(--black);\r\n  font-size: 1.3rem !important;\r\n}\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  max-height: 100px;\r\n}\r\n\r\n.opcion-design[_ngcontent-%COMP%] {\r\n  max-width: 80%;\r\n}\r\n\r\n.input-file[_ngcontent-%COMP%]\r\n{\r\n    opacity: 0;\r\n    position: absolute;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.label-file[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n    height: auto;\r\n    border-radius: 4px;\r\n    font-size: 1.2rem;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n}\r\n\r\n.div-file[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n}\r\n\r\n.div-input[_ngcontent-%COMP%]\r\n{\r\n    margin-bottom:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGlzZW5pby9kaXNlbmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7OztHQUdHOztBQUVIOztFQUVFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUU7QUFDRjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOztFQUVFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kaXNlbmlvL2Rpc2VuaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtY29udC10ZW1wbGF0ZXNcclxue1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdi10ZW1wbGF0ZSBcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDE1MHB4OyAqL1xyXG59XHJcblxyXG4vKiAuZGl2LWltZy10ZW1wbGF0ZVxyXG57XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDY1cHgpO1xyXG59ICovXHJcblxyXG4uZGl2LWltZy10ZW1wbGF0ZS1tb2Jcclxue1xyXG4gIHRvcDogOTJweDtcclxuICByaWdodDogLTUzcHg7XHJcbn1cclxuXHJcbi5pbWFnZW4tcG9ydGFkYVxyXG57XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbi5kaXYtb3Zlci10ZW1wbGF0ZXM6aG92ZXJcclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5kaXYtb3Zlci10ZW1wbGF0ZXNcclxueyAgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzUsMzUsMzUsIC44KTsgIFxyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgLyogb3BhY2l0eTogMDsgKi9cclxufVxyXG5cclxuLmRpdi1jb250LWltZ3Ncclxue1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5kaXYtYnRucy10ZW1wXHJcbnsgIFxyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAgXHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJ0bi10ZW1wbGF0ZVxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTsgIFxyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5sb2FkLWltYWdlblxyXG57XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogZGFzaGVkIDFweCB2YXIoLS1ncmlzKTsgIFxyXG4gIGNvbG9yOiB2YXIoLS1ncmlzKTtcclxufVxyXG5cclxuLmNvbnQtbG9hZC1pbWFnZW5cclxue1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZhLWNhbWVyYVxyXG57XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4uZGl2LXN1YmlyLWltZ1xyXG57XHJcbiAgZm9udC1zaXplOiAycmVtOyAgXHJcbn1cclxuXHJcbi5pbWdTZWxlY3Qge1xyXG4gIG1hcmdpbjogMXB4O1xyXG4gIHdpZHRoOiA2NCU7XHJcbn1cclxuXHJcbi5yYWRpb0ltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uc3ViaXJGb3RvIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBtYXJnaW46IDAuNXJlbTtcclxufVxyXG5cclxuLmRpdi1pY29uLWxhYmVsXHJcbntcclxuICBib3JkZXI6IGRhc2hlZCAycHggdmFyKC0tZ3Jpcyk7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLWNhbVxyXG57XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5sYWJlbC1zdWJpci1mb3RvXHJcbntcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tZ3Jpcyk7XHJcbn1cclxuXHJcbi5idG4tc3ViLWltZ1xyXG57XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAucG9ydGFkYSB7XHJcbiAgbWF4LWhlaWdodDogMjQ3LjgzM3B4O1xyXG59ICovXHJcblxyXG4ubG9nbyB7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5vcGNpb24tZGVzaWduIHtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmlucHV0LWZpbGVcclxue1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbC1maWxlXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGl2LWZpbGVcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGl2LWlucHV0XHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisenioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-disenio',
          templateUrl: './disenio.component.html',
          styleUrls: ['./disenio.component.css']
        }]
      }], function () {
        return [{
          type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/modal-imgs-producto/modal-imgs-producto.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/modal-imgs-producto/modal-imgs-producto.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ModalImgsProductoComponent */

  /***/
  function srcAppAdminModalImgsProductoModalImgsProductoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalImgsProductoComponent", function () {
      return ModalImgsProductoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function ModalImgsProductoComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalImgsProductoComponent_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.formNewImg = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nueva foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModalImgsProductoComponent_div_1_image_cropper_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "image-cropper", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ModalImgsProductoComponent_div_1_image_cropper_2_Template_image_cropper_imageCropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.imageCropped($event);
        })("imageLoaded", function ModalImgsProductoComponent_div_1_image_cropper_2_Template_image_cropper_imageLoaded_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.imageLoaded();
        })("cropperReady", function ModalImgsProductoComponent_div_1_image_cropper_2_Template_image_cropper_cropperReady_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.cropperReady();
        })("loadImageFailed", function ModalImgsProductoComponent_div_1_image_cropper_2_Template_image_cropper_loadImageFailed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx_r5.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 4 / 5);
      }
    }

    function ModalImgsProductoComponent_div_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalImgsProductoComponent_div_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.guardarImagen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModalImgsProductoComponent_div_1_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalImgsProductoComponent_div_1_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.editarImagen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModalImgsProductoComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModalImgsProductoComponent_div_1_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalImgsProductoComponent_div_1_image_cropper_2_Template, 1, 3, "image-cropper", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalImgsProductoComponent_div_1_button_3_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalImgsProductoComponent_div_1_button_4_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalImgsProductoComponent_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.cancelarCrop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editando_crop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editando == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editando == true);
      }
    }

    function ModalImgsProductoComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r21 = ctx.$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r20.ruta_imagenes + img_r21.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ModalImgsProductoComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalImgsProductoComponent_div_2_div_1_Template, 4, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.imgs);
      }
    }

    var ModalImgsProductoComponent = /*#__PURE__*/function () {
      function ModalImgsProductoComponent(adminService, dialogRef, data) {
        _classCallCheck(this, ModalImgsProductoComponent);

        this.adminService = adminService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formNewImg = false;
        this.editando_crop = false;
        this.editando = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.ruta_imagenes = 'https://api.gualeonline.com.ar/public/img/productos/';
        this.imagen_croppeada = {
          id_producto: 0,
          nombre: '',
          url: '',
          id_comercio: 0
        };
      }

      _createClass(ModalImgsProductoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          if (this.adminService.prod !== null) {
            this.imagen_croppeada.id_producto = this.data.id_prod;
            console.log(this.adminService.prod);
          } else {
            this.editando = false;
            this.formNewImg = true;
          }

          this.adminService.getComercioSeleccionado().subscribe(function (res) {
            _this36.imagen_croppeada.id_comercio = res[0].id;

            _this36.getImagenes();
          });
        }
      }, {
        key: "getImagenes",
        value: function getImagenes() {
          var _this37 = this;

          if (this.data.id_prod != null) {
            debugger;
            this.adminService.getImagenesProducto(this.data.id_prod).subscribe(function (res) {
              _this37.imgs = res;
            });
          }
        }
      }, {
        key: "nuevaImagen",
        value: function nuevaImagen(file) {
          this.editando_crop = false;
          var currentDate = new Date();
          var fechaHora = currentDate.getDate().toString() + (currentDate.getMonth() + 1).toString() + currentDate.getFullYear().toString() + currentDate.getHours().toString() + currentDate.getMinutes().toString() + currentDate.getSeconds().toString();
          this.imagen_croppeada.nombre = fechaHora;

          if (this.data.id_prod != null) {
            // this.adminService.prod.imgs.push(
            //   {
            //     image:this.imagen_croppeada.url,
            //     nombre:this.imagen_croppeada.nombre
            //   });
            var imagen = {
              image: this.imagen_croppeada.url,
              nombre: this.imagen_croppeada.nombre,
              id_producto: this.data.id_prod,
              id_comercio: this.adminService.currentUser.usuario.id_comercio
            };
            this.adminService.nuevaImagen(imagen).subscribe();
          } else {
            this.adminService.imagenProd.push({
              file: this.imagen_croppeada.url,
              nombreImg: this.imagen_croppeada.nombre
            });
          }

          ;
          var ret = {
            image: this.imagen_croppeada.url,
            nombre: this.imagen_croppeada.nombre,
            thumbImage: null
          };
          this.dialogRef.close(ret);
        }
      }, {
        key: "cancelarCrop",
        value: function cancelarCrop() {
          this.formNewImg = false;
          this.editando_crop = false;
          this.editando = false;
        }
      }, {
        key: "modoEditar",
        value: function modoEditar(img) {
          this.imagen_a_editar = img;
          this.editando = true;
          this.formNewImg = true;
        }
      }, {
        key: "editarImagen",
        value: function editarImagen() {
          var _this38 = this;

          var imagen = {
            nombre: this.imagen_a_editar,
            url: this.imagen_croppeada.url
          };
          this.adminService.editarImagen(imagen).subscribe(function (res) {
            _this38.cancelarCrop(); // this.getImagenes();

          });
        } // eliminarImagen(img){
        //   if (confirm("¿Eliminar la foto?")) {
        //     this.adminService.eliminarImagen(img).subscribe(res=>{
        //       this.getImagenes();
        //     });
        //   }
        // }

      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          var _this39 = this;

          // this.nuevaImagen(event);
          debugger;
          this.editando_crop = true;
          this.imageChangedEvent = event;
          var reader = new FileReader(); // this.imagePath = files;
          // reader.readAsDataURL(event.files[0]); 

          reader.onload = function (_event) {
            _this39.file = reader.result;
          };
        }
      }, {
        key: "guardarImagen",
        value: function guardarImagen() {
          this.nuevaImagen(this.file);
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
          this.imagen_croppeada.url = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// cropper ready
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {// show message
        }
      }]);

      return ModalImgsProductoComponent;
    }();

    ModalImgsProductoComponent.ɵfac = function ModalImgsProductoComponent_Factory(t) {
      return new (t || ModalImgsProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ModalImgsProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalImgsProductoComponent,
      selectors: [["app-modal-imgs-producto"]],
      decls: 3,
      vars: 3,
      consts: [["class", "btn btn-success btn-sm", 3, "click", 4, "ngIf"], ["class", "new-img", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "new-img"], ["type", "file", 3, "change"], ["style", "width: 200px; height: 200px;", "format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed", 4, "ngIf"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", "btn-sm", 3, "click"], ["format", "png", 2, "width", "200px", "height", "200px", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-4"], ["alt", "", 3, "src"]],
      template: function ModalImgsProductoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalImgsProductoComponent_button_0_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalImgsProductoComponent_div_1_Template, 7, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalImgsProductoComponent_div_2_Template, 2, 1, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formNewImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formNewImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formNewImg);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__["ImageCropperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21vZGFsLWltZ3MtcHJvZHVjdG8vbW9kYWwtaW1ncy1wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalImgsProductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-imgs-producto',
          templateUrl: './modal-imgs-producto.component.html',
          styleUrls: ['./modal-imgs-producto.component.css']
        }]
      }], function () {
        return [{
          type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/navbar/navbar.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/navbar/navbar.component.ts ***!
    \**************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppAdminNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /* Set the width of the side navigation to 250px */

      }, {
        key: "openNav",
        value: function openNav() {
          document.getElementById("mySidenav").style.width = "300px";
        }
        /* Set the width of the side navigation to 0 */

      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 17,
      vars: 0,
      consts: [["id", "main"], ["id", "mySidenav", 1, "sidenav"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], ["href", "/Admin/comercio", 1, "opcion"], ["href", "/Admin/dise\xF1o", 1, "opcion"], ["href", "/Admin/categorias", 1, "opcion"], ["href", "/Admin/Productos", 1, "opcion"], [1, "br-10"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ADMINISTRADOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Datos del comercio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dise\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Categor\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Deshabilitar comercio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sidenav[_ngcontent-%COMP%] {\r\n  height: 100%; \r\n  width: 0; \r\n  position: fixed; \r\n  z-index: 1; \r\n  top: 0; \r\n  left: 0;\r\n  background-color:var(--gris-claro); \r\n  overflow-x: hidden; \r\n  padding-top: 60px; \r\n  transition: 0.5s; \r\n}\r\n .sidenav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding-left: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 1.3rem;\r\n  color: rgb(44, 44, 44);\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n \r\n .opcion[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 2rem;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  color: rgb(44, 44, 44);\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n .sidenav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 2rem;\r\n  white-space:nowrap;\r\n  padding: .5rem 1rem;\r\n  display: block;\r\n  background-color: rgb(51, 51, 51);\r\n  color: white;\r\n}\r\n \r\n .opcion[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(255, 255, 255);\r\n  border-left:  solid 5px rgb(51, 51, 51);\r\n}\r\n \r\n .sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n  color: rgb(51, 51, 51);\r\n}\r\n \r\n #main[_ngcontent-%COMP%] {\r\n  transition: margin-left .5s;\r\n  margin: .5rem;\r\n}\r\n \r\n @media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLDZCQUE2QjtDQUM3QjtFQUNDLFlBQVksRUFBRSxxQkFBcUI7RUFDbkMsUUFBUSxFQUFFLDBDQUEwQztFQUNwRCxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxnQkFBZ0I7RUFDNUIsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QixPQUFPO0VBQ1Asa0NBQWtDLEVBQUUsU0FBUztFQUM3QyxrQkFBa0IsRUFBRSw4QkFBOEI7RUFDbEQsaUJBQWlCLEVBQUUsb0NBQW9DO0VBQ3ZELGdCQUFnQixFQUFFLHlEQUF5RDtBQUM3RTtDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7Q0FFQSw4QkFBOEI7Q0FDOUI7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtDQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7Q0FFQSxpRUFBaUU7Q0FDakU7RUFDRSxvQ0FBb0M7RUFDcEMsdUNBQXVDO0FBQ3pDO0NBRUEsMkRBQTJEO0NBQzNEO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7Q0FFQSxzSEFBc0g7Q0FDdEg7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmO0NBRUEsZ0lBQWdJO0NBQ2hJO0VBQ0UsVUFBVSxpQkFBaUIsQ0FBQztFQUM1QixZQUFZLGVBQWUsQ0FBQztBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBUaGUgc2lkZSBuYXZpZ2F0aW9uIG1lbnUgKi9cclxuIC5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cclxuICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXHJcbiAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3Jpcy1jbGFybyk7IC8qIEJsYWNrKi9cclxuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cclxufVxyXG5cclxuLnNpZGVuYXYgc3BhbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4vKiBUaGUgbmF2aWdhdGlvbiBtZW51IGxpbmtzICovXHJcbi5vcGNpb24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHJnYig0NCwgNDQsIDQ0KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xyXG4ub3BjaW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLWxlZnQ6ICBzb2xpZCA1cHggcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAodG9wIHJpZ2h0IGNvcm5lcikgKi9cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG59XHJcblxyXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbn1cclxuXHJcbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/productos/productos.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/productos/productos.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductosComponent */

  /***/
  function srcAppAdminProductosProductosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosComponent", function () {
      return ProductosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_imgs_producto_modal_imgs_producto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modal-imgs-producto/modal-imgs-producto.component */
    "./src/app/admin/modal-imgs-producto/modal-imgs-producto.component.ts");
    /* harmony import */


    var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin.service */
    "./src/app/admin/admin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
    /* harmony import */


    var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-color/sketch */
    "./node_modules/ngx-color/__ivy_ngcc__/sketch/fesm2015/ngx-color-sketch.js");

    function ProductosComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.agregarProducto = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A\xF1adir nuevo producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductosComponent_div_5_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cat_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r11.nombre_categoria);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "color": a0,
        "background": a1
      };
    };

    function ProductosComponent_div_5_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_5_div_25_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var i_r13 = ctx.index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.quitarNewColor(null, null, i_r13, null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, color_r12.color, color_r12.color));
      }
    }

    function ProductosComponent_div_5_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_5_div_30_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var i_r17 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.quitarNuevaImagen(i_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r16.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductosComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CREAR NUEVO PRODUCTO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosComponent_div_5_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.new_producto.subcategoria = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Seleccionar categor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductosComponent_div_5_option_8_Template, 2, 2, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosComponent_div_5_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.new_producto.nombre = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosComponent_div_5_Template_textarea_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.new_producto.descripcion = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosComponent_div_5_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.new_producto.precio = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosComponent_div_5_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.new_producto.precio = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Color");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", null, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "color-sketch", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeComplete", function ProductosComponent_div_5_Template_color_sketch_onChangeComplete_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.handleChangeComplete($event, null, null, null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductosComponent_div_5_div_25_Template, 4, 4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_5_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.openModalImgs(null, null, null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductosComponent_div_5_div_30_Template, 3, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_5_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.guardarProducto();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "GUARDAR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_5_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.cancelarNewProducto();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CANCELAR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.new_producto.subcategoria);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categorias);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.new_producto.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.new_producto.descripcion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.new_producto.precio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.new_producto.precio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.colores);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.adminService.imagenProd);
      }
    }

    function ProductosComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r30.subcat.id_subcat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30.subcat.nombre);
      }
    }

    function ProductosComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.buscar = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "background": a0
      };
    };

    function ProductosComponent_div_18_div_1_div_3_div_1_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_div_29_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var indexColor_r48 = ctx.index;
          var x_r47 = ctx.$implicit;

          var i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var index_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.quitarNewColor(index_r34, i_r38, indexColor_r48, x_r47);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, x_r47.color));
      }
    }

    function ProductosComponent_div_18_div_1_div_3_div_1_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var prod_r37 = ctx_r54.$implicit;
          var i_r38 = ctx_r54.index;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r53.editProducto(prod_r37, i_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductosComponent_div_18_div_1_div_3_div_1_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var prod_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r56.eliminarProducto(prod_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductosComponent_div_18_div_1_div_3_div_1_button_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_button_33_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var prod_r37 = ctx_r60.$implicit;
          var i_r38 = ctx_r60.index;

          var item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.modifProducto(prod_r37, item_r33.subcat.id_subcat, i_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductosComponent_div_18_div_1_div_3_div_1_button_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_button_34_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r63.prod_edit = 10000;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductosComponent_div_18_div_1_div_3_div_1_div_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_div_40_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var elem_r65 = ctx.$implicit;
          var indexImg_r66 = ctx.index;

          var i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var index_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.eliminarImagen(elem_r65, indexImg_r66, index_r34, i_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var elem_r65 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", elem_r65.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductosComponent_div_18_div_1_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductosComponent_div_18_div_1_div_3_div_1_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var prod_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r71.editarNombre($event, prod_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Descripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Precio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Precio oferta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Colores");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", null, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "color-sketch", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeComplete", function ProductosComponent_div_18_div_1_div_3_div_1_Template_color_sketch_onChangeComplete_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var prod_r37 = ctx_r75.$implicit;
          var i_r38 = ctx_r75.index;

          var index_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.handleChangeComplete($event, prod_r37, index_r34, i_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductosComponent_div_18_div_1_div_3_div_1_div_29_Template, 2, 3, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductosComponent_div_18_div_1_div_3_div_1_button_31_Template, 2, 0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductosComponent_div_18_div_1_div_3_div_1_button_32_Template, 2, 0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductosComponent_div_18_div_1_div_3_div_1_button_33_Template, 2, 0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductosComponent_div_18_div_1_div_3_div_1_button_34_Template, 2, 0, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosComponent_div_18_div_1_div_3_div_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var prod_r37 = ctx_r78.$implicit;
          var i_r38 = ctx_r78.index;

          var index_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.openModalImgs(prod_r37, index_r34, i_r38);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProductosComponent_div_18_div_1_div_3_div_1_div_40_Template, 5, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        var prod_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "nombre_", prod_r37.id_prod, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", prod_r37.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", prod_r37.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r39.prod_edit != prod_r37.id_prod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "desc_", prod_r37.id_prod, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r39.prod_edit != prod_r37.id_prod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r37.descripcion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "precio_", prod_r37.id_prod, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", prod_r37.precio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r39.prod_edit != prod_r37.id_prod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", prod_r37.precio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r39.prod_edit != prod_r37.id_prod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", prod_r37.colores);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.prod_edit == 10000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.prod_edit == 10000);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.prod_edit == prod_r37.id_prod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.prod_edit == prod_r37.id_prod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", prod_r37.imgs);
      }
    }

    function ProductosComponent_div_18_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductosComponent_div_18_div_1_div_3_div_1_Template, 41, 19, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prod_r37 = ctx.$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.buscar == "" || prod_r37.nombre.toLowerCase().includes(ctx_r36.buscar.toLowerCase()));
      }
    }

    function ProductosComponent_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductosComponent_div_18_div_1_div_3_Template, 2, 1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r33.subcat.nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r33.prod);
      }
    }

    function ProductosComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductosComponent_div_18_div_1_Template, 4, 2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.cat_selected == "0" || ctx_r4.cat_selected == item_r33.subcat.id_subcat);
      }
    }

    var ProductosComponent = /*#__PURE__*/function () {
      function ProductosComponent(adminService, FormBuilder, authService, dialog) {
        _classCallCheck(this, ProductosComponent);

        this.adminService = adminService;
        this.FormBuilder = FormBuilder;
        this.authService = authService;
        this.dialog = dialog;
        this.cat_selected = "0";
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.prod_edit = 10000;
        this.buscar = '';
        this.agregarProducto = false;
        this.new_producto = {
          nombre: '',
          descripcion: '',
          precio: '',
          subcategoria: '',
          idComercio: 0,
          imagenes: [],
          colores: []
        };
        this.colores = [];
        this.newColor = {
          color: '',
          id_producto: '',
          id_comercio: ''
        };
        this.materiales = [];
        this.tamaneos = []; // FUNCIONES DRAG & DROP //

        this.files = [];
      }

      _createClass(ProductosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.adminService.getComercioSeleccionado().subscribe(function (res) {
            _this40.adminService.comercioSeleccionado = res;

            _this40.getCategorias();

            console.log(res);
          });
          this.getProductosComercio();
        }
      }, {
        key: "getCategorias",
        value: function getCategorias() {
          var _this41 = this;

          this.adminService.getCategoriasProducto().subscribe(function (res) {
            _this41.categorias = res;
            console.log("categorias:");
            console.log(_this41.categorias);
          });
        }
      }, {
        key: "openModalImgs",
        value: function openModalImgs(prod, index, i) {
          var _this42 = this;

          if (prod == null) {
            prod = {
              id_prod: null
            };
          } else {
            prod = prod;
          }

          var dialogRef = this.dialog.open(_modal_imgs_producto_modal_imgs_producto_component__WEBPACK_IMPORTED_MODULE_1__["ModalImgsProductoComponent"], {
            height: 'fit-content',
            width: 'fit-content',
            panelClass: 'custom-modalbox',
            data: prod
          });

          if (prod.id_prod != null) {
            debugger;
            dialogRef.afterClosed().subscribe(function (res) {
              _this42.listaSubProd[index].prod[i].imgs.push(res);
            });
          }
        }
      }, {
        key: "filtrarXcat",
        value: function filtrarXcat(id_subcat) {
          if (id_subcat == null) {
            this.cat_selected;
          } else {
            this.cat_selected = id_subcat;
          }
        }
      }, {
        key: "getProductosComercio",
        value: function getProductosComercio() {
          var _this43 = this;

          this.adminService.getSubProdImgsComercio().subscribe(function (res) {
            _this43.listaRes = res; // console.log("Lista Res:");

            console.log(_this43.listaRes);

            _this43.agruparProdSubcat();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "agruparProdSubcat",
        value: function agruparProdSubcat() {
          var _this44 = this;

          this.listaSubProd = [];
          var subcatProd;
          this.listaRes.forEach(function (item) {
            if (_this44.listaSubProd.filter(function (x) {
              return x.subcat.id_subcat == item.id_subcat;
            }).length == 0) {
              var subcat = {
                id_subcat: item.id_subcat,
                nombre: item.nombre_categoria
              };
              var listaImgs;
              var listaColores;
              var listaTamaneos;
              var listaMateriales;

              if (item.imagen != null) {
                listaImgs = [{
                  nombre: item.imagen,
                  image: 'https://api.gualeonline.com.ar/public/img/productos/' + item.imagen,
                  thumbImage: 'https://api.gualeonline.com.ar/public/img/productos/' + item.imagen,
                  id: item.id_imagen
                }];
              } else {
                listaImgs = [];
              }

              if (item.color != null) {
                listaColores = [{
                  color: item.color,
                  id_color: item.id_color
                }];
              } else {
                listaColores = [];
              }

              if (item.tamaño != null) {
                listaTamaneos = [{
                  tamaneo: item.tamaño
                }];
              }

              if (item.material != null) {
                listaMateriales = [{
                  material: item.material
                }];
              }

              var prod = {
                id_prod: item.id_prod,
                nombre: item.nombre_producto,
                descripcion: item.descripcion_producto,
                precio: item.precio_producto,
                imgs: listaImgs,
                colores: listaColores,
                materiales: listaMateriales,
                tamaneos: listaTamaneos
              };
              var subcatProd = {
                subcat: subcat,
                prod: [prod]
              };

              _this44.listaSubProd.push(subcatProd);

              console.log(_this44.listaSubProd);
            } else {
              var reg = _this44.listaSubProd.find(function (x) {
                return x.subcat.id_subcat == item.id_subcat;
              });

              var index = _this44.listaSubProd.indexOf(reg);

              if (_this44.listaSubProd[index].prod.filter(function (x) {
                return x.id_prod == item.id_prod;
              }).length == 0) {
                var listaImgs;

                if (item.imagen != null) {
                  listaImgs = [{
                    nombre: item.imagen,
                    image: 'https://api.gualeonline.com.ar/public/img/productos/' + item.imagen,
                    thumbImage: 'https://api.gualeonline.com.ar/public/img/productos/' + item.imagen,
                    id: item.id_imagen
                  }];
                } else {
                  listaImgs = [];
                }

                if (item.color != null) {
                  listaColores = [{
                    color: item.color,
                    id_color: item.id_color
                  }];
                } else {
                  listaColores = [];
                }

                if (item.tamaño != null) {
                  listaTamaneos = [{
                    tamaneo: item.tamaño
                  }];
                }

                if (item.material != null) {
                  listaMateriales = [{
                    material: item.material
                  }];
                }

                var prod = {
                  id_prod: item.id_prod,
                  nombre: item.nombre_producto,
                  descripcion: item.descripcion_producto,
                  precio: item.precio_producto,
                  imgs: listaImgs,
                  colores: listaColores,
                  tamaneos: listaTamaneos,
                  materiales: listaMateriales
                };

                _this44.listaSubProd[index].prod.push(prod);
              } else {
                var reg = _this44.listaSubProd.find(function (x) {
                  return x.subcat.id_subcat == item.id_subcat;
                });

                var index = _this44.listaSubProd.indexOf(reg);

                var regProd = _this44.listaSubProd[index].prod.filter(function (x) {
                  return x.id_prod == item.id_prod;
                });

                if (regProd.length > 0) {
                  var indexProd = _this44.listaSubProd[index].prod.indexOf(regProd[0]);
                }

                if (item.imagen != null && _this44.listaSubProd[index].prod[indexProd].imgs.filter(function (x) {
                  return x.nombre == item.imagen;
                }).length == 0) {
                  var img = {
                    nombre: item.imagen,
                    image: 'https://api.gualeonline.com.ar/public/img/productos/' + item.imagen,
                    thumbImage: 'https://api.gualeonline.com.ar/public/img/productos/' + item.imagen,
                    id: item.id_imagen
                  };

                  _this44.listaSubProd[index].prod[indexProd].imgs.push(img);
                }

                if (item.color != null && _this44.listaSubProd[index].prod[indexProd].colores.filter(function (x) {
                  return x.color == item.color;
                }).length == 0) {
                  var color = {
                    color: item.color,
                    id_color: item.id_color
                  };

                  _this44.listaSubProd[index].prod[indexProd].colores.push(color);
                }
                /*
                if(item.tamaño != null && this.listaSubProd[index].prod[indexProd].tamaneos.filter(x=>x.tamaneo == item.tamaño).length==0)
                {
                  var tamaneo = { tamaneo: item.tamaño };
                  this.listaSubProd[index].prod[indexProd].tamaneos.push(tamaneo);
                }
                */


                if (item.material != null && _this44.listaSubProd[index].prod[indexProd].materiales.filter(function (x) {
                  return x.material == item.material;
                }).length == 0) {
                  var material = {
                    material: item.material
                  };

                  _this44.listaSubProd[index].prod[indexProd].materiales.push(material);
                }
              }
            }
          });
          console.log("Lista Sub Prod:");
          console.log(this.listaSubProd);
        }
      }, {
        key: "cancelarNewProducto",
        value: function cancelarNewProducto() {
          this.agregarProducto = false;
          this.new_producto.nombre = '';
          this.new_producto.descripcion = '';
          this.new_producto.precio = '';
          this.new_producto.subcategoria = '';
          this.colores = [];
          this.adminService.imagenProd = []; // this.adminService.eliminarImgsProducto(0).subscribe();
        }
      }, {
        key: "quitarNewColor",
        value: function quitarNewColor(index, i, indexColor, color) {
          var _this45 = this;

          this.colores.splice(indexColor, 1);
          this.adminService.borrarColor(color.id_color).subscribe(function (res) {
            _this45.listaSubProd[index].prod[i].colores.splice(indexColor, 1);
          });
          console.log(color.id_color);
        }
      }, {
        key: "quitarNuevaImagen",
        value: function quitarNuevaImagen(i) {
          this.adminService.imagenProd.splice(i, 1);
        }
      }, {
        key: "addMaterial",
        value: function addMaterial() {
          var material = {
            material: '',
            id_producto: 0
          };
          this.materiales.push(material);
        }
      }, {
        key: "prueba",
        value: function prueba() {
          console.log(this.tamaneos);
        }
      }, {
        key: "addTamaneo",
        value: function addTamaneo() {
          var tamaneo = {
            tamaneo: '',
            id_producto: 0
          };
          this.tamaneos.push(tamaneo);
        }
      }, {
        key: "guardarProducto",
        value: function guardarProducto() {
          var _this46 = this;

          this.new_producto.imagenes = this.adminService.imagenProd;
          this.new_producto.colores = this.colores;
          this.new_producto.idComercio = this.adminService.currentUser.usuario.id_comercio;
          this.adminService.guardarProducto(this.new_producto).subscribe(function (res) {
            _this46.new_producto = {
              nombre: '',
              descripcion: '',
              precio: '',
              subcategoria: '',
              idComercio: 0,
              imagenes: [],
              colores: []
            };

            if (_this46.colores.length > 0) {
              debugger;

              _this46.colores.forEach(function (element) {
                element.id_producto = res;

                _this46.adminService.guardarColores(element).subscribe();
              });
            }

            if (_this46.materiales.length > 0) {
              _this46.materiales.forEach(function (mat) {
                mat.id_producto = res;

                _this46.adminService.guardarMateriales(mat).subscribe();
              });
            }

            if (_this46.tamaneos.length > 0) {
              _this46.tamaneos.forEach(function (tam) {
                tam.id_producto = res;

                _this46.adminService.guardarTamaños(tam).subscribe();
              });
            }

            console.log(res);

            if (res > 0) {
              var message = "Los datos se modificaron exitosamente.";
            }

            _this46.agregarProducto = false;
            _this46.colores = [];
            _this46.adminService.imagenProd = [];

            _this46.getProductosComercio();
          });
        }
      }, {
        key: "editProducto",
        value: function editProducto(prod, i) {
          this.prod_edit = prod.id_prod;
        }
      }, {
        key: "modifProducto",
        value: function modifProducto(prod, subcat_id, i) {
          var _this47 = this;

          var nombre_html = document.getElementById('nombre_' + prod.id_prod);
          var desc_html = document.getElementById('desc_' + prod.id_prod);
          var precio_html = document.getElementById('precio_' + prod.id_prod);
          var nombre_value = nombre_html.value;
          var desc_value = desc_html.value;
          var precio_value = precio_html.value;
          var producto = {
            id: prod.id_prod,
            nombre: nombre_value,
            descripcion: desc_value,
            precio: precio_value,
            idComercio: this.adminService.comercioSeleccionado[0].id,
            subcategoria: subcat_id
          };
          this.prod_edit = 10000;
          this.adminService.editarProducto(producto).subscribe(function (res) {
            _this47.getProductosComercio();
          });
        }
      }, {
        key: "editarNombre",
        value: function editarNombre(event, prod) {
          var producto = {
            id: prod.id,
            nombre: event.target.value,
            descripcion: prod.descripcion,
            precio: prod.precio
          };
          console.log(prod);
          this.adminService.editarProducto(producto).subscribe();
        }
      }, {
        key: "eliminarProducto",
        value: function eliminarProducto(prod) {
          var _this48 = this;

          if (confirm("¿Eliminar este producto?")) {
            this.adminService.eliminarProducto(prod.id_prod).subscribe(function (res) {
              _this48.getProductosComercio();
            });
          }
        }
      }, {
        key: "eliminarImagen",
        value: function eliminarImagen(img, indexImg, index, i) {
          var _this49 = this;

          if (confirm("¿Eliminar la foto?")) {
            console.log(img);
            this.adminService.eliminarImagen(img).subscribe(function (res) {
              _this49.listaSubProd[index].prod[i].imgs.splice(indexImg, 1);
            });
          }
        }
      }, {
        key: "dropped",
        value: function dropped(files) {
          this.files = files;

          var _iterator3 = _createForOfIteratorHelper(files),
              _step3;

          try {
            var _loop3 = function _loop3() {
              var droppedFile = _step3.value;

              // Is it a file?
              if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                  console.log(droppedFile.relativePath, file);
                });
              } else {
                var _fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, _fileEntry);
              }
            };

            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop3();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "fileOver",
        value: function fileOver(event) {
          console.log(event);
        }
      }, {
        key: "fileLeave",
        value: function fileLeave(event) {
          console.log(event);
        } // FUNCIONES CROPPER //

      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.imageChangedEvent = event;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// cropper ready
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {} // show message
        // COLOR COSO //

      }, {
        key: "handleChange",
        value: function handleChange($event) {
          console.log($event.color);
        }
      }, {
        key: "handleChangeComplete",
        value: function handleChangeComplete($event, prod, index, i) {
          var _this50 = this;

          var nuevo;

          if (prod != null) {
            nuevo = {
              color: $event.color.hex,
              id_producto: prod.id_prod,
              id_comercio: this.adminService.currentUser.usuario.id_comercio
            };
            this.adminService.guardarColores(nuevo).subscribe(function (res) {
              _this50.listaSubProd[index].prod[i].colores.push(nuevo);
            });
            console.log(this.newColor);
          } else {
            this.newColor = {
              color: $event.color.hex,
              id_producto: null,
              id_comercio: this.adminService.currentUser.usuario.id_comercio
            };
            this.colores.push(this.newColor);
          }
        }
      }]);

      return ProductosComponent;
    }();

    ProductosComponent.ɵfac = function ProductosComponent_Factory(t) {
      return new (t || ProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    ProductosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductosComponent,
      selectors: [["app-productos"]],
      decls: 19,
      vars: 6,
      consts: [[1, "div-container"], [1, "div-titulo"], ["class", "div-nuevo-producto", 4, "ngIf"], [1, "div-nuevo", "col-md-6"], ["class", "formNewProducto row", 4, "ngIf"], [1, "div-filtros", "flex", "spc-btw"], [1, "div-filtro-categoria"], [1, "titulo-input-admin"], ["name", "", "id", "", 1, "form-item", 3, "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [1, "div-buscar", "br-10", "border-solid", "flex"], ["type", "text", "placeholder", "Buscar productos por nombre", 1, "input-admin", "br-10", "border-none", "grow", 3, "ngModel", "ngModelChange"], ["class", "btn-black-admin", 3, "click", 4, "ngIf"], [1, "div-productos-container"], ["class", "div-producto-subcat", 4, "ngFor", "ngForOf"], [1, "div-nuevo-producto"], [1, "btn-nuevo", 3, "click"], [1, "formNewProducto", "row"], [1, "div-titulo-nuevo", "col-md-12"], [1, "div-item", "col-md-6"], [1, "div-input-item"], [1, "form-item", 3, "ngModel", "ngModelChange"], ["value", ""], ["type", "text", "placeholder", "Nombre", 1, "form-item", 3, "ngModel", "ngModelChange"], ["placeholder", "Descripci\xF3n", 1, "form-item", 2, "height", "6rem", 3, "ngModel", "ngModelChange"], [1, "div-item", "col-md-4"], ["type", "text", "placeholder", "Precio", 1, "form-item", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Precio promocional", 1, "form-item", 3, "ngModel", "ngModelChange"], [1, "form-item", 3, "matMenuTriggerFor"], ["color", ""], ["color", "#fff", 3, "onChangeComplete"], [1, "div-colores", "flex"], [4, "ngFor", "ngForOf"], [1, "div-item", "flex", "col-md-12", 2, "padding", "0 .5rem"], [1, "label-file", "col-md-2", 2, "padding-left", "0"], [1, "btn-img", 3, "click"], ["src", "../../../assets/imgs/icons/C\xE1mara_negra.png", "alt", "", 1, "imagen"], ["class", "btn-img col-md-2", 4, "ngFor", "ngForOf"], [1, "div-item", "flex", "col-md-12"], [1, "div-boton", "col-md-6"], [1, "btn-menu", 3, "click"], [1, "fa", "fa-save", 2, "margin-right", ".5rem"], [1, "fa", "fa-window-close", 2, "margin-right", ".5rem"], [3, "value"], [1, "div-color", 3, "ngStyle"], [1, "btn-borrar-color", 3, "click"], [1, "btn-img", "col-md-2"], ["alt", "", 1, "imagen", 3, "src"], [2, "opacity", "0", 3, "click"], [1, "btn-black-admin", 3, "click"], [1, "div-producto-subcat"], ["class", "div-lista-subcat", 4, "ngIf"], [1, "div-lista-subcat"], [1, "div-titulo-subcat"], ["class", "div-lista-productos", 4, "ngFor", "ngForOf"], [1, "div-lista-productos"], ["class", "div-item row", 4, "ngIf"], [1, "div-item", "row"], [1, "div-producto", "col-md-9", "row"], [1, "div-titulo-item"], ["type", "text", 1, "dato-prod", 3, "id", "value", "placeholder", "disabled", "change"], [1, "dato-prod", 2, "resize", "none", 3, "id", "disabled"], ["type", "text", 1, "dato-prod", 3, "id", "value", "disabled"], ["type", "text", 1, "dato-prod", 3, "value", "disabled"], [1, "div-color", "flex", 3, "matMenuTriggerFor"], [1, "div-btn", "flex"], [1, "fa", "fa-plus"], ["class", "div-color", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "div-botones", "col-md-2", "flex"], ["class", "btn", 3, "click", 4, "ngIf"], [1, "div-fotos", "col-md-10", "flex"], [1, "label-file", "col-md-2", 2, "padding", "0"], [1, "div"], ["class", "btn-img col-md-2 no-pad-h", 4, "ngFor", "ngForOf"], [1, "btn", 3, "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-trash"], [1, "fa", "fa-save"], [1, "fa", "fa-window-close"], [1, "btn-img", "col-md-2", "no-pad-h"], [1, "div-eliminar-img"], [3, "click"]],
      template: function ProductosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductosComponent_div_3_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductosComponent_div_5_Template, 40, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seleccione Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductosComponent_Template_select_change_10_listener($event) {
            return ctx.filtrarXcat($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Todas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductosComponent_option_13_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.buscar = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductosComponent_button_16_Template, 2, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductosComponent_div_18_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.agregarProducto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.agregarProducto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaSubProd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buscar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buscar !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaSubProd);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], ngx_color_sketch__WEBPACK_IMPORTED_MODULE_8__["SketchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]],
      styles: [".div-titulo[_ngcontent-%COMP%]\r\n{\r\n    font-size: 2rem;\r\n    font-family: opensans-semibold;\r\n    padding-bottom: .5rem;\r\n    border-bottom: solid 2px;\r\n}\r\n\r\n.div-nuevo-producto[_ngcontent-%COMP%]\r\n{\r\n  \r\n  padding: 1rem 0;  \r\n  font-size: 1.3rem;\r\n}\r\n\r\n.btn-nuevo[_ngcontent-%COMP%]\r\n{\r\n  padding: 1rem;\r\n  font-size: 1.4 !important;\r\n  font-family: opensans-semibold;\r\n  background-color: var(--gris-claro);\r\n}\r\n\r\n.div-nuevo[_ngcontent-%COMP%] \r\n{\r\n  height: fit-contet;\r\n  background-color: var(--gris-claro);\r\n  margin: 1rem 0;\r\n}\r\n\r\n.div-titulo-nuevo[_ngcontent-%COMP%]\r\n{\r\n    padding: 1rem 0 0 .5rem;\r\n    font-family: opensans-semibold;\r\n}\r\n\r\n.div-item[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    padding: .5rem .5rem;\r\n}\r\n\r\n.btn-img[_ngcontent-%COMP%]\r\n{  \r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px var(--gris);\r\n    border-radius: 3px;\r\n    margin: 0 .25rem;\r\n\r\n}\r\n\r\n.div-boton[_ngcontent-%COMP%]\r\n{\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.div-imagen[_ngcontent-%COMP%]\r\n{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n.form-item[_ngcontent-%COMP%]\r\n{\r\n    border: 2px var(--gris-oscuro);\r\n    border-radius: 3px;  \r\n    width: 100%;\r\n    resize: none;\r\n    margin: .5rem 0;\r\n    padding: .7rem;\r\n    font-family: opensans-reg;\r\n    text-align: left;\r\n    color: var(--gris-oscuro);\r\n    font-size: 1rem;\r\n}\r\n\r\n.textarea[_ngcontent-%COMP%]\r\n{\r\n    border: 1px var(--gris);\r\n    border-radius: 3px;  \r\n    width: 100%;\r\n    resize: none;\r\n    margin: .5rem 0;\r\n}\r\n\r\n.div-opcion[_ngcontent-%COMP%]\r\n{\r\n    font-family: opensans-;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]\r\n{\r\n  padding: 0;\r\n  font-size: 2rem !important;\r\n  font-family: opensans-reg;\r\n}\r\n\r\n.btn-menu[_ngcontent-%COMP%]\r\n{\r\n  padding: 0;\r\n  margin: .5rem 0;\r\n  padding: .7rem;\r\n  font-family: opensans-light;\r\n  text-align: center;\r\n  width: 100%;\r\n  border: solid 1px var(--gris);\r\n  border-radius: 3px;\r\n}\r\n\r\n.div-titulo-subcat[_ngcontent-%COMP%]\r\n{\r\n    font-family: opensans-semibold;\r\n    padding: .5rem 0;\r\n    font-size: 1.4rem;\r\n    border-bottom: solid 1px var(--gris)\r\n}\r\n\r\n.div-producto[_ngcontent-%COMP%]\r\n{\r\n    border-bottom: solid 1px var(--gris);\r\n    width: 100%;\r\n    padding: .5rem .5rem;\r\n}\r\n\r\n.div-titulo-item[_ngcontent-%COMP%]\r\n{\r\n    font-size: .7rem;\r\n    font-family: opensans-light;\r\n}\r\n\r\n.dato-prod[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    border: solid 1px var(--gris);\r\n    border-radius: 3px;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.div-color[_ngcontent-%COMP%]\r\n{\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 3px;\r\n    margin: 0 2px;\r\n    border: solid 1px var(--gris);\r\n    padding: 0;\r\n}\r\n\r\n.btn-borrar-color[_ngcontent-%COMP%]\r\n{\r\n    opacity: 0;\r\n}\r\n\r\n.btn-borrar-color[_ngcontent-%COMP%]:hover\r\n{\r\n    opacity: 1;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.div-btn[_ngcontent-%COMP%]\r\n{\r\n    background-color: var(--gris-claro);\r\n    margin: auto;\r\n    \r\n}\r\n\r\n.div-botones[_ngcontent-%COMP%]\r\n{\r\n    flex-direction: column;\r\n    padding: .7rem .5rem;\r\n}\r\n\r\n.div-fotos[_ngcontent-%COMP%]\r\n{\r\n    padding: .5rem 0;\r\n}\r\n\r\n.div-img-cropped[_ngcontent-%COMP%]\r\n{\r\n    width: 20vh;\r\n    height: 20vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7RUFFRSwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBOztJQUVJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBOztFQUVFLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksVUFBVTtJQUNWLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi10aXR1bG9cclxue1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXNlbWlib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xyXG59XHJcblxyXG4uZGl2LW51ZXZvLXByb2R1Y3RvXHJcbntcclxuICAvKiBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tZ3Jpcyk7ICovXHJcbiAgcGFkZGluZzogMXJlbSAwOyAgXHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbi5idG4tbnVldm9cclxue1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogb3BlbnNhbnMtc2VtaWJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcy1jbGFybyk7XHJcbn1cclxuXHJcbi5kaXYtbnVldm8gXHJcbntcclxuICBoZWlnaHQ6IGZpdC1jb250ZXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3Jpcy1jbGFybyk7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5kaXYtdGl0dWxvLW51ZXZvXHJcbntcclxuICAgIHBhZGRpbmc6IDFyZW0gMCAwIC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXNlbWlib2xkO1xyXG59XHJcblxyXG4uZGl2LWl0ZW1cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1pbWdcclxueyAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyaXMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwIC4yNXJlbTtcclxuXHJcbn1cclxuXHJcbi5kaXYtYm90b25cclxue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZGl2LWltYWdlblxyXG57XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZm9ybS1pdGVtXHJcbntcclxuICAgIGJvcmRlcjogMnB4IHZhcigtLWdyaXMtb3NjdXJvKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICBwYWRkaW5nOiAuN3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuc2Fucy1yZWc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHZhcigtLWdyaXMtb3NjdXJvKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnRleHRhcmVhXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHZhcigtLWdyaXMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG1hcmdpbjogLjVyZW0gMDtcclxufVxyXG5cclxuLmRpdi1vcGNpb25cclxue1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLTtcclxufVxyXG5cclxuLmJ0blxyXG57XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogb3BlbnNhbnMtcmVnO1xyXG59XHJcblxyXG4uYnRuLW1lbnVcclxue1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gIHBhZGRpbmc6IC43cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuc2Fucy1saWdodDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3Jpcyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uZGl2LXRpdHVsby1zdWJjYXRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLXNlbWlib2xkO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWdyaXMpXHJcbn1cclxuXHJcbi5kaXYtcHJvZHVjdG9cclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWdyaXMpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbTtcclxufVxyXG5cclxuLmRpdi10aXR1bG8taXRlbVxyXG57XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zLWxpZ2h0O1xyXG59XHJcblxyXG4uZGF0by1wcm9kXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3Jpcyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuLmRpdi1jb2xvclxyXG57XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmlzKTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4tYm9ycmFyLWNvbG9yXHJcbntcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5idG4tYm9ycmFyLWNvbG9yOmhvdmVyXHJcbntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5kaXYtYnRuXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaXMtY2xhcm8pO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG59XHJcblxyXG4uZGl2LWJvdG9uZXNcclxue1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IC43cmVtIC41cmVtO1xyXG59XHJcblxyXG4uZGl2LWZvdG9zXHJcbntcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbn1cclxuXHJcbi5kaXYtaW1nLWNyb3BwZWRcclxue1xyXG4gICAgd2lkdGg6IDIwdmg7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-productos',
          templateUrl: './productos.component.html',
          styleUrls: ['./productos.component.css']
        }]
      }], function () {
        return [{
          type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map