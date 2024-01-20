import {createElement, createOption, createInput, createButton} from './htmlElement';
import { Task } from '../constants/uiConstants';

function createTaskForm(){
  const createTaskFormContainer = createElement(Task.Form, Task.Form);
  const prioritySelect = createOptionList();
  const createButtonElement = createButton(Task.ButtonForm, 'Create', 'submit');
  const cancelButtonElement = createButton(Task.ButtonForm, 'Cancel', null);
  const buttonContainer = createElement(Task.ButtonContainer, Task.ButtonContainer);
  buttonContainer.appendChild(createButtonElement);
  buttonContainer.appendChild(cancelButtonElement);

  createTaskFormContainer.appendChild(createInput(Task.Input, 'Enter Title'));
  createTaskFormContainer.appendChild(createInput(Task.Input, 'Enter Description'));
  createTaskFormContainer.appendChild(createInput(Task.Input, 'Due Date'));
  createTaskFormContainer.appendChild(prioritySelect);
  createTaskFormContainer.appendChild(buttonContainer);

  cancelButtonAction(cancelButtonElement);
  createButtonAction(createButtonElement);

  return createTaskFormContainer;

}

function createOptionList() {
  const prioritySelect = createElement('select', 'prioritySelect', null);
  prioritySelect.appendChild(createOption('optionFirst', 0, 'Select Priority'));
  prioritySelect.appendChild(createOption('option', 1, 'Low'));
  prioritySelect.appendChild(createOption('option', 2, 'Normal'));
  prioritySelect.appendChild(createOption('option', 3, 'High'));
  return prioritySelect;
}

function cancelButtonAction(cancelButton){
  cancelButton.addEventListener('click', () => {
    const createTaskForm = document.getElementsByClassName('createTaskForm')[0];
    createTaskForm.classList.toggle('createTaskFormHide');
    
    const addTaskButton = document.getElementsByClassName('createTaskButton')[0];
    addTaskButton.disabled = false;
  });
}

function createButtonAction(createButton){

}

export default createTaskForm;