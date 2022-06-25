/**
 * Task Model
 * @property title
 */
class Task {
  static #tasks = [];
  static #id = 0;

  constructor({ title = "Default Title", description = "" }) {
    this.title = title;
    this.description = description;

    this.id = Task.#id++;
    Task.#tasks.push(this);
  }

  static remove(id) {
    Task.tasks.filter((task) => task.id !== id);
  }

  static update(id, updatedTask) {
    const taskID = Task.tasks.findIndex((task) => task.id === id);
    Task.tasks[taskID].title = updatedTask.title;
    Task.tasks[taskID].description = updatedTask.description;
  }
  static get all() {
    return Task.#tasks;
  }
}

export default Task;
