import createTaskIcon from './media/plusSignWhite.svg'
import createTaskForm from './components/taskForm';
import { createButton, createElement, createImage, createInput } from './components/htmlElement';
import { Task } from './constants/uiConstants';

function createTaskPane() {

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('subTitle','subTitleTask');
    taskTitle.innerHTML = 'Project Details';
    //TODO refactor me please!
    const taskPane = document.createElement('taskPane');
    taskPane.classList.add('taskPane');

    const addTaskLabel = document.createElement('addTaskLabel');
    addTaskLabel.innerHTML = 'Add Task';
    addTaskLabel.classList.add('addTaskLabel');

    const addTaskButton = document.createElement('button');
    addTaskButton.type = 'button';
    addTaskButton.classList.add('createTaskButton');
    addTaskButton.appendChild(createImage(Task.CreateIcon,createTaskIcon));
    addTaskButton.appendChild(addTaskLabel);
    
    taskPane.appendChild(taskTitle);
    taskPane.appendChild(addTaskButton);

    addTaskButtonAction(addTaskButton,taskPane);

    return taskPane;

}

function refreshTaskPane(project){
  console.log('taskPane.js project name:'+project.name);
  console.log('taskPane.js project id:'+project.id);
}

function addTaskButtonAction(addTaskButton, taskPane){
  addTaskButton.addEventListener('click', () => {
    const taskForm = document.getElementsByClassName('createTaskForm');
    if (taskForm.length == 0){
      taskPane.insertBefore(createTaskForm(),addTaskButton);
    }else {
      taskForm[0].classList.toggle('createTaskFormHide');
    }
    
    addTaskButton.disabled = 'true';
  });
}

export {createTaskPane, refreshTaskPane};