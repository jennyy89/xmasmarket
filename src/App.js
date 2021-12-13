import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Market from "./components/Market";

const apiDataHeroku = "https://recipes-app-wbs.herokuapp.com/api/recipes";

function App() {
  //----------USE STATE-----------------------------------------
  const [markets, setMarkets] = useState([]);

  //----------USE EFFECT----------------------------------------
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Modified and saved data into useState: ");
  }, [markets]);

  //----------FUNCTIONS-----------------------------------------
  const getData = async () => {
    try {
      const results = await axios.get(apiDataHeroku);
      setMarkets(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  //----------RETURN-------------------------------------------
  return (
    <div className="App">
      <Market markets={markets} />
      <div>
        <img
          className="background"
          src="./xmasbackground"
          alt="xmasbackground"
        />
      </div>
      <div className="description">
        <h1>White Christmas</h1>
        <h3>Find the perfect Christmas Market for you</h3>
      </div>
      <form action="/action_page.php">
        <label for="places">Select Location</label>
        <select id="place" name="place">
          <option value="munich">Munich</option>
          <option value="berlin">Berlin</option>
        </select>
        {/* <input type="submit" /> */}
      </form>
      <button className="generatebtn">Generate</button>
    </div>
  );
}

export default App;
