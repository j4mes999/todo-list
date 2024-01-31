import {createElement, createOption, createInput, createButton, createImage} from './htmlElement';
import { Task } from '../constants/uiConstants';
import { selectedProject } from '../taskpane';
import serviceCreateTask from '../../backend/service/taskService';
import { transformDateFormat } from '../../backend/utils/date';
import deleteIcon from '../media/delete.png';
import editIcon from '../media/edit.png';
import seeDetailsIcon from '../media/seeDetails.png';
import todoIcon from '../media/todoIconBlack.png';
import { deleteTask } from '../../backend/service/projectService';

const PLACE_HOLDER_TITLE = 'Enter Title';
const PLACE_HOLDER_DESCRIPTION = 'Enter Description';
const PLACE_HOLDER_DUE_DATE = 'Due Date';

function createTaskForm(){
  const createTaskFormContainer = createElement(Task.FORM, Task.FORM);
  const prioritySelect = createOptionList();
  const createButtonElement = createButton(Task.BUTTON_FORM, 'Create', 'submit');
  const cancelButtonElement = createButton(Task.BUTTON_FORM, 'Cancel', null);
  const buttonContainer = createElement(Task.BUTTON_CONTAINER, Task.BUTTON_CONTAINER);
  buttonContainer.appendChild(createButtonElement);
  buttonContainer.appendChild(cancelButtonElement);

  createTaskFormContainer.appendChild(createInput(Task.INPUT, PLACE_HOLDER_TITLE ));
  createTaskFormContainer.appendChild(createInput(Task.INPUT, PLACE_HOLDER_DESCRIPTION));
  const dueDate = createInput(Task.INPUT, PLACE_HOLDER_DUE_DATE);
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
  const defaultOption = createOption('optionFirst', 0, 'Select Priority');
  defaultOption.disabled = true;
  defaultOption.hidden = true;
  prioritySelect.appendChild(defaultOption);
  prioritySelect.appendChild(createOption('option', 1, 'Low'));
  prioritySelect.appendChild(createOption('option', 2, 'Normal'));
  prioritySelect.appendChild(createOption('option', 3, 'High'));
  return prioritySelect;
}

function cancelButtonAction(cancelButton){
  cancelButton.addEventListener('click', () => {
    const createTaskForm = document.getElementsByClassName(Task.FORM)[0];
    createTaskForm.classList.toggle(Task.FORM_HIDE);
    enableAddTaskButton();

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
    selectedProject.addTask(task);
    
    const taskPane = document.getElementsByClassName(Task.PANE)[0];
    taskPane.insertBefore(drawTask(task), taskForm);

    const createTaskForm = document.getElementsByClassName(Task.FORM)[0];
    createTaskForm.classList.toggle(Task.FORM_HIDE);
    enableAddTaskButton();
  });
}

function drawTask(task){
  
  const taskInfo = createElement('span',Task.INFO,task.title);
  const leftContainer = createElement(Task.LEFT_CONTAINER,Task.LEFT_CONTAINER);
  leftContainer.appendChild(createImage(Task.INFO_ICON,todoIcon));
  leftContainer.appendChild(taskInfo);
  
  const rightContainer = createElement(Task.RIGHT_CONTAINER,Task.RIGHT_CONTAINER);
  const deleteButton = createButton(Task.DELETE_BUTTON, null,'button');
  deleteButton.value = task.id;
  const viewDetailsButton = createButton(Task.VIEW_INFO,null, 'button');
  viewDetailsButton.value = task.id;
  const editDetailsButton = createButton(Task.EDIT_INFO,null, 'button');
  editDetailsButton.value = task.id;
  editDetailsButton.appendChild(createImage(Task.INFO_ICON,editIcon));
  deleteButton.appendChild(createImage(Task.INFO_ICON,deleteIcon))
  viewDetailsButton.appendChild(createImage(Task.INFO_ICON,seeDetailsIcon));
  rightContainer.appendChild(viewDetailsButton);
  rightContainer.appendChild(editDetailsButton);
  rightContainer.appendChild(deleteButton);

  const taskInfoContainer = createElement(Task.INFO_CONTAINER,Task.INFO_CONTAINER);
  taskInfoContainer.id = task.id;
  taskInfoContainer.appendChild(leftContainer);
  taskInfoContainer.appendChild(rightContainer);

  deleteButton.addEventListener('click', function(e) {
    deleteTaskAction(this.value);
  });

  viewDetailsButton.addEventListener('click', function(e){
    viewTaskAction(this.value);
  });

  return taskInfoContainer;
  
}

function deleteTaskAction(taskID){
  deleteTask(selectedProject,taskID);
  document.getElementById(taskID).remove();
}

function viewTaskAction(taskId){
  const viewForm = createElement(Task.VIEW_FORM,Task.VIEW_FORM);
  const task = selectedProject.getTask(taskId);
  const title = createElement('span', Task.INPUT,task.title);
  const description = createElement('span', Task.INPUT,task.description);
  const dueDate = createElement('span', Task.INPUT,task.dueDate);
  const priority = createElement('span', Task.INPUT,task.priority);

  viewForm.appendChild(title);
  viewForm.appendChild(description);
  viewForm.appendChild(dueDate);
  viewForm.appendChild(priority);

  const taskPane = document.getElementsByClassName(Task.PANE)[0];
  //taskPane.appendChild(viewForm);

  const uiContainer = getParentElement(taskId);
  uiContainer.insertAdjacentElement('afterend', viewForm);
}

function getParentElement(taskId){
  const element = document.getElementById(taskId);
  return element != null ? 
         element : document.getElementsByClassName(Task.INFO_CONTAINER)[0];
}

function resetTaskFormFields(){
  if( typeof document.getElementsByClassName(Task.FORM) !== "undefined"){
    let inputFields = document.getElementsByClassName(Task.INPUT);
    resetInputValue(inputFields[0], PLACE_HOLDER_TITLE);
    resetInputValue(inputFields[1], PLACE_HOLDER_DESCRIPTION);
    resetInputValue(inputFields[2], PLACE_HOLDER_DUE_DATE);
    inputFields[2].type = '';
    const selectElement = document.getElementsByClassName(Task.PRIORITY_SELECT)[0];
    selectElement.value = selectElement.firstChild.value;
  }
}

function resetInputValue(inputField, placeHolderValue){
  inputField.value = '';
  inputField.placeholder = placeHolderValue;
}

function enableAddTaskButton(){
  const addTaskButton = document.getElementsByClassName(Task.CREATE_BUTTON)[0];
  addTaskButton.disabled = false;
}

export {createTaskForm, drawTask, resetTaskFormFields};