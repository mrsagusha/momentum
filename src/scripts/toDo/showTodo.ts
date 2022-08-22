const toDoWrapper: HTMLElement | null = document.querySelector('.todo-wrapper');
const toDoIcon: HTMLElement | null = document.querySelector('.todo-icon');

const showTodo = (): void => {
  if (toDoIcon) {
    toDoIcon.addEventListener('click', (): void => {
      if (toDoWrapper) {
        if (!document.querySelector('.opened')) {
          toDoWrapper.classList.add('opened');
        } else {
          toDoWrapper.classList.remove('opened');
          toDoWrapper.classList.add('closed');
          setTimeout((): void => toDoWrapper.classList.remove('closed'), 320);
        }
      }
    });
  }
};

export default showTodo;
