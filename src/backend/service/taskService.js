import { saveTask, editTask, getTask } from "../persistence/storageManager";
import createTask from "../task";
import _ from 'lodash';

function serviceCreateTask(title, description, dueDate, priority, projectId){
    const task = createTask(title, description, dueDate, priority);
    saveTask(task, projectId);

    return task;
}

function serviceEditTask(task){
  const taskInStorage = getTask(task.id);
  if(_.isEqual(task,taskInStorage)){
    return false;
  }else{
    editTask(task);
    return true;
  }
}

export {serviceCreateTask, serviceEditTask};