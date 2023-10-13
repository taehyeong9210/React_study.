import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  IoMdSunny,
  IoMdRainy,
  IoMdSnow,
  IoMdThunderstorm,
} from 'react-icons/io';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const city = 'Busan'; // 도시를 부산으로 고정
  const [expanded, setExpanded] = useState(false);
  const API_KEY = '7f3d5b244e10eec12c144979a2116ce1';

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [city]);

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return <IoMdSunny />;
      case 'Rain':
        return <IoMdRainy />;
      case 'Snow':
        return <IoMdSnow />;
      case 'Thunderstorm':
        return <IoMdThunderstorm />;
      default:
        return null;
    }
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="weather-app">
      <div
        className={`weather-card ${expanded ? 'expanded' : ''}`}
        onClick={toggleExpanded}
      >
        {expanded && weatherData.main ? (
          <div>
            <h2>
              {getWeatherIcon(weatherData.weather[0].main)} {city}의 현재 날씨
            </h2>
            <p>기온: {weatherData.main.temp}°C</p>
            <p>습도: {weatherData.main.humidity}%</p>
            <p>날씨: {weatherData.weather[0].description}</p>
          </div>
        ) : (
          <div className="icon-only">{getWeatherIcon('Clear')}</div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
