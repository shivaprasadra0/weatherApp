// src/api.js
import axios from 'axios';

const API_KEY = 'a9fb3cd1154fe31687545dca63628e79';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        cnt : 1,
        appid: API_KEY,
        units: 'metric', // Use 'imperial' for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeather;
