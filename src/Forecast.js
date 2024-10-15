import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast row">
      <div className="col">
        <div>Mon</div>
        <div>🌞</div>
        <div>
          <span>
            <strong>76° </strong>
          </span>
          <span>58°</span>
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
}
