const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task-button');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === '' || description === '') {
    alert('Please fill out both fields.');
    return;
  }

  const task = {
    title,
    description,
    completed: false,
  };

  tasks.push(task);

  renderTaskList();

  titleInput.value = '';
  descriptionInput.value = '';
}

function renderTaskList() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const taskListItem = document.createElement('li');
    taskListItem.className = 'list-item';

    const taskTitle = document.createElement('span');
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => deleteTask(task));

    taskListItem.appendChild(taskTitle);
    taskListItem.appendChild(taskDescription);
    taskListItem.appendChild(deleteButton);

    taskList.appendChild(taskListItem);
  });
}

function deleteTask(task) {
  const taskIndex = tasks.indexOf(task);
  tasks.splice(taskIndex, 1);

  renderTaskList();
}