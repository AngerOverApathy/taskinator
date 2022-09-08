let formEl = document.querySelector('#task-form')
let tasksToDoEl = document.querySelector('#tasks-to-do')

let createTaskHandler = function(event) {
    event.preventDefault()

    let taskTypeInput = document.querySelector("select[name='task-type']").value
let taskNameInput = document.querySelector('input[name="task-name"]').value

    let lisItemEl = document.createElement('li')
    lisItemEl.className = 'task-item'

    let taskInfoEl = document.createElement('div')
    taskInfoEl.className = 'task-info'
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"

    lisItemEl.appendChild(taskInfoEl)
    tasksToDoEl.appendChild(lisItemEl)
}

formEl.addEventListener('submit', createTaskHandler)
