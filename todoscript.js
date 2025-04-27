let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Important task';
  } else {
    priority.textContent = 'Ordinary task';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  
  let newTask = document.createElement('li');
  if (priority.classList.contains('is-important')) {
  newTask.classList.add('is-important');
  } else {
  }
  newTask.textContent = input.value;
  input.value = '';
  list.append(newTask);
  input.value = '';
};