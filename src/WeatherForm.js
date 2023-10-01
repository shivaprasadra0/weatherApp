import React, { useState } from 'react';
import './App.css';
function WeatherForm({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="search-button">Get Weather
      <span className="shine"></span></button>
    </form>
  );
}

export default WeatherForm;
