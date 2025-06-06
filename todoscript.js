var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var form = document.querySelector('.todo-form');
var input = form.querySelector('.todo-input');
var priority = form.querySelector('.todo-priority');
var taskTemplate = document.querySelector('#task-template').content;
var newTaskTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('visually-hidden');
    } else {
        emptyListMessage.classList.add('visually-hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};
  
for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Important task';
    } else {
        priority.textContent = 'Ordinary task';
    }
};

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  
    var taskText = input.value;
    var task = newTaskTemplate.cloneNode(true);
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    if (priority.classList.contains('is-important')) {
        task.classList.add('is-important');
    }
    addCheckHandler(task);

    list.appendChild(task);
    toggleEmptyListMessage();
    newItemTitle.value = '';
});