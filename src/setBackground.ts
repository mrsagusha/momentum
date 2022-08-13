/* eslint-disable prefer-template */
import setTimeOfTheDay from './setTimeOfTheDay';

const setBackground = (numberOfImage: string): void => {
  const timeOfDay: string = setTimeOfTheDay();
  const body = document.querySelector('body');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numberOfImage}.jpg`;
  img.addEventListener('load', (): void => {
    body.style.backgroundImage = `url(${img.src})`;
  });
};

export default setBackground;
