import folderIconImg from '../media/folderIconWhite.png'
import serviceCreateProject from '../../backend/service/projectService';
import { refreshTaskPane } from '../taskpane';
import { Project } from '../constants/uiConstants';
import { createElement, createImage } from './htmlElement';

let projects = [];

function addProjectToList(project){
    projects.push(project);
    refreshView(project);
}

function initializeProjectList(){
  const defaultProject = serviceCreateProject('default');
  projects.push(defaultProject);
  refreshView(defaultProject);
}

function refreshView(project){
    let projectList = document.getElementById(Project.List);
    if(projectList == null){
        projectList = createElement(Project.List, Project.List);
        projectList.setAttribute('id',Project.List);
        projectList.appendChild(createProjectView(project));
        const projectPane = document.getElementsByClassName('subTitleProject')[0];
        projectPane.insertAdjacentElement('afterend',projectList);
    }else{
        addProjectToListView(project);
    }
}

function addProjectToListView(project){
    const projectList = document.getElementById(Project.List);
    projectList.appendChild(createProjectView(project));
}

function createProjectView(project){
    const projectItem = createElement(Project.Item, Project.Item);
    projectItem.appendChild(createImage(Project.FolderIcon,folderIconImg));
    projectItem.appendChild(createElement(Project.Name, Project.Name, project.name));

    projectItem.addEventListener('click', () => {
        refreshTaskPane(project);
    });

    return projectItem;
}

export {addProjectToList, initializeProjectList};