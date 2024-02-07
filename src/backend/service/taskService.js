import { saveTask, editTask } from "../persistence/storageManager";
import createTask from "../task";

function serviceCreateTask(title, description, dueDate, priority, projectId){
    const task = createTask(title, description, dueDate, priority);
    saveTask(task, projectId);

    return task;
}

function serviceEditTask(task){
    //TODO verify if the task changed otherwise don't call editTask
    // this method can return a boolean indicating if the task was updated or not.
  editTask(task);
}



export {serviceCreateTask, serviceEditTask};