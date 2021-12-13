import "./App.css";
import logo from "./White Christmas.png";
import Snowfall from 'react-snowfall'
function App() {
  return (
    <div className="App">
  <div style={{ height: 0, width: 0, background: 'none' }}>
    <Snowfall />
  </div>

  <div className="Container">
  <div className="description">
      <img src={logo} width="350" />
        <h3 className="ue">Find the perfect Christmas Market for you.</h3>
      </div>
      <form action="/action_page.php">
        <label for="places">Select Location:</label>
        <select id="place" name="place">
          <option value="munich">Munich</option>
          <option value="berlin">Berlin</option>
        </select>
        {/* <input type="submit" /> */}
      </form>
      <button className="generatebtn">Search</button>
  </div>
    </div>
  );
}

export default App;