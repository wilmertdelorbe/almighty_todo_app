const todoInputElement = $('#addTodoInput');
const addTodoBtn = $('#addTodoBtn')
const todoList = $('#todoList');

const addTodoHandler = function(event) {
    event.preventDefault();
    const todoInputValue + todoInputElement.val();
    if (todoInputValue.trim().length === 0){
        alert("Todo cannot be empty");
        return;
    }
    todos.push(todoInputValue);
    const todoListElement = $(todoInputValue);
    todoListappend

}