function createTodoEl(task, done) {
    let container = document.createElement("div");
    let checkboxClass = done
        ? "checked"
        : "";
    container.classList.add("todo-item");
    container.innerHTML = `
        <span class="checkbox ${checkboxClass}">
            <i class= "fas fa-check-circle"></i>
            <i class="far fa-circle"></i>
        </span>
        <span class="task">${task}</span>
        <span class="delete">×</span>
    `;
    return container;
}

function createTodoItem(config) {
    /*
     * Private Variables for to-do object
     */
    const {id, task, parent} = config;
    const userid = firebase.auth().getUid();
    let completed = config.done === true;
    const el = createTodoEl(task, completed);
    const checkboxEl = el.getElementsByClassName("checkbox")[0];
    const deleteEl = el.getElementsByClassName("delete")[0];
    /*
     * Events for to-do object
     */
    function toggleCompletion() {
        firebase.database().ref(`users/${userid}/${id}`).update({done: !completed}).then(function () {
            completed = !completed;
            if (completed) {
                checkboxEl.classList.add("checked");
            } else {
                checkboxEl.classList.remove("checked");
            }
        });
    }
    checkboxEl.addEventListener("click", toggleCompletion);
    function deleteItem() {
        firebase.database().ref(`users/${userid}/${id}`).remove().then(function () {
            parent.removeChild(el);
        });
    }
    deleteEl.addEventListener("click", deleteItem);
    parent.appendChild(el);
    /*
     * Public to-do object
     */
    return {
        getId() {
            return id;
        },
        getTask() {
            return task;
        },
        getCompleted() {
            return completed;
        },
        toggleCompletion,
        deleteItem
    };
}

export default createTodoItem;