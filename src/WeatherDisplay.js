
import React from 'react';
import './App.css';

function WeatherDisplay({ weatherData }) {
  return (
    
    <div>
    <h2 className="location">Weather in {weatherData.name}, {weatherData.sys.country}</h2>
    <h3>Date : {new Date(weatherData.dt * 1000).toLocaleDateString("en-IN")}</h3>
    <h3 className="temperature">Temperature: {weatherData.main.temp}°C</h3>
    <h3 className="description">Weather: {weatherData.weather[0].description}</h3>
    </div>

  
  );
}

export default WeatherDisplay;
