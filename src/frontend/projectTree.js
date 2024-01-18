import createProjectIcon from './media/plusSignYellow.png';
import folderIconImg from './media/folderIconWhite.png';
import serviceCreateProject from '../backend/service/projectService';
import { addProjectToList } from './components/projectList';


const INPUT_PLACE_HOLDER = 'Enter project name'; 

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
    const createProjectLabel = document.createElement('createProjectLabel');
    createProjectLabel.innerHTML = 'Add Project';
    createProjectLabel.classList.add('createProjectLabel');
    createProjectLink.appendChild(icon);
    createProjectLink.appendChild(createProjectLabel);

    const projectPane = document.createElement('projectPane');
    projectPane.classList.add('projectPane');
    projectPane.appendChild(projectTitle);
    projectPane.appendChild(createProjectLink);

    createProjectEvent(createProjectLink, projectPane);

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
    inputProjectName.placeholder = INPUT_PLACE_HOLDER;
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
    createButton.type = 'submit';
    const buttonContainer = document.createElement('buttonContainer');
    buttonContainer.classList.add('projectButtonContainer');
    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(cancelButton);

    createProjectContainer.appendChild(inputContainer);
    createProjectContainer.appendChild(buttonContainer);

    cancelButtonEvent(cancelButton);
    createButtonEvent(createButton);
    inputProjectName.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            createProjectAction();
        }
    });

    return createProjectContainer;
}

export default createProjectTree;

//Event Listeners:
function cancelButtonEvent(cancelButton) {
    cancelButton.addEventListener('click', () => {
        dissapearProjectForm();
        enableCreateProjectButton();
    });
}

function createButtonEvent(createButton){
    createButton.addEventListener('click', () => {
        createProjectAction();
    });
}

function createProjectAction() {
    const projectName = document.getElementsByClassName('inputProjectName');
    const project = serviceCreateProject(projectName[0].value);
    addProjectToList(project);
    dissapearProjectForm();
    enableCreateProjectButton();
}

function createProjectEvent(createProjectLink, projectPane) {
    createProjectLink.addEventListener('click', () => {
        const projectForms = document.getElementsByClassName('createProjectForm');
        if (projectForms.length == 0) {
            projectPane.insertBefore(createProjectForm(), createProjectLink);
        } else {
            projectForms[0].style.display = 'block';
            document.getElementsByClassName('inputProjectName')[0].value = '';
        }
        document.getElementsByClassName('inputProjectName')[0].focus();
        createProjectLink.disabled = 'true';
    });
}

function dissapearProjectForm(){
    const projectForm = document.getElementsByClassName('createProjectForm');
    projectForm[0].style.display = 'none';
}

function enableCreateProjectButton() {
    const projectButton = document.getElementsByClassName('createProjectButton');
    projectButton[0].disabled = false;
}
