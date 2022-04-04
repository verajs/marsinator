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
    <div>
      <table className="numberstable">
        <tbody>
          <tr>
            <td>Sol: {info.sol}</td>
          </tr>
          <tr>
            <td>{`${months[info.terrestrial_date[6] - 1]}. ${
              info.terrestrial_date[8]
            }${info.terrestrial_date[9]}`}</td>
          </tr>
          <tr>
            <td>High: {info.min_temp}°C</td>
          </tr>
          <tr>
            <td>Low: {info.max_temp}°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Latestweather;
