/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


	 	// var  vue = new Vue( options );
	 	var app1 = new Vue( {
	 		// mounted element
		  	el: '#app-1',
		 	
		 	data: {
		   		message: 'Hello Vue.js!',
		  	},
		  	
		  	methods: {
		  		reverseMessage: function () {
      				this.message = this.message.split('').reverse().join('');
      			}
    		},
		  	
		  	watch : {},
		  	computed : {},
		  	//replaces mounted element, except if starts with "#"
		  	//template : "<h1>hi vue!</h1>",
		  	// LIFECYCLE HOOKS
		  	// beforeCreate : function() {
		  	// 	console.log("beforeCreate there was nothing");
		  	// },
		  	// created : function() {
		  	// 	console.log( "and The App was created " + this.message );
		  	// },
		  	// beforeMount : function() {
		  	// 	console.log( "beforeMount it was nothing");
		  	// },
		  	// mounted : function() {
		  	// 	console.log( "but html element was mounted" );
		  	// },
		  	// beforeUpdate : function() {
		  	// 	console.log( "and beforeUpdate was there")
		  	// },
		  	// updated : function() {
		  	// 	console.log("and the data was updated");
		  	// },
		  	// beforeDestroy : function() {
		  	// 	console.log("and beforeDestoy was ready");
		  	// },
		  	// destroyed : function() {
		  	// 	console.log("and could be destroyed.");
		  	// }
		} );

	 	// $ refs
	 	// app.$el === el
	 	// app.$data === data
	 	var app2 = new Vue( {
	 		el : "#app-2",
	 		data : {
	 			seen : true
	 		},
	 		methods : {
	 			toggleSeen : function() {
	 				this.seen ^= true;
	 			}
	 		}
	 	});
	 	
	 	Vue.component('todo-item', {
	 		props : ['todo'],
		  	template: '<li>{{todo.text}}</li>'
		})
	 	
	 	var app3 = new Vue( {
	 		el : "#app-3",
	 		data: {
		   		groceryList : [ 
		   			{ text : "carrots" },
		   			{ text : "bread" }, 
		   			{ text : "butter"}, 
		   			{ text : "eggs" }, 
		   			{ text : "meat" }
		   		]
		  	},
	 	});

/***/ })
/******/ ]);