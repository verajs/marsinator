import React from "react";

const SolWeatherc = ({ newInfo }) => {
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
    <div className="solweathercard">
      <div className="solssol">{`${months[newInfo.terrestrial_date[6] - 1]}. ${
        newInfo.terrestrial_date[8]
      }${newInfo.terrestrial_date[9]}`}</div>

      <div className="date">SOL: {newInfo.sol}</div>

      <div className="mintemplatest">High: <span className="captemp">{newInfo.max_temp}°C</span></div>

      <div className="maxtemp">Low: {newInfo.min_temp}°C</div>
    </div>
  );
};

export default SolWeatherc;
