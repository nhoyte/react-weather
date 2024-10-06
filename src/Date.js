import React from "react";

export default function Date(props) {
  let date = props.date;
  date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(date);
  console.log(date);

  return <div>{date}</div>;
}
