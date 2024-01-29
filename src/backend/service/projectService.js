import createProject from "../project";
import {saveProject, removeTask} from "../persistence/storageManager";

function serviceCreateProject(name){
  const project = createProject(name);
  saveProject(project);

  return project;
}

function deleteTask(project, taskId){
  project.removeTask(taskId);
  removeTask(taskId);
}

export {serviceCreateProject, deleteTask};