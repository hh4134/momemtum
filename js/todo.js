const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function handelTodoSubmit(event){
    event.preventDefault();
    //console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newobj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newobj);
    paintTodo(newobj);
    saveTodos();
}

todoForm.addEventListener("submit", handelTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    todos = parsedTodos;
    console.log(parsedTodos);
    parsedTodos.forEach(paintTodo);
}