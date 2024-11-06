// Step 1: Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3: Function to add new task
function addToDo() {}

// Step 4: Function to delete or complete task
function deleteOrCompleteTodo() {}

// Step 5: Function to filter task based on completion status
function filterTodos() {}
