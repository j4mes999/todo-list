import { saveTask } from "../persistence/storageManager";
import createTask from "../task";

function serviceCreateTask(title, description, dueDate, priority, projectId){
    const task = createTask(title, description, dueDate, priority);
    saveTask(task, projectId);

    return task;
}



export default serviceCreateTask;