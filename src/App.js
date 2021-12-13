import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import ReactModal from "react-modal";
import music from "./sleighride.mp3";

ReactModal.setAppElement("#root");

const apiDataHeroku =
  "https://christmasmarketshackathon.herokuapp.com/api/christmasmarkets";

function App() {
  //----------USE STATE-----------------------------------------
  const [markets, setMarkets] = useState([]);

  /*popupwindow const*/
  const [show, setShow] = useState(false);

  const [city, setCity] = useState("Aalen");
  const [filterMarkets, setFilterMarkets] = useState([]);

  //----------USE EFFECT----------------------------------------
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Modified and saved data into useState: ");
    const visibleMarkets = markets.filter(
      (market) => market.market_location === city
    );
    setFilterMarkets(visibleMarkets);
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

  /*popupwindow function*/
  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  /*open popupwindow onclick*/
  const onClick = () => {
    getData();
    onOpen();
  };

  /*setting places*/
  const handleChange = (el) => {
    setCity(el.target.value);
  };

  //----------RETURN-------------------------------------------
  console.log(city);
  return (
    <div className="App">
      <div className="audio">
        <audio controls loop /*autoPlay*/ className="musicplayer">
          <source src={music} type="audio/mp3" />
        </audio>
      </div>
      <div className="description">
        <h1>White Christmas</h1>
        <h3>Find the perfect Christmas Market for you</h3>
      </div>
      <form action="/action_page.php">
        <label for="places">Select Location</label>
        <select id="place" name="place" onChange={handleChange}>
          <option value="Aalen">Aalen</option>
          <option value="Kippenheim">Kippenheim</option>
          <option value="Ludwigsburg">Ludwigsburg</option>
          <option value="Bad Mergentheim">Bad Mergentheim</option>
          <option value="Ulm">Ulm</option>
          <option value="Calw">Calw</option>
          <option value="Donzdorf">Donzdorf</option>
          <option value="Esslingen">Esslingen</option>
          <option value="Friedrichshafen">Friedrichshafen</option>
          <option value="Gerolstein">Gerolstein</option>
        </select>
        {/* <input type="submit" /> */}
      </form>
      <button className="generatebtn" onClick={() => onClick()}>
        Generate
      </button>
      <Modal show={show} onClose={onClose} markets={filterMarkets} />
    </div>
  );
}

export default App;
