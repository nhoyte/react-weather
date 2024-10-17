import React, { useState, useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  useEffect(
    () => {
      setLoaded(false); //variable to change; changing loaded to 'false' causes API to make a new call
    }, //when below changes
    [props.city] //variable that changes
  );

  function getForecast() {
    let apiKey = "b00377005017b9aacft302b5od1aa426";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    if (response) {
      setLoaded(true);
      setForecast(response.data.daily);
    } else {
      <div>Loading...</div>;
    }
  }

  if (loaded) {
    return (
      <div className="Forecast row">
        {forecast.map(function (day, index) {
          if (0 < index && index < 6) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
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
