/**
 * Task Model
 * @property title
 */
class Task {
  static #tasks = [];
  static #id = 0;

  constructor({
    title = "Default Title",
    description = "",
    done = false,
    ...props
  }) {
    this.title = title;
    this.description = description;
    this.done = done;
    this.props = props;

    // creation props
    this.createTime = new Date();

    // shared properties
    this.id = Task.#id++;
    Task.#tasks.push(this);
  }

  /* */
  makeDone() {
    this.done = true;
    this.doneTime = new Date();
  }
  update(updatedTask) {
    console.log("EXCUTED");

    this.description = updatedTask.description;
  }
  /* */
  static remove(id) {
    Task.#tasks = Task.#tasks.filter((task) => task.id !== id);
  }

  static get(id) {
    const taskID = Task.#tasks.findIndex((task) => task.id === id);
    return Task.#tasks[taskID];
  }

  // get methods
  static get all() {
    return Task.#tasks;
  }
}

export default Task;
