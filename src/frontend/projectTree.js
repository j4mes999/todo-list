import createProjectIcon from './media/plusSignYellow.png';
import folderIconImg from './media/folderIconWhite.png';
import {serviceCreateProject} from '../backend/service/projectService';
import { addProjectToList, projects } from './components/projectList';
import { createButton, createElement, createImage, createInput } from './components/htmlElement';
import { Project } from './constants/uiConstants'; 

function createProjectTree(){
    const projectTitle = createElement('h2', 'subtitle', 'Projects');
    projectTitle.classList.add(Project.SUB_TITLE);

    const createProjectLink = createButton(Project.CREATE_BUTTON_MAIN, null, 'button');
    createProjectLink.appendChild(createImage(Project.CREATE_ICON, createProjectIcon));
    createProjectLink.appendChild(createElement(Project.CREATE_LABEL, Project.CREATE_LABEL, 'Add Project'));

    const projectPane = createElement(Project.PANE, Project.PANE);
    projectPane.appendChild(projectTitle);
    projectPane.appendChild(createProjectLink);

    createProjectEvent(createProjectLink, projectPane);

    return projectPane;

}

function createProjectForm(){
    const createProjectContainer = createElement(Project.CREATE_FORM,Project.CREATE_FORM);
    const inputProjectName = createInput(Project.INPUT_NAME, 'Enter project name');
    const inputContainer = createElement(Project.INPUT_CONTAINER, Project.INPUT_CONTAINER);
    inputContainer.appendChild(createImage(Project.FOLDER_ICON,folderIconImg));
    inputContainer.appendChild(inputProjectName);

    const cancelButton = createButton(Project.BUTTON_FORM,'Cancel');
    const createButtonElement = createButton(Project.BUTTON_FORM, 'Create', 'submit');
    const buttonContainer = createElement(Project.BUTTON_CONTAINER, Project.BUTTON_CLASS);
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
    const projectName = document.getElementsByClassName(Project.INPUT_NAME);
    if( projects.some( p => p.name.toLowerCase() === projectName[0].value.toLowerCase())){
        alert('Cannot create projects with the same name');
        return;
    }
    const project = serviceCreateProject(projectName[0].value);
    addProjectToList(project);    
    dissapearProjectForm();
    enableCreateProjectButton();
}

function createProjectEvent(createProjectLink, projectPane) {
    createProjectLink.addEventListener('click', () => {
        const projectForms = document.getElementsByClassName(Project.CREATE_FORM);
        if (projectForms.length == 0) {
            projectPane.insertBefore(createProjectForm(), createProjectLink);
        } else {
            projectForms[0].classList.toggle(Project.CREATE_FORM_HIDE);
            document.getElementsByClassName(Project.INPUT_NAME)[0].value = '';
        }
        document.getElementsByClassName(Project.INPUT_NAME)[0].focus();
        createProjectLink.disabled = 'true';
    });
}

function dissapearProjectForm(){
    const projectForm = document.getElementsByClassName(Project.CREATE_FORM)[0];
    projectForm.classList.toggle(Project.CREATE_FORM_HIDE);
}

function enableCreateProjectButton() {
    const projectButton = document.getElementsByClassName(Project.CREATE_BUTTON_MAIN)[0];
    projectButton.disabled = false;
}

export default createProjectTree;
