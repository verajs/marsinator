import React from "react";

const Latestweather = ({ info }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="latestweathercard">
      <div className="latestsol">{`${months[info.terrestrial_date[6] - 1]}. ${
        info.terrestrial_date[8]
      }${info.terrestrial_date[9]}`}</div>

      <div className="datelatest">SOL: {info.sol}</div>

      <div className="mintemplatest">High: <span className="captemp">{info.max_temp}°C</span></div>

      <div className="maxtemplatest">Low: {info.min_temp}°C</div>
      
    </div>
  );
};

export default Latestweather;
