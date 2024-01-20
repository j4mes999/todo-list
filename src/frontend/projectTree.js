import createProjectIcon from './media/plusSignYellow.png';
import folderIconImg from './media/folderIconWhite.png';
import serviceCreateProject from '../backend/service/projectService';
import { addProjectToList } from './components/projectList';
import { createButton, createElement, createImage, createInput } from './components/htmlElement';
import { Project } from './constants/uiConstants'; 

function createProjectTree(){
    const projectTitle = createElement('h2', 'subtitle', 'Projects');
    projectTitle.classList.add(Project.SubTitle);

    const createProjectLink = createButton(Project.CreateButtonMain, null, 'button');
    createProjectLink.appendChild(createImage(Project.CreateIcon, createProjectIcon));
    createProjectLink.appendChild(createElement(Project.CreateLabel, Project.CreateLabel, 'Add Project'));

    const projectPane = createElement(Project.Pane, Project.Pane);
    projectPane.appendChild(projectTitle);
    projectPane.appendChild(createProjectLink);

    createProjectEvent(createProjectLink, projectPane);

    return projectPane;

}

function createProjectForm(){
    const createProjectContainer = createElement(Project.CreateForm,Project.CreateForm);
    const inputProjectName = createInput(Project.InputName, 'Enter project name');
    const inputContainer = createElement(Project.InputContainer, Project.InputContainer);
    inputContainer.appendChild(createImage(Project.FolderIcon,folderIconImg));
    inputContainer.appendChild(inputProjectName);

    const cancelButton = createButton(Project.ButtonForm,'Cancel');
    const createButtonElement = createButton(Project.ButtonForm, 'Create', 'submit');
    const buttonContainer = createElement(Project.ButtonContainer, Project.ButtonClass);
    buttonContainer.appendChild(createButtonElement);
    buttonContainer.appendChild(cancelButton);

    createProjectContainer.appendChild(inputContainer);
    createProjectContainer.appendChild(buttonContainer);

    cancelButtonEvent(cancelButton);
    createButtonEvent(createButtonElement);
    inputProjectName.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            createProjectAction();
        }
    });

    return createProjectContainer;
}

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
    const projectName = document.getElementsByClassName(Project.InputName);
    const project = serviceCreateProject(projectName[0].value);
    addProjectToList(project);
    dissapearProjectForm();
    enableCreateProjectButton();
}

function createProjectEvent(createProjectLink, projectPane) {
    createProjectLink.addEventListener('click', () => {
        const projectForms = document.getElementsByClassName(Project.CreateForm);
        if (projectForms.length == 0) {
            projectPane.insertBefore(createProjectForm(), createProjectLink);
        } else {
            projectForms[0].style.display = 'block';
            document.getElementsByClassName(Project.InputName)[0].value = '';
        }
        document.getElementsByClassName(Project.InputName)[0].focus();
        createProjectLink.disabled = 'true';
    });
}

function dissapearProjectForm(){
    const projectForm = document.getElementsByClassName(Project.CreateForm)[0];
    projectForm.style.display = 'none';
}

function enableCreateProjectButton() {
    const projectButton = document.getElementsByClassName(Project.CreateButtonMain)[0];
    projectButton.disabled = false;
}

export default createProjectTree;
