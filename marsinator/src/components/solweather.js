import React from "react";

const SolWeather = ({ newInfo }) => {
  return (
    <div>
      <table className="numberstable">
        <tbody>
          <tr>
            <td>Sol: {newInfo.sol}</td>
          </tr>
          <tr>
            <td>Min temp: {newInfo.min_temp}</td>
          </tr>
          <tr>
            <td>Max temp: {newInfo.max_temp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SolWeather;
