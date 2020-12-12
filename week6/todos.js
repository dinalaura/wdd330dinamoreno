// SET DATE
const dateElement = document.querySelector("#date");
let options = {
  weekday: "long",
  month: "short",
  day: "numeric"
};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

const input = document.querySelector(".input");
const formButton = document.querySelector(".button");
const todoList = document.querySelector(".list");
const filter = document.querySelector(".filter");

document.addEventListener("DOMContentLoaded", getLocalStorage);
formButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteTask);
filter.addEventListener("click", filterList);

// ADD TASK, DELETE TASK AND FILTER LIST
function addTask(e) {
  e.preventDefault();
  const toDo = input.value;
  if (toDo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoLi = document.createElement("li");
    todoLi.innerText = input.value;

    toLocalStorage(input.value);

    todoLi.classList.add("todo-item");
    todoDiv.appendChild(todoLi);
    input.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="far fa-check-circle"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const timesButton = document.createElement("button");
    timesButton.innerHTML = `<i class="far fa-times-circle"></i>`;
    timesButton.classList.add("trash-btn");
    todoDiv.appendChild(timesButton);

    todoList.appendChild(todoDiv);
  }
  input.value = "";

}

function deleteTask(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {

    const todo = item.parentElement;

    removeLocalStorage(todo);
    todo.remove();

  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterList(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
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

// RETRIVE FROM LOCAL STORAGE
function getLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoLi = document.createElement("li");
    todoLi.innerText = todo;
    todoLi.classList.add("todo-item");
    todoDiv.appendChild(todoLi);
    input.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="far fa-check-circle"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const timesButton = document.createElement("button");
    timesButton.innerHTML = `<i class="far fa-times-circle"></i>`;
    timesButton.classList.add("trash-btn");
    todoDiv.appendChild(timesButton);

    todoList.appendChild(todoDiv);
  });
}