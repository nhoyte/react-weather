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
      wind: Math.round(response.data.wind.speed),
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setResponse(true);
  }

  if (response) {
    return (
      <div className="Search">
        <form onSubmit={formSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a City..."
                autoFocus={true}
                onChange={updateCity}
                className="w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="SearchButton w-100"
              />
            </div>
          </div>
        </form>
        <h3>{weather.name}</h3>
        <div className="WeatherProps">
          <div className="row">
            <div className="col-9">
              <span className="row">
                <span className="col-2 WeatherIcon">
                  <img src={weather.iconURL} alt="weather icon" />
                </span>
                <span className="col-1 Temperature">{weather.temp}</span>
                <span className="col-2 Degrees">
                  <span className="UnitsFarenheit">°F</span>|
                  <span className="UnitsCelsius">°C</span>
                </span>
                <span className="col SummaryInfo">
                  <ul>
                    <li>Precipitation: 5%</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind}mph</li>
                  </ul>
                </span>
              </span>
            </div>
            <div className="col-3 WeatherColumn">
              <h4>Weather</h4>
              <p>Thursday 8:13 pm</p>
              <p>Description: {weather.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={formSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a City..."
                autoFocus={true}
                onChange={updateCity}
                className="w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="SearchButton w-100"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
