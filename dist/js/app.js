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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./src/js/login.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/js/todo.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst els = {\n    container: document.getElementById(\"login\"),\n    email: document.getElementById(\"email\"),\n    password: document.getElementById(\"password\"),\n    register: document.getElementById(\"register\"),\n    signin: document.getElementById(\"signin\"),\n    signout: document.getElementById(\"signout\")\n};\n\nfunction handleSignUp() {\n    const email = els.email.value;\n    const password = els.password.value;\n    if (email.length < 4) {\n        alert(\"Please enter an email address.\");\n        return;\n    }\n    if (password.length < 4) {\n        alert(\"Please enter a password.\");\n        return;\n    }\n    els.container.classList.add(\"hidden\");\n    // Sign in with email and pass.\n    firebase.auth().createUserWithEmailAndPassword(email, password)\n        .catch(function (error) {\n            // Handle Errors here.\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            if (errorCode === \"auth/weak-password\") {\n                alert(\"The password is too weak.\");\n            } else {\n                alert(errorMessage);\n            }\n            els.container.classList.remove(\"hidden\");\n            console.log(error);\n        });\n}\n\n\nfunction handleLogIn() {\n    if (firebase.auth().currentUser) {\n        return;\n    }\n    const email = els.email.value;\n    const password = els.password.value;\n    if (email.length < 4) {\n        alert(\"Please enter an email address.\");\n        return;\n    }\n    if (password.length < 4) {\n        alert(\"Please enter a password.\");\n        return;\n    }\n    els.container.classList.add(\"hidden\");\n    // Sign in with email and pass.\n    firebase.auth().signInWithEmailAndPassword(email, password)\n        .catch(function (error) {\n        // Handle Errors here.\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            if (errorCode === \"auth/wrong-password\") {\n                alert(\"Wrong password.\");\n            } else {\n                alert(errorMessage);\n            }\n            console.log(error);\n            els.container.classList.remove(\"hidden\");\n        });\n}\n\nfunction handleLogOut() {\n    firebase.auth().signOut();\n}\n\n\nfirebase.auth().onAuthStateChanged(function (user) {\n    if (user) {\n        els.container.classList.add(\"hidden\");\n    } else {\n        els.container.classList.remove(\"hidden\");\n    }\n});\n\nels.register.addEventListener(\"click\", handleSignUp);\nels.signin.addEventListener(\"click\", handleLogIn);\nels.signout.addEventListener(\"click\", handleLogOut);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/js/login.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/js/todoItem.js\");\n\n\nconst els = {\n    input: document.getElementById(\"new-todo\"),\n    addBtn: document.getElementById(\"add-todo\"),\n    container: document.getElementById(\"todo-container\"),\n    list: document.getElementById(\"todo-list\")\n};\n\nlet curUserId;\nlet todos = {};\n\nfunction onDatabaseUpdate(snapshot) {\n    let dbTodos = snapshot.val() || {};\n    let addToList = Object.keys(dbTodos).filter(function (id) {\n        return todos[id] === undefined;\n    });\n    let removeFromList = Object.keys(todos).filter(function (id) {\n        return dbTodos[id] === undefined;\n    });\n    addToList.forEach(function (id) {\n        let {task, done} = dbTodos[id];\n        let item = Object(_todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({id, task, done, parent: els.list});\n        todos[id] = item;\n    });\n    removeFromList.forEach(function (id) {\n        delete todos[id];\n    });\n}\n\nfirebase.auth().onAuthStateChanged(function (user) {\n    if (user) {\n        curUserId = user.uid;\n        firebase.database().ref(`users/${curUserId}`).on(\"value\", onDatabaseUpdate);\n        els.container.classList.remove(\"hidden\");\n    } else {\n        if (curUserId) {\n            firebase.database().ref(`users/${curUserId}`).off(\"value\", onDatabaseUpdate);\n        }\n        curUserId = undefined;\n        els.container.classList.add(\"hidden\");\n    }\n});\n\nfunction addTodo() {\n    const user = firebase.auth().currentUser;\n    if (user === undefined) {\n        return;\n    }\n    const task = els.input.value.trim();\n    if (task.length > 0) {\n        els.input.value = \"\";\n        let newTodoKey = firebase.database().ref(\"users\").child(user.uid).push().key;\n        firebase.database().ref(`users/${user.uid}/${newTodoKey}`).set({task, done: false});\n    }\n}\n\nels.input.addEventListener(\"keypress\", function (event) {\n    if (event.key === \"Enter\") {\n        addTodo();\n    }\n});\nels.addBtn.addEventListener(\"click\", addTodo);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n});\n\n//# sourceURL=webpack:///./src/js/todo.js?");

/***/ }),

/***/ "./src/js/todoItem.js":
/*!****************************!*\
  !*** ./src/js/todoItem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createTodoEl(task, done) {\n    let container = document.createElement(\"div\");\n    let checkboxClass = done\n        ? \"checked\"\n        : \"\";\n    container.classList.add(\"todo-item\");\n    container.innerHTML = `\n        <span class=\"checkbox ${checkboxClass}\">\n            <i class= \"fas fa-check-circle\"></i>\n            <i class=\"far fa-circle\"></i>\n        </span>\n        <span class=\"task\">${task}</span>\n        <span class=\"delete\">×</span>\n    `;\n    return container;\n}\n\nfunction createTodoItem(config) {\n    /*\n     * Private Variables for to-do object\n     */\n    const {id, task, parent} = config;\n    const userid = firebase.auth().getUid();\n    let completed = config.done === true;\n    const el = createTodoEl(task, completed);\n    const checkboxEl = el.getElementsByClassName(\"checkbox\")[0];\n    const deleteEl = el.getElementsByClassName(\"delete\")[0];\n    /*\n     * Events for to-do object\n     */\n    function toggleCompletion() {\n        firebase.database().ref(`users/${userid}/${id}`).update({done: !completed}).then(function () {\n            completed = !completed;\n            if (completed) {\n                checkboxEl.classList.add(\"checked\");\n            } else {\n                checkboxEl.classList.remove(\"checked\");\n            }\n        });\n    }\n    checkboxEl.addEventListener(\"click\", toggleCompletion);\n    function deleteItem() {\n        firebase.database().ref(`users/${userid}/${id}`).remove().then(function () {\n            parent.removeChild(el);\n        });\n    }\n    deleteEl.addEventListener(\"click\", deleteItem);\n    parent.appendChild(el);\n    /*\n     * Public to-do object\n     */\n    return {\n        getId() {\n            return id;\n        },\n        getTask() {\n            return task;\n        },\n        getCompleted() {\n            return completed;\n        },\n        toggleCompletion,\n        deleteItem\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTodoItem);\n\n//# sourceURL=webpack:///./src/js/todoItem.js?");

/***/ })

/******/ });