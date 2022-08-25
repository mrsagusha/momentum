const showDate = (): void => {
  const date: Element = document.querySelector('.date');
  let currentDate: string | null = null;
  if (window.localStorage.getItem('language') === 'en') {
    currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  } else {
    currentDate = new Date().toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' });
  }

  if (date) date.textContent = currentDate;
};

export default showDate;
