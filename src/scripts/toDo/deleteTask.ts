/* eslint-disable no-undef */
import { arrayOfDeleteButtons } from './addTask';

const deleteTask = (): void => {
  arrayOfDeleteButtons.forEach((el): void => {
    el.addEventListener('click', (): void => {
      el.parentElement.classList.add('hidden');
      setTimeout((): ParentNode => el.parentNode?.parentNode?.removeChild(el.parentNode), 300);
      setTimeout((): void => el.parentElement.parentElement.classList.remove('hidden'), 350);
    });
  });
};

export default deleteTask;
