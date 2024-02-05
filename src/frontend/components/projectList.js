import folderIconImg from '../media/folderIconWhite.png'
import {serviceCreateProject} from '../../backend/service/projectService';
import { refreshTaskPane } from '../taskpane';
import { Project } from '../constants/uiConstants';
import { createElement, createImage } from './htmlElement';
import { retrieveDataFromStorage } from '../../backend/persistence/storageManager';

let projects = [];

function addProjectToList(project){
    projects.push(project);
    refreshView(project);
}

function initializeProjectList(){
  const projectsFromStorage = retrieveDataFromStorage();
  if(projectsFromStorage === null || projectsFromStorage.length === 0){
    const defaultProject = serviceCreateProject('default');
    projects.push(defaultProject);
    refreshView(defaultProject);
  }else{
    projectsFromStorage.forEach((project) => {
        refreshView(project);
    });
    projects = projectsFromStorage;
  }
}

function refreshView(project){
    let projectList = document.getElementById(Project.LIST);
    if(projectList == null){
        projectList = createElement(Project.LIST, Project.LIST);
        projectList.setAttribute('id',Project.LIST);
        projectList.appendChild(createProjectView(project));
        const projectPane = document.getElementsByClassName(Project.SUB_TITLE)[0];
        projectPane.insertAdjacentElement('afterend',projectList);
        refreshTaskPane(project);
    }else{
        addProjectToListView(project);
    }
    
}

function addProjectToListView(project){
    const projectList = document.getElementById(Project.LIST);
    projectList.appendChild(createProjectView(project));
}

function createProjectView(project){
    const projectItem = createElement(Project.ITEM, Project.ITEM);
    projectItem.appendChild(createImage(Project.FOLDER_ICON,folderIconImg));
    projectItem.appendChild(createElement(Project.NAME, Project.NAME, project.name));

    projectItem.addEventListener('click', () => {
        refreshTaskPane(project);
    });

    return projectItem;
}

export {addProjectToList, initializeProjectList, projects};