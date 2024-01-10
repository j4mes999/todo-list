import createProjectIcon from './media/plusSignYellow.png';
import folderIconImg from './media/folderIconWhite.png';
//import createProjectService from '../backend/service/projectService';

function createProjectTree(){
    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('subTitle','subTitleProject');
    projectTitle.innerHTML = 'Projects';

    const createProjectLink = document.createElement('button');
    createProjectLink.type = 'button';
    createProjectLink.classList.add('createProjectButton');
    const icon = new Image();
    icon.classList.add('createProjectIcon');
    icon.src = createProjectIcon;
    createProjectLink.appendChild(icon);

    const projectPane = document.createElement('projectPane');
    projectPane.classList.add('projectPane');
    projectPane.appendChild(projectTitle);
    projectPane.appendChild(createProjectLink);

    createProjectLink.addEventListener('click', () => {
        const projectForms = document.getElementsByClassName('createProjectForm');
        if(projectForms.length == 0){
            projectPane.insertBefore(createProjectForm(),createProjectLink);
        }else{
            projectForms[0].style.display = 'block';
        }
        
        createProjectLink.disabled = 'true';
    })

    return projectPane;

}

function createProjectForm(){
    const createProjectContainer = document.createElement('createProjectForm');
    createProjectContainer.classList.add('createProjectForm');
    const folderIcon = new Image();
    folderIcon.classList.add('folderIcon');
    folderIcon.src = folderIconImg;
    const inputProjectName = document.createElement('input');
    inputProjectName.classList.add('inputProjectName');
    inputProjectName.placeholder = 'Enter project name';
    const inputContainer = document.createElement('inputContainer');
    inputContainer.classList.add('inputContainer');
    inputContainer.appendChild(folderIcon);
    inputContainer.appendChild(inputProjectName);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('projectFormButton');
    cancelButton.innerHTML = 'Cancel';
    const createButton = document.createElement('button');
    createButton.classList.add('projectFormButton');
    createButton.innerHTML = 'Create';
    const buttonContainer = document.createElement('buttonContainer');
    buttonContainer.classList.add('projectButtonContainer');
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(createButton);

    createProjectContainer.appendChild(inputContainer);
    createProjectContainer.appendChild(buttonContainer);

    cancelButtonEvent(cancelButton);
    createButtonEvent(createButton);

    return createProjectContainer;
}

export default createProjectTree;

function cancelButtonEvent(cancelButton) {
    cancelButton.addEventListener('click', () => {
        const projectForm = document.getElementsByClassName('createProjectForm');
        console.log('projectTree.js cancel button was clicked' + projectForm.getElementsByClassName);
        projectForm[0].style.display = 'none';
        const projectButton = document.getElementsByClassName('createProjectButton');
        projectButton[0].disabled = false;
    });
}

function createButtonEvent(createButton){
    createButton.addEventListener('click', () => {
        

    });
}
