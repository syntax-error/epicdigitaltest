import createTodoItem from "./todoItem";

const els = {
    input: document.getElementById("new-todo"),
    addBtn: document.getElementById("add-todo"),
    container: document.getElementById("todo-container"),
    list: document.getElementById("todo-list")
};

let curUserId;
let todos = {};

function onDatabaseUpdate(snapshot) {
    let dbTodos = snapshot.val() || {};
    let addToList = Object.keys(dbTodos).filter(function (id) {
        return todos[id] === undefined;
    });
    let removeFromList = Object.keys(todos).filter(function (id) {
        return dbTodos[id] === undefined;
    });
    addToList.forEach(function (id) {
        let {task, done} = dbTodos[id];
        let item = createTodoItem({id, task, done, parent: els.list});
        todos[id] = item;
    });
    removeFromList.forEach(function (id) {
        delete todos[id];
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        curUserId = user.uid;
        firebase.database().ref(`users/${curUserId}`).on("value", onDatabaseUpdate);
        els.container.classList.remove("hidden");
    } else {
        if (curUserId) {
            firebase.database().ref(`users/${curUserId}`).off("value", onDatabaseUpdate);
            [...els.list.children].forEach(n => n.remove());
        }
        curUserId = undefined;
        els.container.classList.add("hidden");
    }
});

function addTodo() {
    const user = firebase.auth().currentUser;
    if (user === undefined) {
        return;
    }
    const task = els.input.value.trim();
    if (task.length > 0) {
        els.input.value = "";
        let newTodoKey = firebase.database().ref("users").child(user.uid).push().key;
        firebase.database().ref(`users/${user.uid}/${newTodoKey}`).set({task, done: false});
    }
}

els.input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
els.addBtn.addEventListener("click", addTodo);

export default {
};