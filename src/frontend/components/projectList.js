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
        projectList.appendChild(createProjectView(project));
        const projectPane = document.getElementsByClassName('subTitleProject')[0];
        projectPane.insertAdjacentElement('afterend',projectList);
        //projectList.insertAdjacentElement('afterbegin',projectPane[0]);
        
        //projectPane.insertBefore(projectList,document.getElementsByClassName('createProjectButton')[0]);
    }
    for(let project of projects){

    }
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