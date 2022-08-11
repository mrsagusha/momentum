const setTimeOfTheDay = (): void => {
  const greeting: Element | null = document.querySelector('.greeting');
  let timeOfDay: string | null = null;
  const date: Date = new Date();

  if (date.getHours() >= 5 && date.getHours() <= 12) {
    timeOfDay = 'morning';
  } else if (date.getHours() > 12 && date.getHours() <= 16) {
    timeOfDay = 'afternoon';
  } else if (date.getHours() > 16 && date.getHours() <= 23) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night';
  }

  if (greeting) greeting.textContent = `Good ${timeOfDay},`;
};

export default setTimeOfTheDay;
