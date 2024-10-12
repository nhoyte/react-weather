import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  let [temp, setTemp] = useState(props.farenheit);
  let [units, setUnits] = useState("imperial");

  function setFarenheit(event) {
    event.preventDefault();
    setTemp(props.farenheit);
    setUnits("imperial");
  }

  function setCelsius(event) {
    event.preventDefault();
    setTemp(Math.round((props.farenheit - 32) / (9 / 5)));
    setUnits("metric");
  }

  if (units === "metric") {
    return (
      <span>
        <span className="col-2 Temperature">{temp}</span>
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
        <span className="col-2 Temperature">{temp}</span>
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
