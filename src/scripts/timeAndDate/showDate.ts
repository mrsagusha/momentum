const showDate = (): void => {
  const date: Element = document.querySelector('.date');
  const currentDate: string = (new Date()).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  if (date) date.textContent = currentDate;
};

export default showDate;
