import "./App.css";

function App() {
  return (
    <div className="App">
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
