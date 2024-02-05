import createProject from "../project";
import createTask from "../task";
import { getDateStringFromTimeStamp } from "../utils/date";

function saveProject(project){
    localStorage.setItem('p'+project.id, JSON.stringify(project));
    console.log(`Project saved with id: ${project.id}`);
}

function saveTask(task,projectId){
    task.projectId = projectId;
    localStorage.setItem('t'+task.id, JSON.stringify(task));
}

function clearStorage(){
    localStorage.clear();
}

function retrieveDataFromStorage(){
    const projects = [];
    const tasks = [];

    if(localStorage.length == 0){
        console.log('Local Storage is empty no data for retreiving');
        return null;
    }

    console.log('Retreiving data from local storage ...');

    loadProjectsAndTasks(projects,tasks);
    linkProjectsAndTasks(projects,tasks);

    console.log('Done!');

    return projects;
}

function removeTask(taskID){
    localStorage.removeItem('t'+taskID);
}

function loadProjectsAndTasks(projects, tasks){
    for( let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const element = getElementFromStorage(key);
        switch (key.charAt(0)) {
            case 'p':
                projects.push(createProjectFromFactory(element));
                break;
            case 't':
                tasks.push(createTaskFromFactory(element));
                break;
        }
    }
}

function createProjectFromFactory(element){
    return createProject(element.name,element.description,element.id);

}

function createTaskFromFactory(element){
  return createTask(element.title, element.description, element.dueDate, element.priority,element.id,element.projectId);
}

function linkProjectsAndTasks(projects, tasks){
    projects.forEach(p => {
        getTasksFromProject(p, tasks);
    });
}

function getTasksFromProject(project, tasks){
    tasks.forEach(t => {
        if(t.projectId === project.id){
            project.addTask(t);
        }
    })

}

function getElementFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}
    
export {saveProject, saveTask, clearStorage, retrieveDataFromStorage, removeTask};