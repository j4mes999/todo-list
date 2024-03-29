import createTaskIcon from './media/plusSignWhite.svg'
import { createTaskForm, disableAllButtons, drawTask, resetTaskFormFields } from './components/taskForm';
import { createButton, createElement, createImage } from './components/htmlElement';
import { Task } from './constants/uiConstants';

let selectedProject = null;

function createTaskPane() {

  const taskPane = createElement(Task.PANE, Task.PANE);

  const addTaskButton = createButton(Task.CREATE_BUTTON, null, 'button');
  addTaskButton.appendChild(createImage(Task.CREATE_ICON, createTaskIcon));
  addTaskButton.appendChild(createElement(Task.ADD_LABEL, Task.ADD_LABEL, 'Add Task'));

  taskPane.appendChild(addTaskButton);

  addTaskButtonAction(addTaskButton, taskPane);

  return taskPane;
}

function refreshTaskPane(project) {

  const taskPane = document.getElementsByClassName(Task.PANE)[0];
  const projectInfo = document.getElementsByClassName(Task.PROJECT_INFO);
  if (projectInfo.length > 0) {
    projectInfo[0].remove();
  }
  const innerValue = `Project ${project.name} details:`
  taskPane.insertBefore(createElement(Task.PROJECT_INFO, Task.PROJECT_INFO, innerValue), taskPane.firstChild);
  selectedProject = project;
  removePreviousTasks(taskPane);
  drawTasksFromProject(project);
}

function removePreviousTasks(taskPane) {
  const tasks = document.getElementsByClassName(Task.INFO_CONTAINER);
  if (tasks.length > 0) {
    Array.from(tasks).forEach((task) => {
      taskPane.removeChild(task);
    });
  }
}

function drawTasksFromProject(project) {
  const taskPane = document.getElementsByClassName(Task.PANE)[0];
  let node = document.getElementsByClassName(Task.FORM)[0];
  if (typeof node === "undefined") {
    node = document.getElementsByClassName(Task.CREATE_BUTTON)[0];
  }
  project.getTasks().forEach(task => {
    taskPane.insertBefore(drawTask(task), node);
  });

}

function addTaskButtonAction(addTaskButton, taskPane) {
  addTaskButton.addEventListener('click', () => {
    const taskForm = document.getElementsByClassName(Task.FORM);
    if (taskForm.length == 0) {
      taskPane.insertBefore(createTaskForm(null,Task.FORM, Task.FORM_HIDE), addTaskButton);
      document.getElementsByClassName(Task.FORM)[0].firstChild.focus();
    } else {
      taskForm[0].classList.toggle(Task.FORM_HIDE);
      resetTaskFormFields();
    }

    addTaskButton.disabled = 'true';
    disableAllButtons(true);
  });
}

export { createTaskPane, refreshTaskPane, selectedProject };