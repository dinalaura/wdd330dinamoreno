// TODOS APP
const input = document.querySelector(".input");
const formButton = document.querySelector(".button");
const todoList = document.querySelector(".list");
const filter = document.querySelector(".filter");

document.addEventListener("DOMContentLoaded", getTodos);
formButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filter.addEventListener("click", filterTodo);

function addTodo(e) {
  e.preventDefault();
  const toDo = input.value;
if(toDo){
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;

  saveLocalTodos(input.value);
  
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  input.value = "";
 
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="far fa-check-circle"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="far fa-times-circle"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}
input.value="";

}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {

    const todo = item.parentElement;
  
    removeLocalTodos(todo);
    todo.remove();

  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "active":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
// LOCAL STORAGE
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    input.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="far fa-check-circle"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="far fa-times-circle"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
  });
}
// DATE AND OTHERS
const clear = document.querySelector(".clear");
clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
})

const dateElement = document.querySelector("#date");
let options = {weekday: "long", month:"short", day:"numeric"};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);