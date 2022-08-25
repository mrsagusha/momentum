/* eslint-disable prefer-destructuring */
import rus from '../../data/rus.json';
import en from '../../data/en.json';

const setTimeOfTheDay = (): string => {
  const greeting: Element | null = document.querySelector('.greeting');
  let timeOfDay: string | null = null;
  const date: Date = new Date();

  if (window.localStorage.getItem('language') === 'en') {
    if (date.getHours() >= 5 && date.getHours() <= 12) {
      timeOfDay = en[0].timeOfTheDay[0];
    } else if (date.getHours() > 12 && date.getHours() <= 16) {
      timeOfDay = en[0].timeOfTheDay[1];
    } else if (date.getHours() > 16 && date.getHours() <= 23) {
      timeOfDay = en[0].timeOfTheDay[2];
    } else {
      timeOfDay = en[0].timeOfTheDay[3];
    }

    if (greeting) greeting.textContent = `Good ${timeOfDay},`;
  } else {
    if (date.getHours() >= 5 && date.getHours() <= 12) {
      timeOfDay = rus[0].timeOfTheDay[0];
    } else if (date.getHours() > 12 && date.getHours() <= 16) {
      timeOfDay = rus[0].timeOfTheDay[1];
    } else if (date.getHours() > 16 && date.getHours() <= 23) {
      timeOfDay = rus[0].timeOfTheDay[2];
    } else {
      timeOfDay = rus[0].timeOfTheDay[3];
    }

    if (greeting) {
      if (timeOfDay === rus[0].timeOfTheDay[0]) greeting.textContent = `Доброе ${timeOfDay},`;
      else if (timeOfDay === rus[0].timeOfTheDay[1]) greeting.textContent = `Добрый ${timeOfDay},`;
      else if (timeOfDay === rus[0].timeOfTheDay[2]) greeting.textContent = `Добрый ${timeOfDay},`;
      else if (timeOfDay === rus[0].timeOfTheDay[3]) greeting.textContent = `Доброй ${timeOfDay},`;
    }
  }

  return timeOfDay;
};

export default setTimeOfTheDay;
