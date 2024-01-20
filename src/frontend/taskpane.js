import createTaskIcon from './media/plusSignWhite.svg'
import createTaskForm from './components/taskForm';
import { createButton, createElement, createImage } from './components/htmlElement';
import { Task } from './constants/uiConstants';

function createTaskPane() {
    const taskTitle = createElement('p','subTitle', 'Project Details');
    taskTitle.classList.add(Task.SubTitle);
    const taskPane = createElement(Task.Pane, Task.Pane);

    const addTaskButton = createButton(Task.CreateButton,null,'button');
    addTaskButton.appendChild(createImage(Task.CreateIcon,createTaskIcon));
    addTaskButton.appendChild(createElement(Task.AddLabel, Task.AddLabel, 'Add Task'));
    
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
    const taskForm = document.getElementsByClassName(Task.Form);
    if (taskForm.length == 0){
      taskPane.insertBefore(createTaskForm(),addTaskButton);
    }else {
      taskForm[0].classList.toggle(Task.FormHide);
    }
    
    addTaskButton.disabled = 'true';
  });
}

export {createTaskPane, refreshTaskPane};