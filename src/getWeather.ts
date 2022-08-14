const weatherIcon: Element = document.querySelector('.weather-icon');
const temperature: Element = document.querySelector('.temperature');
const weatherDescription: Element = document.querySelector('.weather-description');
const wind: Element = document.querySelector('.wind');
const humidity: Element = document.querySelector('.humidity');

async function getWeather(input: HTMLInputElement): Promise<void> {
  try {
    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=ru&appid=b6d2dfe6b6514321dc225617256b0b17&units=metric`;
    const res: Response = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
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
