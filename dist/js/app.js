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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./src/js/login.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/js/todo.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst els = {\r\n    container: document.getElementById(\"login\"),\r\n    email: document.getElementById(\"email\"),\r\n    password: document.getElementById(\"password\"),\r\n    register: document.getElementById(\"register\"),\r\n    signin: document.getElementById(\"signin\"),\r\n    signout: document.getElementById(\"signout\")\r\n};\r\n\r\nfunction handleSignUp() {\r\n    const email = els.email.value;\r\n    const password = els.password.value;\r\n\r\n    if (email.length < 4) {\r\n        alert(\"Please enter an email address.\");\r\n        return;\r\n    }\r\n\r\n    if (password.length < 4) {\r\n        alert(\"Please enter a password.\");\r\n        return;\r\n    }\r\n    els.container.classList.add(\"hidden\");\r\n    // Sign in with email and pass.\r\n    firebase.auth().createUserWithEmailAndPassword(email, password)\r\n        .catch(function (error) {\r\n            // Handle Errors here.\r\n            const errorCode = error.code;\r\n            const errorMessage = error.message;\r\n            if (errorCode === \"auth/weak-password\") {\r\n                alert(\"The password is too weak.\");\r\n            } else {\r\n                alert(errorMessage);\r\n            }\r\n            els.container.classList.remove(\"hidden\");\r\n            console.log(error);\r\n        });\r\n}\r\n\r\n\r\nfunction handleLogIn() {\r\n    if (firebase.auth().currentUser) {\r\n        return;\r\n    }\r\n    const email = els.email.value;\r\n    const password = els.password.value;\r\n\r\n    if (email.length < 4) {\r\n        alert(\"Please enter an email address.\");\r\n        return;\r\n    }\r\n    if (password.length < 4) {\r\n        alert(\"Please enter a password.\");\r\n        return;\r\n    }\r\n    els.container.classList.add(\"hidden\");\r\n    // Sign in with email and pass.\r\n    firebase.auth().signInWithEmailAndPassword(email, password)\r\n        .catch(function (error) {\r\n        // Handle Errors here.\r\n            const errorCode = error.code;\r\n            const errorMessage = error.message;\r\n            if (errorCode === \"auth/wrong-password\") {\r\n                alert(\"Wrong password.\");\r\n            } else {\r\n                alert(errorMessage);\r\n            }\r\n            console.log(error);\r\n            els.container.classList.remove(\"hidden\");\r\n        });\r\n}\r\n\r\nfunction handleLogOut() {\r\n    firebase.auth().signOut();\r\n}\r\n\r\n\r\nfirebase.auth().onAuthStateChanged(function (user) {\r\n    if (user) {\r\n        els.container.classList.add(\"hidden\");\r\n    } else {\r\n        els.container.classList.remove(\"hidden\");\r\n    }\r\n});\r\n\r\nels.register.addEventListener(\"click\", handleSignUp);\r\nels.signin.addEventListener(\"click\", handleLogIn);\r\nels.signout.addEventListener(\"click\", handleLogOut);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/js/login.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/js/todoItem.js\");\n\r\n\r\nconst els = {\r\n    input: document.getElementById(\"new-todo\"),\r\n    addBtn: document.getElementById(\"add-todo\"),\r\n    container: document.getElementById(\"todo-container\"),\r\n    list: document.getElementById(\"todo-list\")\r\n};\r\n\r\nlet curUserId;\r\nlet todos = {};\r\n\r\nfunction onDatabaseUpdate(snapshot) {\r\n    let dbTodos = snapshot.val() || {};\r\n    let addToList = Object.keys(dbTodos).filter(function (id) {\r\n        return todos[id] === undefined;\r\n    });\r\n\r\n    let removeFromList = Object.keys(todos).filter(function (id) {\r\n        return dbTodos[id] === undefined;\r\n    });\r\n\r\n    addToList.forEach(function (id) {\r\n        let {task, done} = dbTodos[id];\r\n        let item = Object(_todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({id, task, done, parent: els.list});\r\n        todos[id] = item;\r\n    });\r\n\r\n    removeFromList.forEach(function (id) {\r\n        delete todos[id];\r\n    });\r\n}\r\n\r\nfirebase.auth().onAuthStateChanged(function (user) {\r\n    if (user) {\r\n        curUserId = user.uid;\r\n        firebase.database().ref(`users/${curUserId}`).on(\"value\", onDatabaseUpdate);\r\n        els.container.classList.remove(\"hidden\");\r\n    } else {\r\n        if (curUserId) {\r\n            firebase.database().ref(`users/${curUserId}`).off(\"value\", onDatabaseUpdate);\r\n            [...els.list.children].forEach(n => n.remove());\r\n        }\r\n        curUserId = undefined;\r\n        els.container.classList.add(\"hidden\");\r\n    }\r\n});\r\n\r\nfunction addTodo() {\r\n    const user = firebase.auth().currentUser;\r\n    if (user === undefined) {\r\n        return;\r\n    }\r\n    const task = els.input.value.trim();\r\n    if (task.length > 0) {\r\n        els.input.value = \"\";\r\n        let newTodoKey = firebase.database().ref(\"users\").child(user.uid).push().key;\r\n        firebase.database().ref(`users/${user.uid}/${newTodoKey}`).set({task, done: false});\r\n    }\r\n}\r\n\r\nels.input.addEventListener(\"keypress\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n        addTodo();\r\n    }\r\n});\r\nels.addBtn.addEventListener(\"click\", addTodo);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n});\n\n//# sourceURL=webpack:///./src/js/todo.js?");

/***/ }),

/***/ "./src/js/todoItem.js":
/*!****************************!*\
  !*** ./src/js/todoItem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createTodoEl(task, done) {\r\n    let container = document.createElement(\"div\");\r\n    let checkboxClass = done\r\n        ? \"checked\"\r\n        : \"\";\r\n    container.classList.add(\"todo-item\");\r\n    container.innerHTML = `\r\n        <span class=\"checkbox ${checkboxClass}\">\r\n            <i class= \"fas fa-check-circle\"></i>\r\n            <i class=\"far fa-circle\"></i>\r\n        </span>\r\n        <span class=\"task\">${task}</span>\r\n        <span class=\"delete\"><i class=\"fa fa-times\"></i></span>\r\n    `;\r\n    return container;\r\n}\r\n\r\nfunction createTodoItem(config) {\r\n    /*\r\n     * Private Variables for to-do object\r\n     */\r\n    const {id, task, parent} = config;\r\n    const userid = firebase.auth().getUid();\r\n    let completed = config.done === true;\r\n    const el = createTodoEl(task, completed);\r\n    const checkboxEl = el.getElementsByClassName(\"checkbox\")[0];\r\n    const deleteEl = el.getElementsByClassName(\"delete\")[0];\r\n    /*\r\n     * Events for to-do object\r\n     */\r\n    function toggleCompletion() {\r\n        firebase.database().ref(`users/${userid}/${id}`).update({done: !completed}).then(function () {\r\n            completed = !completed;\r\n            if (completed) {\r\n                checkboxEl.classList.add(\"checked\");\r\n            } else {\r\n                checkboxEl.classList.remove(\"checked\");\r\n            }\r\n        });\r\n    }\r\n    checkboxEl.addEventListener(\"click\", toggleCompletion);\r\n    function deleteItem() {\r\n        firebase.database().ref(`users/${userid}/${id}`).remove().then(function () {\r\n            parent.removeChild(el);\r\n        });\r\n    }\r\n    deleteEl.addEventListener(\"click\", deleteItem);\r\n    parent.appendChild(el);\r\n    /*\r\n     * Public to-do object\r\n     */\r\n    return {\r\n        getId() {\r\n            return id;\r\n        },\r\n        getTask() {\r\n            return task;\r\n        },\r\n        getCompleted() {\r\n            return completed;\r\n        },\r\n        toggleCompletion,\r\n        deleteItem\r\n    };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTodoItem);\n\n//# sourceURL=webpack:///./src/js/todoItem.js?");

/***/ })

/******/ });