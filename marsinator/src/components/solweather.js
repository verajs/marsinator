import React from "react";

const SolWeather = ({ newInfo }) => {
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
    <div className="numbersdiv">
      <table className="numberstable">
        <tbody>
          <tr>
            <td>Sol: {newInfo.sol}</td>
          </tr>
          <tr>
            <td>{`${months[newInfo.terrestrial_date[6] - 1]}. ${
              newInfo.terrestrial_date[8]
            }${newInfo.terrestrial_date[9]}`}</td>
          </tr>
          <tr>
            <td>High: {newInfo.max_temp}°C</td>
          </tr>
          <tr>
            <td>Low: {newInfo.min_temp}°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SolWeather;
