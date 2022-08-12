import showTime from './showTime';
import setBackground from './setBackground';
import './css/style.css';

const nameField: HTMLInputElement = document.querySelector('.name');
let numberOfImage = (Math.round(Math.random() * 20)).toString().padStart(2, '0');

window.addEventListener('beforeunload', () => {
  window.localStorage.setItem('name', nameField.value);
});

window.addEventListener('load', () => {
  if (localStorage.getItem('name')) {
    nameField.value = window.localStorage.getItem('name');
  }
});

document.querySelector('.slide-next').addEventListener('click', () => {
  if (numberOfImage === '20') {
    numberOfImage = '01';
    setBackground(numberOfImage);
  } else {
    numberOfImage = (+numberOfImage + 1).toString().padStart(2, '0');
    setBackground(numberOfImage);
  }
});

document.querySelector('.slide-prev').addEventListener('click', () => {
  if (numberOfImage === '01') {
    numberOfImage = '20';
    setBackground(numberOfImage);
  } else {
    numberOfImage = (+numberOfImage - 1).toString().padStart(2, '0');
    setBackground(numberOfImage);
  }
});

showTime();
setBackground(numberOfImage);
