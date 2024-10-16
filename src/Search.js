import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";

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
      let apiKey = "b00377005017b9aacft302b5od1aa426";
      let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
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
      name: response.data.city,
      date: new Date(response.data.time * 1000),
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      iconURL: response.data.condition.icon_url,
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
        <Forecast city={city} />
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
