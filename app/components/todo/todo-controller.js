import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
	let todosElem = document.querySelector("#todos")
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(t => {
		// template += todo.completedTemplate
		if (t.completed == true) {
			template += `
				<li class="mb-2" onclick="app.controllers.todoController.getTodos()"><del>${t.description}</del>  &ensp; <button class="btn btn-sm btn-danger shadow" id="todo-delete" onclick="app.controllers.todoController.removeTodo('${t._id}')">Delete</button></li>
        `
		} else {
			template += `
        <li onclick="app.controllers.todoController.getTodos()">${t.description} &ensp;<input type="checkbox" class="todo-checkbox mt-2" name="completed"
				 onclick="app.controllers.todoController.toggleTodoStatus('${t._id}')"></li>
				`
		}
	})
	todosElem.innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}

export default class TodoController {
	constructor() {
		console.log("Todo Controller works")
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		// Don't forget to add your subscriber
		_todoService.addSubscriber('todos', _drawTodos)
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let newTodo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.description.value
		}

		_todoService.addTodo(newTodo)
		form.reset()
		_drawTodos()
	}

	getTodos() {
		_todoService
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}
}
