import {createElement, createOption, createInput, createButton} from './htmlElement';
import { Task } from '../constants/uiConstants';
import { selectedProject } from '../taskpane';

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
  createButtonAction(createButtonElement);

  return createTaskFormContainer;

}

function createOptionList() {
  const prioritySelect = createElement('select', 'prioritySelect');
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

function createButtonAction(createButton){
  createButton.addEventListener('click', () => {
    const userInput = document.getElementsByClassName(Task.INPUT);
    console.log('taskForm.js selected project name: '+selectedProject.name);
    console.log('taskForm.js selected project id: '+selectedProject.id);
    console.log('taskForm.js task title '+userInput[0].value);
    console.log('taskForm.js task desc '+userInput[1].value);
    const dueDate = document.getElementById(Task.DUE_DATE_ID).value;
    console.log('taskForm.js due date '+dueDate);


  });
  
}

export default createTaskForm;