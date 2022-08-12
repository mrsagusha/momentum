import setTimeOfTheDay from './setTimeOfTheDay';

const setBackground = (numberOfImage: string): void => {
  const timeOfDay: string = setTimeOfTheDay();
  const body = document.querySelector('body');

  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numberOfImage}.jpg')`;
};

export default setBackground;
