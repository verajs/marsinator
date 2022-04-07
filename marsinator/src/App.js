import request from "./services/perseverancerequestline";
import { useState, useEffect } from "react";
import SolWeather from "./components/solweather";
import Latestweather from "./components/latestweather";
import requestc from "./services/curiosityrequestline";
import Latestweatherc from "./components/latestweatherc";

const App = () => {
  const [newInfo, setNewInfo] = useState(null);
  const [newRender, setNewRender] = useState(false);
  const [newCuriosityInfo, setNewCuriosityInfo] = useState([]);
  const [newCuriosityRender, setNewCuriosityRender] = useState(false);

  // PERSEVERANCE REQUEST
  useEffect(() => {
    console.log("effect");
    request.getAll().then((response) => {
      console.log("promise fulfilled");
      setNewInfo(response);
      setNewRender(true);
    });
  }, []);

  // CURIOSITY REQUEST
  useEffect(() => {
    console.log("curiosity!!!!");
    requestc.getAllc().then((response) => {
      console.log(response);
      for (var i = 6; i >= 0; i--) {
        newCuriosityInfo.push(response.soles[i]);
        setNewCuriosityInfo(newCuriosityInfo);
      }
      setNewCuriosityRender(true);
    });
  }, []);

  if (newCuriosityRender === true) {
    console.log(newCuriosityInfo);
  }

  // IF PERSEVERANCE REQUEST === TRUE
  if (newRender === true && newCuriosityRender === true) {
    const finaldata = newInfo.sols.filter(
      (days) =>
        days.max_temp !== "--" &&
        days.min_temp !== "--" &&
        days.sol !== newInfo.sols[6].sol
    );
    const singleweather = newInfo.sols.slice(-1).pop();

    const singleweatherc = newCuriosityInfo[6];

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

        {/* PERSEVERANCE */}
        <div className="perseverancewrapper">
          <div className="perseverance">
            PERSEVERANCE
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

        {/* CURIOSITY */}
        <div className="curiositywrapper">
          <div className="curiosity">
            CURIOSITY
            <div className="galecrater">(location: Gale Crater)</div>
            <div className="centered1">
              <div className="latestweatherwrapperc">
                <Latestweatherc info={singleweatherc} />
              </div>
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
