import "./App.css";
import Modal from "./Modal";
import React, { useState } from "react";
import ReactModal from "react-modal";
import music from "./sleighride.mp3";

ReactModal.setAppElement("#root");

function App() {
  /*popupwindow const*/
  const [show, setShow] = useState(false);

  /*popupwindow function*/
  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  /*open popupwindow onclick*/
  const onClick = () => {
    onOpen();
  };

  return (
    <div className="App">
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
