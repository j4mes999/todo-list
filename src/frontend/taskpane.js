import createTaskIcon from './media/plusSignWhite.svg'
import createTaskForm from './components/taskForm';
import { createButton, createElement, createImage } from './components/htmlElement';
import { Task } from './constants/uiConstants';

function createTaskPane() {
   
    const taskPane = createElement(Task.PANE, Task.PANE);

    const addTaskButton = createButton(Task.CREATE_BUTTON,null,'button');
    addTaskButton.appendChild(createImage(Task.CREATE_ICON,createTaskIcon));
    addTaskButton.appendChild(createElement(Task.ADD_LABEL, Task.ADD_LABEL, 'Add Task'));
    
    //taskPane.appendChild(taskTitle);
    taskPane.appendChild(addTaskButton);

    addTaskButtonAction(addTaskButton,taskPane);

    return taskPane;
}

function refreshTaskPane(project){
  
  const taskPane = document.getElementsByClassName(Task.PANE)[0];
  const innerValue = `Project ${project.name} details:`
  taskPane.insertBefore(createElement(Task.PROJECT_INFO, Task.PROJECT_INFO, innerValue), taskPane.firstChild);

  console.log('taskPane.js project name:'+project.name);
  console.log('taskPane.js project id:'+project.id);
}

function addTaskButtonAction(addTaskButton, taskPane){
  addTaskButton.addEventListener('click', () => {
    const taskForm = document.getElementsByClassName(Task.FORM);
    if (taskForm.length == 0){
      taskPane.insertBefore(createTaskForm(),addTaskButton);
    }else {
      taskForm[0].classList.toggle(Task.FORM_HIDE);
    }
    
    addTaskButton.disabled = 'true';
  });
}

export {createTaskPane, refreshTaskPane};