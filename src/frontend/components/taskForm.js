import {createElement, createOption, createInput, createButton, createImage} from './htmlElement';
import { Task } from '../constants/uiConstants';
import { selectedProject } from '../taskpane';
import serviceCreateTask from '../../backend/service/taskService';
import { transformDateFormat } from '../../backend/utils/date';
import deleteIcon from '../media/delete.png';
import editIcon from '../media/edit.png';
import seeDetailsIcon from '../media/seeDetails.png';
import todoIcon from '../media/todoIconBlack.png';

function createTaskForm(){
  const createTaskFormContainer = createElement(Task.FORM, Task.FORM);
  const prioritySelect = createOptionList();
  const createButtonElement = createButton(Task.BUTTON_FORM, 'Create', 'submit');
  const cancelButtonElement = createButton(Task.BUTTON_FORM, 'Cancel', null);
  const buttonContainer = createElement(Task.BUTTON_CONTAINER, Task.BUTTON_CONTAINER);
  buttonContainer.appendChild(createButtonElement);
  buttonContainer.appendChild(cancelButtonElement);

  createTaskFormContainer.appendChild(createInput(Task.INPUT, 'Enter Title'));
  createTaskFormContainer.appendChild(createInput(Task.INPUT, 'Enter Description'));
  const dueDate = createInput(Task.INPUT, 'Due Date');
  dueDate.onfocus = function(){
    this.type = 'date';
  };
  dueDate.id = Task.DUE_DATE_ID;
  createTaskFormContainer.appendChild(dueDate);
  createTaskFormContainer.appendChild(prioritySelect);
  createTaskFormContainer.appendChild(buttonContainer);

  cancelButtonAction(cancelButtonElement);
  createButtonAction(createButtonElement,createTaskFormContainer);

  return createTaskFormContainer;

}

function createOptionList() {
  const prioritySelect = createElement('select', Task.PRIORITY_SELECT);
  prioritySelect.appendChild(createOption('optionFirst', 0, 'Select Priority'));
  prioritySelect.appendChild(createOption('option', 1, 'Low'));
  prioritySelect.appendChild(createOption('option', 2, 'Normal'));
  prioritySelect.appendChild(createOption('option', 3, 'High'));
  return prioritySelect;
}

function cancelButtonAction(cancelButton){
  cancelButton.addEventListener('click', () => {
    const createTaskForm = document.getElementsByClassName(Task.FORM)[0];
    createTaskForm.classList.toggle(Task.FORM_HIDE);
    const addTaskButton = document.getElementsByClassName(Task.CREATE_BUTTON)[0];
    addTaskButton.disabled = false;

    document.getElementById(Task.DUE_DATE_ID).type = '';
  });
}

function createButtonAction(createButton, taskForm){
  createButton.addEventListener('click', () => {
    const userInput = document.getElementsByClassName(Task.INPUT);
    const dueDate = document.getElementById(Task.DUE_DATE_ID).value;
    const priority = document.getElementsByClassName(Task.PRIORITY_SELECT)[0];
    const formattedDate = transformDateFormat(dueDate.replace(/-/g, '/'));
    const task = serviceCreateTask(userInput[0].value,userInput[1].value,formattedDate,priority.value,selectedProject.id);
    drawTask(task,taskForm);
  });
}

function drawTask(task, taskForm){
  
  const taskInfo = createElement('span',Task.INFO,task.title);
  const leftContainer = createElement(Task.LEFT_CONTAINER,Task.LEFT_CONTAINER);
  leftContainer.appendChild(createImage(Task.INFO_ICON,todoIcon));
  leftContainer.appendChild(taskInfo);
  
  const rightContainer = createElement(Task.RIGHT_CONTAINER,Task.RIGHT_CONTAINER);
  rightContainer.appendChild(createImage(Task.INFO_ICON,seeDetailsIcon));
  rightContainer.appendChild(createImage(Task.INFO_ICON,editIcon));
  rightContainer.appendChild(createImage(Task.INFO_ICON,deleteIcon));

  const taskInfoContainer = createElement(Task.INFO_CONTAINER,Task.INFO_CONTAINER);
  taskInfoContainer.appendChild(leftContainer);
  taskInfoContainer.appendChild(rightContainer);

  const taskPane = document.getElementsByClassName(Task.PANE)[0];
  taskPane.insertBefore(taskInfoContainer,taskForm);

  //TODO draw the components in UI for task
}

export default createTaskForm;