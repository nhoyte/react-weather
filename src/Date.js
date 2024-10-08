import React from "react";
import moment from "moment";

import "./Date.css";

export default function Date(props) {
  let formattedDate = moment(props.date).format("dddd h:mm a");
  return <div className="DateTime">{formattedDate}</div>;
}
