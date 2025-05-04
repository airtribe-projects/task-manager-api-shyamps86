const CrudRespositary=require("./crudRepositary.js")
const tasks=require("../../task.json")
class TaskRepositary extends CrudRespositary {
  constructor() {
    // console.log( tasks.tasks)
    super(tasks.tasks);
  }
  getAllByCompleted(data) {
    const sample = tasks.tasks.filter((value) => value.completed === data);
    return sample;
  }
}

module.exports =  TaskRepositary ;
