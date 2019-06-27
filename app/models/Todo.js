export default class Todo {
  constructor(data) {
    console.log('Stuff todo', data);
    this.completed = data.completed
    this._id = data._id
    this.description = data.description
  }

  get makeTemplate() {
    return `
    <div class="col-2">
    <input type="checkbox" name="vehicle" value="Bike">${this.description}<br>
    </div>
    `
  }
}