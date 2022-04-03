import axios from "axios";
import request from "./services/requestline";
import { useState, useEffect } from "react";
import SolWeather from "./components/solweather";

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
    return (
      <div>
        <h1>{newInfo.sols[0].season}</h1>
        {newInfo.sols.map((sol) => (
          <SolWeather key={sol.sol} newInfo={sol} />
        ))}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default App;
