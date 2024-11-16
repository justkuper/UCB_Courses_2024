const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// TODO: Puts saved on page
function renderTodos() {
  // TODO: Create a list and set it to empty
  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length;

  // TODO: Creates the list with items from todo.
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: The init() function fires when the page is loaded and calls the stored data from local storage
function init() {
  // TODO: turn string into an object
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  // TODO: Check if data is returned, if not exit out of the function
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: When the init function is executed, the code inside renderLastGrade function will also execute
  renderTodos();
}

function storeTodos() {
  // TODO: Create a string from the object and store it in local storage
  localStorage.setItem('todos', JSON.stringify(todos));
}
// TODO: Creats it in a form
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  // TODO: Check if data is returned.
  if (todoText === '') {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = '';

  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Trigger the function when the button is clicked
todoList.addEventListener('click', function (event) {
  const element = event.target;
  // TODO: Check if data is returned, if not exit out of the function
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);
    // TODO: Data stored locally
    storeTodos();
    renderTodos();
  }
});

init();
