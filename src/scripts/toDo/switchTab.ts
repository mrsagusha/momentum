/* eslint-disable import/no-mutable-exports */
const tasksTab: HTMLElement | null = document.querySelector('.tasks-tab');
const doneTab: HTMLElement | null = document.querySelector('.done-tab');
let isSwitched: boolean = false;
const tasksToDo: HTMLElement | null = document.querySelector('.todo-tasks');
const tasksDone: HTMLElement | null = document.querySelector('.todo-tasks-done');
const toDoInput: HTMLInputElement = document.querySelector('.todo-input');

const switchTab = (): void => {
  doneTab.addEventListener('click', (): void => {
    if (!isSwitched) {
      doneTab.style.backgroundColor = 'transparent';
      tasksTab.style.backgroundColor = 'rgba(37, 37, 37, 0.5)';
      tasksToDo.style.display = 'none';
      tasksDone.style.display = 'block';
      toDoInput.setAttribute('disabled', 'disabled');
      isSwitched = true;
    }
  });
  tasksTab.addEventListener('click', (): void => {
    if (isSwitched) {
      doneTab.style.backgroundColor = 'rgba(37, 37, 37, 0.5)';
      tasksTab.style.backgroundColor = 'transparent';
      tasksToDo.style.display = 'block';
      tasksDone.style.display = 'none';
      toDoInput.removeAttribute('disabled');
      isSwitched = false;
    }
  });
};

export { switchTab, isSwitched, tasksDone };
