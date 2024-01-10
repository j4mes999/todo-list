import createProject from "../project";
import saveProject from "./backend/persistence/storageManager";

function createProjectService(name){
  const project = createProject(name);
  saveProject(project);
}

export default createProjectService;