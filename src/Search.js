import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [response, setResponse] = useState(false);
  let [weather, setWeather] = useState({});

  function formSubmit(event) {
    event.preventDefault();
    if (city) {
      let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(url).then(displayWeather);
    } else {
      alert("No city entered...");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setWeather({
      name: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setResponse(true);
  }

  if (response) {
    return (
      <div>
        <form onSubmit={formSubmit}>
          <input
            type="search"
            placeholder="Type a City..."
            autoFocus={true}
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>
        <h3>
          Weather <mark>Summary</mark> for {weather.name}:
        </h3>
        <div className="WeatherProps">
          <ul>
            <li>Temperature: {weather.temp}°F</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}mph</li>
            <li>
              <img src={weather.iconURL} alt="weather icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={formSubmit}>
          <input
            type="search"
            placeholder="Type a City..."
            autoFocus={true}
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>
      </div>
    );
  }
}
