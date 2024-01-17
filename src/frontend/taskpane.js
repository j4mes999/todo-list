function createTaskPane() {

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('subTitle','subTitleTask');
    taskTitle.innerHTML = 'Project Details';

    const taskPane = document.createElement('taskPane');
    taskPane.classList.add('taskPane');
    taskPane.appendChild(taskTitle);

    return taskPane;

}

function refreshTaskPane(project){
  console.log('taskPane.js project name:'+project.name);
  console.log('taskPane.js project id:'+project.id);
}

export {createTaskPane, refreshTaskPane};