import tasksData from "../data.json";
import { getApiCall } from './requester';

export default class service {
  static INSTANCE = new service();

  tasks;

  constructor() {
    this.tasks = null;
  }

  getAllFromJson = () => {
    if (!this.tasks) {
      this.tasks = tasksData;
    }
    return JSON.parse(JSON.stringify(this.tasks));
  };

  getTitlesFromApi = async (amount = 3) => {
    const titles = await getApiCall({
      path: `api?quantity=${amount}`
    })
    return titles;
  };

  completeTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return true;
  };
  
  create = (newTask) => {
    this.tasks = [newTask, ...this.tasks];
    return newTask;
  };
}
