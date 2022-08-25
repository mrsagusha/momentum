const weatherIcon: Element = document.querySelector('.weather-icon');
const temperature: Element = document.querySelector('.temperature');
const weatherDescription: Element = document.querySelector('.weather-description');
const wind: Element = document.querySelector('.wind');
const humidity: Element = document.querySelector('.humidity');

async function getWeather(input: HTMLInputElement): Promise<void> {
  try {
    let url: string | null = null;
    if (window.localStorage.getItem('language') === 'en') {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=en&appid=b6d2dfe6b6514321dc225617256b0b17&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=ru&appid=b6d2dfe6b6514321dc225617256b0b17&units=metric`;
    }
    const res: Response = await fetch(url);
    const data = await res.json();

    if (window.localStorage.getItem('language') === 'en') {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity} %`;
    } else {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Скорость ветра: ${data.wind.speed} м/с`;
      humidity.textContent = `Влажность: ${data.main.humidity} %`;
    }
  } catch {
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    document.querySelector('.weather-error').textContent = ('The weather cannot be displayed :( The city is not correct.');
  }
}

export default getWeather;
