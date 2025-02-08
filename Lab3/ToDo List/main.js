const formCode = document.querySelector('form');
const inputCode = document.getElementById('input');
const ulCode = document.getElementById('list');

let allTodos = [];

formCode.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const tasksTxt = inputCode.value.trim();
    if (tasksTxt.length > 0) {
        allTodos.push(tasksTxt);
        updateToDo();
        inputCode.value = "";
    }
}

function updateToDo() {
    ulCode.innerHTML = "";
    allTodos.forEach((toDo, toDoIdx) => {
        const toDoItem = createTodoItem(toDo, toDoIdx);
        ulCode.append(toDoItem);
    });
}

function createTodoItem(toDo, toDoIdx) {
    const toDoID = "toDo-" + toDoIdx;
    const todoLi = document.createElement("li");
    todoLi.className = "tasks";
    todoLi.innerHTML = `
        <input type="checkbox" id="${toDoID}">
        <label class="editCB" for="${toDoID}">
            <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        </label>
        <label for="${toDoID}" class="tasksTxt">
            ${toDo}
        </label>
        <button class="deleteBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    `;


    todoLi.querySelector(".deleteBtn").addEventListener("click", function () {
        deleteTodo(toDoIdx);
    });

    return todoLi;
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    updateToDo();
}
