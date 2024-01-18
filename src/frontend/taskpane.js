import createTaskIcon from './media/plusSignWhite.svg'

function createTaskPane() {

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('subTitle','subTitleTask');
    taskTitle.innerHTML = 'Project Details';

    const taskPane = document.createElement('taskPane');
    taskPane.classList.add('taskPane');

    const createTaskImage = new Image();
    createTaskImage.classList.add('createTaskIcon');
    createTaskImage.src = createTaskIcon;

    const addTaskLabel = document.createElement('addTaskLabel');
    addTaskLabel.innerHTML = 'Add Task';
    addTaskLabel.classList.add('addTaskLabel');

    const addTaskContainer = document.createElement('button');
    addTaskContainer.type = 'button';
    addTaskContainer.classList.add('createTaskButton');
    addTaskContainer.appendChild(createTaskImage);
    addTaskContainer.appendChild(addTaskLabel);
    
    taskPane.appendChild(taskTitle);
    taskPane.appendChild(addTaskContainer);

    return taskPane;

}

function refreshTaskPane(project){
  console.log('taskPane.js project name:'+project.name);
  console.log('taskPane.js project id:'+project.id);
}

export {createTaskPane, refreshTaskPane};