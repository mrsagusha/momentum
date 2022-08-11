import showTime from './showTime';
import './css/style.css';

const nameField: HTMLInputElement = document.querySelector('.name');

window.addEventListener('beforeunload', () => {
  window.localStorage.setItem('name', nameField.value);
});

window.addEventListener('load', () => {
  if (localStorage.getItem('name')) {
    nameField.value = window.localStorage.getItem('name');
  }
});

showTime();
