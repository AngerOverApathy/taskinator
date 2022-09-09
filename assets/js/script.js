let formEl = document.querySelector('#task-form')
let tasksToDoEl = document.querySelector('#tasks-to-do')
let taskIdCounter = 0

let taskFormHandler = function(event) {
    event.preventDefault()
    let taskTypeInput = document.querySelector("select[name='task-type']").value
    let taskNameInput = document.querySelector('input[name="task-name"]').value
    
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();
    
      let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    }

    createTaskEl(taskDataObj)
}

let createTaskEl = function(taskDataObj) {
    let lisItemEl = document.createElement('li')
    lisItemEl.className = 'task-item'
    lisItemEl.setAttribute('data-task-id', taskIdCounter)

    let taskInfoEl = document.createElement('div')
    taskInfoEl.className = 'task-info'
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"

    lisItemEl.appendChild(taskInfoEl)
    tasksToDoEl.appendChild(lisItemEl)

    taskIdCounter++
}

let createTaskActions = function(taskId) {
    let actionContainerEl = document.createElement('div')
    actionContainerEl.className = 'task-actions'

    let editButtonEl = document.createElement('button')
    editButtonEl.textContent = 'Edit'
    editButtonEl.setAttribute('data-task-id', taskId)

    actionContainerEl.appendChild(editButtonEl)

    let deleteButtonEl = document.createElement('button')
    deleteButtonEl.textContent = 'Delete'
    deleteButtonEl.className = 'btn delete-btn'
    deleteButtonEl.setAttribute('data-task-id', taskId)

    actionContainerEl.appendChild(deleteButtonEl)

    let statusSelectEl = document.createElement("select")
    statusSelectEl.className = "select-status"
    statusSelectEl.setAttribute("name", "status-change")
    statusSelectEl.setAttribute("data-task-id", taskId)

    let statusChoices = ['To Do', 'In Progress', 'Completed']
    for (let i = 0; i < statusChoices.length; i++) {
        // create option element
        let statusOptionEl = document.createElement("option")
        statusOptionEl.textContent = statusChoices[i]
        statusOptionEl.setAttribute("value", statusChoices[i])
      
        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    actionContainerEl.appendChild(statusSelectEl)

    return actionContainerEl;
}

formEl.addEventListener('submit', taskFormHandler)
