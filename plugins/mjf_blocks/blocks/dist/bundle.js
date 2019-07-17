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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-block */ \"./app/my-block/index.js\");\n// main file\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZTkyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWluIGZpbGVcbmltcG9ydCAnLi9teS1ibG9jayc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/index.js\n");

/***/ }),

/***/ "./app/my-block/editor.scss":
/*!**********************************!*\
  !*** ./app/my-block/editor.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbXktYmxvY2svZWRpdG9yLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbXktYmxvY2svZWRpdG9yLnNjc3M/MzRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/my-block/editor.scss\n");

/***/ }),

/***/ "./app/my-block/index.js":
/*!*******************************!*\
  !*** ./app/my-block/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ \"./app/my-block/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);\n // console.log( 'wp: ', wp );\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    BlockControls = _wp$editor.BlockControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl;\nregisterBlockType('mauricio/character', {\n  title: 'Character',\n  // to make translatable: wp.i18n.__( 'Character', 'domain' )\n  description: 'Creates a block for a story character',\n  category: 'common',\n  icon: 'universal-access',\n  keywords: ['Character', 'Story'],\n  supports: {\n    html: false\n  },\n  attributes: {\n    name: {\n      source: 'text',\n      type: 'string',\n      selector: '.char-name'\n    },\n    bio: {\n      source: 'text',\n      type: 'string',\n      selector: '.char-bio'\n    },\n    tribe: {\n      source: 'text',\n      type: 'string',\n      selector: '.char-tribe',\n      default: 'Agenes'\n    },\n    text_alignment: {\n      type: 'string'\n    },\n    block_alignment: {\n      type: 'string',\n      default: 'wide'\n    }\n  },\n  getEditWrapperProps: function getEditWrapperProps(_ref) {\n    var block_alignment = _ref.block_alignment;\n\n    if (block_alignment === 'left' || block_alignment === 'right' || 'full' === block_alignment) {\n      return {\n        'data-align': block_alignment\n      };\n    }\n  },\n  edit: function edit(props) {\n    return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: \"Basics\"\n    }, wp.element.createElement(PanelRow, null, wp.element.createElement(\"p\", null, \"Configure the contents of the block here.\")), wp.element.createElement(TextControl, {\n      label: \"Character Name: \",\n      help: \"The character's name\",\n      value: props.attributes.name,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          name: new_val\n        });\n      }\n    }), wp.element.createElement(TextControl, {\n      label: \"Character Bio: \",\n      help: \"A description of the character\",\n      value: props.attributes.bio,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          bio: new_val\n        });\n      }\n    }), wp.element.createElement(SelectControl, {\n      label: \"Character Tribe: \",\n      help: \"The name of the tribe of the character\",\n      value: props.attributes.tribe,\n      options: [{\n        value: 'Agenes',\n        label: 'Agenes'\n      }, {\n        value: 'Feles',\n        label: 'Feles'\n      }, {\n        value: 'Venthaal',\n        label: 'Venthaal'\n      }],\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          tribe: new_val\n        });\n      }\n    }))), wp.element.createElement(\"div\", {\n      className: props.className\n    }, wp.element.createElement(BlockControls, null, wp.element.createElement(BlockAlignmentToolbar, {\n      value: props.attributes.block_alignment,\n      onChange: function onChange(new_val) {\n        return props.setAttributes({\n          block_alignment: new_val\n        });\n      }\n    }), wp.element.createElement(AlignmentToolbar, {\n      value: props.attributes.text_alignment,\n      onChange: function onChange(new_val) {\n        return props.setAttributes({\n          text_alignment: new_val\n        });\n      }\n    })), wp.element.createElement(\"ul\", {\n      style: {\n        textAlign: props.attributes.text_alignment\n      }\n    }, wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, \"Character Name:\"), wp.element.createElement(\"span\", {\n      className: \"char-name\"\n    }, props.attributes.name)), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, \"Character Bio:\"), wp.element.createElement(\"span\", {\n      className: \"char-bio\"\n    }, props.attributes.bio)), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, \"Character Tribe:\"), wp.element.createElement(\"span\", {\n      className: \"char-tribe\"\n    }, props.attributes.tribe))))];\n  },\n  save: function save(props) {\n    return wp.element.createElement(\"div\", {\n      className: \"align\".concat(props.attributes.block_alignment)\n    }, wp.element.createElement(\"ul\", {\n      style: {\n        textAlign: props.attributes.text_alignment\n      }\n    }, wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, \"Character Name:\"), wp.element.createElement(\"span\", {\n      className: \"char-name\"\n    }, props.attributes.name)), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, \"Character Bio:\"), wp.element.createElement(\"span\", {\n      className: \"char-bio\"\n    }, props.attributes.bio)), wp.element.createElement(\"li\", null, wp.element.createElement(\"strong\", null, \"Character Tribe:\"), wp.element.createElement(\"span\", {\n      className: \"char-tribe\"\n    }, props.attributes.tribe))));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbXktYmxvY2svaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbXktYmxvY2svaW5kZXguanM/MmY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnOyAvLyBjb25zb2xlLmxvZyggJ3dwOiAnLCB3cCApO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQmxvY2tBbGlnbm1lbnRUb29sYmFyO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgUGFuZWxSb3cgPSBfd3AkY29tcG9uZW50cy5QYW5lbFJvdyxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xucmVnaXN0ZXJCbG9ja1R5cGUoJ21hdXJpY2lvL2NoYXJhY3RlcicsIHtcbiAgdGl0bGU6ICdDaGFyYWN0ZXInLFxuICAvLyB0byBtYWtlIHRyYW5zbGF0YWJsZTogd3AuaTE4bi5fXyggJ0NoYXJhY3RlcicsICdkb21haW4nIClcbiAgZGVzY3JpcHRpb246ICdDcmVhdGVzIGEgYmxvY2sgZm9yIGEgc3RvcnkgY2hhcmFjdGVyJyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBpY29uOiAndW5pdmVyc2FsLWFjY2VzcycsXG4gIGtleXdvcmRzOiBbJ0NoYXJhY3RlcicsICdTdG9yeSddLFxuICBzdXBwb3J0czoge1xuICAgIGh0bWw6IGZhbHNlXG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICcuY2hhci1uYW1lJ1xuICAgIH0sXG4gICAgYmlvOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICcuY2hhci1iaW8nXG4gICAgfSxcbiAgICB0cmliZToge1xuICAgICAgc291cmNlOiAndGV4dCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNlbGVjdG9yOiAnLmNoYXItdHJpYmUnLFxuICAgICAgZGVmYXVsdDogJ0FnZW5lcydcbiAgICB9LFxuICAgIHRleHRfYWxpZ25tZW50OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgYmxvY2tfYWxpZ25tZW50OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd3aWRlJ1xuICAgIH1cbiAgfSxcbiAgZ2V0RWRpdFdyYXBwZXJQcm9wczogZnVuY3Rpb24gZ2V0RWRpdFdyYXBwZXJQcm9wcyhfcmVmKSB7XG4gICAgdmFyIGJsb2NrX2FsaWdubWVudCA9IF9yZWYuYmxvY2tfYWxpZ25tZW50O1xuXG4gICAgaWYgKGJsb2NrX2FsaWdubWVudCA9PT0gJ2xlZnQnIHx8IGJsb2NrX2FsaWdubWVudCA9PT0gJ3JpZ2h0JyB8fCAnZnVsbCcgPT09IGJsb2NrX2FsaWdubWVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2RhdGEtYWxpZ24nOiBibG9ja19hbGlnbm1lbnRcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgcmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5zcGVjdG9yQ29udHJvbHMsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbEJvZHksIHtcbiAgICAgIHRpdGxlOiBcIkJhc2ljc1wiXG4gICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsUm93LCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiQ29uZmlndXJlIHRoZSBjb250ZW50cyBvZiB0aGUgYmxvY2sgaGVyZS5cIikpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBcIkNoYXJhY3RlciBOYW1lOiBcIixcbiAgICAgIGhlbHA6IFwiVGhlIGNoYXJhY3RlcidzIG5hbWVcIixcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBuYW1lOiBuZXdfdmFsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBcIkNoYXJhY3RlciBCaW86IFwiLFxuICAgICAgaGVscDogXCJBIGRlc2NyaXB0aW9uIG9mIHRoZSBjaGFyYWN0ZXJcIixcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJpbyxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGJpbzogbmV3X3ZhbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBcIkNoYXJhY3RlciBUcmliZTogXCIsXG4gICAgICBoZWxwOiBcIlRoZSBuYW1lIG9mIHRoZSB0cmliZSBvZiB0aGUgY2hhcmFjdGVyXCIsXG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50cmliZSxcbiAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgIHZhbHVlOiAnQWdlbmVzJyxcbiAgICAgICAgbGFiZWw6ICdBZ2VuZXMnXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiAnRmVsZXMnLFxuICAgICAgICBsYWJlbDogJ0ZlbGVzJ1xuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogJ1ZlbnRoYWFsJyxcbiAgICAgICAgbGFiZWw6ICdWZW50aGFhbCdcbiAgICAgIH1dLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgdHJpYmU6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lXG4gICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrQ29udHJvbHMsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0FsaWdubWVudFRvb2xiYXIsIHtcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJsb2NrX2FsaWdubWVudCxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBibG9ja19hbGlnbm1lbnQ6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBbGlnbm1lbnRUb29sYmFyLCB7XG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50ZXh0X2FsaWdubWVudCxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB0ZXh0X2FsaWdubWVudDogbmV3X3ZhbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogcHJvcHMuYXR0cmlidXRlcy50ZXh0X2FsaWdubWVudFxuICAgICAgfVxuICAgIH0sIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkNoYXJhY3RlciBOYW1lOlwiKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2hhci1uYW1lXCJcbiAgICB9LCBwcm9wcy5hdHRyaWJ1dGVzLm5hbWUpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiQ2hhcmFjdGVyIEJpbzpcIiksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNoYXItYmlvXCJcbiAgICB9LCBwcm9wcy5hdHRyaWJ1dGVzLmJpbykpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJDaGFyYWN0ZXIgVHJpYmU6XCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjaGFyLXRyaWJlXCJcbiAgICB9LCBwcm9wcy5hdHRyaWJ1dGVzLnRyaWJlKSkpKV07XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGlnblwiLmNvbmNhdChwcm9wcy5hdHRyaWJ1dGVzLmJsb2NrX2FsaWdubWVudClcbiAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IHByb3BzLmF0dHJpYnV0ZXMudGV4dF9hbGlnbm1lbnRcbiAgICAgIH1cbiAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJDaGFyYWN0ZXIgTmFtZTpcIiksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNoYXItbmFtZVwiXG4gICAgfSwgcHJvcHMuYXR0cmlidXRlcy5uYW1lKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkNoYXJhY3RlciBCaW86XCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjaGFyLWJpb1wiXG4gICAgfSwgcHJvcHMuYXR0cmlidXRlcy5iaW8pKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiQ2hhcmFjdGVyIFRyaWJlOlwiKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2hhci10cmliZVwiXG4gICAgfSwgcHJvcHMuYXR0cmlidXRlcy50cmliZSkpKSk7XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/my-block/index.js\n");

/***/ })

/******/ });