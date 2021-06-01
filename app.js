const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList= document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')




todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click',filterTodo)






function addTodo(event) {
    event.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const compeletedButton = document.createElement('button')
    compeletedButton.innerHTML = '<i class="fas fa-check"></i>'
    compeletedButton.classList.add("complete-btn")
    todoDiv.appendChild(compeletedButton)


    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)


    todoList.appendChild(todoDiv)


    // Clear input value 
    todoInput.value = ""

}

function deleteCheck (e) {
    const item = e.target
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = 'flex'
                break
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }
                else {
                    todo.style.display = 'none'
                }
                break
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }
                else {
                    todo.style.display = 'none'
                }
                break
        }
    })
}