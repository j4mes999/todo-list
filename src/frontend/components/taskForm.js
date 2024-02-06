import { createElement, createOption, createInput, createButton, createImage, createInputForEdit } from './htmlElement';
import { Task } from '../constants/uiConstants';
import { selectedProject } from '../taskpane';
import { serviceCreateTask, serviceEditTask } from '../../backend/service/taskService';
import { transformDateFormat, transformTsForInputDate, transformDateToInputView } from '../../backend/utils/date';
import deleteIcon from '../media/delete.png';
import editIcon from '../media/edit.png';
import seeDetailsIcon from '../media/seeDetails.png';
import todoIcon from '../media/todoIconBlack.png';
import { deleteTask } from '../../backend/service/projectService';
import createTask from '../../backend/task';

const PLACE_HOLDER_TITLE = 'Enter Title';
const PLACE_HOLDER_DESCRIPTION = 'Enter Description';
const PLACE_HOLDER_DUE_DATE = 'Due Date';

function createTaskForm(task, formName, formNameHide) {
  const taskFormContainer = createElement(formName, formName);
  const prioritySelect = createOptionList();
  let createButtonElement;
  let editButtonElement;
  const buttonContainer = createElement(Task.BUTTON_CONTAINER, Task.BUTTON_CONTAINER);
  if(task === null){
    createButtonElement = createButton(Task.BUTTON_FORM, 'Create', 'submit');
    taskFormContainer.appendChild(createInput(Task.INPUT, PLACE_HOLDER_TITLE));
    taskFormContainer.appendChild(createInput(Task.INPUT, PLACE_HOLDER_DESCRIPTION));
    const dueDate = createInput(Task.INPUT, PLACE_HOLDER_DUE_DATE);
    dueDate.onfocus = function () {
      this.type = 'date';
    };
    dueDate.id = Task.DUE_DATE_ID;
    taskFormContainer.appendChild(dueDate);
    buttonContainer.appendChild(createButtonElement);
    createButtonAction(createButtonElement, taskFormContainer);
  }else{
    editButtonElement = createButton(Task.BUTTON_FORM, 'Edit', 'submit');
    taskFormContainer.appendChild(createInputForEdit(Task.INPUT, task.title));
    taskFormContainer.appendChild(createInputForEdit(Task.INPUT, task.description));
    const dueDate = createInputForEdit(Task.INPUT, transformTsForInputDate(task.dueDate));
    dueDate.type = 'date';
    taskFormContainer.appendChild(dueDate);
    prioritySelect.value = task.priority
    buttonContainer.appendChild(editButtonElement);
    editButtonAction(editButtonElement, taskFormContainer, task);
  }
  const cancelButtonElement = createButton(Task.BUTTON_FORM, 'Cancel', null);
  buttonContainer.appendChild(cancelButtonElement);

  taskFormContainer.appendChild(prioritySelect);
  taskFormContainer.appendChild(buttonContainer);

  cancelButtonAction(cancelButtonElement,formName, formNameHide);
  

  return taskFormContainer;

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
  prioritySelect.value = 0;
  return prioritySelect;
}

function cancelButtonAction(cancelButton,formName, formNameHide) {
  cancelButton.addEventListener('click', () => {
    if(formName === Task.EDIT_FORM){
      document.getElementsByClassName(Task.EDIT_FORM)[0].remove();
    }else{
      const createTaskForm = document.getElementsByClassName(formName)[0];
      createTaskForm.classList.toggle(formNameHide);
      enableAddTaskButton();
      document.getElementById(Task.DUE_DATE_ID).type = '';
    }    
    disableAllButtons(false);
  });
}

function createButtonAction(createButton, taskForm) {
  createButton.addEventListener('click', () => {
    const userInput = document.getElementsByClassName(Task.INPUT);
    const dueDate = document.getElementById(Task.DUE_DATE_ID).value;
    const priority = document.getElementsByClassName(Task.PRIORITY_SELECT)[0];
    const formattedDate = transformDateFormat(dueDate.replace(/-/g, '/'));
    const task = serviceCreateTask(userInput[0].value, userInput[1].value, formattedDate, priority.value, selectedProject.id);
    selectedProject.addTask(task);

    const taskPane = document.getElementsByClassName(Task.PANE)[0];
    taskPane.insertBefore(drawTask(task), taskForm);

    const createTaskForm = document.getElementsByClassName(Task.FORM)[0];
    createTaskForm.classList.toggle(Task.FORM_HIDE);
    enableAddTaskButton();
  });
}

function editButtonAction(editButton, taskForm, task){
  editButton.addEventListener('click', () => {
    console.log('taskForm.js Edit button was clicked');
    console.log(`taskForm.js editButonAction task in it: ${task.id}`);
    for (let element of taskForm.children){
      console.log('taskFOrm.js editButtonAction element: '+ element.value);
    }
  });
}

function drawTask(task) {

  const taskInfo = createElement('span', Task.INFO, task.title);
  const leftContainer = createElement(Task.LEFT_CONTAINER, Task.LEFT_CONTAINER);
  leftContainer.appendChild(createImage(Task.INFO_ICON, todoIcon));
  leftContainer.appendChild(taskInfo);

  const rightContainer = createElement(Task.RIGHT_CONTAINER, Task.RIGHT_CONTAINER);
  const deleteButton = createButton(Task.DELETE_BUTTON, null, 'button');
  deleteButton.value = task.id;
  const viewDetailsButton = createButton(Task.VIEW_INFO, null, 'button');
  viewDetailsButton.value = task.id;
  const editDetailsButton = createButton(Task.EDIT_INFO, null, 'button');
  editDetailsButton.value = task.id;
  editDetailsButton.appendChild(createImage(Task.INFO_ICON, editIcon));
  deleteButton.appendChild(createImage(Task.INFO_ICON, deleteIcon))
  viewDetailsButton.appendChild(createImage(Task.INFO_ICON, seeDetailsIcon));
  rightContainer.appendChild(viewDetailsButton);
  rightContainer.appendChild(editDetailsButton);
  rightContainer.appendChild(deleteButton);

  const taskInfoContainer = createElement(Task.INFO_CONTAINER, Task.INFO_CONTAINER);
  taskInfoContainer.id = task.id;
  taskInfoContainer.appendChild(leftContainer);
  taskInfoContainer.appendChild(rightContainer);

  deleteTaskAction(deleteButton);
  viewTaskAction(viewDetailsButton);
  editDetailsAction(editDetailsButton);

  return taskInfoContainer;

}

function editDetailsAction(editButton){
  editButton.addEventListener('click',function(e){
    const taskId = this.value;
    disableAllButtons(true);
  
    const task = selectedProject.getTask(taskId);
    const uiContainer = getParentElement(taskId);
    uiContainer.insertAdjacentElement('afterend', createTaskForm(task,Task.EDIT_FORM, Task.EDIT_FORM_HIDE));

  });
}

function deleteTaskAction(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    const taskId = this.value;
    deleteTask(selectedProject, taskId);
    document.getElementById(taskId).remove();
    const viewTaskForm = document.getElementsByClassName(Task.VIEW_FORM);
    if (viewTaskForm.length > 0){
      viewTaskForm[0].remove();
      disableAllButtons(false);
    }
  });
}

function viewTaskAction(viewDetailsButton) {
  viewDetailsButton.addEventListener('click', function (e) {
    disableAllButtons(true);
    const taskId = this.value;
    const viewForm = createElement(Task.VIEW_FORM, Task.VIEW_FORM);
    const task = selectedProject.getTask(taskId);
    const title = createElement('span', Task.INPUT, task.title);
    const description = createElement('span', Task.INPUT, task.description);
    const dueDate = createElement('span', Task.INPUT, transformDateToInputView(task.dueDate));
    const priority = createElement('span', Task.INPUT, showTaskPriorityValue(task.priority));
    const closeButton = createButton(Task.BUTTON_FORM, 'Close', 'button');
    const buttonContainer = createElement(Task.BUTTON_CONTAINER, Task.BUTTON_CONTAINER);
    buttonContainer.appendChild(closeButton);

    viewForm.appendChild(title);
    viewForm.appendChild(description);
    viewForm.appendChild(dueDate);
    viewForm.appendChild(priority);
    viewForm.appendChild(buttonContainer);

    const uiContainer = getParentElement(taskId);
    uiContainer.insertAdjacentElement('afterend', viewForm);

    closeButtonAction(closeButton, Task.VIEW_FORM);
 
  });

}

function showTaskPriorityValue(priority){
  switch (priority) {
    case '1':
      return 'Low';
    case '2':
      return 'Normal';
    case '3':
      return 'High';
    default:
      return 'No priority';
  }
}

function closeButtonAction(closeButton,classNameModule){
  closeButton.addEventListener('click', () => {
    const viewTaskForm = document.getElementsByClassName(classNameModule)[0];
    viewTaskForm.remove();
    disableAllButtons(false);
  })

}

function disableAllButtons(flag){
  disableAllClassButtons(flag, Task.VIEW_INFO);
  disableAllClassButtons(flag, Task.EDIT_INFO);
  document.getElementsByClassName(Task.CREATE_BUTTON)[0].disabled = flag;
}

function disableAllClassButtons(flag,className) {
  const buttons = document.getElementsByClassName(className);
  for (let button of buttons) {
    button.disabled = flag;
  }
}

function getParentElement(taskId) {
  const element = document.getElementById(taskId);
  return element != null ?
    element : document.getElementsByClassName(Task.INFO_CONTAINER)[0];
}

function resetTaskFormFields() {
  if (typeof document.getElementsByClassName(Task.FORM) !== "undefined") {
    let inputFields = document.getElementsByClassName(Task.INPUT);
    resetInputValue(inputFields[0], PLACE_HOLDER_TITLE);
    resetInputValue(inputFields[1], PLACE_HOLDER_DESCRIPTION);
    resetInputValue(inputFields[2], PLACE_HOLDER_DUE_DATE);
    inputFields[2].type = '';
    const selectElement = document.getElementsByClassName(Task.PRIORITY_SELECT)[0];
    selectElement.value = selectElement.firstChild.value;
  }
}

function resetInputValue(inputField, placeHolderValue) {
  inputField.value = '';
  inputField.placeholder = placeHolderValue;
}

function enableAddTaskButton() {
  const addTaskButton = document.getElementsByClassName(Task.CREATE_BUTTON)[0];
  addTaskButton.disabled = false;
}

export { createTaskForm, drawTask, resetTaskFormFields, disableAllButtons };