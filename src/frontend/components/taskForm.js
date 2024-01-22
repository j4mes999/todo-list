import {createElement, createOption, createInput, createButton} from './htmlElement';
import { Task } from '../constants/uiConstants';

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
  createTaskFormContainer.appendChild(createInput(Task.INPUT, 'Due Date'));
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
  });
}

function createButtonAction(createButton){

}

export default createTaskForm;