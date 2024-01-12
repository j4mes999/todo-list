import folderIconImg from '../media/folderIconWhite.png'

let projects = [];

function addProjectToList(project){
    projects.push(project);
    refreshView();
}

function refreshView(){
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
    return null;
}