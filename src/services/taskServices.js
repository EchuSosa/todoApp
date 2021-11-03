import tasksData from "../data.json";

export default class service {
  static INSTANCE = new service();

  tasks;

  constructor() {
    this.tasks = null;
  }

  getAll = () => {
    if (!this.tasks) {
      this.tasks = tasksData;
    }
    return JSON.parse(JSON.stringify(this.tasks));
  };

  delete = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return true;
  };

  create = (newTask) => {
    this.tasks = [newTask, ...this.tasks];
    return newTask;
  };
}
