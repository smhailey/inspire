import Todo from "../../models/Todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Sean/todos/',
	timeout: 5000
});

let _state = {
	todos: [],
	error: {},
}

let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	constructor() {
		console.log("Todo Service works")
	}

	get Todos() {
		return _state.todos
	}

	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get("")
			.then(res => {
				// WHAT DO YOU DO WITH THE RESPONSE?
				let serverTodos = res.data.data
				let todos = serverTodos.map(t => new Todo(t)).reverse()
				_setState('todos', todos)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(newTodo) {
		// debugger
		todoApi.post('', newTodo)
			.then(res => {
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
				console.log(res.data.message)
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		// This one is on you to write.... 
		// The http method is delete at the todoId
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))



		// .then(() => {
		// 	let todos = this.Todos
		// 	let index = todos.findIndex(t => t._id == todoId)
		// 	todos.splice(index, 1)
		// 	_setState('todos', todos)
		// })
	}
}
