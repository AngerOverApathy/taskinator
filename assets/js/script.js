let formEl = document.querySelector('#task-form')
let tasksToDoEl = document.querySelector('#tasks-to-do')

let createTaskHandler = function(event) {
    event.preventDefault()
    
    let lisItemEl = document.createElement('li')
    lisItemEl.className = 'task-item'
    lisItemEl.textContent = 'This is a new task'
    tasksToDoEl.appendChild(lisItemEl)
}

formEl.addEventListener('submit', createTaskHandler)
