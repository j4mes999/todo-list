import createProject from "../project";
import {saveProject} from "../persistence/storageManager";

function serviceCreateProject(name){
  const project = createProject(name);
  saveProject(project);

  return project;
}

export default serviceCreateProject;