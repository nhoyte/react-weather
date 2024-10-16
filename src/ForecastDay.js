import React from "react";
import moment from "moment";

export default function ForecastDay(props) {
  function Date() {
    let formattedDate = moment(props.data.time * 1000).format("ddd");
    return formattedDate;
  }

  return (
    <div>
      <div>{Date()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
          className="WeatherIcon"
        ></img>
      </div>
      <div>
        <span>
          <strong>{Math.round(props.data.temperature.maximum)}° </strong>
        </span>
        <span className="minTemp">
          {Math.round(props.data.temperature.minimum)}°{" "}
        </span>
      </div>
    </div>
  );
}
