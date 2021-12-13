import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import ReactModal from "react-modal";
import music from "./sleighride.mp3";
import Market from "./components/Market";

ReactModal.setAppElement("#root");

const apiDataHeroku =
  "https://christmasmarketshackathon.herokuapp.com/api/christmasmarkets";

function App() {
  //----------USE STATE-----------------------------------------
  const [markets, setMarkets] = useState([]);

  /*popupwindow const*/
  const [show, setShow] = useState(false);

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

  /*popupwindow function*/
  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  /*open popupwindow onclick*/
  const onClick = () => {
    onOpen();
  };

  //----------RETURN-------------------------------------------
  return (
    <div className="App">
      <Market markets={markets} />
      <div className="audio">
        <audio controls loop autoplay className="musicplayer">
          <source src={music} type="audio/mp3" />
        </audio>
        <img className="background" src="xmasbackground" alt="xmasbackground" />
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
      <button className="generatebtn" onClick={() => onClick()}>
        Generate
      </button>
      <Modal show={show} onClose={onClose} />
    </div>
  );
}

export default App;
