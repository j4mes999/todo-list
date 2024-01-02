function createTaskPane() {

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('subTitle','subTitleTask');
    taskTitle.innerHTML = 'Project Details';

    const taskPane = document.createElement('taskPane');
    taskPane.classList.add('taskPane');
    taskPane.appendChild(taskTitle);

    return taskPane;

}

export default createTaskPane;