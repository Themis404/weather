import axios from 'axios';

export function getWeather(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather', {params: {
    q: city,
    appid: '1b9c13e376b055d768f0600e5e93853e',
    units: 'metric'
  }}).then(res => res.data);
}
