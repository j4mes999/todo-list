import {createElement, createOption} from "./htmlElement";

function createTaskForm(){
  const createTaskFormContainer = document.createElement('createTaskForm');
  createTaskFormContainer.classList.add('createTaskForm');
  const inputTitle = document.createElement('input');
  inputTitle.classList.add('inputTaskData');
  inputTitle.placeholder = 'Enter Title';
  const inputDescription = document.createElement('input');
  inputDescription.classList.add('inputTaskData');
  inputDescription.placeholder = 'Enter Description';
  const inputDate = document.createElement('input');
  inputDate.classList.add('inputTaskData');
  inputDate.placeholder = 'Due Date';
  const inputPriority = document.createElement('input');
  inputPriority.classList.add('inputTaskData');
  inputPriority.placeholder = 'Enter Priority';

  const prioritySelect = createOptionList();
  //TODO refactor code below into a component that creates buttons:
  const createButton = document.createElement('button');
  createButton.classList.add('taskFormButton');
  createButton.innerHTML = 'Create';
  createButton.type = 'submit';
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('taskFormButton');
  cancelButton.innerHTML = 'Cancel';
  const buttonContainer = document.createElement('taskFormButtonContainer');
  buttonContainer.classList.add('taskFormButtonContainer');
  buttonContainer.appendChild(createButton);
  buttonContainer.appendChild(cancelButton);


  createTaskFormContainer.appendChild(inputTitle);
  createTaskFormContainer.appendChild(inputDescription);
  createTaskFormContainer.appendChild(inputDate);
  createTaskFormContainer.appendChild(prioritySelect);
  createTaskFormContainer.appendChild(buttonContainer);

  cancelButtonAction(cancelButton);
  createButtonAction(createButton);

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