console.log('My code is running');
// Updated JavaScript

// Define variables
let taskList = [];
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteCompletedBtn = document.getElementById('deleteCompletedBtn');
const showAllBtn = document.getElementById('showAllBtn');
const showCompletedBtn = document.getElementById('showCompletedBtn');
const taskListElement = document.getElementById('taskList');

// Function to add task to the list
function addTask() {
    let task = taskInput.value.trim();
    if (task !== '') {
        taskList.push({ task: task, completed: false });
        taskInput.value = ''; // Clear input field
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    taskListElement.innerHTML = ''; // Clear previous tasks
    taskList.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task.task;
        if (task.completed) {
            li.classList.add('completed');
        }
        // Add event listener to mark task as completed
        li.addEventListener('click', () => {
            task.completed = !task.completed;
            displayTasks();
        });
        // Add delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.splice(index, 1);
            displayTasks();
        });
        li.appendChild(deleteBtn);
        taskListElement.appendChild(li);
    });
}

// Event listeners for buttons
addTaskBtn.addEventListener('click', addTask);
deleteCompletedBtn.addEventListener('click', () => {
    taskList = taskList.filter(task => !task.completed);
    displayTasks();
});
showAllBtn.addEventListener('click', () => {
    displayTasks();
});
showCompletedBtn.addEventListener('click', () => {
    let completedTasks = taskList.filter(task => task.completed);
    taskListElement.innerHTML = ''; // Clear previous tasks
    completedTasks.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task.task;
        li.classList.add('completed');
        taskListElement.appendChild(li);
    });
});

// Initial display of tasks
displayTasks();