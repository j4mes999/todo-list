import createProjectIcon from './media/plusSignYellow.svg';

function createProjectTree(){
    const projectTitle = document.createElement('p');
    projectTitle.classList.add('subTitle','subTitleProject');
    projectTitle.innerHTML = 'Projects';

    const icon = new Image();
    icon.classList.add('createProjectIcon');
    icon.src = createProjectIcon;

    const projectPane = document.createElement('projectPane');
    projectPane.classList.add('projectPane');
    projectPane.appendChild(projectTitle);
    projectPane.appendChild(icon);

    return projectPane;

}

export default createProjectTree;