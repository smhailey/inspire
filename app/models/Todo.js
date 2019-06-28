export default class Todo {
  constructor(data) {
    console.log('Stuff todo', data);
    this.completed = data.completed
    this._id = data._id
    this.description = data.description
  }

  get completedTemplate() {
    return `
    <div class="col-4">
    <input type="checkbox" name="todo" value="completed">${this.description}<br>
    </div>
    `
  }

  get unCompletedTemplate() {
    return `
    <div class="col-4">
    <input type="checkbox" name="todo" value="completed">${this.description}<br>
    </div>
    `
  }
}