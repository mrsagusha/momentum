/* eslint-disable prefer-destructuring */
import showTime from './scripts/timeAndDate/showTime';
import setBackground from './scripts/setBackground';
import getWeather from './scripts/getWeather';
import { setQuote, changeQuote } from './scripts/setQuote';
import setAudioPlayer from './scripts/audioPlayer/setAudioPlayer';
import showTodo from './scripts/toDo/showTodo';
import { addTask } from './scripts/toDo/addTask';
import { switchTab } from './scripts/toDo/switchTab';
import showDate from './scripts/timeAndDate/showDate';
import rus from './data/rus.json';
import en from './data/en.json';
import './css/owfont-regular.css';
import './css/style.css';

const nameField: HTMLInputElement = document.querySelector('.name');
let numberOfImage: string = (Math.round(Math.random() * 20)).toString().padStart(2, '0');
const cityInput: HTMLInputElement = document.querySelector('.city');
const btn: HTMLElement | null = document.querySelector('.fa-gear');

window.addEventListener('beforeunload', (): void => {
  window.localStorage.setItem('name', nameField.value);
  window.localStorage.setItem('city', cityInput.value);
});

window.addEventListener('load', (): void => {
  if (localStorage.getItem('name')) {
    nameField.value = window.localStorage.getItem('name');
  }
  if (localStorage.getItem('city')) {
    cityInput.value = window.localStorage.getItem('city');
  }
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'en');
  }
});

changeQuote();

document.querySelector('.slide-next').addEventListener('click', (): void => {
  if (numberOfImage === '20') {
    numberOfImage = '01';
    setBackground(numberOfImage);
  } else {
    numberOfImage = (+numberOfImage + 1).toString().padStart(2, '0');
    setBackground(numberOfImage);
  }
});

document.querySelector('.slide-prev').addEventListener('click', (): void => {
  if (numberOfImage === '01') {
    numberOfImage = '20';
    setBackground(numberOfImage);
  } else {
    numberOfImage = (+numberOfImage - 1).toString().padStart(2, '0');
    setBackground(numberOfImage);
  }
});

window.addEventListener('load', (): Promise<void> => getWeather(cityInput));

cityInput.addEventListener('change', (): Promise<void> => getWeather(cityInput));
cityInput.addEventListener('change', (): void => {
  document.querySelector('.weather-error').textContent = '';
});

if (cityInput.value.length === 0) {
  cityInput.setAttribute('placeholder', '[Enter your city]');
}

showTime();
setBackground(numberOfImage);
setQuote();
setAudioPlayer();
showTodo();
addTask();
switchTab();

if (btn) {
  btn.addEventListener('click', () => {
    if (window.localStorage.getItem('language') === 'en') {
      window.localStorage.setItem('language', 'rus');
      document.querySelector('.city').setAttribute('placeholder', `${rus[0].weather}`);
      document.querySelector('.name').setAttribute('placeholder', `${rus[0].greeting}`);
      document.querySelector('.tasks-tab__text').textContent = rus[0].toDoTabs[0];
      document.querySelector('.done-tab__text').textContent = rus[0].toDoTabs[1];
      document.querySelector('.todo-input').setAttribute('placeholder', `${rus[0].toDoInput}`);
      showDate();
      changeQuote();
      getWeather(cityInput);
      showTime();
    } else {
      window.localStorage.setItem('language', 'en');
      document.querySelector('.city').setAttribute('placeholder', `${en[0].weather}`);
      document.querySelector('.name').setAttribute('placeholder', `${en[0].greeting}`);
      document.querySelector('.tasks-tab__text').textContent = en[0].toDoTabs[0];
      document.querySelector('.done-tab__text').textContent = en[0].toDoTabs[1];
      document.querySelector('.todo-input').setAttribute('placeholder', `${en[0].toDoInput}`);
      showDate();
      changeQuote();
      getWeather(cityInput);
      showTime();
    }
  });
}
