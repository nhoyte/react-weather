import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "./Forecast.css";

export default function Forecast(props) {
  let [forecast, setForecast] = useState({ loaded: false });

  function getForecast() {
    let apiKey = "b00377005017b9aacft302b5od1aa426";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    setForecast({
      loaded: true,
      name: response.data.city,
      date: response.data.daily[0].time,
      max: Math.round(response.data.daily[0].temperature.maximum),
      min: Math.round(response.data.daily[0].temperature.minimum),
      description: response.data.daily[0].condition.description,
      iconURL: response.data.daily[0].condition.icon_url,
    });
  }

  if (forecast.loaded) {
    return (
      <div className="Forecast row">
        <div className="col">
          <div>{forecast.date}</div>
          <div>
            <img
              src={forecast.iconURL}
              alt={forecast.description}
              className="WeatherIcon"
            ></img>
          </div>
          <div>
            <span>
              <strong>{Math.round(forecast.max)}° </strong>
            </span>
            <span className="minTemp">{Math.round(forecast.min)}° </span>
          </div>
        </div>

        <div className="col">
          <div>Tues</div>
          <div>🌞</div>
          <div>
            <span>
              <strong>76° </strong>
            </span>
            <span>58°</span>
          </div>
        </div>

        <div className="col">
          <div>Wed</div>
          <div>🌞</div>
          <div>
            <span>
              <strong>76° </strong>
            </span>
            <span>58°</span>
          </div>
        </div>

        <div className="col">
          <div>Thurs</div>
          <div>🌞</div>
          <div>
            <span>
              <strong>76° </strong>
            </span>
            <span>58°</span>
          </div>
        </div>

        <div className="col">
          <div>Fri</div>
          <div>🌞</div>
          <div>
            <span>
              <strong>76° </strong>
            </span>
            <span>58°</span>
          </div>
        </div>
      </div>
    );
  } else {
    getForecast();
    return (
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
    );
  }
}
