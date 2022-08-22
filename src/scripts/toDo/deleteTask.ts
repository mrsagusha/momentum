import { arrayOfDeleteButtons } from './addTask';

function addDeletingFunctionalityForButton() {
  arrayOfDeleteButtons.forEach((el): void => {
    el.addEventListener('click', (): void => {
      el.parentNode?.parentNode?.removeChild(el.parentNode);
    });
  });
}

const deleteTask = (): void => {
  setInterval((): void => addDeletingFunctionalityForButton(), 100);
};

export default deleteTask;
