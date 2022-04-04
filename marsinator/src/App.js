import axios from "axios";
import request from "./services/requestline";
import { useState, useEffect } from "react";
import SolWeather from "./components/solweather";
import Latestweather from "./components/latestweather";

const App = () => {
  const [newInfo, setNewInfo] = useState(null);
  const [newRender, setNewRender] = useState(false);
  useEffect(() => {
    console.log("effect");
    axios
      .get(
        "https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json"
      )
      .then((response) => {
        console.log("promise fulfilled");
        setNewInfo(response.data);
        setNewRender(true);
      });
  }, []);

  if (newRender === true) {
    const finaldata = newInfo.sols.filter(
      (days) => days.max_temp !== "--" && days.min_temp !== "--"
    );
    const singleweather = newInfo.sols.slice(-1).pop();

    if (newInfo.sols[0].season === "early autumm") {
      var season = "early autumn";
    } else {
      var season = newInfo.sols[0].season;
    }

    return (
      <div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <h1>{season.toUpperCase()}</h1>
        <Latestweather info={singleweather} />
        <p>separacion</p>
        {finaldata.map((sol) => (
          <SolWeather key={sol.sol} newInfo={sol} />
        ))}
        <div className="wrapper">
          <div className="rectangle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  } else {
    return <p>ok loading.. </p>;
  }
};

export default App;
