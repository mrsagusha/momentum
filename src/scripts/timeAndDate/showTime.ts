import setTimeOfTheDay from './setTimeOfTheDay';
import showDate from './showDate';

const showTime = (): void => {
  const time: Element = document.querySelector('.time');
  const currentTime: string = (new Date()).toLocaleTimeString();
  if (time) time.textContent = currentTime;
  showDate();
  setTimeOfTheDay();
  setTimeout(showTime, 1000);
};

export default showTime;
