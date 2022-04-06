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
    request
      .getAll()
      .then(response => {
        console.log("promise fulfilled");
        setNewInfo(response);
        setNewRender(true);
      });
  }, []);

  if (newRender === true) {
    const finaldata = newInfo.sols.filter(
      (days) => days.max_temp !== "--" && days.min_temp !== "--" && days.sol !== newInfo.sols[6].sol
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
        <div className="vertical"></div>
        <div className="curiositywrapper">
        <div className="curiosity">PERSEVERANCE
        <div className="jezero">(location: Jezero Crater)</div>
        </div>
        
        <div className="centered1">
        <div className="latestweatherwrapper">
          <Latestweather info={singleweather} />
        </div>
        </div>
        <div className="centered2">
        <div className="solweatherwrapper">
          {finaldata.map((sol) => (
            <SolWeather key={sol.sol} newInfo={sol} />
          ))}
        </div>
        </div>
          
        
        </div>

        <div className="wrapper">
          
          <div className="rectangle"></div>
          <div className="circle"></div>
          <div className="season">{season.toUpperCase()}</div>
        </div>
      </div>
    );
  } else {
    return <p>ok loading.. </p>;
  }
};

export default App;
