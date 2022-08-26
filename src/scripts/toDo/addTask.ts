/* eslint-disable max-len */
import deleteTask from './deleteTask';
import { isSwitched, tasksDone } from './switchTab';

const addButton: HTMLElement | null = document.querySelector('.fa-arrow-up');
const taskInput: HTMLInputElement | null = document.querySelector('.todo-input');
const toDoTasks: HTMLElement | null = document.querySelector('.todo-tasks');
const arrayOfDeleteButtons: HTMLElement[] = [];
const arrayofCompleteButtons: HTMLElement[] = [];

function createTask() {
  const task = document.createElement('div');
  task.classList.add('task');
  const completeButton = document.createElement('i');
  completeButton.classList.add('fa-regular');
  completeButton.classList.add('fa-circle-check');
  const taskText = document.createElement('p');
  taskText.classList.add('task-text');
  const deleteButton = document.createElement('i');
  deleteButton.classList.add('fa-regular');
  deleteButton.classList.add('fa-trash-can');
  task.append(completeButton);
  task.append(taskText);
  task.append(deleteButton);
  taskText.textContent = taskInput.value;
  if (taskInput.value) {
    toDoTasks.prepend(task);
    arrayOfDeleteButtons.push(deleteButton);
    arrayofCompleteButtons.push(completeButton);
    taskInput.value = '';
  }
  completeButton.addEventListener('click', (): void => {
    if (!isSwitched) {
      completeButton.parentElement.classList.add('hidden');
      setTimeout(() => {
        completeButton.parentNode?.parentNode?.removeChild(completeButton.parentNode);
        const currentDate = new Date();
        const taskDone = document.createElement('div');
        const taskTextDone = document.createElement('p');
        const taskDate = document.createElement('div');
        const calendar = document.createElement('i');
        const taskDateText = document.createElement('p');
        taskDone.classList.add('task-done');
        completeButton.classList.add('fa-regular');
        completeButton.classList.add('fa-circle-check');
        taskTextDone.classList.add('task-text-done');
        taskDate.classList.add('task-date');
        calendar.classList.add('fa-solid');
        calendar.classList.add('fa-calendar-check');
        taskDateText.classList.add('task-date-text');
        taskDate.append(calendar);
        taskDate.append(taskDateText);
        taskDone.append(taskDate);
        taskDone.append(completeButton);
        taskDone.append(taskTextDone);
        tasksDone.prepend(taskDone);
        taskTextDone.textContent = taskText.textContent;
        taskDateText.textContent = `${(currentDate.getDate()).toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;
      }, 300);
    }
  });
}

const addTask = (): void => {
  if (addButton) {
    if (taskInput) {
      addButton.addEventListener('click', (): void => {
        createTask();
        deleteTask();
      });
      taskInput.addEventListener('keydown', (e): void => {
        if (e.code === 'Enter') {
          createTask();
          deleteTask();
        }
      });
    }
  }
};

export { addTask, arrayOfDeleteButtons, arrayofCompleteButtons };
