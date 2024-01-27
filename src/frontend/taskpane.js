import createTaskIcon from './media/plusSignWhite.svg'
import {createTaskForm, drawTask} from './components/taskForm';
import { createButton, createElement, createImage } from './components/htmlElement';
import { Task } from './constants/uiConstants';

let selectedProject = null;

function createTaskPane() {
   
    const taskPane = createElement(Task.PANE, Task.PANE);

    const addTaskButton = createButton(Task.CREATE_BUTTON,null,'button');
    addTaskButton.appendChild(createImage(Task.CREATE_ICON,createTaskIcon));
    addTaskButton.appendChild(createElement(Task.ADD_LABEL, Task.ADD_LABEL, 'Add Task'));
    
    taskPane.appendChild(addTaskButton);

    addTaskButtonAction(addTaskButton,taskPane);

    return taskPane;
}

function refreshTaskPane(project){
  
  const taskPane = document.getElementsByClassName(Task.PANE)[0];
  const projectInfo = document.getElementsByClassName(Task.PROJECT_INFO);
  if(projectInfo.length > 0){
    projectInfo[0].remove();
  }
  const innerValue = `Project ${project.name} details:`
  taskPane.insertBefore(createElement(Task.PROJECT_INFO, Task.PROJECT_INFO, innerValue), taskPane.firstChild);
  selectedProject = project; 
  console.log('taskPane.js project name: '+selectedProject.name);
  console.log('taskPane.js project number of tasks '+selectedProject.getNumberOfTasks());
  removePreviousTasks(taskPane);
  drawTasksFromProject(project);
}

function removePreviousTasks(taskPane){
  const tasks = document.getElementsByClassName(Task.INFO_CONTAINER);
  if( tasks.length > 0){
    //TODO remove each element using parent.removeChild(child);
    //tasks.forEach()
  }
}

function drawTasksFromProject(project){
  const taskPane = document.getElementsByClassName(Task.FORM)[0];
  project.getTasks().forEach(task => {
    console.log("taskPane.js task info"+task.title);
  });

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

export {createTaskPane, refreshTaskPane, selectedProject};