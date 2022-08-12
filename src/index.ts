import showTime from './showTime';
import setBackground from './setBackground';
import getWeather from './getWeather';
import './css/owfont-regular.css';
import './css/style.css';

const nameField: HTMLInputElement = document.querySelector('.name');
let numberOfImage = (Math.round(Math.random() * 20)).toString().padStart(2, '0');
const cityInput: HTMLInputElement = document.querySelector('.city');

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
});

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

showTime();
setBackground(numberOfImage);

window.addEventListener('load', (): Promise<void> => getWeather(cityInput));

cityInput.addEventListener('change', (): Promise<void> => getWeather(cityInput));
cityInput.addEventListener('change', (): void => {
  document.querySelector('.weather-error').textContent = '';
});

if (cityInput.value.length === 0) {
  cityInput.setAttribute('placeholder', '[Enter your city]');
}
