const showDate = (): void => {
  const date = document.querySelector('.date');
  const currentDate = (new Date()).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  if (date) date.textContent = currentDate;
};

export default showDate;
