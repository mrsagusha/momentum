/* eslint-disable prefer-destructuring */
import rus from '../data/rus.json';
import en from '../data/en.json';
import showDate from '../scripts/timeAndDate/showDate';
import { changeQuote } from '../scripts/setQuote';
import getWeather from '../scripts/getWeather';
import showTime from '../scripts/timeAndDate/showTime';

const cityInput: HTMLInputElement | null = document.querySelector('.city');
const btn: HTMLElement | null = document.querySelector('.fa-language');
const toDoTasksTitle: HTMLElement | null = document.querySelector('.tasks-tab__text');
const toDoDoneTasksTitle: HTMLElement | null = document.querySelector('.done-tab__text');

const changeLanguage = (): void => {
  if (btn) {
    btn.addEventListener('click', () => {
      if (window.localStorage.getItem('language') === 'en') {
        window.localStorage.setItem('language', 'rus');
        document.querySelector('.city')?.setAttribute('placeholder', `${rus[0].weather}`);
        document.querySelector('.name')?.setAttribute('placeholder', `${rus[0].greeting}`);
        toDoTasksTitle.textContent = rus[0].toDoTabs[0];
        toDoDoneTasksTitle.textContent = rus[0].toDoTabs[1];
        document.querySelector('.todo-input')?.setAttribute('placeholder', `${rus[0].toDoInput}`);
        showDate();
        changeQuote();
        if (cityInput) getWeather(cityInput);
        showTime();
      } else {
        window.localStorage.setItem('language', 'en');
        document.querySelector('.city')?.setAttribute('placeholder', `${en[0].weather}`);
        document.querySelector('.name')?.setAttribute('placeholder', `${en[0].greeting}`);
        toDoTasksTitle.textContent = en[0].toDoTabs[0];
        toDoDoneTasksTitle.textContent = en[0].toDoTabs[1];
        document.querySelector('.todo-input')!.setAttribute('placeholder', `${en[0].toDoInput}`);
        showDate();
        changeQuote();
        if (cityInput) getWeather(cityInput);
        showTime();
      }
    });
  }
};

export default changeLanguage;
