import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  let [units, setUnits] = useState("imperial");

  function setFarenheit(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  function setCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }
  function ConvertCelsius() {
    return Math.round((props.temp - 32) / (9 / 5));
  }

  if (units === "metric") {
    return (
      <span>
        <span className="col-2 Temperature">{ConvertCelsius()}</span>
        <span className="col-1 Degrees">
          <span className="UnitsFarenheit">
            °
            <a href="/" onClick={setFarenheit}>
              F
            </a>
          </span>
          |<span className="UnitsCelsius Active">°C</span>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="col-2 Temperature">{props.temp}</span>
        <span className="col-2 Degrees">
          <span className="UnitsFarenheit Active">°F</span>|
          <span className="UnitsCelsius">
            °
            <a href="/" onClick={setCelsius}>
              C
            </a>
          </span>
        </span>
      </span>
    );
  }
}
