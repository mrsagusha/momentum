const addButton: HTMLElement | null = document.querySelector('.fa-arrow-up');
const taskInput: HTMLInputElement | null = document.querySelector('.todo-input');
const toDoTasks: HTMLElement | null = document.querySelector('.todo-tasks');
const arrayOfDeleteButtons: HTMLElement[] = [];

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
    taskInput.value = '';
  }
}

const addTask = (): void => {
  if (addButton) {
    if (taskInput) {
      addButton.addEventListener('click', createTask);
      taskInput.addEventListener('keydown', (e): void => {
        if (e.code === 'Enter') createTask();
      });
    }
  }
};

export { addTask, arrayOfDeleteButtons };
