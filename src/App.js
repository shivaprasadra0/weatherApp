
import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import ErrorMessage from './ErrorMessage';
import fetchWeather from './api';
import './App.css';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (location) => {
    try {
      const data = await fetchWeather(location);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError('Location not found.');
    }
  };

  useEffect(() => {
    handleSearch('New York');
  }, []);

  const renderContent = () => {
    if (error) {
      return <ErrorMessage message={error} />;
    } else if (weatherData) {
      return <WeatherDisplay weatherData={weatherData} />;
    } else {
      return null;
    }
  };

  return (
    <div className="weather-app-container"> 
    <div className="weather-app">
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {renderContent()}
    </div>
    </div>
  );
}

export default WeatherApp;
