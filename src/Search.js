import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import WeatherData from "./WeatherData";

import "./Search.css";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function formSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function searchCity() {
    if (city) {
      let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(url).then(handleResponse);
    } else {
      alert("No city entered...");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={formSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for City..."
                onChange={updateCity}
                className="w-100 SearchBox"
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
        <WeatherData data={weather} />
      </div>
    );
  } else {
    searchCity();
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
        <div className="Loading">
          Loading...
          <br />
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    );
  }
}
