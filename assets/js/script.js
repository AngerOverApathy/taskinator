let buttonEl = document.querySelector('#save-task')
let tasksToDoEl = document.querySelector('#tasks-to-do')

let createTaskHandler = function() {
    let lisItemEl = document.createElement('li')
    lisItemEl.className = 'task-item'
    lisItemEl.textContent = 'This is a new task'
    tasksToDoEl.appendChild(lisItemEl)
}

buttonEl.addEventListener('click', createTaskHandler)
