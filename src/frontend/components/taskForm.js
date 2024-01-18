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
  createTaskFormContainer.appendChild(inputPriority);
  createTaskFormContainer.appendChild(buttonContainer);

  cancelButtonAction(cancelButton);
  createButtonAction(createButton);

  return createTaskFormContainer;

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