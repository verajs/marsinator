import request from "./services/perseverancerequestline";
import { useState, useEffect } from "react";
import SolWeather from "./components/solweather";
import Latestweather from "./components/latestweather";
import requestc from "./services/curiosityrequestline";
import Latestweatherc from "./components/latestweatherc";
import SolWeatherc from "./components/solweatherc";
import background from "./background.png";

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
      }
      const newArr = newCuriosityInfo.slice(0, 4);
      setNewCuriosityInfo(newArr);
      console.log(newArr);
      console.log(newCuriosityInfo);
      setNewCuriosityRender(true);
    });
  }, []);

  // IF PERSEVERANCE AND CURIOSITY REQUESTS FINISHED SUCCESSFULLY
  if (newRender === true && newCuriosityRender === true) {
    const finaldata = newInfo.sols.filter(
      (days) =>
        days.max_temp !== "--" &&
        days.min_temp !== "--" &&
        days.sol !== newInfo.sols[6].sol
    );

    const realfinaldata = finaldata.splice(0, 3);
    const singleweather = newInfo.sols.slice(-1).pop();

    const singleweatherc = newCuriosityInfo[2];

    const solweatherc = newCuriosityInfo.slice(0, -1);

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
          </div>

          <div className="centeredc">
            <div className="latestweatherwrapper">
              <Latestweatherc info={singleweatherc} />
            </div>
          </div>

          <div className="centered2">
            <div className="solweatherwrapper">
              {solweatherc.map((sol) => (
                <SolWeatherc key={sol.sol} newInfo={sol} />
              ))}
            </div>
          </div>
        </div>

        <div className="wrapper">
        
          <div className="rectangle"></div>

          <div className="circle"><img className="background" src={background}/></div>


          
          <div className="season">{season.toUpperCase()}</div>
        </div>
        
      </div>
    );
  } else {
    return (
      <div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="perseverancewrapper">
          <div className="perseverance">
            PERSEVERANCE
            <div className="jezero">(location: Jezero Crater)</div>
          </div>

          <div className="centered1">
            <div className="latestweatherwrapper"></div>
          </div>
          <div className="centered2">
            <div className="solweatherwrapper"></div>
          </div>
        </div>

        {/* CURIOSITY */}
        <div className="curiositywrapper">
          <div className="curiosity">
            CURIOSITY
            <div className="galecrater">(location: Gale Crater)</div>
          </div>

          <div className="centeredc">
            <div className="latestweatherwrapper"></div>
          </div>

          <div className="centered2">
            <div className="solweatherwrapper"></div>
          </div>
        </div>

        <div className="wrapper">
          <div className="rectangle"></div>
          <div className="circle">
            <div className="elmarsinator">
              {/*
              <svg viewBox="0 0 200 800">
                <path id="curve" d="M10,55 C15,35 100,38 100,55" />
                <text width="100">
                  <textPath xlinkHref="#curve">MARSINATOR</textPath>
                </text>
              </svg>
  */}
            </div>
          </div>
          <div className="season">late</div>
        </div>
      </div>
    );
  }
};

export default App;
