import React from "react";
import Date from "./Date";

import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h3>{props.data.name}</h3>
      <div className="WeatherProps">
        <div className="row">
          <div className="col-9">
            <span className="row">
              <span className="col-2 WeatherIcon">
                <img src={props.data.iconURL} alt="weather icon" />
              </span>
              <span className="col-1 Temperature">{props.data.temp}</span>
              <span className="col-2 Degrees">
                <span className="UnitsFarenheit">°F</span>|
                <span className="UnitsCelsius">°C</span>
              </span>
              <span className="col SummaryInfo">
                <ul>
                  <li>Feels Like: {props.data.feelsLike}°F</li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {props.data.wind}mph</li>
                </ul>
              </span>
            </span>
          </div>
          <div className="col-3 WeatherColumn">
            <h4>Weather</h4>
            <Date date={props.data.date} />
            <p className="Description text-capitalize">
              {props.data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
