import folderIconImg from '../media/folderIconWhite.png'
import serviceCreateProject from '../../backend/service/projectService';

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
    let projectList = document.getElementById('projectList');
    if(projectList == null){
        projectList = document.createElement('projectList');
        projectList.classList.add('projectList');
        projectList.setAttribute('id','projectList');
        projectList.appendChild(createProjectView(project));
        const projectPane = document.getElementsByClassName('subTitleProject')[0];
        projectPane.insertAdjacentElement('afterend',projectList);
    }else{
        addProjectToListView(project);
    }
   
}

function addProjectToListView(project){
    const projectList = document.getElementById('projectList');
    projectList.appendChild(createProjectView(project));
}

function createProjectView(project){
    const folderIcon = new Image();
    folderIcon.classList.add('folderIcon');
    folderIcon.src = folderIconImg;

    const projectName = document.createElement('projectName');
    projectName.innerHTML = project.name;
    projectName.classList.add('projectName');

    const projectItem = document.createElement('projectItem');
    projectItem.classList.add('projectItem');
    projectItem.appendChild(folderIcon);
    projectItem.appendChild(projectName);

    return projectItem;
}

export {addProjectToList, initializeProjectList};