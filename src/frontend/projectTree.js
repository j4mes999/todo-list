import createProjectIcon from './media/plusSignYellow.png';

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
        projectPane.insertBefore(createProjectForm(),createProjectLink);
    })

    return projectPane;

}

function createProjectForm(){
    const createProjectContainer = document.createElement('createProjectForm');
    
    return createProjectContainer;
}

export default createProjectTree;